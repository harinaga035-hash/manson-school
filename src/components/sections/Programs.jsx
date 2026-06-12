import { Link } from "react-router-dom";
import s from "./Programs.module.css";
import { useModals } from "../ModalProvider";

const programs = [
  {
    tag: "Undergraduate",
    title: "BBA",
    sub: "Bachelor of Business Administration",
    duration: "3 Years",
    eligibility: "10+2, any stream",
    points: [
      "Optional integration with CMA USA / CMA India tracks",
      "Includes Lean Six Sigma & Digital Marketing workshops",
      "Two structured corporate internships built into program",
      "Cambridge Business English Certificate (BEC) training",
    ],
  },
  {
    tag: "Postgraduate",
    title: "MBA",
    sub: "Master of Business Administration",
    duration: "2 Years",
    eligibility: "Graduate in any stream",
    points: [
      "10 future-ready specializations including AI, Analytics, FinTech, and IB",
      "Industry-aligned certifications (Google, Power BI, SQL, Six Sigma, etc.)",
      "Corporate exposure & placement-focused training",
      "Direct internship assistance with leading multinational partners",
    ],
  },
  {
    tag: "Undergraduate",
    title: "B.Com",
    sub: "Bachelor of Commerce",
    duration: "3 Years",
    eligibility: "10+2 or equivalent",
    points: [
      "Integrated with professional CMA credentials",
      "Hands-on Tally ERP and GST tax compliance training",
      "Deep core in corporate auditing & finance analytics",
      "Final year placement drive and corporate internship",
    ],
  },
];

export function Programs() {
  const { open } = useModals();
  return (
    <section className={s.section} id="programs">
      <div className={s.inner}>
        <header className={s.head}>
          <div>
            <span className="msb-eyebrow">Programs Offered</span>
            <h2 className={s.heading}>
              Three programs. <em>One uncompromising standard.</em>
            </h2>
          </div>
          <p className={s.lede}>
            BBA, MBA and B.Com — each program is engineered around outcomes, mentorship and industry
            exposure. Pick your path; we'll build the rest with you.
          </p>
        </header>
        <div className={s.grid}>
          {programs.map((p) => {
            const programId = p.title.toLowerCase().replace(/[^a-z0-9]/g, "");
            return (
              <article className={`${s.card} msb-reveal`} key={p.title}>
                <span className={s.tag}>{p.tag}</span>
                <h3 className={s.title}>{p.title}</h3>
                <p className={s.sub}>{p.sub}</p>
                <div className={s.meta}>
                  <div className={s.metaItem}>
                    <span className={s.metaLbl}>Duration</span>
                    <span className={s.metaVal}>{p.duration}</span>
                  </div>
                  <div className={s.metaItem}>
                    <span className={s.metaLbl}>Eligibility</span>
                    <span className={s.metaVal}>{p.eligibility}</span>
                  </div>
                </div>
                <ul className={s.bullets}>
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className={s.actions}>
                  <button className={s.btnPrimary} onClick={() => open("enquire")}>
                    Apply Now
                  </button>
                  <Link className={s.btnGhost} to={`/programs/${programId}`}>
                    Learn More
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
