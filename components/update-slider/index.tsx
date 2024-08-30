import { CloudCog } from "lucide-react";
// import { Card } from "@prisma/client";
import { Button } from "@/components/ui/button"
import { CardItem } from "../card-item";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CardSheetHeader } from "./card-sheet-header";

export type Card =  {
    id: string
    title : string
}

interface UpdateSliderProps {
    data: Card
    index: number
}


export const UpdateSlider = ({data, index}: UpdateSliderProps)=>{


    return(
        <Sheet key={data.id}>
                        <SheetTrigger asChild>

                         <Button variant="new" className="mt-3 mb-3" size="edited">
                            <CardItem
                                index={index}                          
                                data ={data}
                            />
                        </Button> 
                          
                          
                        </SheetTrigger>
                        <SheetContent>
                          <SheetHeader>
                            <SheetTitle>
                                <CardSheetHeader data={data.title}/>
                            </SheetTitle>
                            <SheetDescription>
                              Make changes to your profile here. Click save when you're done.
                            </SheetDescription>
                          </SheetHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="name" className="text-right">
                                Name
                              </Label>
                              <Input id="name" value={data.title} className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="username" className="text-right">
                                Username
                              </Label>
                              <Input id="username" value="@peduarte" className="col-span-3" />
                            </div>
                          </div>
                          <SheetFooter>
                            <SheetClose asChild>
                              <Button type="submit">Save changes</Button>
                            </SheetClose>
                          </SheetFooter>
                        </SheetContent>
                      </Sheet>
    )
}