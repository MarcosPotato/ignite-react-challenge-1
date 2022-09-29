import { createContext, ReactNode, useCallback, useState } from "react";
import { v4 as uuid } from "uuid"
import { Task, TasksContextParams } from "../@types/Tasks";

interface TasksProviderProps{
    children: ReactNode
}

export const TasksContext = createContext({} as TasksContextParams)

export const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
    const [tasksList, setTasksList] = useState<Task[]>([])

    const addTask = useCallback((content: string) => {
        if(!content){
            return
        }

        const newId = uuid()

        setTasksList(prev => [{
            id: newId,
            content: content,
            isFinished: false
        }, ...prev])
    },[])

    const removeTask = useCallback((id: string) => {
        setTasksList(prev => prev.filter(task => task.id !== id))
    },[])

    const toggleMark = useCallback((id: string) => {
        setTasksList(prev => prev.map(task => task.id === id ? ({
            ...task,
            isFinished: !task.isFinished
        }): task))
    },[])

    return(
        <TasksContext.Provider value={{ addTask, removeTask, toggleMark, tasksList }}>
            { children }
        </TasksContext.Provider>
    )
}