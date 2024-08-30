"use client"

import { CardWithList } from "@/types"

// interface ICardSheetHeaderProps {
//     data: CardWithList
// }

interface ICardSheetHeaderProps{
    data: string
}

export const CardSheetHeader = ({data}: ICardSheetHeaderProps) =>{

    return(
        <div>
            {data}
        </div>
    )
}