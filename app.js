let item00 = document.getElementById('item00')
let item01 = document.getElementById('item01')
let price00 = document.getElementById('price00')
let consoleText = document.getElementById('console')
let btn00 = document.getElementById('buyItem00')
let btn01 = document.getElementById('buyItem01')
let btn02 = document.getElementById('buyItem02')
let itemsList = document.getElementById('myItems')





let player = {
  souls: 300,
  resin: 200
}

let sword00 = {
  name: 'Палаш',
  souls: 350,
  resin: 400
}
let sword01 = {
  name: 'Меч черного рыцаря',
  souls: 650,
  resin: 640 
}
let sword02 = {
  name: 'Темная рука',
  souls: 950,
  resin: 1020 
}

price00.innerHTML = `${sword00.souls} душ  ${sword00.resin} смол`
price01.innerHTML = `${sword01.souls} душ  ${sword01.resin} смол`
price02.innerHTML = `${sword02.souls} душ  ${sword02.resin} смол `

function addSouls(){
  player.souls += 100
  item00.innerHTML = `Души: ${player.souls}`
}

function addResin(){
  player.resin += 100
  item01.innerHTML = `Смола: ${player.resin}`
}
function deleteConsole(){
  consoleText.style.visibility = 'hidden'
}

item00.innerHTML = `Души: ${player.souls}`
item01.innerHTML = `Смола: ${player.resin}`

function buyItem00(){
  consoleText.style.visibility = 'visible'
  setTimeout(deleteConsole, 2000);
  if(player.souls >= sword00.souls && player.resin >= sword00.resin){
    
    consoleText.innerHTML = 'Предмет куплен'
    price00.innerHTML = `${sword00.name} куплен`
    player.souls -= sword00.souls
    item00.innerHTML = `Души: ${player.souls}`
    player.resin -= sword00.resin
    item01.innerHTML = `Смола: ${player.resin}`
    btn00.innerHTML = 'Куплено'
    btn00.setAttribute('disabled', true);
    itemsList.innerHTML += ` ${sword00.name}`
}



  
else if(player.resin < sword00.resin && player.souls < sword00.souls)
consoleText.innerHTML = 'Недостаточно душ и смол'
else if(player.souls < sword00.souls)
consoleText.innerHTML = 'Недостаточно душ'
else if(player.resin < sword00.resin)
consoleText.innerHTML = 'Недостаточно смол'

}
function buyItem01(){
  consoleText.style.visibility = 'visible'
  setTimeout(deleteConsole, 2000);
  if(player.souls >= sword01.souls && player.resin >= sword01.resin){
    
    consoleText.innerHTML = 'Предмет куплен'
    price01.innerHTML = `${sword01.name} куплен`
    player.souls -= sword01.souls
    item00.innerHTML = `Души: ${player.souls}`
    player.resin -= sword01.resin
    item01.innerHTML = `Смола: ${player.resin}`
    btn01.innerHTML = 'Куплено'
    btn01.setAttribute('disabled', true);
    itemsList.innerHTML += ` ${sword01.name}`
}



  
  else if(player.resin < sword01.resin && player.souls < sword01.souls)
  consoleText.innerHTML = 'Недостаточно душ и смол'
  else if(player.souls < sword01.souls)
  consoleText.innerHTML = 'Недостаточно душ'
  else if(player.resin < sword01.resin)
  consoleText.innerHTML = 'Недостаточно смол'
  
}
function buyItem02(){
  consoleText.style.visibility = 'visible'
  setTimeout(deleteConsole, 2000);
  if(player.souls >= sword02.souls && player.resin >= sword02.resin){
    
    consoleText.innerHTML = 'Предмет куплен'
    price02.innerHTML = `${sword02.name} куплена`
    player.souls -= sword02.souls
    item00.innerHTML = `Души: ${player.souls}`
    player.resin -= sword02.resin
    item01.innerHTML = `Смола: ${player.resin}`
    btn02.innerHTML = 'Куплено'
    btn02.setAttribute('disabled', true);
    itemsList.innerHTML +=` ${sword02.name}`
}



  
else if(player.resin < sword02.resin && player.souls < sword02.souls)
consoleText.innerHTML = 'Недостаточно душ и смол'
else if(player.souls < sword02.souls)
consoleText.innerHTML = 'Недостаточно душ'
else if(player.resin < sword02.resin)
consoleText.innerHTML = 'Недостаточно смол'

}