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
| like        | 좋아요 갯수             | int    |
| dislike     | 싫어요 갯수             | int    |
| comments    |                         | array  |



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



### POST /like

#### [Request]

| 키        | 설명           | 필수 | 타입   |
| --------- | -------------- | ---- | ------ |
| agenda_id | 게시물의 id 값 | O    | serial |

#### [Response]

| 키        | 설명                      | 타입   |
| --------- | ------------------------- | ------ |
| agenda_id | 게시물의 id 값            | serial |
| like      | 해당 게시물의 좋아요 갯수 | int    |



### POST /dislike

#### [Request]

| 키        | 설명           | 필수 | 타입   |
| --------- | -------------- | ---- | ------ |
| agenda_id | 게시물의 id 값 | O    | serial |

#### [Response]

| 키        | 설명                      | 타입   |
| --------- | ------------------------- | ------ |
| agenda_id | 게시물의 id 값            | serial |
| dislike   | 해당 게시물의 싫어요 갯수 | int    |



### POST /comment

#### [Request]

| 키        | 설명           | 필수 | 타입   |
| --------- | -------------- | ---- | ------ |
| agenda_id | 게시물의 id 값 | O    | serial |
| comment   | 댓글 내용      | O    | string |

#### [Response]

| 키        | 설명           | 타입   |
| --------- | -------------- | ------ |
| agenda_id | 게시물의 id 값 | serial |
| comments  |                | array  |

