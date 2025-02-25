document.addEventListener("DOMContentLoaded", function () {
    // elementos //
    const pantalla = document.querySelector(".pantalla");
    const botones = document.querySelectorAll("button");
  

    let operando1 = "";
    let operadorActual = "";

    function agregarNumero(numero) {
      pantalla.value += numero;
    }
  
    function establecerOperador(op) {
      if (pantalla.value !== "") {
        operando1 = pantalla.value;
        operadorActual = op;
        pantalla.value = "";
      }
    }
  
    function calcularResultado() {
      if (operando1 !== "" && pantalla.value !== "") {
        const operando2 = pantalla.value;
        let resultado = "";
        if (operadorActual === "+") {
          resultado = sumar(operando1, operando2);
        } else if (operadorActual === "-") {
          resultado = restar(operando1, operando2);
        } else if (operadorActual === "*") {
          resultado = multiplicar(operando1, operando2);
        } else if (operadorActual === "/") {
          resultado = dividir(operando1, operando2);
        }
        pantalla.value = resultado;
        operando1 = "";
        operadorActual = "";
      }
    }
  
    function limpiar() {
      pantalla.value = "";
      operando1 = "";
      operadorActual = "";
    }
  
    function sumar(a, b) {
      return parseFloat(a) + parseFloat(b);
    }
  
    function restar(a, b) {
      return parseFloat(a) - parseFloat(b);
    }
  
    function multiplicar(a, b) {
      return parseFloat(a) * parseFloat(b);
    }
  
    function dividir(a, b) {
      return parseFloat(b) === 0 ? "Error" : parseFloat(a) / parseFloat(b);
    }
  
    botones.forEach((boton) => {
      boton.addEventListener("click", function () {
        const valor = boton.textContent.trim();
  
        if (!isNaN(valor)) {
          agregarNumero(valor);
        } else {
          if (valor === "+") {
            establecerOperador("+");
          } else if (valor === "-") {
            establecerOperador("-");
          } else if (valor === "*") {
            establecerOperador("*");
          } else if (valor === "÷") {
            establecerOperador("/");
          } else if (valor === "=") {
            calcularResultado();
          } else if (valor === "C") {
            limpiar();
          }
        }
      });
    });
  });
  