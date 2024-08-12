"use client"

import { ListWithCards } from "@/types"
import { ListForm } from "../list-form";
import { useEffect, useState } from "react";
import { ListItem } from "../list-item";

interface ListContainerProps {
    data: ListWithCards[];
}

export const ListContainer = ({
    data
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
                        <div className=" border-2 border-gray-200 border-dashed h-[85vh] o">
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

