export default function Materials() {
  return (
    <section className="section">
      <div className="section__header">
        <h2>Образовательные материалы</h2>
        <span>Основные разделы материалов клуба</span>
      </div>

      <div className="materials-sections">
        <button className="materials-section">Записи лекций</button>
        <button className="materials-section">Месяц бота</button>
        <button className="materials-section">Курсы</button>
        <button className="materials-section">ML roadmap</button>
        <div className="materials-section-wrap">
          <button className="materials-section materials-section--has-sub">
            База знаний ▾
          </button>
          <div className="materials-page-submenu card">
            <button className="materials-page-submenu__item">ML</button>
            <button className="materials-page-submenu__item">Python</button>
            <button className="materials-page-submenu__item">SQL</button>
            <button className="materials-page-submenu__item">Математика</button>
            <button className="materials-page-submenu__item">Другое</button>
          </div>
        </div>
      </div>
    </section>
  );
}
