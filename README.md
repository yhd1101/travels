# 백엔드 코딩테스트 버전
<hr>

## 실행설명
```
docker compose up -d
```

## 기능설명
***



### Survey(설문지) 기능 설명
1. create
   * create-survey.dto.ts로 name, desc, completed를 생성하는 기능을 구현했습니다.
   * completd는 완성한 설문지를 확인하여서 추가하였고 default = false 입니다.
2. read
    * 설문지 전체를 불러오게했습니다 그중 일대다로 설정한 quetions으로부터 관계데이터들을 다불러오게했습니다.
    * 완료한 설문지를 따로 불러오는 api를 구현했습니다.

3. update
   * put이라는 메소드를 불러와 name, desc, completed를 수정하는 api를 구현했습니다.
   * put안에 특정 id를 입력해여 수정가능합니다.

4. delete
   * 삭제하고싶은 survey를 삭제하는 구현을 하였습니다.


### Question(문제) 기능 설명
1. create
   * survey로 다대일 형태로 관계 맺어 survey, question 생성하는 기능을 구현했습니다.
2. read
   * Question 전체를 불러오게했습니다 관계데이터로를 맺은 answer, optionList survey도 같이 출력시켜주는 기능을 추가했습니다.
   * Question id를 입력해서 question하나의 데이터를 출력하는 기능을 추가했습니다.


3. update
   * put이라는 메소드를 불러와  question를 수정하는 api를 구현했습니다.
   * survey도 수정가능합니다 (surveyid를 입력시)

4. delete
   * 삭제하고싶은 question를 삭제하는 구현을 하였습니다.


### OptionList(보기항목) 기능 설명
1. create
   * question, list, list 점수를 위해 score 까지 구현했는데 
   * score는 provier를 설정하며 0~3까지 부여했습니다.
   * OptionList랑 question은 일대다 관계이기때문에 question를 구현했습니다.
2. read
   *  OpitionList 또한 question, answer를 불러오는 기능을 구현했습니다
   *  답이 중복처리가 될수도있기 때문에 optionList랑 answer를 일대다 설정을 하였습니다.

3. update
   * put이라는 메소드를 불러와  OptionList를 수정하는 api를 구현했습니다.
   

4. delete
   * 삭제하고싶은 question를 삭제하는 구현을 하였습니다.


### Answer(답안) 기능 설명
1. create
   * question과 일대일 관계, optionList랑 다대일 관계로해서 생성하는 기능을 구현했습니다.
2. read
   *  Answer 전체를 출력하는 기능을 구현했습니다 
   * id를 입력시 Answer 하나를 출력하는 기능을 구현했습니다.

3. update
   * put이라는 메소드를 불러와  Answer를 수정하는 api를 구현했습니다.


4. delete
   * 삭제하고싶은 Answer를 삭제하는 구현을 하였습니다.




## 기본설정
<hr>

### Pagenation

### response-serializtion

### common.entity


### Swagger
   <a href="2Fcb5afc2FUntitled.png?table=block&id=8d4a7b1c-9589-492c-8b00-e98c5907931c&spaceId=100b5a0e-959d-48b7-b9b7-a3b0472740e6&width=2000&userId=52657ad4-9c58-4d0e-aaf5-7723cf2ac8e9&cache=v2"><img src="https://file.notion.so/f/f/100b5a0e-959d-48b7-b9b7-a3b0472740e6/c09736cf-5d5a-41e3-ac24-1c77521f5b0e/Untitled.png?id=ddf62fd5-95e6-4df8-89d3-95be044f915d&table=block&spaceId=100b5a0e-959d-48b7-b9b7-a3b0472740e6&expirationTimestamp=1700388000000&signature=ohcZbbaBUSceooQceVek9v8QtFY_rvHmq3yGatrMxfY&downloadName=Untitled.png" width="500" alt="Swagger" /></a>
- Swagger를 활용해여 설문지 api를 문서화 했습니다.


### ERD 설계
  <a href="2Fcb5afc2FUntitled.png?table=block&id=8d4a7b1c-9589-492c-8b00-e98c5907931c&spaceId=100b5a0e-959d-48b7-b9b7-a3b0472740e6&width=2000&userId=52657ad4-9c58-4d0e-aaf5-7723cf2ac8e9&cache=v2"><img src="https://file.notion.so/f/f/100b5a0e-959d-48b7-b9b7-a3b0472740e6/99b9422f-f7e9-42c5-8f0a-8b60b002d243/Untitled.png?id=c38f35fa-eac4-4c52-ba33-42302643d3a9&table=block&spaceId=100b5a0e-959d-48b7-b9b7-a3b0472740e6&expirationTimestamp=1700388000000&signature=fg9y628E4DEFaReve7H8bZ_f1MfySrxFe3VV9s5kkVw&downloadName=Untitled.png" width="300" alt="Swagger" /></a>

### Docker Compose && Nginx
- postgresql Docker 환경으로 실행하였습니다.
- Nginx 로드밸런싱을 이용하여 서버분산을 해줬습니다.






