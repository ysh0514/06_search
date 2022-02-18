## 배포 주소

<a href="https://whispering-journey-42055.herokuapp.com/">배포 사이트</a>

## 💻 설치 방법

    npm install
    npm run dev

## 📂 파일 구조

src     
 ┣ api      
 ┃ ┗ api.ts      
 ┣ assets              
 ┃ ┗ css     
 ┃ ┃ ┣ AntOverride.scss      
 ┃ ┃ ┣ App.scss     
 ┃ ┃ ┣ SearchInput.scss      
 ┃ ┃ ┗ config.scss      
 ┣ components     
 ┃ ┗ SearchInput.tsx     
 ┣ constant      
 ┃ ┗ costants.ts     
 ┣ pages             
 ┃ ┣ home     
 ┃ ┃ ┗ Home.tsx      
 ┃ ┗ search          
 ┃ ┃ ┣ Search.scss      
 ┃ ┃ ┗ Search.tsx      
 ┣ App.tsx     
 ┗ index.tsx         

## 📋개발 진행 상황 공유

<img width="400" alt="스크린샷 2022-02-12 오후 4 03 47" src="https://user-images.githubusercontent.com/80146176/153703072-7779ad79-3620-4a81-b4e4-dacb6da59c4e.png">


### 프로젝트 과정 소개

| 슬랙을 이용한 소통                                                                                                             |                                                       게더를 활용한 소통                                                       |
| :----------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------: |
| <img width="auto" src="https://user-images.githubusercontent.com/80146176/153052997-f2ca6637-40f8-4e7f-9609-f4885577706a.png"> | <img width="auto" src="https://user-images.githubusercontent.com/80146176/153053947-7be40938-62f8-4dd9-a54b-7328ea550546.png"> |
| 노션에서의 소통                                                                                                                |                                                     화면공유를 활용한 소통                                                     |
| <img width="auto" src="https://user-images.githubusercontent.com/80146176/153054588-6194940a-a76d-4fde-a164-2efb3989d6e8.png"> | <img width="auto" src="https://user-images.githubusercontent.com/80146176/153054110-d7c4169e-3824-4903-8ca5-fc4aec044055.png"> |

## 📝 기능

### 일치하는 글자 수대로 나열
- 입력한 검색어를 포함하는 데이터를 나열해서 보여주는 로직.
- ex1) 키네네즈비타민' 입력 시 '키즈비타민'을 반드시 포함한 제품들을 출력한다.
- 키즈비타민
- 키즈비타민A젤리
- 키즈비타민C+아연
- Router 로 URL의 query string에서 검색어를 디코드(decodeURI) 하여 검색어를 추출한 다음, 검색어에 공백 유무를 체크한 뒤 제품정보 객체 배열을 'reduce'함수로 검색어를 포함하는 객체만 저장한다.

