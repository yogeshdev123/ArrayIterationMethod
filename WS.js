//Write a function that takes an array of strings as input and returns a new array with all strings converted to uppercase.

var str=["hello", "world", "abc"];
console.log(str)
for(let i in str){
    str[i]=str[i].toUpperCase();
}
console.log(str);

// 2. Substring
//     - Question: Write a function that takes an array of strings as input and returns a new array with the first 3 characters of each string.

var str=["hello", "world", "abc"];
console.log(str)
for(let i in str){
    str[i]=str[i].substring(0,3);
}
console.log(str);



var str=["heollo", "world", "abc"];
console.log(str)
for(let i in str){
    str[i]=str[i].replace(/o/gi,0)
}

console.log(str)


// 3. Replace
//     - Question: Write a function that takes an array of strings as input and returns a new array with all occurrences of "o" replaced with "0".
//     - Hints: Use the replace() method.
var str=["heollo", "world", "abc"];
console.log(str)
for(let i in str){
    str[i]=str[i].replace(/o/gi,0)
}

console.log(str)


var str=["hello-world", "abc-def"];
console.log(str);
str.forEach((val,ind,ar)=>{
    ar[ind]=ar[ind].split("-")
})


console.log(str.flat())


// 4. Split
//     - Question: Write a function that takes an array of strings as input and returns a new array with each string split into words.
//     - Hints: Use the split() method.
    var str=["hello-world", "abc-def"];
    console.log(str);
    str.forEach((val,ind,ar)=>{
        ar[ind]=ar[ind].split("-");
    })
    
    console.log(str.flat());

    // 5. Filter
    // - Question: Write a function that takes an array of strings as input and returns a new array with only the strings longer than 5 characters.

    var str= ["hello", "world", "abc", "defghi","xyz", "abcdef"]
console.log(str);
console.log(str.filter((val)=>{
   return val.length>5;
})
);

// 6.Map
//     - Question: Write a function that takes an array of strings as input and returns a new array with all strings converted to uppercase and "!" appended.



var str= ["hello", "world", "abc", "defghi","xyz", "abcdef"]
console.log(str);
console.log(str.map((val)=>{
   return val.toUpperCase()+"!";
})
);



// 7.Find
//     - Question: Write a function that takes an array of strings as input and returns the first string containing "o".

var str= ["hello", "world", "abc", "defghi","xyz", "abcdef"]
console.log(str);
console.log(str.find(x=>x.includes("o")||x.includes("O")));


// 8.Join
//     - Question: Write a function that takes an array of strings as input and returns a new string with all strings joined by commas.
//     - Hints: Use the join() method.

var str= ["hellO", "world", "abc", "defghi","xyz", "abcdef"]
console.log(str);


console.log(str.join());






