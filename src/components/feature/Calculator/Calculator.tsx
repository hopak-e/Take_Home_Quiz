import { useState, useEffect } from "react";

import * as S from "./styled";
import FromCountry from "../FromCountry/FromCountry";
import CurrencyData from "../../../constants/CurrencyData";
import getCurrency from "../../../apis/Calculator/Currency";
import ToCountry from "../ToCountry/ToCountry";

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

  useEffect(() => {
    const fromAlpha = CurrencyData.filter(
      (v) => v.country === fromCountry.country
    )[0].alpha3;
    const toAlpha = CurrencyData.filter(
      (v) => v.country === toCountry.country
    )[0].alpha3;

    getCurrency(fromAlpha, toAlpha).then((res) =>
      setToRate(res.result.toFixed(2))
    );
  }, [fromCountry, toCountry]);

  return (
    <S.Container>
      <FromCountry fromCountry={fromCountry} setFromCountry={setFromCountry} />
      <ToCountry
        toCountry={toCountry}
        setToCountry={setToCountry}
        toRate={toRate}
      />
    </S.Container>
  );
};

export default Calculator;
