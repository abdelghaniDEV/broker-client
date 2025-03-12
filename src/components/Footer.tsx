import React from "react";
import { Ticker } from "react-ts-tradingview-widgets";
import TickerWidget from "./TickerWidget";
export default function Footer() {
  return (
    <div className=" w-full">
      <TickerWidget />
    </div>
  );
}
