import allData from '../components/lookup.json'


export default function GetPredictedFeno(props) {
  let dados = allData[props.sex][props.age];
  let mspline = dados['m0'] - dados['m1'];
  let predFeno = Math.round(Math.exp(Math.exp(parseFloat(dados['a0']) + dados['a1'] * Math.log(props.height) + dados['a2'] * Math.log(props.age) + mspline)));
  
  return predFeno;
}



/*
*/
/*
const Calculadora = () => {
  return (
    <div className='calcLarge'>
      <h1> TESTE ! </h1>
    </div>
  )
}
export default Calculadora;
*/
/*
variavel FENO == input valor de feno
variavel gender == input dropdown gender
variavel age == input valor age
variavel altura == input valor altura

*/

/*

function getPredictedFeno (sex, age, height) {

  let data = allData[sex][age];
  let mspline = data['m0'] - data['m1'];
  let predFeno = Math.exp(Math.exp(parseFloat(data['a0']) + data['a1'] * Math.log(height) + data['a2'] * Math.log(age) + mspline));

  return predFeno;
}

*/


