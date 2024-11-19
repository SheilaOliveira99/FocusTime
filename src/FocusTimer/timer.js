import state from './state.js'
import * as el from './elements.js'

export function countdown () {
  console.log('iniciou')
 }

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds
  /* o "??" nulish coalesing operator = observa o minutes, se for null
  ele irá pegar o minutes preenchidos no "State.js" colocará no lugar*/

  el.minutes.textContent = String(minutes).
  padStart(2, "0")
  
  el.seconds.textContent = String(seconds)
  padStart(2, "0")
  //"PadStart" = preencha o começo
  //No exemplo acima, quero ver 2 caracteres, e quando houver só um, 
  //preencher com 0 no começo.
  

}