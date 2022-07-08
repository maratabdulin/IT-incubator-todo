import {ActionType, div, mult, numberReducer, sub, sum} from "./redusers";

test('testing summing', ()=>{
    const a = 1000;
    const b = 200;
    expect(sum(a, b)).toBe(1200)
})

test('testing subtract', ()=>{
    const a = 1000;
    const b = 200;
    expect(sub(a, b)).toBe(800)
})

test('testing divide', ()=>{
    const a = 1000;
    const b = 5;
    expect(div(a, b)).toBe(200)
})

test('testing multiple', ()=>{
    const a = 300;
    const b = 2;
    expect(mult(a, b)).toBe(600)
})

test('testing number reducer SUM', ()=> {
    const a = 1000;
    const b = 200;
    const sumAction: ActionType = {
        type: "SUM",
        num: b
    }
    expect(numberReducer(a, sumAction)).toBe(1200)
})

test('testing number reducer SUB', ()=> {
    const a = 1000;
    const b = 200;
    const sumAction: ActionType = {
        type: "SUB",
        num: b
    }
    expect(numberReducer(a, sumAction)).toBe(800)
})

test('testing number reducer DIV', ()=> {
    const a = 1000;
    const b = 200;
    const sumAction: ActionType = {
        type: "DIV",
        num: b
    }
    expect(numberReducer(a, sumAction)).toBe(5)
})

test('testing number reducer MULT', ()=> {
    const a = 1000;
    const b = 5;
    const sumAction: ActionType = {
        type: "MULT",
        num: b
    }
    expect(numberReducer(a, sumAction)).toBe(5000)
})
