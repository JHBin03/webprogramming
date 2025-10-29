## 예제 8-1

```html
<!DOCTYPE html>
<html>
<head><meta charset="utf-8">
<title>HTML DOM 트리</title></head>
<body>
<h3>DOM 객체 p의 프로퍼티, 스타일, 이벤트 리스너</h3>
<hr>
<p id="firstP" 
  style="color:blue; background:yellow" 
  onclick="this.style.color='teal'">
  이것은 <span style="color:red">문장입니다.
  </span>
</p>
<script>
  let p = document.getElementById("firstP");
  let text = "p.id = " + p.id + "\n";
    text += "p.tagName = " + p.tagName + "\n";
  text += "p.innerHTML = " + p.innerHTML + "\n";
  text += "p.style.color = " + p.style.color + "\n";
  text += "p.onclick = " + p.onclick + "\n";
  text += "p.childElementCount = " + p.childElementCount + "\n";
  text += "너비 = " + p.offsetWidth + "\n";
  text += "높이 = " + p.offsetHeight + "\n";
  alert(text);
</script>
</body>
</html>
````

---

## 예제 8-2

```html
<!DOCTYPE html>
 <html>
 <head>
 <meta charset="utf-8">
 <title>CSS 스타일 동적 변경</title>
 <script>
 function change() {
 let span = document.getElementById("mySpan"); 
span.style.color= "green"; // 글자색green
 span.style.fontSize= "30px"; // 글자크기는30픽셀
span.style.display= "block"; // 블록박스로변경
span.style.width= "6em"; // 박스의폭. 6 글자크기
span.style.border= "3px dotted magenta"; // 3픽셀점선magenta테두리
span.style.margin= "20px"; // 상하좌우여백20px
 }
 </script>
 </head>
 <body>
 <h3>CSS 스타일동적변경</h3>
 <hr>
 <p style="color:blue" >이것은
<span id="mySpan" style="color:red">문장입니다.</span>
 </p>
 <input type="button" value="스타일변경" onclick="change()">
 </body>
 </html>
```

---

## 예제 8-3

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>innerHTML 활용</title>
<script>
function change() {
let p = document.getElementById("firstP");
p.innerHTML= "나의 <img src='puppy.png'> 강아지";
}
</script>
</head>
<body>
<h3>innerHTML 활용 : 아래 글자에 클릭하면 예쁜 강아지가 보입니다.</h3>
<hr>
<p id="firstP" style="color:blue" onclick="change()">
여기에 <span style="color:red">클릭하세요</span>
</p>
</body>
</html>
```

---

## 예제 8-4

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>this 활용</title>
<script>
function change(obj, size, color) {
obj.style.color = color;
obj.style.fontSize = size;
}
</script>
</head>
<body>
<h3>this 활용</h3>
<hr>
<button onclick="change(this, '30px', 'red')">버튼</button>
<button onclick="change(this, '30px', 'blue')">버튼</button>
<div onclick="change(this, '25px', 'orange')">
여기 클릭하면 크기와 색 변경
</div>
</body>
</html>
```

---

## 예제 8-5

```html
<!DOCTYPE html>
<html>
<head id="myHead"><meta charset="utf-8">
<title>document 객체의 주요 프로퍼티</title>
<script>
let text = "문서 로딩 중일 때 readyState = " + document.readyState + "\n";
</script>
</head>
<body style="background-color:yellow; color:blue; direction:rtl"
onload="printProperties()">
<h3>document의 주요 프로퍼티</h3>
<hr>
<a href="http://www.naver.com">네이버 홈페이지</a>
<div>이곳은 div 영역입니다.</div>
<input id="input" type="text" value="여기 포커스가 있습니다">
<script>
function printProperties() {  
document.getElementById("input").focus();
text += "1. location =" + document.location + "\n";
text += "2. URL =" + document.URL + "\n";
text += "3. title =" + document.title + "\n";
text += "4. head의 id =" + document.head.id + "\n";
text += "5. body color =" + document.body.style.color + "\n";
text += "6. domain =" + document.domain + "\n";
text += "7. lastModified =" + document.lastModified + "\n";
text += "8. defaultView = " + document.defaultView + "\n";
text += "9. 문서의 로드 완료 후 readyState = " + document.readyState + "\n";
text += "10. referrer = " + document.referrer + "\n";
text += "11. activeElement = " + document.activeElement.value + "\n";
text += "12. documentElement의 태그 이름 = " + document.documentElement.tagName + "\n";
alert(text);
}
</script>
</body>
</html>
```

---

## 예제 8-6

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>document.getElementsByTagName()</title>
<script>
function change() {
let spanArray = document.getElementsByTagName("span");
for(let i=0; i<spanArray.length; i++) {
var span = spanArray[i];
span.style.color = "orchid";
span.style.fontSize = "20px";
}
}
</script>
</head>
<body>
<h3>내가 좋아하는 과일 <button onclick="change()">누르세요</button></h3>
<hr>
저는 빨간 <span>사과</span>를 좋아해서 아침마다 한 개씩 먹고 있어요.
운동할 때는 중간 중간에 <span>바나나</span>를 먹지요. 
탄수화물 섭취가 빨라 힘이 납니다. 
또한 달콤한 향기를 품은 <span>체리</span>와 여름 냄새 물씬 나는 <span>자두</span>를 좋아합니다.
</body>
</html>
```

---

## 예제 8-7

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>document.getElementsByClassName()</title>
<script>
function viewPlace() {
let tagArray = document.getElementsByClassName("place");
for(let i=0; i<tagArray.length; i++) {
let tag = tagArray[i];
tag.style.color = "orchid";
tag.style.fontSize = "20px";
tag.style.textDecoration = "underline";
}
}
function viewFood() {
let tagArray = document.getElementsByClassName("food");
for(let i=0; i<tagArray.length; i++) {
var tag = tagArray[i];
tag.style.color = "darkcyan";
}
}
</script>
</head>
<body>
<h3>가고 싶은 곳 먹고 싶은 것</h3><br>
<button onclick="viewPlace()">가고 싶은 곳</button>
<button onclick="viewFood()">먹고 싶은 것</button>
<hr>
<p><span class="place">제주도</span>에 가서 
<span class="food">흑돼지</span>를 먹고 싶고요.
<span class="place">독도</span>에 가서 
<span class="food">독도 새우</span>도 먹고 싶어요. 
제일 가고 싶은 곳 <span class="place">부산 자갈치 시장</span>에서
<span class="food">꼼장어 구이</span>도 먹고 싶어요</p>
</body>
</html>
```

---

## 예제 8-8

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>write()와 writeln() 활용</title>
</head>
<body>
<h3>write()와 writeln() 활용</h3>
<hr>
<script>
document.write("<h3>동물원에 소풍갑시다</h3>");
document.write("<p style='color:blue'>날씨가 좋아 ");
document.write("소풍갑니다</p>");
document.write(2+3);
document.write("명입니다.<br>");
document.writeln(5);
document.writeln("명입니다.<br>");
</script>
</body>
</html>
```

---

## 예제 8-9

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>write()를 잘못 사용하는 예</title>
</head>
<body onclick="document.write('<h3>클릭되었습니다</h3>')">
<h3>write()를 잘못 사용하는 예</h3>
<hr>
<p>웹브라우저의 바탕 아무 곳이나 클릭해보세요.</p>
</body>
</html>
```

---

## 예제 8-10

```html
<!DOCTYPE html>
<html>
<head><meta charset="utf-8">
<title>HTML 문서 작성기 만들기</title>
<script>
let win=null;
function showHTML() {
if(win == null || win.closed)
win = window.open("", "outWin", "width=300,height=200");
let textArea = document.getElementById("srcText");
win.document.open();
win.document.write(textArea.value);
win.document.close();
}
</script>
</head>
<body>
<h3>HTML 문서 작성기 만들기 </h3>
<hr>
<p>아래에 HTML 문서를 작성하고 버튼을 클릭해 보세요.
새 윈도우에 HTML 문서가 출력됩니다.</p>
<textarea id="srcText" rows="10" cols="50"></textarea>
<br><br>
<button onclick="showHTML()">HTML 문서 출력하기</button>
</body>
</html>
```

---

## 예제 8-11

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"><title>문서의 동적 구성</title>
<script>
function createDIV() {
let obj = document.getElementById("parent");
let newDIV = document.createElement("div");
newDIV.innerHTML = "새로 생성된 DIV입니다.";
newDIV.setAttribute("id", "myDiv");
newDIV.style.backgroundColor = "yellow";
newDIV.onclick = function() {
let p = this.parentElement;
p.removeChild(this);
};
obj.appendChild(newDIV);
}
</script>
</head>
<body id="parent">
<h3>DIV 객체를 동적으로 생성, 삽입, 삭제하는 예제</h3>
<hr>
<p>DOM 트리에 동적으로 객체를 삽입할 수 있습니다.
createElement(), appendChild(), 
removeChild() 메소드를 이용하여 새로운 객체를 생성,
삽입, 삭제하는 예제입니다.</p>
<a href="javascript:createDIV()">DIV 생성</a><p>
<p>
</body></html>
```
