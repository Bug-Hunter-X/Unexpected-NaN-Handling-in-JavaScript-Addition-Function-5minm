# Unexpected NaN Handling in JavaScript Addition Function

This repository demonstrates a common, yet subtle, error in JavaScript related to handling `NaN` (Not a Number) in arithmetic operations. The `foo` function aims to perform addition, providing robust handling for `null` values. However, it lacks explicit handling for `NaN`, resulting in unexpected behavior.

## Bug Description

The `foo` function correctly handles `null` inputs, returning 0. However, when either input is `NaN`, the function directly returns `NaN` without any further processing. This is unexpected, and better error handling or alternative behavior might be desired depending on the specific application's needs.

## Bug Solution

The solution introduces a check for `isNaN` to handle `NaN` values explicitly.  The function now returns a specified value (e.g., 0 or an error message) when `NaN` is detected, making the function's behavior more predictable and robust.