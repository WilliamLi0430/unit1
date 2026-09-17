/* function classifyNumber(num) {
    if (num > 0 && num % 2 === 0) {
        return "positive even";
    } else if (num > 0 && num % 2 !== 0) {
        return "positive odd";
    } else if (num < 0 && num % 2 === 0) {
        return "negative even";
    } else if (num < 0 && num % 2 !== 0) {
        return "negative odd";
    } else {
        return "zero";
    } 
}
console.log(classifyNumber(0)); 
console.log(classifyNumber(4));
console.log(classifyNumber(7));
console.log(classifyNumber(-4));
console.log(classifyNumber(-7)); */


/* function getLetterGrade(score) {
    if (score >= 90 && score <= 100) {
        return ("A");
    } else if (score >= 80 && score <= 89) {
        return ("B");
    } else if (score >= 70 && score <= 79) {
        return ("C");
    } else if (score >= 60 && score <= 69) {
        return ("D");
    } else if (score < 60 && score >= 0) {
        return ("F");
    } else {
        return ("Invalid score");
    }
}
console.log(getLetterGrade(95));
console.log(getLetterGrade(82));
console.log(getLetterGrade(69));
console.log(getLetterGrade(-5));
console.log(getLetterGrade(150)); */


/* function isValidPassword(password) {
    if (password.length >= 8 && /[0-9]/.test(password) && password !== ("password")) {
        return ("Valid");
    } else {
        return("Invalid password");
    }
}
console.log(isValidPassword("abc123456"));
console.log(isValidPassword("short1"));
console.log(isValidPassword("password"));
console.log(isValidPassword("nonumbershere")); */


/* function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return ("FizzBuzz");
    } else if (num % 3 === 0) {
        return ("Fizz");
    } else if (num % 5 === 0) {
        return ("Buzz");
    } else {
        return String(num);
    }
}
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(7)); */


/* function getShippingCost(weight, isMember) {
    if (isMember === (true) && weight <= 5) {
        return ("free")
    } else if (isMember === (true) && weight > 3) {
        return ("$3");
    }
    if (isMember === (false)) {
        if (weight > 5) {
            return ("$12");
        } else if (weight <= 5) {
            return ("$8");
        } else if (weight <= 1) {
            return("$5");
        } else {
            return("why are you shipping nothing");
        }
    } else {
        return ("no membership and shipping nothing? brokie");
    }
}
console.log(getShippingCost(8, true)); */


let num = 20;
let message;
if (num % 2 === 0) {
    message = "even";
} else {
    message = "odd";
}
let messageTernary = num = 2 ? "even" : "odd" 