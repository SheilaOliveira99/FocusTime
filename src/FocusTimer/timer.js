import state from './state.js'
import * as el from './elements.js'
import * as reset from './actions.js'
import { kitchenTimer } from './sounds.js';

export function countdown() {
  clearTimeout(state.countdownId)


  if(!state.isRunning) {
      return; //Senão estiver rodando, a contagem é parada.
  }

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds-- //tirou um segundo

  if(seconds < 0) {
    seconds = 59
    minutes--
    
}

if (minutes < 0) {
    reset(); //Se o tempo acabar, chama o reset.
    kitchenTimer.play()
    return;
}
 
  updateDisplay(minutes, seconds);// Atualiza a interface com o novo tempo
 
  //"setTimeout"Executa uma função, depois de deeterminado tempo (milisegundos)
  //Uma recurssão = quando uma função chama ela mesma, só que ela precisa ser PARADA em algum momento 
  //função chama ela de volta callbackfunction.
  state.countdownId = setTimeout(() => countdown(), 1000)  
  //vai fazer com que rode a função, até clicar no botão pause.
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds
  /* o "??" nulish coalesing operator = observa o minutes, se for null
  ele irá pegar o minutes preenchidos no "State.js" colocará no lugar*/

  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
  //"PadStart" = preencha o começo
  //No exemplo acima, quero ver 2 caracteres, e quando houver só um, 
  //preencher com 0 no começo.
  

}