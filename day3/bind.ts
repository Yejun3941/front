class A {
  name: string = "A";
  go() {
    console.log(this.name);
  }
}

class B {
  name: string = "B";
  go() {
    console.log(this.name);
  }
}

const a = new A();
a.go();

const b = new B();
b.go = b.go.bind(a); // 이게 없을 경우 b.go 는 B를 출력 / 이 문장 수행시, b.go는 A를 출력 / 왜 이러면 a.go()가 바인딩 된거지? 그러면 바인딩은 함수이름이 같아야하나? A 오브젝트 자체가 바인딩 되야하는거아닌가?
b.go();
