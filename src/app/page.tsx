"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
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
      >

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
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
        id="summary"
        className="max-w-6xl mx-auto py-16 px-4"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[color:var(--brown)] mb-4">
            Tóm tắt toàn bộ Lý thuyết Giá trị Thặng dư
          </h2>
          <p className="text-lg text-[color:var(--charcoal)]">
            Khám phá lý thuyết qua từng trang sách
          </p>
        </div>

        <div className="flex justify-center">
          <HTMLFlipBook
            showPageCorners={true}
            disableFlipByClick={false}
            width={600}
            height={900}
            size="fixed"
            minWidth={500}
            maxWidth={1000}
            minHeight={900}
            maxHeight={1200}
            maxShadowOpacity={0.3}
            showCover={true}
            mobileScrollSupport={true}
            className="my-flipbook"
            startPage={0}
            drawShadow={true}
            flippingTime={800}
            usePortrait={false}
            startZIndex={0}
            autoSize={true}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={30}
            style={{ margin: "0 auto" }}
          >
            {/* Bìa sách */}
            <div className="page cover bg-gradient-to-br from-[color:var(--gold)] via-yellow-200 to-[color:var(--gold)] border-4 border-[color:var(--brown)]">
              <div className="flex flex-col items-center justify-center h-full text-center p-8">
                <div className="mb-8">
                  <h1
                    className="text-4xl font-bold text-[color:var(--charcoal)] mb-4"
                    style={{ fontFamily: "serif" }}
                  >
                    GIÁ TRỊ THẶNG DƯ
                  </h1>
                  <div className="w-32 h-1 bg-[color:var(--brown)] mx-auto mb-4"></div>
                  <p className="text-xl text-[color:var(--brown)] italic">
                    Lý thuyết kinh tế chính trị
                  </p>
                </div>
              </div>
            </div>

            {/* Trang 1 - Phần 1 */}
            <div className="page bg-white">
              <div className="p-6 h-full flex flex-col">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-[color:var(--brown)] mb-4 border-b-2 border-[color:var(--gold)] pb-2">
                    Phần 1: Nguồn gốc của Giá trị Thặng dư
                  </h2>
                  <p className="text-base text-[color:var(--charcoal)] leading-relaxed mb-4">
                    Giá trị thặng dư là phần giá trị mới được tạo ra vượt quá
                    giá trị sức lao động, được tạo ra trong quá trình sản xuất
                    nhưng không được trả công cho người lao động.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold text-[color:var(--brown)] mb-2">
                        Công thức vận động của tư bản:
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-semibold">
                            Lưu thông hàng hóa giản đơn:
                          </p>
                          <p className="text-center bg-white p-2 rounded border">
                            H – T – H
                          </p>
                          <p className="text-xs text-gray-600 mt-1">
                            Mục đích: Giá trị sử dụng
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold">Lưu thông tư bản:</p>
                          <p className="text-center bg-white p-2 rounded border">
                            T – H – T&apos;
                          </p>
                          <p className="text-xs text-gray-600 mt-1">
                            Mục đích: Giá trị lớn hơn
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                      <h3 className="font-bold text-[color:var(--brown)] mb-2">
                        Định nghĩa quan trọng:
                      </h3>
                      <ul className="text-sm space-y-2">
                        <li>
                          <strong>Tư bản:</strong> Là giá trị mang lại giá trị
                          thặng dư
                        </li>
                        <li>
                          <strong>Giá trị thặng dư:</strong> Là phần tăng thêm
                          (T&apos; = T + t, với t ≥ 0)
                        </li>
                        <li>
                          <strong>Nguồn gốc:</strong> Không phải từ lưu thông mà
                          từ quá trình sản xuất
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-bold text-[color:var(--brown)] mb-2">
                        Tại sao lưu thông không tạo ra giá trị thặng dư?
                      </h3>
                      <p className="text-sm">
                        Trong nền kinh tế thị trường, mỗi người đều vừa là người
                        bán vừa là người mua. Nếu được lợi khi bán thì sẽ bị
                        thiệt khi mua. Do đó, lưu thông không tạo ra giá trị
                        tăng thêm trên phạm vi toàn xã hội.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-[color:var(--grey)] text-center mt-4">
                  Trang 1
                </div>
              </div>
            </div>

            {/* Trang 2 - Phần 2 */}
            <div className="page bg-white">
              <div className="p-6 h-full flex flex-col">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-[color:var(--brown)] mb-4 border-b-2 border-[color:var(--gold)] pb-2">
                    Phần 2: Sức Lao động - Hàng hóa Đặc biệt
                  </h2>

                  <div className="space-y-4">
                    {/* Định nghĩa sức lao động */}
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <h3 className="font-bold text-[color:var(--brown)] mb-2">
                        Định nghĩa:
                      </h3>
                      <p className="text-sm italic text-gray-700 mb-2">
                        &quot;Sức lao động là toàn bộ những năng lực thể chất và
                        tinh thần tồn tại trong cơ thể con người đang
                        sống.&quot;
                      </p>
                      <p className="text-xs text-gray-600">- C. Mác</p>
                    </div>

                    {/* Điều kiện trở thành hàng hóa */}
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-bold text-[color:var(--brown)] mb-3">
                        Điều kiện trở thành hàng hóa:
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-white p-3 rounded border shadow-sm">
                          <div className="flex items-center mb-2">
                            <span className="w-6 h-6 bg-[color:var(--gold)] text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">
                              1
                            </span>
                            <span className="font-semibold">
                              Tự do về thân thể
                            </span>
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded border shadow-sm">
                          <div className="flex items-center mb-2">
                            <span className="w-6 h-6 bg-[color:var(--gold)] text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">
                              2
                            </span>
                            <span className="font-semibold">
                              Không có tư liệu sản xuất
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Thuộc tính đặc biệt */}
                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                      <h3 className="font-bold text-[color:var(--brown)] mb-3">
                        Thuộc tính đặc biệt:
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                            Giá trị của sức lao động:
                          </h4>
                          <div className="bg-white p-3 rounded border shadow-sm">
                            <p className="text-sm">
                              Bao gồm: tư liệu sinh hoạt + chi phí đào tạo + chi
                              phí gia đình
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                            Giá trị sử dụng:
                          </h4>
                          <div className="bg-white p-3 rounded border border-[color:var(--gold)] shadow-sm">
                            <p className="text-sm font-bold text-[color:var(--brown)]">
                              Khả năng tạo ra giá trị thặng dư
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-[color:var(--grey)] text-center mt-4">
                  Trang 2
                </div>
              </div>
            </div>

            {/* Trang 3 - Phần 3 */}
            <div className="page bg-white">
              <div className="p-6 h-full flex flex-col">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-[color:var(--brown)] mb-4 border-b-2 border-[color:var(--gold)] pb-2">
                    Phần 3: Quá trình Sản xuất Giá trị Thặng dư
                  </h2>

                  <div className="space-y-4">
                    {/* Khái niệm cơ bản */}
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <h3 className="font-bold text-[color:var(--brown)] mb-2">
                        Khái niệm:
                      </h3>
                      <p className="text-sm">
                        Quá trình sản xuất giá trị thặng dư là sự thống nhất của
                        quá trình tạo ra và làm tăng giá trị.
                      </p>
                    </div>

                    {/* Thời gian lao động */}
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-bold text-[color:var(--brown)] mb-3">
                        Phân chia thời gian lao động:
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-white p-3 rounded border shadow-sm">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                            Thời gian lao động tất yếu:
                          </h4>
                          <p className="text-xs">
                            Thời gian để bù đắp giá trị hàng hóa sức lao động
                          </p>
                        </div>
                        <div className="bg-white p-3 rounded border border-[color:var(--gold)] shadow-sm">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                            Thời gian lao động thặng dư:
                          </h4>
                          <p className="text-xs font-bold">
                            Thời gian tạo ra giá trị thặng dư cho nhà tư bản
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Ví dụ cụ thể */}
                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                      <h3 className="font-bold text-[color:var(--brown)] mb-3">
                        Ví dụ: Sản xuất sợi
                      </h3>
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded border shadow-sm">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                            Chi phí đầu vào:
                          </h4>
                          <ul className="text-xs space-y-1">
                            <li>• 50 USD: Mua 50 kg bông</li>
                            <li>• 3 USD: Hao mòn máy móc</li>
                            <li>• 15 USD: Mua sức lao động (8 giờ)</li>
                            <li className="font-bold">→ Tổng: 68 USD</li>
                          </ul>
                        </div>
                        <div className="bg-white p-3 rounded border shadow-sm">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                            Kết quả sản xuất:
                          </h4>
                          <ul className="text-xs space-y-1">
                            <li>• Giá trị bông chuyển vào: 50 USD</li>
                            <li>• Hao mòn máy móc: 3 USD</li>
                            <li>• Giá trị mới tạo thêm: 15 USD</li>
                            <li className="font-bold">→ Tổng: 68 USD</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-[color:var(--grey)] text-center mt-4">
                  Trang 3
                </div>
              </div>
            </div>

            {/* Trang 4 - Phần 3 (tiếp) */}
            <div className="page bg-white">
              <div className="p-6 h-full flex flex-col">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-[color:var(--brown)] mb-4 border-b-2 border-[color:var(--gold)] pb-2">
                    Phần 3: Quá trình Sản xuất Giá trị Thặng dư (tiếp)
                  </h2>

                  <div className="space-y-4">
                    {/* Giá trị thặng dư */}
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                      <h3 className="font-bold text-[color:var(--brown)] mb-3">
                        Tính toán giá trị thặng dư:
                      </h3>
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded border shadow-sm">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                            Làm thêm 4 giờ:
                          </h4>
                          <ul className="text-xs space-y-1">
                            <li>• Sản phẩm tạo thêm: 50 kg sợi mới</li>
                            <li>
                              • Giá trị bán được: 68 USD + 68 USD = 136 USD
                            </li>
                            <li>• Chi phí thực tế: 50 + 6 + 15 = 121 USD</li>
                            <li className="font-bold text-[color:var(--brown)]">
                              → Giá trị thặng dư: 136 - 121 = 15 USD
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Kết luận */}
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                      <h3 className="font-bold text-[color:var(--brown)] mb-2">
                        Kết luận:
                      </h3>
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded border shadow-sm">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                            Định nghĩa giá trị thặng dư:
                          </h4>
                          <p className="text-sm">
                            Giá trị thặng dư (m) là bộ phận giá trị mới dôi ra
                            ngoài giá trị sức lao động do công nhân tạo ra, là
                            kết quả của lao động không công của công nhân cho
                            nhà tư bản.
                          </p>
                        </div>
                        <div className="bg-white p-3 rounded border border-[color:var(--gold)] shadow-sm">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                            Bản chất:
                          </h4>
                          <p className="text-sm font-bold text-[color:var(--brown)]">
                            Người lao động luôn phải làm việc nhiều hơn mức thời
                            gian cần thiết để tái sản xuất ra sức lao động của
                            mình.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Công thức */}
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-bold text-[color:var(--brown)] mb-2">
                        Công thức:
                      </h3>
                      <div className="text-center">
                        <p className="text-lg font-bold text-[color:var(--brown)]">
                          m = Giá trị mới - Giá trị sức lao động
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-[color:var(--grey)] text-center mt-4">
                  Trang 4
                </div>
              </div>
            </div>

            {/* Trang 5 - Phần 4 */}
            <div className="page bg-white">
              <div className="p-6 h-full flex flex-col">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-[color:var(--brown)] mb-4 border-b-2 border-[color:var(--gold)] pb-2">
                    Phần 4: Bản chất của Giá trị thặng dư
                  </h2>

                  <div className="space-y-4">
                    {/* Bản chất kinh tế - xã hội */}
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <h3 className="font-bold text-[color:var(--brown)] mb-2">
                        Bản chất kinh tế - xã hội:
                      </h3>
                      <p className="text-sm leading-relaxed">
                        Giá trị thặng dư là kết quả của sự hao phí sức lao động
                        trong sự thống nhất của quá trình tạo ra và làm tăng giá
                        trị. Quá trình này diễn ra trong quan hệ xã hội giữa
                        người mua và người bán hàng hóa sức lao động.
                      </p>
                    </div>

                    {/* Quan hệ giai cấp */}
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                      <h3 className="font-bold text-[color:var(--brown)] mb-3">
                        Quan hệ giai cấp:
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-white p-3 rounded border shadow-sm">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                            Giai cấp tư sản:
                          </h4>
                          <p className="text-xs">
                            Làm giàu dựa trên cơ sở thuê mướn lao động, mục đích
                            là giá trị thặng dư
                          </p>
                        </div>
                        <div className="bg-white p-3 rounded border shadow-sm">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                            Giai cấp công nhân:
                          </h4>
                          <p className="text-xs">
                            Phải bán sức lao động cho nhà tư bản để sinh sống
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Tỷ suất giá trị thặng dư */}
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                      <h3 className="font-bold text-[color:var(--brown)] mb-3">
                        Tỷ suất giá trị thặng dư (m&apos;):
                      </h3>
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded border shadow-sm">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                            Định nghĩa:
                          </h4>
                          <p className="text-xs">
                            Tỷ lệ phần trăm giữa giá trị thặng dư và tư bản khả
                            biến
                          </p>
                        </div>
                        <div className="bg-white p-3 rounded border border-[color:var(--gold)] shadow-sm text-center">
                          <p className="text-lg font-bold text-[color:var(--brown)]">
                            m&apos; = (m/v) × 100%
                          </p>
                          <p className="text-xs text-gray-600 mt-1">
                            Hoặc: m&apos; = (t&apos;/t) × 100%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-[color:var(--grey)] text-center mt-4">
                  Trang 5
                </div>
              </div>
            </div>

            {/* Trang 6 - Phần 4 (tiếp) */}
            <div className="page bg-white">
              <div className="p-6 h-full flex flex-col">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-[color:var(--brown)] mb-4 border-b-2 border-[color:var(--gold)] pb-2">
                    Phần 4: Bản chất của Giá trị thặng dư (tiếp)
                  </h2>

                  <div className="space-y-4">
                    {/* Khối lượng giá trị thặng dư */}
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                      <h3 className="font-bold text-[color:var(--brown)] mb-3">
                        Khối lượng giá trị thặng dư (M):
                      </h3>
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded border shadow-sm">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                            Định nghĩa:
                          </h4>
                          <p className="text-xs">
                            Lượng giá trị thặng dư bằng tiền mà nhà tư bản thu
                            được
                          </p>
                        </div>
                        <div className="bg-white p-3 rounded border border-[color:var(--gold)] shadow-sm text-center">
                          <p className="text-lg font-bold text-[color:var(--brown)]">
                            M = m&apos; × V
                          </p>
                          <p className="text-xs text-gray-600 mt-1">
                            (V: tổng tư bản khả biến)
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Ý nghĩa */}
                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                      <h3 className="font-bold text-[color:var(--brown)] mb-3">
                        Ý nghĩa:
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-white p-3 rounded border shadow-sm">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                            Tỷ suất (m&apos;):
                          </h4>
                          <p className="text-xs">
                            Phản ánh trình độ khai thác sức lao động làm thuê
                          </p>
                        </div>
                        <div className="bg-white p-3 rounded border shadow-sm">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                            Khối lượng (M):
                          </h4>
                          <p className="text-xs">
                            Phản ánh quy mô giá trị thặng dư mà chủ tư bản thu
                            được
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bảng tóm tắt công thức */}
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-bold text-[color:var(--brown)] mb-3">
                        Tóm tắt công thức:
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs border border-gray-300 bg-white rounded">
                          <thead>
                            <tr className="bg-[color:var(--brown)] text-white">
                              <th className="p-2 border">Tên gọi</th>
                              <th className="p-2 border">Công thức</th>
                              <th className="p-2 border">Ý nghĩa</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="p-2 border font-semibold">
                                Tỷ suất giá trị thặng dư
                              </td>
                              <td className="p-2 border text-center">
                                m&apos; = (m/v) × 100%
                              </td>
                              <td className="p-2 border">
                                Tỷ lệ giữa giá trị thặng dư và tư bản khả biến
                              </td>
                            </tr>
                            <tr>
                              <td className="p-2 border font-semibold">
                                Tỷ suất (theo thời gian)
                              </td>
                              <td className="p-2 border text-center">
                                m&apos; = (t&apos;/t) × 100%
                              </td>
                              <td className="p-2 border">
                                Tỷ lệ giữa thời gian lao động thặng dư và tất
                                yếu
                              </td>
                            </tr>
                            <tr>
                              <td className="p-2 border font-semibold">
                                Khối lượng giá trị thặng dư
                              </td>
                              <td className="p-2 border text-center">
                                M = m&apos; × V
                              </td>
                              <td className="p-2 border">
                                Tổng giá trị thặng dư thu được từ tổng tư bản
                                khả biến
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-[color:var(--grey)] text-center mt-4">
                  Trang 6
                </div>
              </div>
            </div>

            {/* Bìa sau */}
            <div className="page cover bg-gradient-to-br from-[color:var(--brown)] to-[color:var(--charcoal)]">
              <div className="flex flex-col items-center justify-center h-full text-center p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">
                  📖 Cảm ơn bạn đã đọc!
                </h2>
                <p className="text-lg mb-6">
                  Hy vọng bạn đã hiểu rõ hơn về lý thuyết giá trị thặng dư và
                  tác động của nó đến nền kinh tế hiện đại.
                </p>
                <div className="w-24 h-1 bg-[color:var(--gold)] mx-auto mb-4"></div>
              </div>
            </div>
          </HTMLFlipBook>
        </div>
      </motion.section>
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
