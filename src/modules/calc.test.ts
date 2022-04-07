import Calc, { InputType, OperatorType, CalcInput, Operation, CalcState } from "./calc";


test('generates operations', () =>{
    const inputs: Array<CalcInput> = [
        {type: InputType.Numerical, value: 1},
        {type: InputType.Numerical, value: 2},
        {type: InputType.Operator, operator: OperatorType.Add },
        {type: InputType.Numerical, value: 3},
        {type: InputType.Operator, operator: OperatorType.Equals }
    ]

    
    expect(Calc.getOperations(inputs)).toEqual(operations);
});


const operations: Array<Operation> = [
    {operator: OperatorType.Add, value: 12},
    {operator: OperatorType.Add, value: 3},
    {operator: OperatorType.Equals, value: 0}
]


test('derive state', () =>{
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