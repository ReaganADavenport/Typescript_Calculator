import Calc, { InputType, OperatorType, CalcInput, Operation, CalcState } from "./calc";


test('generates operations', () =>{
    const inputs: Array<CalcInput> = [
        {type: InputType.Numerical, value: 1},
        {type: InputType.Numerical, value: 2},
        {type: InputType.Operator, operator: OperatorType.Add },
        {type: InputType.Numerical, value: 3},
        {type: InputType.Operator, operator: OperatorType.Equals }
    ]

    
    expect(Calc.getOperationsBuilder(inputs).operations).toEqual(operations);
});


const operations: Array<Operation> = [
    {operator: OperatorType.Add, value: 12},
    {operator: OperatorType.Add, value: 3},
    {operator: OperatorType.Equals, value: 0}
]


test('derives displayValue with no inputs', () =>{
    const inputs: Array<CalcInput> = [ ]

    const state = Calc.getState(inputs);
    expect(state.displayValue).toEqual(0);
});


test('derives displayValue upon first numerical input', () =>{
    const inputs: Array<CalcInput> = [
        {type: InputType.Numerical, value: 1}
    ]

    const state = Calc.getState(inputs);
    expect(state.displayValue).toEqual(1);
});

test('derives displayValue upon new operator input', () =>{
    const inputs: Array<CalcInput> = [
        {type: InputType.Numerical, value: 1},
        {type: InputType.Numerical, value: 2},
        {type: InputType.Operator, operator: OperatorType.Add },
    ]

    const state = Calc.getState(inputs);
    expect(state.displayValue).toEqual(12);
});


test('derives displayValue upon new numerical input', () =>{
    const inputs: Array<CalcInput> = [
        {type: InputType.Numerical, value: 1},
        {type: InputType.Numerical, value: 2},
        {type: InputType.Operator, operator: OperatorType.Add },
        {type: InputType.Numerical, value: 3},
    ]

    const state = Calc.getState(inputs);
    expect(state.displayValue).toEqual(3);
});


test('derives final state with addition', () =>{
    const inputs: Array<CalcInput> = [
        {type: InputType.Numerical, value: 1},
        {type: InputType.Numerical, value: 2},
        {type: InputType.Operator, operator: OperatorType.Add },
        {type: InputType.Numerical, value: 3},
        {type: InputType.Operator, operator: OperatorType.Equals }
    ]

    const state = Calc.getState(inputs);
    expect(state.displayValue).toEqual(15);
});


test('derives final state with addition and subtraction', () =>{
    const inputs: Array<CalcInput> = [
        {type: InputType.Numerical, value: 1},
        {type: InputType.Numerical, value: 2},
        {type: InputType.Operator, operator: OperatorType.Add },
        {type: InputType.Numerical, value: 3},
        {type: InputType.Operator, operator: OperatorType.Subtract },
        {type: InputType.Numerical, value: 5},
        {type: InputType.Operator, operator: OperatorType.Equals }
    ]

    const state = Calc.getState(inputs);
    expect(state.displayValue).toEqual(10);
});

test('derives final state with multiplication', () =>{
    const inputs: Array<CalcInput> = [
        {type: InputType.Numerical, value: 8},
        {type: InputType.Operator, operator: OperatorType.Multiply },
        {type: InputType.Numerical, value: 3},
        {type: InputType.Operator, operator: OperatorType.Equals }
    ]

    const state = Calc.getState(inputs);
    expect(state.displayValue).toEqual(24);
});

test('derives final state with division', () =>{
    const inputs: Array<CalcInput> = [
        {type: InputType.Numerical, value: 12},
        {type: InputType.Operator, operator: OperatorType.Divide },
        {type: InputType.Numerical, value: 3},
        {type: InputType.Operator, operator: OperatorType.Equals }
    ]

    const state = Calc.getState(inputs);
    expect(state.displayValue).toEqual(4);
});
