function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
 
  var imya = document.getElementById('imya'); 
  var string = "Иван";
  for (var i = 0; i < string.length + 1; ++i) {
    imya.value = string.substring(0, i);
      await sleep(500);
  }   
  
  var otchestvo = document.getElementById('otchestvo'); 
  var string2 = "Иванович";
  for (i = 0; i < string2.length + 1; ++i) {
    otchestvo.value = string2.substring(0, i);
      await sleep(200);
  }    
  
  var familiya = document.getElementById('familiya'); 
  var string3 = "Иванов";
  for (i = 0; i < string3.length + 1; ++i) {
    familiya.value = string3.substring(0, i);
      await sleep(400);
  }    
 
  var gorod = document.getElementById('gorod'); 
  var string4 = "Санкт-Петербург";
  for (i = 0; i < string4.length + 1; ++i) {
    gorod.value = string4.substring(0, i);
      await sleep(300);
  }   
  
  var strana = document.getElementById('strana'); 
  var string5 = "Россия";
  for (i = 0; i < string5.length + 1; ++i) {
    strana.value = string5.substring(0, i);
      await sleep(200);
  }   
  
  var Radio1 = document.getElementById('Radio1');  
  Radio1.checked = true;  
  await sleep(500);
  var one = document.getElementById('one');  
  one.checked = true; 
  
}
  
  
