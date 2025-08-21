'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HTMLFlipBook from 'react-pageflip';
import DiaglogContentTab from "@/components/DiaglogContentTab";
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
        className={`px-6 py-3 rounded-full shadow-lg font-bold transition-all ${currentSection === 0
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
        className={`px-6 py-3 rounded-full shadow-lg font-bold transition-all ${currentSection === totalSections - 1
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
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
        id="production-process"
        className="max-w-5xl mx-auto py-16 px-4"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-[color:var(--brown)] text-center">
          Quá trình sản xuất giá trị thặng dư trong ngày làm việc của lập trình viên
        </h2>
        {/* Timeline 8 tiếng */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative w-full max-w-lg">
            <div className="flex h-15 rounded-full overflow-hidden shadow border border-[color:var(--gold)]">
              <div className="flex-1 flex items-center justify-center bg-gradient-to-r from-[color:var(--gold)] to-yellow-200 text-[color:var(--charcoal)] font-bold text-sm">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-10 text-[color:var(--charcoal)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"></path><circle cx="12" cy="12" r="10"></circle></svg>
                  4h tất yếu<br />(1.000.000 VNĐ)
                </span>
              </div>
              <div className="flex-1 flex items-center justify-center bg-gradient-to-r from-[color:var(--brown)] to-yellow-900 text-white font-bold text-sm">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"></path><circle cx="12" cy="12" r="10"></circle></svg>
                  4h thặng dư<br />(1.000.000 VNĐ)
                </span>
              </div>
            </div>
            <div className="flex w-full justify-between mt-2 text-xs text-[color:var(--charcoal)]">
              <span>0h</span>
              <span>8h</span>
            </div>
          </div>
          <div className="mt-4 text-center text-base text-[color:var(--charcoal)]">
            <b>4 giờ lao động tất yếu:</b> Tạo ra giá trị bù đắp lương (1.000.000 VNĐ).<br />
            <b>4 giờ lao động thặng dư:</b> Tạo ra giá trị thặng dư cho công ty (1.000.000 VNĐ).
          </div>
        </div>
        {/* Bảng phân tích giá trị sản phẩm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-[color:var(--charcoal)] flex flex-col items-center">
            <div className="font-bold text-[color:var(--charcoal)]">Tư bản bất biến (c)</div>
            <div className="text-xl font-bold text-[color:var(--brown)]">850.000 VNĐ</div>
            <div className="text-xs text-[color:var(--grey)] mt-1">Thiết bị, phần mềm, chi phí văn phòng</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-[color:var(--gold)] flex flex-col items-center">
            <div className="font-bold text-[color:var(--charcoal)]">Giá trị sức lao động (v)</div>
            <div className="text-xl font-bold text-[color:var(--gold)]">1.000.000 VNĐ</div>
            <div className="text-xs text-[color:var(--grey)] mt-1">Tiền lương (4h tất yếu)</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-[color:var(--brown)] flex flex-col items-center">
            <div className="font-bold text-[color:var(--charcoal)]">Giá trị thặng dư (m)</div>
            <div className="text-xl font-bold text-[color:var(--brown)]">1.000.000 VNĐ</div>
            <div className="text-xs text-[color:var(--grey)] mt-1">Tạo ra trong 4h thặng dư</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-[color:var(--gold)] flex flex-col items-center">
            <div className="font-bold text-[color:var(--charcoal)]">Tổng giá trị sản phẩm</div>
            <div className="text-xl font-bold text-[color:var(--gold)]">2.850.000 VNĐ</div>
            <div className="text-xs text-[color:var(--grey)] mt-1">c + v + m</div>
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
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[color:var(--brown)] text-lg mb-3">Kết luận quan trọng</h4>
                <blockquote className="text-lg text-[color:var(--charcoal)] italic leading-relaxed mb-4">
                  Giá trị thặng dư là bộ phận giá trị mới dôi ra ngoài giá trị sức lao động do công nhân tạo ra, là kết quả của lao động không công của công nhân cho nhà tư bản.
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
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[color:var(--brown)]">Trả lời câu hỏi</h2>
        <p className="mb-6 text-lg text-[color:var(--charcoal)]"> Làm 8 tiếng nhưng sống không đủ: Giá trị thặng dư ở đâu?</p>

        {/* Bảng mức lương tối thiểu vùng 2025 */}
        <div className="w-full bg-white rounded-xl shadow-lg p-6 mb-8">
          <Bar data={chartData} options={chartOptions} />
          <div className="text-xs text-gray-500 mt-2 text-right">Nguồn: Cục Thống kê</div>
        </div>

        <div className="w-full overflow-x-auto mt-10">
          <table className="min-w-[600px] w-full border border-gray-300 rounded-xl overflow-hidden shadow-lg bg-white">
            <thead>
              <tr className="bg-[color:var(--brown)] text-white">
                <th className="py-3 px-4 text-base font-bold border-r border-[color:var(--gold)]">Vùng</th>
                <th className="py-3 px-4 text-base font-bold border-r border-[color:var(--gold)]">Mức lương tối thiểu tháng<br />(đồng/tháng)</th>
                <th className="py-3 px-4 text-base font-bold">Mức lương tối thiểu giờ<br />(đồng/giờ)</th>
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
          <div className="text-xs text-gray-500 mt-2">Nguồn: Dự thảo mức lương tối thiểu vùng năm 2025</div>
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

        <div className="flex justify-center mb-8">
          <DiaglogContentTab
            title="Đợt 1 (13/3 – 17/3/1954)"
            tabs={[
              {
                key: 'prepare',
                label: 'Chuẩn bị',
                content: (
                  <div className="space-y-4 leading-relaxed text-[color:var(--charcoal)]">
                    <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                      <p>
                        Bộ Chỉ huy chuyển phương châm từ "đánh nhanh, thắng nhanh" sang <b>"đánh chắc, tiến chắc"</b> để bảo đảm thắng lợi bền vững.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-semibold text-[color:var(--brown)] mb-1">Bố trí địch (phân khu Bắc)</h5>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Ba cụm cứ điểm: <b>Him Lam – Độc Lập – Bản Kéo</b> ("lá chắn" vòng ngoài).</li>
                            <li>Liên kết hỏa lực, công sự vững chắc, yểm trợ pháo từ trung tâm Mường Thanh.</li>
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-semibold text-[color:var(--brown)] mb-1">Lực lượng ta và nhiệm vụ</h5>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li><b>Đại đoàn 312</b>: tiến công <b>Him Lam</b> và <b>Độc Lập</b>.</li>
                            <li><b>Đại đoàn 308</b>: tiến công <b>Bản Kéo</b>.</li>
                            <li><b>Pháo binh 351</b>: chế áp, chi viện trực tiếp cho bộ binh.</li>
                            <li><b>Công binh</b>: mở cửa, phá rào, bộc phá, bảo đảm cơ động.</li>
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-semibold text-[color:var(--brown)] mb-1">Phương án hiệp đồng</h5>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Pháo mở màn, đánh gần, đánh lô cốt; tác chiến <b>ban đêm</b> linh hoạt.</li>
                            <li>Giữ vững trận địa, sẵn sàng đập tan phản kích, nhanh chóng củng cố cửa mở.</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Image
                          src="https://hair-salon-fpt.io.vn/uploads/14d5d4e0-a2dc-4a47-ade5-8d186e417790_dai%20tuong%20vo%20nguyen%20giao.jpg"
                          alt="Đại tướng Võ Nguyên Giáp chỉ đạo chiến dịch"
                          width={800}
                          height={600}
                          sizes="(max-width: 768px) 100vw, 600px"
                          className="w-full h-auto object-contain rounded"
                        />
                        <p className="text-xs text-gray-600 text-center mt-2 italic">Chỉ đạo chiến dịch: giữ vững phương châm "đánh chắc, tiến chắc"</p>
                      </div>
                    </div>

                    <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                      <h5 className="font-semibold text-[color:var(--brown)] mb-2">Mục tiêu Đợt 1</h5>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Phá vỡ <b>tuyến phòng thủ vòng ngoài</b> phía Bắc.</li>
                        <li>Làm chủ các <b>điểm cao then chốt</b>, mở cửa vào trung tâm Mường Thanh.</li>
                        <li>Tiêu hao nặng sinh lực địch, <b>làm suy sụp tinh thần</b> và khả năng ứng cứu.</li>
                        <li>Tạo bàn đạp vững chắc cho <b>đợt tiến công thứ hai</b>.</li>
                      </ul>
                    </div>
                  </div>
                ),
              },
              {
                key: 'map',
                label: 'Bản đồ',
                content: (
                  <div className="space-y-4 leading-relaxed text-[color:var(--charcoal)]">

                    <Image
                      src="https://hair-salon-fpt.io.vn/uploads/68994766-8564-4fbf-868b-b906bc8d5fb1_hinh-168-su-9-nnn.jpg"
                      alt="Minh họa"
                      width={600}
                      height={800}
                      className="w-full h-full object-contain rounded"
                    />
                  </div>
                )
              },
              {
                key: 'progress',
                label: 'Diễn biến',
                content: (
                  <div className="space-y-4 leading-relaxed text-[color:var(--charcoal)]">
                    <p>
                      Đợt 1 mở màn chiến dịch với các đòn đánh nhanh, chắc, nhằm phá vỡ "lá chắn" phía Bắc (Him Lam – Độc Lập – Bản Kéo), mở cửa vào trung tâm Mường Thanh.
                    </p>

                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                        <h4 className="font-semibold text-[color:var(--brown)] mb-1">Chiều 13/3 – Đêm 13/3: Him Lam</h4>
                        <p>
                          Pháo binh 351 bất ngờ chế áp; Đại đoàn 312 xung phong đánh chiếm trung tâm đề kháng. Đến đêm 13/3, ta làm chủ Him Lam; phản kích sáng 14/3 của địch bị đập tan.
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                        <h4 className="font-semibold text-[color:var(--brown)] mb-1">Chiều 14/3 – Rạng sáng 15/3: Độc Lập</h4>
                        <p>
                          Ta nổ súng 16:45, hiệp đồng bộ binh – pháo binh – công binh, đánh chiếm điểm cao Độc Lập sau một đêm chiến đấu ác liệt, giữ vững trước nhiều đợt phản kích.
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                        <h4 className="font-semibold text-[color:var(--brown)] mb-1">Sáng 17/3: Bản Kéo</h4>
                        <p>
                          Thế trận áp đảo, địch hoang mang rút bỏ Bản Kéo; ta làm chủ toàn bộ phân khu Bắc mà gần như không phải nổ súng, hoàn tất mục tiêu mở cửa tiến công.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border">
                      <h5 className="font-semibold text-[color:var(--brown)] mb-2">Điểm nhấn chiến thuật</h5>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Pháo binh 351 lần đầu xuất trận, tạo ưu thế hỏa lực quyết định.</li>
                        <li>Đột phá cửa mở qua nhiều lớp rào, đánh gần, đánh lô cốt hiệu quả.</li>
                        <li>Hiệp đồng chặt chẽ bộ binh – pháo binh – công binh; tác chiến ban đêm linh hoạt.</li>
                        <li>Địch suy sụp tinh thần, rút chạy hoặc bị tiêu diệt ở các cứ điểm then chốt.</li>
                      </ul>
                    </div>
                  </div>
                ),
              },
              {
                key: 'result',
                label: 'Kết quả',
                content: (
                  <div className="space-y-4 leading-relaxed text-[color:var(--charcoal)]">
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-[color:var(--brown)] mb-2">Kết quả trực tiếp</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Mất toàn bộ phân khu Bắc; tuyến phòng thủ vòng ngoài bị xóa sổ.</li>
                        <li>Sinh lực địch tổn thất nặng (≈2.500 tên bị loại khỏi vòng chiến đấu).</li>
                        <li>Địch buộc co cụm về Mường Thanh và Hồng Cúm, thế trận bị động.</li>
                        <li>Tinh thần quân Pháp sa sút nghiêm trọng trước ưu thế hỏa lực của ta.</li>
                      </ul>
                    </div>

                    <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                      <h4 className="font-semibold text-[color:var(--brown)] mb-2">Ý nghĩa chiến dịch</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Tiêu diệt gọn “lá chắn” phía Bắc – mở màn thắng lợi cho toàn chiến dịch.</li>
                        <li>Khẳng định phương châm “đánh chắc, tiến chắc” là đúng đắn và hiệu quả.</li>
                        <li>Cổ vũ mạnh mẽ tinh thần quân dân, tạo tiếng vang lớn quốc tế.</li>
                        <li>Tạo bàn đạp vững chắc cho Đợt 2, siết chặt vòng vây Điện Biên Phủ.</li>
                      </ul>
                    </div>
                  </div>
                ),
              },
            ]}
          />

          <DiaglogContentTab
            title="Trận Him Lam (13 – rạng sáng 14/3/1954)"
            tabs={[
              {
                key: 'progress',
                label: 'Diễn biến',
                content: (
                  <div className="space-y-6 leading-relaxed text-[color:var(--charcoal)]">
                    {/* Timeline Section */}
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                        <h4 className="font-semibold text-[color:var(--brown)] mb-2">8:00 sáng ngày 13-3-1954</h4>
                        <p>
                          Những viên đạn sơn pháo của bộ đội ta bắn vào sân bay Mường Thanh làm hai chiếc máy bay Dakota của quân Pháp vừa hạ cánh xuống đây bốc cháy.
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                        <h4 className="font-semibold text-[color:var(--brown)] mb-2">17:05 chiều ngày 13-3-1954</h4>
                        <p>
                          Sau hiệu lệnh của Đại tướng Võ Nguyên Giáp, 40 khẩu pháo cỡ nòng 75mm đến 120mm đồng loạt nhả đạn vào các vị trí của quân Pháp trong cứ điểm Him Lam, bộ đội ta xuất kích bắt đầu trận đánh mở màn của Chiến dịch Điện Biên Phủ.
                        </p>
                      </div>
                    </div>

                    {/* Image Section */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <Image
                        src="https://hair-salon-fpt.io.vn/uploads/8fd11ff7-41ee-4348-8a04-7496d54c7723_naphao.jpg"
                        alt="Minh họa trận đánh Him Lam"
                        width={800}
                        height={1200}
                        className="w-full h-auto object-contain rounded-lg shadow-md"
                      />
                      <p className="text-sm text-gray-600 text-center mt-2 italic">Hình ảnh minh họa trận đánh Him Lam</p>
                    </div>

                    {/* Results Section */}
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-[color:var(--brown)] mb-2">Kết quả trận đánh</h4>
                      <p>
                        Trận đánh cứ điểm Him Lam kéo dài đến 23 giờ 30 phút đêm ngày 13-3-1954 thì kết thúc. 7 giờ 30 phút ngày 14-3-1954, quân địch tổ chức lực lượng phản kích hòng chiếm lại Him Lam nhưng bị thất bại và tiếp tục bị thiệt hại nặng, phải từ bỏ hoàn toàn ý định chiếm lại cứ điểm Him Lam.
                      </p>
                      <p className="mt-2 font-medium">
                        <strong>Kết quả:</strong> Đại đoàn 312 đã hoàn thành nhiệm vụ tiêu diệt trung tâm đề kháng cứ điểm Him Lam, diệt 300 tên địch, bắt 200 tên, thu toàn bộ vũ khí, trang bị…
                      </p>
                    </div>

                    {/* Quote Section */}
                    <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                      <div className="flex items-start space-x-3">
                        <div className="text-amber-600 text-2xl">"</div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-600 mb-2">
                            <strong>Hạ sĩ Kubiak</strong> - người sống sót trong trận Him Lam kể lại về trận pháo hỏa mở màn chiều ngày 13-3-1954:
                          </p>
                          <blockquote className="italic text-[color:var(--charcoal)] leading-relaxed">
                            "Vào lúc đó, dập một cái, ngày tận thế đã đến... Béatrice bay đi, tan thành bụi. Quanh tôi đất đá tung lên, những người lính lê dương gục xuống, bị thương và chết nằm la liệt. Tất cả đều kinh ngạc và tự hỏi không biết Việt Minh lấy ở đâu ra nhiều pháo đến thế, có thể bắn mạnh đến thế. Đạn đại bác trút xuống không ngừng như một trận mưa đá bất thần buổi chiều thu. Lô cốt, đường hào nối tiếp nhau đè bẹp, chôn vùi người và vũ khí".
                          </blockquote>
                        </div>
                        <div className="text-amber-600 text-2xl">"</div>
                      </div>
                    </div>
                    {/* Heroic Stories Section */}
                    <div className="space-y-6">
                      {/* Hero Phan Đình Giót */}
                      <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-500">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-lg">PG</span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-[color:var(--brown)] mb-2">
                              Anh hùng liệt sĩ Phan Đình Giót
                            </h4>
                            <p className="text-[color:var(--charcoal)] leading-relaxed mb-3">
                              Chiều 13-3-1954, trong trận mở màn Chiến dịch Điện Biên Phủ, anh hùng Phan Đình Giót đã chiến đấu kiên cường và dũng cảm lấy thân mình lấp lỗ châu mai, dập tắt hỏa lực của địch, tạo điều kiện cho đơn vị xông lên tiêu diệt cứ điểm Him Lam.
                            </p>
                            <div className="bg-white/50 p-3 rounded border-l-3 border-red-400">
                              <p className="text-sm text-gray-700 italic">
                                "Lấy thân mình lấp lỗ châu mai để quân ta chớp thời cơ, xông lên tiêu diệt cứ điểm Him Lam, giành thắng lợi trong trận mở màn"
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Hero Tô Vĩnh Diện */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-lg">TV</span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-[color:var(--brown)] mb-2">
                              Anh hùng Tô Vĩnh Diện
                            </h4>
                            <p className="text-[color:var(--charcoal)] leading-relaxed">
                              Trong chiến dịch này đã xuất hiện nhiều tấm gương dũng cảm, mưu trí "gan không núng, chí không mòn". Đó là hình ảnh Anh hùng Tô Vĩnh Diện hy sinh thân mình để cứu khẩu pháo.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Image Section */}
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="text-center mb-4">
                          <h5 className="text-lg font-semibold text-[color:var(--brown)] mb-2">
                            Hình ảnh lịch sử
                          </h5>
                          <p className="text-sm text-gray-600">
                            Tư liệu: TTXVN
                          </p>
                        </div>
                        <Image
                          src="https://hair-salon-fpt.io.vn/uploads/5bb339f8-641e-4357-9dc2-ad17ef1e94ee_tovinhdien-1.jpg"
                          alt="Anh hùng Tô Vĩnh Diện - Tư liệu TTXVN"
                          width={800}
                          height={1200}
                          className="w-full h-auto object-contain rounded-lg shadow-md mx-auto"
                        />
                        <div className="mt-4 text-center">
                          <p className="text-sm text-gray-600 italic">
                            Hình ảnh minh họa về các anh hùng trong Chiến dịch Điện Biên Phủ
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              }

            ]}
          />
          <DiaglogContentTab
            title="Trận Độc Lập (14 – 15/3/1954)"
            tabs={[
              {
                key: 'progress',
                label: 'Diễn biến',
                content: (
                  <div className="space-y-6 leading-relaxed text-[color:var(--charcoal)]">
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                        <h4 className="font-semibold text-[color:var(--brown)] mb-2">Chiều 14-3-1954</h4>
                        <p>
                          Đúng 16 giờ 45 phút ngày 14-3-1954, đơn vị được lệnh hành quân vào vị trí xuất phát xung phong. Bộ đội hành quân gặp trời mưa tầm tã. Các chiến hào đất bùn lầy lội, lại bị pháo địch ở Mường Thanh, Hồng Cúm bắn ra dồn dập. Súng cối 120 ly trong cứ điểm cũng nhả đạn về hướng tiến quân của ta, đồng thời pháo của ta cũng bắn vào các trận địa pháo địch ở Mường Thanh tạo thời cơ cho bộ đội tiến vào vị trí xuất phát xung phong thuận lợi.

                          Đúng 24 giờ ngày 14-3-1954, Tiểu đoàn 115, Trung đoàn 165 ở hướng chủ yếu đã vào được vị trí xuất phát xung phong. Hướng thứ yếu của Trung đoàn 88 cũng đã vào vị trí chiến đấu đúng thời gian. Các chiến sĩ bộc phá những đơn vị xung kích mũi nhọn đã trườn qua các khoảng trống dưới trời mưa vượt qua tầm đạn pháo của địch cày đi xới lại. Bộ đội bí mật nhích dần về phía chân cứ điểm, với quyết tâm hừng hực khí thế chiến đấu, cán bộ, chiến sĩ đều nóng lòng, sốt ruột chờ đợi lệnh nổ súng, đề nghị trên cho đánh.

                          Nhưng được lệnh của Bộ chỉ huy mặt trận truyền xuống, theo kế hoạch pháo cối hôm 13-3 phối hợp yểm trợ chi viện cho trận đánh Him Lam, được chuyển tất cả sang tham gia chiến đấu chi viện cho đồi Độc Lập, đang trên đường hành quân di chuyển, do trời mưa đường sá lầy lội chưa tới được. Để hạn chế tổn thất thấp nhất và chắc thắng, phải chờ pháo tăng cường đến.


                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                        <h4 className="font-semibold text-[color:var(--brown)] mb-2">Ngày 15 – 16/3/1954</h4>
                        <p>
                          Chờ đến 2 giờ sáng ngày 15-3, pháo mới tới trận địa, 3 giờ được lệnh tấn công. Tất cả các loại hoả lực, trọng pháo của Bộ chỉ huy mặt trận bắn dồn dập, mãnh liệt vào các trận địa pháo của địch để khống chế uy hiếp. Pháo địch bị hạn chế bắn vào đội hình quân ta.

                          Ngoài ra, các loại pháo đi cùng tham gia bắn chế áp vào cứ điểm, tiêu diệt các ổ đề kháng của địch, chi viện đắc lực cho bộ binh tiến hành mở cửa. Hướng chủ yếu của Trung đoàn 165 tiến hành thuận lợi, Tiểu đoàn 115 chủ công tiến lên đánh bộc phá mở cửa, giữa lúc pháo ta vẫn tiếp tục bắn chế áp và chuyển làn dần vào các mục tiêu trong khu trung tâm cứ điểm. Sau 40 phút, chiến sĩ bộc phá đã tiến hành mở cửa xong, tiểu đội mũi nhọn nhanh chóng xung phong, vượt qua cửa mở, ào ạt tiến vào cứ điểm phát triển chiến đấu, nhằm vào những mục tiêu của địch.

                          Hồi ức về trận chiến đồi Độc Lập tại Điện Biên Phủ
                          Bức ảnh ghi lại khoảnh khắc Đại tướng Võ Nguyên Giáp ôm đồng chí Bùi Đức Tùng.


                          Cuộc chiến đấu ngay từ lúc đầu đã diễn ra rất quyết liệt, giành đi giật lại, từng lô cốt, từng đoạn chiến hào. Bọn địch dựa vào hầm ngầm công sự chống trả quyết liệt, Tiểu đội trưởng Trần Ngọc Doãn nhanh chóng bắt được một tù binh và bắt nó dẫn đường tiến thẳng tới trận địa cối, tiêu diệt phá huỷ 4 khẩu 120 ly, rồi phát triển đánh chiếm khu thông tin và Sở chỉ huy của địch, tạo điều kiện thuận lợi cho Tiểu đoàn 115 phát triển chiến đấu.

                          Trên hướng thứ yếu, đơn vị chủ công của Trung đoàn 88 cùng tiến hành mở cửa, nhưng đã gần 4 giờ sáng, đội bộc phá vẫn chưa đánh phá xong các hàng rào. Đồng chí Tiểu đội trưởng Nguyễn Văn Tý liên tiếp kiểm tra đội đánh bộc phá, phát hiện đánh sai hướng mở cửa, bị hoả lực địch ngăn chặn, lập tức đồng chí Tý đã kịp thời điều chỉnh và chỉ huy tiếp tục cho đánh bộc phá vào các hàng rào còn lại.

                          Hơn 4 giờ sáng, ta đánh xong hàng rào cuối cùng, đưa lực lượng vào phát triển chiến đấu, nhanh chóng đánh chiếm các mục tiêu hoả lực, hầm ngầm lô cốt. Địch ngoan cố chống trả quyết liệt. Các tổ 3 người dùng thủ pháo, lựu đạn, tiểu liên diệt từng tên địch phối hợp với Tiểu đoàn 115 chiếm từng đoạn chiến hào, từng lô cốt, ụ súng. Trận chiến đấu càng về cuối càng gay go quyết liệt với ý đồ của chúng là ra sức cầm cự chờ đến sáng lực lượng ở Mường Thanh ra cứu viện, nhưng quyết tâm của cán bộ chiến sĩ ta kiên quyết giải quyết xong trước khi trời sáng.

                          Trận đánh từ 3 giờ 30 phút cho đến 6 giờ 30 phút ngày 15-3-1954 mới kết thúc. Quân ta hoàn toàn làm chủ đồi Độc Lập, tiêu diệt 483 tên địch, trong đó có 2 tên quan ba, bắt sống 200 tên, thu toàn bộ vũ khí, xoá sổ Tiểu đoàn 5 Bắc Phi. Vừa kết thúc trận đánh, thì trời cũng vừa sáng. Bọn địch ở Trung tâm Mường Thanh đưa lực lượng bộ binh và xe tăng ra phản kích, thì bị Đại đội 213 của Trung đoàn 88 chặn đánh tiêu diệt một số tên, buộc chúng phải dừng lại và quay đầu rút chạy về trung tâm Mường Thanh.
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                        <h4 className="font-semibold text-[color:var(--brown)] mb-2">Sáng 17-3-1954</h4>
                        <p>
                          Thấy ta chuẩn bị tấn công, quân Pháp ở Bản Kéo sợ hãi rút chạy. Trung đoàn 36 của ta không cần nổ súng đã chiếm Bản Kéo và làm chủ các ngọn đồi phía Bắc sân bay Mường Thanh.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <Image
                        src="https://hair-salon-fpt.io.vn/uploads/14d5d4e0-a2dc-4a47-ade5-8d186e417790_dai%20tuong%20vo%20nguyen%20giao.jpg"
                        alt="Minh họa trận Độc Lập"
                        width={800}
                        height={1200}
                        className="w-full h-auto object-contain rounded-lg shadow-md"
                      />
                      <p className="text-sm text-gray-600 text-center mt-2 italic">Hình ảnh minh họa trận đánh Độc Lập</p>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-[color:var(--brown)] mb-2">Kết quả</h4>
                      <p>
                        Tiểu đoàn Bắc Phi của Pháp bị xóa sổ; 483 tên địch bị tiêu diệt, 200 tên bị bắt. Ta giữ vững trận địa, tạo thế tiến công sang Bản Kéo.
                      </p>
                    </div>
                  </div>
                ),
              },
            ]}
          />

          <DiaglogContentTab
            title="Trận Bản Kéo (16 – 17/3/1954)"
            tabs={[
              {
                key: 'progress',
                label: 'Diễn biến',
                content: (
                  <div className="space-y-6 leading-relaxed text-[color:var(--charcoal)]">
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                        <h4 className="font-semibold text-[color:var(--brown)] mb-2">Ngày 16/3/1954</h4>
                        <p>
                          Ta gửi Lời kêu gọi đầu hàng tới chỉ huy Bản Kéo. Công tác địch vận được đẩy mạnh, truyền đơn và loa kêu gọi binh sĩ người Thái trở về mường bản.
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                        <h4 className="font-semibold text-[color:var(--brown)] mb-2">Ngày 17/3/1954</h4>
                        <p>
                          Ta bao vây, bức hàng Bản Kéo; địch nhiều lần phản kích đều thất bại. Biết khó giữ, chỉ huy Pháp lệnh cho tiểu đoàn ngụy Thái rút về Mường Thanh nhưng binh lính tan rã hàng loạt theo tiếng loa địch vận.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <Image
                        src="https://m.baotuyenquang.com.vn/media/images/2024/03/img_20240316110507.jpg"
                        alt="Bức hàng cụm cứ điểm Bản Kéo"
                        width={800}
                        height={1200}
                        className="w-full h-auto object-contain rounded-lg shadow-md"
                      />
                      <p className="text-sm text-gray-600 text-center mt-2 italic">Hình ảnh minh họa trận đánh Bản Kéo</p>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-[color:var(--brown)] mb-2">Kết quả</h4>
                      <p>
                        Ta đón 241 hàng binh, làm chủ Bản Kéo và các ngọn đồi phía bắc sân bay. Kết thúc đợt 1, hệ thống phòng ngự hướng bắc của địch bị phá vỡ, tạo đà cho đợt 2.
                      </p>
                    </div>
                  </div>
                ),
              },
            ]}
          />
          <DiaglogContentTab
            title="Đợt 2 (30/3 – 30/4/1954) – Tiến công mở rộng, siết chặt vòng vây"
            tabs={[
              {
                key: 'progress',
                label: 'Diễn biến',
                content: (
                  <div className="space-y-6 leading-relaxed text-[color:var(--charcoal)]">
                    <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                      <p>
                        18 giờ ngày 30/3, ta mở đợt tiến công thứ hai, đánh vào các điểm cao then chốt và siết chặt vòng vây quanh Mường Thanh – Hồng Cúm.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <Image
                        src="https://hair-salon-fpt.io.vn/uploads/14d5d4e0-a2dc-4a47-ade5-8d186e417790_dai%20tuong%20vo%20nguyen%20giao.jpg"
                        alt="Minh họa đợt 2"
                        width={800}
                        height={1200}
                        className="w-full h-auto object-contain rounded-lg shadow-md"
                      />
                      <p className="text-sm text-gray-600 text-center mt-2 italic">Hình ảnh minh họa đợt tiến công 2</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-[color:var(--brown)] mb-2">Kết quả</h4>
                      <p>
                        Ta chiếm thêm nhiều cao điểm, phá vỡ các cụm đề kháng vòng ngoài, cắt đứt sân bay Mường Thanh và siết chặt vòng vây, khiến khả năng tiếp tế của địch suy giảm nghiêm trọng.
                      </p>
                    </div>
                  </div>
                ),
              },
            ]}
          />
          <DiaglogContentTab
            title="Các trận đánh trên cao điểm (30 – 31/3/1954)"
            tabs={[
              {
                key: 'progress',
                label: 'Diễn biến',
                content: (
                  <div className="space-y-6 leading-relaxed text-[color:var(--charcoal)]">
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                        <h4 className="font-semibold text-[color:var(--brown)] mb-2">C1 (Eliane 1)</h4>
                        <p>Bộc lôi mở rào; sau 45 phút làm chủ trận địa. Toàn bộ một đại đội Pháp bị diệt, ta hy sinh 10 người.</p>
                      </div>
                      <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                        <h4 className="font-semibold text-[color:var(--brown)] mb-2">C2 (Eliane 4)</h4>
                        <p>Đêm 30/3 chiếm được nhiều lô cốt nhưng không giữ được do hỏa lực địch mạnh.</p>
                      </div>
                      <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                        <h4 className="font-semibold text-[color:var(--brown)] mb-2">D1 (Dominique 2)</h4>
                        <p>Trung đoàn 209 chiếm trong 2 giờ; chỉ huy Pháp Garandeau tử trận. Ngày 31/3, địch phản kích thất bại, rút bỏ cả D3.</p>
                      </div>
                      <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                        <h4 className="font-semibold text-[color:var(--brown)] mb-2">E (Dominique 1)</h4>
                        <p>Địch thay quân đúng lúc bị pháo ta tập kích; Tiểu đoàn 16 và 428 chiếm toàn bộ vào 19h45 ngày 30/3.</p>
                      </div>
                      <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                        <h4 className="font-semibold text-[color:var(--brown)] mb-2">A1 (Eliane 2)</h4>
                        <p>Then chốt, công sự nhiều tầng, tiến công rất khó khăn. Đêm 30 rạng 31/3 giằng co, mỗi bên giữ nửa đồi. Cuối tháng 3, A1 là “thành lũy cuối cùng” của địch ở trung tâm.</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <Image
                        src="https://hair-salon-fpt.io.vn/uploads/14d5d4e0-a2dc-4a47-ade5-8d186e417790_dai%20tuong%20vo%20nguyen%20giao.jpg"
                        alt="Minh họa các cao điểm"
                        width={800}
                        height={1200}
                        className="w-full h-auto object-contain rounded-lg shadow-md"
                      />
                      <p className="text-sm text-gray-600 text-center mt-2 italic">Hình ảnh minh họa các trận đánh trên cao điểm</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-[color:var(--brown)] mb-2">Kết quả</h4>
                      <p>
                        Ta làm chủ C1, D1, E; đánh thiệt hại nặng quân ứng cứu, đẩy lùi phản kích. A1 tiếp tục giằng co, trở thành điểm tựa cuối cùng của địch ở trung tâm đến cuối tháng 3.
                      </p>
                    </div>
                  </div>
                ),
              },
            ]}
          />
          <DiaglogContentTab
            title="Chiến thuật vây lấn bằng đào hào (từ đầu tháng 4/1954)"
            tabs={[
              {
                key: 'progress',
                label: 'Diễn biến',
                content: (
                  <div className="space-y-6 leading-relaxed text-[color:var(--charcoal)]">
                    <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                      <p>
                        Bộ đội ta đào hơn 100 km giao thông hào: hào trục để cơ động pháo, vận chuyển; hào tiếp cận áp sát địch. Ban đêm lăn “con cúi” che đạn để đào hào an toàn. Vòng vây siết dần, sân bay bị cắt, binh lính địch luôn bị bắn tỉa khi cơ động.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <Image
                        src="https://hair-salon-fpt.io.vn/uploads/14d5d4e0-a2dc-4a47-ade5-8d186e417790_dai%20tuong%20vo%20nguyen%20giao.jpg"
                        alt="Minh họa chiến thuật vây lấn"
                        width={800}
                        height={1200}
                        className="w-full h-auto object-contain rounded-lg shadow-md"
                      />
                      <p className="text-sm text-gray-600 text-center mt-2 italic">Hình ảnh minh họa chiến thuật vây lấn</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-[color:var(--brown)] mb-2">Kết quả</h4>
                      <p>
                        Hệ thống hào vây lấn hoàn thiện giúp ta áp sát an toàn, cô lập Mường Thanh và Hồng Cúm, làm địch suy kiệt, mất khả năng cơ động và tiếp tế hiệu quả.
                      </p>
                    </div>
                  </div>
                ),
              },
            ]}
          />
          <DiaglogContentTab
            title=" Phong trào “săn Tây bắn tỉa”"
            tabs={[
              {
                key: 'progress',
                label: 'Diễn biến',
                content: (
                  <div className="space-y-6 leading-relaxed text-[color:var(--charcoal)]">
                    <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                      <p>
                        Trong 10 ngày, Đại đoàn 312 loại khỏi vòng chiến đấu 110 lính Pháp bằng súng bắn tỉa. Nhiều chiến sĩ lập công xuất sắc: Đoàn Tương Líp diệt 9 tên với 9 viên đạn; chiến sĩ Lục (Trung đoàn 165) có ngày diệt tới 30 địch. Địch căng thẳng, kiệt quệ tinh thần.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <Image
                        src="https://hair-salon-fpt.io.vn/uploads/14d5d4e0-a2dc-4a47-ade5-8d186e417790_dai%20tuong%20vo%20nguyen%20giao.jpg"
                        alt="Minh họa bắn tỉa"
                        width={800}
                        height={1200}
                        className="w-full h-auto object-contain rounded-lg shadow-md"
                      />
                      <p className="text-sm text-gray-600 text-center mt-2 italic">Hình ảnh minh họa phong trào “săn Tây bắn tỉa”</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-[color:var(--brown)] mb-2">Kết quả</h4>
                      <p>
                        Nhiều sinh lực địch bị loại, hỏa điểm tiền tiêu bị vô hiệu, tinh thần địch suy sụp; góp phần giữ vững thế áp đảo và bảo toàn lực lượng ta trước đợt tổng công kích.
                      </p>
                    </div>
                  </div>
                ),
              },
            ]}
          />

          <DiaglogContentTab
            title="Đợt 3 (1 – 7/5/1954) – Tổng công kích, tiêu diệt toàn bộ tập đoàn cứ điểm"
            tabs={[
              {
                key: 'progress',
                label: 'Diễn biến',
                content: (
                  <div className="space-y-6 leading-relaxed text-[color:var(--charcoal)]">
                    <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                      <p>
                        Đợt 3 mở màn bằng các đòn tiến công tổng lực, đồng loạt đánh vào các cứ điểm còn lại, đẩy nhanh sự sụp đổ của tập đoàn cứ điểm.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <Image
                        src="https://hair-salon-fpt.io.vn/uploads/14d5d4e0-a2dc-4a47-ade5-8d186e417790_dai%20tuong%20vo%20nguyen%20giao.jpg"
                        alt="Minh họa đợt 3"
                        width={800}
                        height={1200}
                        className="w-full h-auto object-contain rounded-lg shadow-md"
                      />
                      <p className="text-sm text-gray-600 text-center mt-2 italic">Hình ảnh minh họa đợt tổng công kích</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-[color:var(--brown)] mb-2">Kết quả</h4>
                      <p>
                        Hệ thống phòng ngự của địch bị phá vỡ từng mảng, các mũi thọc sâu áp sát trung tâm, tạo thế cho các trận quyết định đêm 6/5 và ngày 7/5.
                      </p>
                    </div>
                  </div>
                ),
              },
            ]}
          />
          <DiaglogContentTab
            title="Đêm 1/5"
            tabs={[
              {
                key: 'progress',
                label: 'Diễn biến',
                content: (
                  <div className="space-y-6 leading-relaxed text-[color:var(--charcoal)]">
                    <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                      <p>Ta nổ súng mở màn đợt 3, tấn công đồng loạt các cứ điểm.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <Image
                        src="https://hair-salon-fpt.io.vn/uploads/14d5d4e0-a2dc-4a47-ade5-8d186e417790_dai%20tuong%20vo%20nguyen%20giao.jpg"
                        alt="Minh họa đêm 1/5"
                        width={800}
                        height={1200}
                        className="w-full h-auto object-contain rounded-lg shadow-md"
                      />
                      <p className="text-sm text-gray-600 text-center mt-2 italic">Hình ảnh minh họa đêm 1/5</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-[color:var(--brown)] mb-2">Kết quả</h4>
                      <p>
                        Đợt tổng công kích được khởi động thành công, ta chiếm thêm các vị trí quan trọng, làm lung lay tuyến phòng thủ còn lại của địch.
                      </p>
                    </div>
                  </div>
                ),
              },
            ]}
          />
          <DiaglogContentTab
            title="Đêm 6/5 rạng 7/5"
            tabs={[
              {
                key: 'progress',
                label: 'Diễn biến',
                content: (
                  <div className="space-y-6 leading-relaxed text-[color:var(--charcoal)]">
                    <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                      <p>
                        Trận quyết định ở A1: ta đào hầm đặt gần 1 tấn thuốc nổ. 20h30 ngày 6/5, kích nổ làm sập một phần phòng ngự; các mũi xung phong chiếm toàn bộ A1, mở toang cánh cửa vào trung tâm.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <Image
                        src="https://hair-salon-fpt.io.vn/uploads/14d5d4e0-a2dc-4a47-ade5-8d186e417790_dai%20tuong%20vo%20nguyen%20giao.jpg"
                        alt="Minh họa đêm 6/5"
                        width={800}
                        height={1200}
                        className="w-full h-auto object-contain rounded-lg shadow-md"
                      />
                      <p className="text-sm text-gray-600 text-center mt-2 italic">Hình ảnh minh họa trận đánh A1</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-[color:var(--brown)] mb-2">Kết quả</h4>
                      <p>
                        Cứ điểm A1 thất thủ, hệ thống phòng ngự then chốt của địch bị phá vỡ, tạo điều kiện trực tiếp cho ta đánh thẳng vào sở chỉ huy Mường Thanh.
                      </p>
                    </div>
                  </div>
                ),
              },
            ]}
          />
          <DiaglogContentTab
            title="Ngày 7/5:"
            tabs={[
              {
                key: 'progress',
                label: 'Diễn biến',
                content: (
                  <div className="space-y-6 leading-relaxed text-[color:var(--charcoal)]">
                    <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                      <p>
                        Ta tiến công trên toàn mặt trận, đánh thẳng vào sở chỉ huy Mường Thanh. 17h30: Tướng De Castries và toàn bộ Bộ tham mưu bị bắt sống tại hầm chỉ huy.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <Image
                        src="https://hair-salon-fpt.io.vn/uploads/14d5d4e0-a2dc-4a47-ade5-8d186e417790_dai%20tuong%20vo%20nguyen%20giao.jpg"
                        alt="Minh họa ngày 7/5"
                        width={800}
                        height={1200}
                        className="w-full h-auto object-contain rounded-lg shadow-md"
                      />
                      <p className="text-sm text-gray-600 text-center mt-2 italic">Hình ảnh minh họa ngày 7/5</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-[color:var(--brown)] mb-2">Kết quả</h4>
                      <p>
                        Toàn bộ tập đoàn cứ điểm Điện Biên Phủ đầu hàng; tướng De Castries bị bắt sống. Chiến dịch toàn thắng, tạo bước ngoặt lịch sử cho cuộc kháng chiến.
                      </p>
                    </div>
                  </div>
                ),
              },
            ]}
          />

        </div>

        {false && (
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
                    <h1 className="text-4xl font-bold text-[color:var(--charcoal)] mb-4" style={{ fontFamily: 'serif' }}>
                      GIÁ TRỊ THẶNG DƯ
                    </h1>
                    <div className="w-32 h-1 bg-[color:var(--brown)] mx-auto mb-4"></div>
                    <p className="text-xl text-[color:var(--brown)] italic">Lý thuyết kinh tế chính trị</p>
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
                      Giá trị thặng dư là phần giá trị mới được tạo ra vượt quá giá trị sức lao động, được tạo ra trong quá trình sản xuất nhưng không được trả công cho người lao động.
                    </p>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-bold text-[color:var(--brown)] mb-2">Công thức vận động của tư bản:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold">Lưu thông hàng hóa giản đơn:</p>
                            <p className="text-center bg-white p-2 rounded border">H – T – H</p>
                            <p className="text-xs text-gray-600 mt-1">Mục đích: Giá trị sử dụng</p>
                          </div>
                          <div>
                            <p className="font-semibold">Lưu thông tư bản:</p>
                            <p className="text-center bg-white p-2 rounded border">T – H – T&apos;</p>
                            <p className="text-xs text-gray-600 mt-1">Mục đích: Giá trị lớn hơn</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                        <h3 className="font-bold text-[color:var(--brown)] mb-2">Định nghĩa quan trọng:</h3>
                        <ul className="text-sm space-y-2">
                          <li><strong>Tư bản:</strong> Là giá trị mang lại giá trị thặng dư</li>
                          <li><strong>Giá trị thặng dư:</strong> Là phần tăng thêm (T&apos; = T + t, với t ≥ 0)</li>
                          <li><strong>Nguồn gốc:</strong> Không phải từ lưu thông mà từ quá trình sản xuất</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-bold text-[color:var(--brown)] mb-2">Tại sao lưu thông không tạo ra giá trị thặng dư?</h3>
                        <p className="text-sm">
                          Trong nền kinh tế thị trường, mỗi người đều vừa là người bán vừa là người mua.
                          Nếu được lợi khi bán thì sẽ bị thiệt khi mua. Do đó, lưu thông không tạo ra giá trị
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
                        <h3 className="font-bold text-[color:var(--brown)] mb-2">Định nghĩa:</h3>
                        <p className="text-sm italic text-gray-700 mb-2">
                          &quot;Sức lao động là toàn bộ những năng lực thể chất và tinh thần tồn tại trong cơ thể con người đang sống.&quot;
                        </p>
                        <p className="text-xs text-gray-600">- C. Mác</p>
                      </div>

                      {/* Điều kiện trở thành hàng hóa */}
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-bold text-[color:var(--brown)] mb-3">Điều kiện trở thành hàng hóa:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="bg-white p-3 rounded border shadow-sm">
                            <div className="flex items-center mb-2">
                              <span className="w-6 h-6 bg-[color:var(--gold)] text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">1</span>
                              <span className="font-semibold">Tự do về thân thể</span>
                            </div>
                          </div>
                          <div className="bg-white p-3 rounded border shadow-sm">
                            <div className="flex items-center mb-2">
                              <span className="w-6 h-6 bg-[color:var(--gold)] text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">2</span>
                              <span className="font-semibold">Không có tư liệu sản xuất</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Thuộc tính đặc biệt */}
                      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                        <h3 className="font-bold text-[color:var(--brown)] mb-3">Thuộc tính đặc biệt:</h3>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-[color:var(--brown)] mb-2">Giá trị của sức lao động:</h4>
                            <div className="bg-white p-3 rounded border shadow-sm">
                              <p className="text-sm">Bao gồm: tư liệu sinh hoạt + chi phí đào tạo + chi phí gia đình</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-[color:var(--brown)] mb-2">Giá trị sử dụng:</h4>
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
                        <h3 className="font-bold text-[color:var(--brown)] mb-2">Khái niệm:</h3>
                        <p className="text-sm">
                          Quá trình sản xuất giá trị thặng dư là sự thống nhất của quá trình tạo ra và làm tăng giá trị.
                        </p>
                      </div>

                      {/* Thời gian lao động */}
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-bold text-[color:var(--brown)] mb-3">Phân chia thời gian lao động:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="bg-white p-3 rounded border shadow-sm">
                            <h4 className="font-semibold text-[color:var(--brown)] mb-2">Thời gian lao động tất yếu:</h4>
                            <p className="text-xs">Thời gian để bù đắp giá trị hàng hóa sức lao động</p>
                          </div>
                          <div className="bg-white p-3 rounded border border-[color:var(--gold)] shadow-sm">
                            <h4 className="font-semibold text-[color:var(--brown)] mb-2">Thời gian lao động thặng dư:</h4>
                            <p className="text-xs font-bold">Thời gian tạo ra giá trị thặng dư cho nhà tư bản</p>
                          </div>
                        </div>
                      </div>

                      {/* Ví dụ cụ thể */}
                      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                        <h3 className="font-bold text-[color:var(--brown)] mb-3">Ví dụ: Sản xuất sợi</h3>
                        <div className="space-y-3">
                          <div className="bg-white p-3 rounded border shadow-sm">
                            <h4 className="font-semibold text-[color:var(--brown)] mb-2">Chi phí đầu vào:</h4>
                            <ul className="text-xs space-y-1">
                              <li>• 50 USD: Mua 50 kg bông</li>
                              <li>• 3 USD: Hao mòn máy móc</li>
                              <li>• 15 USD: Mua sức lao động (8 giờ)</li>
                              <li className="font-bold">→ Tổng: 68 USD</li>
                            </ul>
                          </div>
                          <div className="bg-white p-3 rounded border shadow-sm">
                            <h4 className="font-semibold text-[color:var(--brown)] mb-2">Kết quả sản xuất:</h4>
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
                        <h3 className="font-bold text-[color:var(--brown)] mb-3">Tính toán giá trị thặng dư:</h3>
                        <div className="space-y-3">
                          <div className="bg-white p-3 rounded border shadow-sm">
                            <h4 className="font-semibold text-[color:var(--brown)] mb-2">Làm thêm 4 giờ:</h4>
                            <ul className="text-xs space-y-1">
                              <li>• Sản phẩm tạo thêm: 50 kg sợi mới</li>
                              <li>• Giá trị bán được: 68 USD + 68 USD = 136 USD</li>
                              <li>• Chi phí thực tế: 50 + 6 + 15 = 121 USD</li>
                              <li className="font-bold text-[color:var(--brown)]">→ Giá trị thặng dư: 136 - 121 = 15 USD</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Kết luận */}
                      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                        <h3 className="font-bold text-[color:var(--brown)] mb-2">Kết luận:</h3>
                        <div className="space-y-3">
                          <div className="bg-white p-3 rounded border shadow-sm">
                            <h4 className="font-semibold text-[color:var(--brown)] mb-2">Định nghĩa giá trị thặng dư:</h4>
                            <p className="text-sm">
                              Giá trị thặng dư (m) là bộ phận giá trị mới dôi ra ngoài giá trị sức lao động do công nhân tạo ra, là kết quả của lao động không công của công nhân cho nhà tư bản.
                            </p>
                          </div>
                          <div className="bg-white p-3 rounded border border-[color:var(--gold)] shadow-sm">
                            <h4 className="font-semibold text-[color:var(--brown)] mb-2">Bản chất:</h4>
                            <p className="text-sm font-bold text-[color:var(--brown)]">
                              Người lao động luôn phải làm việc nhiều hơn mức thời gian cần thiết để tái sản xuất ra sức lao động của mình.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Công thức */}
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-bold text-[color:var(--brown)] mb-2">Công thức:</h3>
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
                        <h3 className="font-bold text-[color:var(--brown)] mb-2">Bản chất kinh tế - xã hội:</h3>
                        <p className="text-sm leading-relaxed">
                          Giá trị thặng dư là kết quả của sự hao phí sức lao động trong sự thống nhất của quá trình tạo ra và làm tăng giá trị. Quá trình này diễn ra trong quan hệ xã hội giữa người mua và người bán hàng hóa sức lao động.
                        </p>
                      </div>

                      {/* Quan hệ giai cấp */}
                      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                        <h3 className="font-bold text-[color:var(--brown)] mb-3">Quan hệ giai cấp:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="bg-white p-3 rounded border shadow-sm">
                            <h4 className="font-semibold text-[color:var(--brown)] mb-2">Giai cấp tư sản:</h4>
                            <p className="text-xs">Làm giàu dựa trên cơ sở thuê mướn lao động, mục đích là giá trị thặng dư</p>
                          </div>
                          <div className="bg-white p-3 rounded border shadow-sm">
                            <h4 className="font-semibold text-[color:var(--brown)] mb-2">Giai cấp công nhân:</h4>
                            <p className="text-xs">Phải bán sức lao động cho nhà tư bản để sinh sống</p>
                          </div>
                        </div>
                      </div>

                      {/* Tỷ suất giá trị thặng dư */}
                      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                        <h3 className="font-bold text-[color:var(--brown)] mb-3">Tỷ suất giá trị thặng dư (m&apos;):</h3>
                        <div className="space-y-3">
                          <div className="bg-white p-3 rounded border shadow-sm">
                            <h4 className="font-semibold text-[color:var(--brown)] mb-2">Định nghĩa:</h4>
                            <p className="text-xs">Tỷ lệ phần trăm giữa giá trị thặng dư và tư bản khả biến</p>
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
                        <h3 className="font-bold text-[color:var(--brown)] mb-3">Khối lượng giá trị thặng dư (M):</h3>
                        <div className="space-y-3">
                          <div className="bg-white p-3 rounded border shadow-sm">
                            <h4 className="font-semibold text-[color:var(--brown)] mb-2">Định nghĩa:</h4>
                            <p className="text-xs">Lượng giá trị thặng dư bằng tiền mà nhà tư bản thu được</p>
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
                        <h3 className="font-bold text-[color:var(--brown)] mb-3">Ý nghĩa:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="bg-white p-3 rounded border shadow-sm">
                            <h4 className="font-semibold text-[color:var(--brown)] mb-2">Tỷ suất (m&apos;):</h4>
                            <p className="text-xs">Phản ánh trình độ khai thác sức lao động làm thuê</p>
                          </div>
                          <div className="bg-white p-3 rounded border shadow-sm">
                            <h4 className="font-semibold text-[color:var(--brown)] mb-2">Khối lượng (M):</h4>
                            <p className="text-xs">Phản ánh quy mô giá trị thặng dư mà chủ tư bản thu được</p>
                          </div>
                        </div>
                      </div>

                      {/* Bảng tóm tắt công thức */}
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-bold text-[color:var(--brown)] mb-3">Tóm tắt công thức:</h3>
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
                                <td className="p-2 border font-semibold">Tỷ suất giá trị thặng dư</td>
                                <td className="p-2 border text-center">m&apos; = (m/v) × 100%</td>
                                <td className="p-2 border">Tỷ lệ giữa giá trị thặng dư và tư bản khả biến</td>
                              </tr>
                              <tr>
                                <td className="p-2 border font-semibold">Tỷ suất (theo thời gian)</td>
                                <td className="p-2 border text-center">m&apos; = (t&apos;/t) × 100%</td>
                                <td className="p-2 border">Tỷ lệ giữa thời gian lao động thặng dư và tất yếu</td>
                              </tr>
                              <tr>
                                <td className="p-2 border font-semibold">Khối lượng giá trị thặng dư</td>
                                <td className="p-2 border text-center">M = m&apos; × V</td>
                                <td className="p-2 border">Tổng giá trị thặng dư thu được từ tổng tư bản khả biến</td>
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
                  <h2 className="text-3xl font-bold mb-4">📖 Cảm ơn bạn đã đọc!</h2>
                  <p className="text-lg mb-6">
                    Hy vọng bạn đã hiểu rõ hơn về lý thuyết giá trị thặng dư và tác động của nó đến nền kinh tế hiện đại.
                  </p>
                  <div className="w-24 h-1 bg-[color:var(--gold)] mx-auto mb-4"></div>
                </div>
              </div>
            </HTMLFlipBook>
          </div>
        )}
      </motion.section>

      {/* Final Call-to-Action Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full py-16 bg-gradient-to-r from-[color:var(--brown)]/90 to-[color:var(--gold)]/80 flex flex-col items-center justify-center text-center"
      >
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 drop-shadow-lg">Sẵn sàng để tìm hiểu sâu hơn?</h3>
        <p className="text-lg text-white/90 mb-8 max-w-2xl">
          Khám phá lý thuyết giá trị thặng dư và tham gia thảo luận để hiểu cơ sở của kinh tế hiện đại.
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
