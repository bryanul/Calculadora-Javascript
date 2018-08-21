var operando;
var operacion;
var res;
function init(){
  var btn0 = document.getElementById("0");
  var btn1 = document.getElementById("1");
  var btn2 = document.getElementById("2");
  var btn3 = document.getElementById("3");
  var btn4 = document.getElementById("4");
  var btn5 = document.getElementById("5");
  var btn6 = document.getElementById("6");
  var btn7 = document.getElementById("7");
  var btn8 = document.getElementById("8");
  var btn9 = document.getElementById("9");
  var mas = document.getElementById("mas");
  var menos = document.getElementById("menos");
  var por = document.getElementById("por");
  var mas = document.getElementById("mas");
  var entre = document.getElementById("dividido");
  var raiz = document.getElementById("raiz");
  var igual = document.getElementById("igual");
  var punto = document.getElementById("punto");
  var resultado = document.getElementById("display");
  var on = document.getElementById("on");
  var sign = document.getElementById("sign");
  btn0.onmousedown = function(e){
    btn0.style.cssText = 'z-index: -1';
    if(resultado.textContent.length < 8, resultado.textContent > "0" ){
      resultado.textContent = resultado.textContent  + "0";
  }
  else if (resultado.textContent.length < 8 , resultado.textContent = "0") {
    alert("No puedes agregar más ceros");
  }
  else {
    alert("No puedes agregar más numeros");
  }
  }
  btn0.onmouseout = function(e){
    btn0.style.cssText = 'z-index: +1';
  }
  btn1.onmousedown = function(e){
    btn1.style.cssText = 'z-index: -1';
    if(resultado.textContent.length < 8 ){
      if (resultado.textContent > "0") {
        resultado.textContent = resultado.textContent  + "1";
      }
      else if (resultado.textContent = "0") {
        resultado.textContent = "1";
      }
    }
    else {
      alert("No puedes agregar más numeros")
    }
    operando = 1;
  }
  btn1.onmouseout = function(e){
    btn1.style.cssText = 'z-index: +1';
  }
  btn2.onmousedown = function(e){
    btn2.style.cssText = 'z-index: -1';
    if(resultado.textContent.length < 8 ){
      if (resultado.textContent > "0") {
        resultado.textContent = resultado.textContent  + "2";
      }
      else if (resultado.textContent = "0") {
        resultado.textContent = "2";
      }
    }
    else {
      alert("No puedes agregar más numeros")
    }
    operando = 2;
  }
  btn2.onmouseout = function(e){
    btn2.style.cssText = 'z-index: +1';
  }
  btn3.onmousedown = function(e){
    btn3.style.cssText = 'z-index: -1';
    if(resultado.textContent.length < 8 ){
      if (resultado.textContent > "0") {
        resultado.textContent = resultado.textContent  + "3";
      }
      else if (resultado.textContent = "0") {
        resultado.textContent = "3";
      }
    }
    else {
      alert("No puedes agregar más numeros")
    }
    operando = 3;
  }
  btn3.onmouseout = function(e){
    btn3.style.cssText = 'z-index: +1';
  }
  btn4.onmousedown = function(e){
    btn4.style.cssText = 'z-index: -1';
    if(resultado.textContent.length < 8 ){
      if (resultado.textContent > "0") {
        resultado.textContent = resultado.textContent  + "4";
      }
      else if (resultado.textContent = "0") {
        resultado.textContent = "4";
      }
    }
    else {
      alert("No puedes agregar más numeros")
    }
    operando = 4;
  }
  btn4.onmouseout = function(e){
    btn4.style.cssText = 'z-index: +1';
  }
  btn5.onmousedown = function(e){
    btn5.style.cssText = 'z-index: -1';
    if(resultado.textContent.length < 8 ){
      if (resultado.textContent > "0") {
        resultado.textContent = resultado.textContent  + "5";
      }
      else if (resultado.textContent = "0") {
        resultado.textContent = "5";
      }
    }
    else {
      alert("No puedes agregar más numeros")
    }
    operando = 5;
  }
  btn5.onmouseout = function(e){
    btn5.style.cssText = 'z-index: +1';
  }
  btn6.onmousedown = function(e){
    btn6.style.cssText = 'z-index: -1';
    if(resultado.textContent.length < 8 ){
      if (resultado.textContent > "0") {
        resultado.textContent = resultado.textContent  + "6";
      }
      else if (resultado.textContent = "0") {
        resultado.textContent = "6";
      }
    }
    else {
      alert("No puedes agregar más numeros")
    }
    operando = 6;
  }
  btn6.onmouseout = function(e){
    btn6.style.cssText = 'z-index: +1';
  }
  btn7.onmousedown = function(e){
    btn7.style.cssText = 'z-index: -1';
    if(resultado.textContent.length < 8 ){
      if (resultado.textContent > "0") {
        resultado.textContent = resultado.textContent  + "7";
      }
      else if (resultado.textContent = "0") {
        resultado.textContent = "7";
      }
    }
    else {
      alert("No puedes agregar más numeros")
    }
    operando = 7;
  }
  btn7.onmouseout = function(e){
    btn7.style.cssText = 'z-index: +1';
  }
  btn8.onmousedown = function(e){
    btn8.style.cssText = 'z-index: -1';
    if(resultado.textContent.length < 8 ){
      if (resultado.textContent > "0") {
        resultado.textContent = resultado.textContent  + "8";
      }
      else if (resultado.textContent = "0") {
        resultado.textContent = "8";
      }
    }
    else {
      alert("No puedes agregar más numeros")
    }
    operando = 8;
  }
  btn8.onmouseout = function(e){
    btn8.style.cssText = 'z-index: +1';
  }
  btn9.onmousedown = function(e){
    btn9.style.cssText = 'z-index: -1';
    if(resultado.textContent.length < 8 ){
      if (resultado.textContent > "0") {
        resultado.textContent = resultado.textContent  + "9";
      }
      else if (resultado.textContent = "0") {
        resultado.textContent = "9";
      }
    }
    else {
      alert("No puedes agregar más numeros")
    }
    operando = 9;
  }
  btn9.onmouseout = function(e){
    btn9.style.cssText = 'z-index: +1';
  }
  mas.onmousedown = function(e){
    mas.style.cssText = 'z-index: -1';
    res = resultado.textContent;
    operacion = "+";
    resultado.textContent = "";
  }
  mas.onmouseout = function(e){
    mas.style.cssText = 'z-index: +1';
  }
  menos.onmousedown = function(e){
    menos.style.cssText = 'z-index: -1';
    res = resultado.textContent;
    operacion = "-";
    resultado.textContent = "";
  }
  menos.onmouseout = function(e){
    menos.style.cssText = 'z-index: +1';
  }
  por.onmousedown = function(e){
    por.style.cssText = 'z-index: -1';
    res = resultado.textContent;
    operacion = "*";
    resultado.textContent = "";
  }
  por.onmouseout = function(e){
    por.style.cssText = 'z-index: +1';
  }
  entre.onmousedown = function(e){
    entre.style.cssText = 'z-index: -1';
    res = resultado.textContent;
    operacion = "/";
    resultado.textContent = "";
  }
  entre.onmouseout = function(e){
    entre.style.cssText = 'z-index: +1';
  }
  igual.onmousedown = function(e){
      switch (operacion){
        case "+":
          res = parseFloat(res) + operando;
          break;
        case "-":
          res = parseFloat(res) - operando;
          break;
        case "*":
          res = parseFloat(res) * operando;
          break;
        case "/":
          res = parseFloat(res) / operando;
          break;
    }
    resultado.textContent = res;
    igual.style.cssText = 'z-index: -1';
  }
  igual.onmouseout = function(e){
    igual.style.cssText = 'z-index: +1';
  }
  on.onmousedown = function(e){
    on.style.cssText = 'z-index: -1';
    resultado.textContent = "0";
    operando = 0;
    operacion = "0";
  }
  on.onmouseout = function(e){
    on.style.cssText = 'z-index: +1';
  }
  punto.onmousedown = function(e){
  if (resultado.textContent.includes(".")) {
    alert("No puedes agregar más puntos")
  }
  else if (resultado.textContent.length < 8) {
    punto.style.cssText = 'z-index: -1';
    resultado.textContent = resultado.textContent + ".";
  }
  else {
    alert("No puedes agregar más caracteres")
  }
  }
  punto.onmouseout = function(e){
    punto.style.cssText = 'z-index: +1';
  }
  sign.onmousedown = function(e){
    if (resultado.textContent = +resultado.textContent) {
      resultado.textContent = -resultado.textContent;
      sign.style.cssText = 'z-index: -1';
    }
  }
  sign.onmouseout = function(e){
    sign.style.cssText = 'z-index: +1';
  }
}
