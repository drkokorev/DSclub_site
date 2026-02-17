import { events } from "../data";

export default function Events() {
  return (
    <section className="section">
      <div className="section__header">
        <h2>События</h2>
        <span>Календарь ближайших встреч</span>
      </div>
      <div className="grid">
        {events.map((event) => (
          <article key={event.title} className="card event">
            <div className="event__date">
              {new Date(event.date).toLocaleDateString("ru-RU")}
            </div>
            <h3>{event.title}</h3>
            <p>{event.place}</p>
            <button className="outline">Добавить в календарь</button>
          </article>
        ))}
      </div>
    </section>
  );
}
