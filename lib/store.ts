import { create } from 'zustand'
import { persist } from 'zustand/middleware'
// import { Card } from '@prisma/client'
import { createCard } from '@/actions/create-card'
import { v4 as uuid } from 'uuid'
import { toast } from "sonner";

export type Status = 'TODO' | 'IN_PROGRESS'  | 'DONE'

export type Card =  {
    id: string
    title : string
}

export type State = {
    card: Card[]
}

export type Actions = {
    addTask: (title:string, listId: string) => Promise<void>
}

// export const useTaskStore = create<>()(
//     persist(
//         set =>({
            
//         })
//     )
// )

export const useTaskStore = create<State & Actions>()(
    persist(
        (set) => ({
            card: [],
            addTask: async(title: string, listId: string) => {

                let data = {title, listId}

                await createCard(data)
                await toast.success(`Card "${data.title}" created`)            
                set(state => ({
                    card: [...state.card, { id: uuid(), title }]
                }))
            }
        }),
        {
            name: 'task-storage', // unique name for the storage
        }
    )
)