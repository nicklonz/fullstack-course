"use client";
import { useEffect, useState } from "react";

export default function Clock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <section style={{border:'1px solid #333', padding:12, borderRadius:12}}>
      <h3>Clock</h3>
      <p>{now.toLocaleTimeString()}</p>
    </section>
  );
}
