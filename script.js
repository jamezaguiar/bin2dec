function verify(binaryNumber) {
  for (var i = 0; i < binaryNumber.length; i++) {
    if (binaryNumber[i] != 0 && binaryNumber[i] != 1) {
      return false;
    }
  }
  return true;
}

function convert(binaryNumber) {
  if (verify(binaryNumber)) {
    var calc = 0;
    var finalValue = 0;
    var exponent = binaryNumber.length - 1;
    var result = document.getElementById("result");

    for (var i = 0; i < binaryNumber.length; i++) {
      calc = Number(binaryNumber[i]) * 2 ** exponent;
      finalValue += calc;
      exponent--;
    }

    result.innerHTML = `Resultado: ${finalValue}`;
  } else {
    alert("Use apenas os algarismos 0 e 1.");
  }
}
