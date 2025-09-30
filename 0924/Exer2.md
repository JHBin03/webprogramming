# 5장

### 1\. HTML 태그 배치 관련 예제 코드

#### 1.1 `display` 프로퍼티로 박스 유형을 설정하는 코드이다. (예제 5-1)

`<div>` 태그와 `<span>` 태그에 `display:none`, `display:inline`, `display:inline-block`, `display:block` 속성을 적용하여 박스 유형을 변경하는 방법을 보여준다.

```html
<!DOCTYPE html>
<html>
<head> 
<meta charset="utf-8">
<title>display 프로퍼티</title>
<style>
div {
    border: 2px solid yellowgreen;
    color: blue;
    background: aliceblue;
}
span {
    border: 3px dotted red;
    background: yellow;
}
</style> 
</head>
<body>
<h3>인라인, 인라인 블록, 블록</h3>
<hr>
나는 <div style="display:none">
display:none으로 지정되
어 텍스트가 보이지 않음
div(none)</div>입니다. <br><br>
나는 <div style="display:inline">
div(inline)</div> 입니다.<br> <br>
나는 <div style="display:inline-block; height:50px">
div(inline-block)</div> 입니다. <br> <br>
나는 <div>div<span style="display:block">
span(block)</span> 입니다.
</div>
</body>
</html>
```

#### 1.2 `position: relative`로 상대 배치를 구현하는 코드이다. (예제 5-2)

마우스를 올렸을 때 (`:hover`) 요소의 원래 위치에서 상대적으로 이동하도록 (`left`, `top`, `right`, `bottom`) 설정하는 방법을 보여준다.

```html
<!DOCTYPE html>
<html>
<head><meta charset="utf-8">
<title>relative 배치</title>
<style>
div {
    display : inline-block;
    height : 50px;
    width : 50px;
    border : 1px solid lightgray;
    text-align : center;
    color : white;
    background : red;
}
#down:hover {
    position : relative;
    left : 20px; 
    top : 20px;
    background : green;
}
#up:hover {
    position : relative;
    right : 20px;
    bottom : 20px;
    background : green;
}
</style>
</head>
<body>
<h3>상대 배치, relative</h3>
h와 k 글자에 마우스를 올려 보세요
<hr>
<div>T</div>
<div id="down">h</div>
<div >a</div>
<div>n</div>
<div id="up">k</div>
<div>s</div>
</body>
</html>
```

#### 1.3 `position: absolute`로 절대 배치를 구현하는 코드이다. (예제 5-3)

이미지 위에 텍스트를 절대적인 좌표로 배치하여 합성하는 방법을 보여준다.

```html
<!DOCTYPE html>
<html>
<head><meta charset="utf-8">
<title>절대 배치</title>
<style>
div {
    display : inline-block;
    position : absolute; /* 절대 배치 */
    border : 1px solid lightgray;
}
div > p {
    display : inline-block;
    /* div의 자식 p */
    position : absolute; /* 절대 배치 */
    height : 20px;
    width : 15px;
    background : lightgray;
}
</style>
</head>
<body>
<h3>Merry Christmas!</h3>
<hr>
<p>예수님이 탄생하셨습니다.</p>
<div>
    <img src="media/christmastree.png" 
    width="200" height="200" alt="크리스마스 트리">
    <p style="left:50px; top:30px">M</p>
    <p style="left:100px; top:0px">E</p>
    <p style="left:100px; top:80px">R</p>
    <p style="left:150px; top:110px">R</p>
    <p style="left:30px; top:130px">Y</p>
</div>
</body>
</html>
```

#### 1.4 `position: fixed`로 고정 배치를 구현하는 코드이다. (예제 5-4)

브라우저 창을 기준으로 요소를 고정하여 스크롤에도 위치가 변하지 않도록 오른쪽 하단에 고정하는 방법을 보여준다.

```html
<!DOCTYPE html>
<html>
<head><meta charset="utf-8">
<title>고정 배치</title>
<style>
#fixed { 
    position : fixed;
    bottom : 10px; 
    right : 10px;
    width : 100px; 
    padding : 5px;
    background : red;
    color : white;
}
</style></head>
<body>
<h3>Merry Christmas!</h3>
<hr>
<img src="media/christmastree.png" 
width="300" height="300" 
alt="크리스마스 트리">
<div id="fixed">예수님이 탄생하셨습니다.
</div>
</body>
</html>
```

#### 1.5 `float` 프로퍼티로 유동 배치를 구현하는 코드이다. (예제 5-5)

텍스트 단락 옆에 특정 블록 요소를 오른쪽에 배치하고 주변 텍스트가 이를 감싸도록 유동 배치하는 방법을 보여준다.

```html
<!DOCTYPE html>
<html>
<head><meta charset="utf-8">
<title>float 배치</title>
<style>
#float { 
    float : right;
    border : 1px dotted black;
    width : 8em;
    padding : 0.25em;
    margin : 1em;
}
</style>
</head>
<body>
<h3>학기말 공지</h3>
<hr>
<div>
    <p id="float">
    24일은 피아니스트 조성진의 크리스마스 특별
    연주가 있습니다.</p>
    <p>
    이제 곧 겨울 방학이 시작됩니다.
    학기 중 못다한
    Java, C++ 프로그래밍 열심히 하기 바랍니다.
    인턴을 준비하는 학생들은 프로젝트 개발에
    더욱 힘쓰세요.
    그럼 다음 학기에 만나요.</p>
</div>
</body>
</html>
```

#### 1.6 `z-index` 프로퍼티로 쌓임 순서를 지정하는 코드이다. (예제 5-6)

절대 배치된 여러 이미지의 쌓이는 순서(깊이)를 `z-index` 값으로 조절하여 카드가 겹쳐 보이도록 하는 방법을 보여준다.

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>z-index 프로퍼티</title>
<style>
div { position : absolute; }
img { position : absolute;
}
#spadeA { z-index : -3; left : 10px; top : 20px; }
#spade2 { z-index : 2;
left : 40px; top : 30px; }
#spade3 { z-index : 3; left : 80px; top : 40px;
}
#spade7 { z-index : 7; left : 120px; top : 50px;
}
</style></head>
<body>
<h3>z-index 프로퍼티</h3>
<hr>
<div>
    <img id="spadeA" src="media/spade-A.png" 
    width="100" height="140" alt="스페이드A">
    <img id="spade2" src="media/spade-2.png" 
    width="100" height="140" alt="스페이드2">
    <img id="spade3" src="media/spade-3.png" 
    width="100" height="140" alt="스페이드3">
    <img id="spade7" src="media/spade-7.png" 
    width="100" height="140" alt="스페이드7">
</div>
</body>
</html>
```

#### 1.7 `visibility` 프로퍼티로 요소를 숨기는 코드이다. (예제 5-7)

`<span>` 태그에 `visibility: hidden`을 적용하여 요소가 차지하는 공간은 유지한 채 내용만 보이지 않도록 숨기는 방법을 보여준다.

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>visibility 프로퍼티</title>
<style>
span { 
    visibility : hidden;
}
</style>
</head>
<body>
<h3>다음 빈 곳에 숨은 단어?</h3>
<hr>
<ul>
    <li>I (<span>love</span>) you.
    <li>CSS is Cascading (<span>Style</span>) Sheet.
    <li>응답하라 (<span>1988</span>).
</ul>
</body>
</html>
```

#### 1.8 `overflow` 프로퍼티로 넘치는 내용을 처리하는 코드이다. (예제 5-8)

박스 영역을 벗어나는 내용을 `hidden`, `visible`, `scroll` 값으로 각각 다르게 처리하는 방법을 보여준다.

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>overflow 프로퍼티</title>
<style>
p {
    width : 15em;
    height : 3em;
    border : 1px solid lightgray;
}
.hidden { overflow : hidden; }
.visible { overflow : visible;
}
.scroll { overflow : scroll; }
</style>
</head>
<body>
<h3>overflow 프로퍼티</h3>
<hr>
<p class="hidden">overflow에 hidden 값을 적용하면
박스를 넘어가는 내용이 잘려 보이지 않습니다.</p><br>
<p class="visible">overflow에 visible 값을 적용하면
콘텐트가 박스를 넘어가서도 출력됩니다</p><br>
<p class="scroll">overflow에 scroll 값을 적용하면
박스에 스크롤바를 붙여 출력합니다.</p>
</body>
</html>
```

-----

### 2\. 리스트 및 표 꾸미기 관련 예제 코드

#### 2.1 리스트로 수평 메뉴바를 만드는 코드이다. (예제 5-9)

리스트 (`<ul>`, `<li>`)의 마커를 제거하고 (`list-style-type: none`) 아이템을 인라인 블록으로 배치하여 수평 메뉴바를 구현하며, 마우스 오버 효과를 적용하는 방법을 보여준다.

```html
<!DOCTYPE html>
<html> 
<head> 
<meta charset="utf-8"> 
<title>리스트로 메뉴 만들기</title> 
<style> 
#menubar { background : olive; } 
#menubar ul { /* 여백과 패딩 모두 0 */ 
    margin : 0; 
    padding : 0; 
    width : 567px; 
    /* 모든 아이템(<li>)을 한 줄에 품을 수 있는 폭 */ } 
#menubar ul li { 
    display : inline-block; 
    /* 새 줄로 넘어가지 않게 */ 
    list-style-type : none; /* 마커 삭제 */ 
    padding : 0px 15px; 
    /* top=bottom=0, left=right=15px */ } 
#menubar ul li a { 
    color : white; 
    text-decoration : none; 
    /* 링크 보이지 않게 */ } 
#menubar ul li a:hover { 
    color : violet; 
    /* 마우스 올라 갈 때 색 */ } 
</style>
</head>
<body> 
<nav id="menubar"> 
    <ul> 
        <li><a href="#">Home</a></li> 
        <li><a href="#">Espresso</a></li> 
        <li><a href="#">Cappuccino</a></li> 
        <li><a href="#">Cafe Latte</a></li> 
        <li><a href="#">F.A.Q</a></li> 
    </ul> 
</nav> 
</body> 
</html>
```

#### 2.2 마우스 오버 시 행 배경색이 변하는 표를 만드는 코드이다. (예제 5-10)

테두리를 합치고, 짝수 행에 배경색을 지정하여 줄무늬를 만들며, 마우스가 행 위에 올라왔을 때 (`tbody tr:hover`) 배경색이 바뀌는 동적 효과를 적용하는 방법을 보여준다.

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>표 응용 1</title>
<style>
table { /* 이중 테두리 제거 */
    border-collapse : collapse;
}
td, th { /* 모든 셀에 적용 */
    text-align : left;
    padding : 5px;
    height : 15px;
    width : 100px;
}
thead, tfoot { /* <thead>의 모든 셀에 적용 */
    background : darkgray;
    color : yellow;
}
tbody tr:nth-child(even) { /* 짝수 <tr>에 적용*/
    background : aliceblue; }
tbody tr:hover {
    background : pink;
}
</style>
</head>
<body>
<h3>2017년 1학기 성적</h3>
<hr>
<table>
<thead>
<tr><th>이름</th><th>HTML</th><th>CSS</th></tr>
</thead>
<tfoot>
<tr><th>합</th><th>310</th><th>249</th></tr>
</tfoot>
<tbody>
<tr><td>황기태</td><td>80</td><td>70</td></tr>
<tr><td>이재문</td><td>95</td><td>99</td></tr>
<tr><td>이병은</td><td>85</td><td>90</td></tr>
<tr><td>김남윤</td><td>50</td><td>40</td></tr>
</tbody>
</table>
</body>
</html>
```

#### 2.3 `폼` 요소에 스타일을 적용하는 코드이다. (예제 5-11)

텍스트 입력란에 `:hover`와 `:focus` 가상 클래스를 적용하여 마우스 오버 시 배경색을 바꾸고, 포커스를 받을 때 글자 크기를 키우는 동적 효과를 구현하는 방법을 보여준다.

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>폼 스타일 주기</title>
<style>
input[type=text] { /* text 창에만 적용 */
    color : red;
}
input:hover, textarea:hover { /* 마우스 올라 올 때 */
    background : aliceblue;
}
input[type=text]:focus, input[type=email]:focus { /* 포커스 받을 때 */
    font-size : 120%; }
label { 
    display : block;
    /* 새 라인에서 시작 */ 
    padding : 10px; }
label span { 
    display : inline-block; 
    width : 90px;
    text-align : right; 
    padding : 10px; }
</style> 
</head> 
<body> 
<h3>CONTACT US</h3> 
<hr> 
<form> 
    <label> 
        <span>Name</span><input type="text" placeholder="Elvis"><br> 
    </label> 
    <label> 
        <span>Email</span><input type="email" placeholder="elvis@graceland.com"> 
    </label> 
    <label> 
        <span>Comment</span><textarea placeholder="메시지를 남겨주세요"></textarea> 
    </label> 
    <label> 
        <span></span><input type="submit" value="submit"> 
    </label> 
</form> 
</body>
</html>
```

-----

### 3\. CSS3 동적 변화 효과 관련 예제 코드

#### 3.1 `animation`으로 글자 크기 애니메이션을 만드는 코드이다. (예제 5-12)

`@keyframes` 규칙으로 폰트 크기의 변화(`500%`에서 `100%`)를 정의하고, `h3` 태그에 이 애니메이션을 3초 동안 무한 반복 적용하는 방법을 보여준다.

```html
<!DOCTYPE html>
<html> 
<head> 
<meta charset="utf-8"> 
<title>애니메이션</title> 
<style> 
@keyframes bomb { 
    from { font-size : 500%;} 
    to { font-size : 100%;} } 
h3 { 
    animation-name : bomb;
    animation-duration : 3s; 
    animation-iteration-count : infinite; } 
</style>
</head>
<body> 
<h3>꽝!</h3> 
<hr> 
<p>꽝! 글자가 3초동안 500%에서 시작하여 100%로 바뀌는 애니메이션입니다.
무한 반복합니다.</p> 
</body> 
</html>
```

#### 3.2 `transition`으로 폰트 크기 전환 효과를 만드는 코드이다. (예제 5-13)

`<span>` 태그에 `font-size` 프로퍼티 변화에 대해 5초 동안 전환 효과를 적용하도록 설정하고, 마우스를 올릴 때 (`:hover`) 크기가 500%로 점진적으로 커지도록 하는 방법을 보여준다.

```html
<!DOCTYPE html>
<html> 
<head> 
<meta charset="utf-8"> 
<title>전환</title> 
<style> 
span { 
    transition : font-size 5s;
} 
span:hover { 
    font-size : 500%; } 
</style> 
</head> 
<body> 
<h3>font-size에 대한 전환</h3> 
<hr> 
<p><span>꽝!</span> 글자에 마우스를 올려보세요.</p> 
</body> 
</html>
```

#### 3.3 `transform`으로 다양한 변환 효과를 적용하는 코드이다. (예제 5-14)

`rotate()`, `skew()`, `translateY()`, `scale()` 등 다양한 `transform` 함수를 적용하여 요소를 회전, 기울임, 이동, 확대/축소하며, `:hover`와 `:active` 상태에 따라 추가적인 변환이 일어나도록 설정하는 방법을 보여준다.

```html
<!DOCTYPE html>
<html> 
<head> 
<meta charset="utf-8">
<title>다양한 변환 사례</title> 
<style> 
div { 
    display : inline-block;
    padding : 5px; 
    color : white; 
    background : olivedrab; } 
/* 변환 */ 
div#rotate { transform : rotate(20deg); } 
div#skew { transform : skew(0deg,-20deg); } 
div#translate { transform : translateY(100px); } 
div#scale { transform : scale(3,1); } 
/* 마우스 올릴 때 추가 변환 */ 
div#rotate:hover { transform : rotate(80deg);} 
div#skew:hover { transform : skew(0deg, -60deg); } 
div#translate:hover { transform : translate(50px, 100px); } 
div#scale:hover { transform : scale(4,2); } 
/* 마우스 누를 때 추가 변환 */ 
div#scale:active { transform : scale(1,5); } 
</style> 
</head> 
<body> 
<h3>다양한 Transform</h3> 
아래는 회전(rotate), 기울임(skew), 이동(translate), 확대/축소(scale)가 적용된 사례이다. 또한 마우스를 올리면 추가적 변환이 일어난다.
<hr> 
<div id="rotate">rotate 20 deg</div> 
<div id="skew">skew(0,-20deg)</div> 
<div id="translate">translateY(100px)</div> 
<div id="scale">scale(3,1)</div> 
</body> 
</html>
```
