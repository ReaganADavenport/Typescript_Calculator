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
    Add = 'add',
    Subtract = 'subtract',
    Equals = 'equals',
}

export type CalcState = {
    displayValue: number;
}

export type CalcInput = 
| {type: InputType.Numerical, value: number} 
| {type: InputType.Operator, operator: OperatorType }


export type Operation = {
    operator: OperatorType;
    value: number;
}

type OperationsBuilder = {
    operations: Operation[],
    working: Operation;
}


const getOperations = (inputs: Array<CalcInput>): Array<Operation> => {
    const builder: OperationsBuilder = inputs.reduce<OperationsBuilder>(
        (builder, input) => {
    
        switch(input.type){
            case InputType.Numerical:
                const preValue = builder.working?.value || 0;
                const newValue = preValue * 10 + input.value;
                return {...builder, working: {...builder.working, value: newValue} };
            
            case InputType.Operator:
                if(input.operator === OperatorType.Equals) {
                    return { 
                        operations: [
                            ...builder.operations, 
                            builder.working, 
                            { operator: OperatorType.Equals, value: 0 }
                        ], 
                        working: { operator: OperatorType.Add, value: 0 }
                    }
                } else{
                    return { 
                        operations: [...builder.operations, builder.working], 
                        working: {operator: input.operator, value: 0}
                    }
                
            };
        }       
    },

    {
        operations: [],
        working: { operator: OperatorType.Add, value: 0 },
    }
    );

    return builder.operations;
}

const getState = (inputs: Array<CalcInput>) : CalcState => {
    const operations = getOperations(inputs);
    const lastOperation = operations.length ? operations[operations.length -1] : null;
    if(!lastOperation) return{displayValue: 0};

    switch()

    const total = operations.reduce<number>((sum, operation) => sum + operation.value, 0);
    
    return {displayValue: total};
}


const Calc = {
    getOperations,
    getState
}

export default Calc;