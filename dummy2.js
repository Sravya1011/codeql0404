class Example {
  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log(this.name);
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  }

  add(a, b) {
    let sum = a + b;
    return sum;
  }

  static main() {
    let example = new Example(null);
    example.printName();
    let result = example.divide(10, 0);
    console.log(result);
  }
}

Example.main();

function unusedFunction() {
  console.log('This function is never called');
}

let unusedVariable;

function longFunctionNameThatIsHardToRead(a, b, c, d, e, f, g, h, i, j, k) {
  let sum = 0;
  for (let n = 0; n < arguments.length; n++) {
    if (typeof arguments[n] !== 'number') {
      continue;
    }
    if (arguments[n] < 0) {
      sum -= arguments[n];
    } else {
      sum += arguments[n];
    }
  }
  return sum;
}

let magicNumber = 42;

class BadlyNamedClass {
  constructor() {
    this.someProperty = 0;
  }

  doStuff() {
    console.log('Doing stuff...');
  }

  badMethod() {
    let x = this.someProperty;
    x += magicNumber;
    console.log(x);
  }
}

let badlyNamedInstance = new BadlyNamedClass();
badlyNamedInstance.doStuff();
badlyNamedInstance.badMethod();
