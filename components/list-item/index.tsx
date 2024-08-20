"use client"

import { ListWithCards } from "@/types"
import { Status, useTaskStore } from '@/lib/store'
import { ListHeader } from "../list-header";
import { ElementRef, useRef , useState, useEffect} from "react";
import { CardForm } from "../card-form";
import { cn } from "@/lib/utils";
import { CardItem } from "../card-item";
import { CloudCog } from "lucide-react";

export type Card =  {
    id: string
    title : string
}


// interface TaskItemProps{
//     data: Card[]
// }

interface ListItemProps {
    data: ListWithCards;
    index:number;
}

export const ListItem = ({
    data,
    index,
}: ListItemProps) =>{

    const textareaRef = useRef<ElementRef<"textarea">>(null);

    const [isEditing, setIsEditing] = useState(false);

    const cards = useTaskStore(state => state.card)



    const disableEditing = () => {
        setIsEditing(false);
    }

    const enableEditing= () =>{
        setIsEditing(true);
        setTimeout(()=>{
            textareaRef.current?.focus()
        })
    }


    useEffect(() => {
        useTaskStore.persist.rehydrate()
    console.log('rendered')


      }, [])
    
    return(
        <li className="shrink-0 h-full w-[370px] select-none p-5">
            <div className="w-full rounded-md bg-[#ffffff] shadow-md pb-2">
                <ListHeader data={data}/>
                
            </div>
            <ol className={cn(
                "w-full pb-2 ",
                data.cards.length > 0 ? "mt-5" : "mt-0"
            )}>
                {
                    data.cards.map((card, index)=>{
                        return(
                                <CardItem
                            index={index}
                            key={card.id}
                            data ={card}
                        />
                        )
                        
                    })
                }
            </ol>

            <div className="w-full pb-2 mt-5">
                 < CardForm
                    listId={data.id} 
                    ref={textareaRef}
                    isEditing={isEditing}
                    enableEditing = {enableEditing}
                    disableEditing = {disableEditing}

                />
            </div>
            
        </li>
    )
}