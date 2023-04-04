describe('Example class', () => {
  let example;

  beforeEach(() => {
    example = new Example('John');
  });

  afterEach(() => {
    example = null;
  });

  describe('printName method', () => {
    it('should print the name property to the console', () => {
      const spy = jest.spyOn(console, 'log');
      example.printName();
      expect(spy).toHaveBeenCalledWith('John');
      spy.mockRestore();
    });
  });

  describe('divide method', () => {
    it('should return the quotient of the two arguments', () => {
      const result = example.divide(10, 2);
      expect(result).toEqual(5);
    });

    it('should throw an error if the second argument is zero', () => {
      expect(() => example.divide(10, 0)).toThrow('Division by zero');
    });

    it('should handle negative arguments', () => {
      const result = example.divide(-10, 2);
      expect(result).toEqual(-5);
    });
  });

  describe('add method', () => {
    it('should return the sum of the two arguments', () => {
      const result = example.add(10, 2);
      expect(result).toEqual(12);
    });
  });

  describe('main method', () => {
    it('should print the name and divide 10 by 0', () => {
      const spy = jest.spyOn(console, 'log');
      example = new Example(null);
      expect(() => Example.main()).toThrow('Division by zero');
      expect(spy).toHaveBeenCalledWith(null);
      spy.mockRestore();
    });
  });
});
