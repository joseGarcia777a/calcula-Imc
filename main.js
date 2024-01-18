const form = document.getElementById('form');
const altura = document.getElementById('altura')
const peso = document.getElementById('peso');
const botao = document.getElementById('botao');

form.addEventListener('submit', function(e){
    e.preventDefault();
})

botao.addEventListener('click', function(){

    if(isNaN(altura.value && peso.value)){
        alert("Digite um valor vaildo");
    }else{
        let calculo = peso.value/(altura.value * altura.value);

        document.getElementById('entrada').innerHTML = "Seu IMC é: " + calculo.toFixed(2);

        
    }
})
