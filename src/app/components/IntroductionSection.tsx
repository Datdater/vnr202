import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { CircleMinus, ClosedCaptionIcon, DoorClosed } from "lucide-react";

// Types
type DetailItem = {
  text: string;
  sources?: { label: string; url: string }[];
};

type CardItem = {
  id: number;
  title: string;
  image: string;
  shortDesc: string[];
  details: DetailItem[];
  color: string;
};

// Data
const data: CardItem[] = [
  {
    id: 1,
    title: "Pháp – Kế hoạch Nava",
    image: "/247.jpg",
    shortDesc: [
      "Tháng 7/1953: Tướng Navarre công bố 'Kế hoạch Nava'",
      "20–22/11/1953: Nhảy dù 6 tiểu đoàn (~4.500 quân) xuống Điện Biên Phủ",
      "3/12/1953: Chấp nhận giao chiến tại Điện Biên Phủ",
      "7/12/1953: Đại tá De Castries chỉ huy tập đoàn cứ điểm",
      "15/12/1953: Quân số tăng lên 11 tiểu đoàn",
    ],
    details: [
      {
        text: `
<b> Sau gần tám năm tiến hành cuộc chiến tranh xâm lược Việt Nam (1945–1953), thực dân Pháp đã phải chịu những tổn thất rất nặng nề: khoảng 90.000 quân bị loại khỏi vòng chiến đấu, không kể hàng chục vạn quân viễn chinh đang bị giam chân trên chiến trường Đông Dương, chủ yếu là Việt Nam; tiêu tốn khoảng hơn 2000 tỷ frăng. </b>

Vùng kiểm soát của chúng ngày càng bị thu hẹp, trên chiến trường, quân Pháp ngày càng bị lún sâu vào thế bị động phòng ngự và thiếu hẳn một lực lượng cơ động chiến lược mạnh để có thể đối phó với các cuộc tấn công mới của bộ đội ta. Trên chiến trường Đông Dương, do mất quyền chủ động chiến lược từ sau Thu – Đông năm 1950, quân Pháp càng lún sâu vào bế tắc về chiến lược quân sự sau thất bại ở Tây Bắc và Thượng Lào (1952, 1953). Trong khi đó tình hình chính trị, xã hội tại nước Pháp ngày càng rối ren, phức tạp. Tình trạng kéo dài cuộc chiến tranh xâm lược Đông Dương đã đẩy nền kinh tế của nước Pháp vào khủng hoảng trầm trọng, các phong trào đấu tranh của nhân dân Pháp chống chiến tranh Đông Dương của nhân dân Pháp ngày càng lên mạnh, mâu thuẫn trong giới cầm quyền Pháp ngày càng gay gắt. Chỉ trong vòng 8 năm tiến hành chiến tranh Đông Dương, nội các Chính phủ Pháp đã thay đổi tới 18 lần. Trước tình hình trên, giới cầm quyền Pháp hiểu chính Pháp chủ trương dựa vào sự viện trợ của Mỹ nhiều hơn để tiếp tục đẩy mạnh chiến tranh xâm lược, nhằm cho nước Pháp “một lối thoát danh dự” ra khỏi cuộc chiến tại Việt Nam. Được sự hậu thuẫn của Mỹ, tháng 5/1953, chính phủ Pháp cử tướng Hăngri Nava (Henri Navarre), làm Tổng chỉ huy quân đội Pháp ở Đông Dương.

<b>Tướng Hăngri Nava (Henri Navarre, 1898–1983)</b> sinh trưởng trong một gia đình nhiều đời làm Chưởng lý quan tòa và luật sư vùng Noóc măng đi (Normandie), Pháp. Ông gia nhập quân đội Pháp từ thời chiến tranh thế giới thứ nhất, phục vụ binh chủng Germanio sĩ số, chủ yếu binh Maroc và Algérie. Thế chiến lần thứ 2, Na va chỉ huy sư đoàn Constantine ở Angiêri (Bắc Phi). Khi sang Đông Dương làm Tổng chỉ huy quân đội viễn chinh Pháp ở Đông Dương, Na va là tướng 4 sao, Tổng tham mưu trưởng lực lượng quân khối Bắc Đại Tây Dương (NATO). Báo chí nước ngoài ca ngợi Na va như một danh tướng để “lộn lại tình hình Đông Dương…”
    <img src="/dienbienphuI-A.gif" alt="Kế hoạch Nava" className="w-full h-56 object-cover rounded-lg mb-4" />
Tướng Henri Nava (1898-1983), Tổng chỉ huy quân đội Pháp tại Đông Dương 1953-1954.

Sau khi nghiên cứu thực trạng chiến trường Đông Dương và căn cứ vào ý đồ chính trị của Pa ri cùng thái độ của Oa sinh tơn đối với cuộc chiến tranh Đông Dương, tướng Na va vạch ra một kế hoạch quân sự mang tên “Kế hoạch Na va” với hy vọng trong một thời gian ngắn sẽ giành một thắng lợi quyết định về quân sự, xoay chuyển tình thế cuộc chiến ở Đông Dương, chuyển bại thành thắng (kế hoạch Na va). Theo kế hoạch Na va, phần tác chiến gồm hai bước và hoàn thành trong 18 tháng:

- Trong chiến cục 1953-1954, giữ thế phòng thủ ở phía bắc vĩ tuyến 18 và tìm cách tránh giao chiến lớn. Trái lại, ở phía Nam lại tiến công để ổn định miền Trung và nam Đông Dương để lấy được nhân lực, vật lực. Đặc biệt phải đánh chiếm được Liên khu V.

- Khi đạt được ưu thế về quân cơ động, nghĩa là nếu có thể được thì mùa thu năm 1954, “thực hành tiến công ở phía Bắc nhằm mục đích tạo ra một tình hình quân sự cho phép đưa ra một giải pháp chính trị thích hợp để giải quyết chiến tranh (Thời điểm của những nhân vật, H. Na va, Nxb Plông, Pari, 1979).

Như vậy, điểm mấu chốt trong kế hoạch của tướng Na va là tập trung được một lực lượng cơ động ưu thế hơn đối phương, sau khi giải quyết chiến trường phía Nam, sẽ thực hành tiến công ở phía Bắc, tạo ra tình hình quân sự có lợi làm cơ sở cho giải pháp chính trị kết thúc chiến tranh. Đó là chiến lược có qui mô rộng lớn, thực hiện tập trung sự cố gắng lớn và cuối cùng của Pháp trong cuộc chiến tranh xâm lược Đông Dương.

Để thực hiện kế hoạch trên, tướng Na va tập trung xây dựng 27 Binh đoàn cơ động GM (Groupement mobile) cho toàn chiến trường Đông Dương. Riêng ở Bắc Bộ, Pháp có 44 tiểu đoàn cơ động. Tuy nhiên, hậu quả của việc rút quân về xây dựng khối quân cơ động khiến lực lượng quân sự Pháp - Ngụy ở các chiến trường trở nên mỏng, yếu không yểm trợ được cho nhau khi bị tấn công trên toàn các chiến trường.
    `,
        sources: [
          {
            label: "Nguồn tham khảo",
            url: "https://baotanglichsu.vn/vi/Articles/3097/13850/ke-hoach-na-va-va-chien-cuc-djong-xuan-1953-1954.html",
          },
        ],
      },
    ],
    color: "border-red-700 from-yellow-100 via-red-50 to-yellow-200",
  },
  {
    id: 2,
    title: "Việt Nam – Chiến lược Đông Xuân 1953–1954",
    image: "/images.jpg",
    shortDesc: [
      "Tháng 9/1953: Bộ Chính trị chủ động chuẩn bị hậu cần",
      "Chiến lược: 'Tránh chỗ mạnh, đánh chỗ yếu'",
      "Đại tướng Võ Nguyên Giáp làm Tư lệnh, Phạm Văn Đồng phụ trách hậu cần",
      "6/12/1953: Quyết định mở Chiến dịch Điện Biên Phủ",
    ],
    details: [
      {
        text: `
        <b> Sau khi đánh giá và nhận định những âm mưu, thủ đoạn mới của địch cũng như các điểm yếu của chúng, cuối tháng 9/1953, tại khu ATK (an toàn khu) Định Hóa, Thái Nguyên, Bộ Chính trị - Ban Chấp hành Trung ương Đảng Lao động Việt Nam, dưới sự chủ trì của Chủ tịch Hồ Chí Minh đã mở Hội nghị bàn nhiệm vụ quân sự Đông Xuân 1953-1954. </b> 
        Bộ Chính trị khẳng định kế hoạch Na va tuy có thể gây cho kháng chiến những khó khăn mới, nhưng bản thân nó là một sản phẩm bị động, nên chứa nhiều mâu thuẫn và có nhiều nhược điểm không thể khắc phục được. Hội nghị xác định phương châm chiến lược là “tích cực, chủ động, cơ động, linh hoạt với quyết tâm giữ vững quyền chủ động đánh địch trên cả hai mặt trận chính diện và sau lưng địch, phối hợp trên phạm vi cả nước và phối hợp trên phạm vi toàn Đông Dương”. Chủ trương tác chiến của bộ đội ta trong chiến cục Đông Xuân 1953 - 1954 là sử dụng một bộ phận chủ lực mở những cuộc tiến công vào hướng quân Pháp sơ hở, đồng thời bằng đánh vận động tranh thủ cơ hội tiêu diệt sinh lực địch khi quân Pháp đánh sâu vào vùng tự do. Điểm mấu chốt của chiến lược là tập trung nỗ lực tìm cách phân tán các binh đoàn cơ động chiến lược của Pháp vừa được tổ chức, xây dựng.
        <img src="/cuo_hop_1954.gif" alt="Chủ tịch Hồ Chí Minh và Bộ chính trị họp bàn chủ trương tác chiến Đông Xuân 1953-1954." className="w-full h-56 object-cover rounded-lg mb-4" />
        Chủ tịch Hồ Chí Minh và Bộ chính trị họp bàn chủ trương tác chiến Đông Xuân 1953-1954.
        Thực hiện chủ trương trên, bộ đội chủ lực của ta đã mở các chiến dịch với mục đích bắt buộc quân Pháp phải phân tán lực lượng ra khắp chiến trường Đông Dương. Đó là: giải phóng Lai Châu (10/12/1953), tiến công chiến lược Trung Hạ Lào (từ 21/12/1953 đến 31/1/1954), tiến công chiến lược ở Thượng Lào (từ 26/1 đến 10/2/1954), tiến công chiến lược Bắc Tây Nguyên (từ 27/1 đến 5/2/1954), và đánh địch ngay sau lưng chúng ở đồng bằng Bắc Bộ, Bình Trị Thiên, Nam Trung Bộ, Nam Bộ.
        <img src="/mang_den.gif" alt="Măng Đen" className="w-full h-56 object-cover rounded-lg mb-4" />
        Quân ta đánh chiếm căn cứ Măng Đen (Kon Tum) trong chiến dịch bắc Tây Nguyên (tháng 1-2/1954)
        Ngoài ra, nhận thức rõ vị trí chiến lược của miền Tây Bắc, nơi có thể phát huy sở trường tác chiến của ta, trung tuần tháng 11/1953, đại đoàn 316 (thiếu trung đoàn 176) được phái lên Tây Bắc. Đây là một đòn điểm trúng “huyệt hiểm” của Pháp. Bởi với họ, địa danh Điện Biên Phủ - Tây Bắc “là một vị trí chiến lược quan trọng chẳng những đối với chiến trường Đông Dương, mà còn đối với khu vực Đông Nam Á”, và là “một bàn xoay có thể xoay đi bốn phía Việt Nam, Lào, Mianma, Trung Quốc, và là chiếc chìa khóa bảo vệ Thượng Lào” (Na va: Đông Dương hấp hối, Nxb Plông, Pari 1958), từ đó đánh chiếm lại các vùng đã mất ở Tây Bắc trong những năm 1950-1953 và tạo điều kiện để đánh tiêu diệt quân chủ lực của Việt Minh tại đây. Pháp cấp tốc cho 6 tiểu đoàn nhảy dù xuống chiếm đóng Điện Biên Phủ vào các ngày 20,21,22/11/1953, khi đại đoàn 316 của ta đang trên đường hành quân lên Lai Châu. Nhờ có sự giúp đỡ của Mỹ, thực dân Pháp đã xây dựng Điện Biên Phủ thành một tập đoàn cứ điểm mạnh nhất Đông Dương, thành trung tâm điểm của kế hoạch Na va. Các đơn vị tinh nhuệ nhất của Pháp được điều động lên đây, cùng với nhiều loại vũ khí hiện đại được bố trí gồm 49 cứ điểm chia làm ba khu: khu trung tâm Mường Thanh có chỉ huy sở, nhiều trung tâm đề kháng, nhiều cứ điểm bao quanh sân bay; khu Bắc có 3 trung tâm đề kháng là Him Lam, Độc Lập, Bản Kéo và khu Nam có trung tâm đề kháng Hồng Cúm. Thực dân Pháp tuyên bố Điện Biên Phủ là “pháo đài bất khả xâm phạm” và thách thức quân ta tấn công.
        <img src="/HimLam.gif" alt="Him Lam, Điện Biên Phủ, 3/1954." className="w-full h-56 object-cover rounded-lg mb-4" />
        Như vậy, với các đòn tấn công dồn dập của quân đội ta trên khắp các chiến trường trong chiến cục Đông Xuân 1953-1954, đã đẩy quân Pháp vào thế bị động, bắt buộc Na va và quân đội Pháp phải chấp nhận phân tán lực lượng để đối phó, làm thất bại âm mưu tập trung khối cơ động chiến lược của chúng, tạo điều kiện cho bộ đội ta tác chiến các chiến dịch có qui mô lớn, mà đỉnh cao là trận quyết chiến chiến lược tiêu diệt Tập đoàn cứ điểm Điện Biên Phủ (từ 13/3 đến 7/5/1954), làm phá sản hoàn toàn kế hoạch Na va, kết thúc thắng lợi cuộc kháng chiến trường kỳ 9 năm chống thực dân Pháp xâm lược của nhân dân Việt Nam.
        `,
        sources: [
          {
            label: "Nguồn tham khảo",
            url: "https://baotanglichsu.vn/vi/Articles/3097/13850/ke-hoach-na-va-va-chien-cuc-djong-xuan-1953-1954.html",
          },
        ],
      },
    ],
    color: "border-green-700 from-yellow-100 via-green-50 to-yellow-200",
  },
];

// Component
const IntroductionSection: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<CardItem | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

const speakText = (text: string) => {
  if ('speechSynthesis' in window) {
    const utter = new window.SpeechSynthesisUtterance(text);
    utter.lang = 'vi-VN';
    utter.rate = 0.7; // thêm tốc độ đọc
    utter.onend = () => setIsSpeaking(false);
    utter.onstart = () => setIsSpeaking(true);
    window.speechSynthesis.speak(utter);
  }
};

  // Hàm dừng đọc văn bản
  const stopSpeaking = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  // Hàm đóng Dialog
  const handleClose = () => {
    setSelectedCard(null);
    stopSpeaking(); // Dừng giọng nói khi đóng dialog
  };

  return (
    <section
      className="max-w mx-auto py-12 px-4 bg-[#fdf6e3] min-h-screen bg-cover bg-center bg-fixed font-sans"
      style={{
        backgroundImage: `url(https://nghiavuquansu.vn/wp-content/uploads/2025/02/chien-dich-dien-bien-phu-1954.jpg)`,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        backgroundBlendMode: "overlay",
      }}
    >

      {/* Tiêu đề */}
      <div className="text-center mb-8">
        <h2
          className="text-2xl lg:text-3xl font-bold text-[#3a3a3a] uppercase tracking-widest"
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
          Bối cảnh
        </h2>
      </div>

      {/* Cards */}
      <div className="grid lg:grid-cols-2 gap-8">
        {data.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedCard(item)}
            className={`cursor-pointer bg-[#f8f1e4] border-4 border-[#6b4423] rounded-lg shadow-md p-4 flex flex-col hover:brightness-105 transition duration-300`}
          >
            {/* Title */}
            <h3 className="text-lg font-bold uppercase tracking-wide mb-3 text-[#3a3a3a] text-center"
              style={{ 
                color: "var(--gray-white, #020202ff)",
                // textShadow: "5px 5px 0 rgba(0,0,0,.15)",
                fontSize: "40px",
                fontWeight: 700,
                lineHeight: "1.2",
                textTransform: "uppercase",
              }}
              >
              {item.title}
            </h3>

            {/* Image */}
            <div className="relative w-64 h-40 mb-4 border-4 border-[#6b4423] rounded-md overflow-hidden mx-auto">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover filter sepia-[0.5] contrast-[1.1] brightness-[0.95]"
              />
              <span className="absolute top-1 left-1 text-xs bg-[#6b4423] text-white px-2 py-1 rounded-lg">
                1953
              </span>
            </div>

            {/* Short description */}
            <ul className="text-lg text-gray-800 space-y-1 text-left list-disc list-inside">
              {item.shortDesc.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* MUI Dialog */}
      <Dialog
        open={!!selectedCard}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          style: {
            maxHeight: "90vh",
            overflowY: "auto",
            borderRadius: "16px",
            padding: "16px",
          },
        }}
      >
        <DialogTitle>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800">{selectedCard?.title}</h2>
            <IconButton onClick={handleClose}>
              <CircleMinus />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          {selectedCard && (
            <>
              {/* Image */}
              <img
                src={selectedCard.image}
                alt={selectedCard.title}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />

              {/* Nút bật/tắt giọng nói */}
               <div className="mb-4 flex gap-3">
                {!isSpeaking ? (
                  <button
                    onClick={() =>
                      speakText(
                        selectedCard.details
                          .map((detail) =>
                            detail.text.replace(/<[^>]+>/g, "").replace(/\s+/g, " ")
                          )
                          .join(" ")
                      )
                    }
                    className="px-4 py-2 bg-yellow-400 rounded font-bold text-brown hover:bg-yellow-500 flex items-center gap-2"
                  >
                    🔊 Đọc nội dung
                  </button>
                ) : (
                  <button
                    onClick={stopSpeaking}
                    className="px-4 py-2 bg-red-400 rounded font-bold text-white hover:bg-red-500 flex items-center gap-2"
                  >
                    ⏹️ Tắt giọng nói
                  </button>
                )}
              </div> 

              {/* Details */}
              <div className="text-lg text-gray-700 leading-relaxed whitespace-pre-line break-words">
                {selectedCard.details.map((detail, i) => (
                  <div key={i} className="mb-6">
                    <div dangerouslySetInnerHTML={{ __html: detail.text }} />
                    {detail.sources && detail.sources.length > 0 && (
                      <div className="mt-2 space-x-2">
                        {detail.sources.map((s, idx) => (
                          <a
                            key={idx}
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            {s.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default IntroductionSection;