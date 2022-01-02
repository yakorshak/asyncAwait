'use sctrict'

async function wait(ms){
  let promise = new Promise(function(resolve, reject){
    if(ms < 3000){
      setTimeout(function(){
        return resolve('2 sek');
      }, ms);
    } else {
      setTimeout(function(){
        return reject('Слишком долго ждать');
      }, ms); 
    }
  });

try{
  let result = await promise;
  alert(result);
} catch (err) {
  alert(err);
}
}

wait(4000);