# JavaScript Nullish Coalescing in Addition

This repository demonstrates a subtle bug in JavaScript related to how null values are handled during addition. The `foo` function aims to add two numbers but returns `null` if either input is `null`. This behavior is not always intuitive. The solution demonstrates a better approach using nullish coalescing to handle null inputs more gracefully.

## Bug

The bug lies in the function's direct addition of `a` and `b`.  If either value is `null`, the entire expression results in `null`.  This might not be the desired behavior; instead of halting execution on `null`, a default value might be preferable.

## Solution

The solution uses the nullish coalescing operator (`??`) to provide default values (0 in this case) when either `a` or `b` is null. This ensures that the addition proceeds smoothly even if one or both inputs are `null`. 