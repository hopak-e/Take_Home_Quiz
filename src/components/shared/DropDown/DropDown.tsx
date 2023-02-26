import CurrencyData from "constants/CurrencyData";
import * as S from "./styled";

interface Props {
  handleDropDownClick: (country: string) => void;
}

const DropDown = ({ ...props }: Props) => {
  return (
    <S.Container>
      <S.UList>
        {CurrencyData &&
          CurrencyData.map((el) => (
            <S.List
              key={el.id}
              onClick={() => props.handleDropDownClick(el.country)}
            >
              {el.country}
            </S.List>
          ))}
      </S.UList>
    </S.Container>
  );
};

export default DropDown;
