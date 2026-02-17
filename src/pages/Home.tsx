import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <h1>Сообщество, где растут data scientists</h1>
          <p>
            Объединяем практику, обучение и реальный опыт. Ниже — быстрый доступ ко
            всем разделам сайта.
          </p>
          <div className="hero__actions">
            <button className="primary">Вступить в клуб</button>
            <button className="ghost">Получить приглашение</button>
          </div>
        </div>
        <div className="hero__card">
          <div className="stat">
            <div className="stat__value">128</div>
            <div className="stat__label">активных участников</div>
          </div>
          <div className="stat">
            <div className="stat__value">12</div>
            <div className="stat__label">проектов в работе</div>
          </div>
          <div className="stat">
            <div className="stat__value">24</div>
            <div className="stat__label">мероприятия в год</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <h2>Разделы</h2>
          <span>Переходите в нужную вкладку</span>
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
            <h3>Рейтинг</h3>
            <p>Активные участники и их вклад.</p>
            <Link className="link" to="/rating">Смотреть →</Link>
          </article>
          <article className="card">
            <h3>Личный кабинет</h3>
            <p>Вход, профиль и персональные функции.</p>
            <Link className="link" to="/profile">Войти →</Link>
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
