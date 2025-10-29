# 8장 HTML DOM과 Document
## 1 DOM과 BOM의 개념

| 구분                              | 설명                                                                   |
| ------------------------------- | -------------------------------------------------------------------- |
| **BOM (Browser Object Model)**  | 브라우저 자체를 객체로 다루는 모델. <br>제목표시줄, 주소창, 도구모음 등 **브라우저 전체 구조**를 객체로 표현.  |
| **DOM (Document Object Model)** | 브라우저의 **콘텐츠 영역(HTML 문서)** 을 객체로 표현. <br>HTML 태그마다 객체를 만들어 트리 구조로 관리. |
| **코어 객체**                       | 자바스크립트가 기본적으로 제공하는 내장 객체들 (`Array`, `Date`, `Math` 등).               |

 **BOM 안에 DOM이 포함**된다.
 즉, **window > document > DOM 요소들** 구조로 구성된다.
 자바스크립트는 이 객체들을 제어하여 화면을 동적으로 바꾼다.

---

## 2️2 DOM의 필요성과 동작 원리

1. HTML 문서는 단순한 **텍스트 파일**이다.
2. 브라우저가 이를 해석하여 **DOM 트리**를 만든다.
3. DOM 트리의 각 노드는 **HTML 태그를 객체로 변환한 것**이다.
4. 자바스크립트는 이 DOM 객체를 조작해 **콘텐츠나 스타일을 변경**한다.

 따라서, 화면의 변화 = DOM 트리의 변화

---

## 3️ DOM 트리 구조

* **HTML 태그의 포함 관계**에 따라 부모-자식 트리로 구성됨.
* HTML 문서를 해석하는 단계:

  1. 브라우저가 `document` 객체 생성
  2. HTML 태그를 읽으며 DOM 객체 생성
  3. DOM 객체를 화면에 출력
  4. 문서 로드 완료 → DOM 트리 완성
  5. DOM 객체가 수정되면 → 화면도 즉시 갱신됨

 DOM 트리의 루트(root)는 항상 `document` 객체.

---

## 4️ HTML 요소(엘리먼트)의 구성 요소

| 구성 요소              | 설명                                      |
| ------------------ | --------------------------------------- |
| **엘리먼트 이름**        | 태그 이름(`<p>`, `<div>`, `<img>` 등)        |
| **속성(attribute)**  | 태그에 지정된 속성 (`id`, `src`, `class` 등)     |
| **CSS3 스타일**       | `style` 속성으로 지정한 스타일 정보                 |
| **이벤트 리스너**        | 이벤트 발생 시 실행할 동작 (`onclick`, `onload` 등) |
| **콘텐츠(innerHTML)** | 시작/종료 태그 사이의 내용                         |

 태그 + 콘텐츠 = **엘리먼트(Element)**

---

## 5️ DOM 객체의 구성 요소

| 구성 요소                       | 설명                        |
| --------------------------- | ------------------------- |
| **프로퍼티(property)**          | HTML 속성(attribute)을 반영    |
| **메소드(method)**             | HTML 태그를 제어하는 멤버 함수       |
| **컬렉션(collection)**         | 자식 DOM 객체들의 주소 정보 (배열 비슷) |
| **이벤트 리스너(event listener)** | 클릭, 키입력 등 이벤트 시 동작 연결     |
| **CSS3 스타일(style)**         | 각 태그의 모양 제어용 스타일 객체       |

예시)

```js
let p = document.getElementById("firstP");
p.style.color = "red";   // 글자색 변경
p.innerHTML = "새 내용"; // 콘텐츠 변경
```

---

## 6️ DOM 객체 다루기

### (1) DOM 찾기

| 방법                               | 설명                     |
| -------------------------------- | ---------------------- |
| `getElementById("id명")`          | 특정 id를 가진 태그 1개        |
| `getElementsByTagName("태그명")`    | 해당 태그명을 가진 모든 객체 (배열)  |
| `getElementsByClassName("클래스명")` | 동일한 class 속성을 가진 모든 객체 |

 `document.`는 생략 가능 (`window.document`와 동일)

---

### (2) 스타일 동적 변경

```js
let span = document.getElementById("mySpan");
span.style.color = "green";
span.style.fontSize = "30px";
span.style.border = "2px solid magenta";
```

CSS의 하이픈(-) 표기법 → **camelCase로 변환**

* `background-color` → `backgroundColor`
* `font-size` → `fontSize`

---

### (3) 콘텐츠 변경 (innerHTML)

```js
let p = document.getElementById("firstP");
p.innerHTML = "나의 <img src='puppy.png'> 강아지입니다.";
```

* 태그 내부의 HTML을 **새로 교체**한다.
* 클릭 등 이벤트를 통해 동적으로 HTML 변경 가능.

---

### (4) this 키워드

* **현재 이벤트가 발생한 객체 자신**을 가리킴.

```html
<div onclick="this.style.backgroundColor='orange'">클릭</div>
```

또는

```js
function change(obj, size, color) {
  obj.style.fontSize = size;
  obj.style.color = color;
}
<button onclick="change(this, '30px', 'red')">버튼</button>
```

---

## 7️ document 객체

| 항목        | 설명                                                       |
| --------- | -------------------------------------------------------- |
| **역할**    | HTML 문서 전체를 대변하는 객체                                      |
| **위치**    | DOM 트리의 루트 (최상위 객체)                                      |
| **프로퍼티**  | URL, title, domain, lastModified 등                       |
| **메소드**   | DOM 검색(getElement...), 생성(createElement...), 제어(write 등) |
| **접근 방법** | `window.document` 또는 `document`                          |

 `document`는 스타일이 없음 (CSS3 style 불가)

예시)

```js
document.location   // 문서의 URL
document.title      // 문서의 제목
document.lastModified // 마지막 수정일
```

---

## 8️ document 관련 메소드

| 메소드           | 설명                     |
| ------------- | ---------------------- |
| **write()**   | HTML 콘텐츠를 문서 끝에 추가     |
| **writeln()** | write() + 줄바꿈(`\n`) 포함 |
| **open()**    | 현재 문서 내용 삭제, 새 문서 시작   |
| **close()**   | 문서 완성 후 더 이상 작성 불가     |

 **주의:**
`document.write()`를 문서 로드 완료 후 사용하면 **기존 내용이 모두 사라짐**.

---

## 9️ 문서의 동적 구성 (DOM 조작)

자바스크립트로 **태그를 새로 생성하거나 삭제**할 수 있다.

### (1) 생성

```js
let newDIV = document.createElement("div");
newDIV.innerHTML = "새로 생성된 DIV입니다.";
newDIV.setAttribute("id", "myDiv");
newDIV.style.backgroundColor = "yellow";
```

### (2) 삽입

```js
let parent = document.getElementById("p");
parent.appendChild(newDIV);   // 부모의 마지막에 추가
// parent.insertBefore(newDIV, 기준자식);  // 특정 위치에 삽입
```

### (3) 삭제

```js
let myDiv = document.getElementById("myDiv");
let parent = myDiv.parentElement;
parent.removeChild(myDiv);
```

 즉, `createElement()` + `appendChild()` + `removeChild()` 조합으로
동적으로 **HTML 구조를 변경**할 수 있다.

---

##  핵심 정리 요약

| 구분            | 핵심 키워드                                                                                |
| ------------- | ------------------------------------------------------------------------------------- |
| **DOM의 목적**   | HTML 태그를 객체로 만들어 자바스크립트로 제어                                                           |
| **BOM과 관계**   | BOM(브라우저 전체) 안에 DOM(HTML 콘텐츠)이 포함                                                     |
| **DOM 트리 구조** | 부모-자식 관계의 트리. 루트는 `document`                                                          |
| **DOM 객체 구성** | 프로퍼티 / 메소드 / 컬렉션 / 이벤트 리스너 / CSS                                                      |
| **중요 메소드**    | `getElementById`, `innerHTML`, `createElement`, `appendChild`, `removeChild`, `write` |
| **this 키워드**  | 이벤트가 발생한 자기 자신을 가리킴                                                                   |
| **동적 변경 원리**  | DOM 객체 수정 → 화면 자동 갱신                                                                  |
