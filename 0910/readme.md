## 서버 컴퓨터
- 클라이언트의 요청을 응답해줄 수 있는 프로그램이 실행되어있는 컴퓨터
- 서버 컴퓨터가 다른 서버 컴퓨터의 서버를 받는다면 극 서버 컴퓨터도 클라이언트가 될 수 있다.

## 서버 접속에 필요한 것
- IP address 근데 숫자로 되있어서 불편함 -> 그래서 만든게 도메인
- 도메인이란? 숫자로 된 IP 대신 쓰이는 문자열
	IP address:port umber/index.html (이렇게 쓰면 서버에서 서비스를 받을 수 있음)
  ex)  www.naver.com:80/index.html 인데 :80/index.html을 생략 가능함.
  
## 포트 넘버란?
- 컴퓨터 네트워크에서 어떤 서비스나 애플리케이션을 지정하기 위해 사용되는 숫자
- 포트 번호는 IP 주소와 함께 사용되어, 네트워크 상의 특정 서비스를 식별한다.
    IP 주소는 "어느 컴퓨터인가?"를 나타내고
    포트 번호는 "그 컴퓨터 안의 어떤 프로그램(서비스)인가?"를 나타낸다.
    즉, IP + 포트 조합으로 정확한 대상과 서비스를 찾아간다.

# HTML 페이지 기본 구조
## HTML5 페이지의 필수 태그
- <!DOCTYPE html> : HTML5 문서임을 알리는 지시어
- <html> : HTML 문서의 루트(root) 요소
- <head> : 문서의 메타데이터(metadata)를 포함
- <title> : 문서의 제목을 정의 (브라우저 탭에 표시됨)
- <body> : 실제로 브라우저에 보여지는 콘텐츠를 포함
	
## HTML 태그 특징
	- <start tag> contents </end tag>	<= elements. tree의 요소가 된다.
	- 시작 태그 종료 태그 모두 있는 경우와 시작 태그만 있는 경우가 있다.
	- 태그 속성은 대소문자 구분이 없다
	- 속성 값에 불필요한 공백 문자는 표준에 어긋난다.

# title 속성으로 툴팁 달기
```
  <!DOCTYPE html>
 <html>
 <head>
 <meta charset="utf-8">
 <title>툴팁 달기</title></head>
 <body>
 <h1 title="h1태그로 작성하였습니다.">
 1장 홈페이지</h1>
 <h2 title="h2태그로 작성하였습니다.">
 1절 HTML 언어</h2>
 </body>
 </html>
```
# <p>로 단락 나누기
```
<!DOCTYPE html>
 <html>
 <head>
 <meta charset="utf-8">
 <title>단락 나누기</title></head>
 <body>
 <h3>2 개의 단락 나누기</h3>
 <p>
 HTML 문서도 본문을여러단락으로
나눌수있다. CSS 스타일을 사용하면
단락단위로내어쓰기와들여쓰기가가능하다.</p>
 <p>
여러개의빈칸은하나로취급되며,
엔터키역시하나의빈칸으로처리된다.</p>
 </body>
 </html>
```
# <hr> 태그로 수평선 긋기  
```
<!DOCTYPE html>
 <html>
 <head>
 <meta charset="utf-8">
 <title>수평선 긋기</title></head>
 <body>
 <h3>수평선 긋기</h3>
 <hr>
 <p>hr 태그는 horizontal에서 딴 글자입니다.</p>
 <hr>
 <p>종료 태그&lt;/hr&gt;를 사용하지 않습니다.</p>
 </body>
 </html>
```
