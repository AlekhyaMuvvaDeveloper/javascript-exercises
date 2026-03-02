 const sumAll = function(valOne, valTwo) {    
    let totalSum = 0;
    if (!Number.isInteger(valOne) || !Number.isInteger(valTwo)) return "ERROR";    
        if ((valOne < 0) || (valTwo < 0)) return "ERROR";        
            if (valOne > valTwo)
            {
                for (i = valTwo;i <= valOne; i++)
                    totalSum += i;
            }
            else 
            {
                for (i = valOne;i <= valTwo; i++)
                    totalSum += i;
            }
        return totalSum;                   
};

// Do not edit below this line
module.exports = sumAll;
