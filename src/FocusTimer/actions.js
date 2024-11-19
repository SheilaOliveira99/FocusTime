import state from './state.js'
import * as timer from './timer.js'
import * as el from  './elements.js'
import * as  sounds from './sounds.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.
    toggle('running')//adiciona ou remove a classa running do html

    timer.countdown()
    sounds.buttonPressAudio.play()
}

export function reset() { //ele remove a classe running
  state.isRunning = false //Para o temporizador, ele se torna falso
  document.documentElement.classList.remove('running') // remove a classe running
  timer.updateDisplay(state.minutes, state.seconds)// Restaura o display com os valores originais
}
export function set() {
 el.minutes.setAttribute('contenteditable', true)
 el.minutes.focus()
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.
  toggle('music-on')//para ligar e desligar a música

  if(state.isMute) {
    sounds.bgAudio.play()
    return

  }
}

