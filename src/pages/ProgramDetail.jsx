import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ChevronDown,
  Download,
  ArrowRight,
  GraduationCap,
  CheckCircle2,
  Calendar,
  BookOpen,
  Briefcase,
  Users,
  Award,
  Sparkles,
} from "lucide-react";
import { PROGRAMS_DATA } from "@/lib/programs-data";
import { useModals } from "@/components/ModalProvider";
import s from "./Pages.module.css";
import sd from "./ProgramDetail.module.css";

export function ProgramDetail() {
  const { programId } = useParams();
  const { open } = useModals();
  const [openSemesters, setOpenSemesters] = useState({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [programId]);

  const program = PROGRAMS_DATA[programId];

  // Default admission steps if program-specific ones are not defined
  const defaultAdmissionSteps = [
    { title: "Step 1: Inquiry Submission", desc: "Submit an online enquiry or apply directly via our portal." },
    { title: "Step 2: Profile Evaluation", desc: "MSB admissions panel reviews academic qualifications." },
    { title: "Step 3: Counseling & Interview", desc: "Brief interaction session with academics/admissions officers." },
    { title: "Step 4: Admission Confirmed", desc: "Securing the seat by completing verification and fees clearance." }
  ];

  if (!program) {
    return (
      <main className={s.page}>
        <div className={s.container} style={{ textAlign: "center", padding: "100px 20px" }}>
          <header className={s.pageHeader}>
            <span className={s.pageSubtitle}>Error 404</span>
            <h1 className={s.pageTitle}>Program Not Found</h1>
          </header>
          <p className={s.listText} style={{ marginBottom: "32px", fontSize: "16px" }}>
            The academic program or certification you are looking for does not exist or has been moved.
          </p>
          <Link to="/programs" className={sd.sidebarCtaPrimary} style={{ display: "inline-flex", width: "auto" }}>
            <ArrowLeft size={16} /> View All Programs
          </Link>
        </div>
      </main>
    );
  }

  const toggleSemester = (index) => {
    setOpenSemesters((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <main className={s.page}>
      <div className={s.container}>
        {/* Back navigation */}
        <Link to="/programs" className={sd.backBtn}>
          <ArrowLeft size={14} /> Back to Programs
        </Link>

        {/* Hero Header */}
        <header className={s.pageHeader} style={{ padding: "20px 0 40px" }}>
          <span className={s.badgeGold} style={{ marginBottom: "16px" }}>
            {program.type}
          </span>
          <h1 className={s.pageTitle} style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            {program.title}
          </h1>
        </header>

        {/* Quick Stats/Specs Row */}
        <section className={sd.specsGrid}>
          <div className={sd.specCard}>
            <span className={sd.specLbl}>Duration</span>
            <span className={sd.specVal}>{program.duration}</span>
          </div>
          <div className={sd.specCard}>
            <span className={sd.specLbl}>Eligibility</span>
            <span className={sd.specVal} style={{ fontSize: "14px" }}>
              {program.eligibility}
            </span>
          </div>
          <div className={sd.specCard}>
            <span className={sd.specLbl}>Level</span>
            <span className={sd.specVal}>{program.type.split(" ")[0]}</span>
          </div>
        </section>

        {/* Two Column Details Layout */}
        <div className={sd.detailGrid}>
          {/* Main Body Column */}
          <div className={sd.detailBody}>
            {/* Overview */}
            <section className={s.card} id="overview">
              <h2 className={s.sectionHeader}>Program Overview</h2>
              <p className={s.listText} style={{ fontSize: "16px", lineHeight: "1.75" }}>
                {program.overview}
              </p>
            </section>

            {/* Key Highlights */}
            <section className={s.card} id="highlights">
              <h2 className={s.sectionHeader}>Key Highlights</h2>
              <div className={s.list}>
                {program.highlights.map((h, i) => (
                  <div key={i} className={s.listItem}>
                    <div className={s.listDot} style={{ background: "#0b3d2e" }} />
                    <span className={s.listText} style={{ fontSize: "15px", fontWeight: "500" }}>{h}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Curriculum structure */}
            <section className={s.card} id="curriculum">
              <h2 className={s.sectionHeader}>Curriculum Structure</h2>
              <p className={s.listText} style={{ marginBottom: "20px" }}>
                Click on each semester or module block below to view the courses and papers covered under this program curriculum.
              </p>
              <div className={sd.curriculumAccordion}>
                {program.curriculum.map((sem, index) => {
                  const isOpen = !!openSemesters[index];
                  return (
                    <div className={sd.accordionItem} key={index}>
                      <button
                        className={`${sd.accordionHeader} ${isOpen ? sd.accordionHeaderActive : ""}`}
                        onClick={() => toggleSemester(index)}
                      >
                        <span>{sem.semester}</span>
                        <ChevronDown size={18} className={sd.accordionIcon} />
                      </button>
                      {isOpen && (
                        <div className={sd.accordionContent}>
                          <ul className={sd.courseList}>
                            {sem.courses.map((course, cIdx) => (
                              <li className={sd.courseItem} key={cIdx}>
                                <div className={sd.courseDot} />
                                <span>{course}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Learning Outcomes */}
            <section className={s.card} id="outcomes">
              <h2 className={s.sectionHeader}>Learning Outcomes</h2>
              <div className={s.list}>
                {program.outcomes.map((out, i) => (
                  <div key={i} className={s.listItem}>
                    <CheckCircle2 size={18} style={{ color: "#c9a227", flexShrink: 0, marginTop: "2px" }} />
                    <span className={s.listText} style={{ fontSize: "15px" }}>{out}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Career Opportunities */}
            <section className={s.card} id="careers">
              <h2 className={s.sectionHeader}>Career Opportunities</h2>
              <p className={s.listText} style={{ marginBottom: "20px" }}>
                Graduates of the {program.shortName} program are highly sought-after in both consulting firms and global MNCs. Potential professional roles include:
              </p>
              <div className={s.grid2} style={{ margin: "0 0 24px 0" }}>
                {program.careers.map((role, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#faf8f4",
                      padding: "16px 20px",
                      borderRadius: "8px",
                      border: "1px solid rgba(12, 22, 18, 0.04)",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <Briefcase size={18} style={{ color: "#0b3d2e" }} />
                    <span style={{ fontSize: "14.5px", fontWeight: "700", color: "#0b3d2e" }}>
                      {role}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Placement Support */}
            <section className={s.card} id="placement-support">
              <h2 className={s.sectionHeader}>Placement Support</h2>
              <p className={s.listText} style={{ marginBottom: "20px" }}>
                At Manson School of Business, placements are structured as a continuous exercise rather than a seasonal drive. Our Placement Cell provides:
              </p>
              <div className={s.list}>
                <div className={s.listItem}>
                  <div className={s.listDot} />
                  <span className={s.listText}>
                    <strong>1:1 Corporate Mentorship</strong>: Connect with working professionals from the first semester.
                  </span>
                </div>
                <div className={s.listItem}>
                  <div className={s.listDot} />
                  <span className={s.listText}>
                    <strong>Mock Interviews & Grooming</strong>: Rigorous rounds of mock interviews conducted by HR directors.
                  </span>
                </div>
                <div className={s.listItem}>
                  <div className={s.listDot} />
                  <span className={s.listText}>
                    <strong>Global Recruiting Access</strong>: Exclusive placement portal matching candidates with 150+ recruiting partners.
                  </span>
                </div>
              </div>
            </section>

            {/* Student Benefits & Collaborations */}
            <section className={s.card} id="benefits">
              <h2 className={s.sectionHeader}>Student Benefits & Collaborations</h2>
              {program.collaboration && (
                <div
                  style={{
                    padding: "16px 20px",
                    background: "#e6f0ec",
                    borderRadius: "10px",
                    borderLeft: "4px solid #0b3d2e",
                    marginBottom: "24px",
                  }}
                >
                  <strong style={{ color: "#0b3d2e", fontSize: "14px", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
                    Industry Collaboration
                  </strong>
                  <p className={s.listText} style={{ color: "#0b3d2e" }}>{program.collaboration}</p>
                </div>
              )}
              <div className={s.list}>
                {program.benefits.map((b, i) => (
                  <div key={i} className={s.listItem}>
                    <Sparkles size={16} style={{ color: "#c9a227", flexShrink: 0, marginTop: "4px" }} />
                    <span className={s.listText}>{b}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Admission Process */}
            <section className={s.card} id="admission-process">
              <h2 className={s.sectionHeader}>Admission Process</h2>
              <div className={sd.admissionsTimeline}>
                {(program.admissionProcess || defaultAdmissionSteps).map((step, i) => {
                  const isString = typeof step === "string";
                  return (
                    <div className={sd.timelineStep} key={i}>
                      <div className={sd.timelineDot} />
                      <div className={sd.timelineTitle}>
                        {isString ? `Step ${i + 1}` : step.title || `Step ${i + 1}`}
                      </div>
                      <div className={sd.timelineDesc}>
                        {isString ? step : step.desc || ""}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Sidebar CTA Column */}
          <aside className={sd.sidebarCard}>
            <h3 className={sd.sidebarTitle}>Admissions 2026</h3>
            <p className={s.listText} style={{ fontSize: "13px", marginBottom: "20px" }}>
              Enroll in {program.shortName} and kickstart your corporate leadership journey with Manson School of Business.
            </p>
            <div className={sd.ctaList}>
              <button className={sd.sidebarCtaPrimary} onClick={() => open("enquire")}>
                Apply Now <ArrowRight size={16} />
              </button>
              <button className={sd.sidebarCtaGhost} onClick={() => open("brochure")}>
                <Download size={16} /> Download Brochure
              </button>
              <button className={sd.sidebarCtaGhost} onClick={() => open("enquire")}>
                Enquire Now
              </button>
            </div>
            <div
              style={{
                marginTop: "24px",
                paddingTop: "20px",
                borderTop: "1px solid rgba(12, 22, 18, 0.06)",
                textAlign: "center",
              }}
            >
              <span style={{ fontSize: "11px", fontWeight: "700", color: "#8e8e88", textTransform: "uppercase" }}>
                Need Help?
              </span>
              <a
                href="tel:+918074512062"
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#0b3d2e",
                  marginTop: "6px",
                  textDecoration: "none",
                }}
              >
                +91 80745 12062
              </a>
            </div>
          </aside>
        </div>

        {/* Premium Faculty Section */}
        <section style={{ marginTop: "32px", marginBottom: "60px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span className="msb-eyebrow">Expert Faculty</span>
            <h2 className={s.sectionHeader} style={{ fontSize: "28px", marginTop: "8px" }}>
              Academic Leaders & Mentors
            </h2>
            <p className={s.listText} style={{ maxWidth: "60ch", margin: "8px auto 0" }}>
              Learn from cost accounts practitioners, leadership mentors, and corporate specialists dedicated to student excellence.
            </p>
          </div>

          <div className={sd.facultyGrid}>
            {program.faculty && program.faculty.length > 0 ? (
              program.faculty.map((f, index) => (
                <article className={sd.facultyCard} key={index}>
                  <div className={sd.facultyFrame}>
                    {f.img ? (
                      <img src={f.img} alt={f.name} className={sd.facultyImg} />
                    ) : (
                      <div className={sd.photoPlaceholder}>
                        <Users size={32} />
                        <span className={sd.photoPendingTag}>Photo Pending</span>
                      </div>
                    )}
                  </div>
                  <h3 className={sd.facultyName}>{f.name}</h3>
                  <span className={sd.facultyRole}>{f.role}</span>
                  <div className={sd.facultyQuals}>{f.qualification}</div>
                  <div className={sd.facultyExp}>{f.experience} Experience</div>
                  <div className={sd.facultyDivider} />
                  <p className={sd.facultyBio}>{f.bio}</p>
                </article>
              ))
            ) : (
              // Fallback placeholder card if no faculty defined
              <article className={sd.facultyCard}>
                <div className={sd.facultyFrame}>
                  <div className={sd.photoPlaceholder}>
                    <Users size={32} />
                    <span className={sd.photoPendingTag}>Placeholder</span>
                  </div>
                </div>
                <h3 className={sd.facultyName}>Academic Instructor</h3>
                <span className={sd.facultyRole}>Lecturer</span>
                <div className={sd.facultyQuals}>MBA / PhD (Pending Assignment)</div>
                <div className={sd.facultyExp}>10+ Years Experience</div>
                <div className={sd.facultyDivider} />
                <p className={sd.facultyBio}>
                  Highly experienced corporate practitioner specializing in this program stream. Detailed biography pending final workload assignment.
                </p>
              </article>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
