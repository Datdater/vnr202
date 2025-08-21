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
            "url('/z6532323989797_8b93df5887273a64128e7dfb06d0c8a5-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></motion.section>

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
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
        id="production-process"
        className="max-w-5xl mx-auto py-16 px-4"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-[color:var(--brown)] text-center">
          Quá trình sản xuất giá trị thặng dư trong ngày làm việc của lập trình
          viên
        </h2>
        {/* Timeline 8 tiếng */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative w-full max-w-lg">
            <div className="flex h-15 rounded-full overflow-hidden shadow border border-[color:var(--gold)]">
              <div className="flex-1 flex items-center justify-center bg-gradient-to-r from-[color:var(--gold)] to-yellow-200 text-[color:var(--charcoal)] font-bold text-sm">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-10 text-[color:var(--charcoal)]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 8v4l3 3"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                  4h tất yếu
                  <br />
                  (1.000.000 VNĐ)
                </span>
              </div>
              <div className="flex-1 flex items-center justify-center bg-gradient-to-r from-[color:var(--brown)] to-yellow-900 text-white font-bold text-sm">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 8v4l3 3"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                  4h thặng dư
                  <br />
                  (1.000.000 VNĐ)
                </span>
              </div>
            </div>
            <div className="flex w-full justify-between mt-2 text-xs text-[color:var(--charcoal)]">
              <span>0h</span>
              <span>8h</span>
            </div>
          </div>
          <div className="mt-4 text-center text-base text-[color:var(--charcoal)]">
            <b>4 giờ lao động tất yếu:</b> Tạo ra giá trị bù đắp lương
            (1.000.000 VNĐ).
            <br />
            <b>4 giờ lao động thặng dư:</b> Tạo ra giá trị thặng dư cho công ty
            (1.000.000 VNĐ).
          </div>
        </div>
        {/* Bảng phân tích giá trị sản phẩm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-[color:var(--charcoal)] flex flex-col items-center">
            <div className="font-bold text-[color:var(--charcoal)]">
              Tư bản bất biến (c)
            </div>
            <div className="text-xl font-bold text-[color:var(--brown)]">
              850.000 VNĐ
            </div>
            <div className="text-xs text-[color:var(--grey)] mt-1">
              Thiết bị, phần mềm, chi phí văn phòng
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-[color:var(--gold)] flex flex-col items-center">
            <div className="font-bold text-[color:var(--charcoal)]">
              Giá trị sức lao động (v)
            </div>
            <div className="text-xl font-bold text-[color:var(--gold)]">
              1.000.000 VNĐ
            </div>
            <div className="text-xs text-[color:var(--grey)] mt-1">
              Tiền lương (4h tất yếu)
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-[color:var(--brown)] flex flex-col items-center">
            <div className="font-bold text-[color:var(--charcoal)]">
              Giá trị thặng dư (m)
            </div>
            <div className="text-xl font-bold text-[color:var(--brown)]">
              1.000.000 VNĐ
            </div>
            <div className="text-xs text-[color:var(--grey)] mt-1">
              Tạo ra trong 4h thặng dư
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-[color:var(--gold)] flex flex-col items-center">
            <div className="font-bold text-[color:var(--charcoal)]">
              Tổng giá trị sản phẩm
            </div>
            <div className="text-xl font-bold text-[color:var(--gold)]">
              2.850.000 VNĐ
            </div>
            <div className="text-xs text-[color:var(--grey)] mt-1">
              c + v + m
            </div>
          </div>
        </div>
        {/* Nhấn mạnh giá trị thặng dư */}
        <div className="text-center my-8">
          <span className="inline-block bg-gradient-to-r from-[color:var(--brown)] to-[color:var(--gold)] text-white font-bold text-lg rounded-full px-8 py-3 shadow-lg border-2 border-white">
            Giá trị thặng dư (m) được tạo ra là: 1.000.000 VNĐ
          </span>
        </div>
        {/* Mô tả ý nghĩa */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-8 rounded-2xl shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[color:var(--brown)] text-lg mb-3">
                  Kết luận quan trọng
                </h4>
                <blockquote className="text-lg text-[color:var(--charcoal)] italic leading-relaxed mb-4">
                  Giá trị thặng dư là bộ phận giá trị mới dôi ra ngoài giá trị
                  sức lao động do công nhân tạo ra, là kết quả của lao động
                  không công của công nhân cho nhà tư bản.
                </blockquote>
                {/* <div className="text-right">
                  <span className="text-sm font-semibold text-[color:var(--brown)]">- C. Mác</span>
                </div> */}
                {/* <p className="text-[color:var(--charcoal)] mt-4 leading-relaxed">
                  Phần giá trị thặng dư này là nguồn gốc lợi nhuận của chủ doanh nghiệp, được tạo ra từ phần lao động không được trả công của lập trình viên. 
                  Điều này cho thấy bản chất của quan hệ sản xuất tư bản chủ nghĩa.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Question Answer Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        id="question-answer"
        className="max-w-3xl mx-auto py-16 px-4 flex flex-col items-center text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[color:var(--brown)]">
          Trả lời câu hỏi
        </h2>
        <p className="mb-6 text-lg text-[color:var(--charcoal)]">
          {" "}
          Làm 8 tiếng nhưng sống không đủ: Giá trị thặng dư ở đâu?
        </p>

        {/* Bảng mức lương tối thiểu vùng 2025 */}
        <div className="w-full bg-white rounded-xl shadow-lg p-6 mb-8">
          <Bar data={chartData} options={chartOptions} />
          <div className="text-xs text-gray-500 mt-2 text-right">
            Nguồn: Cục Thống kê
          </div>
        </div>

        <div className="w-full overflow-x-auto mt-10">
          <table className="min-w-[600px] w-full border border-gray-300 rounded-xl overflow-hidden shadow-lg bg-white">
            <thead>
              <tr className="bg-[color:var(--brown)] text-white">
                <th className="py-3 px-4 text-base font-bold border-r border-[color:var(--gold)]">
                  Vùng
                </th>
                <th className="py-3 px-4 text-base font-bold border-r border-[color:var(--gold)]">
                  Mức lương tối thiểu tháng
                  <br />
                  (đồng/tháng)
                </th>
                <th className="py-3 px-4 text-base font-bold">
                  Mức lương tối thiểu giờ
                  <br />
                  (đồng/giờ)
                </th>
              </tr>
            </thead>
            <tbody className="text-center text-[color:var(--charcoal)]">
              <tr className="border-t border-gray-200">
                <td className="py-2 px-4 font-semibold">Vùng I</td>
                <td className="py-2 px-4">4.960.000</td>
                <td className="py-2 px-4">23.800</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-2 px-4 font-semibold">Vùng II</td>
                <td className="py-2 px-4">4.410.000</td>
                <td className="py-2 px-4">21.200</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-2 px-4 font-semibold">Vùng III</td>
                <td className="py-2 px-4">3.860.000</td>
                <td className="py-2 px-4">18.600</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-2 px-4 font-semibold">Vùng IV</td>
                <td className="py-2 px-4">3.450.000</td>
                <td className="py-2 px-4">16.600</td>
              </tr>
            </tbody>
          </table>
          <div className="text-xs text-gray-500 mt-2">
            Nguồn: Dự thảo mức lương tối thiểu vùng năm 2025
          </div>
        </div>
      </motion.section>

      {/* Book Section */}

      <SketchfabEmbed />
      {/* Final Call-to-Action Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full py-16 bg-gradient-to-r from-[color:var(--brown)]/90 to-[color:var(--gold)]/80 flex flex-col items-center justify-center text-center"
      >
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 drop-shadow-lg">
          Sẵn sàng để tìm hiểu sâu hơn?
        </h3>
        <p className="text-lg text-white/90 mb-8 max-w-2xl">
          Khám phá lý thuyết giá trị thặng dư và tham gia thảo luận để hiểu cơ
          sở của kinh tế hiện đại.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="#"
            className="bg-white text-[color:var(--brown)] font-bold px-8 py-3 rounded-full shadow-lg text-lg hover:bg-gray-200 transition"
          >
            Read Full Theory
          </a>
          <a
            href="#"
            className="bg-[color:var(--charcoal)] text-white font-bold px-8 py-3 rounded-full shadow-lg text-lg hover:bg-gray-800 transition"
          >
            Join Discussion
          </a>
        </div>
      </motion.section>
    </div>
  );
}
