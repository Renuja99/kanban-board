import React from "react";
import { client } from "@/lib/db"
import { ListContainer } from "../list-container.tsx";



// export const runtime = "edge";

interface BoardPageProps{

}

const BoardPage = async({}: BoardPageProps)=>{

    const lists = await client.list.findMany({
        include:{
            cards:{
                orderBy:{
                    order: "asc"
                }
            }
        }
    })

    console.log('revalidate next js')

    return(
        <div className="ml-5 p-4 h-full overflow-x-auto ">
            <ListContainer
                data={lists}
            />
        </div>
    )
}

export default BoardPage