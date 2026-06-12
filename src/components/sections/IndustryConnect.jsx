import { Handshake, Users, Sparkles, Briefcase } from "lucide-react";
import s from "./IndustryConnect.module.css";

const connections = [
  {
    icon: Handshake,
    title: "Corporate Partnerships",
    body: "Sustained recruitment and internship alliances with 150+ leading MNCs including Amazon, Deloitte, Tech Mahindra, Genpact, and ICICI Bank.",
  },
  {
    icon: Users,
    title: "Executive Speaker Series",
    body: "Weekly interactions and guest lectures with industry managers, research scholars, cost accountants, and strategy experts to keep learning practical.",
  },
  {
    icon: Sparkles,
    title: "Specialized Workshops",
    body: "Practical training in Business English Certification (BEC), soft skills refinement, mock interview drills, and case studies to groom corporate-ready scholars.",
  },
  {
    icon: Briefcase,
    title: "Industry Collaborations",
    body: "Two structured corporate internships and real-world business case simulations built directly into the core BBA, B.Com, and MBA degree curricula.",
  },
];

export function IndustryConnect() {
  return (
    <section className={s.section} id="industry-connect">
      <div className={s.inner}>
        <header className={s.head}>
          <div>
            <span className="msb-eyebrow">Industry Connect</span>
            <h2 className={s.heading}>
              Bridging the gap between <em>academia and the boardroom.</em>
            </h2>
          </div>
          <p className={s.lede}>
            MSB prioritizes active corporate exposure. We connect our scholars directly with
            industry experts and practical learning opportunities from week one.
          </p>
        </header>
        <div className={s.grid}>
          {connections.map((c, i) => {
            const Icon = c.icon;
            return (
              <article className={`${s.card} msb-reveal`} key={c.title}>
                <div className={s.iconWrap}>
                  <Icon size={22} />
                </div>
                <h3 className={s.cardTitle}>{c.title}</h3>
                <p className={s.cardBody}>{c.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
