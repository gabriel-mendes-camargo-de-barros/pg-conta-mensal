///*/*/*/*/*/* troca de pagina

// troca o display do elemento citado no querySelector
function openHealthBillsPage() {
  document.querySelector("#lazer").style.display = "none";
  document.querySelector("#home").style.display = "none";
  document.querySelector("#grafic").style.display = "none";
  document.querySelector("#health").style.display = "flex";
}

function openHomeBillsPage() {
  document.querySelector("#lazer").style.display = "none";
  document.querySelector("#health").style.display = "none";
  document.querySelector("#grafic").style.display = "none";
  document.querySelector("#home").style.display = "flex";
}

function openLazerBillsPage() {
  document.querySelector("#home").style.display = "none";
  document.querySelector("#health").style.display = "none";
  document.querySelector("#grafic").style.display = "none";
  document.querySelector("#lazer").style.display = "flex";
}

function bildGrafic() {
  document.querySelector("#home").style.display = "none";
  document.querySelector("#health").style.display = "none";
  document.querySelector("#lazer").style.display = "none";
  document.querySelector("#grafic").style.display = "flex";

  calculateAllBills()
}

///*/*/*/*/*/*/* cria nova conta na pagina


// inicializa variaveis contadoras (serve pra contar a cada vez que executa o comando)
let billHomeNumber = 0
let billHealthNumber = 0

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

///*/*/*/*/*/*/* calcula valor total das contas da pagina


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
  let homeValue = 0;
function calculateAllHomeBills() {
  homeValue = 0
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

let healthValue = 0;
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
      data: [3, 0, 3]
    }, {
      name: 'Educação',
      data: [2, 0, 0, 2]
    }, {
      name: 'Saúde',
      data: [calculateAllHealthBills(), 0, 0, 0, healthValue]
    }, {
      name: 'Lazer',
      data: [3, 0, 0, 0, 0, 3]
    }, {
      name: 'Veículo',
      data: [2, 0, 0, 0, 0, 0, 2]
    }]
  });
}