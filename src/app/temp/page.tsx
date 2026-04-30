import HeroSection from "@/components/common/HeroSection/HeroSection";
import MissionSection from "@/components/common/MissionSection/MissionSection";
import VideoTeaserSection from "@/components/common/VideoTeaserSection/VideoTeaserSection";
import CommitmentsSection from "@/components/common/CommitmentsSection/CommitmentsSection";
import FocusAreasSection from "@/components/common/FocusAreasSection/FocusAreasSection";
import CtaSection from "@/components/common/CtaSection/CtaSection";

const COMMITMENTS = [
  {
    title: "Fundamentals",
    description: "We never compromise on safety, and we expect everyone to follow our rules, procedures, and training. Appropriate PPE is always worn while at work.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L3 7v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-9-5z" />
      </svg>
    )
  },
  {
    title: "Pedestrian Protection",
    description: "We provide dedicated walkways and separation from mobile equipment. Everyone must use designated walkways and adhere to traffic management rules.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4a2 2 0 100-4 2 2 0 000 4zM6 10h12v12h-3v-7h-6v7H6V10z" />
      </svg>
    )
  },
  {
    title: "Working at Heights",
    description: "When working at height is unavoidable, we ensure that correct safety equipment is provided and used. Fall protection systems are non-negotiable.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 20h18M5 20v-8M19 20v-8M9 20V8M15 20V8M9 8h6v4H9V8zM12 8V4M10 4h4" />
      </svg>
    )
  },
  {
    title: "Handling Loads",
    description: "We ensure that all loads are secure and handled with care using appropriate lifting equipment. Never stand under a suspended load.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v6M9 8h6l-3 4-3-4zM5 16h14M7 16v6M17 16v6M7 20h10" />
      </svg>
    )
  },
  {
    title: "Mobile Equipment",
    description: "We ensure all mobile equipment is well-maintained and operated safely. Drivers must wear seatbelts and obey speed limits and traffic rules.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 16h14v-6l-3-4H8l-3 4v6zM8 20a2 2 0 100-4 2 2 0 000 4zM16 20a2 2 0 100-4 2 2 0 000 4zM5 10h14" />
      </svg>
    )
  },
  {
    title: "Energy Isolation",
    description: "We ensure that all energy sources are isolated, locked, and tagged out before any maintenance or repair work is performed.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="7" y="11" width="10" height="10" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11V7a3 3 0 00-6 0v4M12 15v2" />
      </svg>
    )
  }
];

const FOCUS_AREAS = [
  {
    id: "education",
    tabLabel: "Education",
    cardTitle: "EDUCATION AND COMPETENCY",
    cardDescription: "We are investing in a wide range of training to build a highly skilled workforce. We continually invest in our people and believe continuous education builds confidence and competence in our operational environments.",
    image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=800&q=80"
  },
  {
    id: "contractor",
    tabLabel: "Contractor Management",
    cardTitle: "CONTRACTOR MANAGEMENT",
    cardDescription: "We ensure our contractors adhere to the same stringent health and safety standards as our own employees, fostering a safe environment for everyone across all projects and operational sites.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80"
  },
  {
    id: "emergency",
    tabLabel: "Emergency Scenarios",
    cardTitle: "EMERGENCY SCENARIOS",
    cardDescription: "We are prepared for any situation with comprehensive emergency response plans and regular drills to ensure swift and effective action when needed, minimizing risk to our people and assets.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80"
  },
  {
    id: "legislative",
    tabLabel: "Legislative Navigation",
    cardTitle: "LEGISLATIVE NAVIGATION",
    cardDescription: "We stay ahead of regulatory changes, ensuring full compliance with local and international health and safety laws in all our operations, maintaining our license to operate globally.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
  },
  {
    id: "change",
    tabLabel: "Change Management",
    cardTitle: "CHANGE MANAGEMENT",
    cardDescription: "We carefully manage organizational changes to ensure that health and safety considerations are integrated into all new processes, systems, and operational expansions from day one.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
  },
  {
    id: "technology",
    tabLabel: "Technology Solutions",
    cardTitle: "TECHNOLOGY SOLUTIONS",
    cardDescription: "We leverage cutting-edge technology to monitor safety performance, identify risks proactively, and continuously improve our safety management systems through data-driven insights.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
  }
];

export default function TempPage() {
  return (
    <main style={{ backgroundColor: "#fff" }}>
      <HeroSection 
        breadcrumb="Home > Health and Safety"
        title="Health and Safety"
        description="We are committed to protecting the health and safety of our people, our customers and our communities. We ensure that our health and safety strategy enables agile policies, guidelines and systems alongside ensuring proactive safety interventions across all our operational environments."
        bgImage="https://images.unsplash.com/photo-1682686580224-cd46ea1a6950?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <MissionSection 
        label="Our Mission"
        title="Zero Harm Everyday"
      >
        <p>
          We envision a 'Zero Harm Everyday' future, where everyone who works at, or visits, our 
          terminals returns home safely. This is more than just a tagline – it's a core value that 
          is deeply embedded in our operations and underpins our strategy for keeping people safe.
        </p>
        <p>
          Health and safety is at the heart of our operations, and we expect everyone who works with 
          us, or visits us, to take responsibility for their own safety and that of others.{" "}
          <a href="#learn-more">Learn more.</a>
        </p>
      </MissionSection>

      <VideoTeaserSection 
        label="Safe Together at DP World"
        title="Prioritising Safety is Everyone's Responsibility."
        description="Safety at DP World is a non-negotiable. It's an integral part of our operational excellence. It is our collective commitment to act with the highest standards of integrity, accountability and to actively involve and consult with our people, respecting their input in every decision."
      />

      <CommitmentsSection 
        label="Safe Together"
        title="Commitments We Live By"
        items={COMMITMENTS}
      />

      <FocusAreasSection 
        title="Focus Areas"
        description="Guiding the strategic priority of the Health and Safety execution across our business to establish a cohesive framework and standard performance expectations for our business."
        areas={FOCUS_AREAS}
      />

      <CtaSection 
        title="Explore our end-to-end solutions"
        description="Discover our full range of supply chain solutions from origin to destination."
        buttonText="Learn more"
        buttonLink="#solutions"
        bgImage="https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </main>
  );
}