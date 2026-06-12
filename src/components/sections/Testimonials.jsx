import { useEffect, useState } from "react";
import s from "./Testimonials.module.css";
import t1 from "@/assets/student-1.jpg";
import t2 from "@/assets/student-2.jpg";
import t3 from "@/assets/student-3.jpg";

const items = [
  {
    img: t1,
    name: "Rahul Sharma",
    role: "MBA '24 · Senior Consultant, Deloitte",
    quote:
      "The dual emphasis on MBA curricula and USA CMA certification at Manson was the biggest turning point for my career. The soft skills training, mock interview practice, and HR guidance got me placed at Deloitte with a great package!",
  },
  {
    img: t2,
    name: "Sneha Reddy",
    role: "BBA '23 · Business Analyst, Deloitte",
    quote:
      "The mentor-mentee relationship at MSB is truly unique. Faculty members are always ready to support with open arms. The data visualization and business analytics certifications helped me stand out in my interviews.",
  },
  {
    img: t3,
    name: "Aman Gupta",
    role: "B.Com '24 · Associate, Amazon",
    quote:
      "Manson School of Business combines high-impact commerce programs with professional certifications. Completing the Tally, GST, and Business English certificates made me fully corporate-ready on day one.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % items.length), 6500);
    return () => clearInterval(t);
  }, []);
  const item = items[i];
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <span className={s.eyebrow}>Student Voices</span>
        <span className={s.quoteMark}>"</span>
        <blockquote className={s.quote} key={i}>
          {item.quote}
        </blockquote>
        <div className={s.person}>
          <img
            className={s.avatar}
            src={item.img}
            alt={item.name}
            loading="lazy"
            width={56}
            height={56}
          />
          <div className={s.who}>
            <div className="n" style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem" }}>
              {item.name}
            </div>
            <div className="r" style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
              {item.role}
            </div>
          </div>
        </div>
        <div className={s.dots}>
          {items.map((_, idx) => (
            <button
              key={idx}
              className={`${s.dot} ${idx === i ? s.active : ""}`}
              onClick={() => setI(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
