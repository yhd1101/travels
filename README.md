# 백엔드 코딩테스트 버전
<hr>

## 실행설명
```
docker compose up -d
```
### 사용기술
- TypeScript
- NestJS
- Typeorm
- Postgres
- @hapi/joi(environment validate check)
- Docker 환경에서 개발
- Query Builder

### 기능구현 List

1. 설문지(Survey) CRUD
- [X] 설문지 정보 불러오기 API (전체리스트, 상세리스트)
- [X] 완료된 설문지 List API (completed = true)
- [X] 설문지 생성 API
- [X] 설문지 수정 API (설문지 완료여부 = completed 수정 api포함)
- [X] 설문지 삭제 API



2. 문제(Question) CRUD
- [X] 문제 불러오기 API (전체리스트, 상세리스트)
- [X] 문제 생성 API
- [X] 문제 수정 API 
- [X] 문제 삭제 API


3. 문제항목(OptionList) CRUD
- [X] 문제항목 불러오기 API (전체리스트, 상세리스트)
- [X] 문제항목 생성 API (문제별 점수 스키마(score))
- [X] 문제항목 수정 API 
- [X] 문제항목 삭제 API


4. 답항(Answer) CRUD
- [X] 답항 불러오기 API (전체리스트, 상세리스트)
- [X] 답항 생성 API
- [X] 답항 수정 API
- [X] 답항 삭제 API



5. 에러처리 (Log) = 요청 실패 시 적절한 에러를 리턴해야 합니다
- 400 BadRequest
- 404 NotFound
- 500 InternalServerError(Others)

6. 로그수집 (Log) = 에러 및 특이사항 발생시 로그를 확인하여 대처할 수 있게 작성
- [X] 에러에 관한 로그수집  


7. 그 외 기능구현
- Pagination
- Serialzing the response with interceptors
- Swagger 

### Swagger
   <a href="2Fcb5afc2FUntitled.png?table=block&id=8d4a7b1c-9589-492c-8b00-e98c5907931c&spaceId=100b5a0e-959d-48b7-b9b7-a3b0472740e6&width=2000&userId=52657ad4-9c58-4d0e-aaf5-7723cf2ac8e9&cache=v2"><img src="https://file.notion.so/f/f/100b5a0e-959d-48b7-b9b7-a3b0472740e6/c09736cf-5d5a-41e3-ac24-1c77521f5b0e/Untitled.png?id=ddf62fd5-95e6-4df8-89d3-95be044f915d&table=block&spaceId=100b5a0e-959d-48b7-b9b7-a3b0472740e6&expirationTimestamp=1700388000000&signature=ohcZbbaBUSceooQceVek9v8QtFY_rvHmq3yGatrMxfY&downloadName=Untitled.png" width="500" alt="Swagger" /></a>
- Swagger를 활용해여 설문지 api를 문서화 했습니다.


### ERD 설계
  <a href="2Fcb5afc2FUntitled.png?table=block&id=8d4a7b1c-9589-492c-8b00-e98c5907931c&spaceId=100b5a0e-959d-48b7-b9b7-a3b0472740e6&width=2000&userId=52657ad4-9c58-4d0e-aaf5-7723cf2ac8e9&cache=v2"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F100b5a0e-959d-48b7-b9b7-a3b0472740e6%2F853cb7d1-6b7f-4e00-9de4-8d30e4138de7%2FUntitled.png?table=block&id=2354d251-8e98-4d9c-b4c1-e5f9e36c9bbb&spaceId=100b5a0e-959d-48b7-b9b7-a3b0472740e6&width=2000&userId=52657ad4-9c58-4d0e-aaf5-7723cf2ac8e9&cache=v2" width="300" alt="ERD" /></a>







