'use strict';

function openOrSenior(data){
  let result = new Array;
  console.log(result);
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      if(data[i][j] < 55 {
        result.push('Open')
      } else if(data[i][j] > 7)  && (data[i][j + 1] < 7))  {
        result.push('Senior')
      };
    }
  }
  return result;
}
