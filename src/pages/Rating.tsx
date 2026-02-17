import { rating } from "../data";

export default function Rating() {
  return (
    <section className="section">
      <div className="section__header">
        <h2>Рейтинг пользователей</h2>
        <span>Участники с наибольшим вкладом</span>
      </div>
      <div className="card rating">
        {rating.map((user, index) => (
          <div key={user.name} className="rating__row">
            <div className="rating__place">#{index + 1}</div>
            <div className="rating__name">{user.name}</div>
            <div className="rating__points">{user.points} pts</div>
          </div>
        ))}
      </div>
    </section>
  );
}
