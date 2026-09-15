Name: ______________________________

# AP CSP — JavaScript: Conditionals & Boolean Logic
*Unit 2: Programming in JavaScript*

*In the right-hand column, write your own explanation of the concept and describe how it works. Include a sketch, syntax pattern, or connection to something you already know where helpful.*

## SECTION 1 — CONDITIONALS

| **Concept** | **Explanation & How to Implement │ Connections to Prior Knowledge** |
| --- | --- |
| **What is a Conditional?** | |
| **if Statement** | |
| **if / else Statement** | |
| **else if — Multiple Branches** | |
| **Comparison Operators (`===`, `!==`, `<`, `>`, `<=`, `>=`)** | |
| **Logical Operators (`&&`, `\|\|`, `!`)** | |
| **Truthy vs. Falsy Values** | |
| **Ternary Operator (`condition ? a : b`)** | |
| **Nested Conditionals** | |

## SECTION 2 — KEY VOCABULARY

| **Term** | **In your own words — what does it mean?** |
| --- | --- |
| **condition** | |
| **boolean expression** | |
| **branch** | |
| **comparison operator** | |
| **logical operator** | |
| **short-circuit evaluation** | |
| **truthy / falsy** | |
| **ternary operator** | |
| **nested conditional** | |

## SECTION 3 — CONNECTIONS & REFLECTION

| **Prompt** | **Your Response** |
| --- | --- |
| **When would you use `else if` instead of writing separate `if` statements?** | |
| **Give a real-world example of `&&` and one of `\|\|`.** | |
| **What is the connection between conditionals and the AP CSP idea of an algorithm?** | |
| **What is one thing from today's demo you want to try on your own?** | |
| **What is still unclear? What question do you want to ask?** | |

**Practice File:** `practice_03_conditionals.js` — complete all TODOs after the lesson.

---

# Problem Set — Conditionals & Boolean Logic

Work through these in order. Each one builds on the idea before it. Test every function with more than one input — don't just check the example call.

## Problem 1 — Number Classifier

Write a function `classifyNumber(num)` that returns a string describing the number:
- `"zero"` if it's 0
- `"positive even"` if it's positive and even
- `"positive odd"` if it's positive and odd
- `"negative even"` if it's negative and even
- `"negative odd"` if it's negative and odd

**Test it with:** `0`, `4`, `7`, `-4`, `-7`

**Hint:** Use `%` (modulo) to check even/odd — a number is even if `num % 2 === 0`.

```js
console.log(classifyNumber(7)); // "positive odd"
```

## Problem 2 — Grade Calculator

Write a function `getLetterGrade(score)` that takes a number 0–100 and returns the letter grade:
- 90+ → `"A"`
- 80–89 → `"B"`
- 70–79 → `"C"`
- 60–69 → `"D"`
- below 60 → `"F"`

Then add a check at the top: if `score` is less than 0 or greater than 100, return `"Invalid score"` instead of calculating a grade.

**Test it with:** `95`, `82`, `59`, `-5`, `150`

**Hint:** Order your `if / else if` chain from highest to lowest — once one condition is true, the rest are skipped.

## Problem 3 — Login Validator

Write a function `isValidPassword(password)` that returns `true` only if **all** of these are true:
- length is at least 8 characters
- contains at least one number (check with `/[0-9]/.test(password)`)
- is not exactly `"password"` (case-sensitive)

Combine all three checks into a single `if` statement using `&&`.

**Test it with:** `"abc123456"`, `"short1"`, `"password"`, `"nonumbershere"`

**Hint:** `password.length` gives you the character count.

## Problem 4 — FizzBuzz

Write a function `fizzBuzz(num)` that returns:
- `"Fizz"` if `num` is divisible by 3
- `"Buzz"` if `num` is divisible by 5
- `"FizzBuzz"` if `num` is divisible by both 3 and 5
- otherwise, return `num` converted to a string

**Test it with:** `3`, `5`, `15`, `7`

**Hint:** Check the "divisible by both" case first — otherwise it will get caught by one of the other conditions before it's checked.

## Problem 5 — Shipping Cost Calculator

Write a function `getShippingCost(weight, isMember)` that calculates shipping:
- If `isMember` is `true`: shipping is free if `weight <= 5`, otherwise `$3` flat.
- If `isMember` is `false`:
  - `weight <= 1` → `$5`
  - `weight <= 5` → `$8`
  - `weight > 5` → `$12`

This one needs a conditional *inside* a conditional (nested). Start with the outer check on `isMember`, then handle the weight tiers inside each branch.

**Test it with:** `(3, true)`, `(8, true)`, `(0.5, false)`, `(4, false)`, `(10, false)`

**Hint:** Sketch out the branches on paper first — which combinations of `isMember` and `weight` give which price — before writing code.

---

### Stretch (optional)
Rewrite Problem 1's even/odd check using the ternary operator instead of `if / else`.
