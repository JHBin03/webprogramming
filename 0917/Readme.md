# HTML5 문서 구조화와 웹 폼
## 문서의 전형적인 구조
- 페이지 번호
- 장 제목
- 소제목
- 본문 텍스트
- 문단
- 설명 섹션
- 그림

## 문서 구조화
### 문서 구조화의 이유
-  잘 구조화된 HTML은 사용자가 노력을 덜 들이고 원하는 정보를 얻게 함으로써 사용자 경험을 크게 향상시킨다.
- 사물인터넷으로 IT 장치들이 스스로 정보를 검색하는 시대이다. 즉, HTML 문서 구조화는 사람뿐만 아니라 기계도 내용을 이해할 수 있도록 정보를 조직하는 필수적인 과정이 되었다.
- 사용자가 만든 웹 페이지 가치를 극대화(탐색이 쉽도록 작성)


## 시멘틱 태그
- 문서의 구조와 의미를 전달하는 태그이다.
- `<header>`, `<section>`, `<article>`, `<main>`, `<summary>`, `<mark>`, `<time>` 등
### `<header>`
- 페이지나 섹션의 머리말을 표현
- 페이지 제목, 페이지를 소개하는 간단한 설명
### `<nav>`
- 하이퍼링크들을 모아 놓은 특별한 섹션
- 페이지 내 목차를 만드는 용도
### `<section>`
- 문서의 장 혹은 절을 구성하는 역할
- 일반 문서에 여러 장이 있듯이 웹 페이지에 여러 `<section>`가능
- 헤딩 태그(`<h1>`~`<h6>`)를 사용하여 절 혹은 섹션의 주제 기입
### `<article>`
- 본문과 연관 있지만, 독립적인 콘텐트를 담는 영역
- 혹은 보조 기사, 블로그 포스트, 댓글 등 기타 독립적인 내용
- `<article>`에 담는 내용이 많은 경우 여러`<section>` 둘 수 있음.
### `<aside>`
- 본문에서 약간 벗어난 노트나 팁
- 신문, 잡지에서 주요 기사 옆 관련 기사, 삽입 어구로 표시된 논평 등
- 페이지의 오른쪽이나 왼쪽에 주로 배치
### `<footer>`
- 꼬리말 영역, 주로 저자나 저작권 정보

## 문서모양은 구조와 별개
### 시맨틱 태그
- `<header>`, `<section>`, `<article>`, `<footer>`, `<nav>` 태그
- 위치와 색, 모양은 개발자가 CSS3를 이용하여 직접 지정해야 한다.

## 구조화된 html5 문서 작성시 CSS 속성 예시
### float : left
- 특정 요소를 일반적인 문서 흐름에서 '떠오르게(float)' 하여 왼쪽에 배치하는 역할을 합니다.
### clear : both
- float 속성을 가진 요소가 다른 요소에 영향을 주지 않도록 '정리(clear)' 해주는 역할을 한다. both 값은 왼쪽에 떠있는 요소와 오른쪽에 떠있는 요소의 영향을 모두 받지 않고, 이들 아래에 위치하도록 강제한다. 이는 레이아웃이 꼬이는 것을 방지하는 데 필수적
### background: plum;
- 요소의 배경색을 지정할 때 사용합니다. plum은 CSS에서 미리 정의된 색상 이름 중 하나.

## 기존 html문서와 html5문서 비교
### 기존 html
- `<div>`태그와 id 또는 class 속성을 사용하여 문서의 구조를 만든다.
- 코드를 처음 보는 사람이 문서 구조를 한눈에 파악하기 어렵다.
- 웹 접근성을 위한 스크린 리더나 검색 엔진 크롤러가 문서의 역할을 이해하는 데 어려움
### html5
- 시맨틱 태그를 도입하여 문서의 의미를 명확하게 한다.
- 개발자 간의 협업이 쉬워지고 유지보수가 용이해졌다.

## html5 문서 구조화 연습
### 문서를 구조화 할 때 권장 사항
- 웹 페이지 전체를 구조화 시맨틱 태그로 분할
- 웹 페이지 전체 제목과 소개는`<header>` 태그로 작성
- 본문은`<section>`으로 묶고, 
- 본문 내에 각 절이나 영역은`<article>`로작성
- 링크나 메뉴들은`<nav>` 태그로 작성
- `<header>`, `<section>`, `<article>`, `<aside>` 등에는 헤딩 태그(`<h1>`~`<h6>`)를 이용하여 제목을 붙임
- 배경 음악을 연주하는<audio> 태그는<header> 영역에 삽입
- 문서의 모양(`<header>`, `<section>`, `<article>`, `<aside>`의 배치)은 CSS3스타일 시트로 꾸미기

## 시맨틱 태그들
### 시맨틱 블록 태그
#### `<figure>`
- 책이나 보고서 등 본문에 삽입하는 사진, 차트, 삽화, 소스 코드 등을 통상적으로 '그림'으로 표현
#### `<details>`와 `<summary>`
- `<details>`는 상세 정보를 담는 시맨틱 블록 태그
- `<summary>` 태그는 `<details>`로 구성되는 블록의 제목 표현
### 시맨틱 인라인 태그
#### `<mark>`
- 중요한 텍스트임을 표시
#### `<time>`
- 텍스트의 내용이 시간임을 표시
#### `<meter>`
- 주어진 범위나 %의 데이터 량 표시
#### `<progress>`
- 작업의 진행 정도 표시

## html5에서 제거 된 태그
- `<big>`, `<center>`, `<dir>`, `<font>`, `<tt>`, `<u>`, `<xmp>`, `<acronym>`, `<applet>`, `<basefont>`, `<frame>`, `<frameset>`, `<noframes>`, `<strike>`
- 문서의 시맨틱 구조를 저해한다는 이유로 HTML5에서 제거되었다.

## 웹 폼
### 웹 폼
- 웹 페이지에서 사용자 입력을 받는 폼
- 로그인, 등록, 검색, 예약, 쇼핑 등
### 폼 요소
- 폼을 만드는 다양한 태그
- `<input>`, `<textarea>`, `<select>` 등

## 폼 작성
### 폼태그`<form>` 태그로 둘러싸는 모양
#### name 속성
- 폼의 이름 지정
#### action 속성
- 폼 데이터를 처리할 웹 서버 응용프로그램의 이름
- submit 버튼이 눌리면 브라우저는 action에 지정된 웹 서버 응용프로그램 실행 요청
- 웹 서버 응용프로그램은 Java, JSP, PHP, C/C++ 등 다양한 언어로 작성
#### method 속성
- 폼 데이터를 웹 서버로 전송하는 형식
- 대표적인 전송 방식 : GET, POST

## `<form>`태그
```
<form action="웹 서버 응용 프로그램의 URL"
      enctype="데이터의 인코딩 타입"
      method="GET|PST"
      name="폼 이름"
      target="윈도우 이름">
      . . . 여러개의 폼 요소 작성
</form>
```
- action : 폼 데이터를 처리할 웹 서버 응용프로그램 이름 URL
- entype : 폼 데이터를 웹 서버로 전송할 때 암호화 방식 지정
- ethod : 폼 데이터를 웹 서버에 전송하는 방식
- target : 웹 서버 응용프록램으로부터 전송받은 데이터를 출력할 윈도우 이름

## 네이버 검색 사례로 폼 전송 과정 이해
### 1. 네이버 사이트에 접속한다.
```
 <form name="sform"  action="https://search.naver.com/search.naver" method="get">
 <input name="query" type="text">
 <button type="submit">"검색"</button>
 </form>
```
입력 창에 "Elvis" 입력, "검색" 버튼을 누르면, 브라우저는 `<form>` 태그의 action=“https://search.naver.com/search.naver”을 참고. search.naver.com 서버에 접속하여 search.naver 응용 프로그램의 실행을 요구해야 한다는 것 확인
### 2. 입력창에‘Elvis’를 입력하고 검색버튼을 누르면 웹 서버 응용프로그램에 보낼 폼 데이터를 만든다. https://search.naver.com/search.naver?... query=Elvis ...
### 3. 브라우저는 search.naver.com에 접속. search.naver실행 요청.query=Elvis를 전달한다.
### 4. 웹 서버에서 search.naver응용 프로그램이 실행되고, 검색 결과를 브라우저에게 보낸다.
### 5. 브라우저는 검색 결과를 화면에 출력한다.

## 폼 요소의 종류
| 폼 요소 | 설명 |
|---|---|
| `<input type="text">` | 한 줄 텍스트 입력 창 |
| `<input type="password">` | 암호 입력을 위한 한 줄 텍스트 입력 창 |
| `<input type="button">` | 단순 버튼 |
| `<input type="submit">` | 웹 서버로 폼 데이터를 전송시키는 버튼 |
| `<input type="reset">` | 입력된 폼 데이터를 초기화시키는 버튼 |
| `<input type="image">` | 이미지 버튼 |
| `<input type="checkbox|radio">` | 체크박스와 라디오버튼 |
| `<select>` | 드롭다운 리스트를 가진 콤보박스 |
| `<input type="month|week|date|time|datetime-local">` | 년, 월, 일, 시간 등의 시간 정보 입력 창 |
| `<input type="number|range">` | 스핀 버튼과 슬라이더바로 편리한 숫자 입력 창 |
| `<input type="color">` | 색 입력을 쉽게 하는 컬러 다이얼로그 |
| `<input type="email|url|tel|search">` | 이메일, URL, 전화번호, 검색키워드 등 형식 검사 기능을 가진 텍스트 입력 창 |
| `<input type="file">` | 로컬 컴퓨터의 파일을 선택하는 폼 요소 |
| `<button type="button|reset|submit">` | 단순 버튼, reset, submit 버튼 |
| `<textarea>` | 여러 줄의 텍스트 입력 창 |

## 텍스트 입력
### `<input type="text">`
- 한 줄 짜리 입력 창
### `<input type="password">`
- 암호 입력 창
### `<textarea>`
- 여러 줄 입력 창

## 데이터 목록을 가진 텍스트 입력 창, `<datalist>`
### 목록 리스트를 작성하는 태그
- `<option>` 태그로 항목 하나 표현
### `<input type=“text”>`에 입력 가능한 데이터 목록 제고

## 텍스트/ 이미지 버튼 만들기
### `<input type=“button|reset|submit|image” value=“버튼의 문자열”>`
### `<button type=“button|reset|submit”>`버튼의 문자열`</button>`

## 선택형 입력 : 체크박스와 라디오버튼
### `<input type="checkbox">`
- 체크박스 만들기
- 여러개 선택 가능
### `<input type=“radio”>`
- 라디오버튼 만들기
- name 속성 값이 같은 라디오버튼들이 하나의 그룹 형성

## 선택형 입력 : 콤보 박스
### `<select>`
- 드롭다운 리스트에 목록 출력, 목록을 선택하는 입력 방식 (<option> 태그로 항목 하나 표현)

## `<label>`로 폼 요소의 캡션 만들기
### 캡션과 폼을 한 단위로 묶을 때 쓴다.
- 캡션 텍스트를 명료하게 하는 장점

## 선택형 요소의 캡션을 `<label>`로 감싸기
### 선택형 요소에 `<label>` 태그 사용
- 캡션 텍스트나 이미지를 선택해도 폼 요소를 선택한 것으로 처리

## html에서의 색 표현
### 색 코드 - #rrggbb
- 16진수로 표기
### `<input type="color" value="#00ff00">`
- 컬러 다이얼로그 출력, 사용자로부터 색 선택

## 시간 정보 입력 폼 요소
### `<input type="month|week|date|time|datetime-local">`
- 시간 정보만 입력 가능한 폼 요소

## 스핀버튼과 슬라이드 바로 편리한 숫자 
### `<input type=“number”>`
- 스핀버튼으로 정교한 값 입력
```
<input type="number" min="0.0" max="10.0" 
step= "0.5">
``` spin 버튼 클릭 시 0.0~ 10.0 사이에서 0.5씩 증감
### `<input type=“range”>`
- 슬라이드 바로 대략적인 값 입력
```
<input type="range" min="0" max="100" 
list="temperatures">
 <datalist id="temperatures">
 <option value="10" label="Low">
 <option value="50" label="Medium">
 <option value="90" label="High">
 </datalist>
``` 슬라이드 바를 움직여 0 ~ 100 사이의 값 입력

## 입력할 정보의 힌트 보여주기
- placeholder 속성에 사용자가 입력할 데이터 힌트 주기
```
이메일주소: 
<input type="email" placeholder="id@host">
```

## 형식을 가진 텍스트 입력
### `<input type="email">`, email 주소 입력
### `<input type="url">`, URL 입력
### `<input type=“tel”>`, 전화번호 입력
### 검색어입력, `<input type="search">`
