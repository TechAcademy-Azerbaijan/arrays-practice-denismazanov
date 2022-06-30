const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    // Write code here
  let array = [0,1,-2,1,0,0,3];
  let array2 = [];
  for(let i=0;i<array.length;i++){
          if(!array2.includes(array[i])){
              array2.push(array[i])}
      }



  console.log(array2)
});
