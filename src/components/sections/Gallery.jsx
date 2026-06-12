import s from "./Gallery.module.css";
import academicLectureImg from "@/assets/academic-lecture.jpg";
import campusExteriorImg from "@/assets/campus-exterior.jpg";
import studentLoungeImg from "@/assets/student-lounge.jpg";
import eventDanceImg from "@/assets/event-dance.jpg";
import placementGroupImg from "@/assets/placement-group.jpg";
import plantVisitImg from "@/assets/industry-visit-plant.jpg";
import seminarPanelImg from "@/assets/corporate-seminar-panel.jpg";
import campusLobbyImg from "@/assets/campus-lobby.jpg";

const tiles = [
  {
    img: academicLectureImg,
    title: "Academic Excellence",
    subtitle: "Interactive Lecture Theatre",
    cap: "Scholars attending a highly interactive business management lecture session in the tier-seated auditorium",
    className: s.tile1,
  },
  {
    img: campusExteriorImg,
    title: "Campus Infrastructure",
    subtitle: "Begumpet Campus Facade",
    cap: "Modern, landscaped academic campus facility located in Begumpet, Hyderabad",
    className: s.tile2,
  },
  {
    img: studentLoungeImg,
    title: "Student Life",
    subtitle: "Collaborative Lounge Study",
    cap: "Scholars engaging in peer group case discussions and collaborative learning in common study lounges",
    className: s.tile3,
  },
  {
    img: eventDanceImg,
    title: "Events & Celebrations",
    subtitle: "Choreographed Cultural Dance",
    cap: "Students performing a traditional choreographic group dance during annual cultural celebrations",
    className: s.tile4,
  },
  {
    img: plantVisitImg,
    title: "Industry Visits",
    subtitle: "Manufacturing Plant Tour",
    cap: "Scholars observing real-time factory operations during an industrial visit and tour",
    className: s.tile5,
  },
  {
    img: seminarPanelImg,
    title: "Corporate Exposure",
    subtitle: "Executive Panel Discussion",
    cap: "Corporate guest speakers conducting an interactive Q&A panel session with scholars on stage",
    className: s.tile6,
  },
  {
    img: placementGroupImg,
    title: "Placements & Success Stories",
    subtitle: "MNC Selection Drive Success",
    cap: "Manson graduates proudly holding their corporate recruitment and selection offer folders",
    className: s.tile7,
  },
  {
    img: campusLobbyImg,
    title: "Facilities & Learning Environment",
    subtitle: "Glass-Paneled Central Lobby",
    cap: "Scholars walking down the bright central lobby staircase in formal business attire",
    className: s.tile8,
  },
];

export function Gallery() {
  return (
    <section className={s.section} id="gallery">
      <div className={s.inner}>
        <header className={s.head}>
          <div>
            <span className="msb-eyebrow">Campus Experience</span>
            <h2 className={s.heading}>
              Where business leadership <em>takes shape.</em>
            </h2>
          </div>
          <p className={s.lede}>
            Explore our state-of-the-art campus, vibrant student community, industrial tours, and placement milestones. A visual journey of life at Manson School of Business.
          </p>
        </header>
        <div className={s.grid}>
          {tiles.map((t, i) => (
            <figure className={`${s.tile} ${t.className || ""}`} key={i}>
              <img src={t.img} alt={t.cap} loading="lazy" />
              <div className={s.capWrapper}>
                <span className={s.tileCategory}>{t.title}</span>
                <h3 className={s.tileTitle}>{t.subtitle}</h3>
                <figcaption className={s.cap}>{t.cap}</figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

