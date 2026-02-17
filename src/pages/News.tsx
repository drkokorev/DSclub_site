import { newsItems } from "../data";

export default function News() {
  return (
    <section className="section">
      <div className="section__header">
        <h2>Новости</h2>
        <span>Обновления клуба и анонсы</span>
      </div>
      <div className="grid">
        {newsItems.map((item) => (
          <article key={item.title} className="card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <button className="link">Читать подробнее →</button>
          </article>
        ))}
      </div>
    </section>
  );
}
