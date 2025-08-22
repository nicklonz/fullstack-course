export default function Greeting({ name }: { name: string }) {
  return (
    <section style={{border:'1px solid #333', padding:12, borderRadius:12}}>
      <h3>Hello</h3>
      <p>Welcome, {name}!</p>
    </section>
  );
}
