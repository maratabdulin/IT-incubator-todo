import {TasksStateType, TodoListType} from "../App";
import {addTodolistAC, todolistReducer} from "./todolist-reducer";
import {taskReducer} from "./task-reducer";

test('IDs should be equals', ()=> {
    const startTaskState: TasksStateType = {}
    const startTodolistState: Array<TodoListType> = []

    const action = addTodolistAC('new todolist')
    const endTaskState = taskReducer(startTaskState, action)
    const endTodolistState = todolistReducer(startTodolistState, action)

    const keys = Object.keys(endTaskState)
    const idFromTasks = keys[0]
    const idFromTodolist = endTodolistState[0].id

    expect(idFromTasks).toBe(action.payload.newTodolistId)
    expect(idFromTodolist).toBe(action.payload.newTodolistId)
})
