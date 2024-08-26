
/**
*  Returns all even numbers from an input array
* @param number[] 
* @return resultlist
*/
const getEvenNumbers = (inputlist: number[]): number[] => {
  const resultlist: number[] = [];
  inputlist.forEach((element) => {
    if (element % 2 == 0) {
      resultlist.push(element);
    }
  });
  return resultlist;
};

//A shorter way to complete this task
const getEvenNumbers2 = (input: number[]): number[] => {
    return input.filter(value => value % 2 === 0);
  }



const inputlist:number[] = [1, 4, 7, 12, 45, 88];

getEvenNumbers(inputlist); //result : [4, 12, 88];