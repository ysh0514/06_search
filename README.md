## 배포 주소

<a href="https://swit-korea.herokuapp.com/">배포 사이트</a>

## 로그인 아이디/비밀번호

### 아이디 : test1 / test2 / test3 / test4
### 비밀번호 : 12345

## 💻 설치 방법

    npm install
    npm run dev

## 📂 파일 구조

src  
 ┣ assets  
 ┃ ┣ images  
 ┃ ┃ ┣ headerLogo.jpg  
 ┃ ┃ ┣ loading.gif  
 ┃ ┃ ┣ logo.svg  
 ┃ ┃ ┗ sendMessage.png  
 ┃ ┗ styles  
 ┃ ┃ ┣ ChatInputStyle.ts  
 ┃ ┃ ┣ GlobalStyle.ts  
 ┃ ┃ ┣ HeaderStyle.ts  
 ┃ ┃ ┣ LoginStyle.ts  
 ┃ ┃ ┣ MessageStyle.ts  
 ┃ ┃ ┣ ModalStyle.ts  
 ┃ ┃ ┣ Theme.ts  
 ┃ ┃ ┣ index.ts  
 ┃ ┃ ┗ styled.d.ts  
 ┣ components  
 ┃ ┣ modal  
 ┃ ┃ ┗ Modal.tsx  
 ┃ ┣ LoadingIndicator.tsx  
 ┃ ┗ index.tsx  
 ┣ hooks  
 ┃ ┣ index.tsx  
 ┃ ┣ useFetch.tsx  
 ┃ ┣ useLogin.tsx  
 ┃ ┗ useStore.tsx  
 ┣ pages  
 ┃ ┣ login  
 ┃ ┃ ┗ Login.tsx  
 ┃ ┣ messenger  
 ┃ ┃ ┣ components  
 ┃ ┃ ┃ ┣ ChatInput.tsx  
 ┃ ┃ ┃ ┣ Header.tsx  
 ┃ ┃ ┃ ┗ Message.tsx  
 ┃ ┃ ┣ containers  
 ┃ ┃ ┃ ┗ MessageContainer.tsx  
 ┃ ┃ ┗ Messenger.tsx  
 ┃ ┗ index.tsx  
 ┣ store  
 ┃ ┣ actions  
 ┃ ┃ ┣ index.tsx  
 ┃ ┃ ┗ types.tsx  
 ┃ ┣ reducers  
 ┃ ┃ ┣ authReducer.tsx  
 ┃ ┃ ┣ index.tsx  
 ┃ ┃ ┗ switReducer.tsx  
 ┃ ┗ index.tsx  
 ┣ utils  
 ┃ ┣ HttpUtil.tsx  
 ┃ ┣ ImageUtil.tsx  
 ┃ ┣ InterfaceSet.tsx  
 ┃ ┣ index.tsx  
 ┃ ┗ messagesMockData.ts  
 ┣  custom.d.ts  
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

### JSON-SERVER를 활용한 Fake Server 구현

 - /login - post  
 - /messages - get, post  
 - /users - get  
 - 각각 엔드 포인트 적용하여 mock data가 아닌 api를 통하여 데이터 전송, 수신, 업데이트 요청 
 - nodejs 서버로 CRUD 구현하여서 axios를 통하여 get,post,delete를 활용하여 유저 데이터와 글 목록을 구현하고 있습니다.

### Login

 - json-server를 활용한 배포된 endpoint로 post 요청하여 로그인
 - db에서 일치하는 데이터가 없으면 로그인 거부 및 안내 문구
 - 로그인에 성공하면 useNavigate Hook 사용하여 메인 페이지로 이동 및 Redux로 전역 상태인 유저의 정보와 로그인 상태 변경

### Header

- 좌측에는 로그인한 사용자의 이름과 프로필 이미지를 받아서 상단에 "환영합니다 이 OO 님" 과 같은 웰컴 메시지를 띄우도록 했다.
- 우측에는 사용자 프로필 이미지를 원형으로 넣어 이미지를 클릭 시 이미지 하단에 사용자의 이미지와 이름을 포함한 메뉴가 나타난다.
- 메뉴에서 Sign Out 클릭 시 로그아웃 되며, 다시 로그인 페이지로 넘어간다.

### Redux를 이용한 State 관리

- 로그인 시 dispatch로 유저의 정보를 받아 하위 컴포넌트에 유저 정보 전달
- 로그아웃 시 dispatch로 유저의 로그인 상태를 변경해 로그인 페이지로 이동하도록 구현
- Modal 상태를 true/false로 설정해 Modal 이 켜지면 true, 꺼지면 false 상태가 되어 true 상태일 때만 Modal 창이 보이도록 구현

### axios 를 이용한 request 요청

- GET/POST/DELETE method를 사용하여 메시지 조회/전송/삭제 기능 구현

### 메세지

 - 작성자가 전송한 메세지의 경우에 이름 옆에 * 문자가 출력됩니다.
 - 사용자가 \n 이나 길게 보냈을 경우 메세지에서의 출력도 동일하게 표시되도록 하였습니다.
 - redux에서 받은 정보를 통해 작성자인지 파악하여 작성자에게만 삭제 버튼이 보이도록 하였습니다.

### 텍스트 입력창

- 입력란에 입력되어 있는 텍스트를 엔터키로 전송할 수 있도록 구현.
- 전송 버튼은 입력한 텍스트가 없을 때 비활성화되며 활성화 유무에 따라 우측 전송 아이콘 색상 변경.
- 입력란은 textarea 태그를 활용하여 멀티라인으로 입력이 가능하며 shift+enter를 통해 줄바꿈이 가능합니다. 줄바꿈 된 텍스트는 서버로 전송될 때 줄바꿈 된 텍스트로 전송되어서 화면에 그대로 입력 되도록 구현.
- 보낸 날짜의 경우 yyyy-mm-dd hh:MM:ss 포맷으로 출력 됩니다. Monet 라이브러리를 사용했습니다.
- 답장하기 버튼 클릭 시 "사용자 이름\n" + "메시지 내용\n" + "(회신)\n" 문자가 입력란에 자동으로 삽입 되도록 구현.(\n 개행, 입력창에 내용이 존재할 때는 입력된 내용 앞에 입력됩니다.)

