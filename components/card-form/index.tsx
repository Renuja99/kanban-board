"use client"

import { forwardRef, useRef, ElementRef, KeyboardEventHandler } from "react";
import { useAction } from "@/hooks/use-action";
import { createCard } from "@/actions/create-card";
import { useParams } from "next/navigation";
import { useOnClickOutside, useEventListener } from "usehooks-ts"
import { Button } from "../ui/button";
import { Add } from "iconsax-react";
import { FormTextarea } from "../form/form-textarea";
import FormSubmit from "@/components/form/form-submit";
import { useTaskStore } from "@/lib/store";
import { toast } from "sonner";

interface CardFormProps {
    listId: string;
    enableEditing: () => void;
    disableEditing: () => void;
    isEditing: boolean;
}

export const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(({
    listId,
    enableEditing,
    disableEditing,
    isEditing
}, ref) => {

    const params = useParams()
    const formRef = useRef<ElementRef<"form">>(null)
    const addTask = useTaskStore(state => state.addTask)

    const { execute, fieldErrors } = useAction(createCard,{
        onSuccess: (data) => {
            toast.success(`Card "${data.title}" created`)
            formRef.current?.reset()
        },

        onError: (error) => {
            toast.error(error)
        }
    })

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            disableEditing()
        }
    }

    useOnClickOutside(formRef, disableEditing)
    useEventListener("keydown", onKeyDown)

    const onTextareakeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
        if(e.key === "Enter" && !e.shiftKey){
            e.preventDefault()
            formRef.current?.requestSubmit()
        }
    }

    const onSubmit = (formData: FormData)=>{

        disableEditing()
        const title = formData.get("title") as string;
        const listId = formData.get("listId") as string;

        // execute({title, listId})
        addTask(title, listId)
    }

    const handleChange = ()=>{
        
    }

    if (isEditing) {
        return (
            <form
              ref={formRef}
              action = {onSubmit}
              className="space-y-4"
            >
                <FormTextarea
                    id="title"
                    onKeyDown={onTextareakeyDown}
                    ref={ref}
                    placeholder="Enter a title for this card.."
                    errors = {fieldErrors}
                />
                <input
                    hidden
                    id="listId"
                    name="listId"
                    value={listId}
                    onChange={handleChange}
                />
                {/* <div className="flex items-center gap-x-1">
                    <FormSubmit>
                        Add Card
                    </FormSubmit>
                </div> */}
            </form>
        )
    }
    return (
        <div className="pt-2 px-2">
            <Button
                onClick={enableEditing}
                className="h-auto px-2 py-1.5 w-full justify-center text-muted-foreground text-sm "
                size="sm"
                variant="ghost"
            >
                <Add />
                Add task
            </Button>
        </div>
    )
})

CardForm.displayName = "CardForm";