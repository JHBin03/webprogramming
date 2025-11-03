#  9장. HTML 이벤트 기초 및 활용

---

##  1. 이벤트 개요

###  이벤트(Event)

* **사용자 행위나 문서/브라우저 상태 변화**를 자바스크립트 코드에 알리는 통지(notification).
* 예:

  * 마우스 클릭, 키보드 입력
  * 이미지나 HTML 문서 로딩
  * 타이머 타임아웃 등

###  이벤트 리스너(Event Listener)

* 이벤트가 발생했을 때 실행되는 **자바스크립트 코드(함수)**
* 이벤트 종류: HTML5 기준 약 70여 가지
* 이벤트 리스너 이름:

  > 이벤트 이름 앞에 `on`을 붙임
  > 예) `onclick`, `onkeydown`, `onload`

---

##  2. 이벤트 리스너 작성 방법 (★중요)

| 방법                            | 설명                  | 예시                                                      |
| ----------------------------- | ------------------- | ------------------------------------------------------- |
| (1) HTML 태그 속성에 직접 작성         | 태그에 직접 리스너 속성 추가    | `<p onmouseover="this.style.backgroundColor='orchid'">` |
| (2) DOM 객체의 프로퍼티 사용           | 객체의 리스너 프로퍼티에 함수 대입 | `p.onmouseover = over;`                                 |
| (3) `addEventListener()` 메서드  | 표준적이고 권장되는 방법       | `p.addEventListener("mouseover", over);`                |
| (4) 익명 함수(Anonymous Function) | 이름 없는 함수를 바로 정의     | `p.onmouseover = function() { ... };`                   |

###  addEventListener() 구문

```js
element.addEventListener(eventName, listener[, useCapture]);
```

* `useCapture`:

  * `true` → 캡쳐 단계에서 실행
  * `false` (기본값) → 버블 단계에서 실행

---

##  3. 이벤트 객체 (Event Object)

###  개념

* 발생한 이벤트에 대한 **정보를 담은 객체**
* 예:

  * `mousedown`: 마우스 좌표, 버튼 번호 등
  * `keydown`: 키 코드 값 등

###  전달받기

```js
function f(e) { ... }   // e에 이벤트 객체가 전달됨
obj.onclick = f;

obj.onclick = function(e) { ... } // 익명 함수로도 가능
```

HTML 속성으로 작성 시엔 `event` 이름으로 자동 전달됨:

```html
<button onclick="f(event)">버튼</button>
```

###  주요 프로퍼티

| 프로퍼티               | 설명                        |
| ------------------ | ------------------------- |
| `type`             | 이벤트 이름 (예: "click")       |
| `target`           | 이벤트가 발생한 실제 DOM 객체        |
| `currentTarget`    | 현재 이벤트를 처리 중인 객체          |
| `defaultPrevented` | 기본 동작이 취소되었는지 여부          |
| `cancelable`       | preventDefault() 호출 가능 여부 |

---

##  4. 기본 동작 취소 (`preventDefault()`)

### 예시

```html
<a href="http://www.naver.com" onclick="return false">이동 안됨</a>
<a href="http://www.naver.com" onclick="event.preventDefault()">이동 안됨</a>
```

* `<a>`: 클릭 시 페이지 이동
* `<form>`: `submit` 시 데이터 전송
* `<input type="checkbox">`: 체크 상태 변경
  → 위 기본 동작을 **막을 수 있음**

### 방법

1. `return false;`
2. `event.preventDefault();`
   (단, `cancelable`이 `true`인 경우만 가능)

---

##  5. 이벤트 흐름(Event Flow)

이벤트는 다음과 같은 단계로 흐름:

1. **캡쳐 단계** – `window` → 타깃 객체로 내려감
2. **타깃 단계** – 실제 이벤트 발생
3. **버블 단계** – 타깃 → `window`로 다시 올라감

###  리스너 등록 시

```js
obj.addEventListener("click", func, true);   // 캡쳐 리스너
obj.addEventListener("click", func, false);  // 버블 리스너
```

> `stopPropagation()` → 이벤트 흐름 중단 가능

---

##  6. 마우스 이벤트

| 이벤트            | 설명                      |
| -------------- | ----------------------- |
| `onclick`      | 클릭 시                    |
| `ondblclick`   | 더블클릭 시                  |
| `onmousedown`  | 마우스 버튼 누를 때             |
| `onmouseup`    | 마우스 버튼 뗄 때              |
| `onmouseover`  | 요소 위로 마우스 올라올 때 (버블 있음) |
| `onmouseout`   | 요소에서 벗어날 때 (버블 있음)      |
| `onmouseenter` | 요소 위로 올라올 때 (버블 없음)     |
| `onmouseleave` | 요소에서 벗어날 때 (버블 없음)      |
| `onwheel`      | 마우스 휠 굴릴 때              |

####  휠 이벤트 예시

```js
obj.onwheel = function(e) {
  if (e.wheelDelta < 0) console.log("아래로 굴림");
  else console.log("위로 굴림");
};
```

#### ⚙️ oncontextmenu (오른쪽 클릭 방지)

```js
document.oncontextmenu = function() {
  alert("오른쪽 클릭 금지");
  return false;
};
```

---

##  7. 문서 및 이미지 로딩 이벤트

###  문서 onload

* 문서 전체 로딩 완료 시 `window`에 발생

```html
<body onload="alert('문서 로딩 완료')">
```

###  이미지 onload

* 이미지 로딩 완료 시 발생

```js
let img = document.getElementById("myImg");
img.onload = function() {
  console.log(img.width + "x" + img.height);
};
img.src = "banana.png";
```

>  이미지 로딩 완료 후에만 크기 정보(width, height)를 읽을 수 있음

---

##  8. 입력 관련 이벤트

###  onfocus / onblur

| 이벤트       | 설명        |
| --------- | --------- |
| `onfocus` | 포커스를 얻을 때 |
| `onblur`  | 포커스를 잃을 때 |

```js
function checkFilled(obj) {
  if (obj.value == "") obj.focus();
}
```

---

###  라디오 버튼 & 체크박스

```html
<input type="radio" name="city" value="seoul">서울
<input type="checkbox" value="10000" onclick="calc(this)">
```

```js
if (checkbox.checked) sum += parseInt(checkbox.value);
```

---

###  select 객체와 onchange

```html
<select id="fruits" onchange="drawImage()">
  <option value="apple.png">사과</option>
</select>
```

```js
function drawImage() {
  let sel = document.getElementById("fruits");
  let img = document.getElementById("fruitimage");
  img.src = sel.options[sel.selectedIndex].value;
}
```

---

##  9. 키보드 이벤트

| 이벤트          | 설명                         |
| ------------ | -------------------------- |
| `onkeydown`  | 키를 누를 때 (모든 키)             |
| `onkeypress` | 문자키/Enter/Space/Esc 등 누를 때 |
| `onkeyup`    | 키를 뗄 때                     |

```js
function whatKeyDown(e) {
  console.log(e.key, e.code);
}
```

---

##  10. 폼 이벤트

| 이벤트        | 설명                           | 비고                  |
| ---------- | ---------------------------- | ------------------- |
| `onreset`  | `<input type="reset">` 클릭 시  | `false` 리턴 → 초기화 취소 |
| `onsubmit` | `<input type="submit">` 클릭 시 | `false` 리턴 → 전송 취소  |

> 반드시 `<form>` 태그에 작성해야 함.

---

##  요약 정리

| 구분         | 주요 내용                                     |
| ---------- | ----------------------------------------- |
| 이벤트 리스너 작성 | HTML 속성 / 프로퍼티 / addEventListener / 익명 함수 |
| 이벤트 객체     | `type`, `target`, `preventDefault()` 등    |
| 이벤트 흐름     | 캡쳐 → 타깃 → 버블 단계                           |
| 중단 메서드     | `stopPropagation()`                       |
| 주요 이벤트     | 마우스, 키보드, 폼, 로딩                           |
| 기본 동작 취소   | `return false`, `preventDefault()`        |
