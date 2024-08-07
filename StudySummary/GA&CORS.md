## Google Analytics(GA) 
- 웹사이트 및 모바일 애플리케이션의 트래픽과 사용자 행동을 분석할 수 있는 도구 
- 방문자 수, 방문 경로, 사용자 행동 패턴, 전환율 등의 데이터를 수집, 분석 
- 디지털 마케팅 전략을 최적화하고 비즈니스 목표 달성에 도움

1. **실시간 데이터 분석**
   - 현재 웹사이트를 방문 중인 사용자의 수, 위치, 사용 기기 등의 데이터를 실시간 제공
   - 성과 모니터링 기능을 지원

2. **청중 분석(Audience Analysis)**
   - 사용자들의 연령, 성별, 위치, 관심사 등의 통계 데이터 제공
   - 타겟 마케팅 전략 수립에 유용한 정보 제공

3. **행동 분석(Behavior Analysis)**
   - 사용자의 웹사이트 행동 정보를 수집
   - 페이지 조회수, 체류 시간 등 사용자의 행동 패턴을 분석

4. **전환 추적(Conversion Tracking)**
   - 특정 행동(구매, 가입)의 완료 여부를 추적하여 캠페인의 효과를 측정
   - 전환율을 높이기 위한 전략 개발에 필수적인 데이터 제공

5. **고급 세그먼트 및 필터링**
   - 특정 사용자 그룹을 분리하거나 특정 조건에 따라 데이터를 필터링
   - 세밀한 분석을 통해 사용자 행동을 더욱 깊이 이해 가능

6. **보고서 작성 및 대시보드**
   - 다양한 보고서를 제공하며, 사용자가 대시보드를 커스터마이징하여 원하는 지표를 모니터링할 수 있도록 지원

---

### GA4와 Universal Analytics의 차이점

- **데이터 모델의 차이**
  - Universal Analytics(UA)는 세션 기반(session-based) 데이터 모델을 사용하였으나, GA4는 이벤트 기반(event-based) 모델을 채택
  - GA4는 세밀하고 유연한 데이터 수집이 가능

- **크로스 플랫폼 추적**
  - GA4는 웹사이트와 모바일 앱의 데이터를 통합하여 분석할 수 있는 기능 제공
  - 다양한 플랫폼에서의 사용자 행동을 전체적으로 파악 가능

- **개인정보 보호 강화**
  - GA4는 쿠키 의존도를 줄이고, IP 주소를 익명화하며, 강화된 데이터 보호 규정을 준수
  - 개인정보 보호 요구에 부합하는 설계 적용

- **자동화 및 예측 분석**
  - GA4는 머신 러닝을 활용하여 사용자 행동 예측 및 이상 탐지 기능 제공
  - 미래지향적인 마케팅 전략 수립 가능

---

### 장점과 단점

- **장점**
  - 다양한 지표와 데이터를 분석하여 비즈니스 인사이트를 제공
  - 실시간 데이터 분석 기능이 뛰어남
  - 무료로 제공되며, 대규모 기업을 위한 유료 버전도 존재

- **단점**
  - 설정과 사용이 복잡할 수 있으며, 초기 학습이 필요
  - 데이터 신뢰성은 초기 설정에 따라 달라질 수 있음
  - 개인정보 보호 규정 변화에 따라 기능 제한 가능성 있음

---

## CORS (Cross-Origin Resource Sharing)
- 웹 브라우저가 한 출처에서 실행 중인 웹 애플리케이션이 다른 출처의 리소스에 접근할 수 있도록 허용하는 보안 메커니즘
- 보안 강화를 위해 동일 출처 정책(Same-Origin Policy)을 우회하여 요청을 허용
- 주로 클라이언트와 서버 간의 상호 작용 시 발생

1. **기본 원칙**
   - 기본적으로 웹 브라우저는 보안 이유로 다른 출처의 리소스에 대한 요청을 차단
   - CORS는 서버에서 특정 출처의 요청을 허용할 수 있도록 설정 가능

2. **HTTP 헤더 활용**
   - `Access-Control-Allow-Origin` 헤더를 통해 특정 출처 또는 모든 출처의 요청을 허용
   - `Access-Control-Allow-Methods`, `Access-Control-Allow-Headers` 등의 헤더로 허용되는 HTTP 메서드 및 헤더를 명시

3. **프리플라이트 요청 (Preflight Request)**
   - 클라이언트가 실제 요청 전에 `OPTIONS` 메서드를 사용하여 서버에 사전 요청을 보냄
   - 서버가 해당 요청을 허용하는지 확인하기 위한 과정
   - 서버는 이 프리플라이트 요청에 대해 허용할지 여부를 응답

4. **자격 증명(Credentials) 포함 요청**
   - 기본적으로 자격 증명(쿠키, 인증 헤더 등)이 없는 요청만 허용
   - `Access-Control-Allow-Credentials: true` 헤더로 자격 증명 포함 요청을 허용 가능
   - 클라이언트에서는 `withCredentials` 옵션을 설정해야 함

5. **CORS 오류 및 해결 방법**
   - CORS 오류는 클라이언트가 허용되지 않은 출처에서 리소스를 요청할 때 발생
   - 서버에서 적절한 `Access-Control-Allow-*` 헤더를 설정하여 문제 해결 가능
   - CORS 설정이 서버 쪽에 적용되므로, 개발자 도구의 네트워크 탭에서 응답 헤더를 확인하여 문제를 진단

6. **CORS의 보안적 고려사항**
   - 허용 출처를 신중하게 설정하여 보안 강화
   - 모든 출처(`*`)를 허용할 경우 보안 취약점 발생 가능성 있음
   - 특정 출처와 특정 메서드만 허용하도록 제한하는 것이 좋음

---

### 장점과 단점

- **장점**
  - 클라이언트와 서버 간의 유연한 리소스 공유를 가능하게 함
  - 동일 출처 정책의 한계를 보완하여 다양한 웹 애플리케이션의 상호작용을 지원

- **단점**
  - 잘못된 CORS 설정은 보안 취약점을 초래할 수 있음
  - 서버 측에서의 적절한 설정이 필요하며, 설정 과정이 복잡할 수 있음
  - 프리플라이트 요청으로 인해 요청 성능에 영향을 미칠 수 있음

---
