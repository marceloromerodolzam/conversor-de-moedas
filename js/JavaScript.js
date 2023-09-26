async function converter(){
    const valor = Number(document.getElementById('valor').value);
    const de = document.getElementById('de').value;
    const para = document.getElementById('para').value;
    let resultado = document.getElementById('result');

    if(valor == 0){
        resultado.innerHTML = 'Coloque um valor inical';
    }else{
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${de}`);
        const data = await response.json();
        const Rates = data.rates[para];

        const converterValor = (valor * Rates).toFixed(2);

        resultado.innerHTML = `${valor} ${de} = ${converterValor} ${para}`
    }
}