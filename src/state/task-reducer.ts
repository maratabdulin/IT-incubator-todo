import {TasksStateType} from "../App";
import {v1} from "uuid";
import {AddTodolistType, RemoveTodolistType} from "./todolist-reducer";

export type DeleteTaskType = ReturnType<typeof deleteTaskAC>
export type AddTaskType = ReturnType<typeof addTaskAC>
export type ChangeTaskStatusType = ReturnType<typeof changeTaskStatusAC>
export type ChangeTaskTitleType = ReturnType<typeof changeTaskTitleAC>

type ActionType = DeleteTaskType | AddTaskType
    | ChangeTaskStatusType | ChangeTaskTitleType | AddTodolistType | RemoveTodolistType


export const taskReducer = (state: TasksStateType, action: ActionType): TasksStateType => {
    switch (action.type) {
        case 'DELETE-TASK':
            return {
                ...state,
                [action.payload.todolistId]: state[action.payload.todolistId]
                    .filter(t => t.id !== action.payload.taskId)
            };
        case 'ADD-TASK':
            return {
                ...state,
                [action.payload.todolistId]: [
                    {id: v1(), title: action.payload.title, isDone: false},
                    ...state[action.payload.todolistId]
                ]
            }
        case "CHANGE-TASK-STATUS":
            return {
                ...state,
                [action.payload.todolistId]: state[action.payload.todolistId]
                    .map(t => t.id === action.payload.taskId ? {...t, isDone: !t.isDone} : t)
            }
        case "CHANGE-TASK-TITLE":
            return {
                ...state,
                [action.payload.todolistId]: state[action.payload.todolistId]
                    .map(t => t.id === action.payload.taskId ? {...t, title: action.payload.title} : t)
            }
        case "ADD-TODOLIST":
            return {
                ...state,
                [action.payload.newTodolistId]: []
            }
        case "REMOVE-TODOLIST":
            const newState = {...state};
            delete newState[action.payload.todolistId];
            return newState;
        default:
            throw new Error('I dont understand this type!');
    }
};

export const deleteTaskAC = (todolistId: string, taskId: string) => {
    return {
        type: 'DELETE-TASK',
        payload: {
            todolistId,
            taskId,
        }
    } as const
}

export const addTaskAC = (todolistId: string, title: string) => {
    return {
        type: 'ADD-TASK',
        payload: {
            todolistId,
            title
        }
    } as const
}

export const changeTaskStatusAC = (todolistId: string, taskId: string) => {
    return {
        type: 'CHANGE-TASK-STATUS',
        payload: {
            todolistId,
            taskId
        }
    } as const
}

export const changeTaskTitleAC = (todolistId: string, taskId: string, title: string) => {
    return {
        type: 'CHANGE-TASK-TITLE',
        payload: {
            todolistId,
            taskId,
            title,
        }
    } as const
}
