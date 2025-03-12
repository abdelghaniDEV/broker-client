import { useEffect } from "react";


export default function TickerWidget() {
  useEffect(() => {
    // Check if script already exists
    if (document.getElementById("tradingview-widget-script")) return;

    const script = document.createElement("script");
    script.id = "tradingview-widget-script";
    script.type = "text/javascript";
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FOREXCOM:SPXUSD", title: "S&P 500 Index" },
        { proName: "FOREXCOM:NSXUSD", title: "US 100 Cash CFD" },
        { proName: "FX_IDC:EURUSD", title: "EUR to USD" },
        { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
        { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
      ],
      isTransparent: false,
      width: "100%",
      height: "420px",
      showSymbolLogo: true,
      colorTheme: "dark",
      locale: "en",
    });

    document.getElementById("tradingview-widget")?.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview-widget"></div>
      {/* <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div> */}
    </div>
  );
}
