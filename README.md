## 팀원
[양성호 , 김영길 , 임보슬]

## 배포 주소


<a href="https://gilpop8663.github.io/06_search/">배포 사이트</a>


## 💻 설치 방법

    npm install
    npm run start:dev

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

## ✍기능을 구현하기 위해 회의하였던 회의록

# <a href="https://beneficial-sandpaper-029.notion.site/fc2a3ee520da4a6499a274be2e034a56">회의록 주소</a>
 <img width="50%" src="https://user-images.githubusercontent.com/80146176/154784321-0de51e71-aae1-4fa2-a3b9-687c0c2e7d79.png">

## 📝 기능

### 일치하는 글자 수대로 나열

- 입력한 검색어를 포함하는 데이터를 나열해서 보여주는 로직.
- ex1) '키즈비타민' 입력 시 '키즈비타민'을 반드시 포함한 제품들을 출력한다.
- 키즈비타민
- 키즈 비타민A 젤리
- 키즈 비타민C+아연
- Router로 URL의 query string에서 검색어를 디코드(decodeURI) 하여 검색어를 추출한 다음, 검색어에 공백 유무를 체크한 뒤 제품 정보 객체 배열을 'reduce'함수로 검색어를 포함하는 객체만 저장한다.

### 브랜드의 제품 이후 제품 순으로 나열

- reduce()을 사용하여 브랜드의 값을 가지고 있는 요소는 앞으로 없는 요소는 뒤로 배치하게 한다.

### 브랜드와 제품 각각 검색할 수 있는 select 창

- 전체 , 제품 , 브랜드 3가지 중 선택할 수 있으며 선택한 카테고리를 state값에 저장하여 해당하는 state 마다 로직을 달리하여 원하는 정보만 얻을 수 있도록 구현하였다.

### 띄어쓰기를 할 시 가장 일치하는 검색어를 상위 검색어로 노출

- json-server를 이용하여 검색어의 데이터를 불러온 후 띄어쓰기를 한 경우의 키워드가 있는지로 배열을 정렬한다.

### json-server을 이용하여 실제 데이터를 불러오는 방식으로 구현

- json-server을 이용하여 api를 react-query를 사용하여 불러와 사용하였다.

### 검색어에 따라 html header의 title이 변경

- react-helmet을 이용하여 검색어를 title에 반영하도록 하였다.

### 검색하는 중에 자동완성 기능

- html의 datalist 태그를 사용하여 input과 연결시켜 자동완성이 되도록 하였다.
