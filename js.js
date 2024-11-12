const wallet = []
let lvl = 0
let lvlPoint = 0
let Expiriens = 20
const inventory = []
const skills = []





alert('привет путник, у тебя нет права отказаться!')
wallAndlvl()
gainExpi1()
alert('ладно вступительные титры ты прошел, давай теперь перейдем к первому заднию открой консоль разработчика')
whatUsee()
ownOrtwo()

function ownOrtwo() {
  const choise2 = Number(prompt('теперь приступим к первуму заданию куда отправимся на пустошь или в пищеру', 'выбери 1 или 2'))
  if (choise2 === 1) {
    const damm = confirm('вы встречаете монстра большой паук, атаковать или бежать?')
    // if (damm == true & inventory == 'Black Sword') 
    if (damm == true && inventory.includes('Black Sword')) {
      alert('вы убили паука мечем, победа!')
    } else if (damm == false) {
      alert('вы ушли и возможно сохранили себе жизнь.')
    } else {
      alert('вы погибли против пауков лучше использовать меч')
    }
  } else if (choise2 === 2) {
    const damm2 = confirm('вы встречаете стального слизня, атаковать или бежать?')
    if (damm2 == true && skills.includes('Bane')) {
      alert('яд проник внутрь и разбил днк слизня, вы победили!')
    } else if (damm2 == false) {
      alert('вы ушли и возможно сохранили себе жизнь.')
    } else {
      alert('против слизней хорошо работают яды, но а мечи бесполезны, вы убиты')
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
    skills.push('Bane')
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
  wallet.forEach(function (wall) {
    sum = sum + wall
  })
  return sum
}

// функция проверки условия для повышения лвл
function gainExpi1() {
  // lvl += expiriens
  if (lvl >= Expiriens) {
    lvlUp2() 
  } else {
    console.log('xnj nj yt nfr')
  }
}
// функция поднятия лвл 
function lvlUp2() {
  lvlPoint++
  Expiriens -= lvl
  Expiriens *= 2
  console.log(`ваш новый уровень : ${lvlPoint}`)
}
