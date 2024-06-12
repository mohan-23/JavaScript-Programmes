let array = [1, 4, 3, 2, 5, 7, 6];

// Ascending
//console.log(array.sort())

/*array.sort(function(a,b) {
    return a-b
})
console.log(array)*/

//console.log(array.reverse())

// Descending

array.sort(function (a, b) {
  return b - a;
});
console.log(array);
