// 첫 번째 서브모듈 (hello)
// 두 번째 서브모듈 (add, multiply)
const { hello } = require("study-submodule");
const { add, multiply } = require("study-submodule-02");

console.log(hello("Docker & Submodule Test"));

const a = 3;
const b = 4;

console.log("add:", add(a, b));
console.log("multiply:", multiply(a, b));