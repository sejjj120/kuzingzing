# kuzingzing

## 프로젝트 구조

- ku-zingzing (레포지토리)
  - Readme.md
  - frontend (react.js)
  - backend (django)
    - backend (기본 앱)
    - main (주요 기능 앱)
    - accounts (사용자 관리 앱)
  - venv (파이썬 가상환경)



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

#### [Request]

| 키   | 설명 | 필수 | 타입 |
| ---- | ---- | ---- | ---- |
|      |      |      |      |

#### [Response]

array로 data : {…, …, ...}

| 키          | 설명                    | 타입   |
| ----------- | ----------------------- | ------ |
| agenda_id   | 게시물의 id 값          | serial |
| description | 게시물 내용             | string |
| area        | 구역 정보               | string |
| creator     | 작성자 id               | serial |
| timestamp   | 작성 시점 (정렬시 필요) | date   |
| total_likes        | 좋아요 갯수             | int    |
| total_dislikes     | 싫어요 갯수             | int    |
| comments    |   해당 agenda 하위 댓글들      | array  |  
| likes   |   해당 agenda 하위 좋아요, 싫어요      | array  |



### POST /agendas

게시물을 등록 후 전체 게시물 불러온다.

#### [Request]

| 키          | 설명        | 필수 | 타입   |
| ----------- | ----------- | ---- | ------ |
| area        | 구역 정보   | O    | string |
| description | 게시물 내용 | O    | string |

#### [Response]

| 키          | 설명           | 타입   |
| ----------- | -------------- | ------ |
| agenda_id   | 게시물의 id 값 | serial |
| description | 게시물 내용    | string |
| area        | 구역 정보      |        |
| creator     | 작성자 id      | serial |
| timestamp   | 작성 시점      | date   |
| like        | 좋아요 갯수    | int    |
| dislike     | 싫어요 갯수    | int    |
| comment     |                | array  |



### POST /likes ( 첫 번째 좋아요 / 싫어요인 경우)

#### [Request]

| 키        | 설명           | 필수 | 타입   |
| --------- | -------------- | ---- | ------ |
| agenda_id | 게시물의 id 값 | O    | serial |
| user | 현재 로그인된 유저 | O    |   |

#### [Response]

| 키        | 설명                      | 타입   |
| --------- | ------------------------- | ------ |
| agenda   | 게시물의 id 값            | serial |
| creator   | 작성자 | serial    |
| likenum   | 좋아요 개수 | integer   |
| dislikenum   | 싫어요 개수 | integer  |



### PUT /likes/<해당 유저, agenda에 해당하는 Like object의 pk값> ( 두 번째 이상 좋아요, 싫어요인 경우 )

#### [Request]

| 키        | 설명           | 필수 | 타입   |
| --------- | -------------- | ---- | ------ |
| likenum or dislikenum | +=1 | O    | integer |

#### [Response]

| 키        | 설명                      | 타입   |
| --------- | ------------------------- | ------ |
| agenda   | 게시물의 id 값            | serial |
| creator   | 작성자 | serial    |
| likenum   | 좋아요 개수 | integer   |
| dislikenum   | 싫어요 개수 | integer  |



### POST /comments

#### [Request]

| 키        | 설명           | 필수 | 타입   |
| --------- | -------------- | ---- | ------ |
| agenda | 게시물의 id 값 | O    | serial |
| content   | 댓글 내용      | O    | string |

#### [Response]

| 키        | 설명           | 타입   |
| --------- | -------------- | ------ |
| agenda_id | 게시물의 id 값 | serial |
| content |                | string |
| creator |                | User |
| timestamp  |                | datetime |
| like  |                | integer|

