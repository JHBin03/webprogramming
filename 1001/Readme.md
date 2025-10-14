# 6장: 자바스크립트 언어

## 1\. 자바스크립트(JavaScript)란?

1995년 넷스케이프(Netscape)에서 개발했으며, Netscape Navigator 2.0 브라우저에 최초로 탑재되었다.

### 특징

  * **HTML 문서에 내장**: HTML 코드 안에 직접 작성하여 사용한다.
  * **인터프리터 언어**: 컴파일 과정 없이 웹 브라우저의 자바스크립트 처리기에 의해 바로 실행된다.
  * **C 언어 기반 구조**: C 언어의 문법 구조를 차용하여 배우기 쉽다.

### 웹 페이지에서의 역할

  * **사용자 입력 및 계산**: 마우스와 키보드 입력을 처리하고 계산 기능을 수행한다.
  * **동적 제어**: HTML 태그의 속성, 콘텐츠, CSS 속성 값을 동적으로 변경한다.
  * **브라우저 제어**: 브라우저 창의 크기 조절, 새 창 열기/닫기, 히스토리 제어 등을 수행한다.
  * **웹 서버와 통신**: 웹 애플리케이션을 작성하고 서버와 데이터를 주고받는다.
  * **고급 기능**: 캔버스 그래픽, 로컬 스토리지 저장, 위치 정보 서비스 등 다양한 기능을 제공한다.

-----

## 2\. 자바스크립트 코드 작성 위치

자바스크립트 코드는 다음 4가지 위치에 작성할 수 있다.

1.  HTML 태그의 이벤트 리스너 속성
2.  `<script>` 태그 내부
3.  별도의 `.js` 파일
4.  URL 부분

### 1\) HTML 태그의 이벤트 리스너 속성

HTML 태그의 `onclick`, `onmouseover` 같은 이벤트 리스너 속성에 직접 코드를 작성할 수 있다.

**예시:**

```html
<img src="media/apple.png" alt="이미지"
     onmouseover="this.src='media/banana.png'"
     onmouseout="this.src='media/apple.png'">
```

> 여기서 `this`는 현재 이벤트가 발생한 `<img>` 태그 자신을 가리키는 키워드이다.

### 2\) `<script>` 태그

`<head>` 또는 `<body>` 태그 내부에 `<script>` 태그를 사용하여 자바스크립트 코드를 작성할 수 있으며, 한 페이지에 여러 번 삽입이 가능하다.

**예시:**

```html
<head>
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
    <img src="media/apple.png" alt="이미지"
         onmouseover="over(this)"
         onmouseout="out(this)">
</body>
```

### 3\) 별도의 `.js` 파일

자바스크립트 코드를 확장자가 `.js`인 별도 파일로 저장하여 여러 웹 페이지에서 재사용할 수 있다.

  * `.js` 파일에는 `<script>` 태그 없이 순수 자바스크립트 코드만 작성한다.
  * HTML에서는 `<script>` 태그의 `src` 속성을 이용해 파일을 불러온다.

**예시:**

`lib.js` 파일:

```javascript
/* 자바스크립트 파일 lib.js */
function over(obj) {
    obj.src="media/banana.png";
}
function out(obj) {
    obj.src="media/apple.png";
}
```

`index.html` 파일:

```html
<head>
    <script src="lib.js"></script>
</head>
<body>
    <img src="media/apple.png" alt="이미지"
         onmouseover="over(this)"
         onmouseout="out(this)">
</body>
```

### 4\) URL 부분

`<a>` 태그의 `href` 속성에 `javascript:` 프로토콜을 사용하여 간단한 코드를 실행할 수 있다.

**예시:**

```html
<a href="javascript:alert('클릭하셨어요?')">클릭해보세요</a>
```

-----

## 3\. 입출력

### 출력: `document.write()`

`document.write()` 또는 `document.writeln()`을 사용하여 웹 페이지에 HTML 콘텐츠를 직접 출력할 수 있다. `writeln()`은 출력 내용 끝에 `\n`을 추가하지만, HTML에서는 줄바꿈으로 표시되지 않고 공백 하나로 처리될 수 있다.

**예시:**

```javascript
document.write("<h3>Welcome!</h3>");
document.write("2 + 5 는 <br>");
document.write("<mark>7 입니다.</mark>");
```

### 입력 및 알림 (다이얼로그)

  * `alert("메시지")`: 사용자에게 메시지를 보여주는 경고창을 띄운다.
  * `prompt("메시지", "기본값")`: 사용자로부터 문자열을 입력받는 다이얼로그를 띄운다.
  * `confirm("메시지")`: '확인'과 '취소' 버튼이 있는 다이얼로그를 띄우고, 사용자의 선택에 따라 `true` 또는 `false`를 반환한다.

-----

## 4\. 기본 문법

### 식별자

변수, 함수, 상수 등의 이름을 식별자라고 한다.

  * **규칙**:
      * 첫 글자는 알파벳, `_`, `$`만 가능하다.
      * 두 번째 글자부터는 알파벳, 숫자, `_`, `$`를 사용할 수 있다.
      * 대소문자를 구분한다 (`myHome`과 `myhome`은 다름).
      * 예약어(`if`, `for` 등)는 사용할 수 없다.

### 문장 및 주석

  * 문장의 끝에는 세미콜론(;)을 붙여 구분한다. (한 줄에 한 문장만 있을 경우 생략 가능)
  * **주석**:
      * `//`: 한 줄 주석
      * `/* ... */`: 여러 줄 주석

### 데이터 타입

  * **숫자**: 정수와 실수를 모두 포함한다 (예: `42`, `3.14`).
  * **문자열**: 따옴표(`"`)나 작은따옴표(`'`)로 묶인 텍스트이다 (예: `'좋은 세상'`, `"a"`).
  * **논리**: `true` 또는 `false` 값을 가진다.
  * **객체 레퍼런스**: 객체를 가리키는 값이다.
  * **null**: 값이 없음을 나타내는 특수 키워드이다.

### 변수

데이터를 저장하는 공간으로, `var`, `let`, `const` 키워드를 사용해 선언한다.

  * `var`: 예전부터 사용되던 변수 선언 키워드이다.
  * `let`: 2015년(ES6)에 도입되었으며, 변수 재선언을 방지하고 블록 범위(scope)를 가진다.
  * `const`: 상수(값이 변하지 않는 변수)를 선언할 때 사용하며, 재할당이 불가능하다.

> **권장사항**: `var`보다 `let`과 `const`의 사용이 권장된다. 이는 개발자의 실수를 줄여주기 때문이다.

#### 변수의 범위 (Scope)

  * **전역 변수**: 함수 밖에서 선언되거나 키워드 없이 선언된 변수. 프로그램 전체에서 접근 가능하다.
  * **지역 변수**: 함수 내에서 `let`이나 `var`로 선언된 변수. 해당 함수 내에서만 접근 가능하다.
  * **블록 변수**: `if`, `for` 등 블록 `{}` 안에서 `let`으로 선언된 변수. 해당 블록 내에서만 유효하다.

### 리터럴(Literals)

데이터 값 그 자체를 의미한다.
| 종류 | 특징 | 예시 |
| --- | --- | --- |
| **정수** | 8진수: `0`으로 시작 | `let n = 015; // 10진수로 13` |
| | 10진수 | `let n = 15;` |
| | 16진수: `0x`로 시작 | `let n = 0x15; // 10진수로 21` |
| **실수** | 소수형 | `let height = 0.1234;` |
| | 지수형 | `let height = 1234E-4;` |
| **논리** | 참/거짓 | `let condition = true;` |
| **문자열** | `""` 또는 `''`로 묶음 | `let hello = "안녕하세요";` |
| **기타** | `null` (값이 없음) | `let ret = null;` |
| | `NaN` (Not-a-Number) | `let n = parseInt("abc");` |
*표의 모든 정보 출처:*

-----

## 5\. 연산자

### 산술 연산자

`+`, `-`, `*`, `/`, `%` (나머지) 연산자가 있으며, 연산 결과는 항상 실수이다.

### 증감 연산자

`++` (1 증가), `--` (1 감소) 연산자가 있다. 변수 앞에 붙으면(전위) 값을 먼저 증감시킨 후 연산하고, 뒤에 붙으면(후위) 연산에 값을 먼저 사용한 후 증감시킨다.

### 대입 연산자

`=`, `+=`, `-=`, `*=`, `/=`, `%=` 등이 있으며, 오른쪽 식의 결과를 왼쪽 변수에 할당한다.

### 비교 연산자

두 값을 비교하여 `true` 또는 `false`를 반환한다. (`>`, `<`, `>=`, `<=`, `==`, `!=`)

### 논리 연산자

`&&` (AND), `||` (OR), `!` (NOT) 연산자가 있다.

### 조건(삼항) 연산자

`(조건식) ? 참일_때_값 : 거짓일_때_값` 형태로, 조건식의 결과에 따라 다른 값을 반환한다.

### 문자열 연산자

  * `+`: 문자열을 연결한다. 숫자와 문자열을 더하면 숫자가 문자열로 변환된 후 연결된다.
      * `23 + 35 + "abc"` → `"58abc"`
      * `"abc" + 23 + 35` → `"abc2335"`
  * **비교**: `==`, `!=`, `>`, `<` 등 비교 연산자는 사전 순으로 문자열을 비교한다.

-----

## 6\. 제어문

### 조건문

#### `if`, `if-else`

조건식의 참/거짓에 따라 코드 블록을 실행한다. `else if`를 사용하여 여러 조건을 검사할 수 있다.

**예시 (학점 계산):**

```javascript
let score = 95;
let grade;
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else {
    grade = "F";
}
document.write(score + "는 " + grade + "입니다.");
```

#### `switch` 문

하나의 식이 가질 수 있는 여러 값에 따라 다른 코드를 실행할 때 유용하다.

  * `case`: 검사할 값
  * `break`: `switch` 문을 빠져나감
  * `default`: 일치하는 `case`가 없을 때 실행

**예시 (커피 주문):**

```javascript
let coffee = "espresso";
let price = 0;
switch (coffee) {
    case "espresso":
    case "에스프레소":
        price = 2000;
        break;
    case "카푸치노":
        price = 3000;
        break;
    default:
        document.write(coffee + "는 없습니다.");
}
if (price != 0) {
    document.write(coffee + "는 " + price + "원입니다.");
}
```

### 반복문

#### `for` 문

초기식, 조건식, 반복 후 작업으로 구성되며, 정해진 횟수만큼 코드를 반복 실행한다.

```javascript
// 10px부터 35px까지 5씩 증가하며 텍스트 출력
for (let size = 10; size <= 35; size += 5) {
    document.write("<span style='font-size:" + size + "px'>" + size + "px</span>");
}
```

#### `while` 문

조건식이 참인 동안 코드 블록을 계속해서 반복 실행한다.

```javascript
// 0부터 n까지의 합 구하기
let i = 0, sum = 0, n = 25;
while (i <= n) {
    sum += i;
    i++;
}
document.write("0에서 " + n + "까지 합은 " + sum);
```

#### `do-while` 문

`while`문과 유사하지만, 조건식을 검사하기 전에 코드 블록을 **최소 한 번** 실행한다.

#### `break` 와 `continue`

  * `break`: 현재 실행 중인 반복문을 즉시 종료한다.
  * `continue`: 현재 반복을 중단하고 다음 반복으로 넘어간다.

-----

## 7\. 함수

함수는 특정 목적을 위해 작성된 코드 블록으로, 데이터를 전달받아 처리하고 결과를 반환할 수 있다.

### 함수 정의와 호출

**정의:**

```javascript
function adder(a, b) {
    let sum;
    sum = a + b;
    return sum;
}
```

**호출:**

```javascript
let n = adder(24567, 98374); // 함수 호출
document.write("24567 + 98374는 " + n);
```

### 주요 전역 함수

| 함수명 | 설명 |
| --- | --- |
| `eval(exp)` | 문자열 `exp`를 자바스크립트 식으로 계산하고 결과를 반환한다. |
| `parseInt(str)` | 문자열 `str`을 10진수 정수로 변환하여 반환한다. |
| `isNaN(value)` | `value`가 숫자가 아니면 `true`를 반환한다. |
*표의 모든 정보 출처:*

**예시:**

```javascript
let res = eval("2*3+4*6"); // res는 30
let m = parseInt("32"); // m은 32
let n = parseInt("0x32"); // n은 50 (16진수로 해석)
isNaN("hello"); // true를 반환
```
