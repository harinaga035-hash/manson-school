import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import s from "./Pages.module.css";
import { useModals } from "../components/ModalProvider";
import { ArrowRight, Download } from "lucide-react";

export function AdmissionsPage() {
  const { hash } = useLocation();
  const { open } = useModals();

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
          <span className={s.pageSubtitle}>Admissions 2026</span>
          <h1 className={s.pageTitle}>Apply to Manson School of Business</h1>
        </header>

        {/* Admissions Status banner */}
        <section
          className={s.card}
          style={{
            background: "rgba(11, 61, 46, 0.03)",
            border: "1px solid rgba(11, 61, 46, 0.08)",
            textAlign: "center",
          }}
        >
          <span className={s.badgeGold}>Enrollment Open</span>
          <h2 className={s.sectionHeader} style={{ marginBlock: "8px 16px" }}>
            BBA | MBA | B.Com Admissions Are Open For 2026
          </h2>
          <p
            className={s.listText}
            style={{ marginBottom: "24px", maxWidth: "80ch", marginInline: "auto" }}
          >
            Begin your business journey with Hyderabad's premier B-school. Manson Center of
            Excellence provides a vibrant, mentorship-driven learning environment tailored to
            corporate readiness.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <button className={s.ctaPrimary} onClick={() => open("enquire")}>
              Enquire Now <ArrowRight size={16} />
            </button>
            <button className={s.ctaGhost} onClick={() => open("brochure")}>
              Download Brochure <Download size={16} />
            </button>
          </div>
        </section>

        {/* Eligibility Criteria table */}
        <h2 className={s.sectionHeader} id="eligibility">
          Eligibility Criteria
        </h2>
        <div className={s.tableWrapper}>
          <table className={s.table}>
            <thead>
              <tr>
                <th>Program</th>
                <th>Duration</th>
                <th>Academic Requirements</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>BBA (Bachelor of Business Administration)</strong>
                </td>
                <td>3 Years</td>
                <td>
                  10+2 / Intermediate or equivalent from a recognized board in any discipline.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>B.Com (Bachelor of Commerce)</strong>
                </td>
                <td>3 Years</td>
                <td>
                  10+2 / Intermediate or equivalent from a recognized board with
                  Commerce/Maths/Arts/Science.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>MBA (Master of Business Administration)</strong>
                </td>
                <td>2 Years</td>
                <td>
                  Graduation in any stream from a recognized university. Candidates awaiting results
                  are also eligible.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>CMA Certification (India/USA)</strong>
                </td>
                <td>Integrated / Independent</td>
                <td>Can be pursued concurrently with Undergraduate Degree or Post-Graduation.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Step-by-Step Admissions Process */}
        <section className={s.card} id="process">
          <h2 className={s.sectionHeader}>Admissions Process</h2>
          <div className={s.list}>
            <div className={s.listItem}>
              <div className={s.listDot} />
              <div className={s.listText}>
                <strong>Step 1: Submission of Enquiry</strong>
                <p style={{ margin: "4px 0 0 0", color: "#666" }}>
                  Submit an online enquiry via the "Enquire Now" portal or visit the Begumpet campus
                  office.
                </p>
              </div>
            </div>
            <div className={s.listItem}>
              <div className={s.listDot} />
              <div className={s.listText}>
                <strong>Step 2: Career Counselling Session</strong>
                <p style={{ margin: "4px 0 0 0", color: "#666" }}>
                  Our expert advisors will guide you through courses, specializations, and career
                  connection paths.
                </p>
              </div>
            </div>
            <div className={s.listItem}>
              <div className={s.listDot} />
              <div className={s.listText}>
                <strong>Step 3: Eligibility & Document Verification</strong>
                <p style={{ margin: "4px 0 0 0", color: "#666" }}>
                  Provide educational credentials, identity proof, and academic records for
                  verification.
                </p>
              </div>
            </div>
            <div className={s.listItem}>
              <div className={s.listDot} />
              <div className={s.listText}>
                <strong>Step 4: Provisional Seat Booking</strong>
                <p style={{ margin: "4px 0 0 0", color: "#666" }}>
                  Pay the booking fee through our secure Payment Gateway to lock your seat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fee & Scholarships */}
        <section className={s.grid2} id="scholarships" style={{ marginBottom: "48px" }}>
          <div className={s.card}>
            <span className={s.badgeGold}>Financing</span>
            <h3 className={s.sectionHeader} style={{ fontSize: "20px", marginBottom: "16px" }}>
              Fee Structure & Payments
            </h3>
            <p className={s.listText} style={{ marginBottom: "16px" }}>
              Manson offers flexible, installment-based fee plans to support students from all
              financial backgrounds. Seats can be locked with a provisional booking fee.
            </p>
            <p className={s.listText}>
              All tuition fee transactions are processed securely through our verified{" "}
              <strong>Payment Gateway</strong> integration.
            </p>
          </div>
          <div className={s.card}>
            <span className={s.badgeGold}>Financial Aid</span>
            <h3 className={s.sectionHeader} style={{ fontSize: "20px", marginBottom: "16px" }}>
              Merit Scholarships
            </h3>
            <p className={s.listText} style={{ marginBottom: "16px" }}>
              To nurture brilliant minds, MSB offers merit-based fee concessions and scholarship
              assistance to students who demonstrate exemplary scores in:
            </p>
            <div className={s.list} style={{ gap: "8px" }}>
              <div className={s.listItem}>
                <div className={s.listDot} />
                <span className={s.listText} style={{ fontSize: "13px" }}>
                  National or State Board intermediate/10+2 examinations.
                </span>
              </div>
              <div className={s.listItem}>
                <div className={s.listDot} />
                <span className={s.listText} style={{ fontSize: "13px" }}>
                  Academic entrance assessment scores.
                </span>
              </div>
              <div className={s.listItem}>
                <div className={s.listDot} />
                <span className={s.listText} style={{ fontSize: "13px" }}>
                  Outstanding achievements in sports or extracurricular events.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Important Dates Timeline */}
        <section className={s.card} id="dates" style={{ marginBottom: "48px" }}>
          <span className={s.badgeGold}>Calendar 2026</span>
          <h2 className={s.sectionHeader} style={{ display: "block" }}>
            Important Admissions Dates
          </h2>
          <p className={s.listText} style={{ marginBottom: "32px" }}>
            Applications are reviewed on a rolling basis. Early applicants receive priority
            consideration for merit-based scholarships.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "24px",
              position: "relative",
            }}
          >
            <div
              style={{
                background: "#faf8f4",
                padding: "20px",
                borderRadius: "12px",
                borderLeft: "4px solid #0b3d2e",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: "700",
                  color: "#c9a227",
                  textTransform: "uppercase",
                }}
              >
                Phase 1
              </span>
              <h4
                style={{
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#0b3d2e",
                  margin: "4px 0 8px 0",
                }}
              >
                Early Admissions
              </h4>
              <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>
                <strong>Status:</strong> Completed
              </p>
              <p style={{ fontSize: "12px", color: "#888", margin: "4px 0 0 0" }}>
                Oct 15, 2025 – Jan 31, 2026
              </p>
            </div>

            <div
              style={{
                background: "#faf8f4",
                padding: "20px",
                borderRadius: "12px",
                borderLeft: "4px solid #c9a227",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: "700",
                  color: "#0b3d2e",
                  textTransform: "uppercase",
                }}
              >
                Phase 2
              </span>
              <h4
                style={{
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#0b3d2e",
                  margin: "4px 0 8px 0",
                }}
              >
                Standard Admissions
              </h4>
              <p style={{ fontSize: "13px", color: "#0b3d2e", margin: 0 }}>
                <strong>Status:</strong> Open (Enrolling)
              </p>
              <p style={{ fontSize: "12px", color: "#888", margin: "4px 0 0 0" }}>
                Feb 1, 2026 – Jun 30, 2026
              </p>
            </div>

            <div
              style={{
                background: "#faf8f4",
                padding: "20px",
                borderRadius: "12px",
                borderLeft: "4px solid rgba(12, 22, 18, 0.15)",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: "700",
                  color: "#747470",
                  textTransform: "uppercase",
                }}
              >
                Orientation
              </span>
              <h4
                style={{
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#0c1612",
                  margin: "4px 0 8px 0",
                }}
              >
                Academic Commencement
              </h4>
              <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>
                <strong>Status:</strong> Scheduled
              </p>
              <p style={{ fontSize: "12px", color: "#888", margin: "4px 0 0 0" }}>August 2026</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
