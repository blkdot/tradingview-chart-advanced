import React from "react";
import "./App.css";
import TradingViewWidget from "./Charts/tradingview-widget/TradingviewWidget";

function App() {
  return (
    <div style={{ height: 600 }}>
      <TradingViewWidget />
    </div>
  );
}

export default App;
