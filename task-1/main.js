const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    // Write code here
      let a = [1,6,2,6,3]

      let sum = 0;

      for(let i=0;i<a.length;i++){
          sum+=a[i]

      }
      let count = 0;
      for(let m = 0;m<a.length;m++){
          if(a[m]>sum/a.length){
              count++
          }
      }
      console.log(count)
  
});
