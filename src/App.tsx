import "./App.css";
import { MarketOverview } from "react-ts-tradingview-widgets";
import { Button } from "./components/ui/button";
import TradingViewWidget from "./components/TradingViewWidget";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const token  = localStorage.getItem('token-001')
    // if(!token) {
    //   window.location.href = import.meta.env.VITE_LANDING_URL
    // }
  },[])
  return (
    <div className="flex flex-col md:flex-row bg-black ">
      <TradingViewWidget />

      <div>
        <div className="grid grid-cols-2 ">
          <Button className="bg-[#1BAE7F] text-white rounded-none hover:none">
            BUY
          </Button>
          <Button className="bg-[#C81256] text-white rounded-none hover:none">
            SELL
          </Button>
        </div>
        <div className="md:h-[430px] md:overflow-hidden hidden md:block">
          <MarketOverview
            colorTheme="dark"
            height={430}
            width={300}
          ></MarketOverview>
        </div>
      </div>
    </div>
  );
}

export default App;
