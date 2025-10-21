[예제 7–1]

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>객체 생성 및 활용</title>
</head>
<body>
<h3>객체 생성 및 활용</h3>
<hr>
<script>
// Date 객체 생성
let today = new Date();
// Date 객체의 toLocaleString() 메소드 호출
document.write("현재 시간 : " + today.toLocaleString() + "<br>");
// String 객체 생성
let mystr= new String("자바스크립트 공부하기");
document.write("mystr의 내용 : " + mystr + "<br>");
document.write("mystr의 길이 : " + mystr.length + "<br>");
// mystr.length = 10; // 이 문장은 오류이다.
</script>
</body>
</html>
```

[예제 7-2]

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>[]로 배열 만들기</title>
</head>
<body>
<h3>[]로 배열 만들기</h3>
<hr>
<script>
let plots = [20, 5, 8, 15, 20]; // 원소 5개의 배열 생성
document.write("var plots = [20, 5, 8, 15, 20] <br>");
for(let i=0; i<5; i++) {
	let size = plots[i]; // plots 배열의 i번째 원소
	while(size > 0) {
		document.write("*");
		size--;
	}
	document.write(plots[i] + "<br>");
}
</script>
</body>
</html>
```

[예제 7-3]

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Array 객체로 배열 만들기</title>
</head>
<body>
<h3>Array 객체로 배열 만들기</h3>
<hr>
<script>
let degrees = new Array();
// 빈 배열 생성
degrees[0] = 15.1;
degrees[1] = 15.4; 
degrees[2] = 16.1;
degrees[3] = 17.5; 
degrees[4] = 19.2;
degrees[5] = 21.4; 
let sum = 0; 
for(let i=0; i<degrees.length; i++)
	sum += degrees[i];
document.write("평균 온도는 " + sum/degrees.length + "<br>");
</script>
</body>
</html>
```

[예제 7–4]

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Array 객체의 메소드 활용</title>
<script>
function pr(msg, arr) { 
	document.write(msg + arr.toString() + "<br>");
}
</script>
</head>
<body>
<h3>Array 객체의 메소드 활용</h3>
<hr>
<script>
let a = new Array("황", "김", "이");
let b = new Array("박");
let c;
pr("배열 a = ", a);
pr("배열 b = ", b);
document.write("<hr>");
c = a.concat(b); // c는 a와 b를 연결한 새 배열
pr("c = a.concat(b)후 c = ", c);
pr("c = a.concat(b)후 a = ", a);
c = a.join("##");
// c는 배열 a를 연결한 문자열
pr("c = a.join() 후 c = ", c);
pr("c = a.join() 후 a = ", a);
c = a.reverse(); // a.reverse()로 a 자체 변경. c는 배열
pr("c= a.reverse() 후 c = ", c); 
pr("c= a.reverse() 후 a = ", a);
c = a.slice(1, 2);
// c는 새 배열
pr("c= a.slice(1, 2) 후 c = ", c);
pr("c= a.slice(1, 2) 후 a = ", a);
c = a.sort(); // a.sort()는 a 자체 변경. c는 배열
pr("c= a.sort() 후 c = ", c);
pr("c= a.sort() 후 a = ", a);
c = a.toString();
// toString()은 원소 사이에 ","를 넣어 문자열 생성
document.write("a.toString() : " + c); // c 는 문자열
</script>
</body>
</html>
```

[예제 7–5]

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Date 객체로 현재 시간 알아내기</title>
</head>
<body>
<h3>Date 객체로 현재 시간 알아내기</h3>
<hr>
<script>
let now = new Date();
// 현재 시간 값을 가진 Date 객체 생성
document.write("현재 시간 : " + now.toUTCString() + "<br><hr>");
document.write(now.getFullYear() + "년도<br>");
document.write(now.getMonth() + 1 + "월<br>");
document.write(now.getDate() + "일<br>");
document.write(now.getHours() + "시<br>");
document.write(now.getMinutes() + "분<br>");
document.write(now.getSeconds() + "초<br>");
document.write(now.getMilliseconds() + "밀리초<br><hr>");
let next = new Date(2023, 7, 15, 12, 12, 12); // 7은 8월
document.write("next.toLocaleString() : " + next.toLocaleString() + "<br>");
</script>
</body>
</html>
```

[예제 7–6]

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>방문 시간에 따라 변하는 배경색</title>
</head>
<body>
<h3>페이지 방문 초시간이 짝수이면 violet, 홀수이면 lightskyblue 배경</h3>
<hr>
<script>
let current = new Date();
// 현재 시간을 가진 Date 객체 생성
if(current.getSeconds() % 2 == 0)
	document.body.style.backgroundColor = "violet";
else
	document.body.style.backgroundColor = "lightskyblue";
document.write("현재 시간 : ");
document.write(current.getHours(), "시,");
document.write(current.getMinutes(), "분,");
document.write(current.getSeconds(), "초<br>");
</script>
</body>
</html>
```

[예제 7–7]

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>String 객체의 메소드 활용</title>
</head>
<body>
<h3>String 객체의 메소드 활용</h3>
<hr>
<script>
let a = new String("Boys and Girls");
let b = "!!";
document.write("a : " + a + "<br>");
document.write("b : " + b + "<br><hr>");
document.write(a.charAt(0) + "<br>");
document.write(a.concat(b, "입니다") + "<br>");
document.write(a.indexOf("s") + "<br>");
document.write(a.indexOf("And") + "<br>");
document.write(a.slice(5, 8) + "<br>");
document.write(a.substr(5, 3) + "<br>");
document.write(a.toUpperCase() + "<br>");
document.write(a.replace("and", "or") + "<br>");
document.write(" kitae ".trim() + "<br><hr>");
let sub = a.split(" ");
document.write("a를 빈칸으로 분리<br>");
for(let i=0; i<sub.length; i++)
	document.write("sub" + i + "=" + sub[i] + "<br>");
document.write("<hr>String 메소드를 실행 후 a와 b 변함 없음<br>");
document.write("a : " + a + "<br>");
document.write("b : " + b + "<br>");
</script>
</body>
</html>
```

[예제 7–8]

```html
<!DOCTYPE html>
 <html>
 <head><meta charset="utf-8">
 <title>Math를활용한구구단연습</title>
 <script>
 function randomInt() { // 1~9의십진난수리턴
return Math.floor(Math.random()*9) + 1; 
}
 </script>
 </head>
 <body>
 <h3>Math를활용한구구단연습</h3>
 <hr>
 <script>
 // 구구단문제생성
let ques = randomInt() + "*" + randomInt();
 // 사용자로부터답입력
let user = prompt(ques + " 값은얼마입니까?", 0);
 if(user == null) { // 취소버튼이클릭된경우
document.write("구구단연습을종료합니다");
 }
 else {
 let ans= eval(ques); // 구구단정답계산
if(ans== user) // 정답과사용자입력비교
document.write("정답! ");
 else 
document.write("아니오! ");
 document.write(ques + "=" + "<strong>" + ans
 + "</strong>입니다<br>");
 }
 </script>
 </body></html>

```

[예제 7-9]

```html
<!DOCTYPE html>
 <html><head><meta charset="utf-8"><title>new Object()로사용자객체만들기</title>
 <script>
 //메소드로사용할3 개의함수작성
function inquiry() { return this.balance; } // 잔금조회
function deposit(money) { this.balance+= money; } // money 만큼저금
function withdraw(money) { // 예금인출, money는인출하고자하는액수
// money가balance보다작다고가정
this.balance-= money; 
return money;
 } 
// 사용자객체만들기
let account  = new Object(); 
account.owner= "황기태"; // 계좌주인프로퍼티생성및초기화
account.code= "111"; // 코드프로퍼티생성및초기화
account.balance= 35000; // 잔액프로퍼티생성및초기화
account.inquiry= inquiry; // 메소드작성
account.deposit= deposit; // 메소드작성
account.withdraw= withdraw; // 메소드작성
</script></head>
 <body>
 <h3>new Object()로사용자객체만들기</h3>
 <hr>
 <script>
 // 객체활용
document.write("account : ");
 document.write(account.owner+ ", ");
 document.write(account.code+ ", ");
 document.write(account.balance+ "<br>");
 account.deposit(10000); // 10000원저금
document.write("10000원저금후잔액은"+ account.inquiry() + "<br>");
 account.withdraw(5000); // 5000원인출
document.write("5000원인출후잔액은"+ account.inquiry() + "<br>");
 </script>
 </body></html>
```

[예제 7-10]

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>리터럴 표기법으로 사용자 객체 만들기</title>
<script>
//사용자 객체 만들기
let account = { 
	// 프로퍼티 생성 및 초기화
	owner : "황기태", // 계좌 주인
	code : "111", // 계좌 코드
	balance : 35000, // 잔액 프로퍼티
	// 메소드 작성
	inquiry : function () {
		return this.balance;
	}, // 잔금 조회
	deposit : function(money) {
		this.balance += money;
	}, // 저금. money 만큼 저금
	withdraw : function (money) {
		// 예금 인출, money는 인출하고자 하는 액수
		// money가 balance보다 작다고 가정
		this.balance -= money;
		return money;
	}
};
</script>
</head>
<body>
<h3>리터럴 표기법으로 사용자 객체 만들기</h3>
<hr>
<script>
document.write("account : ");
document.write(account.owner + ", ");
document.write(account.code + ", ");
document.write(account.balance + "<br>");

account.deposit(10000); // 10000원 저금
document.write("10000원 저금 후 잔액은 " + account.inquiry() + "<br>");
account.withdraw(5000); // 5000원 인출
document.write("5000원 인출 후 잔액은 " + account.inquiry() + "<br>");
</script>
</body>
</html>
```

[예제 7-11]

```javascript
 <!DOCTYPE html>
 <html><head><meta charset="utf-8"><title>프로토타입으로객체만들기</title>
 <script>
 // 프로토타입만들기: 생성자함수작성
function Account(owner, code, balance) {
 // 프로퍼티만들기
this.owner= owner; // 계좌주인프로퍼티만들기
this.code= code; // 계좌코드프로퍼티만들기
this.balance= balance; // 잔액프로퍼티만들기
// 메소드만들기
this.inquiry= function () { return this.balance; }
 this.deposit= function (money) { this.balance+= money; } 
this.withdraw= function (money) {// 예금인출, money는인출하는액수
// money가balance보다작다고가정
this.balance-= money; 
return money;
 } 
}
 </script></head>
 <body>
 <h3>Account 프로토타입만들기</h3>
 <hr>
 <script>
 // new 연산자이용하여계좌객체생성
let account = new Account("황기태", "111", 35000);
 // 객체활용
document.write("account : ");
 document.write(account.owner+ ", ");
 document.write(account.code+ ", ");
 document.write(account.balance+ "<br>");
 account.deposit(10000); // 10000원저금
document.write("10000원저금후잔액은" + account.inquiry() + "<br>");
 account.withdraw(5000); // 5000원인출
document.write("5000원인출후잔액은" + account.inquiry() + "<br>");
 </script>
 </body></html>
```
