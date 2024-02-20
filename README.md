## 시동방법
- 코드 클론 후 `yarn` 입력.
- 한 터미널에서 `yarn dev` 입력.
- 또다른 터미널에서 `json-server --port 3030 json-server-db.json` 실행.
  - `json-server`는 글로벌 패키지로써 설치해야 한다. (예시: `npm install -g json-server`)
  - 포트 번호와 json 파일명은 원하는 걸로 작성해주면 된다. 여기선 단지 내가 `3030` 포트에서 `json-server-db.json`을 사용하여 작동하길 원했을 뿐이다.
- `http://localhost:(포트번호)/todos` 엔드포인트에 대한 GET, POST, PATCH, DELETE 메소드를 호출시켜주면 된다.
  - 예를 들어, todo를 삭제하려면, `DELETE http://localhost:(포트번호)/todos/(todo의id)`를 호출시킨다.
