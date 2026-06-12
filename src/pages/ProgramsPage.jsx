import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import s from "./Pages.module.css";

export function ProgramsPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  return (
    <main className={s.page}>
      <div className={s.container}>
        {/* Header */}
        <header className={s.pageHeader}>
          <span className={s.pageSubtitle}>Curriculum & Degrees</span>
          <h1 className={s.pageTitle}>Academic & Professional Programs</h1>
        </header>

        {/* Introduction */}
        <section className={s.card}>
          <p className={s.listText} style={{ fontSize: "16px", textAlign: "center" }}>
            Explore a diverse range of cutting-edge academic programs at MSB, designed to equip
            students with the knowledge and skills necessary for success in today’s dynamic business
            landscape. Click any card below to view detailed curriculum, outcomes, and faculty.
          </p>
        </section>

        {/* Academic Degrees */}
        <h2 className={s.sectionHeader}>Degree Programs</h2>
        <section className={s.grid4} style={{ marginBottom: "40px" }}>
          <Link
            to="/programs/bba"
            className={s.card}
            id="bba"
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
          >
            <span className={s.badgeGreen}>Undergraduate</span>
            <h3 className={s.sectionHeader} style={{ fontSize: "20px", marginBottom: "16px" }}>
              BBA Courses
            </h3>
            <p className={s.listText}>
              Foundational business education with a focus on practical skills, internship exposure,
              case studies, and preparing scholars for Entry-Level Managerial and Corporate roles.
            </p>
          </Link>
          <Link
            to="/programs/bcom"
            className={s.card}
            id="bcom"
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
          >
            <span className={s.badgeGreen}>Undergraduate</span>
            <h3 className={s.sectionHeader} style={{ fontSize: "20px", marginBottom: "16px" }}>
              B.Com Courses
            </h3>
            <p className={s.listText}>
              Specialized commerce knowledge with an emphasis on corporate accounting, financial
              acumen, versatile business career paths, and an adaptable global perspective.
            </p>
          </Link>
          <Link
            to="/programs/bcom-analytics"
            className={s.card}
            id="bcom-analytics"
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
          >
            <span className={s.badgeGreen}>Undergraduate</span>
            <h3 className={s.sectionHeader} style={{ fontSize: "20px", marginBottom: "16px" }}>
              B.Com (Analytics)
            </h3>
            <p className={s.listText}>
              Integrates traditional commerce subjects with modern data analytics, SQL, Python,
              and business intelligence tools for data-backed corporate decision-making.
            </p>
          </Link>
          <Link
            to="/programs/mba"
            className={s.card}
            id="mba"
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
          >
            <span className={s.badgeGreen}>Postgraduate</span>
            <h3 className={s.sectionHeader} style={{ fontSize: "20px", marginBottom: "16px" }}>
              MBA Courses
            </h3>
            <p className={s.listText}>
              Advanced leadership development, specialization selection, business networking,
              real-world case simulations, and a direct catalyst for managerial and executive career
              advancement.
            </p>
          </Link>
        </section>

        {/* Professional Certifications */}
        <h2 className={s.sectionHeader}>Professional Certifications</h2>
        <section className={s.grid2} style={{ marginBottom: "40px" }}>
          <Link
            to="/programs/cma-india"
            className={s.card}
            id="cma-india"
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
          >
            <span className={s.badgeGold}>ICMAI</span>
            <h3 className={s.sectionHeader} style={{ fontSize: "20px", marginBottom: "16px" }}>
              CMA (India)
            </h3>
            <p className={s.listText}>
              A professional cost and management certification course in India helping learners
              build deep expertise in cost audit, financial planning, management accounting, and
              strategic decision-making. Very popular for corporate accounting leadership roles.
            </p>
          </Link>
          <Link
            to="/programs/cma-usa"
            className={s.card}
            id="cma-usa"
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
          >
            <span className={s.badgeGold}>IMA USA</span>
            <h3 className={s.sectionHeader} style={{ fontSize: "20px", marginBottom: "16px" }}>
              CMA (USA)
            </h3>
            <p className={s.listText}>
              A globally accepted professional certification course from the Institute of Management
              Accountants (IMA), USA. Equips scholars with critical management skills, corporate
              finance knowledge, and global accounting practices, enabling fast-track MNC
              placements.
            </p>
          </Link>
        </section>

        {/* Certification Programs */}
        <h2 className={s.sectionHeader} id="certifications">
          Specialized Industry Certifications
        </h2>
        <section className={s.grid3} style={{ marginBottom: "48px" }}>
          <Link
            to="/programs/digital-marketing"
            className={s.card}
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
          >
            <span className={s.badgeGold}>Marketing</span>
            <h4 className={s.sectionHeader} style={{ fontSize: "18px", marginBottom: "12px" }}>
              Digital Marketing
            </h4>
            <p className={s.listText} style={{ fontSize: "13.5px" }}>
              Covers online marketing strategies including SEO, SEM, display advertising, paid
              social ads, video campaigns, and social media posting for high conversion.
            </p>
          </Link>
          <Link
            to="/programs/lean-six-sigma"
            className={s.card}
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
          >
            <span className={s.badgeGold}>Operations</span>
            <h4 className={s.sectionHeader} style={{ fontSize: "18px", marginBottom: "12px" }}>
              Lean Six Sigma
            </h4>
            <p className={s.listText} style={{ fontSize: "13.5px" }}>
              Combines Lean enterprise waste reduction with Six Sigma process defect elimination to
              improve overall employee and company operations efficiency.
            </p>
          </Link>
          <Link
            to="/programs/bi-data-visualization"
            className={s.card}
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
          >
            <span className={s.badgeGold}>Data Analytics</span>
            <h4 className={s.sectionHeader} style={{ fontSize: "18px", marginBottom: "12px" }}>
              BI & Data Visualization
            </h4>
            <p className={s.listText} style={{ fontSize: "13.5px" }}>
              Graphical representation of data patterns and changes using charts, maps, and plots to
              make complex corporate datasets easier to understand and utilize.
            </p>
          </Link>
          <Link
            to="/programs/business-analytics"
            className={s.card}
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
          >
            <span className={s.badgeGold}>Analytics</span>
            <h4 className={s.sectionHeader} style={{ fontSize: "18px", marginBottom: "12px" }}>
              Business Analytics
            </h4>
            <p className={s.listText} style={{ fontSize: "13.5px" }}>
              Transforms raw datasets into business intelligence using data mining, predictive
              modeling, forecasting simulations, and optimization tools.
            </p>
          </Link>
          <Link
            to="/programs/financial-analytics"
            className={s.card}
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
          >
            <span className={s.badgeGold}>Finance</span>
            <h4 className={s.sectionHeader} style={{ fontSize: "18px", marginBottom: "12px" }}>
              Financial Analytics
            </h4>
            <p className={s.listText} style={{ fontSize: "13.5px" }}>
              Utilizes data analytics tools to evaluate organization performance, balance sheet
              data, and predict/optimize future corporate financial health.
            </p>
          </Link>
          <Link
            to="/programs/hr-analytics"
            className={s.card}
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
          >
            <span className={s.badgeGold}>Human Resources</span>
            <h4 className={s.sectionHeader} style={{ fontSize: "18px", marginBottom: "12px" }}>
              HR Analytics
            </h4>
            <p className={s.listText} style={{ fontSize: "13.5px" }}>
              Uses data-driven HR strategies to support employee productivity, leading up to a 25%
              rise in productivity, 50% decrease in attrition, and 80% recruiting efficiency.
            </p>
          </Link>
          <Link
            to="/programs/data-science-tally-gst"
            className={s.card}
            style={{ textDecoration: "none", color: "inherit", display: "block", gridColumn: "span 3" }}
          >
            <span className={s.badgeGold}>Accounting & Compliance</span>
            <h4 className={s.sectionHeader} style={{ fontSize: "18px", marginBottom: "12px" }}>
              Data Science, Tally & GST
            </h4>
            <p className={s.listText} style={{ fontSize: "14px" }}>
              Unlocks the potential of data-driven insights with our core data science program.
              Combine it with Tally ERP and GST tax compliance courses to gain hands-on proficiency
              in corporate financial accounting and taxation.
            </p>
          </Link>
        </section>

        {/* Global Business English Certificate */}
        <Link
          to="/programs/bec"
          className={s.card}
          style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "48px" }}
        >
          <span className={s.badgeGreen}>Communication Skills</span>
          <h2 className={s.sectionHeader}>Business English Certificate (BEC)</h2>
          <p className={s.listText}>
            In furtherance of enhancing the career prospects of our students and improving their
            work-readiness, we provide various globally accepted Business English Certificate
            Programs to our students. These programs focus on intensifying communication skills in
            business, corporate drafting, mock interview interaction, and professional presentation
            capability. Click to learn more.
          </p>
        </Link>
      </div>
    </main>
  );
}
