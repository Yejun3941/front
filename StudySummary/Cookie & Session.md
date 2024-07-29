# 쿠키와 세션: 웹 애플리케이션의 상태 관리 및 보안

## 쿠키(Cookie)

### 쿠키의 개념
쿠키는 클라이언트 측(사용자의 브라우저)에 저장되는 작은 데이터 조각 / 서버에서 클라이언트로 보내지며, 이후 클라이언트는 이 쿠키를 저장하고 요청 시 서버로 다시 전송

### 쿠키의 주요 특징
- 저장 위치: 클라이언트(브라우저)에 저장
- 크기 제한: 일반적으로 쿠키 하나당 4KB 정도의 크기 제한이 존재
- 만료 시간: 쿠키는 설정된 만료 시간에 따라 자동으로 삭제 만료 시간이 설정되지 않으면 브라우저 세션이 끝날 때 삭제
- 보안: 쿠키는 평문으로 저장되므로 민감한 정보를 저장하는 데 적합하지 않음 /  `Secure` 플래그를 설정하여 HTTPS에서만 전송되도록 할 수 있고, `HttpOnly` 플래그를 설정하여 JavaScript로 접근할 수 없도록 함

### 쿠키의 사용 사례
- 세션 관리 : 로그인 상태 유지 등
- 사용자 맞춤화: 사용자 선호도 저장 (예: 다크 모드 설정)
- 트래킹 및 분석: 사용자 행동 추적 (예: 광고 타겟팅)

### 쿠키의 기술적 예시
```javascript
// 쿠키 설정
document.cookie = "username=JohnDoe; expires=Wed, 01 Jan 2025 12:00:00 UTC; path=/";

// 쿠키 읽기
let cookies = document.cookie.split(';');
for (let i = 0; i < cookies.length; i++) {
    console.log(cookies[i]);
}
```

## 세션(Session)

### 세션의 개념
세션은 서버 측에서 관리되는 사용자 데이터 / 클라이언트는 세션 식별자(Session ID)를 통해 서버에 저장된 세션 데이터를 접근

### 세션의 주요 특징
- **저장 위치**: 서버에 저장 / 클라이언트는 세션 ID만 저장
- **크기 제한**: 서버의 저장 용량에 따라 제한
- **만료 시간**: 서버 설정에 따라 세션 만료 시간이 설정 / 일반적으로 사용자의 비활성 시간이 일정 시간 지나면 세션이 만료
- **보안**: 민감한 데이터를 서버에 저장하므로 보안성이 높음 / 세션 ID는 일반적으로 쿠키에 저장되므로 안전하게 관리 필요

### 세션의 사용 사례
- **사용자 인증**: 로그인 세션 유지
- **상태 유지**: 장바구니 정보, 게임 상태 등

### 세션의 기술적 예시
```javascript
// Express.js 예제
const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
    secret: 'supersecretkey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // HTTPS 사용 시 true로 설정
}));

app.get('/', (req, res) => {
    req.session.username = 'JohnDoe';
    res.send('Session is set');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

## 쿠키와 세션 비교

| 특성 | 쿠키(Cookie) | 세션(Session) |
| --- | --- | --- |
| 저장 위치 | 클라이언트(브라우저) | 서버 |
| 보안 | 낮음 (평문 저장) | 높음 (서버 저장) |
| 데이터 크기 | 작음 (일반적으로 4KB 이하) | 서버 용량에 따라 다름 |
| 만료 시간 | 쿠키 설정에 따름 | 서버 설정에 따름 |
| 사용 사례 | 사용자 선호도 저장, 트래킹 | 사용자 인증, 상태 유지 |
## 관련된 추가 기술

### 1. JWT (JSON Web Token)
JWT는 JSON 포맷을 사용하여 정보를 안전하게 전송하기 위한 개방형 표준 / 주로 인증에 사용

#### 특징
- **자기 포함**: 필요한 모든 정보를 포함하고 있어 별도의 저장소가 필요 없음
- **서명**: 데이터의 무결성을 확인 가능 / HMAC, RSA 등의 알고리즘으로 서명

#### 예시
```javascript
const jwt = require('jsonwebtoken');
const token = jwt.sign({ username: 'JohnDoe' }, 'secretKey', { expiresIn: '1h' });

try {
    const decoded = jwt.verify(token, 'secretKey');
    console.log(decoded.username); // JohnDoe
} catch (err) {
    console.error('Invalid token');
}
```

### 2. OAuth
OAuth는 서드파티 애플리케이션이 자원 소유자의 권한으로 자원에 접근할 수 있도록 허용하는 인증 프레임워크

#### 예시
```python
from oauthlib.oauth2 import BackendApplicationClient
from requests_oauthlib import OAuth2Session

client_id = 'your_client_id'
client_secret = 'your_client_secret'

client = BackendApplicationClient(client_id=client_id)
oauth = OAuth2Session(client=client)
token = oauth.fetch_token(token_url='https://provider.com/oauth2/token', client_id=client_id, client_secret=client_secret)

response = oauth.get('https://provider.com/api/resource')
print(response.json())
```

### 3. CSRF (Cross-Site Request Forgery)
CSRF는 사용자가 의도하지 않은 요청을 신뢰된 사이트에 전송하게 하는 공격 / 이를 방지하기 위한 방법이 필요

#### 방지 방법
- **CSRF 토큰**: 각 요청에 고유한 토큰을 포함시켜 서버에서 이를 검증

#### 예시
```python
from django.middleware.csrf import get_token
from django.shortcuts import render

def my_view(request):
    csrf_token = get_token(request)
    return render(request, 'my_template.html', {'csrf_token': csrf_token})
```

### 4. Secure & HttpOnly 쿠키
쿠키의 보안을 강화하기 위해 Secure 및 HttpOnly 속성을 설정 가능

#### 예시
```python
response.set_cookie('my_cookie', 'value', secure=True, httponly=True)
```

### 5. 세션 저장소
세션 데이터를 서버의 다양한 저장소에 저장 가능

#### 예시
```python
# Django 세션 설정 (Redis 예시)
SESSION_ENGINE = 'django.contrib.sessions.backends.cache'
SESSION_CACHE_ALIAS = 'default'
```
