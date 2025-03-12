import "./App.css";
import { MarketOverview } from "react-ts-tradingview-widgets";
import { Button } from "./components/ui/button";
import TradingViewWidget from "./components/TradingViewWidget";
import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   const token  = localStorage.getItem('token02')
  //   if(!token) {
  //     window.location.href = 'http://localhost:3001/ar'
  //   }
  // },[])
  return (
    <div className="flex bg-black ">
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
        <div className="h-[430px] overflow-hidden">
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
