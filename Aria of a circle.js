function findArea(r) {
  let pieValue = Math.PI;
  let area = pieValue * r * r;
  return area;
}

let radius = 5;
area = findArea(radius);
console.log(area);
