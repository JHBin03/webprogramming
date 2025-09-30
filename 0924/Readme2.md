# CSS3 고급 활용 5장

---

## I. HTML 태그 배치

[cite_start]CSS3를 사용하여 HTML 태그가 웹 페이지에 작성된 순서와 달리 출력되는 위치를 조절할 수 있다[cite: 131, 132]. [cite_start]배치 기능을 위한 주요 CSS3 프로퍼티에는 **`display`**, **`position`**, **`left`, `right`, `top`, `bottom`**, **`float`**, **`z-index`**, **`visibility`**, **`overflow`**가 있다[cite: 134, 135, 136, 137, 138, 139, 140].

### 박스 유형 제어: `display`

[cite_start]HTML 태그는 기본적으로 인라인 태그와 블록 태그로 나뉘며, `display` 프로퍼티를 통해 이 박스 유형을 변경할 수 있다[cite: 143, 144, 171].

| 프로퍼티 값 | 유형 | 특징 |
| :--- | :--- | :--- |
| **`block`** | 블록 박스 | 항상 새 라인에서 시작하며, 가로 전체를 점유한다. [cite_start]크기 조절(width, height) 및 여백(margin, padding) 조절이 가능하다[cite: 150, 151, 172, 185]. |
| **`inline`** | 인라인 박스 | 새 라인에서 시작하지 않고 라인 안에 배치되며, 옆에 다른 요소 배치가 가능하다. [cite_start]크기 조절(width, height) 및 수직 마진(margin-top, margin-bottom) 조절이 불가능하다[cite: 162, 164, 173, 185]. |
| **`inline-block`** | 인라인 블록 박스 | [cite_start]인라인 박스처럼 라인 안에 배치되나, 블록 박스처럼 크기 조절이 가능하다[cite: 174, 185]. |
| **`none`** | 숨김 | [cite_start]해당 요소를 출력하지 않으며, 요소가 차지하던 공간도 제거한다[cite: 270]. |

### 박스의 위치 지정: `position`

[cite_start]`position` 프로퍼티는 HTML 태그가 페이지에 나타난 순서인 **Normal Flow**를 무시하고 위치를 지정할 수 있도록 하며, `top`, `bottom`, `left`, `right` 프로퍼티를 함께 사용하여 위치를 지정한다[cite: 300, 308, 309].

| 배치 방법 | 프로퍼티 값 | 설명 |
| :--- | :--- | :--- |
| **정적 배치** | `static` | [cite_start]디폴트 값으로 Normal Flow를 따른다[cite: 303]. |
| **상대 배치** | `relative` | [cite_start]기본 위치에서 `top`, `bottom`, `left`, `right` 값만큼 이동한 상대 위치에 배치한다[cite: 304, 311]. |
| **절대 배치** | `absolute` | [cite_start]Normal Flow에서 제거되고, 가장 가까운 위치 지정(static이 아닌) 조상 요소를 기준으로 위치를 지정한다[cite: 305, 323]. |
| **고정 배치** | `fixed` | [cite_start]뷰포트(브라우저 창)를 기준으로 위치를 고정하며, 스크롤을 해도 위치가 변하지 않는다[cite: 306, 326]. |

### 기타 배치 프로퍼티

* [cite_start]**`float` (유동 배치)**: 요소를 왼쪽 (`left`)이나 오른쪽 (`right`)에 배치하고, 텍스트가 그 주위를 감싸도록 한다[cite: 307, 330].
* [cite_start]**`z-index` (쌓임 순서)**: `position`이 `static`이 아닌 요소들의 쌓임 순서(깊이)를 지정하며, 값이 클수록 화면 전면으로 나온다[cite: 335, 337].
* [cite_start]**`visibility` (가시성)**: 요소가 차지하는 공간은 유지한 채 내용만 보이지 않게 (`hidden`) 숨긴다[cite: 339, 342].
* [cite_start]**`overflow` (넘침 처리)**: 박스 영역을 벗어나는 내용의 처리 방법을 지정한다[cite: 343]. [cite_start]`hidden`은 넘치는 내용을 자르며 [cite: 344][cite_start], `scroll`은 스크롤바를 붙여 출력한다[cite: 345].

---

## II. 리스트 및 표, 폼 꾸미기

### 리스트 꾸미기

[cite_start]리스트의 모양을 꾸미는 주요 프로퍼티들을 사용한다[cite: 346].

| 프로퍼티 | 설명 |
| :--- | :--- |
| **`list-style-type`** | [cite_start]리스트 아이템 마커의 종류를 지정한다[cite: 56]. |
| **`list-style-image`** | [cite_start]아이템 마커를 이미지로 지정한다[cite: 57]. |
| **`list-style-position`** | [cite_start]마커의 출력 위치를 아이템 영역의 안쪽 (`inside`)이나 바깥쪽 (`outside`)으로 지정한다[cite: 55]. |
| **`list-style`** | [cite_start]위의 세 프로퍼티 값을 한 번에 지정하는 단축 프로퍼티이다[cite: 27]. |

### 표 꾸미기

* [cite_start]**테두리 제어**: `border-collapse: collapse`를 적용하여 중복된 테두리를 합친다[cite: 68, 73].
* [cite_start]**동적 효과**: `tbody tr:nth-child(even)`과 같은 가상 클래스를 이용하여 짝수 행에만 배경색을 지정하는 줄무늬 효과를 만들 수 있으며 [cite: 77][cite_start], `tbody tr:hover`를 사용하여 마우스가 행에 올라왔을 때 배경색을 변경하는 동적인 효과를 적용한다[cite: 82].

### 폼 꾸미기

[cite_start]폼 요소는 `input[type=text]`와 같은 선택자로 스타일을 지정한다[cite: 83, 84].

* [cite_start]**`:hover`**: 마우스가 폼 요소 위에 올라왔을 때 배경색 등을 변경한다[cite: 86, 87].
* [cite_start]**`:focus`**: 폼 요소가 포커스를 받을 때 글자 크기를 `font-size: 120%`처럼 동적으로 변화시키거나 스타일을 변경한다[cite: 85, 88].

---

## III. CSS3 동적 변화 효과

[cite_start]CSS3는 **애니메이션**, **전환(transition)**, **변환(transform)** 세 가지 기법을 사용하여 태그에 동적인 변화를 줄 수 있다[cite: 3, 37].

### 1. 애니메이션 (`animation`)

[cite_start]HTML 태그의 모양 변화를 시간 단위로 설정한다[cite: 91].

* [cite_start]**`@keyframes`**: 시간의 흐름에 따른 태그의 모양 변화를 정의하며, `0%` (`from`)부터 `100%` (`to`)까지 변화 단계를 지정한다[cite: 93, 94, 96].
* [cite_start]**주요 프로퍼티**: `animation-name`으로 `@keyframes`의 이름을 지정하고 [cite: 92][cite_start], `animation-duration`으로 1회 실행 시간을 설정하며 [cite: 92][cite_start], `animation-iteration-count`로 반복 횟수를 지정한다[cite: 93].

### 2. 전환 (`transition`)

[cite_start]CSS3 프로퍼티 값의 변화를 서서히 진행시켜 애니메이션 효과를 생성한다[cite: 104].

* [cite_start]**`transition`**: 변화가 일어날 프로퍼티와 그 변화에 걸리는 시간을 설정하여, 프로퍼티 값이 변할 때 점진적으로 변화가 진행되도록 지시한다[cite: 105, 106].

### 3. 변환 (`transform`)

[cite_start]텍스트나 이미지를 회전, 확대 등 기하학적인 모양으로 변형하여 출력한다[cite: 108]. [cite_start]회전 각도의 단위는 `deg`이며 시계방향 회전이 기본이다[cite: 108].

* [cite_start]**`rotate()`**: 요소를 지정된 각도만큼 회전시킨다[cite: 109].
* [cite_start]**`skew()`**: 요소를 기울인다[cite: 109].
* [cite_start]**`translate()`**: 요소를 이동시킨다[cite: 109].
* [cite_start]**`scale()`**: 요소를 확대하거나 축소한다[cite: 110].
