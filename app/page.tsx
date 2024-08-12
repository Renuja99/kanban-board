import BoardPage from "@/components/boardPage";
import Infobar from "@/components/infobar";
import { Toaster } from "sonner";



export default function Home() {

  return (
    <div className="w-full overflow-y-hidden">
      <Toaster/>
      <Infobar/>
      <BoardPage/>
    </div>
  );
}
