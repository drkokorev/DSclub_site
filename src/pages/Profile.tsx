export default function Profile() {
  return (
    <section className="section">
      <div className="section__header">
        <h2>Личный кабинет</h2>
        <span>Вход и персональные настройки</span>
      </div>
      <div className="grid">
        <div className="card profile">
          <h3>Вход</h3>
          <label>
            Email
            <input type="email" placeholder="name@email.com" />
          </label>
          <label>
            Пароль
            <input type="password" placeholder="••••••••" />
          </label>
          <button className="primary full">Войти</button>
          <button className="link">Создать аккаунт</button>
        </div>
        <div className="card profile">
          <h3>Что будет внутри</h3>
          <ul>
            <li>Профиль и статус участника</li>
            <li>История обучения и проекты</li>
            <li>Персональные рекомендации</li>
            <li>Командные пространства</li>
          </ul>
          <button className="outline">Заполнить профиль</button>
        </div>
      </div>
    </section>
  );
}
