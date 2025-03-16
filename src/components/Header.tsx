
import TickerWidget from "./TickerWidget";
import logo from "../assets/Al-Ansari-Exchange-Logo.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { getTokenFromCookies } from "@/App";

interface profile {
  _id: number;
  fullName: string;
  email: string;
  balance: number;
}
export default function Header() {
  const [profile, setProfil] = useState<profile>();

    const token = getTokenFromCookies();
  console.log("token", token);
  useEffect(() => {
    const fetchProfile = async () => {
      if (token) {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/users/profile`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log(response.data.user);
          setProfil(response.data.user)
        } catch (err) {
          console.error(err);
        }
      }
    };
    fetchProfile();
  }, [token]);
  return (
    <div className=" w-full ">
      <TickerWidget />
      <div className="bg-black text-white flex items-center justify-between py-1 md:py-2 px-2 md:px-4">
        <div>
          <img src={logo} alt="Al-Ansari Exchange Logo" className="w-[130px] md:w-[200px] " />
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col ">
            <span className="md:text-[20px] font-[500] md:font-[600]">{profile?.balance} $</span>
            <span className="text-[12px] text-gray-400">Balence</span>
          </div>
          
          <div className="flex gap-1 items-center">
            <div className="flex flex-col">
              <span className=" text-[14px] capitalize">{profile?.fullName}</span>
              <span className="text-[10px] md:text-[12px] text-gray-400">{profile?._id}</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
