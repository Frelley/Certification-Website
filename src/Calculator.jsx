import "./styles.css"
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";

import { useReducer } from "react";

export const ACTIONS ={
    ADD_DIGIT: "add-digit",
    CLEAR: "clear",
    CHOOSE_OPERATION:"choose",
    DELETE_DIGIT:"delete",
    EVALUATE: "evaluate",

}



function Calculator() {
    const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer( reducer, {currentOperand:"0",previousOperand:null,operation: null});

    //dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit:1}})

    return (
        <div className="calculator-grid">
            <div className="output">
                <div className="previous-operand">{previousOperand} {operation}
                </div>
                    <div className="current-operand">{currentOperand}
                    </div>
                    
                
                </div>
                <button className="span-two">AC</button>
                <button>DEL</button>
                <button>/</button>
                
               
               
                
                <DigitButton dispatch={dispatch} digit={1}>1</DigitButton>
                <DigitButton dispatch={dispatch} digit={2}>2</DigitButton>
                <DigitButton dispatch={dispatch} digit={3}>3</DigitButton>
                <OperationButton dispatch={dispatch} operation={"+"}>+</OperationButton>
                
                <DigitButton dispatch={dispatch} digit={4}>4</DigitButton>
                <DigitButton dispatch={dispatch} digit={5}>5</DigitButton>
                <DigitButton dispatch={dispatch} digit={6}>6</DigitButton>
                <button>*</button>
                
                <DigitButton dispatch={dispatch} digit={7}>7</DigitButton>
                <DigitButton dispatch={dispatch} digit={8}>8</DigitButton>
                <DigitButton dispatch={dispatch} digit={9}>9</DigitButton>
                <button>-</button>
                <DigitButton dispatch={dispatch} digit={0}>0</DigitButton>
                <DigitButton dispatch={dispatch} digit={`.`}>.</DigitButton>
                <button className="span-two">=</button>

            
        </div>
    )
}

function reducer({state,currentOperand,previousOperand,operation},{type , payload}) {
    switch(type) {
        case ACTIONS.ADD_DIGIT:
            
            return( {...state, currentOperand: `${currentOperand || ``}${payload.digit}`})
    }
    }


export default Calculator;
