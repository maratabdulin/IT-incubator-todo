export const sum = (a: number, b: number) =>  a + b;
export const sub = (a: number, b: number) => a - b;
export const div = (a: number, b: number) => a / b;
export const mult = (a: number, b: number) => a * b;

export type ActionType = {
    type: 'SUM' | 'SUB' | 'DIV' | 'MULT'
    num: number
}

export type StateType = number

export const numberReducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case "SUM":
            return state + action.num;
        case "SUB":
            return state - action.num;
        case "DIV":
            return state / action.num;
        case "MULT":
            return state * action.num;
        default:
            return state
    }
}
