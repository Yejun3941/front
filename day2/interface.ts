interface Employee {
  name: string;
  id: number;
  isManager: boolean;
  getUniqueId: () => string;
}
//  인터페이스 이긴 한데, 뭔가 추상클래스 같기도하고?
//  근데 이건 예시가 진짜 추상클래스 느낌이 오히려 강하고, interface는 명시 하고 클래스 내부 생성하고

const linda: Employee = {
  name: "linda",
  id: 2,
  isManager: false,
  getUniqueId: (): string => {
    let uniqueID = linda.id + " - " + linda.name;
    if (!linda.isManager) {
      return "emp-" + uniqueID;
    }
    return uniqueID;
  },
};

console.log(linda.getUniqueId());
