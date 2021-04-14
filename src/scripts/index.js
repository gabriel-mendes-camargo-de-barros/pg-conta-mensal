///*/*/*/*/*/* troca de pagina

// troca o display do elemento citado no querySelector
function openHealthBillsPage() {
  document.querySelector("#lazer").style.display = "none";
  document.querySelector("#home").style.display = "none";
  document.querySelector("#education").style.display = "none";
  document.querySelector("#food").style.display = "none";
  document.querySelector("#car").style.display = "none";
  document.querySelector("#grafic").style.display = "none";
  document.querySelector("#developers").style.display = "none";
  document.querySelector("#health").style.display = "flex";
}

function openHomeBillsPage() {
  document.querySelector("#lazer").style.display = "none";
  document.querySelector("#health").style.display = "none";
  document.querySelector("#education").style.display = "none";
  document.querySelector("#food").style.display = "none";
  document.querySelector("#car").style.display = "none";
  document.querySelector("#grafic").style.display = "none";
  document.querySelector("#developers").style.display = "none";
  document.querySelector("#home").style.display = "flex";
}

function openLazerBillsPage() {
  document.querySelector("#home").style.display = "none";
  document.querySelector("#health").style.display = "none";
  document.querySelector("#education").style.display = "none";
  document.querySelector("#food").style.display = "none";
  document.querySelector("#car").style.display = "none";
  document.querySelector("#grafic").style.display = "none";
  document.querySelector("#developers").style.display = "none";
  document.querySelector("#lazer").style.display = "flex";
}

function openEducationBillsPage(){
  document.querySelector("#home").style.display = "none";
  document.querySelector("#health").style.display = "none";
  document.querySelector("#lazer").style.display = "none";
  document.querySelector("#food").style.display = "none";
  document.querySelector("#car").style.display = "none";
  document.querySelector("#grafic").style.display = "none";
  document.querySelector("#developers").style.display = "none";
  document.querySelector("#education").style.display = "flex";
}

function openFoodBillsPage(){
  document.querySelector("#home").style.display = "none";
  document.querySelector("#health").style.display = "none";
  document.querySelector("#lazer").style.display = "none";
  document.querySelector("#education").style.display = "none";
  document.querySelector("#car").style.display = "none";
  document.querySelector("#grafic").style.display = "none";
  document.querySelector("#developers").style.display = "none";
  document.querySelector("#food").style.display = "flex";
}

function openCarBillsPage(){
  document.querySelector("#home").style.display = "none";
  document.querySelector("#health").style.display = "none";
  document.querySelector("#lazer").style.display = "none";
  document.querySelector("#education").style.display = "none";
  document.querySelector("#food").style.display = "none";
  document.querySelector("#grafic").style.display = "none";
  document.querySelector("#developers").style.display = "none";
  document.querySelector("#car").style.display = "flex";
}

function bildGrafic() {
  document.querySelector("#home").style.display = "none";
  document.querySelector("#health").style.display = "none";
  document.querySelector("#lazer").style.display = "none";
  document.querySelector("#education").style.display = "none";
  document.querySelector("#food").style.display = "none";
  document.querySelector("#car").style.display = "none";
  document.querySelector("#developers").style.display = "none";
  document.querySelector("#grafic").style.display = "flex";

  calculateAllBills()
}

function openDevelopersPage(){
  document.querySelector("#home").style.display = "none";
  document.querySelector("#health").style.display = "none";
  document.querySelector("#lazer").style.display = "none";
  document.querySelector("#education").style.display = "none";
  document.querySelector("#food").style.display = "none";
  document.querySelector("#grafic").style.display = "none";
  document.querySelector("#developers").style.display = "flex";
  document.querySelector("#car").style.display = "none";
}
///*/*/*/*/*/*/* cria nova conta na pagina


// inicializa variaveis contadoras (serve pra contar a cada vez que executa o comando)
let billHomeNumber = 0
let billHealthNumber = 0
let billLazerNumber = 0
let billEducationNumber = 0
let billFoodNumber = 0
let billCarNumber = 0
// cria elementos label e input da nova conta inserida e adiciona aos anteriores

// para a pagina home (casa)
function createNewHomeBill() {
  let newBill = document.querySelector('#new-home-bill').value;
  let bills = document.querySelector('.home-values'),
    HTMLTemporario = bills.innerHTML,
    HTMLNovo = `
      <label>${newBill}</label>
      <input id="homeBill${billHomeNumber}" type="number" />
    `;

  HTMLTemporario = HTMLTemporario + HTMLNovo;
  bills.innerHTML = HTMLTemporario;
  // adiciona 1 para o contador mencionado
  billHomeNumber++
}

// para pagina health (saude)
function createNewHealthBill() {
  let newBill = document.querySelector('#new-health-bill').value;
  let bills = document.querySelector('.health-values'),
    HTMLTemporario = bills.innerHTML,
    HTMLNovo = `
      <label>${newBill}</label>
      <input id="healthBill${billHealthNumber}" type="number" />
    `;

  HTMLTemporario = HTMLTemporario + HTMLNovo;
  bills.innerHTML = HTMLTemporario;
  billHealthNumber++
}

// para pagina lazer
function createNewLazerBill() {
  let newBill = document.querySelector('#new-lazer-bill').value;
  let bills = document.querySelector('.lazer-values'),
    HTMLTemporario = bills.innerHTML,
    HTMLNovo = `
      <label>${newBill}</label>
      <input id="lazerBill${billLazerNumber}" type="number" />
    `;

  HTMLTemporario = HTMLTemporario + HTMLNovo;
  bills.innerHTML = HTMLTemporario;
  billLazerNumber++
}

// para pagina educação
function createNewEducationBill() {
  let newBill = document.querySelector('#new-educação-bill').value;
  let bills = document.querySelector('.education-values'),
    HTMLTemporario = bills.innerHTML,
    HTMLNovo = `
      <label>${newBill}</label>
      <input id="educationBill${billEducationNumber}" type="number" />
    `;
  HTMLTemporario = HTMLTemporario + HTMLNovo;
  bills.innerHTML = HTMLTemporario;
  billEducationNumber++
}

// para pagina alimentação
function createNewFoodBill(){
  let newBill = document.querySelector('#new-food-bill').value;
  let bills = document.querySelector('.food-values'),
    HTMLTemporario = bills.innerHTML,
    HTMLNovo = `
      <label>${newBill}</label>
      <input id="foodBill${billFoodNumber}" type="number" />
    `;

  HTMLTemporario = HTMLTemporario + HTMLNovo;
  bills.innerHTML = HTMLTemporario;
  billFoodNumber++
}
//para pagina veiculo
function createNewCarBill(){
  let newBill = document.querySelector('#new-car-bill').value;
  let bills = document.querySelector('.car-values'),
    HTMLTemporario = bills.innerHTML,
    HTMLNovo = `
      <label>${newBill}</label>
      <input id="carBill${billCarNumber}" type="number" />
    `;

  HTMLTemporario = HTMLTemporario + HTMLNovo;
  bills.innerHTML = HTMLTemporario;
  billCarNumber++
}

///*/*/*/*/*/*/* calcula valor total das contas da pagina
let homeValue = 0;
let healthValue = 0;
let LazerValue = 0;
let EducationValue = 0;
let FoodValue = 0;
let CarValue = 0;

// calcula contas casa

// calcula somente os valores estáticos
function calculaContasCasa() {
  const luz = Number(document.getElementById("luz").value)
  const agua = Number(document.getElementById("agua").value)
  const internet = Number(document.getElementById("internet").value)
  const telefone = Number(document.getElementById("telefone").value)
  const tv = Number(document.getElementById("tv").value)
  const totalContasCasa = luz + agua + internet + telefone + tv
  return totalContasCasa;
}

// calcula todos os valores (dinamicos + estáticos)
function calculateAllHomeBills() {
  homeValue = 0;

  // repete o codigo (a Jaq vai mencionar depois)
  for (let i = 0; i < billHomeNumber; i++) {
    let id = `homeBill${i}`;
    homeValue = homeValue + Number(document.getElementById(id).value)
  }
  homeValue = homeValue + calculaContasCasa();
  document.querySelector(".home-result").innerHTML = homeValue
  return homeValue
}

// calcula contas saude

function calculaContasSaude() {
  const plano = Number(document.getElementById("plano").value)
  const exames = Number(document.getElementById("exames").value)
  const farmacia = Number(document.getElementById("farmacia").value)
  const totalContasSaude = plano + exames + farmacia
  return totalContasSaude;
}

function calculateAllHealthBills() {
  healthValue = 0;
  for (let i = 0; i < billHealthNumber; i++) {
    let id = `healthBill${i}`;
    healthValue = healthValue + Number(document.getElementById(id).value)
  }
  healthValue = healthValue + calculaContasSaude();
  document.querySelector(".health-result").innerHTML = healthValue
  return healthValue
}

// Calcula contas lazer
function calculateAllLazerBills() {
  const viagem = Number(document.getElementById("viagem").value)
  LazerValue = 0;
  for (let i = 0; i < billLazerNumber; i++){
    let id = `lazerBill${i}`;
    LazerValue = LazerValue + Number(document.getElementById(id).value)
  }
  LazerValue = LazerValue + viagem
  document.querySelector(".lazer-result").innerHTML = LazerValue
  return LazerValue
}

// Calcula contas educação
function calculateAllEducationBills(){
  const Escola = Number(document.getElementById("Escola").value)
  EducationValue = 0;
  for (let i = 0; i < billEducationNumber; i++){
    let id = `educationBill${i}`;
    EducationValue = EducationValue + Number(document.getElementById(id).value)
  }
  EducationValue = EducationValue + Escola
  document.querySelector(".education-result").innerHTML = EducationValue
  return EducationValue
}

// Calcula contas alimentação
function calculateAllFoodBills(){
  const Gás = Number(document.getElementById("Gás").value)
  FoodValue = 0;
  for (let i = 0; i < billFoodNumber; i++){
    let id = `foodBill${i}`;
    FoodValue = FoodValue + Number(document.getElementById(id).value)
  }
  FoodValue = FoodValue + Gás
  document.querySelector(".food-result").innerHTML = FoodValue
  return FoodValue
}

function calculateAllCarBills(){
  const Carro = Number(document.getElementById("Carro").value)
  CarValue = 0;
  for (let i = 0; i < billCarNumber; i++){
    let id = `carBill${i}`;
    CarValue = CarValue + Number(document.getElementById(id).value)
  }
  CarValue = CarValue + Carro
  document.querySelector(".car-result").innerHTML = CarValue
  return CarValue
}

// calcula o total de todas as paginas


// constroi o grafico
function calculateAllBills() {
  Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Contas Mensais'
    },
    xAxis: {
      categories: ['Total', 'Casa', 'Alimentação', 'Educação', 'Saúde', 'Lazer', 'Veículo']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Valor Total das Contas'
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: [{
      name: 'Casa',
      data: [calculateAllHomeBills(), homeValue]
    }, {
      name: 'Alimentação',
      data: [calculateAllFoodBills(), 0, FoodValue]
    }, {
      name: 'Educação',
      data: [calculateAllEducationBills(), 0, 0, EducationValue]
    }, {
      name: 'Saúde',
      data: [calculateAllHealthBills(), 0, 0, 0, healthValue]
    }, {
      name: 'Lazer',
      data: [calculateAllLazerBills(), 0, 0, 0, 0, LazerValue]
    }, {
      name: 'Veículo',
      data: [calculateAllCarBills(), 0, 0, 0, 0, 0, CarValue]
    }]
  });
}