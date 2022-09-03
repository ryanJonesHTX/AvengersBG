document.querySelector('#ironman').addEventListener('click', ironman)
document.querySelector('#captain').addEventListener('click', captain)
document.querySelector('#thor').addEventListener('click', thor)
document.querySelector('#hulk').addEventListener('click', hulk)
document.querySelector('#blackwidow').addEventListener('click', blackWidow)
document.querySelector('#blackpanther').addEventListener('click', blackPanther)
document.querySelector('#scarlet').addEventListener('click', scarletWitch)
document.querySelector('#falcon').addEventListener('click', falcon)
document.querySelector('#strange').addEventListener('click', strange)
document.querySelector('#capmarvel').addEventListener('click', capMarvel)
document.querySelector('#hawkeye').addEventListener('click', hawkeye)
document.querySelector('#spidey').addEventListener('click', spidey)
document.querySelector('#assemble').addEventListener('click', assemble)

function changeBG(bgimg, strg){
  document.querySelector('body').style.backgroundImage = `url(${bgimg})`
  document.querySelector('h2').style.display = `${strg}`
}
// class MakeChar{
//   constructor(bgimg, strg){
//     this.bgimg = bgimg
//     this.strg = strg
//   }
//   changeBG(bgimg, strg){
    
//}
// }
// let ironmanOb = new MakeChar('assets/bg/ironman.jpeg', 'none')

function ironman() {
  changeBG('assets/bg/ironman.jpeg', 'none')
}
function captain() {
  changeBG('assets/bg/captain.png', 'none')
}
function thor(){
  changeBG('assets/bg/thor.jpeg', 'inline-block')
}
function hulk(){
  changeBG('assets/bg/hulk.jpeg', 'none')
}
function blackWidow(){
  changeBG('assets/bg/blackWidow.jpeg', 'none')
}
function blackPanther(){
  changeBG('assets/bg/blackpanther.jpeg', 'none')
}
function scarletWitch(){
  changeBG('assets/bg/scarlet.jpeg', 'none')
}
function falcon(){
  changeBG('assets/bg/falcon.png', 'none')
}
function strange(){
  changeBG('assets/bg/strange.png', 'none')
}
function capMarvel(){
  changeBG('assets/bg/capmarvel.jpeg', 'none')
}
function hawkeye(){
  changeBG('assets/bg/hawkeye.png', 'none')
}
function spidey(){
  changeBG('assets/bg/spider.jpeg', 'none')
}
function assemble(){
  changeBG('assets/bg/assembled.jpg', 'none')
}
