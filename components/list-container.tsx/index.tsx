"use client"

import { ListWithCards } from "@/types"
import { ListForm } from "../list-form";
import { useEffect, useState } from "react";
import { ListItem } from "../list-item";

export type Card =  {
    id: string
    title : string
}

interface ListContainerProps {
    data: ListWithCards[];

}



// interface TaskProps {
    
// }

export const ListContainer = ({
    data,
}: ListContainerProps) =>{

    const [orderedData, setOrderedData] = useState(data);

    useEffect(()=>{
        setOrderedData(data)
    }, [data])

    return(
        <ol className="flex justify-between ">
            {
                orderedData.map((list, index)=>{
                    return(
                        <div className=" border-2 border-gray-200 border-dashed h-[85vh] o" key={list.id}>
                            <ListItem
                            key={list.id}
                            index={index}
                            data={list}
                            />
                        </div>
                        
                    )
                })
            }
            {/* <ListForm/> */}
        </ol>
    )
}

