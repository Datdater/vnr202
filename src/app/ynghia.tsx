import React, { useState } from "react";

const HistoricalSignificance = () => {
  const [activeTab, setActiveTab] = useState("meaning");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  const meaningImages = [
    {
      src: "https://dienbienphu-image.nhandan.vn/t1200/Uploaded/uncqrwpjw/chienthangdienbienphuttxvn.jpg",
      alt: "Chiến thắng Điện Biên Phủ 1",
      caption: "Hình ảnh chiến thắng Điện Biên Phủ",
    },
    {
      src: "https://vnanet.vn/Data/Articles/2021/05/06/5423894/vna_potal_67_nam_chien_thang_dien_bien_phu_751954_%E2%80%93_752021_dinh_cao_choi_loi_trong_lich_su_dau_tranh_chong_ngoai_xam_cua_dan_toc_viet_nam_stand.jpg",
      alt: "Chiến thắng Điện Biên Phủ 2",
      caption: "Chiều 7/5/1954, lá cờ Quyết chiến - Quyết thắng của Quân đội nhân dân Việt Nam tung bay trên nóc hầm tướng De Castries. Chiến dịch lịch sử Điện Biên Phủ đã toàn thắng",
    },
    {
      src: "https://vnanet.vn/Data/Articles/2021/05/06/5423907/vna_potal_67_nam_chien_thang_dien_bien_phu_751954_%E2%80%93_752021_dinh_cao_choi_loi_trong_lich_su_dau_tranh_chong_ngoai_xam_cua_dan_toc_viet_nam_stand.jpg",
      alt: "Chiến thắng Điện Biên Phủ 3",
      caption: "Chiến thắng Điện Biên Phủ buộc chính phủ Pháp phải ký kết Hiệp định Geneva (7/1954) công nhận độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ ba nước Đông Dương, kết thúc vẻ vang cuộc kháng chiến trường kỳ, gian khổ kéo dài 9 năm (1945 - 1954).",
    },
  ];

  const lessonImages = [
    {
      src: "https://vnanet.vn/Data/Articles/2021/05/06/5423861/vna_potal_67_nam_chien_thang_dien_bien_phu_751954_%E2%80%93_752021_dinh_cao_choi_loi_trong_lich_su_dau_tranh_chong_ngoai_xam_cua_dan_toc_viet_nam_stand.jpg",
      alt: "Đại tướng Võ Nguyên Giáp",
      caption: "Đại tướng Võ Nguyên Giáp chỉ huy chiến dịch",
    },
    {
      src: "https://vnanet.vn/Data/Articles/2021/05/06/5423857/vna_potal_67_nam_chien_thang_dien_bien_phu_751954_%E2%80%93_752021_dinh_cao_choi_loi_trong_lich_su_dau_tranh_chong_ngoai_xam_cua_dan_toc_viet_nam_stand.jpg",
      alt: "Hệ thống hầm hào",
      caption: "Với kế hoạch “đánh chắc, tiến chắc”, quân ta kéo pháo lên núi cao, đưa vào hầm và chĩa thẳng pháo xuống trận địa kẻ thù để tấn công, nâng cao được uy lực, mức chính xác và mang lại hiệu quả cao nhất",
    },
    {
      src: "https://vnanet.vn/Data/Articles/2021/05/06/5423905/vna_potal_67_nam_chien_thang_dien_bien_phu_751954_%E2%80%93_752021_dinh_cao_choi_loi_trong_lich_su_dau_tranh_chong_ngoai_xam_cua_dan_toc_viet_nam_stand.jpg",
      alt: "Dân công hỏa tuyến",
      caption: "Chủ tịch Hồ Chí Minh thưởng huy hiệu cho các chiến sĩ lập nhiều chiến công trong chiến dịch Điện Biên Phủ",
    },
  ];

  const historicalMeaning = [
    {
      id: 1,
      title: "Kết thúc chiến tranh, mở ra kỷ nguyên mới",
      color: "from-red-500 to-rose-500",
      bgColor: "from-red-50 to-rose-50",
      content:
        "Thắng lợi này đã đập tan ý chí xâm lược của Pháp, buộc họ phải ký Hiệp định Giơ-ne-vơ, kết thúc cuộc chiến tranh kéo dài 9 năm và mang lại hòa bình cho miền Bắc Việt Nam và tạo cơ sở để đấu tranh thống nhất đất nước.",
      highlight: "Hiệp định Giơ-ne-vơ",
    },
    {
      id: 2,
      title: "Biểu tượng của sức mạnh dân tộc",
      color: "from-red-500 to-rose-500",
      bgColor: "from-red-50 to-rose-50",
      content:
        "Thắng lợi này chứng minh rằng một dân tộc nhỏ, nhưng có ý chí kiên cường, đường lối lãnh đạo đúng đắn và sự đoàn kết vững chắc, có thể đánh bại mọi kẻ thù xâm lược. Đây là niềm tự hào của dân tộc Việt Nam.",
      highlight: "ý chí kiên cường",
    },
    {
      id: 3,
      title: "Cổ vũ phong trào giải phóng dân tộc",
      color: "from-red-500 to-rose-500",
      bgColor: "from-red-50 to-rose-50",
      content:
        "Chiến thắng Điện Biên Phủ đã trở thành nguồn cảm hứng và động lực mạnh mẽ cho phong trào giải phóng dân tộc trên khắp thế giới, đặc biệt là ở châu Á, châu Phi và Mĩ Latinh. Nhiều quốc gia đã học hỏi kinh nghiệm từ Việt Nam và đứng lên đấu tranh giành độc lập.",
      highlight: "nguồn cảm hứng",
    },
  ];
  const lessons = [
    {
      id: 1,
      title: "Đường lối chính trị, quân sự đúng đắn",
      color: "from-orange-500 to-amber-500",
      bgColor: "from-orange-50 to-amber-50",
      content:
        "Chiến thắng là kết quả của đường lối chiến tranh nhân dân, toàn dân, toàn diện, trường kỳ và tự lực cánh sinh. Sự chuyển đổi chiến lược từ 'đánh nhanh, thắng nhanh' sang 'đánh chắc, tiến chắc' của Đại tướng Võ Nguyên Giáp là một quyết định sáng suốt, đảm bảo thắng lợi trọn vẹn.",
      highlight: "đánh chắc, tiến chắc",
      person: "Đại tướng Võ Nguyên Giáp",
    },
    {
      id: 2,
      title: "Sức mạnh đại đoàn kết toàn dân tộc",
      color: "from-orange-500 to-amber-500",
      bgColor: "from-orange-50 to-amber-50",
      content:
        "Sức mạnh của chiến thắng không chỉ đến từ quân đội mà còn từ sự đồng lòng của toàn dân. Hàng chục nghìn dân công hỏa tuyến đã không quản gian khổ, hy sinh, đảm bảo việc vận chuyển lương thực, vũ khí, đóng góp to lớn vào chiến thắng chung.",
      highlight: "đại đoàn kết toàn dân tộc",
      statistic: "Hàng chục nghìn dân công",
    },
    {
      id: 3,
      title: "Khả năng sáng tạo, thích ứng",
      color: "from-orange-500 to-amber-500",
      bgColor: "from-orange-50 to-amber-50",
      content:
        "Trong điều kiện thiếu thốn về vũ khí và trang bị, quân đội Việt Nam đã phát huy cao độ khả năng sáng tạo, sử dụng chiến thuật 'vây lấn' và xây dựng hệ thống hầm hào, tạo nên một thế trận vững chắc để áp đảo đối phương.",
      highlight: "chiến thuật vây lấn",
      technique: "Hệ thống hầm hào",
    },
  ];

  const toggleCard = (cardId: string | null) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % (activeTab === "meaning" ? meaningImages.length : lessonImages.length));
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + (activeTab === "meaning" ? meaningImages.length : lessonImages.length)) % (activeTab === "meaning" ? meaningImages.length : lessonImages.length));
  };

  const images = activeTab === "meaning" ? meaningImages : lessonImages;

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed font-sans"
      style={{
        backgroundImage: `url(https://kinhtetrunguong.vn/upload/104765/20240506/148-_DBP_60b9f.jpg)`,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Top blend */}
      <div className="h-16 bg-gradient-to-b from-black/90 to-transparent absolute top-0 left-0 right-0 z-10"></div>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 text-white">
              <h2
                className="mb-4"
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
                Ý Nghĩa Lịch Sử & Bài Học Kinh Nghiệm
              </h2>
              <p className="text-white text-lg max-w-3xl mx-auto">
                Chiến thắng Điện Biên Phủ không chỉ có ý nghĩa to lớn đối với
                Việt Nam mà còn để lại những bài học quý báu cho nhân loại
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-2xl shadow-lg p-2 border border-gray-200">
                <button
                  onClick={() => { setActiveTab("meaning"); setActiveImage(0); }}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "meaning"
                      ? "bg-gradient-to-r from-red-500 to-red-200 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  Ý Nghĩa Lịch Sử
                </button>
                <button
                  onClick={() => { setActiveTab("lessons"); setActiveImage(0); }}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "lessons"
                      ? "bg-gradient-to-r from-[#ffc107]/30 to-[#ffc107] text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  Bài Học Kinh Nghiệm
                </button>
              </div>
            </div>

            {/* Content and Image Layout */}
            <div className="grid lg:grid-cols-2 gap-8 transition-all duration-500">
              {/* Content Section */}
              <div className={activeTab === "meaning" ? "order-1" : "order-2"}>
                {activeTab === "meaning" && (
                  <div className="grid md:grid-cols-1 gap-8">
                    {historicalMeaning.map((item) => (
                      <div
                        key={item.id}
                        className={`bg-gradient-to-br ${item.bgColor} p-6 rounded-2xl border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}
                        onClick={() => toggleCard(`meaning-${item.id}`)}
                      >
                        <div className="text-center mb-4">
                          <h3
                            className="text-xl font-bold text-gray-800 mb-2"
                            style={{
                              fontFamily: "var(--font-family-brand)",
                              color: "var(--gray-white, #000000ff)",
                              fontWeight: 800,
                              lineHeight: "130%",
                            }}
                          >
                            {item.title}
                          </h3>
                        </div>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            expandedCard === `meaning-${item.id}`
                              ? "max-h-96"
                              : "max-h-20"
                          }`}
                        >
                          <p className="text-gray-700 leading-relaxed">
                            {item.content
                              .split(item.highlight)
                              .map((part, index, array) => (
                                <span key={index}>
                                  {part}
                                  {index < array.length - 1 && (
                                    <span
                                      className={`font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                                    >
                                      {item.highlight}
                                    </span>
                                  )}
                                </span>
                              ))}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {activeTab === "lessons" && (
                  <div className="grid md:grid-cols-1 gap-8">
                    {lessons.map((item) => (
                      <div
                        key={item.id}
                        className={`bg-gradient-to-br ${item.bgColor} p-6 rounded-2xl border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}
                        onClick={() => toggleCard(`lesson-${item.id}`)}
                      >
                        <div className="text-center mb-4">
                          <h3
                            className="text-xl font-bold text-gray-800 mb-2"
                            style={{
                              fontFamily: "var(--font-family-brand)",
                              color: "var(--gray-white, #000000ff)",
                              fontWeight: 800,
                              lineHeight: "130%",
                            }}
                          >
                            {item.title}
                          </h3>
                        </div>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            expandedCard === `lesson-${item.id}`
                              ? "max-h-96"
                              : "max-h-20"
                          }`}
                        >
                          <p className="text-gray-700 leading-relaxed mb-3">
                            {item.content
                              .split(item.highlight)
                              .map((part, index, array) => (
                                <span key={index}>
                                  {part}
                                  {index < array.length - 1 && (
                                    <span
                                      className={`font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                                    >
                                      {item.highlight}
                                    </span>
                                  )}
                                </span>
                              ))}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Image Section */}
              <div className={activeTab === "meaning" ? "order-2" : "order-1"}>
                <div className="relative h-[600px] overflow-hidden rounded-2xl shadow-xl border border-gray-200">
                  <div
                    className="flex h-full transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${activeImage * 100}%)` }}
                  >
                    {images.map((image, index) => (
                      <div key={index} className="min-w-full h-full relative">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <p className="text-white text-sm text-center">
                            {image.caption}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition"
                  >
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition"
                  >
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImage(index)}
                        className={`w-3 h-3 rounded-full ${
                          activeImage === index ? "bg-white" : "bg-white/50"
                        }`}
                      ></button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Quote */}
            {/* <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl shadow-2xl text-center">
              <div className="text-6xl mb-4">🏆</div>
              <blockquote className="text-white text-xl italic font-medium mb-4">
                "Điện Biên Phủ - Địa danh mãi mãi gắn liền với một trong những
                chiến thắng vĩ đại nhất trong lịch sử dân tộc Việt Nam"
              </blockquote>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto rounded-full"></div>
            </div> */}
          </div>
        </section>
      </div>
            <div className="h-16 bg-gradient-to-b from-transparent  to-black/90"></div>

    </div>
  );
};

export default HistoricalSignificance;