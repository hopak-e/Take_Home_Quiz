import { useState } from "react";

import * as S from "./styled";
import { Country } from "types/country";
import DropDown from "components/shared/DropDown/DropDown";
import CurrencyData from "constants/CurrencyData";
import arrow from "assets/downArrow.png";

interface Props {
  fromCountry: Country;
  setFromCountry: React.Dispatch<React.SetStateAction<Country>>;
}

const FROM_RATE = 1;

const FromCountry = ({ ...props }: Props) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleCountryClick = () => {
    setIsToggled(!isToggled);
  };

  const handleDropDownClick = (country: string) => {
    const countryData = CurrencyData.filter((v) => v.country === country)[0];
    props.setFromCountry({
      country: countryData.country,
      unit: countryData.unit,
    });
  };

  return (
    <S.Container>
      <S.Unit>{FROM_RATE}</S.Unit>
      <S.Country onClick={handleCountryClick}>
        {props.fromCountry.country}&nbsp;&nbsp;
        {props.fromCountry.unit}&nbsp;
        <S.Img src={arrow} isToggled={isToggled} />
        {isToggled && <DropDown handleDropDownClick={handleDropDownClick} />}
      </S.Country>
    </S.Container>
  );
};

export default FromCountry;
