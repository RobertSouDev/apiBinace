const PAR = 'BTCUSDT';
const INTERVALO = '1m';
setInterval(() => {
  buscar(PAR, INTERVALO);
}, 10000);
async function buscar(par, intervalo) {
      
    let urlBase = 'https://api.binance.com';
    let endpoint = '/api/v3/klines'
    let url = urlBase + endpoint + `?symbol=${par}&interval=${intervalo}` 
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    let [ tempo, abertura, maxima, minima, fechamento ] = data[data.length - 1];
    
    console.log(new Date(tempo).toLocaleString());
    console.log(`Abertura: ${abertura}`);
    console.log(`Fechamento: ${fechamento}`);
    console.log(`Máxima: ${maxima}`);
    console.log(`Mínima: ${minima}`);
    let app = document.querySelector("#app").innerHTML  = 
    `<p>Data: ${new Date(tempo).toLocaleString()}</p>
    <p>Abertura: ${abertura}</p>
    <p>maxima: ${maxima}</p>
    <p>Minima: ${minima}</p>
    `
    

} 
buscar(PAR, INTERVALO); 


