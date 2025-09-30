# 4장

### 1\. CSS3 기본 적용 예제

#### 1.1 HTML 태그로만 작성한 웹 페이지 (예제 4-1)

CSS 스타일이 적용되지 않은 기본적인 HTML 문서 구조이다.

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>스타일 없는 웹 페이지</title>
</head>
<body>
<h3>CSS 스타일 맛보기</h3>
<hr>
<p>나는 <span>웹 프로그래밍</span>을 좋아합니다.</p>
</body>
</html>
```

#### 1.2 CSS3 스타일 시트로 꾸민 웹 페이지 (예제 4-2)

`<style>` 태그 내부에 CSS 스타일을 작성하여 `body`, `h3`, `hr`, `span` 태그에 스타일을 적용한다.

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>스타일을 가진 웹 페이지</title>
<style>
/* CSS 스타일 시트 작성 */
body { background-color: mistyrose; }
h3 { color: purple; }
hr { border: 5px solid yellowgreen; }
span { color: blue; font-size: 20px; }
</style>
</head>
<body>
<h3>CSS 스타일 맛보기</h3>
<hr>
<p>나는 <span>웹 프로그래밍</span>을 좋아합니다.</p>
</body>
</html>
```

#### 1.3 `<style>` 태그로 스타일 시트 만들기 (예제 4-3)

`<head>` 내부의 `<style>` 태그를 사용하여 `body`와 `h3` 태그의 배경, 색상, 여백, 정렬 등을 설정한다.

```html
<!DOCTYPE html>
<html>
<head> <meta charset="utf-8">
<title><style> 태그로 스타일 만들기</title>
<style>
body {
background-color: linen;
color: blueviolet;
margin-left: 30px;
margin-right: 30px;
}
h3 {
text-align: center;
color: darkred;
}
</style>
</head>
<body>
<h3>소연재</h3>
<hr>
<p>저는 체조 선수 소연재입니다. 음악을 들으면서
책읽기를 좋아합니다. 김치 찌개와 막국수 무척
좋아합니다.</p>
</body>
</html>
```

#### 1.4 `style` 속성에 스타일 시트 만들기 (예제 4-4)

`<style>` 태그로 기본 스타일을 설정하고, 특정 태그에 직접 **`style` 속성**을 사용하여 스타일을 오버라이딩(재정의)하는 방법을 보인다.

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title><style> 속성에 스타일 만들기</title>
<style>
p { color : red; font-size : 15px;
} /* 모든 p 태그에 적용한다. */
</style>
</head>
<body>
<h3>손 홍 민</h3>
<hr>
<p>오페라를 좋아하고</p>
<p>엘비스 프레슬리를 좋아하고</p>
<p style="color:blue">김치부침개를 좋아하고</p>
<p style="color:magenta; font-size:30px">축구를
좋아합니다.</p>
</body>
</html>
```

-----

### 2\. 외부 스타일 및 상속/오버라이딩 예제

#### 2.1 `<link>` 태그로 CSS3 파일 불러오기 (예제 4-5)

외부 스타일 파일인 \*\*`mystyle.css`\*\*를 `<link>` 태그를 사용하여 불러와 적용한다.

**HTML 파일:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title><link> 태그로 스타일 파일 불러오기</title>
<link type="text/css" rel="stylesheet" href="mystyle.css">
</head>
<body>
<h3>소연재</h3>
<hr>
<p>저는 체조 선수 소연재입니다.
음악을 들으면서 책읽기를 좋아
합니다. 김치 찌개와 막국수 무척 좋아합니다.</p>
</body>
</html>
```

**`mystyle.css` 파일 내용:**

```css
/* mystyle.css */
body { 
    background-color : linen;
    color : blueviolet; 
    margin-left : 30px; 
    margin-right : 30px; 
}
h3 { 
    text-align : center; 
    color : darkred;
}
```

#### 2.2 `@import`로 CSS3 파일 불러오기 (예제 4-6)

외부 스타일 파일인 \*\*`mystyle.css`\*\*를 `<style>` 태그 내부에서 `@import` 규칙을 사용하여 불러와 적용한다.

**HTML 파일:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title><@import>로 외부 스타일 불러오기</title>
<style>
@import url(mystyle.css);
</style>
</head>
<body>
<h3>소연재</h3>
<hr>
<p>저는 체조 선수 소연재입니다. 음악을 들으면서 책읽기를
좋아합니다.
김치 찌개와 막국수 무척 좋아합니다.</p>
</body>
</html>
```

**`mystyle.css` 파일 내용:**

```css
/* mystyle.css */
body { 
    background-color : linen; 
    color : blueviolet;
    margin-left : 30px; 
    margin-right : 30px; 
}
h3 { 
    text-align : center; 
    color : darkred; 
}
```

#### 2.3 부모 스타일 상속 (예제 4-7)

부모 태그의 스타일이 자식 태그에 상속되는 원리를 보인다. `<em>` 태그가 부모 `<p>` 태그의 `color: green`을 상속받는다.

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>부모 스타일 상속</title>
</head>
<body>
<h3>부모 스타일 상속</h3>
<hr>
<p style="color:green">자식 태그는 부모의 스타일을
<em style="font-size:25px">상속</em>받는다.
</p>
</body>
</html>
```

#### 2.4 여러 스타일 시트가 중첩되는 경우 (예제 4-8)

외부 CSS 파일, `<style>` 태그, `style` 속성 등 여러 위치에 선언된 스타일이 **합치기 및 오버라이딩** 규칙에 따라 적용되는 방식을 보인다.

**HTML 파일:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>스타일 합치기 및 오버라이딩</title>
<link type="text/css" rel="stylesheet" href="external.css">
<style>
p { color : blue;
font-size : 12px; }
</style>
</head>
<body>
<h3>p 태그에 중첩된 스타일</h3>
<hr>
<p>Hello, students!</p>
<p style="font-size:25px">안녕하세요 교수님!</p>
</body>
</html>
```

**`external.css` 파일 내용:**

```css
p { 
    background : mistyrose; 
}
```

-----

### 3\. 셀렉터 활용 예제

#### 3.1 셀렉터 활용 종합 예제 (예제 4-9)

태그 이름, class, id, 자식, 자손, 가상 클래스 등 다양한 셀렉터 유형을 한 페이지에 활용한다.

**HTML 파일:**

```html
<!DOCTYPE html>
<html> 
<head><meta charset="utf-8"> 
<title>셀렉터 만들기</title> 
<style> 
h3, li { /* 태그 이름 셀렉터 */ 
    color : brown;
} 
div > div > strong { /* 자식 셀렉터 */ 
    background : yellow;
} 
ul strong { /* 자손 셀렉터 */ 
    color : dodgerblue;
} 
.warning { /* class 셀렉터 */ 
    color : red; 
} 
body.main { /* class 셀렉터 */ 
    background : aliceblue;
} 
#list { /* id 셀렉터 */ 
    background : mistyrose; 
} 
#list span{ /* 자손 셀렉터 */ 
    color : forestgreen;
} 
h3:first-letter { /* 가상 클래스 셀렉터 */ 
    color : red;
} 
li:hover { /* 가상 클래스 셀렉터 */ 
    background : yellowgreen;
} 
</style> 
</head> 
<body class="main"> 
<h3>Web Programming</h3> 
<hr> 
<div> 
    <div>2학기 <strong>학습 내용</strong>입니다.</div> 
    <ul id="list"> 
        <li><span>HTML5</span></li> 
        <li><strong>CSS</strong></li> 
        <li>JAVASCRIPT</li> 
    </ul> 
    <div class="warning">60점 이하는 F</div> 
</div> 
</body> 
</html>
```

-----

### 4\. 텍스트 및 폰트 꾸미기 예제

#### 4.1 텍스트 꾸미기 (예제 4-11)

텍스트의 정렬 (`text-align`), 들여쓰기 (`text-indent`), 장식선 (`text-decoration`) 등을 설정한다.

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>텍스트 꾸미기</title>
<style>
h3 { 
    text-align : right; /* 오른쪽 정렬 */ 
}
span { 
    text-decoration : line-through; /* 중간 줄 */ 
}
strong { 
    text-decoration : overline; /* 윗줄 */ 
}
.p1 { 
    text-indent : 3em; /* 3 글자 들여쓰기 */ 
    text-align : justify; /* 양쪽 정렬 */ 
}
.p2 { 
    text-indent : 1em; /* 1 글자 들여쓰기 */ 
    text-align : center; /* 중앙 정렬 */ 
}
</style>
</head>
<body>
<h3>텍스트 꾸미기</h3>
<hr>
<p class="p1">HTML의 태그만으로 기존의 워드 프로세서와 같이 들여쓰기, 정렬, 공백, 간격 등과 세밀한 <span>텍스트 제어</span>를 할 수 없다.</p>
<p class="p2">그러나, <strong>스타일 시트</strong>는 이를 가능하게 한다. 들여쓰기, 정렬에 대해서 알아본다 </p>
<a href="http://www.naver.com" style="text-decoration : none"> 밑줄이 없는 네이버 링크</a>
</body>
</html>
```

#### 4.2 CSS3 폰트 활용 (예제 4-12)

폰트 패밀리 (`font-family`), 크기 (`font-size`), 스타일 (`font-style`), 굵기 (`font-weight`) 등을 설정하며, 단축 프로퍼티 `font`를 활용한다.

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>폰트</title>
<style>
body { 
    font-family : "Times New Roman", Serif;
    font-size : large; 
}
h3 { 
    font : italic bold 40px consolas, sans-serif;
}
</style>
</head>
<body>
<h3>Consolas font</h3>
<hr>
<p style="font-weight:900">font-weight 900</p>
<p style="font-weight:100">font-weight 100</p>
<p style="font-style:italic">Italic Style</p>
<p style="font-style:oblique">Oblique Style</p>
<p>현재 크기의 <span style="font-size:1.5em">1.5배</span> 크기로</p>
</body>
</html>
```

-----

### 5\. 박스 모델 및 테두리 예제

#### 5.1 `<div>`의 박스 모델 보이기 (예제 4-13)

박스 모델의 구성 요소인 `margin`, `border`, `padding`, `content` 영역의 크기를 명시적으로 설정한다.

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>박스 모델</title>
<style>
body { background : ghostwhite; }
span { background : deepskyblue; }
div.box { 
    background : yellow; 
    border-style : solid; 
    border-color : peru;
    margin : 40px; 
    border-width : 30px; 
    padding : 20px; 
}
</style>
</head>
<body>
<div class="box">
    <span>DIVDIVDIV</span>
</div>
</body>
</html>
```

#### 5.2 박스 모델 활용 (예제 4-14)

`margin`, `padding`, `border` 속성을 사용하여 박스의 외부 여백, 내부 여백, 테두리를 설정한다.

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>박스 모델</title>
<style>
div { 
    background : yellow;
    padding : 20px; 
    border : 5px dotted red; 
    margin : 30px;
}
</style></head>
<body>
<h3>박스 모델</h3>
<p>margin 30px, padding 20px, border 5px의 빨간색 점선</p>
<hr>
<div>
    <img src="media/mio.png" alt="고양이눈">
</div>
</body>
</html>
```

#### 5.3 다양한 테두리 선 스타일 (예제 4-15)

`border` 속성에 다양한 `border-style` 값을 적용하여 테두리 선의 모양을 변경한다.

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>다양한 테두리</title>
</head>
<body>
<h3>다양한 테두리</h3>
<hr>
<p style="border: 3px solid blue">3픽셀 soild</p>
<p style="border: 3px none blue">3픽셀 none</p>
<p style="border: 3px hidden blue">3픽셀 hidden</p>
<p style="border: 3px dotted blue">3픽셀 dotted</p>
<p style="border: 3px dashed blue">3픽셀 dashed</p>
<p style="border: 3px double blue">3픽셀 double</p>
<p style="border: 15px groove yellow">15픽셀 groove</p>
<p style="border: 15px ridge yellow">15픽셀 ridge</p>
<p style="border: 15px inset yellow">15픽셀 inset</p>
<p style="border: 15px outset yellow">15픽셀 outset</p>
</body>
</html>
```

#### 5.4 다양한 둥근 모서리 테두리 (예제 4-16)

`border-radius` 프로퍼티를 사용하여 박스의 모서리를 둥글게 처리한다.

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>둥근 모서리 테두리</title>
<style>
p { 
    background : #90D000;
    width : 300px; 
    padding : 20px; 
}
#round1 { border-radius : 50px; }
#round2 { border-radius : 0px 20px 40px 60px; }
#round3 { border-radius : 0px 20px 40px; }
#round4 { border-radius : 0px 20px; }
#round5 { border-radius : 50px; border-style : dotted; }
</style>
</head>
<body>
<h3>둥근 모서리 테두리</h3>
<hr>
<p id="round1">반지름 50픽셀의 둥근 모서리</p>
<p id="round2">반지름 0, 20, 40, 60 둥근 모서리</p>
<p id="round3">반지름 0, 20, 40, 20 둥근 모서리</p>
<p id="round4">반지름 0, 20, 0, 20 둥근 모서리</p>
<p id="round5">반지름 50의 둥근 점선 모서리</p>
</body>
</html>
```

#### 5.5 이미지 테두리 만들기 (예제 4-17)

`border-image` 프로퍼티를 사용하여 테두리 영역에 이미지를 입힌다.

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>이미지 테두리 만들기</title>
<style>
p { 
    background : yellow; 
    width : 200px; 
    height : 60px; 
    padding : 10px; 
    border : 20px solid lightgray;
    /*border-width와 border-style 동시 지정 */ 
} 
#round { border-image: url("media/border.png") 30 round; } 
#repeat { border-image: url("media/border.png") 30 repeat; }
#stretch { border-image: url("media/border.png") 30 stretch; } 
</style>
</head>
<body>
<h3>이미지 테두리 만들기</h3>
<hr>
다음은 원본 이미지이다.<br>
<img src="media/border.png" alt="원본">
<hr>
<p>20x20 크기의 회색 테두리를 가진 P 태그</p>
<p id="round">round 스타일 이미지 테두리</p>
<p id="repeat">repeat 스타일 이미지 테두리</p>
<p id="stretch">stretch 스타일 이미지 테두리</p>
</body>
</html>
```

-----

### 6\. 배경 및 그림자 예제

#### 6.1 `<div>` 박스에 배경 꾸미기 (예제 4-18)

배경색, 배경 이미지, 이미지 크기, 반복, 위치 등을 설정하여 복합적인 배경 스타일을 적용한다.

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>배경 꾸미기</title>
<style>
div { 
    background-color : skyblue;
    background-size : 100px 100px; 
    background-image : url("media/spongebob.png"); 
    background-repeat : repeat-y; 
    background-position : center center; 
} 
div { 
    width : 200px;
    height : 200px; 
    color : blueviolet; 
    font-size : 16px; 
}
</style>
</head>
<body>
<h3>div 박스에 배경 꾸미기</h3>
<hr>
<div>SpongeBob is an over-optimistic sponge that annoys other characters.
</div>
</body>
</html>
```

#### 6.2 텍스트 그림자 만들기 (예제 4-19)

`text-shadow` 프로퍼티를 사용하여 텍스트에 그림자 효과를 적용한다.

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>텍스트 그림자 만들기</title>
<style>
.shadow1 { 
    text-shadow : 5px 5px; 
}
.shadow2 { 
    text-shadow : 5px 5px 5px green; 
}
.shadow3 { 
    color : white; 
    text-shadow : 2px 2px 4px black; 
}
.shadow4 { 
    text-shadow : 0 0 3px red; 
}
.shadow5 { 
    text-shadow : 0 0 25px skyblue; 
}
.shadow6 { 
    text-shadow : 2px 2px 2px black, 0 0 25px blue, 0 0 5px darkblue;
}
</style>
</head>
<body>
<h3>텍스트 그림자 만들기</h3>
<hr>
<p class="shadow1">그림자 텍스트 1</p>
<p class="shadow2">그림자 텍스트 2</p>
<p class="shadow3">그림자 텍스트 3</p>
<p class="shadow4">그림자 텍스트 4</p>
<p class="shadow5">그림자 텍스트 5</p>
<p class="shadow6">그림자 텍스트 6</p>
</body>
</html>
```

#### 6.3 `box-shadow`로 박스 그림자 만들기 (예제 4-20)

`box-shadow` 프로퍼티를 사용하여 `div` 박스에 그림자 효과를 적용한다.

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>div 박스에 그림자 만들기</title>
<style>
.redBox { 
    box-shadow : 10px 10px red; 
}
.blurBox { 
    box-shadow : 10px 10px 5px skyBlue; 
}
.multiEffect { 
    box-shadow : 2px 2px 2px black, 
    0 0 25px blue,
    0 0 5px darkblue;
}
div {
    width : 150px;
    height : 70px;
    padding : 10px; 
    border : 10px solid lightgray;
    background-image : url("media/spongebob.png");
    background-size : 150px 100px;
    background-repeat : no-repeat;
}
</style>
</head>
<body>
<h3>박스 그림자 만들기</h3>
<hr>
<div class="redBox">뚱이와 함께</div><br>
<div class="blurBox">스카이 블루 그림자</div><br>
<div class="multiEffect">여러 개 그림자</div>
</body>
</html>
```
