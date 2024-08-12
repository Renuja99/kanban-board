import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

interface InterfaceFormSelectProps {

}

export const FormSelect = () => {

    return (
        <Select>
            <SelectTrigger className="w-auto">
                <SelectValue placeholder="Set Priority" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">Low</SelectItem>
                <SelectItem value="dark">Medium</SelectItem>
                <SelectItem value="system">High</SelectItem>
            </SelectContent>
        </Select>
    )
}