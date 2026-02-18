import { useEffect, useMemo, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Events from "./pages/Events";
import AboutTeam from "./pages/AboutTeam";
import Profile from "./pages/Profile";
import Materials from "./pages/Materials";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  const stored = localStorage.getItem("dsclub-theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("dsclub-theme", theme);
  }, [theme]);

  const nextTheme = useMemo(() => (theme === "light" ? "dark" : "light"), [theme]);

  return (
    <div className="page">
      <header className="header">
        <div className="brand">
          <span className="brand__badge">DS</span>
          <div className="brand__text">
            <div className="brand__title">REU DS Club</div>
            <div className="brand__subtitle">data science • community • growth</div>
          </div>
        </div>

        <nav className="nav">
          <NavLink to="/" end>
            Главная
          </NavLink>
          <NavLink to="/news">Новости</NavLink>
          <NavLink to="/events">События</NavLink>
          <NavLink to="/about-team">О команде</NavLink>
          <NavLink to="/materials">Материалы</NavLink>
        </nav>

        <div className="header__actions">
          <NavLink className="profile-link" to="/profile">
            <span className="profile-link__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img">
                <path
                  d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-4.42 0-8 2.02-8 4.5V20h16v-1.5C20 16.02 16.42 14 12 14Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            Личный кабинет
          </NavLink>
          <button className="theme-toggle" onClick={() => setTheme(nextTheme)}>
            {theme === "light" ? "Темная тема" : "Светлая тема"}
          </button>
        </div>
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about-team" element={<AboutTeam />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/materials" element={<Materials />} />
        </Routes>
      </main>

      <footer className="footer">
        <div>REU DS Club — объединяем практиков и будущих специалистов.</div>
        <div className="footer__links">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://stepik.org" target="_blank" rel="noreferrer">
            Stepik
          </a>
          <a href="https://t.me" target="_blank" rel="noreferrer">
            Telegram
          </a>
          <a href="https://vk.com" target="_blank" rel="noreferrer">
            VK
          </a>
        </div>
      </footer>
    </div>
  );
}
