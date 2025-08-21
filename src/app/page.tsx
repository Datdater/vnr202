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
