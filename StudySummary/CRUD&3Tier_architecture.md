# CRUD
- 데이터를 관리/처리 하기 위한 주된 4가지 Method 를 칭하는 말. Create/Read/Update/Delete 가장 앞 글자 들을 따서 CRUD 라고 부름
### Create
- 데이터를 추가 하는 작업
- POST that is similar to Create Method in HTTP protocol(POST is Create method in RESTful API using HTTP protocol)
  > POST is not strictly equivalent to Create, but it often serves the role of Create is RESTful APIs.
- In HTML
  ```HTML
  <form id="formName" method="POST">
      <label for="data1">data1</label>
      <input type="text" id="data1" name="data1" required><br><br>
      <label for="data2">data2</label>
      <input type="text" id="data2" name="data2" required><br><br>
      <button type="submit">Submit</button>
  </form>
  ```
- In JS
  ```js
  form = document.getElementById('formName');
  form.addEventListener('submit',function(event){
      const formData = new FormData(form);
      const data = { // json 형식
          data1 : formData.get('data1'),
          data2 : formData.get('data2')
      }
      const data = new URLSearchParams();//URL-encoded형식
      formData.forEach(function(value,key){//URL-encoded
          data.append(key,value);
      })

      fetch('https://domain.com/~~',{
          method:'POST',
          headers:{
              'Content-Type':'application/json',
          },
          body:JSON.stringfy(data) // json 형식
          body:data.toString() // URL-encoded 형식

      })
      .then(response => {
          if (!response.ok){
              throw new Error('Network response was not ok');
          }
          return response.json(); // json 응답
          return response.text(); // text 응답
      })
      .then(data => {
          console.log("Success:", data);
      })
      .catch(error =>{
          console.log("Error : ",error);
      });
  });
  ```
- 데이터 삽입 in RDBS(MySql,Oracle,PostgreSQL,SQLite,)
    ```sql
    insert into table_name (column1, column2, ...)
    ```
- in redis(NoSql) : key-value 형식의 DB
    ```bash
        SET key value
    ```
- in MongoDB(NoSql): json 형태로 데이터 저장
    ```js
    db.collection_name.insert({
        key1:value1,
        key2:value2,
        ...
    });
    ```
- 테이블 생성 in RDBS(Oracle,MySql,PostgreSQL)
    ```sql
    CREATE TABLE table_name (
    column1 datatype CONSTRAINT,
    column2 datatype CONSTRAINT,
    CONSTRAINT column1 PRIMARY KEY (table_name) 
    ...
    
    );
    ```
### Read
- 데이터를 조회 하는 작업
- GET is Restful API's Read method in http protocol
- In HTML
    ```html
    <form method="GET">
        <label for="query">Search:</label>
        <input type="text" id="query" name="query">
        <input type="submit" value="Search">
    </form>
    ```
- In js
    ```js
    ()=>{
        fetch("https://domain.com/~~")
        .then(response => response.json())
        .then(data => {
            document.getElementById('get_content_div').innerText = Json.stringfy(data)
        });
        .catch(error => colsole.error("Error:",error));
    }
    // Or 아래는 수업 예시
    data = await (await fetch(URL)).text()
    ```
- 데이터 조회 in RDBS(MySql,Oracle,PostgreSQL,SQLite,)
    ```sql
    Select t1.column1,t2.column2,...
    from table_name1 t1
    join table_name2 t2 on t2.column3=t1.column4
    ```
- in redis(NoSql)
    ```bash
        GET key 
    ```
- in MongoDB(NoSql)
    ```js
    db.collection_name.find({
        key1:value1,
        key2:value2,
        ...
    });
    ```
- 테이블 조회
    ```sql
    Select * from User_tables; /* oracle */
    show tables; /* tables */
    show collections;/* MongoDB */
    
    ```
### Update
- 저장되어 있는 기존의 데이터를 수정 하는 작업
- Put/PATCH is Restful API's Update method in http protocol
  - PUT : 리소스의 전체를 업데이트 / idempotent
  - PATCH : 리소스의 일부를 업데이트(필요한 부분만) / 조건에 따라 idempotent(Non-idempotent)
  > idempotent : 같은 요청을 반복실행해도 동일한 결과 유지 
- 기존 데이터를 update 하고자 할 때, 데이터를 <span style="color:aqua">read</span> 하고 가져오는 부분은 필수적인건 아니지만, 데이터 충돌 방지나,데이터의 무결성을 유지함에 유용하기에 <span style="color:aqua">read</span> 를 먼저 하는걸 추천
- \<form method=""> 는 post 와 get 만 사용 / put|patch 의 경우 html 에서 method="POST"로 처리하거나,js 에서 처리함
- In HTML
    ```html
    <form id="patchForm">
        <label for="userId">User ID:</label>
        <input type="text" id="userId" name="userId" required>
        <br>
        <label for="userEmail">User Email:</label>
        <input type="email" id="userEmail" name="userEmail" required>
        <br>
        <input type="submit" value="Update Email">
    </form>
    ```
- In js
    ```js
    document.getElementById('patchForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const userId = document.getElementById('userId').value;
        const userEmail = document.getElementById('userEmail').value;

        fetch(`https://api.example.com/users/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: userEmail
            })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('response').innerText = 'User email updated: ' + JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error:', error));
    });
    ```
- 데이터 업데이트 in RDBS(MySql,Oracle,PostgreSQL,SQLite,)
    ```sql
    update table_name
    set column1=value1, column2 = value2
    where condition;
    ```
- in redis(NoSql)
    ```bash
        set key value
    ```
- in MongoDB(NoSql)
    ```js
    db.collection_name.update(
        {key:value},
        {$set:{field1:value1,field2:value2}}
    )
    ```
- 테이블 업데이트
    ```sql
    alter table table_name
    add column_name datatype

    alter table table_name
    drop column column_name

    alter table table_name
    Modify colum_nanme datatype
    
    ```
### Delete
- 저장된 데이터를 삭제 하는 작업
- Delete 작업도 update 와 마찬가지로 데이터를 <span style="color:aqua">read</span> 하고 가져오는 부분은 필수적인건 아니지만, 데이터의 무결성을 유지함에 유용하기에 <span style="color:aqua">read</span> 를 먼저 하는 걸 추천 (없는 데이터를 삭제를 요청하거나 하는 경우 대비)
- In HTML
    ```HTML
    <button id="deleteButton">Delete User</button>
    ```
- In JS
    ```js
    document.addEventListener('DOMContentLoaded', function () {
        const deleteButton = document.getElementById('deleteButton');

        deleteButton.addEventListener('click', function () {
            const urlParams = new URLSearchParams(window.location.search);
            const userId = urlParams.get('id');

            fetch(`http://domain.com/~~/${userId}/`, {
                method: 'DELETE',
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text(); 
            })
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    });
    ```
- 데이터 삽입 in RDBS(MySql,Oracle,PostgreSQL,SQLite,)
    ```sql
    delete from table_name
    where condition
    ```
- in redis(NoSql) : key-value 형식의 DB
    ```bash
       DEL key 
    ```
    데이터베이스 비우기
    ```bash
        FLUSHDB
    ```
- in MongoDB(NoSql): json 형태로 데이터 저장
    ```js
    db.collection_name.remove({ key: value });
    ```
    테이블 삭제 / 데이터베이스 삭제
    ```js
    db.collection_name.drop();

    db.dropDatabase();
    ```
- 테이블 생성 in RDBS(Oracle,MySql,PostgreSQL)
    ```sql
    DROP TABLE table_name;
    ```

---
# 3 Tier Architecture
- 애플리케이션을 3개의 계층으로 분리하여, 시스템의 모듈화,확장성,유지보수성을 향상시키는 방법
### 1. 프레젠테이션 계층(browser,Front)
- User 가 직접 액세스 하는 계층
- **U**ser **I**nterface 제공
- User 의 입력 처리 및 데이터 전달(to Server)
- HTML,CSS,JS / Framework : React,Vue.js
- User 요청 - HTTP request -> Server에 요청
- Server 요청받은 내용 -> browser 전달/Output
> FrameWork : 개발에 자주 사용되는 구조 및 기능을 제공하는 플랫폼
### 2. 비즈니스 로직 계층(Server,Back)
- 요청받은 logic 을 처리 / DB와 상호 작용(데이터 저장(create)을 요청하거나, 조회(read)를 요청하는 방식)
- DB와 작용 후 클라이언트에서 받은 요청 처리 및 응답
- Java(Spring), Python(Django/Flask/FastAPI), C#(.NET)
### 3. 데이터접근 계층(DB,Database)
- 데이터 저장 및 관리
- Server 에서 조회를 요청한 데이터를 반환 / Server에서 보낸 데이터를 base로 업데이트 or 추가 or 삭제
- DBMS(DataBaseManagementSystem) 을 통해 CRUD 작업 수행
- RDBS(RelationshipDataBaseSystem), NOSql(Not-OnlySql),ORM(ObjectRelationalMapping)
> ORM : 객체를 데이터베이스의 테이블로 mapping / 처리를 객체형식으로 할뿐 실제 저장되는 경우는 기존의 RDBS나 NosqlDB를 사용
### 데이터 이동 흐름
```
browser(Client) --1->  Server --2-> DB  --3->  Server --4-> browser(Client)
```
1. User 가 browser 에서 form을 제출하는 등의 방식으로 HTTP 요청(REST API,GraphQL 형태)
2. Server 는 요청을 받아 logic 처리 후, DB 작업이 필요한 요청을 처리(Query를 사용한 CRUD 등의 처리)
3. DB Query 결과를 서버에 반환
4. Server는 DB에 받은 결과를 Browser에 전송/반환(요청 성공/조회 값 반환 등)