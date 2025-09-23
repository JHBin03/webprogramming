## 예제 3-1 구조화된 HTML5 문서 작성
```
<!DOCTYPE html>
 <html>
 <head>
 <meta charset="utf-8">
 <title>HTML5 문서구조시맨틱태그사용</title>
 <style>
 html, body{ margin: 0; padding: 0; height: 100%; }
 header { width: 100%; height: 15%; 
background: yellow; }
 nav{ width: 15%; height: 70%; float: left; 
background: orange; }
 section { width: 70%; height: 70%; float: left; 
background: olivedrab; }
 aside { width: 15%; height: 70%; float: left; 
background: orange; }
 footer { width: 100%; height: 15%; clear: both; 
background: plum; }
 </style>
 </head>
 <body>
 <header>header</header>
 <nav>nav</nav>
 <section>section</section>
 <aside>aside</aside>
 <footer>footer</footer>
 </body>
 </html>
```
## 예제 3-2 `<figure>` 태그 활용
```
 <!DOCTYPE html>
 <html>
 <head>
 <meta charset="utf-8">
 <title>figure 태그 활용</title>
 </head>
 <body>
 <h3>figure 태그 활용</h3>
 <hr>
 <figure id="1-1">
 <figcaption>alert() 함수 활용</figcaption>
 <pre>
 <code>function f() { alert("경고합니다"); }</code>
 </pre>
 <hr>
 <small>실행결과<small>
 <img src="media/alert.png" alt="실행결과">
 </pre>
 </figure>
 </body>
 </html>
```
## 예제3–3 `<details>`와 `<summary>` 활용
```
 <!DOCTYPE html>
 <html>
 <head>
 <meta charset="utf-8">
 <title>details와 summary 태그</title>
 </head>
 <body>
 <h3>details와 summary 태그</h3>
 Q &amp; A 리스트
<hr>
 <details>
 <summary>Question 1</summary>
 <p>웹 개발자가알아야하는언어3 가지?</p>
 </details>
 <details>
 <summary>Answer 1</summary>
 <p>HTML5, CSS, Javascript</p>
 </details>
 </body>
 </html>
```

## 예제3–4 시맨틱 인라인태그
```
 <!DOCTYPE html>
 <html>
 <head>
 <meta charset="utf-8">
 <title>인라인 시맨틱 태그</title>
 </head>
 <body>
 <h3>인라인 시맨틱태그사례</h3>
 <hr>
 <p>내일 <mark>HTML5 시험</mark><br>
시간은<time>09:00</time><br>
난이도<meter value="0.8" max="1.0">80%</meter><br>
자료업로딩(20%)
 <progress value="2" max="10"></progress><br>
 </p>
 </body>
 </html>
```
## 예제3-5 간단한 로그인폼만들기
```
<!DOCTYPE html>
 <html>
 <head>
 <meta charset="utf-8"> 
<title>로그인 폼</title></head>
 <body>
 <h3>로그인 폼</h3>
 <hr>
 <form name="fo" method="get">
사용자ID : <input type="text" size="15" value=""><br>
 </form>
비밀번호: <input type="password" size="15" value="">
 <input type="submit" value="완료">
 </body>
 </html>
```
## 예제3-6 텍스트입력
```
<!DOCTYPE html>
 <html>
 <head>
 <metacharset="utf-8">
 <title>텍스트입력폼</title>
 </head>
 <body>
 <h3>자기소개서작성</h3>
 <hr>
 <form>
이름: <input type="text" value=""><br>
암호: <input type="password" value="" maxlength="4"><br>
자소서: <textareacols="20" rows="5">
이곳에자기소개서작성
</textarea>
 </form>
 </body>
 </html>
```

## 예제3–7 데이터목록을 가진 텍스트입력
```
<!DOCTYPE html>
 <html>
 <head>
 <metacharset="utf-8"> 
<title>데이터목록을가진텍스트입력</title>
 </head>
 <body>
 <h3>가보고싶은곳</h3>
 <hr>
 <form>
나라: <input type="text" list="countries"><br>
 <datalist id="countries">
 <option value="가나">
 <option value="스위스">
 <option value="브라질">
 </datalist>
보고싶은것: <input type="text" list="what"><br>
 <datalist id="what">
 <option value="산">
 <option value="바다">
 <option value="도시">
 </datalist>
 </form>
 </body>
 </html>
```

## 예제3–8 다양한버튼만들기
```
<!DOCTYPE html>
 <html>
 <head>
 <metacharset="utf-8">
 <title>버튼이있는입력폼</title>
 </head>
 <body>
 <h3>버튼을만들자</h3>
 <hr>
 <form>
검색: <input type="text" size="10" value="">
 <input type="button" value="Q1">
 <button type="button">Q2</button><br>
 submit 버튼: <input type="submit" value="전송1">
 <button type="submit">전송2</button><br>
 reset 버튼:   <input type="reset" value="리셋1">
 <button type="reset">리셋2</button><br>
이미지버튼:  <input type="image" src="media/button.png" 
alt="이미지버튼">
 <button type="button">
 <imgsrc="media/button.png" alt="이미지버튼">
 </button>
 </form>
 </body>
 </html>
```
## 예제3-9 체크박스 만들기
```
<!DOCTYPE html>
 <html>
 <head>
 <meta charset="utf-8">
 <title>체크 박스 만들기</title>
 </head>
 <body>
 <h3>먹고 싶은것모두체크하세요</h3>
 <hr>
 <form>
짜장면<input type="checkbox" value="1">
짬뽕<input type="checkbox" value="2" checked>
탕수육<input type="checkbox" value="3">
 </form>
 </body>
 </html>
```

## 예제 3-10 라디오버튼 만들기
```
 <!DOCTYPE html>
 <html>
 <head>
 <meta charset="utf-8">
 <title>라디오버튼 만들기</title>
 </head>
 <body>
 <h3>먹고 싶은것하나만선택?</h3>
 <hr>
 <form>
 <input type="radio" name="china" value="1">
짜장면<img src="media/jajang.png"><br>
 <input type="radio" name="china" value="2" checked>
같은name을 가진
라디오버튼중하나만
선택가능
짬뽕<img src="media/jjambbong.png"><br>
 <input type="radio" name="china" value="3">
탕수육<img src="media/tangsuyuk.png">
 </form>
 </body>
 </html>

```
## 예제3-11 콤보박스 만들기
```
<!DOCTYPE html>
 <html>
 <head>
 <meta charset="utf-8"> 
<title>콤보박스 만들기</title>
 </head>
 <body>
 <h3>먹고 싶은음식은?</h3>
 <hr>
 <form>
 <select name="china">
 <option value="1">짜장면</option>
 <option value="2" selected>짬뽕</option>
 <option value="3">탕수육</option>
 </select>
 </form>
 </body>
 </html>
```
## 예제3-12 <label> 태그로로그인폼만들기
```
<!DOCTYPE html>
 <html>
 <head>
 <metacharset="utf-8">
 <title>로그인폼</title>
 </head>
 <body>
 <h3>로그인폼</h3>
 <hr>
 <form name="fo" method="get">
 <label>사용자ID : <input type="text" size="15" value="">
 </label><br>
 <label for="pass">비밀번호: </label>
 <input id="pass" type="password" size="15" value="">
 <input type="submit" value="완료">
 </form>
 </body>
 </html>
```

## 예제3-13 <label>로라디오버튼에캡션만들기
```
<!DOCTYPE html>
 <html>
 <head>
 <metacharset="utf-8">
 <title>캡션을가진라디오버튼</title>
 </head>
 <body>
 <h3>먹고싶은것하나만선택?(&lt;label&gt;이용)</h3>
 <hr>
 <form>
 <label>
 <input type="radio" name="china" value="1">
짜장면<imgsrc="media/jajang.png">
 </label><br>
 <label>
 <input type="radio" name="china" value="2" checked>
짬뽕<imgsrc="media/jjambbong.png">
 </label><br>
 <label>
 <input type="radio" name="china" value="3">
탕수육<imgsrc="media/tangsuyuk.png">
 </label>
 </form>
 </body>
 </html>
```

## 예제3–14 컬러 다이얼로그로색입력응용
```
<!DOCTYPE html>
 <html>
 <head>
 <meta charset="utf-8">
 <title>색 입력</title>
 </head>
 <body>
 <h3>컬러다이얼로그로색입력</h3>
 <hr>
 <form>
색선택
 <input type="color" value="#00BFFF"
onchange="document.body.style.color=this.value">
</form>
 </body>
 </html>
```

## 예제3-15 시간 정보 입력 폼 요소 활용
```
 <!DOCTYPE html>
 <html>
 <head>
 <metacharset="utf-8">
 <title>시간정보를입력하는폼활용</title>
 </head>
 <body>
 <h3>시간정보입력HTML5 폼요소들</h3>
초기세팅: 2022년3월1일밤9시30분(10초32)<br>
시간을변경해보세요
<hr>
 <form>
 <pre>
 month : <input type="month" value="2022-03"><br> 
week : <input type="week" value="2022-W09"><br>
 data : <input type="date" value="2022-03-01"><br> 
time : <input type="time" value="21:30"><br>
 local: <input type="datetime-local" 
value="2022-03-01T21:30:10.32"><br>
 </pre>
 </form>
 </body>
 </html>
```

## 예제3–16 생일날짜입력
```
 <!DOCTYPE html>
 <html>
 <head>
 <metacharset="utf-8">
 <title>시간정보입력응용</title>
 </head>
 <body>
 <h3>생일축하합니다</h3>
 <hr>
당신의생일은2003년2월9일입니다. 틀리면수정하시고
파티시간과장소를입력하세요.
 <hr>
 <form>
 <table>
 <tr><td>생일</td>
 <td><input type="date" value="2003-02-09"></td></tr>
 <tr><td>생일파티시간</td>
 <td><input type="time"></td></tr>
 <tr><td>생일파티장소</td>
 <td><input type="text"></td></tr>
 </table>
 </form>
 </body>
 </html>
```

## 예제3-17 `<input type="number|range">`로 편리한숫자입력
```
<!DOCTYPE html>
 <html>
 <head>
 <meta charset="utf-8">
 <title>편리한 숫자 입력</title></head>
 <body>
 <h3>홈 제어 시스템-온도조절</h3>
 <hr>
 <form>
지속시간(0.0~10.0시간) :
 <input type="number" min="0.0" max="10.0" 
step="0.5"><br><br>
온도설정:10&deg;
 <input type="range" min="10" max="30" 
list="temperatures">30&deg;
 <datalist id="temperatures">
 <option value="12" label="Low">
 <option value="20" label="Medium">
 <option value="28" label="High">
 </datalist>
 </form>
 </body>
 </html>
```

## 예제3–18 형식을가진텍스트입력
```
<!DOCTYPE html>
 <html>
 <head>
 <metacharset="utf-8">
 <title>형식을가진텍스트입력</title>
 </head>
 <body>
 <h3>회원정보를입력해주세요.</h3>
 <hr>
 <form>
 email : <input type="email" placeholder="id@host"><br>
홈페이지: <input type="url" placeholder="http://"><br>
전화번호: <input type="tel" placeholder="010-1234-5678">
 <input type="submit" value="확인"><br><br>
 <hr>
검색어: <input type="search" placeholder="검색어">
 <input type="button" value="검색">
 </form>
 </body>
 </html>
```

## 예제3–19 폼 요소의 그룹핑
```
<!DOCTYPE html>
 <html>
 <head>
 <meta charset="utf-8">
 <title>폼 입력 그룹으로 묶기</title>
 </head>
 <body>
 <h3>회원 정보를입력해주세요.</h3>
 <hr>
 <form>
 <fieldset>
 <legend>회원정보</legend>
이메일: <input type="email"><br>
홈페이지: <input type="url"><br> 
전화번호: <input type="tel">
 </fieldset>
 <small>질문 : Tel. 010-111-1111</small>
 </form>
 </body>
 </html>
```
