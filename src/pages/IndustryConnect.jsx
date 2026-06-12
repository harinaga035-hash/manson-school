import { useEffect, useState } from "react";
import s from "./Pages.module.css";
import { Link2, Award, Briefcase, GraduationCap } from "lucide-react";

import plantVisitImg from "@/assets/industry-visit-plant.jpg";
import officeVisitImg from "@/assets/industry-visit-office.jpg";
import seminarPanelImg from "@/assets/corporate-seminar-panel.jpg";
import seminarPodiumImg from "@/assets/corporate-seminar-podium.jpg";

export function IndustryConnect() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [visitIndex, setVisitIndex] = useState(0);
  const [seminarIndex, setSeminarIndex] = useState(0);

  const visitSlides = [
    {
      src: plantVisitImg,
      title: "Manufacturing Plant Tour",
      desc: "Scholars visiting an industrial plant facility, observing real-time factory operations."
    },
    {
      src: officeVisitImg,
      title: "Corporate Headquarters Tour",
      desc: "Students visiting a premier corporate headquarters office during their industry visit."
    }
  ];

  const seminarSlides = [
    {
      src: seminarPanelImg,
      title: "Executive Panel Discussion",
      desc: "Corporate guest speakers conducting an interactive Q&A panel on stage for students."
    },
    {
      src: seminarPodiumImg,
      title: "Keynote Lecture at Podium",
      desc: "A senior industry leader delivering a keynote strategy talk to scholars at the campus podium."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitIndex((prev) => (prev + 1) % visitSlides.length);
      setSeminarIndex((prev) => (prev + 1) % seminarSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className={s.page}>
      <div className={s.container}>
        {/* Header */}
        <header className={s.pageHeader}>
          <span className={s.pageSubtitle}>Corporate Engagement</span>
          <h1 className={s.pageTitle}>Industry Connect & Exposure</h1>
        </header>

        {/* Introduction */}
        <section className={s.card} id="overview">
          <h2 className={s.sectionHeader}>Bridging the Academic-Industry Gap</h2>
          <div className={s.letterContent}>
            <p>
              Manson School of Business places a massive emphasis on industry integration. We
              believe that professional education is complete only when classroom learning converges
              with industry practices. MSB scholars interact with business managers, industry
              experts, and startup founders throughout their degree programs.
            </p>
          </div>
        </section>

        {/* Grid layout for pillars */}
        <section className={s.grid2} style={{ marginBottom: "40px" }}>
          <div className={s.card}>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#e6f0ec",
                color: "#0b3d2e",
                display: "grid",
                placeItems: "center",
                marginBottom: "16px",
              }}
            >
              <Briefcase size={20} />
            </div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#0b3d2e",
                margin: "0 0 12px 0",
              }}
            >
              Corporate Internships
            </h3>
            <p className={s.listText}>
              All BBA, B.Com, and MBA scholars undergo mandatory corporate internships. Placement
              counselors support students in finding the right internships across sectors like
              retail, banking, IT, manufacturing, and analytics, helping them build practical
              skills.
            </p>
          </div>
          <div className={s.card}>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#fdf6e2",
                color: "#c9a227",
                display: "grid",
                placeItems: "center",
                marginBottom: "16px",
              }}
            >
              <GraduationCap size={20} />
            </div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#0b3d2e",
                margin: "0 0 12px 0",
              }}
            >
              Mock Interview Sessions
            </h3>
            <p className={s.listText}>
              To prepare students for corporate selections, we run specialized mock interviews led
              by experienced HR professionals and recruiters. Scholars get regular feedback on their
              presentation, domain knowledge, and resume drafting.
            </p>
          </div>
        </section>

        {/* Industry and Guest Lecture Gallery with dynamic carousels */}
        <section className={s.card} style={{ marginBottom: "40px", padding: "32px" }}>
          <span className={s.badgeGold}>Practical Exposure</span>
          <h2 className={s.sectionHeader} style={{ display: "block" }}>
            Industry Visits & Expert Seminars
          </h2>
          <p className={s.listText} style={{ marginBottom: "24px" }}>
            MSB scholars are exposed to real-world corporate and manufacturing operations. We regularly organize structured industrial tours and invite industry leaders to conduct specialized guest lectures.
          </p>

          <div className={s.grid2} style={{ marginTop: "24px", gap: "28px", marginBottom: "0" }}>
            {/* Industrial Visit Card with Image Rotation */}
            <div
              className={s.card}
              style={{
                padding: 0,
                overflow: "hidden",
                border: "1px solid rgba(201, 162, 39, 0.2)",
                boxShadow: "0 10px 30px rgba(11, 61, 46, 0.03)",
                display: "flex",
                flexDirection: "column",
                margin: 0,
                background: "#ffffff"
              }}
            >
              {/* Rotating Container */}
              <div style={{ position: "relative", width: "100%", height: "260px", background: "#0c1612", overflow: "hidden" }}>
                {visitSlides.map((slide, idx) => {
                  const isCurrent = idx === visitIndex;
                  return (
                    <div
                      key={idx}
                      style={{
                        position: "absolute",
                        inset: 0,
                        opacity: isCurrent ? 1 : 0,
                        transition: "opacity 1000ms ease-in-out",
                        zIndex: isCurrent ? 1 : 0
                      }}
                    >
                      <img
                        src={slide.src}
                        alt={slide.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                  );
                })}
              </div>
              <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: "700",
                    color: "#c9a227",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "6px",
                    letterSpacing: "0.05em"
                  }}
                >
                  Industry Visits
                </span>
                <h4 style={{ fontSize: "18px", fontWeight: "700", color: "#0b3d2e", margin: "0 0 8px 0" }}>
                  {visitSlides[visitIndex].title}
                </h4>
                <p style={{ fontSize: "13.5px", color: "#555", margin: 0, lineHeight: "1.6" }}>
                  {visitSlides[visitIndex].desc}
                </p>
              </div>
            </div>

            {/* Guest Lecture Card with Image Rotation */}
            <div
              className={s.card}
              style={{
                padding: 0,
                overflow: "hidden",
                border: "1px solid rgba(201, 162, 39, 0.2)",
                boxShadow: "0 10px 30px rgba(11, 61, 46, 0.03)",
                display: "flex",
                flexDirection: "column",
                margin: 0,
                background: "#ffffff"
              }}
            >
              {/* Rotating Container */}
              <div style={{ position: "relative", width: "100%", height: "260px", background: "#0c1612", overflow: "hidden" }}>
                {seminarSlides.map((slide, idx) => {
                  const isCurrent = idx === seminarIndex;
                  return (
                    <div
                      key={idx}
                      style={{
                        position: "absolute",
                        inset: 0,
                        opacity: isCurrent ? 1 : 0,
                        transition: "opacity 1000ms ease-in-out",
                        zIndex: isCurrent ? 1 : 0
                      }}
                    >
                      <img
                        src={slide.src}
                        alt={slide.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                  );
                })}
              </div>
              <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: "700",
                    color: "#c9a227",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "6px",
                    letterSpacing: "0.05em"
                  }}
                >
                  Corporate Exposure
                </span>
                <h4 style={{ fontSize: "18px", fontWeight: "700", color: "#0b3d2e", margin: "0 0 8px 0" }}>
                  {seminarSlides[seminarIndex].title}
                </h4>
                <p style={{ fontSize: "13.5px", color: "#555", margin: 0, lineHeight: "1.6" }}>
                  {seminarSlides[seminarIndex].desc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Global certification programs */}
        <section className={s.card} style={{ marginBottom: "48px" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#e6f0ec",
              color: "#0b3d2e",
              display: "grid",
              placeItems: "center",
              marginBottom: "16px",
            }}
          >
            <Award size={20} />
          </div>
          <h2 className={s.sectionHeader}>Business English Certificate Programs</h2>
          <p className={s.listText} style={{ marginBottom: "20px" }}>
            Improving communication and presentation capability is a high priority. In furtherance
            of enhancing career prospects and improving student work-readiness, Manson Center of
            Excellence provides globally accepted Business English Certificate Programs to scholars.
          </p>
          <div className={s.list}>
            <div className={s.listItem}>
              <div className={s.listDot} />
              <span className={s.listText}>
                Direct focus on corporate email drafting, presentation preparation, and report
                writing.
              </span>
            </div>
            <div className={s.listItem}>
              <div className={s.listDot} />
              <span className={s.listText}>Cambridge BEC exam preparation modules.</span>
            </div>
            <div className={s.listItem}>
              <div className={s.listDot} />
              <span className={s.listText}>
                Development of critical discussion, group interaction, and public speaking skills.
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
