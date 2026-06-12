import { Hero } from "../components/sections/Hero";
import { WhyMSB } from "../components/sections/WhyMSB";
import { Programs } from "../components/sections/Programs";
import { Placements } from "../components/sections/Placements";
import { IndustryConnect } from "../components/sections/IndustryConnect";
import { Faculty } from "../components/sections/Faculty";
import { Awards } from "../components/sections/Awards";
import { Gallery } from "../components/sections/Gallery";
import { AdmissionsCTA } from "../components/sections/AdmissionsCTA";
import { Testimonials } from "../components/sections/Testimonials";
import { InstitutionHighlights } from "../components/sections/InstitutionHighlights";


export function Home() {
  return (
    <div style={{ width: "100%", overflow: "hidden", minHeight: "100vh" }}>
      <Hero />
      <InstitutionHighlights />
      <WhyMSB />
      <Programs />
      <Placements />
      <IndustryConnect />
      <Faculty />
      <Awards />
      <Gallery />
      <AdmissionsCTA />
      <Testimonials />
    </div>
  );
}
