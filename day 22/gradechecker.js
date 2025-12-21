const checkGrade = marks => {

    if (marks > 100 || marks < 0) {
        return "Invalid marks";
    }
    else if (marks >= 90) {
        return "GRADE A";
    }
    else if (marks >= 75) {
        return "GRADE B";
    }
    else if (marks >= 50) {
        return "GRADE C";
    }
    else if (marks >= 35) {
        return "GRADE D";
    }
    else {
        return "FAIL";
    }
};

console.log(checkGrade(20)); 
console.log(checkGrade(95)); 
console.log(checkGrade(75)); 
console.log(checkGrade(85));
console.log(checkGrade(46)); 
console.log(checkGrade(101)); 


