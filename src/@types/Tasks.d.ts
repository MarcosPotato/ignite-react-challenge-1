export interface Task{
    id: string
    isFinished: boolean
    content: string
}

export interface TasksContextParams{
    tasksList: Task[]
    addTask: (content: string) => void
    removeTask: (id: string) => void
    toggleMark: (id: string) => void
}