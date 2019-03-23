// 1. Scrieti o functie care verifica daca un input este sau nu de tip string.

function is_string(string) {
    return typeof(string) === 'string';
} 
console.log(is_string('w3resource'));


// 2. Scrieti o functie care verifica daca un string este gol sau nu.

function is_Blank(string) {
    return string.charAt(0) == '';
}


// 3. Scrieti o functie accepta ca input un string si il transforma intr-un array de cuvinte:

function string_to_array(string) {
    return string.split(' ');
}

// 4. Scrieti o functie care transforma un string in forma abreviata:

function abbrev_name(string) {
    return string.split(' ')[0] + ' ' + string.split(' ')[1].charAt(0) + '.'
}

// 5. Scrieti o functie care face prima litera a unui string sa fie de tip capital ( litera mare ):

function capitalize(string) {
    return string.split(' ')[0].charAt(0).toUpperCase() + string.slice(1);
}

// 8. Scrieti o functie care insereaza un string la o anumita pozitie intr-un alt string:

function insert(string, word, position) {
    return string.slice(0,position) + word + string.slice(position);
}

// 9. Scrieti o functie care elimina prima aparitie a unui string dintr-un alt string:

function remove_first_occurrence(string, word) {
    return string.replace(string.charAt(string.indexOf(word) - 1)+word, '');
}

// 10. Scrieti o functie care compara doua string-uri case-insensitive:

function compare_strings(string1, string2) {
    return string1.toLowerCase() == string2.toLowerCase();
}

// 11. Scrieti o functie care face ca primul caracter a unui string sa fie de tip uncapital:

function uncapitalize(string) {
    return string.split(' ')[0].charAt(0).toLowerCase() + string.slice(1);
}