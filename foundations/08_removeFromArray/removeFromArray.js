const removeFromArray = function() {

    let returnArray = arguments[0];

    for(i = 1; i < returnArray.length; i++)
    {
        returnArray = returnArray.filter(num => num !== arguments[i]);
    }
    return returnArray;

};

// Do not edit below this line
module.exports = removeFromArray;
