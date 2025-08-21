'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HTMLFlipBook from 'react-pageflip';
import { Bar } from 'react-chartjs-2';
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
} from 'chart.js';
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
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    speed: number;
    delay: number;
  }>>([]);

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
const NavigationButtons = ({ currentSection, totalSections, onNext, onPrev }: {
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
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-[color:var(--brown)] text-white hover:bg-[color:var(--charcoal)]'
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
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-[color:var(--gold)] text-[color:var(--charcoal)] hover:bg-yellow-400'
        }`}
      >
        Tiếp →
      </motion.button>
    </div>
  );
};

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isManualScrolling, setIsManualScrolling] = useState(false);
  
  const sections = [
    // Section 0: Hero Section
    {
      id: 'hero',
      title: 'Hero'
    },
    
    // Section 1: Introduction Section
    {
      id: 'introduction',
      title: 'Nguồn gốc'
    },
    
    // Section 2: Labor Power as Commodity Section
    {
      id: 'labor-power',
      title: 'Sức lao động'
    },
    
    // Section 3: Production Process Section
    {
      id: 'production-process',
      title: 'Quá trình sản xuất'
    },
    
    
    // Section 5: Question Answer Section
    {
      id: 'question-answer',
      title: 'Trả lời câu hỏi'
    },
    {
      id: 'summary',
      title: 'Tóm tắt toàn bộ Lý thuyết Giá trị Thặng dư'
    }
  ];

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      const nextSection = currentSection + 1;
      setCurrentSection(nextSection);
      setIsManualScrolling(true);
      const nextSectionElement = document.getElementById(sections[nextSection].id);
      if (nextSectionElement) {
        nextSectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
      const prevSectionElement = document.getElementById(sections[prevSection].id);
      if (prevSectionElement) {
        prevSectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => setIsManualScrolling(false), 600);
      } else {
        setIsManualScrolling(false);
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault();
        handleNext();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isManualScrolling]);

  const chartData: ChartData<'bar'> = {
    labels: [
      '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'
    ],
    datasets: [
      {
        type: 'bar',
        label: 'Năng suất lao động (triệu đồng/người)',
        data: [55.8, 70, 78.8, 85.2, 93.1, 97.7, 105.7, 117.2, 129.1, 141, 150.1, 173, 188.7, 199.3, 221.9],
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderRadius: 6,
        yAxisID: 'y',
      },
      {
        type: 'bar',
        label: 'Tỷ lệ lao động qua đào tạo (%)',
        data: [14.6, 15.4, 16.5, 17.9, 18.3, 20.1, 20.5, 21.3, 21.9, 22.6, 25, 26.1, 26.3, 27.1, 28.3],
        borderColor: 'orange',
        backgroundColor: 'orange',
        yAxisID: 'y1',
        order: 2,
      }
    ]
  };

  const chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: 'Năng suất lao động và tỷ lệ lao động qua đào tạo ở Việt Nam (2010-2024)',
        font: { size: 18 }
      }
    },
    scales: {
      y: {
        type: 'linear',
        position: 'left',
        title: { display: true, text: 'Triệu đồng/người' }
      },
      y1: {
        type: 'linear',
        position: 'right',
        grid: { drawOnChartArea: false },
        title: { display: true, text: 'Tỷ lệ (%)' },
        min: 0,
        max: 30
      }
    }
  };

  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--charcoal)] font-serif">
      {/* Hiệu ứng vàng rơi */}
      <GoldParticles />

      {/* Navigation Buttons */}
      <NavigationButtons
        currentSection={currentSection}
        totalSections={sections.length}
        onNext={handleNext}
        onPrev={handlePrev}
      />

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
            "url('https://hair-salon-fpt.io.vn/uploads/090e2710-c384-4ed7-8410-2f60e198d355_Gemini_Generated_Image_354s6e354s6e354s.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" aria-hidden />
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl sm:text-6xl font-extrabold uppercase text-white tracking-widest drop-shadow-lg mb-4">
            GIÁ TRỊ THẶNG DƯ
          </h1>
          <p className="text-lg sm:text-2xl text-white/90 max-w-2xl mb-8 drop-shadow">
            Giá trị thặng dư trong nền kinh tế thị trường
          </p>
          <a
            href="#introduction"
            className="bg-[color:var(--gold)] text-[color:var(--charcoal)] font-bold px-8 py-3 rounded-full shadow-lg text-lg hover:bg-yellow-600 transition"
          >
            Explore Theory
          </a>
        </div>
      </motion.section>

      {/* Introduction Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
        id="introduction"
        className="max-w-5xl mx-auto py-16 px-4"
      >
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[color:var(--brown)]">Tiền trong lưu thông hàng hóa</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="flex flex-row gap-8 flex-1 justify-center w-full">
            {/* Ảnh 1 */}
            <div className="flex flex-col items-center">
              <Image
                src="https://hair-salon-fpt.io.vn/uploads/1a398d1c-8aad-4ac6-b439-0332546b28e2_Gemini_Generated_Image_9fofra9fofra9fof.jpeg"
                alt="Ảnh phụ Marx"
                width={500}
                height={500}
                className="rounded-xl shadow-2xl object-cover border-4 border-[color:var(--gold)] bg-white"
              />
              <p className="mt-2 text-sm text-center text-[color:var(--charcoal)] font-medium">
                Lưu thông trong hàng hóa giản đơn
              </p>
            </div>

            {/* Ảnh 2 */}
            <div className="flex flex-col items-center">
              <Image
                src="https://hair-salon-fpt.io.vn/uploads/04877f64-bea3-4fdc-9f95-4bbf87fe3b13_Gemini_Generated_Image_1w34k21w34k21w34%20(1).jpg"
                alt="Ảnh nhà máy cũ"
                width={500}
                height={500}
                className="rounded-full shadow-2xl object-cover"
              />
              <p className="mt-2 text-sm text-center text-[color:var(--charcoal)] font-medium">
                Lưu thông trong tư bản
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Labor Power as Commodity Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        id="labor-power"
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 py-16 px-4"
      >
        <div className="flex-1 min-w-[250px]">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[color:var(--brown)]">Hàng hóa Sức Lao động – Chìa khóa của Giá trị Thặng dư</h2>
          <ul className="list-disc pl-5 space-y-2 text-lg text-[color:var(--charcoal)]">
            <li><b>Khái niệm:</b> Sức lao động là toàn bộ năng lực thể chất và tinh thần của con người dùng để sản xuất ra giá trị sử dụng.</li>
            <li><b>Tại sao sức lao động trở thành hàng hóa?</b>
              <ul className="list-[circle] pl-6 mt-1 text-base">
                <li>Người lao động tự do về thân thể.</li>
                <li>Người lao động không có tư liệu sản xuất để tự làm ra sản phẩm.</li>
              </ul>
            </li>
            <li><b>Thuộc tính đặc biệt của hàng hóa Sức lao động:</b>
              <ul className="list-[circle] pl-6 mt-1 text-base">
                <li><b>Giá trị của sức lao động:</b> Được quyết định bởi chi phí để tái sản xuất ra sức lao động (ăn uống, ở, học hành, nuôi con...).</li>
                <li><b>Giá trị sử dụng của sức lao động:</b> <span className="text-[color:var(--gold)] font-bold">Là khả năng tạo ra một giá trị mới lớn hơn giá trị bản thân nó.</span> <span className="italic">Đây chính là điều đặc biệt, là &apos;bí mật&apos; của giá trị thặng dư.</span></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="flex-1 min-w-[250px] flex justify-center">
          <Image
            src="https://hair-salon-fpt.io.vn/uploads/5c3644d7-d191-412b-84d2-826dbe2fa471_Gemini_Generated_Image_msjl61msjl61msjl.jpeg"
            alt="Sức lao động icon"
            width={500}
            height={350}
            className="rounded-full bg-[color:var(--gold)]/20 p-6 shadow-lg"
          />
        </div>
      </motion.section>

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
        <KetQuaPage/>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
        id="production-process"
        className="max-w mx-auto relative"
      >
        <HistoricalSignificance/>
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
        <SurplusValueQuizBook/>
        
      </motion.section>

      {/* Final Call-to-Action Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        id="question-answer"
        // className="max-w mx-auto  flex flex-col items-center text-center"
      >
        <Footer/>
      </motion.section>
      
    </div>
  );
}
