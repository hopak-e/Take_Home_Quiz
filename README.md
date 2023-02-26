# Take_Home_Quiz
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
#깃 컨벤션
```
✨ feat : 기능 구현
🎨 Modify : 간단한 구조변경
💄 style : UI 변경
📝 docs : 문서/에셋 추가/수정
🎉 chore : 초기 설정
```
