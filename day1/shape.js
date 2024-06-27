var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var jill = {
    name: 'jill'
};
// 위와 아래가 같게 인식함 겁나 유연하네?
var Jill2 = {
    name: 'jill2'
};
var person = jill;
console.log(person);
