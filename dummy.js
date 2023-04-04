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
