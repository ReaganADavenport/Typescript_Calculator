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

export type CalcInput = 
| {type: InputType.Numerical, value: number} 
| {type: InputType.Operator, operation: OperatorType }





/**
 * 
 * in: [1, 2, +, 3, =]
 * out: [{+ 12}, {+ 3}, {=}]
*/


export type Operation = {
    operator: OperatorType;
    value: number;
}

type OperationsBuilder = {
    operations: Operation[],
    working: Operation;
}


const getOperations = (inputs: Array<CalcInput>): Array<Operation> {
    const initialValue: OperationsBuilder = {
        operations: [],
        working: { operator: OperatorType.Add, value: 0},
    }
    const builder: OperationsBuilder = inputs.reduce((builder, input) => {
    
        switch(input.type){
            case InputType.Numerical:
                const preValue = builder.working?.value || 0;
                const newValue = preValue * 10 + input.value;
                return {...builder, working: {value: newValue} };
            
            case InputType.Operator:
                return{ operations: [...builder.operations, builder.working], 
                working: {operator: input.operator, value: 0}
            };
        }       

    }, initialValue);

    return builder.operations;
}

const getState = (inputs: Array<CalcInput>) : CalcState => {
    const result = inputs.reduce();

    return {displayValue: 0};
}


const Calc = {
    getState
}

export default Calc;