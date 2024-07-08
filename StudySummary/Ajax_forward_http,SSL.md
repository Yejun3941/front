## ajax 
- Asynchronous JavaScript and XML
- 웹 페이지를 동적으로 업데이트 하기 위한 웹 개발 기술
- 자바 스크립트를 사용하여, 클라이언트측에서 비동기적 요청을 통해 브라우저 렌더링
- 필요한 데이터 서버에서 fetch & 브라우저에서 DOM 으로 렌덩링
- ajax가 없을 때
  - 전체 웹페이지가 로드 / 긴 로딩시간
  - 서버에 동기적 요청-클라이언트는 응답대기 / 데이터 중복 전송 / 서버 부하 증가
- ajax가 있을 때
  - 부분 로드 / 짧은 로딩시간
  - 서버에 비동기적 요청-클라이언트 다른 작업 가능 / 데이터 전송 효율 증가 / 서버 부하 감소
- ajax 장점
  - 전체 로딩을 하는게 아니기에, 필요한 데이터를 비동기로 가져와 일부만 업데이트해서 렌더링 가능(빠름)
- ajax 단점
  - SEO(Search Engine optimization) : HTML 에 뼈대만 있고, 데이터가 없어서 검색엔진이 찾을 데이터가 없어 검색에서 탐색 안됨
  - 뒤로가기 따로 구현 필요
- 코드 예시
```js
    function ajax_request() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'data.json', true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                document.getElementById('result').innerHTML = data.message;
            }
        };
        xhr.send();
    }
```
## forward, redirect
- Forward 
  - 서버 내부에서 요청을 다른 리소스로 전달 / URL 변경이 발생하지 않음
  - 서버의 resource 더 많이 사용
  - 같은 웹 애플리케이션 내의 요청을 처리할때 사용
- Redirect
  - 서버가 클라이언트에게 새로운 url 로 이동을 지시 / 새로운 http요청 발생
  - 클라이언트의 요청 -> 서버의 응답(다른 URL) ->  클라이언트의 수신 & 다른 url 재 요청
  - 다른 도메인이나 외부 리소스로 이동할 경우 


| 특성                 | Forward                           | Redirect                           |
|----------------------|-----------------------------------|------------------------------------|
| 동작 방식            | 서버 내부 요청 전달               | 클라이언트에게 새로운 요청 지시    |
| HTTP 요청            | 하나의 요청                       | 두 개의 요청                       |
| URL 변경             | 변경되지 않음                     | 변경됨                             |
| 클라이언트 인식 여부 | 인식하지 못함                     | 인식함                             |
| 속도                 | 빠름                              | 느림                              |
| 브라우저 히스토리    | 기록되지 않음                     | 기록됨                             |

> refresh : 새로고침 / url 변경X / 다시 요청

## HTTP(request, response)
- Request : 요청(Client 2 Server )
  - HTTP method ,  요청 URL , HTTP-Version
  - Header : 요청과 관련된 메타데이터(Host,User-Agent)
  - Body : 요청과 관련된 데이터 전송에 사용(GET은 요청만)
  ```js
    GET /api/users HTTP/1.1
    Host: www.example.com
    Accept: application/json
  ```
- Response : 응답(Server 2 Client)
  - HTTP method , Status Code, Status message
  - Header : 응답과 관련된 메타데이터(Content-Type)
  - Body : 서버가 클라이언트에게 전송하는 요청받은 데이터(Json/HTML/text/...)
  ```js
    HTTP/1.1 200 OK
    Content-Type: application/json
    Content-Length: 34

    {
        "id": 1,
        "username": "user1"
    }
  ```
  ```md
    상태 코드 (Status Codes)
    HTTP 상태 코드 / 서버의 응답 상태
    
    - 100 Continue
    - 101 Switching Protocols
    
    - 200 OK
    - 201 Created
    - 204 No Content
    
    - 301 Moved Permanently
    - 302 Found
    - 304 Not Modified
    
    - 400 Bad Request
    - 401 Unauthorized
    - 403 Forbidden
    - 404 Not Found
    
    - 500 Internal Server Error
    - 502 Bad Gateway
    - 503 Service Unavailable
  ```
## HTTPS, SSL 인증서
- HTTPS : HTTP(Hypertext Transfer Protocol) + Secure / 
- http-port:80 / https-port:443
- 데이터를 안전하게 전송하기 위해
  - 기존 HTTP 의 경우 데이터를 암호화 하지않고 전송 / wireshark 와 같은 패킷분석도구를 이용하면 전송되는 패킷 감시가능 -> 데이터 노출가능
  - 변조 / 위조도 가능
- HTTP 통신의 장점과 데이터의 안전한 전송(감시X,변조X)이 목적 
- SSL 인증서를 통한 데이터 암호화 후 전송
- SSL(Secure Sockers Layer) 인증서 : 클라이언트와 서버 간의 암호화된 통신을 설정하기 위한 인증서
  - 도메인 name : 인증서가 발급된 도메인 이름
  - 서버 정보 : 서버의 공개 키 와 조직정보
  - 인증기관 정보 : 인증서를 발급한 인증기관
  - 유효기간 :인증서의 발급일과 만료일
  - 서명 : 인증기관의 디지털 서명 / 무결성과 신뢰성 보장
- SSL 과정
  1. 클라이언트가 서버에 연결 요청, 암호화 방식 제안
  2. 서버가 클라이언트의 요청 수락, 사용할 ssl버전 과 암호화 방식 선택 -> 클라이언트에게 인증서 전송
  3. 서버의 인증서 검증 -> 세션 키(대칭 키) 생성을 위한 비밀데이터 공개 키(비대칭 키) 로 암호화 후 서버로 전송(서버는 복호화 암호를 보유하고 있어 복호화가능)
  4. 클라이언트와 서버 둘 다 대칭 키 암호화를 위한 세션 키 생성 후 교환
  5. 암호화 통신 start

> 공개키 : 서버가 가지는 공개 암호화 키 / 복호화를 위한 복호화 키가 있어야 해독 가능하므로 비대칭적으로 공개키만 공개

> 대칭키와 비대칭키 혼합이유 : 데이터 전송 속도는 대칭키가 빠르고, 안전은 비대칭키가 안전하므로, 비대칭키를 통해 확인 후, 암호화된 대칭키 통신으로 대칭키 교환 -> 본 통신에서 빠르고 안전한 대칭키 사용

-  대칭 키 알고리즘 : AES
-  공개 키 알고리즘 : RSA

| 특징             | HTTP                               | HTTPS                              |
|------------------|------------------------------------|------------------------------------|
| **보안성**       | 비암호화, 데이터 노출 가능         | 암호화된 데이터 전송, 안전         |
| **사용하는 포트**| 80번 포트                          | 443번 포트                         |
| **데이터 무결성**| 데이터 변조 가능                   | 데이터 무결성 보장                 |
| **속도**         | 빠름 (암호화 없음)                 | 약간 느림 (암호화 과정 포함)       |
| **신뢰성**       | 신뢰성 없음                        | SSL/TLS 인증서를 통한 신뢰성 보장  |
| **사용 사례**    | 비보안 웹페이지                    | 민감한 정보가 포함된 웹페이지      |

- 