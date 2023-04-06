function calculateArea(radius) {
  if(typeof radius !== 'number') {
    console.log('The radius should be a number.');
  }
  let area = Math.PI * radius * radius;
  return area;
}

console.log(calculateArea('2')); // Output: 12.566370614359172
