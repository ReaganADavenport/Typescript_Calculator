export enum InputType{
    Numerical,
    Operator
}

export enum OperatorType {
    Add = 'add',
    Subtract = 'subtract',
    // add Multiply and Divide later
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


const getOperationsBuilder = (inputs: Array<CalcInput>): OperationsBuilder => {
    return inputs.reduce<OperationsBuilder>(
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
}

const getTotal = (operations:Array<Operation>) : number =>
    operations.reduce<number>((sum, operation) => {
        switch(operation.operator){
            case OperatorType.Add:
                return sum + operation.value;
                
            case OperatorType.Subtract:
                return sum - operation.value;
            // Ditto here too.
            case OperatorType.Equals:
                return sum;
        }
    }, 0);

    
const getState = (inputs: Array<CalcInput>) : CalcState => {
    const builder = getOperationsBuilder(inputs);
    const { operations } = builder;
    const lastOperation = operations.length ? operations[operations.length -1] : null;
    
    if(!lastOperation) return{displayValue: builder.working.value}

    switch(lastOperation.operator){
        case OperatorType.Equals:
            return { displayValue: getTotal(operations) };
        
        default:
            return{displayValue: builder.working.value};
    }
        
}  


const Calc = {
    getOperationsBuilder,
    getState
}

export default Calc;