import Calc, { InputType, OperationType, CalcInput, CalcState } from "./calc";


test('derive state', () =>{
    const inputs: Array<CalcInput> = [
        {type: InputType.Numerical, value: 1},
        {type: InputType.Numerical, value: 2},
        {type: InputType.Operation, operation: OperationType.Add },
        {type: InputType.Numerical, value: 3},
        {type: InputType.Operation, operation: OperationType.Equals }
    ]

    const state = Calc.getState(inputs);
    expect(state.displayValue).toEqual(15);
});