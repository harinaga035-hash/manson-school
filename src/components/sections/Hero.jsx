import {
  ArrowRight,
  Download,
  Award,
  TrendingUp,
  Users,
  Building2,
  ShieldCheck,
  Star,
  UserCheck,
  GraduationCap,
} from "lucide-react";
import s from "./Hero.module.css";
import heroImg from "@/assets/hero-campus.jpg";
import { useModals } from "../ModalProvider";
import { useCounter } from "@/hooks/useCounter";

function Stat({ value, suffix, prefix, label, icon: Icon, immediate = false }) {
  const { ref, value: n } = useCounter(value, 1800, immediate);
  return (
    <div className={s.statCard}>
      <div className={s.statIcon}>
        <Icon size={20} />
      </div>
      <div className={s.statText}>
        <span className={s.statVal}>
          {prefix}
          <span ref={ref}>{n}</span>
          {suffix}
        </span>
        <span className={s.statLbl}>{label}</span>
      </div>
    </div>
  );
}

export function Hero() {
  const { open } = useModals();

  return (
    <section className={s.hero} id="root">
      <div className={s.inner}>
        {/* Left Side: Premium Editorial Content */}
        <div className={s.contentSide}>
          {/* Top Badge: HYDERABAD'S Best B-SCHOOL • Admissions Open 2026 */}
          <div className={s.badge}>
            <div className={s.badgeStarIcon}>
              <Star size={12} fill="currentColor" />
            </div>
            <span className={s.badgeText}>
              HYDERABAD'S Best B-SCHOOL <span className={s.badgeDot}>•</span> ADMISSIONS OPEN 2026
            </span>
          </div>

          <h1 className={s.title}>MANSON SCHOOL OF BUSINESS</h1>
          <p className={s.sub}>WELCOME TO HYDERABAD'S 1ST B-SCHOOL</p>
          <div className={s.capsule}>
            <p className={s.capsuleHeading}>BBA | MBA | B.Com Admissions Open 2026</p>
            <span className={s.capsuleCta}>Begin Your Journey With Us.</span>
          </div>

          <div className={s.ctas}>
            <button className={s.ctaPrimary} onClick={() => open("enquire")}>
              Apply Now 2026 <ArrowRight size={18} className={s.arrowIcon} />
            </button>
            <button className={s.ctaGhost} onClick={() => open("brochure")}>
              <Download size={18} /> Download Prospectus
            </button>
          </div>
        </div>

        {/* Right Side: Campus Image placeholder in grid */}
        <div className={s.rightPlaceholder} />
      </div>

      {/* Flagship Campus Visual (Full bleed to the right edge) */}
      <div className={s.visualSide}>
        <img
          src={heroImg}
          alt="Manson School of Business Flagship Campus"
          className={s.campusImg}
        />
        <div className={s.imageOverlay} />
      </div>

      {/* Floating Statistics Card */}
      <div className={s.stats}>
        <div className={s.statsInner}>
          <Stat value={98} suffix="%" label="Placement Rate" icon={UserCheck} immediate={true} />
          <div className={s.statsDivider} />
          <Stat
            value={11}
            prefix="₹"
            suffix=" LPA"
            label="Highest Package"
            icon={GraduationCap}
            immediate={true}
          />
          <div className={s.statsDivider} />
          <Stat
            value={6.5}
            prefix="₹"
            suffix=" LPA"
            label="Average Package"
            icon={ShieldCheck}
            immediate={true}
          />
          <div className={s.statsDivider} />
          <Stat value={11} suffix="+" label="Top Recruiters" icon={Building2} immediate={true} />
          <div className={s.statsDivider} />
          <Stat value={700} suffix="+" label="Alumni Network" icon={Users} immediate={true} />
        </div>
      </div>

    </section>
  );
}
