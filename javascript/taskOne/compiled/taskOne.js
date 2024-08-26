/**
*  Returns all even numbers from an input array
* @param number[]
* @return resultlist
*/
var getEvenNumbers = function (inputlist) {
    var resultlist = [];
    inputlist.forEach(function (element) {
        if (element % 2 == 0) {
            resultlist.push(element);
        }
    });
    return resultlist;
};
//A shorter way to complete this task
var getEvenNumbers2 = function (input) {
    return input.filter(function (value) { return value % 2 === 0; });
};
var inputlist = [1, 4, 7, 12, 45, 88];
console.log(getEvenNumbers(inputlist)); //result : [4, 12, 88];
