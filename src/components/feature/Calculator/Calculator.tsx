import { useState, useEffect, useRef } from "react";

import * as S from "./styled";
import FromCountry from "./FromCountry/FromCountry";
import CurrencyData from "constants/CurrencyData";
import getCurrency from "apis/Calculator/Currency";
import ToCountry from "./ToCountry/ToCountry";

const Calculator = () => {
  const [fromCountry, setFromCountry] = useState({
    country: "미국",
    unit: "달러",
  });
  const [toCountry, setToCountry] = useState({
    country: "대한민국",
    unit: "원",
  });
  const [toRate, setToRate] = useState(0);

  const [fromValue, setFromValue] = useState(1);
  const [toValue, setToValue] = useState(0);

  useEffect(() => {
    const fromAlpha = CurrencyData.filter(
      (v) => v.country === fromCountry.country
    )[0].alpha3;
    const toAlpha = CurrencyData.filter(
      (v) => v.country === toCountry.country
    )[0].alpha3;

    getCurrency(fromAlpha, toAlpha).then((res) => {
      setToRate(Number(res.result.toFixed(2)));
      setFromValue(1);
      setToValue(Number(res.result.toFixed(2)));
    });
  }, [fromCountry, toCountry]);

  const handleFromValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value;
    if (target === "") {
      setFromValue(1);
    } else {
      setFromValue(parseInt(target));
    }
    setToValue(Number((toRate * Number(target)).toFixed(2)));
  };

  const handleToValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value;
    if (target === "") {
      setToValue(fromValue * toRate);
    } else {
      setToValue(parseInt(target));
    }
    setFromValue(Number((Number(target) / toRate).toFixed(2)));
  };

  return (
    <S.Container>
      <FromCountry
        fromCountry={fromCountry}
        setFromCountry={setFromCountry}
        toRate={toRate}
        handleFromValueChange={handleFromValueChange}
        fromValue={fromValue}
        setFromValue={setFromValue}
      />
      <ToCountry
        toCountry={toCountry}
        setToCountry={setToCountry}
        toRate={toRate}
        handleToValueChange={handleToValueChange}
        toValue={toValue}
        setToValue={setToValue}
      />
    </S.Container>
  );
};

export default Calculator;
