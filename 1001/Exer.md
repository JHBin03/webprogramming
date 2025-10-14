**예제 6-1**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>이벤트 리스너 속성에 자바스크립트 코드</title>
</head>
<body>
<h3>마우스 올려 보세요</h3>
<hr>
<img src="media/apple.png" alt="이미지"
onmouseover="this.src='media/banana.png'"
onmouseout="this.src='media/apple.png'">
</body>
</html>
```

**예제 6-2**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>script 태그에 자바스크립트 작성</title>
<script>
function over(obj) {
obj.src="media/banana.png";
}
function out(obj) {
obj.src="media/apple.png";
}
</script>
</head>
<body>
<h3>마우스 올려 보세요</h3>
<hr>
<img src="media/apple.png" alt="이미지"
onmouseover="over(this)"
onmouseout="out(this)">
</body>
</html>
```

**예제 6-3**

```javascript
/* 자바스크립트 파일 lib.js */
function over(obj) {
obj.src="media/banana.png";
}
function out(obj) {
obj.src="media/apple.png";
}
```

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>외부 파일에 자바스크립트 작성</title>
<script src="lib.js">
</script>
</head>
<body>
<h3>마우스 올려 보세요</h3>
<hr>
<img src="media/apple.png" alt="이미지"
onmouseover="over(this)"
onmouseout="out(this)">
</body>
</html>
```

**예제 6-4**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>URL에 자바스크립트 작성</title>
</head>
<body>
<h3>링크의 href에 자바스크립트 작성</h3>
<hr>
<a href="javascript:alert('클릭하셨어요?')">
클릭해보세요</a>
</body>
</html>
```

**예제 6-5**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>document.write() 활용</title>
</head>
<body>
<h3>document.write() 활용</h3>
<hr>
<script>
document.write("<h3>Welcome!</h3>");
document.write("2 + 5 는 <br>");
document.write("<mark>7 입니다.</mark>");
</script>
</body>
</html>
```

**예제 6-6**

```html
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>변수 선언</title></head>
<body>
<h3>변수 선언, 전역/지역/블록 변수</h3>
<hr>
<script>
let x; // 전역 변수 x 선언. var로 선언해도 동일
function f() {
let y; // 함수 f() 내에서만 사용되는 지역 변수 y 선언. var로 선언해도 동일
x = 10; // 전역 변수 x에 10 저장
y = 20; // 지역 변수 y에 20 저장
z = 30; // 새로운 전역 변수 z가 선언되고 30이 저장됨
if(y == 20) {
let b = 40; // if 블록에서만 사용되는 블록 변수 b 선언
b++;
document.write("if 블록 내 블록변수 b = " + b + "<br>");
}
// 이곳에서는 블록 변수 b에 접근할 수 없음
// 이곳에서는 변수 x, y, z에 모두 접근 가능
document.write("함수 f() 내 지역변수 y = " + y + "<br>");
}
f(); // 함수 f() 호출
document.write("전역변수 x = " + x + "<br>");
document.write("전역변수 z = " + z);
// 이곳에서는 변수 x와 z만 접근 가능, 지역 변수 y와 블록 변수 b는 접근 불가
</script>
</body></html>
```

**예제 6-7**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>리터럴</title></head>
<body>
<h3>리터럴</h3>
<hr>
<script>
let oct = 015; // 015는 8진수. 10진수로 13
let hex = 0x15; // 0x14는 16진수. 10진수로 21
let condition = true; // True로 하면 안됨
document.write("8진수 015는 십진수로 " + oct + "<br>");
document.write("16진수 0x15는 십진수로 " + hex + "<br>");
document.write("condition은 " + condition + "<br>");
document.write('문자열 : 단일인용부호로도 표현' + "<br>");
document.write("그녀는 \"누구세요\"라고 했습니다.");
</script>
</body>
</html>
```

**예제 6-8**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>산술연산</title>
</head>
<body>
<h3>산술연산</h3>
<hr>
<script>
let x=32;
let total = 100 + x*2/4 - 3; // total은 113
let div = x / 10; // div는 3.2
let mod = x % 2; // x를 2로 나눈 나머지, 0
document.write("x : " + x + "<br><br>");
document.write("100 + x*2/4 - 3 = " + total + "<br>");
document.write("x/10 = " + div + "<br>");
document.write("x%2 = " + mod + "<br>");
</script>
</body>
</html>
```

**예제 6-9**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>대입 연산</title>
</head>
<body>
<h3>대입 연산</h3>
<hr>
<script>
let x=3, y=3, z=3;
document.write("x=" + x + ", y=" + y);
document.write(", z=" + z + "<br><br>");
x += 3; // x=x+3 -> x=6
y *= 3; // y=y*3 -> y=9
z %= 2; // z=z%2 -> z=1
document.write("x += 3; 실행 후, x=" + x + "<br>");
document.write("y *= 3; 실행 후, y=" + y + "<br>");
document.write("z %= 2; 실행 후, z=" + z);
</script>
</body>
</html>
```

**예제 6-10**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>비교 연산</title>
</head>
<body>
<h3>비교 연산</h3>
<hr>
<script>
let x=13, y=7;
document.write("x=" + x + ", y=" + y + "<br><br>");
document.write("x == y : " + (x == y) + "<br>");
document.write("x != y : " + (x != y) + "<br>");
document.write("x >= y : " + (x >= y) + "<br>");
document.write("x > y : " + (x > y) + "<br>");
document.write("x <= y : " + (x <= y) + "<br>");
document.write("x < y : " + (x < y) + "<br>");
</script>
</body>
</html>
```

**예제 6-11**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>논리 연산</title>
</head>
<body>
<h3>논리 연산</h3>
<hr>
<script>
let x=true, y=false;
document.write("x=" + x + ", y=" + y + "<br><br>");
document.write("x && y : "+ (x&&y) +"<br>");
document.write("x || y : "+ (x||y) +"<br>");
document.write("!x : " + (!x) +"<br>");
document.write("<hr>");
document.write("(3>2) && (3<4) : " + ((3>2)&&(3<4)) + "<br>");
document.write("(3==2) || (-1<0) : " + ((3==2)||(-1<0)));
</script>
</body>
</html>
```

**예제 6-12**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>조건 연산</title>
</head>
<body>
<h3>조건 연산</h3>
<hr>
<script>
let a=3, b=5;
document.write("a=" + a + ", b=" + b + "<br><br>");
document.write("두수의 차이 : " + ((a>b)?(a-b):(b-a)));
</script>
</body>
</html>
```

**예제 6-13**

```html
<!DOCTYPE html>
<html><head>
<meta charset="utf-8"><title>비트 연산</title>
<script>
function digit8(v) { // 숫자v를8비트2진수로 변환
let str="";
for(let i=0; i<8; i++, v<<=1) {
if((v & 0x80)) str += "1";
else str += "0";
}
return str;
}
</script>
</head>
<body>
<h3>비트 논리 연산과 시프트 연산</h3>
<hr>
<script>
let x=10, y=3;
document.write("<pre>");
document.write("x=" + x + ", y=" + y + "<br>");
document.write("x : " + digit8(x) + "<br>");
document.write("y : " + digit8(y) + "<br>");
document.write("<hr>");
document.write("x & y : " + digit8(x&y) + "<br>");
document.write("x | y : " + digit8(x|y) + "<br>");
document.write("x ^ y : " + digit8(x^y) + "<br>");
document.write("~x : " + digit8(~x) + "<br>");
document.write("<hr>");
document.write("x << 1 : " + digit8(x<<1) + " (" + (x<<1) + ")<br>");
document.write("x >> 1 : " + digit8(x>>1) + " (" + (x>>1) + ")<br>");
document.write("x >>> 1: " + digit8(x>>>1) + " (" + (x>>>1) + ")");
document.write("</pre>");
</script>
</body>
</html>
```

**예제 6-14**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>문자열 연산</title>
</head>
<body>
<h3>문자열 연산</h3>
<hr>
<script>
document.write("abc" + 23 + "<br>");
document.write(23 + "abc" + "<br>");
document.write(23 + "35" + "<br>");
document.write(23 + 35 + "<br>");
document.write(23 + 35 + "abc" + "<br>");
document.write("abc" + 23 + 35 + "<br><hr>");
let name = "kitae";
document.write(name == "kitae");
document.write("<br>");
document.write(name > "park");
</script>
</body>
</html>
```

**예제 6-15**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>if-else</title>
</head>
<body>
<h3>if-else를 이용한 학점 매기기</h3>
<hr>
<script>
let grade;
let score = prompt("황기태 님 점수를 입력하세요", 100);
score = parseInt(score); // 문자열을 숫자로 바꿈
if(score >= 90) // score가 90 이상
grade = "A";
else if(score >= 80) // 80 이상 90 미만
grade = "B";
else if(score >= 70) // 70 이상 80 미만
grade = "C";
else if(score >= 60) // 60 이상 70 미만
grade = "D";
else // 60 미만
grade = "F";
document.write(score + "는 " + grade + "입니다.<br>")
</script>
</body>
</html>
```

**예제 6-16**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>switch</title>
</head>
<body>
<h3>switch 문으로 커피 주문</h3>
<hr>
<script>
let price = 0;
let coffee = prompt("무슨 커피 드릴까요?", "");
switch(coffee) {
case "espresso" :
case "에스프레소" :
price = 2000;
break;
case "카푸치노" :
price = 3000;
break;
case "카페라떼" :
price = 3500;
break;
default :
document.write(coffee + "는 없습니다.");
price = 0;
}
if(price != 0)
document.write(coffee + "는 " + price + "원입니다.");
</script>
</body>
</html>
```

**예제 6-17**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>for 문</title>
</head>
<body>
<h3>for 문으로 10px~35px 크기 출력</h3>
<hr>
<script>
for(let size=10; size<=35; size+=5) { // 5씩 증가
document.write("<span ");
document.write("style='font-size:" + size + "px'>");
document.write(size + "px");
document.write("</span>");
}
</script>
</body>
</html>
```

**예제 6-18**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>while 문</title>
</head>
<body>
<h3>while 문으로 0에서 n까지 합</h3>
<hr>
<script>
let n = prompt("0보다 큰 정수를 입력하세요", 0);
n = parseInt(n); // 문자열 n을 숫자로 바꿈
let i=0, sum=0;
while(i<=n) { // i가 0에서 n까지 반복
sum += i;
i++;
}
document.write("0에서 " + n + "까지 합은 " + sum);
</script>
</body>
</html>
```

**예제 6-19**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>do-while 문</title>
</head>
<body>
<h3>do-while 문으로 0에서 n까지 합</h3>
<hr>
<script>
let n = prompt("0보다 큰 정수를 입력하세요", 0);
n = parseInt(n); // 문자열 n을 숫자로 바꿈
let i=0, sum=0;
do {
sum += i;
i++;
} while(i<=n); // i가 0~n까지 반복
document.write("0에서 " + n + "까지 합은 " + sum);
</script>
</body>
</html>
```

**예제 6-20**

```html
<!DOCTYPE html>
<html>
<head><meta charset="utf-8">
<title>함수 정의와 호출</title>
<script>
// 사각형의 넓이를 리턴하는 함수
function calcArea(w, h) {
let area = w * h;
return area;
}
// 원의 면적을 계산하고 document.write()로 출력하는 함수
function circleArea(r) {
document.write("반지름 " + r + "인 원의 면적은 " + r*r*3.14 + "입니다.<br>");
}
</script>
</head>
<body>
<h3>함수 정의 및 호출</h3>
<hr>
<script>
let res = calcArea(30, 20);
document.write("width=30, height=20인 사각형의 넓이는 " + res + "<br>");
circleArea(5);
</script>
</body>
</html>
```

**예제 6-21**

```html
<!DOCTYPE html>
<html>
<head><meta charset="utf-8">
<title>콜백 함수</title>
<script>
function callFiveTimes(callback) {
for(let i=0; i<5; i++) {
callback(); // 매개변수 callback은 함수
}
}
function printHello() {
document.write("안녕하세요<br>");
}
</script>
</head>
<body>
<h3>콜백 함수</h3>
<hr>
<script>
callFiveTimes(printHello);
</script>
</body>
</html>
```

**예제 6-22**

```html
<!DOCTYPE html>
<html>
<head><meta charset="utf-8">
<title>익명 함수</title>
<script>
let sum = function(a, b) { // 익명 함수를 변수 sum에 저장
return a+b;
}
function callTenTimes(callback) {
for(let i=0; i<10; i++) {
callback(); // 익명 함수 호출
}
}
</script>
</head>
<body>
<h3>익명 함수</h3>
<hr>
<script>
document.write("sum(10, 20) = " + sum(10, 20) + "<br>");
callTenTimes(function() { // 이름 없는 함수(익명 함수)를 매개변수로 전달
document.write("10 번 반복합니다.<br>");
});
</script>
</body>
</html>
```

**예제 6-23**

```html
<!DOCTYPE html>
<html>
<head><meta charset="utf-8">
<title>자바스크립트 전역함수</title>
<script>
function evalParseIntIsNaN() {
let res = eval("2*3+4*6"); // res는 30
document.write("eval(\"2*3+4*6\")는 " + res + "<br>");
let m = parseInt("32");
document.write("parseInt(\"32\")는 " + m + "<br>");
let n = parseInt("0x32");
document.write("parseInt(\"0x32\")는 " + n + "<br><br>");
// "hello"는 정수로 변환할 수 없으므로 parseInt("hello")는 NaN 리턴
n = parseInt("hello"); 
if(isNaN(n)) // true
document.write("hello는 숫자가 아닙니다.");
}
</script>
</head>
<body>
<h3>eval(), parseInt(), isNaN()</h3>
<hr>
<script>
evalParseIntIsNaN();
</script>
</body>
</html>
```
