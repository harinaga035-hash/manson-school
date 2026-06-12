import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Award, Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { PROGRAMS_DATA } from "@/lib/programs-data";
import s from "./Pages.module.css";

const MBA_SPECIALIZATIONS = [
  "mba-digital-marketing-ai",
  "mba-business-analytics-ai",
  "mba-financial-modelling-investment-banking",
  "mba-hr-analytics-leadership",
  "mba-entrepreneurship-startup",
  "mba-supply-chain-operations",
  "mba-banking-fintech-financial-services",
  "mba-international-business-language",
  "mba-healthcare-hospital",
  "mba-retail-luxury-ecommerce"
];

const WHY_CHOOSE_MBA_POINTS = [
  "Industry-Oriented MBA Curriculum",
  "Certifications Along with MBA Degree",
  "Placement & Internship Assistance",
  "Corporate Exposure & Live Projects",
  "Leadership & Personality Development",
  "Industry Expert Sessions",
  "Entrepreneurial & Startup Ecosystem",
  "Soft Skills & Communication Training"
];

export function MbaProgramsOffered() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const specs = MBA_SPECIALIZATIONS.map(id => ({
    id,
    ...PROGRAMS_DATA[id]
  }));

  return (
    <main className={s.page}>
      <div className={s.container}>
        {/* Back navigation */}
        <Link to="/programs" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#747470", fontSize: "14px", marginBottom: "24px", fontWeight: 500 }}>
          &larr; Back to Overview
        </Link>

        {/* Page Header */}
        <header className={s.pageHeader}>
          <span className={s.pageSubtitle}>Postgraduate Programs</span>
          <h1 className={s.pageTitle}>MBA Specializations</h1>
        </header>

        {/* Introduction */}
        <section className={s.card} style={{ textAlign: "center", marginBottom: "48px" }}>
          <p className={s.listText} style={{ fontSize: "16px", maxW: "75ch", marginInline: "auto" }}>
            At MANSON School of Business, the MBA experience goes beyond classroom learning by combining industry certifications, practical exposure, internships, leadership development, and placement-focused training. Explore our 10 future-ready MBA pathways below.
          </p>
        </section>

        {/* Why Choose MBA at Manson Section */}
        <section className={s.card} style={{ border: "1px solid rgba(201, 162, 39, 0.25)", background: "#faf8f4", marginBottom: "56px" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <span className="msb-eyebrow">Why Manson School of Business</span>
            <h2 className={s.sectionHeader} style={{ fontSize: "26px", display: "block", marginTop: "8px" }}>
              Why Choose MBA at Manson School of Business
            </h2>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px"
          }}>
            {WHY_CHOOSE_MBA_POINTS.map((point, index) => (
              <div key={index} style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                background: "#ffffff",
                padding: "16px 20px",
                borderRadius: "12px",
                border: "1px solid rgba(12, 22, 18, 0.05)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.01)"
              }}>
                <CheckCircle2 size={20} style={{ color: "#0b3d2e", flexShrink: 0 }} />
                <span style={{ fontSize: "14.5px", fontWeight: "600", color: "#0c1612" }}>{point}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Programs Offered Grid */}
        <div style={{ marginBottom: "24px" }}>
          <h2 className={s.sectionHeader} style={{ fontSize: "28px" }}>Programs Offered</h2>
        </div>

        <section className={s.grid2} style={{ marginBottom: "64px" }}>
          {specs.map((program) => (
            <Link
              key={program.id}
              to={`/programs/${program.id}`}
              className={s.card}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "32px",
                height: "100%",
                margin: 0
              }}
            >
              <div>
                <span className={s.badgeGreen} style={{ marginBottom: "12px" }}>MBA Specialization</span>
                <h3 className={s.sectionHeader} style={{ fontSize: "20px", display: "block", marginBottom: "12px", textDecoration: "none" }}>
                  {program.shortName}
                </h3>
                <p className={s.listText} style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
                  {program.overview}
                </p>

                {/* Best For Section */}
                <div style={{ marginBottom: "16px" }}>
                  <span style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#8e8e88", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>Best For</span>
                  <span style={{ fontSize: "13.5px", color: "#0b3d2e", fontWeight: "600" }}>{program.bestFor}</span>
                </div>

                {/* Certifications Preview */}
                <div style={{ marginBottom: "24px" }}>
                  <span style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#8e8e88", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>Certifications Included</span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {program.certifications.map((cert, index) => (
                      <span key={index} className={s.badgeGold} style={{ fontSize: "10px", padding: "3px 8px", margin: 0, borderRadius: "4px" }}>
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#0b3d2e", fontWeight: "700", fontSize: "14px", marginTop: "12px", borderTop: "1px solid rgba(12, 22, 18, 0.05)", paddingTop: "16px" }}>
                <span>View Program Details</span> <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
