## Next.js 14로 API 하는 방법
- `app/api/:endpointPath/route.ts` 파일 생성
- `GET`, `POST`, `PUT`, `DELETE` 등의 HTTP Method를 이름으로 갖는 async 함수 선언
- 프로젝트 루트 폴더에서 `yarn dev` 명령 실행
- Postman Desktop Agent 등으로 `http://localhost:3000/api/:endpointPath`와의 통신이 잘 되는지 체크

## Fix All 활성화 후 저장 시 import React from 'react';가 사라지는 현상 방지법
- 당시 내 Visual Studio Code 설정 파일 내용 (`settings.json`)
  ```json
  {
    "editor.codeActionsOnSave": {
      "source.fixAll": "explicit",
      "source.organizeImports": "always"
    },
    ...
  }
  ```
- `tsconfig.json`의 파일 내용 중 `compilerOptions`의 `jsx`를 `react`로 변경
  변경된 모습
  ```json
  {
    "compilerOptions": {
      "jsx": "react",
      ...
    },
    ...
  }
  ```
- 그러나, 이렇게 할 경우, `yarn dev` 시 Next.js가 자동으로 `tsconfig.json`을 고친다.
