/**
 * Calculator Brain:
 * 
 * Input: ---> [UserInput, UserInput, UserInput, ...]
 * Generate: ---> { state }
 */

export enum InputType{
    Numerical,
    Operator
}

export enum OperatorType {
    Add,
    Subtract,
    Equals
}

export type CalcState = {
    displayValue: number;
}

export type CalcInput = {type: InputType.Numerical, value: number} | {type: InputType.Operation, operation: OperationType}

export type Operation = {
    operator: OperatorType;
    value: number;
}



/**
 * 
 * in: [1, 2, +, 3, =]
 * out: [{+ 12}, {+ 3}, {=}]
 */


 const getOperations = (inputs: Array<CalcInput>): Array<Operation> {
    inputs.reduce<Array<CalcInput>>((operations, input) => {
        const lastOperation: Operation = operations.length 
        ? operations[operations.length - 1] 
        : {operator: OperatorType.Add ,value: 0};


       switch(input.type){
           case: InputType.Numerical:
            lastOperation

           case: InputType.Operator:
       } 


    return [{ operator: OperatorType.Add, value: 0}];
    }, [] as Array<Operation>)

    
}

const getState = (inputs: Array<CalcInput>) : CalcState => {
    const result = inputs.reduce();

    return {displayValue: 0};
}


const Calc = {
    getState
}

export default Calc;