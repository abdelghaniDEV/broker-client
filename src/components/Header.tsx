import { User } from "lucide-react";
import TickerWidget from "./TickerWidget";
import { Button } from "./ui/button";
import logo from "../assets/Al-Ansari-Exchange-Logo.png"
export default function Header() {
  return (
    <div className=" w-full ">
      <TickerWidget />
      <div className="bg-black text-white flex items-center justify-between py-2 px-4">
        <div>
          <img src={logo} alt="Al-Ansari Exchange Logo" className="w-[200px]" />
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col ">
            <span className="text-[16px]">USD 10.000 </span>
            <span className="text-[12px] text-gray-400">Balence</span>
          </div>
          <Button className="bg-blue-600 text-white">Deposit</Button>
          <div className="flex gap-1 items-center">
            
            <div className="flex flex-col">
                <span>Ahmed Ali</span>
                <span className="text-[12px] text-gray-400">4568674638</span>
            </div>
            <User className="w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
