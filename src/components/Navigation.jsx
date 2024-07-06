import Button from "../ui/Button";
import { IoEarthOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";

export default function Navigation() {
  return (
    <div className="flex justify-between items-center py-3 border-b border-solid border-slate-400 px-4">
      <h1 className="text-orange-500 text-3xl">Chegg</h1>
      <div className="flex flex-row items-center space-x-4">
        <Button size="small" variant="secondary">
          Resubscribe
        </Button>
        <IoEarthOutline className="text-2xl" />
        <div>
          <RxAvatar className="fill-blue-500" />
        </div>
      </div>
    </div>
  );
}
