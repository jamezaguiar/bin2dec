function verifyBinaryNumber(binaryNumber) {
  for (var i = 0; i < binaryNumber.length; i++) {
    if (binaryNumber[i] != 0 && binaryNumber[i] != 1) {
      return false;
    }
  }
  return true;
}

function verifyDecimalNumber(decimalNumber) {
  for (var i = 0; i < decimalNumber.length; i++) {
    if (
      decimalNumber[i] != 0 &&
      decimalNumber[i] != 1 &&
      decimalNumber[i] != 2 &&
      decimalNumber[i] != 3 &&
      decimalNumber[i] != 4 &&
      decimalNumber[i] != 5 &&
      decimalNumber[i] != 6 &&
      decimalNumber[i] != 7 &&
      decimalNumber[i] != 8 &&
      decimalNumber[i] != 9
    ) {
      return false;
    }
  }
  return true;
}

function convertBinaryToDecimal(binaryNumber) {
  if (verifyBinaryNumber(binaryNumber)) {
    var calc = 0;
    var finalValue = 0;
    var exponent = binaryNumber.length - 1;
    var result = document.getElementById("result");

    for (var i = 0; i < binaryNumber.length; i++) {
      calc = Number(binaryNumber[i]) * 2 ** exponent;
      finalValue += calc;
      exponent--;
    }

    result.innerHTML = `${binaryNumber} em decimal é ${finalValue}`;
  } else {
    alert("Use apenas os algarismos 0 e 1.");
  }
}

function convertDecimalToBinary(decimalNumber) {
  // Verificar qual será o bit mais alto ativo
  if (verifyDecimalNumber(decimalNumber)) {
    var maxValue = 0;
    var exponent = 0;
    var calc = 0;
    var result = document.getElementById("result");

    while (maxValue < decimalNumber) {
      calc = 2 ** exponent;
      if (calc <= decimalNumber) {
        maxValue = calc;
        exponent++;
      } else {
        break;
      }
    }

    var bitArray = [];

    while (maxValue >= 1) {
      bitArray.push(maxValue);
      maxValue = maxValue / 2;
    }

    var binaryNumber = "";
    var remain = decimalNumber;

    for (const i of bitArray) {
      if (remain >= i) {
        remain -= i;
        binaryNumber += "1";
      } else {
        binaryNumber += "0";
      }
    }
    result.innerHTML = `${decimalNumber} em binário é ${binaryNumber}`;
  } else {
    alert("Use apenas algarismos de 0 a 9.");
  }
}

// 130
// 128, 64, 32, 16, 8, 4, 2, 1
