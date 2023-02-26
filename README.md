# 유나엔코스_Take_Home_Quiz_박상호
# 실행 방법

```
최상단 디렉토리에 .env 파일 생성
env파일에 VITE_BASE_URL=https://api.exchangerate.host 입력
yarn install
yarn dev
```
# 사용한 라이브러리

-   React
-   styled-components
-   Axios


# 환전 계산기 만들기
- 더미 데이터를 이용하여 환전하고싶은 나라를 선택하면 해당 나라와 통화가 입력되고, From=기준 나라, To=환전 할 나라로 설정했습니다.
- From의 초기값은 1, To의 초기값은 환율 값입니다.
- ![유나엔코스 계산기](https://user-images.githubusercontent.com/97100045/221416579-c81d4fa4-1b9d-4d34-8391-dcb9dd57b925.gif)



# 디렉토리 구조
```
📦src 
 ┣ 📂apis 
 ┃ ┣ 📂Calculator 
 ┃ ┃ ┗ 📜Currency.ts 
 ┃ ┗ 📜Instance.ts 
 ┣ 📂assets
 ┃ ┗ 📜downArrow.png
 ┣ 📂components
 ┃ ┣ 📂feature
 ┃ ┃ ┗ 📂Calculator
 ┃ ┃ ┃ ┣ 📂FromCountry
 ┃ ┃ ┃ ┃ ┣ 📜FromCountry.tsx
 ┃ ┃ ┃ ┃ ┗ 📜styled.ts
 ┃ ┃ ┃ ┣ 📂ToCountry
 ┃ ┃ ┃ ┃ ┣ 📜ToCountry.tsx
 ┃ ┃ ┃ ┃ ┗ 📜styled.ts
 ┃ ┃ ┃ ┣ 📜Calculator.tsx
 ┃ ┃ ┃ ┗ 📜styled.ts
 ┃ ┗ 📂shared
 ┃ ┃ ┗ 📂DropDown
 ┃ ┃ ┃ ┣ 📜DropDown.tsx
 ┃ ┃ ┃ ┗ 📜styled.ts
 ┣ 📂constants
 ┃ ┗ 📜CurrencyData.ts
 ┣ 📂styles
 ┃ ┗ 📜GlobalStyle.tsx
 ┣ 📂types
 ┃ ┗ 📜country.ts
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┗ 📜vite-env.d.ts
 ```
# 깃 컨벤션
```
✨ feat : 기능 구현
🎨 Modify : 간단한 구조변경
💄 style : UI 변경
📝 docs : 문서/에셋 추가/수정
🎉 chore : 초기 설정
```
