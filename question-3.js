// Question #3

// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword) {
    let password = userPassword;
    if (password.length < 6) {
        return "Weak";
    } else if (password.length <= 10) {
        return "Medium";
    } else {
        return "Strong";
    }    
}

let userPassword = "ssswnalWadqQ"
console.log(checkPasswordStrength(userPassword));

let userPassword2 = "TechUp"
console.log(checkPasswordStrength(userPassword2));

let userPassword3 = "abcde"
console.log(checkPasswordStrength(userPassword3));