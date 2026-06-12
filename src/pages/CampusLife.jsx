import { useEffect, useState } from "react";
import s from "./Pages.module.css";

// Campus Infrastructure
import campusExteriorImg from "@/assets/campus-exterior.jpg";
import campusLobbyImg from "@/assets/campus-lobby.jpg";
import campusLibraryImg from "@/assets/campus-library.jpg";

// Classroom & Academic Excellence
import academicLectureImg from "@/assets/academic-lecture.jpg";
import academicTeachingImg from "@/assets/academic-teaching.jpg";
import academicDiscussionImg from "@/assets/academic-discussion.jpg";

// Student Life
import studentLoungeImg from "@/assets/student-lounge.jpg";
import studentCourtyardImg from "@/assets/student-courtyard.jpg";
import studentCorridorImg from "@/assets/student-corridor.jpg";

// Events & Celebrations
import eventDanceImg from "@/assets/event-dance.jpg";
import eventEthnicImg from "@/assets/event-ethnic.jpg";
import eventCelebrationImg from "@/assets/event-celebration.jpg";

const categories = [
  {
    id: "infrastructure",
    label: "Campus Infrastructure",
    subtitle: "Modern Physical Facilities",
    desc: "Located in the premium area of Begumpet, Hyderabad (Uma Nagar, Kundanbagh), our campus provides an elegant, modern business school atmosphere tailored to professional development.",
    images: [
      {
        src: campusExteriorImg,
        title: "Begumpet Campus Exterior",
        desc: "The modern building facade of Manson School of Business, surrounded by clean landscaping and lawns."
      },
      {
        src: studentCourtyardImg,
        title: "Green Open Courtyard & Discussion Pods",
        desc: "Scholars gathered in the green open courtyard during breaks, discussing campus updates."
      }
    ],
    features: [
      "Modern premises in Begumpet prime corporate zone",
      "Green courtyard spaces for student interaction and networking",
      "Nearby hostel facilities located walking distance from campus",
      "Proximity to logistics hubs (Begumpet Metro Station and bus stops)"
    ]
  },
  {
    id: "facilities",
    label: "Facilities & Learning Environment",
    subtitle: "Academic Study & Support Spaces",
    desc: "Our state-of-the-art facilities offer scholars comfortable study zones, collaborative reference library spaces, and clean tech-enabled corridors.",
    images: [
      {
        src: campusLobbyImg,
        title: "Glass-Paneled Central Lobby & Staircase",
        desc: "Scholars walking down the bright, glass-paneled central lobby staircase in formal business attire."
      },
      {
        src: campusLibraryImg,
        title: "Academic Reference Library & Study Area",
        desc: "Our quiet reference library housing reference literature, financial publications, and collaborative study desks."
      },
      {
        src: studentCorridorImg,
        title: "Modern Campus Walkways",
        desc: "Students holding textbooks and discussing case study details in clean campus corridors."
      }
    ],
    features: [
      "Well-stocked reference library with industry literature",
      "High-speed student Wifi coverage across corridors and lobby areas",
      "Modern CCTV monitoring for safe, secure premises",
      "Spacious glass lobby and clean corridors for interaction"
    ]
  },
  {
    id: "academics",
    label: "Academic Excellence",
    subtitle: "Active Pedagogy & Facilities",
    desc: "Our active teaching model combines academic theory with industry case studies, providing a comprehensive and challenging learning environment.",
    images: [
      {
        src: academicLectureImg,
        title: "Interactive Lecture Theatre",
        desc: "A wide landscape view of our tier-seated auditorium filled with scholars attending a management lecture."
      },
      {
        src: academicTeachingImg,
        title: "Mentor-Led Classroom Blackboard Instruction",
        desc: "Faculty member guiding students through core business theories on the blackboard in a structured session."
      },
      {
        src: academicDiscussionImg,
        title: "Group Case Discussion on Laptops",
        desc: "Scholars collaborating on project files, financial models, and analytics dashboards using laptops."
      }
    ],
    features: [
      "Role-play exercises and interactive business simulation games",
      "Highly interactive sessions and two-way learning models",
      "Enriched industry audits, seminars, and research guidance",
      "Case study methodology and tech-enabled digital classrooms"
    ]
  },
  {
    id: "studentlife",
    label: "Student Life",
    subtitle: "Vibrant Community & Peer Engagement",
    desc: "Life at MSB extends beyond textbooks. Scholars share ideas in common lounges, build lifelong professional networks, and collaborate in courtyard study pods.",
    images: [
      {
        src: studentLoungeImg,
        title: "Student Discussion Table in Lounge",
        desc: "A peer group of students sitting around a lounge table, exchanging project notes and business ideas."
      },
      {
        src: studentCourtyardImg,
        title: "Courtyard Gathering & Peer Mentorship",
        desc: "Scholars gathered in the green open courtyard during breaks, discussing campus life and fests."
      },
      {
        src: studentCorridorImg,
        title: "Walkway Group Discussion",
        desc: "Students holding textbooks and discussing details in the clean, modern campus walkways."
      }
    ],
    features: [
      "A strong, supportive mentor-mentee relationship",
      "Vibrant common study lounges and discussion areas",
      "Lively interactions and warm, open staff support",
      "Fun-filled student activities and peer networking"
    ]
  },
  {
    id: "events",
    label: "Events & Celebrations",
    subtitle: "Rich Culture & Institutional Fests",
    desc: "Manson hosts a variety of fests, cultural programs, and celebration ceremonies that honor diverse backgrounds and foster team spirit.",
    images: [
      {
        src: eventDanceImg,
        title: "Traditional Dance at Annual Cultural Fest",
        desc: "Female scholars performing a traditional choreographic group dance on stage in bright saris."
      },
      {
        src: eventEthnicImg,
        title: "Student Group in Festive Attire",
        desc: "A smiling group of students gathered on campus dressed in traditional ethnic wear for celebrations."
      },
      {
        src: eventCelebrationImg,
        title: "Annual Day Seminar Group Pose",
        desc: "Scholars posing together in front of the Annual Day celebration backdrop banner."
      }
    ],
    features: [
      "Annual fests, cultural dance events, and ethnic days",
      "Indelible events that celebrate peer talent and unity",
      "Public speaking platforms, debates, and group discussions",
      "Sustained emphasis on rich cultural adherence"
    ]
  }
];

export function CampusLife() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [activeTab, setActiveTab] = useState("infrastructure");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const activeCategory = categories.find((c) => c.id === activeTab) || categories[0];

  // Reset image index when switching category tabs
  useEffect(() => {
    setActiveImageIndex(0);
  }, [activeTab]);

  // Automatic image rotation (carousel) with smooth transition
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % activeCategory.images.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [activeCategory]);

  return (
    <main className={s.page}>
      <div className={s.container}>
        {/* Header */}
        <header className={s.pageHeader}>
          <span className={s.pageSubtitle}>Campus Experience</span>
          <h1 className={s.pageTitle}>Campus Life at MSB</h1>
        </header>

        {/* Learning Environment description */}
        <section className={s.card} style={{ marginBottom: "40px" }}>
          <h2 className={s.sectionHeader}>Engaging Learning Environment</h2>
          <div className={s.letterContent}>
            <p>
              Manson School of Business fosters a dynamic and lively atmosphere on campus, promoting
              strong mentor-mentee relationships and engaging student interactions. The emphasis on
              faculty with rich academic and industry experience ensures a comprehensive,
              well-rounded learning environment.
            </p>
            <p>
              Located in the premium area of <strong>Begumpet, Hyderabad (Uma Nagar, Kundanbagh)</strong>,
              the campus provides easy access to corporate hubs, allowing our scholars to stay connected with the city's
              business ecosystem. The campus is equipped with modern classrooms, research resources,
              and discussion spaces designed for collaborative learning.
            </p>
          </div>
        </section>

        {/* Core Pillars Grid */}
        <section className={s.grid2} style={{ marginBottom: "40px" }}>
          <div className={s.card}>
            <span className={s.badgeGold}>Approach</span>
            <h3 className={s.sectionHeader} style={{ fontSize: "20px", marginBottom: "16px" }}>
              Practical & Collaborative Learning
            </h3>
            <p className={s.listText}>
              The convergence of academic expertise with industry practices, coupled with a two-way
              learning process between faculty and scholars, highlights a practical and
              collaborative educational approach at Manson.
            </p>
          </div>
          <div className={s.card}>
            <span className={s.badgeGold}>Mentorship</span>
            <h3 className={s.sectionHeader} style={{ fontSize: "20px", marginBottom: "16px" }}>
              Vibrant Mentor-Mentee Bonds
            </h3>
            <p className={s.listText}>
              Scholars are guided closely by mentors and advisors who support them in academic
              studies, career planning, and corporate preparation. Staff and faculty support
              scholars with open arms.
            </p>
          </div>
        </section>

        {/* Interactive Premium Bento-Gallery Section */}
        <h2 className={s.sectionHeader} style={{ marginBottom: "24px" }}>
          Explore the Campus Experience
        </h2>
        <section className={s.card} style={{ padding: "30px", marginBottom: "48px" }}>
          {/* Tabs Navigation */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              borderBottom: "1px solid rgba(12, 22, 18, 0.08)",
              paddingBottom: "16px",
              marginBottom: "24px",
            }}
          >
            {categories.map((cat) => {
              const isActive = cat.id === activeTab;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  style={{
                    padding: "10px 20px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "600",
                    border: isActive ? "none" : "1px solid rgba(201, 162, 39, 0.4)",
                    background: isActive ? "#0b3d2e" : "transparent",
                    color: isActive ? "#ffffff" : "#0b3d2e",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "rgba(11, 61, 46, 0.05)";
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content Split Pane */}
          <div className={s.splitGrid}>
            {/* Left Column: Rotating Image Slider with Smooth Fade */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "380px",
                overflow: "hidden",
                borderRadius: "16px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                background: "#0c1612",
              }}
            >
              {activeCategory.images.map((img, idx) => {
                const isCurrent = idx === activeImageIndex;
                return (
                  <div
                    key={idx}
                    style={{
                      position: "absolute",
                      inset: 0,
                      opacity: isCurrent ? 1 : 0,
                      transition: "opacity 1000ms ease-in-out",
                      zIndex: isCurrent ? 1 : 0,
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />

                  </div>
                );
              })}
            </div>

            {/* Right Column: Context Details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <span className={s.badgeGold}>{activeCategory.subtitle}</span>
                <h3
                  className={s.sectionHeader}
                  style={{ fontSize: "22px", marginBlock: "8px 12px", display: "block" }}
                >
                  {activeCategory.label}
                </h3>
                <p className={s.listText} style={{ lineHeight: "1.65", color: "#4a4a46" }}>
                  {activeCategory.desc}
                </p>
              </div>

              {/* Bullet Features */}
              <div
                style={{
                  background: "#faf8f4",
                  border: "1px dashed rgba(201, 162, 39, 0.3)",
                  borderRadius: "12px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {activeCategory.features.map((feat, i) => (
                  <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <div className={s.listDot} style={{ marginTop: "7px" }} />
                    <span
                      style={{
                        fontSize: "13.5px",
                        fontWeight: "600",
                        color: "#0b3d2e",
                        lineHeight: "1.4",
                      }}
                    >
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
