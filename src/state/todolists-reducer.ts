import {FilterValuesType, TodoListType} from "../App";
import {v1} from "uuid";

export const todolistsReducer = (state: Array<TodoListType>, action: tzarActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state.filter(el => el.id !== action.payload.todolistId)
        case "ADD-TODOLIST":
            let newTodoListId = v1();
            let newTodoList: TodoListType = {id: newTodoListId, title: action.payload.newTitle, filter: 'all'};
            return [...state, newTodoList];
        case "CHANGE-TODOLIST-TITLE":
            return state.map(el => el.id === action.payload.todolistID ? {...el, title: action.payload.newTitle} : el)
        case "CHANGE-TODOLIST-FILTER":
            return state.map(el => el.id === action.payload.todolistId ? {...el, filter: action.payload.todolistFilter} : el)
        default:
            throw new Error('I dont understand this type!')
    }
}

type tzarActionType = removeTodolistACType | addTodolistACType | changeTodolistACType | changeTodolistFilterACType

export const removeTodolistAC = (todolistId: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {todolistId}
    } as const
}
export type removeTodolistACType = ReturnType<typeof removeTodolistAC>

export const addTodolistAC = (newTitle: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {newTitle}
    } as const
}
export type addTodolistACType = ReturnType<typeof addTodolistAC>

export const changeTodolistTitleAC = (todolistID: string, newTitle: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {
            todolistID,
            newTitle
        }
    } as const
}
export type changeTodolistACType = ReturnType<typeof changeTodolistTitleAC>

export const changeTodolistFilterAC = (todolistId: string, todolistFilter: FilterValuesType) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {
            todolistId,
            todolistFilter
        }
    } as const
}
export type changeTodolistFilterACType = ReturnType<typeof changeTodolistFilterAC>
