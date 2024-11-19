import { controls } from './elements.js';
import * as actions from './actions.js'
import * as el from './elements.js'
import { updateDisplay } from './timer.js';
import state from './state.js'


export function registerControls() {
  controls.addEventListener('click', (event) => {
      const action = event.target.dataset.action
      if(typeof actions[action] != "function") {//SE O TIPO DELE NÃO FOR UMA FUNÇÃO PODE ENCERRAR
      return 
    }

    actions[action]()//SE FOR UMA FUNÇÃO PODE EXECUTA-LA
   
  })

}

export function setMinutes() {
  el.minutes.addEventListener('focus', () => {
     el.minutes.textContent = ""
  })
 
  el.minutes.onkeypress = (event) => /\d/.test(event.key) //dentro do contrabarra, se for letra, ele retorna false, é uma expressão regular

  el.minutes.addEventListener('blur',(event) => {
    let time = event.currentTarget.textContent 
    time = time > 60 ? 60 : time //time, é maior que 60? Sim. ou ":" Não, então deixa o time.

    state.minutes = time
    state.seconds = 0

    updateDisplay() 
    el.minutes.removeAttribute('contenteditable')
  
  })
}