//Ex1
//Scrieti o functie care sa protejeze emailul unui user
// de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"

function protectData(string) {
    var char = string.split('@');
    if (char[0].indexOf('.') !== -1) {
      console.log(char[0].split('.')[0] + '...@' + char[1]);
    }
    else console.log(char[0].substr(0, 3) + '...@' + char[1]);
  }
  console.log(protectData('Ovidiugrigoras@yahoo.com'));
  
  
  //Ex2
  //Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
  // de ex: myFunction("i am superman") sa printeze "I Am Superman"
  
  function getUpperCaseFirstLetter(string1) {
    var char1 = string1.split(' ');
    var text = '';
    for (var i = 0; i < char1.length; i++) {
      text += char1[i].charAt(0).toUpperCase() + char1[i].slice(1) + ' ';
  
  
    }
  
    console.log(text);
  }
  console.log(getUpperCaseFirstLetter('i am superman'))
  
  
  //Ex3
  // Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
  // ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"
  
  
  function changeUpperLowerCase(text) {
    var i;
    var res = [];
    for (i = 0; i < text.length; i++) {
  
      if (text[i] === text[i].toUpperCase()) {
        res.push(text[i].toLowerCase());
      } else {
  
        res.push(text[i].toUpperCase())
  
      }
  
    }
    console.log(res.join(''));
  
  }
  changeUpperLowerCase('iaMsuperman');
  
  
  //Ex4
  // Scrieti o functie care sa concateneze un string de cate ori ii zicem
  // de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"
  
  function myFunction(text, nr) {
    var result = text.repeat(nr);
    return result;
  }
  console.log(myFunction('Wantsome', 2));
  
  //Ex5
  // A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word 'level'.
  // Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante
  
  
  function verifyPalindrome(word) {
    var i;
    for (i = 0; i <= word.length / 2; i++) {
      if (word[i] === word[word.length - 1 - i]) {
        return word + ' este palindrom';
      }
      else return word + ' nu este palindrom'
    }
  }
  
  
  //Ex6
  // Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si returneaza un array care contine ca si elemente cele mai mari numere din fiecare array
  
  function biggestNumFromArray(arrayword) {
    var arrayToShow = [];
    arrayword.forEach(function (el) {
      var a = 0;
      el.forEach(function (num) {
        if (num > a) {
          a = num;
        }
      })
      arrayToShow.push(a);
    })
    return arrayToShow;
  }
  
  //Ex7
  // Implementati o functie care face reverse la un string
  
  function reverseString(string) {
    return string.split('').reverse().join('');
  }
  
  //Ex8 
  // Implementati o functie care calculeaza factorialul unui numar
  
  function sumFact(number) {
    var numberFactorial = 1;
    for (var i = 1; i <= number; i++) {
      numberFactorial = i * numberFactorial;
    } return numberFactorial;
  }
  console.log(sumFact(5));
  //Ex9
  // Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma
  
  
  function stringVerify(string1, string2) {
    return string1.lastIndexOf(string2) == string1.length - string2.length ? true : false;
  
  }
  
  //Ex10
  // Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul element din array care trece testul specificat
  
  function trueFunction(el) {
    if (el.length > 4) {
      return el;
    }
  }
  function newFunction(array, trueFunction) {
    array.forEach(function (el) {
      trueFunction(el);
    })
  }
  
  //Ex11
  // Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele celui de-al doilea string
  
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
  
  
  // Ex 12
  // Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare element al array-ului pana cand intalneste elementul cu valoarea specificata
  
  function showEveryCharacterUntil(array, value) {
    let arrayToShow = [];
    for (let i = 0; i < array.length; i++) {
      for (j = 0; j <= array[i].length; j++) {
        if (array[i].indexOf[j] == value) {
          array.splice(array[i].indexOf[j])
          return array.splice(array[i].indexOf[j]);
        } else return array;
      }
    }
  
  }
  
  // Ex 13
  // Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN
  
  // Ex 14
  // Scrieti o functie care repeta un string de n ori specificate
  
  function myFunction(text, nr) {
    var result = text.repeat(nr);
    return result;
  }
  console.log(myFunction('EdmOnd', 2));