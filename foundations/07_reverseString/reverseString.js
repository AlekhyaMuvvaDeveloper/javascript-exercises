const reverseString = function(phrase) {
    
    // let phrase = "hello";
    let length = phrase.length;
    

    let revStr = "";
    
    for (i = length; i >= 0; i--)
    {
        revStr += phrase.charAt(i);
    }
    
    return revStr;

};

// Do not edit below this line
module.exports = reverseString;
