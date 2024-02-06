## Next.js 14로 API 하는 방법
- `app/api/:endpointPath/routes.ts` 파일 생성
- `GET`, `POST`, `PUT`, `DELETE` 등의 HTTP Method를 이름으로 갖는 async 함수 선언
- 프로젝트 루트 폴더에서 `yarn dev` 명령 실행
- Postman Desktop Agent 등으로 `http://localhost:3000/api/:endpointPath`와의 통신이 잘 되는지 체크
