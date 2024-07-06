import React from "react";

const symbols = ["π", "√", "∞", "∫", "Δ", "Σ", "∂", "±", "≈", "≠", "≤", "≥"];

export default function Keyboard({ onInsertSymbol }) {
  return (
    <div className="flex flex-wrap p-2 border border-gray-400 rounded">
      {symbols.map((symbol) => (
        <button
          key={symbol}
          onClick={() => onInsertSymbol(symbol)}
          className="m-1 p-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          {symbol}
        </button>
      ))}
    </div>
  );
}
