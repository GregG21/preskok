// function sayHello(name) {
//   console.log("Hi " + name);
// }

// sayHello();

const sayHello = (phrase = "Hi", name = "John", surname = "Smith") => {
  return `${phrase} ${name} ${surname}`;
};

const checkInput = (resultHandler, ...args) => {
  for (const element of args) {
    if (!element) resultHandler();
  }
};
