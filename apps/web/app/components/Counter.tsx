"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <section style={{border:'1px solid #333', padding:12, borderRadius:12}}>
      <h3>Counter</h3>
      <p>Value: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>+1</button>{" "}
      <button onClick={() => setCount(0)}>Reset</button>
    </section>
  );
}
