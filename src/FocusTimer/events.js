import {controls} from "./elements.js";
import * as actions from  './action.js';

export function registerControls() {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof action[action] != "function") {//SE O TIPO DELE NÃO FOR UMA FUNÇÃO PODE ENCERRAR
      return 
    }

    actions[action]()//SE FOR UMA FUNÇÃO PODE EXECUTA-LA
   
  })

}