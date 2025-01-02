function foo(a, b) {
  // Use nullish coalescing to handle null values gracefully
  const aVal = a ?? 0; 
  const bVal = b ?? 0;
  return aVal + bVal; 
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 2
console.log(foo(1, null)); // 1
console.log(foo(null, null)); // 0