import { useEffect, useState } from "react";
import './App.css'

export const Calcul = () => {
  
    const [calculation, setCalculation] = useState('')
    const [output, setOutput]=useState(0)
    const actions = ['/', '*', '+', '-', '.']
    
    /* Fonction commençant par controler l'entrée (s'il s'agit d'un chiffre ou d'un calcul) */
    const calcul = value => {
        if(
        actions.includes(value) & calculation === '' ||
        actions.includes(value) & actions.includes(calculation.slice(-1)))
        {
        return
    }

    /* Mise à jour de calculation avec la nouvelle entrée */
    setCalculation(calculation+value)

    if (!actions.includes(value)){
        setOutput(eval(calculation+value).toString())
    }
    }

    /* Calcul */
    const calculate=()=>{
        setCalculation(eval(calculation).toString())
    }

    /* Fonction qui permet le retour en arrière */
    const back = () => {
        if(calculation === ''){
            return
        }
        let value=calculation.slice(0,-1)
        setCalculation(value)
    }

    /* Permet de reset la calculatrice */
    const clear = () => {
        setCalculation('')
        setOutput(0)
    }


    /* Renvoi la mise en page. Sera bientôt refaite à 0 afin de la rendre moins redondante 
    avec l'aide de la méthode map() */
    return(
        <div style = {{height:"100vh"}} className='app'>
        <div className='wrapper'>
          <section className='result'>
            {calculation||'0'}
            {<span className="preRes">{output||'0'}</span>}
          </section>
  
          <section className='calc-buttons'>
            <div className='calc-button-row'>
              <button className='calc-button double' onClick={clear}>
                C
              </button>
              <button className='calc-button' onClick={back}>
                &larr;
              </button>
              <button className='calc-button' onClick={()=>{calcul('/')}}>
                &divide;
              </button>
            </div>
  
            <div className='calc-button-row'>
              <button className="calc-button" onClick={()=>{calcul('7')}}>
                7
              </button>
              <button className="calc-button" onClick={()=>{calcul('8')}}>
                8
              </button>
              <button className="calc-button" onClick={()=>{calcul('9')}}>
                9
              </button>
              <button className="calc-button" onClick={()=>{calcul('*')}}>
                &times;
              </button>
            </div>
            
            <div className='calc-button-row'>
              <button className="calc-button" onClick={()=>{calcul('4')}}>
                4
              </button>
              <button className="calc-button" onClick={()=>{calcul('5')}}>
                5
              </button>
              <button className="calc-button" onClick={()=>{calcul('6')}}>
                6
              </button>
              <button className="calc-button" onClick={()=>{calcul('-')}}>
                -
              </button>
            </div>
  
            <div className='calc-button-row'>
              <button className="calc-button" onClick={()=>{calcul('1')}}>
                1
              </button>
              <button className="calc-button" onClick={()=>{calcul('2')}}>
                2
              </button>
              <button className="calc-button" onClick={()=>{calcul('3')}}>
                3
              </button>
              <button className="calc-button" onClick={()=>{calcul('+')}}>
                +
              </button>
            </div>
  
            <div className='calc-button-row'>
              <button className="calc-button triple" onClick={()=>{calcul('0')}}>
                0
              </button>
              <button className="calc-button" onClick={calculate}>
                &#61;
              </button>
            </div>
  
          </section>
  
        </div>
  
      </div>
    );
}
