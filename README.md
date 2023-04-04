# NestJS

## 프로젝트 세팅

### 1. Project 시작

1. Node 설치

2. Nest JS Cli 설치

   ```javascript
   $ npm i -g @nestjs/cli
   $ mkdir directory
   $ nest new ./project-name
   ```

3. App 실행

   ```javascript
   $ npm start:dev
   ```

4. Module 생성

   ```javascript
   $ nest g module boards
   ```

5. Controller

##### 들어오는 요청을 처리(Service)하여 클라이언트에게 처리된 값을 반환

##### Handler: @Get, @Post, @Delete 등과 같은 데코레이터로 장식된 컨트롤러 클래스 내부에 메서드

#### Controller 생성

    ```javascript
    $ nest g controller boards -no-spec
    ```

6. Service

   #### Controller 생성

   ```javascript
   $ nest g service boards -no-spec
   ```

7. Pipe 에 필요한 모듈

- class-validator
- class-transformer

```javascript
$ npm install class-validator class-transformer --save
```

8. TypeORM 사용하기 위한 모듈
   - pg
   - typeorm
   - @nestjs/typeorm

```javascript
$ npm install pg typeorm @nestjs/typeorm --save
```

참고링크: https://docs.nestjs.com/techniques/database

### 2. 계발에 대한 계획

- 모듈 단위로 분배(GIS 모듈, User 모듈, 공공데이터 모듈, 에너지 데이터 모듈)
