# 웹

##웹이란
  -웹은 웹 서버와 웹 클라이언트 컴퓨터들로 구성된다.
  -다른 여러 컴퓨터에서 문서를 주고받기 위해 이용된다.

## 웹 서버
  -웹 문서, 이미지 , 동영상 등의 데이터를 저장 관리한다.
  -웹 클라이언트의 요청을 받아 웹 문서를 전송한다.
  -웹 서버로 작동하도록 하는 소프트웨어 실행한다.

## 웹 클라이언트
  -웹 서버에 요청을 보내고, 응답을 받아서 사용자에게 보여주는 프로그램 또는 장치를 말한다.
  -사용자 인터페이스를 담당한다.
  -웹 서버에 웹 문서를 요청하고 받아서 사용자에게 출력한다.

**사용자가 요구하는 것을 웹 클라이언트가 웹 서버를 통해 문서를 요청하고
웹 클라이언트가 웹 서버에서 문서를 전달 받아 사용자에게 출력해주는 것이다.**

+ 웹 브라우저란 사용자가 인터넷을 통해 웹 페이지를 볼 수 있게 해주는 프로그램이다. 

## 웹 브라우저의 종류
  - Microsoft Edge
  - Opera
  - Firefox
  - chrome
  - Safari

# 웹 페이지의 주소

**https://www.example.com:8080/path/index.html?page=1234560&id=776**

웹 페이지의 주소에 대해서 설명하기 위한 가상의 주소이다.

- https : 프로토콜 - http, https, file, ftp, telnet, mailto, news등
- www.example.com : 서버주소 - 우베 페이지를 가진 컴퓨터의 인터넷 주소, IP 주소
- :8080 : TCP/IP포트 번호 - 서버가 브라우저로부터 접속을 기다리는 TCP/IP포트 번호.
- /pata/ : 경로명 - 웹 서버 내 웹 페이지 파일의 폴더 경로
- index.html : 파일이름 - 웹 페이지의 HTML 파일 이름
- ?page1234560&id=766 : 식별자

## URI URL URN 구분하기
### URI(Uniform Resource Identifier) 통합 자원 식별자
  - 인터넷에 있는 자원을 어디에 있는지 자원 자체를 식별하는 방식
  - https://www.example.com:8080/path/index.html?page=1234560&id=776 까지
### URL (Uniform Resource Locator) 파일 식별자
  - 네트워크 사아에서 자원이 어디 있는지 위치를 알려주는 방식
  - https://www.example.com:8080/path/index.html 까지
### URN(Uniform Resource Name) 통합 자원 이름
  - 자원에 이름을 부여하는 것이다.
  - 자원의 구체적이고 좀 더 상세한 부분을 요청 할 수 있다.
  - www.example.com:8080/path/index.html?page=1234560&id=776 까지
