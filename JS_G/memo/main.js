/**
 * Fibonacci function will take a number as parameter and ...
 *
 * @param num -> (required)
 * @returns number
 */
function fibonacci({ num, desc }) {
  // if number is equal to or less than 1, exit
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}
function fact(num) {
  return num == 0 ? 1 : num * fact(num - 1);
}

function memoize(fun) {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log("from Cache");
      return cache[n];
    } else {
      let result = fun(n);
      cache[n] = result;
      return result;
    }
  };
}

// const newFibo = memoize(fibonacci);
// console.log(newFibo(40));
// console.log(newFibo(41));
// console.log(newFibo(42));

// console.log(newFibo(42));
// console.log(newFibo(35));

// function outer() {
//     let b = 10;
//     let c = 100;
//        function inner() {

//              let a = 20;
//              console.log("a= " + a + " b= " + b);
//              a++;
//              b++;
//              return a+b
//         }
//        return inner;
//     }
//     let X = outer();  // outer() invoked the first time
//     let Y = outer();  // outer() invoked the second time
//     //end of outer() function executions
//     X(); // X() invoked the first time
//     X(); // X() invoked the second time
//     X(); // X() invoked the third time
//     console.log(X())
//     console.log(X())
//     console.log(X())
//     Y(); // Y() invoked the first time

// (function add(a, b) {
//    console.log(a+b)
// })(1,2)

// function multiplier(factor) {
//    return number => number * factor;
//  }

//  let twice = multiplier(2);
//  console.log(twice(5));
//  // → 10
//  console.log(twice)

const userName = "echo";
const avatar = "echo.png";
const user = {
  userName,
  avatar,
  setUserName(userName) {
    this.userName = userName;
    return this;
  },
};
console.log(user.setUserName("Foo").userName); // "Foo"

const G = user.setUserName("Gregor");
console.log(G);

const noop = () => ({
  foo: "bar",
});
// console.log(noop()); // undefined

let a = 17;

const func = (x) => {
  let a = x;
};

func(99);

console.log(a); // ???????
const FactoryFunction = (string) => {
  const capitalizeString = () => string.toUpperCase();
  const printString = () => console.log(`----${capitalizeString()}----`);
  return { printString, capitalizeString };
};

const taco = FactoryFunction("taco");
