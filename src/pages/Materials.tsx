import { materials } from "../data";

export default function Materials() {
  return (
    <section className="section">
      <div className="section__header">
        <h2>Образовательные материалы</h2>
        <span>Ресурсы и полезные подборки</span>
      </div>
      <div className="grid">
        {materials.map((item) => (
          <article key={item.title} className="card material">
            <span className="tag">{item.tag}</span>
            <h3>{item.title}</h3>
            <button className="link">Открыть →</button>
          </article>
        ))}
      </div>
    </section>
  );
}
