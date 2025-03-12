import { useEffect, useRef, useState } from "react";

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null); // تحديد النوع كـ HTMLDivElement
  const [currentSymbol, setCurrentSymbol] = useState("OANDA:XAUUSD");

  useEffect(() => {
    console.log(currentSymbol);
    if (container.current) {
      // التحقق من أن container.current ليس null
      console.log("Creating script element for TradingView");

      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "${currentSymbol}",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "withdateranges": true,
          "allow_symbol_change": true,
          "hide_side_toolbar": false,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);

      // استمع لتغيير الرمز من iframe
      const handleMessage = (event: any) => {
        console.log("Received message:", event.data); // فحص البيانات المرسلة

        if (event.data.type === "post") {
          const symbol = event.data.data.original_name; // الحصول على الرمز من البيانات
          console.log("Symbol updated to:", symbol);
          setCurrentSymbol(symbol); // تحديث الرمز الحالي
        }
      };

      window.addEventListener("message", handleMessage);

      return () => {
        console.log("Cleaning up script element");
        window.removeEventListener("message", handleMessage);
        if (container.current) {
          container.current.removeChild(script);
        }
      };
    }
  }, [currentSymbol]);


  return (
    <div  className="w-full h-[500px]">
      <div
        className="tradingview-widget-container overflow-hidden"
        ref={container}
        style={{ height: "90%", width: "100%" }} // إضافة حدود للتصحيح
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height: "100%", width: "100%" }}
        ></div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/"
            rel="noopener nofollow"
            target="_blank"
          >
            <span className="blue-text">By Al-ansari Trading</span>
          </a>
        </div>
      </div>
      {/* <div className="">
        <button onClick={handleBuy} style={{ margin: "10px", padding: "10px" }}>
          Buy
        </button>
        <button
          onClick={handleSell}
          style={{ margin: "10px", padding: "10px" }}
        >
          Sell
        </button>
        <button
          onClick={() => handleChangeSymbol("FX:EURUSD")}
          style={{ margin: "10px", padding: "10px" }}
        >
          Change to EURUSD
        </button>
        <button
          onClick={() => handleChangeSymbol("FX:GBPUSD")}
          style={{ margin: "10px", padding: "10px" }}
        >
          Change to GBPUSD
        </button>
      </div>
      <div>Current Symbol: {currentSymbol}</div> */}
    </div>
  );
}

export default TradingViewWidget;
