const wallet = []
let lvl = 0
const inventory = []
const skills = []

alert('привет путник, у тебя нет права отказаться!')
wallAndlvl()
alert('ладно вступительные титры ты прошел, давай теперь перейдем к первому заднию открой консоль разработчика')
whatUsee()
ownOrtwo()

function ownOrtwo() {
const choise2 = Number(prompt('теперь приступим к первуму заданию куда отправимся на пустошь или в пищеру', 'выбери 1 или 2'))
if (choise2 === 1) {
  const damm = confirm('вы встречаете монстра большой паук, атаковать или бежать?')
if (damm == true & inventory == 'Black Sword') {
  alert('вы убили паука мечем, победа!')
} else {
  alert('вы погибли против пауков лучше использовать меч')
}
}
}
// функция меч или яд
function whatUsee() {
if (sumWallet() === 100) {
  alert('отлично теперь ты видишь свои характеристики. Давай купим оружие! На твои деньги можно купить меч')
    console.log(`Ваш мешок златых: баланс ${sumWallet() - 100}`)
  inventory.push('Black Sword')
  console.log(inventory)
} else if (lvl === 20) {
  alert('вы получили очки опыта и достигли 1 уровня у вас есть 1 жетион НРС предлагаю вкачать способность отравление')
  skills.push('bane')
}
}
// функция развилка выбора 
function wallAndlvl() {
  const choice = Number(prompt('но есть и хорошие новости, ты можешь получить или + 20 к опыту или +100 к золоту', `20 или 100`))
  if (choice === 20) {
    lvl = 20
    alert('повышение до 1 уровня, повышение прошло успешно!')
  } else if (choice === 100) {
    wallet.push(100)
    alert('пополнение золотого мешка до 100 золотых прошло успешно!')
    console.log(`Ваш мешок златых: баланс ${sumWallet()}`)
  } else {
    alert('нет такого варианта!')
    errorRecvest()
  }
}
// если пользователь ввел не правильные данные в функции wallAndlvl() то это зарисетит функцию
function errorRecvest() {
  const reset = confirm('повторить вопрос?')
  if (reset == true) {
    wallAndlvl()
  } else {
    alert('пойдем дальше')
  }
}
// функция подсчета массива wallet 
function sumWallet() {
  let sum = 0
  wallet.forEach(function(wall) {
  sum = sum + wall
  })
  return sum
}