export default function AboutTeam() {
  return (
    <section className="section">
      <div className="section__header">
        <h2>О команде</h2>
        <span>Люди, которые развивают DS club.community</span>
      </div>
      <div className="grid">
        <article className="card">
          <h3>Организация</h3>
          <p>Планирование мероприятий, треков и комьюнити-активностей.</p>
        </article>
        <article className="card">
          <h3>Образование</h3>
          <p>Подготовка учебных материалов, практикумов и менторских сессий.</p>
        </article>
        <article className="card">
          <h3>Проекты</h3>
          <p>Запуск командных задач и поддержка продуктовых DS-инициатив.</p>
        </article>
      </div>
    </section>
  );
}
