import React, { useState } from "react";

type DetailItem = {
  text: string;
  sources?: { label: string; url: string }[];
};

type CardItem = {
  id: number;
  title: string;
  image: string;
  shortDesc: string;
  details: DetailItem[];
  color: string;
};

const data: CardItem[] = [
  {
    id: 1,
    title: "Pháp – Kế hoạch Nava",
    image: "/247.jpg",
    shortDesc: "Đọc thêm",
    details: [
      {
        text: `
        1. Bối Cảnh
Tháng 7/1953, Tổng chỉ huy quân đội Pháp tại Đông Dương – tướng Navarre – đưa ra "kế hoạch Nava", nhằm chuyển bại thành thắng trong vòng 18 tháng, bao gồm:
   + Thu – Đông 1953 và Xuân 1954: củng cố phòng thủ Bắc Bộ, bình định Trung – Nam Đông Dương, xóa vùng tự do Liên khu V.
   + Nếu thành công, sẽ tiến sang giai đoạn tấn công chiến lược miền Bắc, buộc Việt Minh đàm phán theo các điều kiện có lợi.
Pháp nhanh chóng tăng viện: đưa tổng cộng khoảng 44 tiểu đoàn cơ động vào Bắc Bộ, được Mỹ viện trợ mạnh.
        2. Công tác chuẩn bị
Cuối tháng 11/1953:
    + Pháp khẩn cấp nhảy dù 6 tiểu đoàn (khoảng 4.500 quân) xuống Điện Biên Phủ (các ngày 20–22/11), chuẩn bị chiếm đóng địa bàn. 
    + Sau khi đánh giá thực địa, ngày 3/12/1953, tướng Navarre chính thức chấp nhận giao chiến tại Điện Biên Phủ – một điều không nằm trong kế hoạch Thu Đông ban đầu. 
    + Đến ngày 7/12, Đại tá Christian de Castries được bổ nhiệm làm chỉ huy tập đoàn cứ điểm. 
    + Ngày 15/12/1953, quân số Pháp tại đây tăng lên 11 tiểu đoàn. Nhiều công sự, sân bay, hệ thống pháo binh và nối thông đường hàng không được tăng cường.
        `,
        sources: [
          { label: "Nguồn tham khảo", url: "https://vi.wikipedia.org/wiki/Kế_hoạch_Nava" },
        ],
      },
    ],
    color: "border-red-700 from-yellow-100 via-red-50 to-yellow-200",
  },
  {
    id: 2,
    title: "Việt Nam – Chiến lược Đông Xuân 1953–1954",
    image: "/images.jpg",
    shortDesc: "Đọc thêm",
    details: [
      {
        text: `
        1. Bối Cảnh
          Đáp lại kế hoạch Nava, tháng 9/1953, Bộ Chính trị và Trung ương Đảng quyết định chủ động chuẩn bị về hậu cần với tư tưởng “tích cực, chủ động chuẩn bị trước về hậu cần” để đối phó chiến trường sắp tới.
          Chiến lược chủ đạo: "tránh chỗ mạnh, đánh chỗ yếu để phân tán lực lượng địch và giữ chủ động chiến lược", triển khai tác chiến trên nhiều hướng (Tây Bắc, Thượng Lào, đồng bằng Bắc Bộ, Trung–Hạ Lào và Liên khu 5).
        2. Công tác chuẩn bị
        - Chuẩn bị hậu cần:
          + Trong chiến dịch Đông – Xuân 1953–1954, ngành Cung cấp khẩn trương triển khai hậu cần từ tháng 9/1953, chuẩn bị cho các chiến trường, nhất là Điện Biên Phủ.
          + Các hướng Tây Bắc – Thượng Lào được tổ chức ngay, chuyển hàng trăm tấn vũ khí 
        - Chỉ đạo chiến lược:
          + Ngày 6/12/1953, Bộ Chính trị quyết định mở Chiến dịch Điện Biên Phủ. Đại tướng Võ Nguyên Giáp được giao làm Tư lệnh kiêm Bí thư Đảng ủy chiến dịch; Phó Thủ tướng Phạm Văn Đồng làm Chủ tịch Hội đồng Cung cấp mặt trận.
          + Phương châm tác chiến: chuyển từ “đánh nhanh, thắng nhanh” sang "đánh chắc, tiến chắc", dưới sự chỉ đạo chặt chẽ về thời điểm tấn công khi đã chắc thắng
        - Huy động nhân lực khổng lồ:
          + Tổng lực lượng điều động: khoảng 55.000 bộ đội (gồm 3 đại đoàn bộ binh, Trung đoàn 57 của Đại đoàn 304, đại đoàn công binh–pháo binh 351). Việt Nam huy động khoảng 260.000 dân công hỗ trợ hậu cần.
          + Chuẩn bị tuyến đường: sửa chữa, mở hàng trăm km đường, vượt địa hình đồi núi hiểm trở để đưa quân và vũ khí lên Điện Biên Phủ.
        `,
        sources: [
          { label: "Nguồn tham khảo", url: "https://vi.wikipedia.org/wiki/Chiến_dịch_Điện_Biên_Phủ" },
        ],
      },
    ],
    color: "border-green-700 from-yellow-100 via-green-50 to-yellow-200",
  },
];

const IntroductionSection: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<CardItem | null>(null);

  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      {/* Tiêu đề */}
      <div className="text-center mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-[color:var(--brown)]">
          Bối cảnh và Chuẩn bị Chiến dịch Điện Biên Phủ (1953 – 1954)
        </h2>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedCard(item)}
            className={`cursor-pointer bg-gradient-to-br ${item.color} border-2 rounded-2xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-64 h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-extrabold mb-2 text-center">{item.title}</h3>
            <p className="text-sm text-gray-700 text-center">{item.shortDesc}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCard && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
            {/* Close */}
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
            >
              &times;
            </button>

            {/* Image */}
            <img
              src={selectedCard.image}
              alt={selectedCard.title}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />

            {/* Title */}
            <h3 className="text-xl font-bold mb-4 text-center text-gray-800">
              {selectedCard.title}
            </h3>

            {/* Details */}
            <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap break-words">
              {selectedCard.details.map((detail, i) => (
                <div key={i} className="mb-6">
                  <p>{detail.text}</p>
                  {detail.sources && (
                    <div className="mt-2">
                      {detail.sources.map((s, idx) => (
                        <a
                          key={idx}
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 text-xs hover:underline"
                        >
                          🔗 {s.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default IntroductionSection;
