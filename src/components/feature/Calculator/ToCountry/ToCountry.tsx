import { useState } from "react";

import * as S from "./styled";
import { Country } from "types/country";
import DropDown from "components/shared/DropDown/DropDown";
import CurrencyData from "constants/CurrencyData";
import arrow from "assets/downArrow.png";

interface Props {
  toCountry: Country;
  setToCountry: React.Dispatch<React.SetStateAction<Country>>;
  toRate: number;
}

const ToCountry = ({ ...props }: Props) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  const handleDropDownClick = (country: string) => {
    const countryData = CurrencyData.filter((v) => v.country === country)[0];
    props.setToCountry({
      country: countryData.country,
      unit: countryData.unit,
    });
  };

  return (
    <S.Container>
      <S.Unit>{props.toRate}</S.Unit>
      <S.Country onClick={handleClick}>
        {props.toCountry.country}&nbsp;&nbsp;
        {props.toCountry.unit}&nbsp;
        <S.Img src={arrow} isToggled={isToggled} />
        {isToggled && <DropDown handleDropDownClick={handleDropDownClick} />}
      </S.Country>
    </S.Container>
  );
};

export default ToCountry;
