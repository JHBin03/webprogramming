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
# &lt;p&gt;로 단락 나누기
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
# &lt;hr&gt; 태그로 수평선 긋기  
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
# &lt;br&gt;태그로 새로운 줄로 넘어가기
```
 <!DOCTYPE html>
 <html>
 <head>
 <meta charset="utf-8">
 <title>새로운 줄 넘어가기</title>
 </head>
 <body>
 <h3>새로운 줄 넘어가기</h3>
 <hr>
 &lt;br&gt; 태그로 다음 줄로 넘어갑니다.<br>
 2 개의 &lt;br&gt; 태그로 두 번 넘어 갑니다.<br><br>
잘보이나요? 
</body>
 </html>
```
# 문자, 기호, 심볼 입력
- 기호로 여백 표시한 것 - white characters(blank, tab, newline)
  여러번의 탭 스페이스바 엔터를 써도 하나의 빈칸으로 표현됨.
  여러 여백을 만들려면 &nbsp;를 사용. (한 번 쓸 때마다 빈칸 1개)
- HTML5의 문자 : 유니코드 문자셋, UTF-8코드 체계
# &lt;pre&gt;태그 개발자의 포맷 그대로 출력
```
<!DOCTYPE html>
 <html>
 <head>
 <meta charset="utf-8">
 <title>개발자의 포맷 그대로 출력</title></head>
 <body>
 <h3>개발자의 포맷그대로출력하기</h3>
 <hr>
 <p>
 &lt;p&gt; 태그를 사용하면
           여러 개의 빈 칸은 하나로, 
            여러 줄은 한 줄에 붙여 출력됩니다.</p>
 <hr>
 <pre>
그러나&lt;pre&gt; 태그를 사용하면
            사용자가입력한
            그대로출력됩니다.
 </pre>
 </body>
 </html>
```
# 텍스트 꾸미기
## HTML 텍스트 꾸미기 태그 정리
| 태그 | 의미 / 이름 | 설명 |
|------|--------------|------|
| `<b>` | Bold (굵게) | 텍스트를 굵게 표시 (의미 없음, 시각적 효과만) |
| `<strong>` | Strong Emphasis | 의미적으로 중요한 텍스트를 굵게 표시 |
| `<i>` | Italic (기울임) | 텍스트를 기울여 표시 (의미 없음, 시각적 효과만) |
| `<em>` | Emphasis | 의미적으로 강조된 텍스트를 기울여 표시 |
| `<u>` | Underline (밑줄) | 텍스트에 밑줄을 긋습니다 |
| `<mark>` | Highlight | 텍스트를 형광펜처럼 강조 (노란색 배경) |
| `<small>` | Small Text | 텍스트를 작게 표시 |
| `<sub>` | Subscript | 아래 첨자 텍스트 |
| `<sup>` | Superscript | 위 첨자 텍스트 |
| `<del>` | Deleted Text | 삭제된 텍스트처럼 취소선 표시 |
| `<ins>` | Inserted Text | 추가된 텍스트처럼 밑줄로 표시 |
# 블록 태그와 인라인 태그
## 태그 : 블록 태그와 인라인 태그로 구분.
## 블록 태그
- 항상 새 라인에서 시작하여 출력
- 양 옆에 다른 콘텐트를 배치하지 않고 한 라인 독점 사용
- 가장 많이 사용되는 블록 태그 : <div>
## 인라인 태그
- 블록속에삽입되어블록의일부로출력
- 가장많이사용된인라인태그: <span>

## &lt;div&gt; 블록과 &lt;span&gt; 인라인
```
<!DOCTYPE html>
 <html>
 <head>
 <meta charset="utf-8">
 <title>&lt;div&gt;블록과&lt;span&gt;인라인</title>
 </head>
 <body>
 <h3>사랑</h3>
 <hr>
 <div style="background-color:skyblue; padding:20px;">
내가사람의방언과천사의말을할지라도
<span style="color:red">사랑</span>이없으면
소리나는구리와울리는꽹과리가되고,
 <span style="color:red">사랑</span>이없으면아무
것도아니라.
 </div>
 <p>
 ~우리서로사랑하며살아요~
 </p>
 </body>
 </html>
```
## Block Element
- HTML 요소 중에서 기본적으로 새로운 줄(라인)을 차지하며, 화면 전체 너비(부모 요소의 가로 공간)를 차지하는 요소
- 자기 자신이 줄 바꿈을 만들고, 세로 방향으로 쌓인다(stack)**는 특징

# class와 id 태그
## class
- 여러 요소에 같은 class를 지정할 수 있어 그룹으로 묶을 때 좋음.
- 중복 가능, 여러 요소에 공통 스타일 적용 시 주로 사용
## id
- 문서 내에서 하나만 존재해야 하는 고유한 식별자.
- 중복 불가, 특정한 단 하나의 요소를 식별할 때 사용
# 메타 데이터
## 데이터를 설명하는 데이터
- 사진데이터의메타데이터: 사진찍은장소, 시간
- 오디오데이터: 재생시간, 채널수
- 이미지데이터: 이미지의폭, 높이, 컬러해상도
## HTML 페이지에 대한 메타데이터를담기위한태그들
- <base>, <link>, <script>, <style>, <title>, <meta>
- 메타 태그들은 head 태그 안에 작성 해야한다.(script는 body 내에도 작성 가능)
# 이미지 삽입
## &lt;img&gt; 태그의 src 속성에 이미지 파일의 주소지정
- src에 지정 할 수 있는 이미지 종류로는 BMP, GIF, PNG, JPG(JPEG), animated-GIF가 있다.

# HTML 용어 설명 태그: `<dl>`, `<dt>`, `<dd>`
| 태그 | 이름 | 역할 / 설명 |
|-------|------|-------------|
| `<dl>` | Definition List (정의 목록) | 용어와 그 정의를 묶는 전체 리스트 컨테이너 |
| `<dt>` | Definition Term (정의할 용어) | 정의할 용어 또는 항목 제목 |
| `<dd>` | Definition Description (정의 설명) | `<dt>`에 대한 설명이나 정의 내용 |
# `<table>` 태그로 표 만들기
## 표 만드는데 사용되는 태그들
| 태그       | 이름            | 역할 / 설명                          |
|------------|-----------------|------------------------------------|
| `<table>`  | Table           | 표 전체를 감싸는 컨테이너 태그     |
| `<caption>`| Caption         | 표 제목 또는 설명                   |
| `<thead>`  | Table Head      | 표의 헤더 영역(열 제목 등)          |
| `<tbody>`  | Table Body      | 표의 본문 영역                      |
| `<tfoot>`  | Table Footer    | 표의 바닥글 영역(합계 등)           |
| `<tr>`     | Table Row       | 표의 행(row)                       |
| `<th>`     | Table Header    | 표의 헤더 셀(주로 굵은 글씨, 가운데 정렬) |
| `<td>`     | Table Data      | 표의 일반 데이터 셀                |

# 하이퍼링크 만들기 `<a>`태그
```
<html>
<body>
<hr>
 <p>
 &lt;p&gt; 태그를 사용하면
           여러 개의 빈 칸은 하나로, 
            여러 줄은 한 줄에 붙여 출력됩니다.</p>
 <hr>
 <pre>
그러나&lt;pre&gt; 태그를 사용하면
            사용자가입력한
            그대로출력됩니다.
 </pre>
 </body>
 </html>
```
# 텍스트 꾸미기
## HTML 텍스트 꾸미기 태그 정리
| 태그 | 의미 / 이름 | 설명 |
|------|--------------|------|
| `<b>` | Bold (굵게) | 텍스트를 굵게 표시 (의미 없음, 시각적 효과만) |
| `<strong>` | Strong Emphasis | 의미적으로 중요한 텍스트를 굵게 표시 |
| `<i>` | Italic (기울임) | 텍스트를 기울여 표시 (의미 없음, 시각적 효과만) |
| `<em>` | Emphasis | 의미적으로 강조된 텍스트를 기울여 표시 |
| `<u>` | Underline (밑줄) | 텍스트에 밑줄을 긋습니다 |
| `<mark>` | Highlight | 텍스트를 형광펜처럼 강조 (노란색 배경) |
| `<small>` | Small Text | 텍스트를 작게 표시 |
| `<sub>` | Subscript | 아래 첨자 텍스트 (예: H<sub>2</sub>O) |
| `<sup>` | Superscript | 위 첨자 텍스트 (예: E = mc<sup>2</sup>) |
| `<del>` | Deleted Text | 삭제된 텍스트처럼 취소선 표시 |
| `<ins>` | Inserted Text | 추가된 텍스트처럼 밑줄로 표시 |
# 블록 태그와 인라인 태그
## 태그 : 블록 태그와 인라인 태그로 구분.
## 블록 태그
- 항상 새 라인에서 시작하여 출력
- 양 옆에 다른 콘텐트를 배치하지 않고 한 라인 독점 사용
- 가장 많이 사용되는 블록 태그 : <div>
## 인라인 태그
- 블록속에 삽입되어 블록의 일부로 출력
- 가장 많이 사용된 인라인 태그: <span>

## &lt;div&gt; 블록과 &lt;span&gt; 인라인
```
<!DOCTYPE html>
 <html>
 <head>
 <meta charset="utf-8">
 <title>&lt;div&gt;블록과&lt;span&gt;인라인</title>
 </head>
 <body>
 <h3>사랑</h3>
 <hr>
 <div style="background-color:skyblue; padding:20px;">
내가사람의방언과천사의말을할지라도
<span style="color:red">사랑</span>이없으면
소리나는구리와울리는꽹과리가되고,
 <span style="color:red">사랑</span>이없으면아무
것도아니라.
 </div>
 <p>
 ~우리서로사랑하며살아요~
 </p>
 </body>
 </html>
```
## Block Element
- HTML 요소 중에서 기본적으로 새로운 줄(라인)을 차지하며, 화면 전체 너비(부모 요소의 가로 공간)를 차지하는 요소
- 자기 자신이 줄 바꿈을 만들고, 세로 방향으로 쌓인다(stack)**는 특징

# class와 id 태그
## class
- 여러 요소에 같은 class를 지정할 수 있어 그룹으로 묶을 때 좋음.
- 중복 가능, 여러 요소에 공통 스타일 적용 시 주로 사용
## id
- 문서 내에서 하나만 존재해야 하는 고유한 식별자.
- 중복 불가, 특정한 단 하나의 요소를 식별할 때 사용
# 메타 데이터
## 데이터를 설명하는 데이터
- 사진데이터의 메타 데이터: 사진찍은장소, 시간
- 오디오데이터: 재생시간, 채널수
- 이미지데이터: 이미지의폭, 높이, 컬러해상도
## HTML 페이지에 대한 메타데이터를 담기 위한 태그들
- `<base>`, `<link>`, `<script>`, `<style>`, `<title>`, `<meta>`
- 메타 태그들은 head 태그 안에 작성 해야한다.(script는 body 내에도 작성 가능)
# 이미지 삽입
## &lt;img&gt; 태그의 src 속성에 이미지 파일의 주소지정
- src에 지정 할 수 있는 이미지 종류로는 BMP, GIF, PNG, JPG(JPEG), animated-GIF가 있다.

# HTML 용어 설명 태그: `<dl>`, `<dt>`, `<dd>`
| 태그 | 이름 | 역할 / 설명 |
|-------|------|-------------|
| `<dl>` | Definition List (정의 목록) | 용어와 그 정의를 묶는 전체 리스트 컨테이너 |
| `<dt>` | Definition Term (정의할 용어) | 정의할 용어 또는 항목 제목 |
| `<dd>` | Definition Description (정의 설명) | `<dt>`에 대한 설명이나 정의 내용 |
# `<table>` 태그로 표 만들기
## 표 만드는데 사용되는 태그들
| 태그       | 이름            | 역할 / 설명                          |
|------------|-----------------|------------------------------------|
| `<table>`  | Table           | 표 전체를 감싸는 컨테이너 태그     |
| `<caption>`| Caption         | 표 제목 또는 설명                   |
| `<thead>`  | Table Head      | 표의 헤더 영역(열 제목 등)          |
| `<tbody>`  | Table Body      | 표의 본문 영역                      |
| `<tfoot>`  | Table Footer    | 표의 바닥글 영역(합계 등)           |
| `<tr>`     | Table Row       | 표의 행(row)                       |
| `<th>`     | Table Header    | 표의 헤더 셀(주로 굵은 글씨, 가운데 정렬) |
| `<td>`     | Table Data      | 표의 일반 데이터 셀                |

# 하이퍼링크 만들기 `<a>`태그
## 하이퍼링크란?
- 웹 페이지 안에서 다른 페이지, 특정 위치, 파일, 이메일 주소 등으로 연결해 주는 요소
## 하이퍼링크텍스트의 색
- 링크텍스트(standard link) 처음 색– 밑줄과 함께 blue
- 방문후링크(visited lnk) 색 purple
- 마우스로 링크를 누르고 있는 동안(active link) red
- CSS3를 이용하여 링크 색을 임의로 꾸밀 수 있다.
## 링크의 target 속성
- 링크를 클릭했을 때 링크가 열리는 위치(창, 탭 등)를 지정한다.

| 값        | 설명 |
|-----------|------|
| `_self`   | 기본값. 현재 창(또는 탭)에서 링크를 엽니다. |
| `_blank`  | 새 창 또는 새 탭에서 링크를 엽니다. |
| `_parent` | 부모 프레임에서 링크를 엽니다. (프레임 구조일 때 사용) |
| `_top`    | 가장 바깥쪽 최상위 프레임에서 링크를 엽니다. |

``` html
<a href="URL" target="값">링크 텍스트</a>
```
# 인라인 프레임
## 인라인 프레임 만들기, `<iframe>`
- HTML 페이지 내에 HTML 페이지 삽입
- 예) 200x150 크기의 인라인 프레임에 iframe.html 출력
``` html
<iframe src="iframe1.html" width="200" height="150">
브라우저는 iframe 태그를 지원하지 않습니다.
 </iframe>
```
