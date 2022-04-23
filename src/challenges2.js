// Desafio 10
function techList(arrayTech, stringName) {
  arrayTech.sort();
  let arrayInfo = [];
  if (arrayTech.length === 0) {
    arrayInfo = 'Vazio!';
  } else {
    let info = {
    };
    for (let index of arrayTech) {
      info = {
        tech: index,
        name: stringName,
      };
      arrayInfo.push(info);
    }
  }
  return arrayInfo;
}

// Desafio 11
function generatePhoneNumber(telephoneNumber) {
  let retorno = '';
  //Confere se o número do telefone é válido
  if (telephoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index of telephoneNumber){
    let contador = 0;
    for (let indice = 0; indice < telephoneNumber.length; indice += 1) {
      if (telephoneNumber[index] === telephoneNumber[indice]) {
        contador += 1;
      }
    }
    if (index < 0 || index > 9 || contador >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    } 
  }
  //Coloca o número de telefone no formato pedido
  for (let index = 0; index < telephoneNumber.length; index += 1) {
    if (index === 0) {
      retorno += `(${telephoneNumber[index]}`;
    } else if (index === 1) {
      retorno += `${telephoneNumber[index]}) `;
    } else if (index === 6) {
      retorno += `${telephoneNumber[index]}-`;
    } else retorno += telephoneNumber[index];
  }
  return retorno;
}

// Desafio 12
function triangleCheck(a, b, c) {
  var absolutoA = Math.abs(a);
  var absolutoB = Math.abs(b);
  var absolutoC = Math.abs(c);
  var diferenca = absolutoA - absolutoB - absolutoC;
  if (a > (b + c) || b > (a + c) || c > (a + b)) {
    return false;
  } else if (a < diferenca || b < diferenca || c < diferenca) {
    return false;
  } else {
    return true;
  }
}

// Desafio 13
function hydrate(string) {
  let numbers = string.match(/\d+/g).map(Number);
  //fórmula pesquisada no site (https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994)
  let soma = 0;
  for (let index of numbers) {
    soma += index;
  }
  if (soma === 1) {
    return `${soma} copo de água`;
  } else {
    return `${soma} copos de água`;
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
