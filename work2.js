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


/* practice_04_loops.md


const numlist = [];
function getNumbersInRange(start, end) {
    range = end - start + 1;
    for (let i = 0; i < 1000; i++) {
        if (i >= start && i <= end) {
            numlist.push(i);
        }
    }
    return(numlist);
}
console.log(getNumbersInRange(1, 5)); */


/* function sumRange(start, end) {
    total = 0
    for (let i = start; i <= end; i++) {
        total += i;
    }
    return(total);
}

console.log(sumRange(1, 5));
console.log(sumRange(1, 100));
console.log(sumRange(4, 4)); */


/* arr = [];
function countdown(n) {
    while (n > 0) {
        arr.push(n);
        n -= 1;
    }
    return(arr);
}
console.log(countdown(5));
console.log(countdown(1));
console.log(countdown(8)); */


/* function countVowels(str) {
    let letters = 0;
    for (let i = 0; i < 10; i++) {
        if (str[i] === "a" || "e" || "i" || "o" || "u");
            letters += 1;
            return(letters);
    }
}
console.log(countVowels("hello")); */

/* function countVowels(str) {
    let letters = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || 
            str[i] === "e" || 
            str[i] === "i" || 
            str[i] === "o" || 
            str[i] === "u") {
            letters += 1;
        }
    }
    return(letters);
}
console.log(countVowels("hello"));
console.log(countVowels("javascript"));
console.log(countVowels("xyz"));
console.log(countVowels("aeiou")); */

//incomplete
/* multiplyList = [];
function multiplicationTable(n) {
    for (let i = 0; i < n; i++) {
        let v = 0
        if (v > n) {
            i * n === v;
            multiplyList.push(v)
        }
    }
    return(multiplyList);
}

console.log(multiplicationTable(4)); */



//BOWLING

let rolls = [2, 2, 5, 5, 3, 4, 7, 3, 10, 1, 2];
function bowlingScoreCalculator() {
    let points = 0;
    let i = 0;
    for (let frame = 0; frame < 10; frame++) {  
        if (rolls[i] === undefined) break;
        if (rolls[i] === 10) {
            points += 10 + (rolls[i + 1] || 0) + (rolls[i + 2]|| 0);
            i += 1;
            console.log(points);
        }
         else if ((rolls[i] || 0) + (rolls[i + 1] || 0) === 10) { 
            points += 10 + (rolls[i + 2] || 0);
            i += 2;
            console.log(points);
        }
        else if ((rolls[i] + rolls[i + 1]) < 10) {
            points += (rolls[i] || 0) + (rolls[i + 1] || 0);
            i += 2;
            console.log(points);
        }
    }
    return points;
}
console.log(bowlingScoreCalculator());