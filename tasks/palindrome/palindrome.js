function palindrome(word){
    
    let reverseWord = word.split('').reverse().join('');

    return word === reverseWord;
}

let string = "eye";

console.log(palindrome(string));


/*let arr1 = string.split('');
let reverseArr = arr1.slice().reverse();*/