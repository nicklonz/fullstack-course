import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import Clock from "./components/Clock";

export default function Home() {
  return (
    <main style={{fontFamily:'system-ui', maxWidth: 800, margin: '40px auto', display:'grid', gap:16}}>
      <h1>Lesson 2 — React Fundamentals</h1>
      <Greeting name="Nick" />
      <Counter />
      <Clock />
    </main>
  );
}
