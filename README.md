# KUZZ

## 프로젝트 구조
- ku-zingzing (레포지토리)
  - Readme.md
  - frontend (react.js)
  - backend (django)
    - backend (기본 앱)
    - main (주요 기능 앱)
    - accounts (사용자 관리 앱)
  - (win/mac)venv (파이썬 가상환경) # virtualenv로 생성해야 함

## 실행 방법
_Python이 설치되어 있어야 함_
### Window(powershell)
```powershell
pip3 install virtualenv
cd ku-zingzing
virtualenv winvenv
winvenv/Scripts/activate
pip install -r requirement.txt
cd backend
python manage.py runserver
```

### Mac(bash)
```bash
pip3 install virtualenv
cd ku-zingzing
virtualenv macvenv
source macvenv/bin/activate
pip install -r requirement.txt
cd backend
python manage.py runserver
```
---
## 계정 관리

| URL               | METHOD | 기능                 |
| ----------------- | ------ | -------------------- |
| api/auth/register | POST   | 회원 가입            |
| api/auth/login    | POST   | 로그인               |
| api/auth/user     | GET    | 사용자 정보 가져오기 |
| api/auth/logout   | POST   | 로그아웃             |

### POST api/auth/register

- request

| 키       | 설명     | 필수 | 타입 |
| -------- | -------- | ---- | ---- |
| username | 아이디   | O    |      |
| email    | 이메일   | O    |      |
| password | 비밀번호 | O    |      |

- response

| 키    | 설명                      | 타입   |
| ----- | ------------------------- | ------ |
| user  | 등록한 사용자에 대한 정보 | JSON   |
| token | 사용자의 토큰 값          | string |

- example

<img width="960" alt="스크린샷 2019-05-08 오후 1 36 23" src="https://user-images.githubusercontent.com/42646264/57349804-75638400-7196-11e9-8fe0-df93948015f2.png">

### POST api/auth/login

- request

| 키       | 설명     | 필수 | 타입 |
| -------- | -------- | ---- | ---- |
| username | 아이디   | O    |      |
| password | 비밀번호 | O    |      |

- response

| 키    | 설명                        | 타입   |
| ----- | --------------------------- | ------ |
| user  | 로그인한 사용자에 대한 정보 | JSON   |
| token | 사용자의 토큰 값            | string |

- example

<img width="960" alt="스크린샷 2019-05-08 오후 1 45 25" src="https://user-images.githubusercontent.com/42646264/57350070-9678a480-7197-11e9-8cf3-8cdcf151aac3.png">

### GET api/auth/user

- request

| 키                     | 설명             | 필수 | 타입                |
| ---------------------- | ---------------- | ---- | ------------------- |
| Authorization (Header) | 사용자의 토큰 값 | O    | token {token_value} |

- response

| 키   | 설명                               | 타입 |
| ---- | ---------------------------------- | ---- |
| user | 로그인 되어있는 사용자에 대한 정보 | JSON |

- example

<img width="960" alt="스크린샷 2019-05-08 오후 2 34 30" src="https://user-images.githubusercontent.com/42646264/57351891-7c8e9000-719e-11e9-936c-8ac27cd2d230.png">

### POST api/auth/logout

- request

| 키                     | 설명             | 필수 | 타입                |
| ---------------------- | ---------------- | ---- | ------------------- |
| Authorization (Header) | 사용자의 토큰 값 | O    | token {token_value} |

- response

```bash
"POST /api/auth/logout HTTP/1.1" 204 0
```

- example

<img width="960" alt="스크린샷 2019-05-08 오후 2 38 43" src="https://user-images.githubusercontent.com/42646264/57352039-0179a980-719f-11e9-9373-edb2165470c4.png">

---

## 게시물 관리

| URL                          | METHOD | 기능                                            |
| ---------------------------- | ------ | ----------------------------------------------- |
| /agendas                     | GET    | 모든 게시물 가져오기                            |
| /agendas                     | POST   | 게시물 등록하기                                 |
| /likes                       | POST   | 게시물 좋아요 or 싫어요( 첫 번째 좋아요인 경우) |
| /likes/{like object의 id 값} | PUT    | 게시물 좋아요 or 싫어요(두 번째 이상인 경우)    |
| /comment                     | POST   | 게시물의 댓글 작성                              |

### GET /agendas

게시물들의 정보들을 요청한다.

- request

| 키   | 설명 | 필수 | 타입 |
| ---- | ---- | ---- | ---- |
|      |      |      |      |

- response

array로 data : {…, …, ...}

| 키          | 설명                    | 타입   |
| ----------- | ----------------------- | ------ |
| agenda_id   | 게시물의 id 값          | serial |
| description | 게시물 내용             | string |
| area        | 구역 정보               | string |
| username     | 작성자 username               | serial |
| timestamp   | 작성 시점 (정렬시 필요) | date   |
| total_likes        | 좋아요 갯수             | int    |
| total_dislikes     | 싫어요 갯수             | int    |
| agenda_comments    |   해당 agenda 하위 댓글들      | array  |



### POST /agendas

게시물을 등록 후 전체 게시물 불러온다.

- request

| 키          | 설명        | 필수 | 타입   |
| ----------- | ----------- | ---- | ------ |
| area        | 구역 정보   | O    | string |
| description | 게시물 내용 | O    | string |

- response

| 키          | 설명           | 타입   |
| ----------- | -------------- | ------ |
| agenda_id   | 게시물의 id 값 | serial |
| description | 게시물 내용    | string |
| area        | 구역 정보      |        |
| username     | 작성자 username      | serial |
| timestamp   | 작성 시점      | date   |
| total_like        | 좋아요 갯수    | int    |
| total_dislike     | 싫어요 갯수    | int    |
| agenda_comments     |  해당agenda 하위       | array  |


첫 번째 좋아요 / 싫어요인 경우 해당 Agenda, User와 연결된 object가 없기 때문에
POST로 likenum or dislikenum =1 인 object 생성
두 번째 좋아요인 경우 해당 object가 이미 존재하기 때문에 해당 object의 필드값만 수정해주기 위해
detail url에서 likenum or dislikenum +=1
likenum, dislikenum field는 0 이상의 정수로만 존재 가능
둘 중 한 필드가 양수일 때 다른 필드를 누른 경우 양수인 필드에서 -=1
ex) likenum이 0, dislikenum이 4일 때 likenum누르면 dislikenum이 3됨.


### POST /likes ( 첫 번째 좋아요 / 싫어요인 경우)

- request

| 키        | 설명           | 필수 | 타입   |
| --------- | -------------- | ---- | ------ |
| agenda_id | 게시물의 id 값 | O    | serial |
| user | 현재 로그인된 유저 | O    |   |

- response

| 키        | 설명                      | 타입   |
| --------- | ------------------------- | ------ |
| agenda   | 게시물의 id 값            | serial |
| creator   | 작성자 | serial    |
| likenum   | 좋아요 개수 | integer   |
| dislikenum   | 싫어요 개수 | integer  |



### PUT /likes/<해당 유저, agenda에 해당하는 Like object의 pk값> ( 두 번째 이상 좋아요, 싫어요인 경우 )

- request

| 키        | 설명           | 필수 | 타입   |
| --------- | -------------- | ---- | ------ |
| likenum or dislikenum | +=1 | O    | integer |

- response

| 키        | 설명                      | 타입   |
| --------- | ------------------------- | ------ |
| agenda   | 게시물의 id 값            | serial |
| creator   | 작성자 | serial    |
| likenum   | 좋아요 개수 | integer   |
| dislikenum   | 싫어요 개수 | integer  |



### POST /comments

- request

| 키        | 설명           | 필수 | 타입   |
| --------- | -------------- | ---- | ------ |
| agenda | 게시물의 id 값 | O    | serial |
| content   | 댓글 내용      | O    | string |

- response

| 키        | 설명           | 타입   |
| --------- | -------------- | ------ |
| agenda_id | 게시물의 id 값 | serial |
| content |                | string |
| username |                | User |
| timestamp  |                | datetime |
| total_likes  |                | integer|
| total_dislikes  |                | integer|

