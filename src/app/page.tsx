"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import HTMLFlipBook from "react-pageflip";
import DiaglogContentTab from "@/components/DiaglogContentTab";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  LineController,
  Legend,
  Tooltip,
  ChartData,
  ChartOptions,
} from "chart.js";
import VerticalTimeline1 from "./components/VerticalTimeline";
import PreprationPhase from "./components/PreprationPhase/PreprationPhase";
import SketchfabEmbed from "./components/SketchfabEmbed";

import IntroductionSection from "./components/IntroductionSection";
import KetQuaPage from "./ketquapage";
import HistoricalSignificance from "./ynghia";
import Footer from "./Footer";
import SurplusValueQuizBook from "./cauhoi";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  LineController,
  Legend,
  Tooltip
);

// Component hiệu ứng vàng rơi
const GoldParticles = () => {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      speed: number;
      delay: number;
    }>
  >([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: -10 - Math.random() * 100,
        size: 2 + Math.random() * 4,
        speed: 1 + Math.random() * 2,
        delay: Math.random() * 5,
      }));
      setParticles(newParticles);
    };

    generateParticles();
    const interval = setInterval(generateParticles, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full shadow-lg"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, window.innerHeight + 100],
            x: [0, Math.random() * 100 - 50],
            opacity: [1, 0.8, 0.6, 0.4, 0.2, 0],
            scale: [1, 1.2, 0.8, 1, 0.6],
          }}
          transition={{
            duration: 8 + particle.speed * 2,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Component Navigation Buttons
const NavigationButtons = ({
  currentSection,
  totalSections,
  onNext,
  onPrev,
}: {
  currentSection: number;
  totalSections: number;
  onNext: () => void;
  onPrev: () => void;
}) => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex gap-4">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onPrev}
        disabled={currentSection === 0}
        className={`px-6 py-3 rounded-full shadow-lg font-bold transition-all ${
          currentSection === 0
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-[color:var(--brown)] text-white hover:bg-[color:var(--charcoal)]"
        }`}
      >
        ← Trước
      </motion.button>

      <div className="flex items-center px-4 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
        <span className="text-[color:var(--brown)] font-bold">
          {currentSection + 1} / {totalSections}
        </span>
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onNext}
        disabled={currentSection === totalSections - 1}
        className={`px-6 py-3 rounded-full shadow-lg font-bold transition-all ${
          currentSection === totalSections - 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-[color:var(--gold)] text-[color:var(--charcoal)] hover:bg-yellow-400"
        }`}
      >
        Tiếp →
      </motion.button>
    </div>
  );
};
import MusicPlayer from "./components/MusicLayout";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isManualScrolling, setIsManualScrolling] = useState(false);

  const sections = [
    // Section 0: Hero Section
    {
      id: "hero",
      title: "Hero",
    },

    // Section 1: Introduction Section
    {
      id: "introduction",
      title: "Nguồn gốc",
    },

    // Section 2: Labor Power as Commodity Section
    {
      id: "labor-power",
      title: "Sức lao động",
    },

    // Section 3: Production Process Section
    {
      id: "production-process",
      title: "Quá trình sản xuất",
    },

    // Section 5: Question Answer Section
    {
      id: "question-answer",
      title: "Trả lời câu hỏi",
    },
    {
      id: "summary",
      title: "Tóm tắt toàn bộ Lý thuyết Giá trị Thặng dư",
    },
  ];

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      const nextSection = currentSection + 1;
      setCurrentSection(nextSection);
      setIsManualScrolling(true);
      const nextSectionElement = document.getElementById(
        sections[nextSection].id
      );
      if (nextSectionElement) {
        nextSectionElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setTimeout(() => setIsManualScrolling(false), 600);
      } else {
        setIsManualScrolling(false);
      }
    }
  };

  const handlePrev = () => {
    if (currentSection > 0) {
      const prevSection = currentSection - 1;
      setCurrentSection(prevSection);
      setIsManualScrolling(true);
      const prevSectionElement = document.getElementById(
        sections[prevSection].id
      );
      if (prevSectionElement) {
        prevSectionElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setTimeout(() => setIsManualScrolling(false), 600);
      } else {
        setIsManualScrolling(false);
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === " ") {
        event.preventDefault();
        handleNext();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentSection]);

  // Update current section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (isManualScrolling) return;
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSection(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isManualScrolling]);

  const chartData: ChartData<"bar"> = {
    labels: [
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
      "2024",
    ],
    datasets: [
      {
        type: "bar",
        label: "Năng suất lao động (triệu đồng/người)",
        data: [
          55.8, 70, 78.8, 85.2, 93.1, 97.7, 105.7, 117.2, 129.1, 141, 150.1,
          173, 188.7, 199.3, 221.9,
        ],
        backgroundColor: "rgba(54, 162, 235, 0.7)",
        borderRadius: 6,
        yAxisID: "y",
      },
      {
        type: "bar",
        label: "Tỷ lệ lao động qua đào tạo (%)",
        data: [
          14.6, 15.4, 16.5, 17.9, 18.3, 20.1, 20.5, 21.3, 21.9, 22.6, 25, 26.1,
          26.3, 27.1, 28.3,
        ],
        borderColor: "orange",
        backgroundColor: "orange",
        yAxisID: "y1",
        order: 2,
      },
    ],
  };

  const chartOptions: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Năng suất lao động và tỷ lệ lao động qua đào tạo ở Việt Nam (2010-2024)",
        font: { size: 18 },
      },
    },
    scales: {
      y: {
        type: "linear",
        position: "left",
        title: { display: true, text: "Triệu đồng/người" },
      },
      y1: {
        type: "linear",
        position: "right",
        grid: { drawOnChartArea: false },
        title: { display: true, text: "Tỷ lệ (%)" },
        min: 0,
        max: 30,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--charcoal)] font-serif">
      {/* Hiệu ứng vàng rơi */}
      <GoldParticles />
      {/* Button play music */}
      <div className="fixed bottom-8 right-8 z-50">
        <MusicPlayer />
      </div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        id="hero"
        className="w-full h-[60vh] min-h-[1000px] flex flex-col items-center justify-center text-center relative"
        style={{
          backgroundImage:
            "url('https://media.vov.vn/sites/default/files/styles/large/public/2021-05/299299.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}

      >
        <div className="absolute inset-0 bg-black/50" aria-hidden />
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1
            className="text-4xl sm:text-6xl font-extrabold uppercase text-white tracking-widest drop-shadow-lg mb-4"
            style={{
              fontFamily: "var(--font-family-brand)",
              color: "var(--gray-white, #fff)",
              textShadow: "5px 5px 0 rgba(0,0,0,.15)",
              fontSize: "100px",
              fontWeight: 900,
              lineHeight: "130%",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            Chiến thắng
          </h1>
          <h1
            className="text-4xl sm:text-6xl font-extrabold uppercase text-white tracking-widest drop-shadow-lg mb-4"
            style={{
              fontFamily: "var(--font-family-brand)",
              color: "var(--gray-white, #fff)",
              textShadow: "5px 5px 0 rgba(0,0,0,.15)",
              fontSize: "150px",
              fontWeight: 900,
              lineHeight: "130%",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            Điện Biên Phủ
          </h1>
          <p
            className="text-lg sm:text-2xl text-white/90 max-w-2xl mb-8 drop-shadow"
            style={{
              fontFamily: "var(--font-family-brand)",
              color: "var(--gray-white, #fff)",
              textShadow: "5px 5px 0 rgba(0,0,0,.15)",
              fontSize: "50px",
              fontWeight: 500,
              lineHeight: "10%",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            Lừng lẫy năm châu, chấn động địa cầu
          </p>
        </div>
      </motion.section>

     


      {/* Introduction Section */}
      <IntroductionSection />
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
        id="introduction"
        className="w-full min-h-screen relative bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://file.qdnd.vn/data/old_img/vanphong/2012/12/10/8719788820121210181817918.jpg')",
        }}
      >
        {/* dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* content above overlay */}
        <div className="relative z-10">
          <PreprationPhase />
        </div>
      </motion.section>

      {/* Labor Power as Commodity Section */}
      {/* <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        id="labor-power"
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 py-16 px-4"
      >
        
      </motion.section> */}

      <VerticalTimeline1 />

      {/* Production Process Section */}

      {/* Question Answer Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        id="question-answer"
        className="max-w mx-auto  flex flex-col items-center text-center"
      >
        <KetQuaPage />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
        id="production-process"
        className="max-w mx-auto relative"
      >
        <HistoricalSignificance />
      </motion.section>

      {/* Book Section */}

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
        id="summary"
        className="max-w mx-auto"
      >
        <SurplusValueQuizBook />
      </motion.section>



      <SketchfabEmbed />
      {/* Final Call-to-Action Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        id="question-answer"
        // className="max-w mx-auto  flex flex-col items-center text-center"
      >
        <Footer />
      </motion.section>
    </div>
  );
}
