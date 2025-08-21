import React, { useState } from "react";
import { motion } from "framer-motion";

const HTMLFlipBook = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: any;
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = React.Children.count(children);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div
      className="relative"
      style={{
        width: "70%",
        height: props.height || 800,
        margin: "0 auto",
      }}
    >
      <div className="relative w-[100%] h-[720] bg-white shadow-2xl rounded-xl overflow-hidden border border-gray-200">
        {React.Children.toArray(children)[currentPage]}

        {/* Navigation buttons */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-6 ">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg ${
              currentPage === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
                : "bg-gradient-to-r from-red-500 to-yellow-600 text-white hover:from-red-600 hover:to-yellow-700 hover:shadow-xl transform hover:-translate-y-1"
            }`}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Trước
          </button>
          <div className="bg-gradient-to-r from-red-500 to-yellow-500 text-white px-6 py-3 rounded-full font-bold shadow-lg">
            {currentPage + 1} / {totalPages}
          </div>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg ${
              currentPage === totalPages - 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
                : "bg-gradient-to-r from-red-500 to-yellow-600 text-white hover:from-red-600 hover:to-yellow-700 hover:shadow-xl transform hover:-translate-y-1"
            }`}
          >
            Tiếp
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

type QuizQuestionProps = {
  question: string;
  options: string[];
  correctAnswer: number;
  onAnswer: (answerIndex: number) => void;
  userAnswer?: number;
  hasAnswered: boolean;
  onReset?: () => void;
};

const QuizQuestion = ({
  question,
  options,
  correctAnswer,
  onAnswer,
  userAnswer,
  hasAnswered,
  onReset,
}: QuizQuestionProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{question}</h3>
      <div className="space-y-3">
        {options.map((option, index) => {
          const isCorrect = index === correctAnswer;
          const isSelected = userAnswer === index;
          let buttonClass =
            "w-full p-3 text-left border-2 rounded-lg transition-all duration-300 ";

          if (hasAnswered && isSelected) {
            if (isCorrect) {
              buttonClass += "border-yellow-500 bg-yellow-50 text-yellow-800";
            } else {
              buttonClass += "border-red-500 bg-red-50 text-red-800";
            }
          } else if (isSelected) {
            buttonClass += "border-red-500 bg-red-50 text-red-800";
          } else {
            buttonClass +=
              "border-gray-300 hover:border-yellow-300 hover:bg-yellow-25 hover:shadow-md";
          }

          return (
            <button
              key={index}
              onClick={() => onAnswer(index)}
              className={buttonClass}
            >
              <div className="flex items-center">
                <span className="w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  {String.fromCharCode(65 + index)}
                </span>
                {option}
                {hasAnswered && isSelected && isCorrect && (
                  <span className="ml-auto text-yellow-600 font-bold">
                    ✓ Đúng
                  </span>
                )}
                {hasAnswered && isSelected && !isCorrect && (
                  <span className="ml-auto text-red-600 font-bold">✗ Sai</span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

const SurplusValueQuizBook = () => {
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [hasAnswered, setHasAnswered] = useState<{ [key: number]: boolean }>(
    {}
  );

  const questions = [
    {
      question: "Chiến dịch Điện Biên Phủ diễn ra trong bao nhiêu ngày đêm?",
      options: ["55 ngày đêm", "60 ngày đêm", "56 ngày đêm", "59 ngày đêm"],
      correctAnswer: 2, // 56 ngày đêm (7/3/1954 - 7/5/1954)
      image:
        "https://imgchinhsachcuocsong.vnanet.vn/MediaUpload/Medium/2024/05/02/121135-9.webp",
    },
    {
      question:
        "Mở đầu chiến dịch Điện Biên Phủ, quân ta tấn công tiêu diệt vị trí phòng ngự của địch ở đâu?",
      options: ["Phía Bắc", "Phía Nam", "Phía Đông", "Phía Bắc và Phía Nam"],
      correctAnswer: 0, // Phía Bắc (Him Lam, Độc Lập)
      image:
        "https://file3.qdnd.vn/data/images/0/2024/05/04/upload_2163/dienbienphu-01.jpg?dpi=150&quality=100&w=870",
    },
    {
      question: "Đợt tấn công thứ ba của quân ta bắt đầu vào ngày nào?",
      options: [
        "Ngày 6-5-1954",
        "Ngày 26-4-1954",
        "Ngày 30-3-1954",
        "Ngày 1-5-1954",
      ],
      correctAnswer: 3, // Ngày 1-5-1954 (đợt 3 bắt đầu đầu tháng 5)
      image:
        "https://bcp.cdnchinhphu.vn/thumb_w/777/334894974524682240/2024/5/2/vnapotal70namchienthangdienbienphu-chientranhchienhao--chienthuatsangtaocuaqdndvietnamstand-17146152952541730135906.jpg",
    },
    {
      question: "Có bao nhiêu vũ khí chuẩn bị cho chiến dịch Điện Biên Phủ?",
      options: [
        "Hơn nửa triệu",
        "Hàng vạn tấn",
        "Gần ba vạn tấn",
        "Không có số liệu cụ thể",
      ],
      correctAnswer: 2, // Gần ba vạn tấn (khoảng 30,000 tấn)
      image:
        "https://laichau.gov.vn/upload/2000066/20200214/4d880b818a006dc16ccf1f618f5a2570biphu752019mot.jpg",
    },
    {
      question:
        "Cụm từ nào thể hiện cuộc chiến đấu ác liệt trong đợt hai của chiến dịch Điện Biên Phủ?",
      options: [
        "Uy hiếp",
        "Thuộc quyền kiểm soát",
        "Kháng sự quyết định",
        "Giành giật",
      ],
      correctAnswer: 3, // Giành giật (mô tả chiến đấu ác liệt ở các cứ điểm đồi)
      image:
        "https://baotanglichsu.vn/DataFiles/Uploaded/image/VU%20THUY%20DUONG/mo%20man%20chien%20dich%20DBP/HA%202B.jpg",
    },
    {
      question:
        "Đầu tháng 01/1954 tại Khuổi Tát, Quy Kỳ, Định Hóa, Thái Nguyên, Chủ tịch Hồ Chí Minh đã căn dặn Đại tướng Võ Nguyên Giáp điều gì?",
      options: [
        "“Trận này quan trọng, phải đánh cho thắng; chắc thắng mới đánh, không chắc thắng không đánh”",
        "“Toàn dân, toàn Đảng và Chính phủ nhất định đem toàn lực chi viện cho chiến dịch Điện Biên Phủ và nhất định làm mọi việc cần thiết để giành toàn thắng cho chiến dịch này”",
        "“Chiến dịch này là một chiến dịch rất quan trọng không những về quân sự mà cả về chính trị, không những đối với trong nước mà đối với quốc tế”",
        "“Chiến dịch này là một chiến dịch rất quan trọng không những về quân sự mà cả về chính trị, phải đánh cho thắng; chắc thắng mới đánh, không chắc thắng không đánh”",
      ],
      correctAnswer: 0, // Hồ Chí Minh's famous quote
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-AQv71qalvjbvMPd9KvE3IUgu54jYWSH6kA&s",
    },
    {
      question:
        "Điểm yếu cơ bản của tập đoàn cứ điểm Điện Biên Phủ do Pháp – Mỹ xây dựng là gì?",
      options: [
        "Nằm cô lập giữa vùng rừng núi Tây Bắc",
        "Thiếu thốn về trang thiết bị kỹ thuật",
        "Cách xa hậu phương của quân Pháp",
        "Là vùng rừng núi nên khó cơ động lực lượng",
      ],
      correctAnswer: 0, // Nằm cô lập giữa vùng rừng núi Tây Bắc
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJMEAJO4Ry0865Xdv3s4dZV70ANStubKOQDA&s",
    },
    {
      question:
        "Đảng, Nhà nước đã phong tặng danh hiệu Anh hùng lực lượng vũ trang nhân dân cho bao nhiêu liệt sỹ đã hy sinh trong chiến dịch Điện Biên Phủ? Đó là những liệt sỹ nào?",
      options: [
        "03 liệt sỹ: Tô Vĩnh Diện, Bế Văn Đàn, Phan Đình Giót",
        "03 liệt sỹ: Tô Vĩnh Diện, Bế Văn Đàn, Cù Chính Lan",
        "04 liệt sỹ: Tô Vĩnh Diện, Bế Văn Đàn, Phan Đình Giót và Cù Chính Lan",
        "04 liệt sỹ: Tô Vĩnh Diện, Bế Văn Đàn, Phan Đình Giót và Trần Can",
      ],
      correctAnswer: 4, // Tô Vĩnh Diện, Bế Văn Đàn, Phan Đình Giót
      image:
        "https://icdn.dantri.com.vn/thumb_w/1280/2019/05/07/a-97-1557219908833.jpg",
    },
    {
      question:
        "Ý nghĩa quan trọng nhất của cuộc tiến công chiến lược Đông - Xuân 1953-1954 là gì?",
      options: [
        "Làm phân tán khối cơ động chiến lược của Nava",
        "Bước đầu làm phá sản kế hoạch Nava",
        "Chuẩn bị về vật chất cho chiến dịch Điện Biên Phủ",
        "Củng cố tinh thần để quân dân Việt Nam mở cuộc tấn công vào Điện Biên Phủ",
      ],
      correctAnswer: 1, // Bước đầu làm phá sản kế hoạch Nava
      image:
        "https://icdn.dantri.com.vn/thumb_w/1280/2019/05/07/a-65-1557219909329.jpg",
    },
    {
      question: "Ngày nay, khu di tích Điện Biên Phủ là gì?",
      options: [
        "Di sản văn hóa thế giới",
        "Di tích lịch sử cấp quốc gia",
        "Danh thắng quốc gia",
        "Không được công nhận",
      ],
      correctAnswer: 1, // Di tích lịch sử cấp quốc gia
      image:
        "https://media-cdn-v2.laodong.vn/storage/newsportal/2024/8/8/1378007/-Di-Tich-Chien-Truon-09.jpg",
    },
  ];

  const handleAnswer = (questionIndex: number, answerIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: answerIndex,
    }));

    if (answerIndex === questions[questionIndex].correctAnswer) {
      setHasAnswered((prev) => ({
        ...prev,
        [questionIndex]: true,
      }));
    }
  };

  const resetAnswer = (questionIndex: number) => {
    setAnswers((prev) => {
      const newAnswers = { ...prev };
      delete newAnswers[questionIndex];
      return newAnswers;
    });
    setHasAnswered((prev) => {
      const newResults = { ...prev };
      delete newResults[questionIndex];
      return newResults;
    });
  };

  const resetQuiz = () => {
    setAnswers({});
    setHasAnswered({});
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (hasAnswered[index] && answers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  return (
    <div
      className="min-h-screen py-16 px-4 bg-cover bg-center bg-fixed font-sans"
      style={{
        backgroundImage: `url(https://baotanglichsu.vn/DataFiles/Uploaded/image/VU%20THUY%20DUONG/mo%20man%20chien%20dich%20DBP/HA%202B.jpg)`,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="h-16 bg-gradient-to-b from-black/90 to-transparent absolute top-0 left-0 right-0 z-10"></div>
      <div className="text-center mb-12">
        <h2
          className="text-3xl sm:text-4xl font-bold text-red-800 mb-4"
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
          Câu Hỏi Ôn Tập
        </h2>
      </div>

      <div className="flex justify-center">
        <HTMLFlipBook
          showPageCorners={true}
          disableFlipByClick={false}
          width={900}
          height={800}
          size="fixed"
          minWidth={800}
          maxWidth={1200}
          minHeight={800}
          maxHeight={1000}
          className="my-flipbook"
          startPage={0}
        >
          {/* Bìa sách */}
          <div className="page cover  ">
            <img
              src="https://baodongnai.com.vn/file/e7837c02876411cd0187645a2551379f/032024/screenshot_2024-03-13_at_18-26-51_chien_thang_dien_bien_phu_-_ban_anh_hung_ca_bat_diet_cua_thoi_dai_ho_chi_minh_20240313182808.png"
              alt="Cover"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Các trang câu hỏi */}
          {questions.map((question, index) => (
            <div key={index} className="page bg-white">
              <div className="p-8 h-full grid md:grid-cols-5 gap-8">
                {/* Question (Left - takes 3 columns) */}
                <div className="md:col-span-3 flex flex-col">
                  <div className="bg-gradient-to-r from-red-500 to-yellow-600 text-white p-4 rounded-lg mb-6">
                    <h2 className="text-xl font-bold">Câu {index + 1}/10</h2>
                  </div>
                  <QuizQuestion
                    question={question.question}
                    options={question.options}
                    correctAnswer={question.correctAnswer}
                    onAnswer={(answerIndex) => handleAnswer(index, answerIndex)}
                    userAnswer={answers[index]}
                    hasAnswered={hasAnswered[index] || false}
                    onReset={() => resetAnswer(index)}
                  />
                </div>
                {/* Image (Right - takes 2 columns) */}
                <div className="md:col-span-2 flex items-center justify-center">
                  <img
                    src={question.image}
                    alt={`Illustration for question ${index + 1}`}
                    className="w-full max-w-[550px] h-auto rounded-xl shadow-lg object-cover hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Trang kết quả cuối */}
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default SurplusValueQuizBook;
