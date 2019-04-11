
//Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - outpot 15 // myFunction(10,10) - output 100

function numberSum(number1, number2) {
    if (number1 === number2) {
        return number1 * 5 + number2 * 5;
    }
    else return number1 + number2;
}

//Ex2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
//ex testFunction(30, 30) - true 
//testFunction(15,15) - true
//testFunction(10, 15) - false

function verifyNumber(number1, number2) {
    if (number1 === 30 && number2 === 30) {
        return true;
    }
    else if (number1 + number2 === 30) {
        return true;
    }
    else return false;
}

//Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS

function verifyJSInString(string) {
    var text = '';
    if (string.charAt(0) === 'J' && string.charAt(1) == 'S') {
        return string;
    }
    else return text += 'J' + 'S' + string;
}

//Ex4
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234

function removeDuplicate(string) {
    let a = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== string[i + 1]) {
            a += string[i];
        }
    } return a;
}

//Ex5
// Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'

function findLongestString(string) {
    var stringSplit = string.split(' ');
    var longestWordToShow = '';
    var longestWord = 0;
    for (let i = 0; i < stringSplit.length; i++) {

        if (stringSplit[i].length > longestWord) {

            longestWord = stringSplit[i].length;
            longestWordToShow = stringSplit[i];
        }
    }
    console.log(longestWordToShow);

}

//Ex6
//Scrieti o functie care sa aiba output-ul asta
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  

function stars(number) {
    let text = ''
    for (let i = 1; i <= number; i++) {
        text += ' * ';
        console.log(text);
    }
}

//ex7
const negativeNumbers = [];

function extractNegativeNumbers(numbers) {
    // append any negative numbers found in the numbers array 
    // into the negativeNumbers array constant variable above
}
extractNegativeNumbers([1, 2, -5, 4, -6])

//ex8
//Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
//ex calculate(2, 5, "add") => 7
//calculate(10, 8, "substract") => 2


function calculate(number1, number2, oper) {
    let oper;
    switch (oper) {
        case '*':
            console.log(number1 * number2);
            break;

        case '/':
            console.log(number1 / number2);
            break;

        case '+':
            console.log(number1 + number2);
            break;

        case '-':
            console.log(number1 - number2);
            break;

        default:
            console.log('i have no operator !');
    }
}

//Ex9
// Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7

function isDividedWith3And5(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return 'BOTH';
    } else if (number % 3 === 0) {
        return 'THREE';
    } else if (number % 5 === 0) {
        return 'FIVE';
    }
    else return number;

}


//Master exercises
//Ex9 
// Vreau sa pot afisa data si ziua sub urmatorul format:
// Azi este : Luni. 
// Ora este : 20 PM : 30 : 38

function dateAndTime()

//ex10
// ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
// validPin("1234") => true
// validPin("12345") => false
// validPin("z23f") => false

function isPinCorect(pin) {
    if (pin.length != 4 && pin.length != 6) {
        return false;
    }
    let numbers = /[0-9]/g;
    let result = pin.match(numbers);
    if (result.length == 4 || result.length == 6) {
        return true;
    } else return false;
}

//ex11 
//Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"

function removeVowels(string) {
    let regexpMeth = /(a|e|i|o|u)/g;
    let text = ''
    for (let i = 0; i < string.length; i++) {
        if (string[i] != regexpMeth) {
            text += string[i];
        }
    } console.log(text);
}

//ex12
//Vreau sa am o functie care sa verifice daca un numar este patrat
// isSquareNumber(-1) => false
// isSquareNumber(25) => true
// isSquareNumber(3) => false

function isSquareNumber(number) {
    let number = /[0-9]/g;
    let result = pin.match(numbers)
    if (Math.sqrt(number) == result) {
        return true;
    } else return false;
}


//ex13
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true

function verifyLetters(string1, string2) {
    var ok = true;
    for (var i = 0; i < string1.length; i++) {
        if (string2.indexOf(string1[i]) == -1) {
            ok = false;
            break;
        }
    }
    if (ok == true) {
        return 'Se gaseste';
    }
    else return 'Nu se gaseste.'
}