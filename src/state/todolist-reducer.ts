import {FilterValuesType, TodoListType} from "../App";
import {v1} from "uuid";

type ActionsType = RemoveTodolistType | AddTodolistType | ChangeTodolistType | ChangeTodolistFilterType
export type RemoveTodolistType = ReturnType<typeof removeTodolistAC>
export type AddTodolistType = ReturnType<typeof addTodolistAC>
export type ChangeTodolistType = ReturnType<typeof changeTodolistTitleAC>
export type ChangeTodolistFilterType = ReturnType<typeof changeTodolistFilterAC>


export const todolistReducer = (state: Array<TodoListType>, action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state.filter(el => el.id !== action.payload.todolistId)
        case "ADD-TODOLIST":
            let newTodoList: TodoListType = {id: action.payload.newTodolistId, title: action.payload.newTitle, filter: 'all'};
            return [...state, newTodoList];
        case "CHANGE-TODOLIST-TITLE":
            return state.map(el => el.id === action.payload.todolistID ? {...el, title: action.payload.newTitle} : el)
        case "CHANGE-TODOLIST-FILTER":
            return state.map(el => el.id === action.payload.todolistId ? {...el, filter: action.payload.todolistFilter} : el)
        default:
            throw new Error('I dont understand this type!')
    }
}

export const removeTodolistAC = (todolistId: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {todolistId}
    } as const
}

export const addTodolistAC = (newTitle: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {
            newTitle,
            newTodolistId: v1()
        }
    } as const
}

export const changeTodolistTitleAC = (todolistID: string, newTitle: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {
            todolistID,
            newTitle
        }
    } as const
}

export const changeTodolistFilterAC = (todolistId: string, todolistFilter: FilterValuesType) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {
            todolistId,
            todolistFilter
        }
    } as const
}
