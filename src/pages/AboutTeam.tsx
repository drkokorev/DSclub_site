import { useRef } from "react";

type TeamMember = {
  id: string;
  name: string;
};

const heads: TeamMember[] = Array.from({ length: 5 }, (_, index) => ({
  id: `head-${index + 1}`,
  name: "Name Surname",
}));

const organizers: TeamMember[] = Array.from({ length: 12 }, (_, index) => ({
  id: `organizer-${index + 1}`,
  name: "Name Surname",
}));

const mentors: TeamMember[] = Array.from({ length: 12 }, (_, index) => ({
  id: `mentor-${index + 1}`,
  name: "Name Surname",
}));

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="team-member">
      <div className="team-member__avatar" aria-hidden="true">
        NS
      </div>
      <p>{member.name}</p>
    </article>
  );
}

function CarouselLevel({
  title,
  members,
}: {
  title: string;
  members: TeamMember[];
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollTrack = (direction: 1 | -1) => {
    if (!trackRef.current) return;
    const firstCard = trackRef.current.querySelector<HTMLElement>(".team-member");
    const step = firstCard ? firstCard.offsetWidth + 16 : 196;
    trackRef.current.scrollBy({
      left: direction * step * 2,
      behavior: "smooth",
    });
  };

  return (
    <section className="team-level">
      <div className="team-level__header">
        <h3>{title}</h3>
        <div className="team-carousel__controls">
          <button
            className="team-carousel__button"
            type="button"
            onClick={() => scrollTrack(-1)}
            aria-label={`Прокрутить список ${title} влево`}
          >
            ←
          </button>
          <button
            className="team-carousel__button"
            type="button"
            onClick={() => scrollTrack(1)}
            aria-label={`Прокрутить список ${title} вправо`}
          >
            →
          </button>
        </div>
      </div>

      <div className="team-carousel__track" ref={trackRef}>
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}

export default function AboutTeam() {
  return (
    <section className="section">
      <div className="section__header">
        <h2>О команде</h2>
        <span>Люди, которые развивают dsclub.ai</span>
      </div>
      <div className="about-team-layout">
        <section className="team-level">
          <div className="team-level__header">
            <h3>Хэды</h3>
          </div>
          <div className="team-members-grid">
            {heads.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        <CarouselLevel title="Организаторы" members={organizers} />
        <CarouselLevel title="Менторы" members={mentors} />
      </div>
    </section>
  );
}
