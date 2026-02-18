import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <h1>REU DS Club</h1>
          <p>Сообщество...</p>
        </div>
        <div className="hero__card">
          <div className="stat">
            <div className="stat__label">Комьюнити:</div>
            <div className="stat__value">500</div>
          </div>
          <div className="stat">
            <div className="stat__label">Проекты:</div>
            <div className="stat__value">52</div>
          </div>
          <div className="stat">
            <div className="stat__label">Хакатоны и чемпионаты:</div>
            <div className="stat__value">20</div>
          </div>
          <div className="hero__card-actions">
            <a className="outline" href="#about-club">
              О клубе
            </a>
            <a className="outline" href="#benefits">
              Преимущества
            </a>
            <a className="outline" href="#join">
              Как вступить
            </a>
          </div>
        </div>
      </section>

      <section className="section section--anchor" id="about-club">
        <div className="section__header">
          <h2>О клубе</h2>
        </div>
        <div className="card">
          <p>
            REU DS Club — это студенческое комьюнити для тех, кто хочет развиваться в
            Data Science через практику, совместные проекты и живое общение.
          </p>
        </div>
      </section>

      <section className="section section--anchor" id="benefits">
        <div className="section__header">
          <h2>Преимущества</h2>
        </div>
        <div className="card">
          <p>
            Регулярные разборы задач, доступ к материалам, работа в командах и обмен
            опытом с участниками разных уровней подготовки.
          </p>
        </div>
      </section>

      <section className="section section--anchor" id="join">
        <div className="section__header">
          <h2>Как вступить</h2>
        </div>
        <div className="card">
          <p>
            Подайте заявку через форму, расскажите о своем интересе к DS, после чего
            получите приглашение в общий чат и на ближайшую встречу клуба.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <h2>Разделы</h2>
        </div>
        <div className="grid">
          <article className="card">
            <h3>Новости</h3>
            <p>Все обновления и анонсы клуба.</p>
            <Link className="link" to="/news">Перейти →</Link>
          </article>
          <article className="card">
            <h3>События</h3>
            <p>Календарь встреч, воркшопов и практикумов.</p>
            <Link className="link" to="/events">Открыть →</Link>
          </article>
          <article className="card">
            <h3>О команде</h3>
            <p>Кто развивает клуб и за что отвечает.</p>
            <Link className="link" to="/about-team">Перейти →</Link>
          </article>
          <article className="card">
            <h3>Материалы</h3>
            <p>Полезные ресурсы и обучение.</p>
            <Link className="link" to="/materials">Открыть →</Link>
          </article>
        </div>
      </section>
    </>
  );
}
