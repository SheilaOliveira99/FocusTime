import state from './state.js'

export function toggleRunning(){
  state.isRunning = 
  document.documentElement.classList.toggle
  ('running')//adiciona ou remove a classa running do html
}

export function reset() { //ele remove a classe running
  state.isRunning = false //ele se torna falso
  document.documentElement.classList.remove('running') // remove a classe running
  //quando estiver no "play" ele e der um "stop" ele dará um reset inteiro da aplicação
}

export function set() {
 
}

export toggleMusic() {
  state.isMute = document.documentElement.classList.toggle
  ('music-on')//para ligar e desligar a música
}

