const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    // Write code here
  let array = [3,5,-7,7,5,-9,-4]
  let l = [...array]

  let max = 0;  // 7
  let min = l[0];  // -9

  for(let i=0;i<l.length;i++){
      if(l[i]>max){
          max = l[i]
      }
      if(l[i]<min){
          min = l[i]
      }
  }

  for(let m = 0;m<l.length;m++){
      if(l[m]===max){
          l[m]=min
      }
      else if(l[m]===min){
          l[m]=max
      }
  }

  console.log(l)
  
});
