function main(evento){
    evento.preventDefault();

	let peso = document.querySelector('#peso');
	let altura = document.querySelector('#altura');
	let paragrafoResultado = document.querySelector('div p');
	peso = Number(peso.value);
  	altura = Number(altura.value);

 	if (!peso) {
		paragrafoResultado.classList.add('bad');
    	paragrafoResultado.innerHTML = 'Peso inválido', false;
    	return;
  	}
  	if (!altura) {
		paragrafoResultado.classList.add('bad');
    	paragrafoResultado.innerHTML = 'Altura inválida', false;
    	return;
  	}

  	let imc = getImc(peso, altura);
  	const classificacao = classificacaoImc(imc);
	paragrafoResultado.classList.add('paragrafo-resultado');
  	paragrafoResultado.innerHTML = `Seu IMC é ${imc} (${classificacao}).`
}

function getImc(peso, altura){
	const imc = peso / (altura * altura);
	return imc.toFixed(2);
}

function classificacaoImc(imc){
	const classificacoes = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
	if(imc < 18.5){
		return classificacoes[0];
	}else if(imc >= 18.5 && imc <= 24.9){
		return classificacoes[1];
	}else if(imc >= 25 && imc <= 29.9){
		return classificacoes[2];
	}else if(imc >= 30 && imc <= 34.9){
		return classificacoes[3];
	}else if(imc >= 35 && imc <= 39.9){
		return classificacoes[4];
	}else if (imc >= 40) 
		return classificacoes[5];
}

const form = document.querySelector('form');
form.addEventListener('submit', main);
