const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    // Write code here
  let l = [9,5,-7,-7,5,-9,-4]
  let count = 0;
  for(let i =1;i<l.length-1;i++){
      if(l[i-1]<l[i]&& l[i]>l[i+1]){
          count++
      }
  }
  console.log(count)
  
});
