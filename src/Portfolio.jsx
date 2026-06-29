import { useState, useEffect, useRef, useMemo } from "react";
import loveYouGif from "./love-you.gif";
import catGif from "./cat-gif.gif";

const ROLES = ["Frontend Developer", "UX/UI Designer", "Full-Stack Builder", "People Person", "CS Graduate"];

const PROJECTS = [
  {
    title: "Hunar Bazaar",
    tag: "Final Year Project",
    desc: "A skill-exchange platform where users trade services — built full-stack with the MERN stack, featuring authentication, REST APIs, and a responsive React frontend.",
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    color: "#f472b6",
    live: "https://hunar-bazaar-sigma.vercel.app/",
  },
  {
    title: "Night-Sight Enhancer",
    tag: "Computer Vision",
    desc: "Low-light image enhancement app using YOLO-based object detection through a multi-stage upload-to-output pipeline.",
    stack: ["Python", "YOLO", "Computer Vision", "OpenCV"],
    color: "#a78bfa",
    github: "https://github.com/geek-witch/Night-Sight",
  },
  {
    title: "Image Captioning Model",
    tag: "Deep Learning",
    desc: "Deep learning model that generates natural language descriptions for images using a CNN encoder and LSTM decoder architecture.",
    stack: ["Python", "CNN", "LSTM", "Deep Learning"],
    color: "#fb7185",
    github: "https://github.com/ayeshaishere/Neural_Storyteller",
  },
  {
    title: "Airplane Management System",
    tag: "Database Systems",
    desc: "Relational database system to manage flights, bookings, and passengers with complex SQL queries and stored procedures.",
    stack: ["SQL", "Stored Procedures", "Relational DB"],
    color: "#f9a8d4",
  },
];

const SKILLS = {
  Languages: ["JavaScript", "TypeScript", "C++", "Python"],
  Frontend: ["React.js", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
  Backend: ["Node.js", "Express.js"],
  Database: ["MongoDB", "SQL"],
  "People & HR": ["Team Management", "Conflict Resolution", "Onboarding", "Interpersonal Communication"],
  Coordination: ["Event Planning", "Outreach & Calling", "Scheduling", "Cross-team Collaboration"],
  Tools: ["Git", "GitHub", "VS Code", "AWS", "Figma", "Canva", "MS Office", "Google Workspace"],
};

const EXPERIENCE = [
  {
    role: "Frontend Developer Intern",
    company: "BixoSoft",
    period: "Jun 2025 – Aug 2025",
    bullets: [
      "Built responsive UI components using React.js and integrated backend REST APIs for dynamic data rendering.",
      "Collaborated in an agile environment to deliver features on schedule.",
    ],
  },
  {
    role: "UX/UI Designer Intern",
    company: "ViralVibes",
    period: "Jun 2024 – Jul 2024",
    bullets: [
      "Designed user-focused interfaces and interactive prototypes using Figma.",
      "Emphasized usability and aesthetics across the design process.",
    ],
  },
  {
    role: "Front Desk Officer (Intern)",
    company: "FAST-NUCES Faisalabad",
    period: "Jun 2023 – Jul 2023",
    bullets: [
      "Managed front desk operations, directing visitors and handling calls and inquiries professionally.",
      "Assisted administrative staff with scheduling, record keeping, and day-to-day office tasks.",
    ],
  },
];

const LEADERSHIP = [
  {
    role: "Vice President",
    org: "Dramocrats Society, FAST-NUCES",
    period: "Aug 2024 – Jun 2025",
    bullets: [
      "Led a team overseeing planning and execution of theatrical events and society activities.",
      "Mentored junior members and coordinated logistics and inter-departmental communication.",
    ],
  },
  {
    role: "Calls & Invitation Coordinator",
    org: "Annual Olympiad, FAST-NUCES",
    period: "",
    bullets: [
      "Handled outreach calls and formal invitations, coordinating with participants and university departments.",
    ],
  },
  {
    role: "Brand Ambassador",
    org: "Upskill",
    period: "Oct 2025 – Nov 2025",
    bullets: [
      "Represented Upskill on campus, promoting programs and coordinating outreach with students.",
    ],
  },
  {
    role: "Ambassador – Ikhtira 2026",
    org: "GIKI (Ghulam Ishaq Khan Institute)",
    period: "2026",
    bullets: [
      "Selected as ambassador for GIKI's flagship event; promoted across platforms and liaised with student participants.",
    ],
  },
];

function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx((c) => c + 1);
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx((w) => (w + 1) % words.length);
          setCharIdx(0);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

function Particles({ dark }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || typeof window === "undefined") return undefined;
    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;
    let raf;
    const W = (canvas.width = canvas.offsetWidth || 300);
    const H = (canvas.height = canvas.offsetHeight || 300);
    const dots = Array.from({ length: 60 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.15,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      dots.forEach((d) => {
        d.x += d.dx;
        d.y += d.dy;
        if (d.x < 0 || d.x > W) d.dx *= -1;
        if (d.y < 0 || d.y > H) d.dy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = dark
          ? `rgba(249,168,212,${d.alpha})`
          : `rgba(236,72,153,${d.alpha * 0.6})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, [dark]);
  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    />
  );
}

export default function Portfolio() {
  const typed = useTypewriter(ROLES);
  const [activeNav, setActiveNav] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);

  const navLinks = useMemo(() => ["home", "about", "experience", "leadership", "projects", "skills", "contact"], []);

  // ── Theme tokens ──────────────────────────────────────────────
  const t = dark
    ? {
        bg: "#1a0a14",
        bgAlt: "rgba(244,114,182,0.06)",
        surface: "rgba(244,114,182,0.07)",
        surfaceBorder: "rgba(249,168,212,0.18)",
        navBg: "rgba(26,10,20,0.88)",
        navBorder: "rgba(249,168,212,0.18)",
        text: "#fdf2f8",
        textMuted: "rgba(253,242,248,0.65)",
        textFaint: "rgba(253,242,248,0.45)",
        accent: "#f9a8d4",
        accentStrong: "#f472b6",
        accentDeep: "#ec4899",
        btnText: "#1a0a14",
        heroName: "linear-gradient(135deg, #fdf2f8 0%, #f9a8d4 60%, #f472b6 100%)",
        divider: "linear-gradient(90deg, #ec4899, #f9a8d4)",
        scrollTrack: "#1a0a14",
        scrollThumb: "#f472b6",
        cardBorder: "rgba(249,168,212,0.18)",
        cardHoverBorder: "rgba(249,168,212,0.45)",
        mobileMenuBg: "rgba(26,10,20,0.97)",
        socialIcon: "rgba(253,242,248,0.75)",
        socialIconHover: "#f9a8d4",
        glow: "rgba(244,114,182,0.22)",
        cursor: "#f472b6",
        inputBg: "rgba(244,114,182,0.08)",
        inputBorder: "rgba(249,168,212,0.2)",
        resumeCardBg: "rgba(244,114,182,0.1)",
        resumeCardBorder: "rgba(249,168,212,0.3)",
        footerBorder: "rgba(249,168,212,0.18)",
      }
    : {
        bg: "#fff0f6",
        bgAlt: "rgba(251,207,232,0.35)",
        surface: "rgba(251,207,232,0.4)",
        surfaceBorder: "rgba(244,114,182,0.25)",
        navBg: "rgba(255,240,246,0.88)",
        navBorder: "rgba(244,114,182,0.25)",
        text: "#4a0826",
        textMuted: "rgba(74,8,38,0.72)",
        textFaint: "rgba(74,8,38,0.48)",
        accent: "#db2777",
        accentStrong: "#be185d",
        accentDeep: "#9d174d",
        btnText: "#fff",
        heroName: "linear-gradient(135deg, #be185d 0%, #ec4899 60%, #f9a8d4 100%)",
        divider: "linear-gradient(90deg, #db2777, #f9a8d4)",
        scrollTrack: "#fff0f6",
        scrollThumb: "#f9a8d4",
        cardBorder: "rgba(244,114,182,0.28)",
        cardHoverBorder: "rgba(190,24,93,0.5)",
        mobileMenuBg: "rgba(255,240,246,0.97)",
        socialIcon: "rgba(74,8,38,0.7)",
        socialIconHover: "#db2777",
        glow: "rgba(244,114,182,0.25)",
        cursor: "#db2777",
        inputBg: "rgba(251,207,232,0.4)",
        inputBorder: "rgba(244,114,182,0.3)",
        resumeCardBg: "rgba(251,207,232,0.5)",
        resumeCardBorder: "rgba(244,114,182,0.4)",
        footerBorder: "rgba(244,114,182,0.3)",
      };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((id) => document.getElementById(id));
      const scrollY = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollY) {
          setActiveNav(navLinks[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/Ayesha_Nazir_Resume.pdf";
    link.download = "Ayesha_Nazir_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const s = {
    root: {
      fontFamily: "'Inter', sans-serif",
      background: t.bg,
      color: t.text,
      minHeight: "100vh",
      overflowX: "hidden",
      transition: "background 0.35s, color 0.35s",
    },
    nav: {
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      background: t.navBg,
      backdropFilter: "blur(20px)",
      borderBottom: `1px solid ${t.navBorder}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 clamp(1.5rem, 5vw, 4rem)",
      height: 64,
      transition: "background 0.35s, border-color 0.35s",
    },
    logo: {
      display: "none",
    },
    navLinksUl: {
      display: "flex",
      gap: "1.75rem",
      listStyle: "none",
      margin: 0,
      padding: 0,
      alignItems: "center",
    },
    navLink: (active) => ({
      fontSize: "0.85rem",
      fontWeight: 600,
      textTransform: "capitalize",
      cursor: "pointer",
      color: active ? t.accentStrong : t.textMuted,
      transition: "color 0.2s",
      letterSpacing: "0.02em",
    }),
    themeBtn: {
      background: t.surface,
      border: `1.5px solid ${t.cardBorder}`,
      borderRadius: 100,
      padding: "0.35rem 0.85rem",
      cursor: "pointer",
      fontSize: "0.8rem",
      fontWeight: 700,
      color: t.accent,
      fontFamily: "'Inter', sans-serif",
      letterSpacing: "0.03em",
      transition: "all 0.2s",
      display: "flex",
      alignItems: "center",
      gap: "0.4rem",
    },
    hero: {
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      padding: "0 clamp(1.5rem, 8vw, 8rem)",
      overflow: "hidden",
    },
    heroGlow: {
      position: "absolute",
      width: 700,
      height: 700,
      borderRadius: "50%",
      background: `radial-gradient(circle, ${t.glow} 0%, transparent 70%)`,
      top: "50%",
      right: "-10%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
    },
    heroGlow2: {
      position: "absolute",
      width: 400,
      height: 400,
      borderRadius: "50%",
      background: `radial-gradient(circle, ${t.glow} 0%, transparent 70%)`,
      bottom: "-5%",
      left: "5%",
      pointerEvents: "none",
    },
    heroContent: {
      position: "relative",
      zIndex: 1,
      maxWidth: 680,
    },
    heroEyebrow: {
      fontSize: "0.78rem",
      fontWeight: 700,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: t.accentStrong,
      marginBottom: "1.25rem",
      display: "flex",
      alignItems: "center",
      gap: "0.6rem",
    },
    dot: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: t.accentStrong,
      display: "inline-block",
    },
    heroName: {
      fontFamily: "'Syne', sans-serif",
      fontSize: "clamp(3rem, 8vw, 5.5rem)",
      fontWeight: 800,
      lineHeight: 1.05,
      marginBottom: "1rem",
      letterSpacing: "-2px",
      color: t.accentStrong,
    },
    heroRole: {
      fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
      fontWeight: 500,
      color: t.textMuted,
      marginBottom: "2rem",
      minHeight: "2.2rem",
    },
    heroCursor: {
      display: "inline-block",
      width: 2,
      height: "1em",
      background: t.cursor,
      marginLeft: 3,
      verticalAlign: "middle",
      animation: "blink 1s step-end infinite",
    },
    heroDesc: {
      fontSize: "1.05rem",
      lineHeight: 1.8,
      color: t.textMuted,
      marginBottom: "2.5rem",
      maxWidth: 520,
    },
    btnRow: {
      display: "flex",
      gap: "1rem",
      flexWrap: "wrap",
    },
    btnPrimary: {
      background: `linear-gradient(135deg, ${t.accentStrong}, ${t.accentDeep})`,
      color: "#fff",
      border: "none",
      borderRadius: 50,
      padding: "0.8rem 2rem",
      fontWeight: 700,
      fontSize: "0.9rem",
      cursor: "pointer",
      fontFamily: "'Inter', sans-serif",
      letterSpacing: "0.04em",
      transition: "opacity 0.2s, transform 0.15s, box-shadow 0.2s",
      boxShadow: `0 4px 20px ${t.glow}`,
    },
    btnOutline: {
      background: "transparent",
      color: t.accentStrong,
      border: `1.5px solid ${t.accentStrong}`,
      borderRadius: 50,
      padding: "0.8rem 2rem",
      fontWeight: 600,
      fontSize: "0.9rem",
      cursor: "pointer",
      fontFamily: "'Inter', sans-serif",
      transition: "all 0.2s",
    },
    section: {
      padding: "6rem clamp(1.5rem, 8vw, 8rem)",
    },
    sectionLabel: {
      fontSize: "0.72rem",
      fontWeight: 700,
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      color: t.accentStrong,
      marginBottom: "0.75rem",
    },
    sectionTitle: {
      fontFamily: "'Syne', sans-serif",
      fontSize: "clamp(2rem, 4vw, 3rem)",
      fontWeight: 800,
      letterSpacing: "-1px",
      marginBottom: "3rem",
      lineHeight: 1.1,
      color: t.text,
    },
    divider: {
      width: 52,
      height: 3,
      background: t.divider,
      borderRadius: 2,
      marginBottom: "1rem",
    },
    aboutGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "4rem",
      alignItems: "center",
    },
    aboutText: {
      fontSize: "1.05rem",
      lineHeight: 1.85,
      color: t.textMuted,
    },
    aboutStats: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "1.25rem",
    },
    statCard: {
      background: t.surface,
      border: `1px solid ${t.cardBorder}`,
      borderRadius: 16,
      padding: "1.5rem",
      textAlign: "center",
      backdropFilter: "blur(8px)",
      transition: "transform 0.25s, border-color 0.25s, box-shadow 0.25s",
      cursor: "default",
    },
    statNum: {
      fontFamily: "'Syne', sans-serif",
      fontSize: "2.4rem",
      fontWeight: 800,
      color: t.accentStrong,
      lineHeight: 1,
      marginBottom: "0.4rem",
    },
    statLabel: {
      fontSize: "0.78rem",
      color: t.textFaint,
      fontWeight: 600,
      letterSpacing: "0.04em",
    },
    expTimeline: {
      display: "flex",
      flexDirection: "column",
      gap: "1.75rem",
      maxWidth: 760,
    },
    expCard: {
      background: t.surface,
      border: `1px solid ${t.cardBorder}`,
      borderRadius: 16,
      padding: "2rem",
      borderLeft: `3px solid ${t.accentStrong}`,
      transition: "transform 0.25s, border-color 0.25s, box-shadow 0.25s",
      cursor: "default",
    },
    expRole: {
      fontFamily: "'Syne', sans-serif",
      fontSize: "1.15rem",
      fontWeight: 700,
      marginBottom: "0.3rem",
      color: t.text,
    },
    expMeta: {
      fontSize: "0.85rem",
      color: t.accentStrong,
      fontWeight: 600,
      marginBottom: "1rem",
    },
    expBullet: {
      fontSize: "0.93rem",
      color: t.textMuted,
      lineHeight: 1.75,
      marginBottom: "0.4rem",
      paddingLeft: "1rem",
    },
    projectsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "1.5rem",
    },
    projectCard: () => ({
      background: t.surface,
      border: `1px solid ${t.cardBorder}`,
      borderRadius: 20,
      padding: "2rem",
      transition: "transform 0.25s, border-color 0.25s, box-shadow 0.25s",
      cursor: "default",
    }),
    projectTag: (color) => ({
      display: "inline-block",
      fontSize: "0.68rem",
      fontWeight: 700,
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: color,
      background: `${color}22`,
      border: `1px solid ${color}55`,
      borderRadius: 100,
      padding: "0.25rem 0.75rem",
      marginBottom: "1rem",
    }),
    projectTitle: {
      fontFamily: "'Syne', sans-serif",
      fontSize: "1.2rem",
      fontWeight: 700,
      marginBottom: "0.75rem",
      color: t.text,
    },
    projectDesc: {
      fontSize: "0.88rem",
      color: t.textMuted,
      lineHeight: 1.75,
      marginBottom: "1.25rem",
    },
    tagRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem",
    },
    techTag: {
      fontSize: "0.73rem",
      fontWeight: 600,
      background: t.surface,
      border: `1px solid ${t.cardBorder}`,
      borderRadius: 6,
      padding: "0.22rem 0.65rem",
      color: t.textMuted,
    },
    skillsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
      gap: "1.5rem",
    },
    skillCard: {
      background: t.surface,
      border: `1px solid ${t.cardBorder}`,
      borderRadius: 18,
      padding: "1.75rem",
      transition: "transform 0.25s, border-color 0.25s, box-shadow 0.25s",
      cursor: "default",
    },
    skillCardTitle: {
      fontFamily: "'Syne', sans-serif",
      fontSize: "0.82rem",
      fontWeight: 800,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: t.accentStrong,
      marginBottom: "1.1rem",
    },
    skillPillRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem",
    },
    skillPill: {
      fontSize: "0.8rem",
      fontWeight: 600,
      background: dark ? "rgba(249,168,212,0.15)" : "rgba(251,207,232,0.6)",
      color: t.accentStrong,
      border: `1px solid ${t.cardBorder}`,
      borderRadius: 100,
      padding: "0.3rem 0.85rem",
    },
    contactGrid: {
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      alignItems: "center",
      textAlign: "center",
      maxWidth: 580,
      margin: "0 auto",
    },
    contactInfo: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
      width: "100%",
    },
    footer: {
      borderTop: `1px solid ${t.footerBorder}`,
      padding: "2rem clamp(1.5rem, 8vw, 8rem)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    footerText: {
      fontSize: "0.85rem",
      color: t.textFaint,
    },
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600;700&display=swap');
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .blink-text { animation: blink 2s infinite; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${t.scrollTrack}; }
        ::-webkit-scrollbar-thumb { background: ${t.scrollThumb}; border-radius: 3px; }
        .nav-link-item:hover { color: ${t.accentStrong} !important; }
        .btn-primary:hover { opacity: 0.88; transform: translateY(-2px); box-shadow: 0 8px 28px ${t.glow} !important; }
        .btn-outline:hover { background: ${t.accentStrong} !important; color: #fff !important; }
        .project-card:hover, .stat-card:hover, .skill-card:hover { transform: translateY(-5px) !important; border-color: ${t.cardHoverBorder} !important; box-shadow: 0 12px 36px ${t.glow} !important; }
        .social-icon:hover { color: ${t.accentStrong} !important; transform: translateY(-3px); }
        .social-icon { transition: color 0.2s, transform 0.2s; }
        .theme-btn:hover { opacity: 0.85; }
        .split-card { display: grid; grid-template-columns: 240px 1fr; gap: 2rem; padding: 2.5rem; background: ${t.surface}; border: 1px solid ${t.cardBorder}; border-radius: 20px; transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s; cursor: default; }
        .split-card:hover { transform: translateY(-5px); border-color: ${t.cardHoverBorder}; box-shadow: 0 12px 36px ${t.glow}; }
        
        /* Slideshow Layout */
        .slideshow-container {
          display: flex;
          flex-direction: column;
          height: 400px;
          overflow-y: auto;
          scroll-snap-type: y mandatory;
          scroll-behavior: smooth;
          border-radius: 20px;
          border: 1px solid ${t.cardBorder};
          background: ${t.surface};
          -ms-overflow-style: none;
          scrollbar-width: none;
          position: relative;
        }
        .slideshow-container::-webkit-scrollbar {
          display: none;
        }
        .slide-item {
          flex: 0 0 100%;
          height: 100%;
          scroll-snap-align: start;
          padding: 3rem;
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 2rem;
          align-items: center;
        }
        
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .split-card { grid-template-columns: 1fr; gap: 1rem; padding: 1.5rem; }
          .slide-item { grid-template-columns: 1fr; gap: 1.5rem; padding: 2rem; align-items: start; }
          .nav-desktop { display: none !important; }
          .hamburger { display: flex !important; }
        }
        .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 4px; }
        .hamburger span { display: block; width: 22px; height: 2px; background: ${t.accentStrong}; border-radius: 2px; transition: background 0.35s; }
        .mobile-menu { position: fixed; top: 64px; left: 0; right: 0; background: ${t.mobileMenuBg}; backdrop-filter: blur(20px); border-bottom: 1px solid ${t.navBorder}; padding: 1.5rem 2rem; z-index: 99; display: flex; flex-direction: column; gap: 1rem; }
        .mobile-link { font-size: 1rem; font-weight: 600; color: ${t.textMuted}; cursor: pointer; text-transform: capitalize; padding: 0.5rem 0; border-bottom: 1px solid ${t.cardBorder}; transition: color 0.2s; }
        .mobile-link:hover { color: ${t.accentStrong}; }
      `}</style>

      <div style={s.root}>
        {/* NAV */}
        <nav style={s.nav}>
          <ul style={s.navLinksUl} className="nav-desktop">
            {navLinks.map((id) => (
              <li key={id}>
                <span
                  className="nav-link-item"
                  style={s.navLink(activeNav === id)}
                  onClick={() => scrollTo(id)}
                >
                  {id}
                </span>
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <button
              className="theme-btn"
              style={s.themeBtn}
              onClick={() => setDark((d) => !d)}
              title="Toggle theme"
            >
              {dark ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/></svg>
                  Light
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                  Dark
                </>
              )}
            </button>
            <div className="hamburger" onClick={() => setMenuOpen((o) => !o)}>
              <span /><span /><span />
            </div>
          </div>
        </nav>

        {menuOpen && (
          <div className="mobile-menu">
            {navLinks.map((id) => (
              <div key={id} className="mobile-link" onClick={() => scrollTo(id)}>{id}</div>
            ))}
          </div>
        )}

        {/* HERO */}
        <section id="home" style={s.hero}>
          <Particles dark={dark} />
          <div style={s.heroGlow} />
          <div style={s.heroGlow2} />
          <div style={s.heroContent}>
            <div style={s.heroEyebrow}>
              <span style={s.dot} />
              Available for opportunities
            </div>
            <h1 style={s.heroName}>Ayesha Nazir</h1>
            <div style={s.heroRole}>
              {typed}
              <span style={s.heroCursor} />
            </div>
            <p style={s.heroDesc}>
              CS graduate from FAST-NUCES building pixel-perfect interfaces and intelligent systems — where design meets engineering.
            </p>
            <div style={s.btnRow}>
              <button
                className="btn-primary"
                style={s.btnPrimary}
                onClick={() => scrollTo("projects")}
              >
                View My Work
              </button>
              <button className="btn-outline" style={s.btnOutline} onClick={downloadResume}>
                Download Resume
              </button>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" style={{ ...s.section, background: t.bgAlt }}>
          <div style={s.sectionLabel}>About Me</div>
          <div style={s.divider} />
          <h2 style={s.sectionTitle}>Designer. Developer.<br />Leader. Problem Solver.</h2>
          <div style={{ ...s.aboutGrid }} className="about-grid">
            <div>
              <p style={{ ...s.aboutText, marginBottom: "1.25rem" }}>
                I'm a final-year Computer Science student at FAST-NUCES with a rare blend of frontend engineering, UX/UI design, and people leadership. I care about the full picture — from the user's first impression to the systems and teams that make it happen.
              </p>
              <p style={s.aboutText}>
                Beyond code, I've led societies, coordinated events, managed teams, and represented organizations as a brand ambassador — bringing both an engineer's rigour and a communicator's warmth to everything I do.
              </p>
              <div style={{ marginTop: "2rem" }}>
                
              </div>
            </div>
            <div style={s.aboutStats}>
              {[
                { num: "4+", label: "Projects Shipped" },
                { num: "3", label: "Internships" },
                { num: "4+", label: "Leadership Roles" },
                { num: "2026", label: "Graduation Year" },
              ].map((st) => (
                <div key={st.label} className="stat-card" style={s.statCard}>
                  <div style={s.statNum}>{st.num}</div>
                  <div style={s.statLabel}>{st.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" style={s.section}>
          <div style={s.sectionLabel}>Work Experience</div>
          <div style={s.divider} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem" }}>
            <h2 style={{ ...s.sectionTitle, marginBottom: 0 }}>Where I've Worked</h2>
            <div style={{ fontSize: "0.85rem", color: t.accentStrong, fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span className="blink-text">Scroll inside</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
            </div>
          </div>
          
          <div className="slideshow-container">
            {EXPERIENCE.map((exp) => (
              <div key={exp.company} className="slide-item">
                <div>
                  <div style={{ fontSize: "0.85rem", color: t.accentStrong, fontWeight: 700, marginBottom: "0.5rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>{exp.period}</div>
                  <div style={{ fontSize: "1.2rem", fontWeight: 700, color: t.text }}>{exp.company}</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.4rem", fontWeight: 800, color: t.text, marginBottom: "1rem" }}>{exp.role}</div>
                  {exp.bullets.map((b, i) => (
                    <div key={i} style={s.expBullet}>— {b}</div>
                  ))}
                </div>
              </div>
            ))}
            <div className="slide-item">
              <div>
                <div style={{ fontSize: "0.85rem", color: t.accentStrong, fontWeight: 700, marginBottom: "0.5rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>Aug 2022 – Jun 2026</div>
                <div style={{ fontSize: "1.2rem", fontWeight: 700, color: t.text }}>FAST-NUCES</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.4rem", fontWeight: 800, color: t.text, marginBottom: "1rem" }}>B.S. Computer Science</div>
                <div style={s.expBullet}>— Focused on software engineering, AI, databases, and systems design.</div>
              </div>
            </div>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section id="leadership" style={{ ...s.section, background: t.bgAlt }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <div style={{ flex: "1 1 500px" }}>
              <div style={s.sectionLabel}>Leadership & Ambassadorships</div>
              <div style={s.divider} />
              <h2 style={s.sectionTitle}>Beyond the Code</h2>
              <div style={s.expTimeline}>
                {LEADERSHIP.map((item) => (
                  <div key={item.role + item.org} className="split-card">
                    <div>
                      <div style={{ fontSize: "0.85rem", color: t.accentStrong, fontWeight: 700, marginBottom: "0.5rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>{item.period || "Ongoing"}</div>
                      <div style={{ fontSize: "1.1rem", fontWeight: 700, color: t.text }}>{item.org}</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.25rem", fontWeight: 800, color: t.text, marginBottom: "1rem" }}>{item.role}</div>
                      {item.bullets.map((b, i) => (
                        <div key={i} style={s.expBullet}>— {b}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ flex: "1 1 300px", display: "flex", justifyContent: "center" }}>
              <img 
                src={loveYouGif} 
                alt="Love You" 
                style={{ 
                  width: "100%", 
                  maxWidth: "400px"
                }} 
              />
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" style={s.section}>
          <div style={s.sectionLabel}>Projects</div>
          <div style={s.divider} />
          <h2 style={s.sectionTitle}>Things I've Built</h2>
          <div style={s.projectsGrid}>
            {PROJECTS.map((p) => (
              <div key={p.title} className="project-card" style={s.projectCard(p.color)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.25rem" }}>
                  <div style={s.projectTag(p.color)}>{p.tag}</div>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          fontSize: "0.73rem",
                          fontWeight: 700,
                          color: p.color,
                          background: `${p.color}22`,
                          border: `1px solid ${p.color}55`,
                          borderRadius: 100,
                          padding: "0.25rem 0.75rem",
                          textDecoration: "none",
                          whiteSpace: "nowrap",
                        }}
                      >
                        GitHub
                      </a>
                    )}
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          fontSize: "0.73rem",
                          fontWeight: 700,
                          color: p.color,
                          background: `${p.color}22`,
                          border: `1px solid ${p.color}55`,
                          borderRadius: 100,
                          padding: "0.25rem 0.75rem",
                          textDecoration: "none",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Live
                      </a>
                    )}
                  </div>
                </div>
                <div style={s.projectTitle}>{p.title}</div>
                <div style={s.projectDesc}>{p.desc}</div>
                <div style={s.tagRow}>
                  {p.stack.map((tech) => (
                    <span key={tech} style={s.techTag}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" style={{ ...s.section, background: t.bgAlt }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <div style={{ flex: "1 1 300px", display: "flex", justifyContent: "center" }}>
              <img 
                src={catGif} 
                alt="Cat Gif" 
                style={{ 
                  width: "100%", 
                  maxWidth: "350px", 
                }} 
              />
            </div>

            <div style={{ flex: "1 1 500px" }}>
              <div style={s.sectionLabel}>Skills</div>
              <div style={s.divider} />
              
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem" }}>
                <h2 style={{ ...s.sectionTitle, marginBottom: 0 }}>My Toolkit</h2>
                <div style={{ fontSize: "0.85rem", color: t.accentStrong, fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span className="blink-text">Scroll inside</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
                </div>
              </div>

              <div className="slideshow-container">
                {Object.entries(SKILLS).map(([cat, items]) => (
                  <div key={cat} className="slide-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: '1.5rem' }}>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.4rem", fontWeight: 800, color: t.text, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                      {cat}
                    </div>
                    <div style={s.skillPillRow}>
                      {items.map((skill) => (
                        <span key={skill} style={s.skillPill}>{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={s.section}>
          <div style={s.sectionLabel}>Contact</div>
          <div style={s.divider} />
          <h2 style={s.sectionTitle}>Let's Work Together</h2>
          <div style={s.contactGrid}>
            <div style={s.contactInfo}>
              <p style={{ fontSize: "1rem", color: t.textMuted, lineHeight: 1.85 }}>
                I'm actively looking for full-time roles in frontend development or product design. Got an interesting project or opportunity? I'd love to hear from you.
              </p>

              {/* Social Icons */}
              <div style={{ display: "flex", gap: "1.75rem", justifyContent: "center", marginTop: "0.5rem" }}>
                <a href="mailto:ayeshanazir557@gmail.com" target="_blank" rel="noreferrer"
                   className="social-icon"
                   style={{ color: t.socialIcon }} title="Email">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/ayesha--nazir" target="_blank" rel="noreferrer"
                   className="social-icon"
                   style={{ color: t.socialIcon }} title="LinkedIn">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a href="https://github.com/ayeshaishere" target="_blank" rel="noreferrer"
                   className="social-icon"
                   style={{ color: t.socialIcon }} title="GitHub">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                </a>
              </div>

              {/* Resume Download */}
              <div style={{
                padding: "2rem",
                background: t.resumeCardBg,
                border: `1px solid ${t.resumeCardBorder}`,
                borderRadius: 20,
                width: "100%",
              }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.4rem", color: t.text }}>
                  Resume
                </div>
                <div style={{ fontSize: "0.88rem", color: t.textMuted, marginBottom: "1.25rem" }}>
                  Download a copy of my latest resume.
                </div>
                <button
                  onClick={downloadResume}
                  className="btn-primary"
                  style={s.btnPrimary}
                >
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={s.footer}>
          <span style={s.footerText}>© 2026 Ayesha Nazir · </span>
        </footer>
      </div>
    </>
  );
}
