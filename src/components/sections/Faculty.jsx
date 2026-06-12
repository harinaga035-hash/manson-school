import s from "./Faculty.module.css";
import f1 from "@/assets/faculty-1.jpg";
import f2 from "@/assets/faculty-2.jpg";
import f3 from "@/assets/faculty-3.jpg";

const faculty = [
  {
    img: f1,
    name: "Ms. S Gayatri",
    role: "Vice-Principal",
    bio: "MSc, MCA, MPhil. Over 15 years overseeing the delivery of academic excellence using creative teaching methodologies.",
  },
  {
    img: f2,
    name: "Ms. Lavanya Kanduri",
    role: "Dean & Chairperson",
    bio: "M.Com, MBA, FCMA, DGBM. Founder and visionary of MSB, cost accountant, and pioneer in management training.",
  },
  {
    img: f3,
    name: "Mr. Vijay Kiran Agastya",
    role: "Visiting Professor",
    bio: "MBA, FCMA, ACCA, CIMA (UK). Industry expert bringing cost audit, financial planning, and global accounting practices.",
  },
];

export function Faculty() {
  return (
    <section className={s.section} id="faculty">
      <div className={s.inner}>
        <header className={s.head}>
          <span className="msb-eyebrow">Faculty Excellence</span>
          <h2 className={s.heading}>
            Mentors who've <em>actually built things.</em>
          </h2>
          <p className={s.lede}>
            Senior practitioners, published researchers, founder-operators. The faculty at MSB
            doesn't just teach business — they've lived it.
          </p>
        </header>
        <div className={s.grid}>
          {faculty.map((p) => (
            <article className={`${s.card} msb-reveal`} key={p.name}>
              <div className={s.frame}>
                <img
                  className={s.portrait}
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={168}
                  height={168}
                />
              </div>
              <h3 className={s.name}>{p.name}</h3>
              <div className={s.role}>{p.role}</div>
              <p className={s.bio}>{p.bio}</p>
              <div className={s.divider} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
