import { v4 as uuidv4 } from 'uuid';

export type taskStateType = {
    id: string;
    title: string;
    isDone: boolean;
}

let initialState: taskStateType[] = [
    { id: uuidv4(), title: "Styleguide createion 1",isDone: false },
    { id: uuidv4(), title: "Styleguide createion 2",isDone: false },
    { id: uuidv4(), title: "Styleguide createion 3",isDone: false },
];

export const tasksReducer = (state = initialState, action: any): taskStateType[] => {
    switch (action.type) {
        case "ADD_TASK": {
            return [...state, {id: uuidv4(), title: action.payload.title ,isDone: false}];
        }
        case "REMOVE_TASK": {
            return state.filter(task => task.id !== action.payload.taskId);
        }
        case "STATUS_TASK": {
            return state.map(task => task.id === action.payload.taskId ? {...task, isDone: true} : task);
        }
        default: {
            return state;
        }
    }
}