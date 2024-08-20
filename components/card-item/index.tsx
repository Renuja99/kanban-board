"use client"

// import { Card } from "@prisma/client"

export type Card = {
  title: string
}

interface CardItemProps{
    data: Card;
    index: number;
}

export const CardItem =({data, index}: CardItemProps)=>{
  return(
    <div className="w-full rounded-md bg-[#ffffff] shadow-md p-2 mt-5">
        {data.title}
    </div>
  )
}