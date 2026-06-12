import s from "./InstitutionHighlights.module.css";

const highlights = [
  {
    title: "Hyderabad's 1st B‑School",
    body: "A pioneering legacy of business education in the city — built on rigour, ethics and ambition.",
  },
  {
    title: "Top Emerging Business School — South India 2023",
    body: "Awarded for industry‑aligned curriculum, faculty calibre and consistent placement outcomes year on year.",
  },
  {
    title: "Beyond IIM B-School Survey — Top 100",
    body: "Recognised among the top 100 business schools in India by Higher Education Review in 2024.",
  },
  {
    title: "Excellence in Industry Engagement",
    body: "Honoured for the depth of corporate partnerships, live projects and mentor‑driven placement infrastructure.",
  },
];

export function InstitutionHighlights() {
  return (
    <section className={s.section} id="institution-highlights">
      <div className={s.inner}>
        <header className={s.head}>
          <h2 className={s.heading}>Institution Highlights</h2>
          <p className={s.lede}>Key achievements, accreditations and recognitions that set us apart.</p>
        </header>
        <div className={s.grid}>
          {highlights.map((h, i) => (
            <article className={`${s.card} msb-reveal`} key={i}>
              <h3 className={s.cardTitle}>{h.title}</h3>
              <p className={s.cardBody}>{h.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
