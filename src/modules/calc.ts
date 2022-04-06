/**
 * Calculator Brain:
 * 
 * Input: ---> [UserInput, UserInput, UserInput, ...]
 * Generate: ---> { state }
 */

export enum InputType{
    Numerical,
    Operation
}

export enum OperationType {
    Add,
    Subtract,
    Equals
}

export type CalcState = {
    displayValue: number;
}

export type CalcInput = {type: InputType.Numerical, value: number} | {type: InputType.Operation, operation: OperationType}


const getState = (inputs: Array<CalcInput>) : CalcState => {
    return {displayValue: 0};
}


const Calc = {
    getState
}

export default Calc;