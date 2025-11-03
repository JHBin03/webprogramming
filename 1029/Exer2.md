
## 예제 9-1 HTML 태그 내에 이벤트 리스너 작성
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>HTML 태그에 리스너 작성</title>
</head>
<body>
<p>HTML 태그에 리스너 작성</p>
<hr>
<p onmouseover="this.style.backgroundColor='orchid'"
onmouseout="this.style.backgroundColor='white'">
마우스 올리면 orchid 색으로 변경</p>
</body>
</html>
````

---

## 예제 9-2 DOM 객체의 이벤트 리스너 프로퍼티에 리스너 등록

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>DOM 객체의 이벤트 리스너 프로퍼티에 함수 등록</title>
<script>
let p;
function init() {
  p = document.getElementById("p");
  p.onmouseover = over;
  p.onmouseout = out;
}
function over() {
  p.style.backgroundColor="orchid";
}
function out() {
  p.style.backgroundColor="white";
}
</script>
</head>
<body onload="init()">
<h3>DOM 객체의 이벤트 리스너 프로퍼티에 함수 등록</h3>
<hr>
<p id="p">마우스 올리면 orchid 색으로 변경</p>
</body>
</html>
```

---

## 예제 9-3 addEventListener() 사용

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>addEventListener()를 이용한 리스너 등록</title>
<script>
let p;
function init() {
  p = document.getElementById("p");
  p.addEventListener("mouseover", over);
  p.addEventListener("mouseout", out);
}
function over() {
  p.style.backgroundColor="orchid";
}
function out() {
  p.style.backgroundColor="white";
}
</script>
</head>
<body onload="init()">
<h3>addEventListener()를 이용한 리스너 등록</h3>
<hr>
<p id="p">마우스 올리면 orchid 색으로 변경</p>
</body>
</html>
```

---

## 예제 9-4 익명 함수로 이벤트 리스너 작성

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>익명 함수로 이벤트 리스너 작성</title>
<script>
let p;
function init() {
  p = document.getElementById("p"); 
  p.onmouseover = function () {
    this.style.backgroundColor = "orchid";
  };
  p.addEventListener("mouseout", 
    function () { this.style.backgroundColor="white"; }
  );
}
</script>
</head>
<body onload="init()">
<h3>익명 함수로 이벤트 리스너 작성</h3>
<hr>
<p id="p">마우스 올리면 orchid 색으로 변경</p>
</body>
</html>
```

---

## 예제 9-5 이벤트 리스너에서 이벤트 객체 전달받기

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>이벤트 객체 전달받기</title>
</head>
<body>
<p id="p">이곳에 마우스를 올려 보세요</p>
<button onclick="f(event)">클릭하세요</button>
<script>
function f(e) {
  alert(e.type);
}
document.getElementById("p").onmouseover = f;
</script>
</body>
</html>
```

---

## 예제 9-6 이벤트 객체의 프로퍼티 출력

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>이벤트 객체 프로퍼티</title>
</head>
<body>
<h3>이벤트 객체의 프로퍼티 출력</h3>
<hr>
<p id="p">버튼을 클릭하면 이벤트 객체를 출력합니다.</p>
<button onclick="f(event)">클릭하세요</button>
<script>
function f(e) {
  let text = "type: " + e.type + "<br>" 
  + "target: " + e.target + "<br>"
  + "currentTarget: " + e.currentTarget + "<br>"
  + "defaultPrevented: " + e.defaultPrevented;
  let p = document.getElementById("p");
  p.innerHTML = text;
}
</script>
</body>
</html>
```

---

## 예제 9-7 이벤트의 디폴트 행동 취소

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>이벤트의 디폴트 행동 취소</title>
<script>
function query() {
  let ret = confirm("네이버로 이동하시겠습니까?");
  return ret;
}
function noAction(e) {
  e.preventDefault();
}
</script>
</head>
<body>
<h3>이벤트의 디폴트 행동 취소</h3>
<hr>
<a href="http://www.naver.com" onclick="return query()">네이버로 이동할 지 물어보는 링크</a>
<hr>
<form>
<input type="checkbox">빵(체크 됨)<br>
<input type="checkbox" onclick="noAction(event)">술(체크 안됨)
</form>
</body>
</html>
```

---

## 예제 9-8 이벤트 흐름

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>이벤트 흐름</title>
</head>
<body>
<p style="color:blue">이것은
<span style="color:red" id="span">문장입니다.</span>
</p>
<form>
<input type="text" name="s">
<input type="button" value="테스트" id="button">
<hr>
</form>
<div id="div" style="color:green"></div>
<script>
let div = document.getElementById("div");
let button = document.getElementById("button");
document.body.addEventListener("click", capture, true);
button.addEventListener("click", bubble, false);
document.body.addEventListener("click", bubble, false);
function capture(e) {
  let obj = e.currentTarget;
  let tagName = obj.tagName;
  div.innerHTML += "<br>capture 단계 : " + tagName + " 태그 " + e.type + "이벤트";
}
function bubble(e) {
  let obj = e.currentTarget;
  let tagName = obj.tagName;
  div.innerHTML += "<br>bubble 단계 : " + tagName + " 태그 " + e.type + "이벤트";
}
</script>
</body>
</html>
```

---

## 예제 9-9 onclick 리스너로 계산기 만들기

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>onclick</title>
<script>
function calculate() {
  let exp = document.getElementById("exp");
  let result = document.getElementById("result");
  result.value = eval(exp.value);
}
</script>
</head>
<body>
<h3>onclick, 계산기 만들기</h3>
<hr>
계산하고자 하는 수식을 입력하고 계산 버튼을 눌러봐요.<br><br>
<form>
식 <input type="text" id="exp" value=""><br>
값 <input type="text" id ="result"> 
<input type="button" value="계산" onclick="calculate()">
</form>
</body>
</html>
```

---

## 예제 9-10 마우스 관련 이벤트 리스너

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>마우스 관련 리스너</title>
<script>
let width=1;
function down(obj) {
  obj.style.fontStyle = "italic";
}
function up(obj) {
  obj.style.fontStyle = "normal";
}
function over(obj) {
  obj.style.borderColor = "violet";
}
function out(obj) {
  obj.style.borderColor = "lightgray";
}
function wheel(e, obj) {
  if(e.wheelDelta < 0) {
    width--;
    if(width < 0) width = 0;
  }
  else width++;
  obj.style.borderStyle = "ridge";
  obj.style.borderWidth = width+"px";
}
</script>
</head>
<body>
<h3>마우스 관련 이벤트 리스너</h3>
<hr>
<div>마우스 관련
<span onmousedown="down(this)"
onmouseup="up(this)"
onmouseover="over(this)"
onmouseout="out(this)"
onwheel="wheel(event, this)"
style="display:inline-block">이벤트</span>가 발생합니다.
</div>
</body>
</html>
```

---

## 예제 9-11 onmousemove와 마우스 위치 및 버튼

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>마우스 이벤트 객체의 프로퍼티</title>
<style>
div {
  background : skyblue;
  width : 250px;
}
</style>
</head>
<body>
<h3>마우스 이벤트 객체의 프로퍼티와 onmousemove</h3>
<hr>
이미지 위에 마우스를 움직일 때 onmousemove 리스너가 실행되고,  
마우스의 위치를 보여줍니다.<br><br>
<img src="media/beach.png" onmousemove="where(event)"><br><br>
<div id="div"></div>
<script>
let div = document.getElementById("div");
function where(e) {
  let text = "버튼=" + e.button + "<br>";
  text += "(screenX, screenY)=" + e.screenX + "," + e.screenY + "<br>";
  text += "(clientX, clientY)=" + e.clientX + "," + e.clientY + "<br>";
  text += "(offsetX, offsetY)=" + e.offsetX + "," + e.offsetY + "<br>";
  text += "(x, y)=" + e.x + "," + e.y + "\n";
  div.innerHTML = text;
}
</script>
</body>
</html>
```

---

## 예제 9-12 oncontextmenu로 소스 보기나 이미지 다운로드 금지

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>oncontextmenu</title>
<script>
function hideMenu() {
  alert("오른쪽 클릭<컨텍스트 메뉴>금지");
  return false;
}
document.oncontextmenu=hideMenu;
</script>
</head>
<body>
<h3>oncontextmenu에서 컨텍스트 메뉴 금지</h3>
<hr>
마우스 오른쪽 클릭은 금지됩니다. 아무곳이나 클릭해도 컨텍스트 메뉴를 볼 수 없습니다.
<img src="media/beach2.png" alt="miami">
</body>
</html>
```

---

## 예제 9-13 onload에서 사이트 이전을 알리는 공고창 출력

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>HTML 문서의 onload</title>
</head>
<body onload="alert('이 사이트는 2022년 9월1일부터 www.js.co.kr로 옮겨지게 됩니다.')">
<h3>HTML 문서의 로딩 완료, onload</h3>
<hr>
이 페이지는 onload 리스너의 사용 예를 보여줍니다.
이 페이지가 출력되고 난 바로 직후 onload 리스너를 통해 경고창을 출력합니다.
</body>
</html>
```

---

## 예제 9-14 onload로 이미지의 크기 알아내기

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"> 
<title>onload로 이미지 크기 출력</title>
<script>
function changeImage() {
  let sel = document.getElementById("sel");
  let img = document.getElementById("myImg");
  img.onload = function () {
    let mySpan = document.getElementById("mySpan");
    mySpan.innerHTML = img.width + "x" + img.height;
  }
  let index= sel.selectedIndex;
  img.src = sel.options[index].value;
}
</script>
</head>
<body onload="changeImage()">
<h3>onload로 이미지 크기 출력</h3>
<hr>
<form>
<select id="sel" onchange="changeImage()">
<option value="images/apple.png">사과
<option value="images/banana.png">바나나
<option value="images/mango.png">망고
</select>
<span id="mySpan">이미지 크기</span>
</form>
<p><img id="myImg" src="media/apple.png" alt="."></p>
</body>
</html>
```

---

## 예제 9-15 new Image()로 이미지 로딩

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>new Image()로 이미지 로딩</title>
<script>
let files = ["media/Penguins.jpg",
"media/Lighthouse.jpg",
"media/Chrysanthemum.jpg",
"media/Desert.jpg",
"media/Hydrangeas.jpg",
"media/Jellyfish.jpg",
"media/Koala.jpg",
"media/Tulips.jpg"];
let imgs = new Array();
for(let i=0; i<files.length; i++) {
  imgs[i] = new Image();
  imgs[i].src = files[i];
}
let next = 1;
function change(img) {
  img.src = imgs[next].src;
  next++;
  next %= imgs.length;
}
</script>
</head>
<body>
<h3>new Image()로 이미지 로딩</h3>
<hr>
이미지를 클릭하면 다음 이미지를 보여줍니다.<p>
<img style="border:20px ridge wheat" src="media/Penguins.jpg" alt="."  width="200" height="200" onclick="change(this)">
</body>
</html>
```

---

## 예제 9-16 onfocus와 onblur, 입력 없이 다른 창으로 갈 수 없음

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>onfocus와 onblur</title>
<script>
function checkFilled(obj) {
  if(obj.value == "") {
    obj.focus();
  }
}
</script>
</head>
<body onload="document.getElementById('name').focus();">
<h3>onfocus와 onblur</h3>
<hr>
<p>이름을 입력하지 않고 다른 창으로 이동할 수 없습니다.</p>
<form>
이름 <input type="text" id="name" onblur="checkFilled(this)"><p>
학번 <input type="text">
</form>
</body>
</html>
```

---

## 예제 9-17 선택된 라디오버튼 알아내기

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>선택된 라디오버튼 알아내기</title>
<script>
function findChecked() {
  let found = null;
  let kcity = document.getElementsByName("city");
  for(let i=0; i<kcity.length; i++) {
    if(kcity[i].checked == true) 
      found = kcity[i];
  }
  if(found != null) 
    alert(found.value + "이 선택되었음");
  else
    alert("선택된 것이 없음");
}
</script>
</head>
<body>
<h3>버튼을 클릭하면 선택된 라디오 버튼의 value를 출력합니다.</h3>
<hr>
<form>
<input type="radio" name="city" value="seoul" checked>서울
<input type="radio" name="city" value="busan">부산
<input type="radio" name="city" value="chunchen">춘천
<input type="button" value="find checked" onclick="findChecked()">
</form>
</body>
</html>
```

---

## 예제 9-18 체크박스로 선택한 물품 계산

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>선택된 물품 계산하기</title>
<script>
let sum=0;
function calc(cBox) {
  if(cBox.checked)
    sum += parseInt(cBox.value);
  else
    sum -= parseInt(cBox.value);
  document.getElementById("sumtext").value = sum;
}
</script>
</head>
<body>
<h3>물품을 선택하면 금액이 자동 계산됩니다</h3>
<hr>
<form>
<input type="checkbox" name="hap" value="10000" onclick="calc(this)">모자 1만원
<input type="checkbox" name="shose" value="30000" onclick="calc(this)">구두 3만원
<input type="checkbox" name="bag" value="80000" onclick="calc(this)">명품가방 8만원<br>
지불하실 금액 <input type="text" id="sumtext" value="0">
</form>
</body>
</html>
```

---

## 예제 9-19 select 객체에서 선택한 과일 출력

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>select 객체에서 선택한 과일출력</title>
<script>
function drawImage() {
  let sel = document.getElementById("fruits");
  let img = document.getElementById("fruitimage");
  img.src = sel.options[sel.selectedIndex].value;
}
</script>
</head>
<body onload="drawImage()">
<h3>select 객체에서 선택한 과일 출력</h3>
<hr>
과일을 선택하면 이미지가 출력됩니다.<p>
<form>
<select id="fruits" onchange="drawImage()">
<option value="media/strawberry.png">딸기
<option value="media/banana.png" selected>바나나
<option value="media/apple.png">사과
</select>
<img id="fruitimage" src="media/banana.gif" alt="">
</form>
</body>
</html>
```

---

## 예제 9-20 키 이벤트 리스너와 이벤트 객체의 프로퍼티

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>키 이벤트</title>
<script>
function whatKeyDown(e) {
  let str = "";
  let div = document.getElementById("div");
  div.innerHTML = "";
  str += "e.key = " + e.key + "<br>";
  str += "e.code = " + e.code + "<br>";
  div.innerHTML = str;
}
</script>
</head>
<body>
<h3
```
