import React from "react";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import DiaglogContentTab from "@/components/DiaglogContentTab";

function VerticalTimeline1() {
  return (
    <section
      className="relative w-full bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://imgnvsk.vnanet.vn/MediaUpload/Content/2024/03/13/313-14-29-10-921-518-13-14-30-7.jpg')",
      }}
    >
      <div className="bg-black/40 w-full h-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white"
            style={{
              fontFamily: "var(--font-family-brand)",
              color: "var(--gray-white, #fff)",
              textShadow: "5px 5px 0 rgba(0,0,0,.15)",
              fontSize: "100px",
              fontWeight: 900,
              lineHeight: "130%",
              textTransform: "uppercase",
              textAlign: "center",
            }}>
            Diễn biến Chiến dịch
          </h2>
        </div>
        <VerticalTimeline lineColor="#bfa76a">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(0, 0, 0, 0.39)",
              color: "#fff",
              boxShadow: "0 3px 0 #e7e2e2ff",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(0, 0, 0, 0.8)" }}
            date="13/3 - 17/3/1954"
            dateClassName="text-white font-bold text-lg"
            iconStyle={{
              background: "rgba(255, 0, 0, 1)",
              color: "#fff",
              boxShadow: "0 0 0 4px #ff0000ff",
            }}
          // icon={<WorkIcon />}
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Đợt 1 (13/3 - 17/3/1954): Tấn công mở màn cho chiến dịch Điện Biên
              Phủ
            </h1>
            <div className="mt-3 w-ful">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS58l7yiISVHmzOeAK6kN_TcIZ65ZgWcghzeg&s"
                alt="Dien Bien Phu Campaign"
                width={600}
                height={400}
                className="rounded-lg grayscale object-contain"
              />
              <div className="mt-4 mr-70">
                <DiaglogContentTab
                  title="Đợt 1 (13/3 – 17/3/1954)"
                  tabs={[
                    {
                      key: "prepare",
                      label: "Chuẩn bị",
                      content: (
                        <div className="space-y-4 leading-relaxed text-[color:var(--charcoal)]">
                          <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                            <p>
                              Bộ Chỉ huy chuyển phương châm từ "đánh nhanh,
                              thắng nhanh" sang <b>"đánh chắc, tiến chắc"</b> để
                              bảo đảm thắng lợi bền vững.
                            </p>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                            <div className="space-y-3">
                              <div>
                                <h5 className="font-semibold text-[color:var(--brown)] mb-1">
                                  Bố trí địch (phân khu Bắc)
                                </h5>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                  <li>
                                    Ba cụm cứ điểm:{" "}
                                    <b>Him Lam – Độc Lập – Bản Kéo</b> ("lá
                                    chắn" vòng ngoài).
                                  </li>
                                  <li>
                                    Liên kết hỏa lực, công sự vững chắc, yểm trợ
                                    pháo từ trung tâm Mường Thanh.
                                  </li>
                                </ul>
                              </div>

                              <div>
                                <h5 className="font-semibold text-[color:var(--brown)] mb-1">
                                  Lực lượng ta và nhiệm vụ
                                </h5>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                  <li>
                                    <b>Đại đoàn 312</b>: tiến công{" "}
                                    <b>Him Lam</b> và <b>Độc Lập</b>.
                                  </li>
                                  <li>
                                    <b>Đại đoàn 308</b>: tiến công{" "}
                                    <b>Bản Kéo</b>.
                                  </li>
                                  <li>
                                    <b>Pháo binh 351</b>: chế áp, chi viện trực
                                    tiếp cho bộ binh.
                                  </li>
                                  <li>
                                    <b>Công binh</b>: mở cửa, phá rào, bộc phá,
                                    bảo đảm cơ động.
                                  </li>
                                </ul>
                              </div>

                              <div>
                                <h5 className="font-semibold text-[color:var(--brown)] mb-1">
                                  Phương án hiệp đồng
                                </h5>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                  <li>
                                    Pháo mở màn, đánh gần, đánh lô cốt; tác
                                    chiến <b>ban đêm</b> linh hoạt.
                                  </li>
                                  <li>
                                    Giữ vững trận địa, sẵn sàng đập tan phản
                                    kích, nhanh chóng củng cố cửa mở.
                                  </li>
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
                              <p className="text-xs text-gray-600 text-center mt-2 italic">
                                Chỉ đạo chiến dịch: giữ vững phương châm "đánh
                                chắc, tiến chắc"
                              </p>
                            </div>
                          </div>

                          <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                            <h5 className="font-semibold text-[color:var(--brown)] mb-2">
                              Mục tiêu Đợt 1
                            </h5>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>
                                Phá vỡ <b>tuyến phòng thủ vòng ngoài</b> phía
                                Bắc.
                              </li>
                              <li>
                                Làm chủ các <b>điểm cao then chốt</b>, mở cửa
                                vào trung tâm Mường Thanh.
                              </li>
                              <li>
                                Tiêu hao nặng sinh lực địch,{" "}
                                <b>làm suy sụp tinh thần</b> và khả năng ứng
                                cứu.
                              </li>
                              <li>
                                Tạo bàn đạp vững chắc cho{" "}
                                <b>đợt tiến công thứ hai</b>.
                              </li>
                            </ul>
                          </div>
                        </div>
                      ),
                    },
                    {
                      key: "map",
                      label: "Bản đồ",
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
                      ),
                    },
                    {
                      key: "progress",
                      label: "Diễn biến",
                      content: (
                        <div className="space-y-4 leading-relaxed text-[color:var(--charcoal)]">
                          <p>
                            Đợt 1 mở màn chiến dịch với các đòn đánh nhanh,
                            chắc, nhằm phá vỡ "lá chắn" phía Bắc (Him Lam – Độc
                            Lập – Bản Kéo), mở cửa vào trung tâm Mường Thanh.
                          </p>

                          <div className="space-y-3">
                            <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                              <h4 className="font-semibold text-[color:var(--brown)] mb-1">
                                Chiều 13/3 – Đêm 13/3: Him Lam
                              </h4>
                              <p>
                                Pháo binh 351 bất ngờ chế áp; Đại đoàn 312 xung
                                phong đánh chiếm trung tâm đề kháng. Đến đêm
                                13/3, ta làm chủ Him Lam; phản kích sáng 14/3
                                của địch bị đập tan.
                              </p>
                            </div>

                            <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                              <h4 className="font-semibold text-[color:var(--brown)] mb-1">
                                Chiều 14/3 – Rạng sáng 15/3: Độc Lập
                              </h4>
                              <p>
                                Ta nổ súng 16:45, hiệp đồng bộ binh – pháo binh
                                – công binh, đánh chiếm điểm cao Độc Lập sau một
                                đêm chiến đấu ác liệt, giữ vững trước nhiều đợt
                                phản kích.
                              </p>
                            </div>

                            <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                              <h4 className="font-semibold text-[color:var(--brown)] mb-1">
                                Sáng 17/3: Bản Kéo
                              </h4>
                              <p>
                                Thế trận áp đảo, địch hoang mang rút bỏ Bản Kéo;
                                ta làm chủ toàn bộ phân khu Bắc mà gần như không
                                phải nổ súng, hoàn tất mục tiêu mở cửa tiến
                                công.
                              </p>
                            </div>
                          </div>

                          <div className="bg-white p-4 rounded-lg shadow-sm border">
                            <h5 className="font-semibold text-[color:var(--brown)] mb-2">
                              Điểm nhấn chiến thuật
                            </h5>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>
                                Pháo binh 351 lần đầu xuất trận, tạo ưu thế hỏa
                                lực quyết định.
                              </li>
                              <li>
                                Đột phá cửa mở qua nhiều lớp rào, đánh gần, đánh
                                lô cốt hiệu quả.
                              </li>
                              <li>
                                Hiệp đồng chặt chẽ bộ binh – pháo binh – công
                                binh; tác chiến ban đêm linh hoạt.
                              </li>
                              <li>
                                Địch suy sụp tinh thần, rút chạy hoặc bị tiêu
                                diệt ở các cứ điểm then chốt.
                              </li>
                            </ul>
                          </div>
                        </div>
                      ),
                    },
                    {
                      key: "result",
                      label: "Kết quả",
                      content: (
                        <div className="space-y-4 leading-relaxed text-[color:var(--charcoal)]">
                          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                            <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                              Kết quả trực tiếp
                            </h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>
                                Mất toàn bộ phân khu Bắc; tuyến phòng thủ vòng
                                ngoài bị xóa sổ.
                              </li>
                              <li>
                                Sinh lực địch tổn thất nặng (≈2.500 tên bị loại
                                khỏi vòng chiến đấu).
                              </li>
                              <li>
                                Địch buộc co cụm về Mường Thanh và Hồng Cúm, thế
                                trận bị động.
                              </li>
                              <li>
                                Tinh thần quân Pháp sa sút nghiêm trọng trước ưu
                                thế hỏa lực của ta.
                              </li>
                            </ul>
                          </div>

                          <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                            <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                              Ý nghĩa chiến dịch
                            </h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>
                                Tiêu diệt gọn "lá chắn" phía Bắc – mở màn thắng
                                lợi cho toàn chiến dịch.
                              </li>
                              <li>
                                Khẳng định phương châm "đánh chắc, tiến chắc" là
                                đúng đắn và hiệu quả.
                              </li>
                              <li>
                                Cổ vũ mạnh mẽ tinh thần quân dân, tạo tiếng vang
                                lớn quốc tế.
                              </li>
                              <li>
                                Tạo bàn đạp vững chắc cho Đợt 2, siết chặt vòng
                                vây Điện Biên Phủ.
                              </li>
                            </ul>
                          </div>
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(0, 0, 0, 0.8)",
              color: "#fff",
              boxShadow: "0 3px 0 #EAB308",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(0, 0, 0, 0.8)" }}
            date="13 – rạng sáng 14/3/1954"
            dateClassName="text-white font-bold text-lg -mt-2"
            iconStyle={{
              background: "#EAB308",
              color: "#fff",
              boxShadow: "0 0 0 2px #EAB308",
              width: "30px",
              height: "30px",
              marginLeft: "-15px",
            }}
          >
            <h1 className="text-lg sm:text-xl font-semibold text-white">
              Trận Him Lam
            </h1>

            <div className="mt-3 relative w-full">
              <Image
                src="https://imgs.search.brave.com/5tBwa6uR-p54fjwIWJ7fWvji0l42Bkv8FyhYbmUKTsY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85LzllL1Ry/YW5fSGltX0xhbS5q/cGcvNTEycHgtVHJh/bl9IaW1fTGFtLmpw/Zw"
                alt="Dien Bien Phu Campaign"
                width={600}
                height={400}
                className="rounded-lg grayscale object-contain"
              />
            </div>

            {/* Xem chi tiết button */}
            <div className="mt-4 mr-70">
              <DiaglogContentTab
                title="Trận Him Lam (13 – rạng sáng 14/3/1954)"
                tabs={[
                  {
                    key: "progress",
                    label: "Diễn biến",
                    content: (
                      <div className="space-y-6 leading-relaxed text-[color:var(--charcoal)]">
                        {/* Timeline Section */}
                        <div className="space-y-4">
                          <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                            <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                              8:00 sáng ngày 13-3-1954
                            </h4>
                            <p>
                              Những viên đạn sơn pháo của bộ đội ta bắn vào sân
                              bay Mường Thanh làm hai chiếc máy bay Dakota của
                              quân Pháp vừa hạ cánh xuống đây bốc cháy.
                            </p>
                          </div>

                          <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                            <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                              17:05 chiều ngày 13-3-1954
                            </h4>
                            <p>
                              Sau hiệu lệnh của Đại tướng Võ Nguyên Giáp, 40
                              khẩu pháo cỡ nòng 75mm đến 120mm đồng loạt nhả đạn
                              vào các vị trí của quân Pháp trong cứ điểm Him
                              Lam, bộ đội ta xuất kích bắt đầu trận đánh mở màn
                              của Chiến dịch Điện Biên Phủ.
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
                          <p className="text-sm text-gray-600 text-center mt-2 italic">
                            Hình ảnh minh họa trận đánh Him Lam
                          </p>
                        </div>

                        {/* Results Section */}
                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                            Kết quả trận đánh
                          </h4>
                          <p>
                            Trận đánh cứ điểm Him Lam kéo dài đến 23 giờ 30 phút
                            đêm ngày 13-3-1954 thì kết thúc. 7 giờ 30 phút ngày
                            14-3-1954, quân địch tổ chức lực lượng phản kích
                            hòng chiếm lại Him Lam nhưng bị thất bại và tiếp tục
                            bị thiệt hại nặng, phải từ bỏ hoàn toàn ý định chiếm
                            lại cứ điểm Him Lam.
                          </p>
                          <p className="mt-2 font-medium">
                            <strong>Kết quả:</strong> Đại đoàn 312 đã hoàn thành
                            nhiệm vụ tiêu diệt trung tâm đề kháng cứ điểm Him
                            Lam, diệt 300 tên địch, bắt 200 tên, thu toàn bộ vũ
                            khí, trang bị…
                          </p>
                        </div>

                        {/* Quote Section */}
                        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                          <div className="flex items-start space-x-3">
                            <div className="text-amber-600 text-2xl">"</div>
                            <div className="flex-1">
                              <p className="text-sm text-gray-600 mb-2">
                                <strong>Hạ sĩ Kubiak</strong> - người sống sót
                                trong trận Him Lam kể lại về trận pháo hỏa mở
                                màn chiều ngày 13-3-1954:
                              </p>
                              <blockquote className="italic text-[color:var(--charcoal)] leading-relaxed">
                                "Vào lúc đó, dập một cái, ngày tận thế đã đến...
                                Béatrice bay đi, tan thành bụi. Quanh tôi đất đá
                                tung lên, những người lính lê dương gục xuống,
                                bị thương và chết nằm la liệt. Tất cả đều kinh
                                ngạc và tự hỏi không biết Việt Minh lấy ở đâu ra
                                nhiều pháo đến thế, có thể bắn mạnh đến thế. Đạn
                                đại bác trút xuống không ngừng như một trận mưa
                                đá bất thần buổi chiều thu. Lô cốt, đường hào
                                nối tiếp nhau đè bẹp, chôn vùi người và vũ khí".
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
                                  <span className="text-white font-bold text-lg">
                                    PG
                                  </span>
                                </div>
                              </div>
                              <div className="flex-1">
                                <h4 className="text-lg font-bold text-[color:var(--brown)] mb-2">
                                  Anh hùng liệt sĩ Phan Đình Giót
                                </h4>
                                <p className="text-[color:var(--charcoal)] leading-relaxed mb-3">
                                  Chiều 13-3-1954, trong trận mở màn Chiến dịch
                                  Điện Biên Phủ, anh hùng Phan Đình Giót đã
                                  chiến đấu kiên cường và dũng cảm lấy thân mình
                                  lấp lỗ châu mai, dập tắt hỏa lực của địch, tạo
                                  điều kiện cho đơn vị xông lên tiêu diệt cứ
                                  điểm Him Lam.
                                </p>
                                <div className="bg-white/50 p-3 rounded border-l-3 border-red-400">
                                  <p className="text-sm text-gray-700 italic">
                                    "Lấy thân mình lấp lỗ châu mai để quân ta
                                    chớp thời cơ, xông lên tiêu diệt cứ điểm Him
                                    Lam, giành thắng lợi trong trận mở màn"
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
                                  <span className="text-white font-bold text-lg">
                                    TV
                                  </span>
                                </div>
                              </div>
                              <div className="flex-1">
                                <h4 className="text-lg font-bold text-[color:var(--brown)] mb-2">
                                  Anh hùng Tô Vĩnh Diện
                                </h4>
                                <p className="text-[color:var(--charcoal)] leading-relaxed">
                                  Trong chiến dịch này đã xuất hiện nhiều tấm
                                  gương dũng cảm, mưu trí "gan không núng, chí
                                  không mòn". Đó là hình ảnh Anh hùng Tô Vĩnh
                                  Diện hy sinh thân mình để cứu khẩu pháo.
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
                                Hình ảnh minh họa về các anh hùng trong Chiến
                                dịch Điện Biên Phủ
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(0, 0, 0, 0.8)",
              color: "#fff",
              boxShadow: "0 3px 0 #EAB308",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(0, 0, 0, 0.8)" }}
            date="14 – 15/3/1954"
            dateClassName="text-white font-bold text-lg -mt-2"
            iconStyle={{
              background: "#EAB308",
              color: "#fff",
              boxShadow: "0 0 0 2px #EAB308",
              width: "30px",
              height: "30px",
              marginLeft: "-15px",
            }}
          >
            <h1 className="text-lg sm:text-xl font-semibold text-white">
              Trận Độc Lập
            </h1>

            <div className="mt-3 relative w-full">
              <Image
                src="https://en.nhandan.vn/megastory/2024/dbp/images/1503.jpg"
                alt="Dien Bien Phu Campaign"
                width={600}
                height={400}
                className="rounded-lg grayscale object-contain"
              />
            </div>

            {/* Xem chi tiết button */}
            <div className="mt-4 mr-70">
              <DiaglogContentTab
                title="Trận Độc Lập (14 – 15/3/1954)"
                tabs={[
                  {
                    key: "overview",
                    label: "Tổng quan",
                    content: (
                      <div className="space-y-6 leading-relaxed text-[color:var(--charcoal)]">
                        <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-6 rounded-lg border-l-4 border-[color:var(--gold)]">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-3 text-lg">
                            Trận Độc Lập - Mở màn chiến dịch Điện Biên Phủ
                          </h4>
                          <p className="text-sm leading-relaxed">
                            Trận Độc Lập diễn ra từ chiều 14/3 đến sáng 15/3/1954, là trận đánh mở màn của chiến dịch Điện Biên Phủ.
                            Đây là trận đánh then chốt đầu tiên, đánh dấu sự khởi đầu của cuộc tiến công quy mô lớn vào Tập đoàn cứ điểm Điện Biên Phủ.
                          </p>
                        </div>
                      </div>
                    ),
                  },
                  {
                    key: "progress",
                    label: "Diễn biến",
                    content: (
                      <div className="space-y-6 leading-relaxed text-[color:var(--charcoal)]">
                        {/* Phase 1: Preparation */}
                        <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-3 text-lg flex items-center">
                            <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">1</span>
                            Chiều 14-3-1954: Chuẩn bị và triển khai
                          </h4>
                          <div className="space-y-3 text-sm leading-relaxed">
                            <div className="bg-white/50 p-3 rounded">
                              <strong>16 giờ 45 phút:</strong> Đơn vị được lệnh hành quân vào vị trí xuất phát xung phong.
                            </div>
                            <div className="bg-white/50 p-3 rounded">
                              <strong>Điều kiện khó khăn:</strong> Trời mưa tầm tã, chiến hào đất bùn lầy lội, bị pháo địch từ Mường Thanh, Hồng Cúm bắn ra dồn dập.
                            </div>
                            <div className="bg-white/50 p-3 rounded">
                              <strong>24 giờ:</strong> Tiểu đoàn 115, Trung đoàn 165 (hướng chủ yếu) và Trung đoàn 88 (hướng thứ yếu) đã vào vị trí chiến đấu.
                            </div>
                            <div className="bg-white/50 p-3 rounded">
                              <strong>Chiến sĩ bộc phá:</strong> Trườn qua các khoảng trống dưới trời mưa, vượt qua tầm đạn pháo của địch, bí mật nhích dần về phía chân cứ điểm.
                            </div>
                            <div className="bg-red-50 p-3 rounded border-l-4 border-red-400">
                              <strong>Vấn đề:</strong> Pháo tăng cường chưa tới được do trời mưa đường sá lầy lội, phải chờ để hạn chế tổn thất và đảm bảo chắc thắng.
                            </div>
                          </div>
                        </div>

                        {/* Phase 2: Attack */}
                        <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-3 text-lg flex items-center">
                            <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">2</span>
                            Ngày 15-3-1954: Tấn công và chiến đấu
                          </h4>
                          <div className="space-y-3 text-sm leading-relaxed">
                            <div className="bg-white/50 p-3 rounded">
                              <strong>2 giờ sáng:</strong> Pháo tới trận địa, 3 giờ được lệnh tấn công.
                            </div>
                            <div className="bg-white/50 p-3 rounded">
                              <strong>Hỏa lực yểm trợ:</strong> Tất cả các loại hỏa lực, trọng pháo bắn dồn dập vào trận địa pháo địch để khống chế, chế áp cứ điểm.
                            </div>
                            <div className="bg-white/50 p-3 rounded">
                              <strong>Hướng chủ yếu (Trung đoàn 165):</strong> Tiến hành thuận lợi, Tiểu đoàn 115 chủ công đánh bộc phá mở cửa.
                            </div>
                            <div className="bg-white/50 p-3 rounded">
                              <strong>Sau 40 phút:</strong> Chiến sĩ bộc phá mở cửa xong, tiểu đội mũi nhọn xung phong vào cứ điểm.
                            </div>
                            <div className="bg-white/50 p-3 rounded">
                              <strong>Chiến đấu quyết liệt:</strong> Giành đi giật lại từng lô cốt, từng đoạn chiến hào. Địch dựa vào hầm ngầm công sự chống trả quyết liệt.
                            </div>
                            <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                              <strong>Thành công:</strong> Tiểu đội trưởng Trần Ngọc Doãn bắt tù binh dẫn đường, tiêu diệt 4 khẩu cối 120 ly, đánh chiếm khu thông tin và Sở chỉ huy địch.
                            </div>
                          </div>
                        </div>

                        {/* Phase 3: Completion */}
                        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-3 text-lg flex items-center">
                            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">3</span>
                            Kết thúc trận đánh
                          </h4>
                          <div className="space-y-3 text-sm leading-relaxed">
                            <div className="bg-white/50 p-3 rounded">
                              <strong>Thời gian:</strong> Từ 3 giờ 30 phút đến 6 giờ 30 phút ngày 15-3-1954.
                            </div>
                            <div className="bg-white/50 p-3 rounded">
                              <strong>Kết quả:</strong> Quân ta hoàn toàn làm chủ đồi Độc Lập.
                            </div>
                            <div className="bg-white/50 p-3 rounded">
                              <strong>Thiệt hại địch:</strong> Tiêu diệt 483 tên (có 2 quan ba), bắt sống 200 tên, thu toàn bộ vũ khí.
                            </div>
                            <div className="bg-white/50 p-3 rounded">
                              <strong>Đánh dấu:</strong> Xóa sổ Tiểu đoàn 5 Bắc Phi.
                            </div>
                            <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                              <strong>Phản kích thất bại:</strong> Địch từ Mường Thanh đưa bộ binh và xe tăng ra phản kích nhưng bị Đại đội 213 (Trung đoàn 88) chặn đánh, buộc phải rút chạy.
                            </div>
                          </div>
                        </div>

                        {/* Image Section */}
                        <div className="text-center">
                          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                            <Image
                              src="https://imgnvsk.vnanet.vn/MediaUpload/Content/2023/8/18/434-ttxvn_dien_bien_phu_12.jpg"
                              alt="Bộ đội ta đánh địch phản kích trong trận Độc Lập"
                              width={800}
                              height={1200}
                              className="w-full h-auto object-contain rounded-lg shadow-md"
                            />
                            <p className="text-sm text-gray-600 mt-3 italic">
                              Bộ đội ta đánh địch phản kích. (Ảnh: Tư liệu/TTXVN phát)
                            </p>
                          </div>
                        </div>
                      </div>
                    ),
                  },
                  {
                    key: "significance",
                    label: "Ý nghĩa",
                    content: (
                      <div className="space-y-6 leading-relaxed text-[color:var(--charcoal)]">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
                            <h4 className="font-semibold text-[color:var(--brown)] mb-4 text-lg">
                              Ý nghĩa quân sự
                            </h4>
                            <div className="space-y-3 text-sm leading-relaxed">
                              <div className="bg-white/50 p-3 rounded">
                                <strong>Mở màn chiến dịch:</strong> Đánh dấu sự khởi đầu của cuộc tiến công quy mô lớn vào Tập đoàn cứ điểm Điện Biên Phủ.
                              </div>
                              <div className="bg-white/50 p-3 rounded">
                                <strong>Thử nghiệm chiến thuật:</strong> Kiểm nghiệm hiệu quả của phương pháp đánh bộc phá mở cửa và xung phong.
                              </div>
                              <div className="bg-white/50 p-3 rounded">
                                <strong>Khẳng định sức mạnh:</strong> Chứng minh khả năng tiêu diệt các cứ điểm kiên cố của địch.
                              </div>
                              <div className="bg-white/50 p-3 rounded">
                                <strong>Tạo thế tiến công:</strong> Mở đường cho các trận đánh tiếp theo vào Bản Kéo và các cứ điểm khác.
                              </div>
                            </div>
                          </div>

                          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                            <h4 className="font-semibold text-[color:var(--brown)] mb-4 text-lg">
                              Ý nghĩa tinh thần
                            </h4>
                            <div className="space-y-3 text-sm leading-relaxed">
                              <div className="bg-white/50 p-3 rounded">
                                <strong>Nâng cao tinh thần:</strong> Tăng cường niềm tin và quyết tâm cho toàn bộ chiến dịch.
                              </div>
                              <div className="bg-white/50 p-3 rounded">
                                <strong>Khẳng định sự lãnh đạo:</strong> Chứng minh tính đúng đắn của đường lối chiến tranh nhân dân.
                              </div>
                              <div className="bg-white/50 p-3 rounded">
                                <strong>Tạo tiếng vang:</strong> Gây chấn động trong hàng ngũ địch, làm suy giảm tinh thần chiến đấu.
                              </div>
                              <div className="bg-white/50 p-3 rounded">
                                <strong>Rút kinh nghiệm:</strong> Cung cấp bài học quý báu cho các trận đánh tiếp theo.
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-6 rounded-lg border-l-4 border-[color:var(--gold)]">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-3 text-lg">
                            Kết luận
                          </h4>
                          <p className="text-center font-semibold text-[color:var(--brown)] leading-relaxed">
                            Trận Độc Lập là chiến thắng quan trọng mở đầu, tạo đà cho toàn bộ chiến dịch Điện Biên Phủ.
                            Thắng lợi này không chỉ có ý nghĩa quân sự mà còn có ý nghĩa chính trị to lớn,
                            khẳng định sức mạnh và quyết tâm của quân đội Việt Nam trong cuộc kháng chiến chống Pháp.
                          </p>
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(0, 0, 0, 0.8)",
              color: "#fff",
              boxShadow: "0 3px 0 #EAB308",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(0, 0, 0, 0.8)" }}
            date="16 – 17/3/1954"
            dateClassName="text-white font-bold text-lg -mt-2"
            iconStyle={{
              background: "#EAB308",
              color: "#fff",
              boxShadow: "0 0 0 2px #EAB308",
              width: "30px",
              height: "30px",
              marginLeft: "-15px",
            }}
          >
            <h1 className="text-lg sm:text-xl font-semibold text-white">
              Trận Bản Kéo
            </h1>

            <div className="mt-3 relative w-full">
              <Image
                src="https://en.nhandan.vn/megastory/2024/dbp/images/1603.jpg"
                alt="Dien Bien Phu Campaign"
                width={600}
                height={400}
                className="rounded-lg grayscale object-contain"
              />
            </div>

            {/* Xem chi tiết button */}
            <div className="mt-4 mr-70">
              <DiaglogContentTab
                title="Trận Bản Kéo (16 – 17/3/1954)"
                tabs={[
                  {
                    key: "progress",
                    label: "Diễn biến",
                    content: (
                      <div className="space-y-6 leading-relaxed text-[color:var(--charcoal)]">
                        <div className="space-y-4">
                          <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                            <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                              Ngày 16/3/1954
                            </h4>
                            <p>
                              Ta gửi Lời kêu gọi đầu hàng tới chỉ huy Bản Kéo.
                              Công tác địch vận được đẩy mạnh, truyền đơn và loa
                              kêu gọi binh sĩ người Thái trở về mường bản.
                            </p>
                          </div>
                          <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                            <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                              Ngày 17/3/1954
                            </h4>
                            <p>
                              Ta bao vây, bức hàng Bản Kéo; địch nhiều lần phản
                              kích đều thất bại. Biết khó giữ, chỉ huy Pháp lệnh
                              cho tiểu đoàn ngụy Thái rút về Mường Thanh nhưng
                              binh lính tan rã hàng loạt theo tiếng loa địch
                              vận.
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
                          <p className="text-sm text-gray-600 text-center mt-2 italic">
                            Hình ảnh minh họa trận đánh Bản Kéo
                          </p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                            Kết quả
                          </h4>
                          <p>
                            Ta đón 241 hàng binh, làm chủ Bản Kéo và các ngọn
                            đồi phía bắc sân bay. Kết thúc đợt 1, hệ thống phòng
                            ngự hướng bắc của địch bị phá vỡ, tạo đà cho đợt 2.
                          </p>
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(0, 0, 0, 0.39)",
              color: "#fff",
              boxShadow: "0 3px 0 #e7e2e2ff",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(0, 0, 0, 0.8)" }}
            date="30/3 – 30/4/1954"
            dateClassName="text-white font-bold text-lg"
            iconStyle={{
              background: "#ff0000ff",
              color: "#fff",
              boxShadow: "0 0 0 4px #ff0000ff",
            }}
          // icon={<WorkIcon />}
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Đợt 2 : Tiến công mở rộng, siết chặt vòng vây
            </h1>
            <div className="mt-3 w-ful">
              <Image
                src="https://en.nhandan.vn/megastory/2024/dbp/images/3003.jpg"
                alt="Dien Bien Phu Campaign"
                width={600}
                height={400}
                className="rounded-lg grayscale object-contain"
              />
            </div>
            <div className="mt-4">
              <DiaglogContentTab
                title="Đợt 2 (30/3 – 30/4/1954) – Tiến công mở rộng, siết chặt vòng vây"
                tabs={[
                  {
                    key: "prepare",
                    label: "Chuẩn bị",
                    content: (
                      <div className="space-y-6 leading-relaxed text-[color:var(--charcoal)]">
                        <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
                          <h5 className="font-semibold text-[color:var(--brown)] mb-3 text-lg">
                            Đảng ủy Mặt trận đề ra 3 nhiệm vụ cụ thể nhằm chuẩn bị cho đợt tiến công thứ hai:
                          </h5>
                          <ul className="list-disc pl-6 space-y-3 text-sm leading-relaxed">
                            <li>
                              Phải nhanh chóng tiếp cận, bao vây địch bằng cách xây dựng trận địa tiến công và bao vây quân địch khắp các mặt Đông, Tây, Nam, Bắc, trong cự ly có hiệu quả của tất cả các loại súng lớn, nhỏ của ta, đồng thời chia cắt phân khu Hồng Cúm với khu Trung tâm.
                            </li>
                            <li>
                              Tiếp tục đánh "bóc" thêm một số cứ điểm ở ngoài "vỏ" Tập đoàn cứ điểm, theo nguyên tắc phải bảo đảm chắc thắng.
                            </li>
                            <li>
                              Phải khống chế sân bay của địch cho hiệu quả; chuẩn bị đánh địch phản kích; tăng cường những hoạt động nhỏ, tiêu hao, quấy rối quân địch.
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-6 rounded-lg border-l-4 border-[color:var(--gold)]">
                          <h6 className="font-semibold text-[color:var(--brown)] mb-3">
                            Nhiệm vụ cụ thể trao cho từng đơn vị:
                          </h6>
                          <div className="space-y-4 text-sm leading-relaxed">
                            <div className="bg-white/50 p-3 rounded">
                              <strong>Đại đoàn 312:</strong> Được phối thuộc hai đại đội sơn pháo 75mm, hai đại đội súng cối 120mm, một đại đội súng cối 82mm có nhiệm vụ tiêu diệt các cao điểm E, D1, D2 thuộc trung tâm đề kháng Dominique và dùng một đơn vị thọc sâu đánh vào vị trí pháo binh địch ở cao điểm 210 và Tiểu đoàn dù 5 hoặc Tiểu đoàn dù 6 cơ động ở khu vực này.
                            </div>
                            <div className="bg-white/50 p-3 rounded">
                              <strong>Đại đoàn 316:</strong> (thiếu một trung đoàn), được phối thuộc hai đại đội sơn pháo 75mm, hai đại đội súng cối 120mm có nhiệm vụ tiêu diệt các cao điểm A1, C1, C2 thuộc trung tâm đề kháng Eliane và phối hợp với các đơn vị khác tiêu diệt lực lượng dù cơ động.
                            </div>
                            <div className="bg-white/50 p-3 rounded">
                              <strong>Đại đoàn 308:</strong> Có nhiệm vụ dùng hỏa lực kiềm chế pháo binh địch ở Tây Mường Thanh, dùng bộ đội nhỏ tích cực dương công các cứ điểm 106 và cứ điểm 311 (trong cụm Huguette) ở phía Tây, cử một tiểu đoàn tham gia bộ phận thọc sâu vào tung thâm khu Đông, tiêu diệt tiểu đoàn ngụy Thái số 2, trận địa pháo binh, phối hợp với Trung đoàn 98 thuộc Đại đoàn 316 tiêu diệt lực lượng dù cơ động.
                            </div>
                            <div className="bg-white/50 p-3 rounded">
                              <strong>Trung đoàn 57:</strong> Của Đại đoàn 304, được phối thuộc Tiểu đoàn 888 (Đại đoàn 316), một đại đội lựu pháo 105mm, một đại đội súng cối 120mm, 18 khẩu trọng liên cao xạ 12,7mm, có nhiệm vụ kiềm chế các trận địa pháo binh địch ở Hồng Cúm, chặn quân tiếp viện từ Hồng Cúm lên Mường Thanh và đánh quân nhảy dù ở xung quanh và phía Nam Hồng Cúm.
                            </div>
                            <div className="bg-white/50 p-3 rounded">
                              <strong>Đại đoàn 351:</strong> Trực tiếp yểm hộ bộ binh tiến công các cứ điểm: A1, D1, C1, E, chế áp pháo binh địch, sát thương và tiêu diệt một lực lượng cơ động địch ở tung thâm phía Đông Mường Thanh, kiềm chế pháo binh địch.
                            </div>
                          </div>
                        </div>

                        <div className="text-center">
                          <Image
                            src="https://mediafile.qdnd.vn//images/2024/4/30/nghingoi.jpg"
                            alt="Ảnh 1: 21.000 xe đạp thồ, 261.500 dân công cùng các loại ô tô, tàu, thuyền, lừa, ngựa… ngày đêm vận chuyển lương thực, vũ khí, đạn dược lên mặt trận Điện Biên Phủ. Sự đóng góp to lớn của lực lượng dân công, đảm bảo hậu cần cho chiến dịch là một trong những nguyên nhân chính làm nên chiến thắng. Ảnh 2: Bộ đội ta ăn cơm dưới chiến hào trong Chiến dịch Điện Biên Phủ 1954. Ảnh 3: Phút nghỉ ngơi của các chiến sĩ giữa hai trận đánh. Tuy gian khổ, khốc liệt nhưng các cán bộ, chiến sĩ của ta vẫn luôn lạc quan, yêu đời. Những lá thư nhà đọc cho đồng đội nghe trong chiến hào là nguồn cổ vũ tinh thần mãnh liệt, tiếp thêm sức mạnh cho các chiến sĩ vững tâm vượt qua khó khăn để chiến đấu. Ảnh tư liệu: TTXVN."
                            width={800}
                            height={600}
                            sizes="(max-width: 768px) 100vw, 600px"
                            className="w-full h-auto object-contain rounded-lg shadow-lg"
                          />
                        </div>
                      </div>
                    ),
                  },
                  {
                    key: "map",
                    label: "Bản đồ",
                    content: (
                      <div className="space-y-4 leading-relaxed text-[color:var(--charcoal)]">
                        <div className="text-center">
                          <Image
                            src="https://mediafile.qdnd.vn//images/2024/4/30/01-so-do-tap-doan-cu-diem-dien-bien-phu-24.jpg"
                            alt="Sơ đồ Tập đoàn cứ điểm Điện Biên Phủ"
                            width={600}
                            height={800}
                            className="w-full h-auto object-contain rounded-lg shadow-lg"
                          />
                        </div>
                      </div>
                    ),
                  },
                  {
                    key: "progress",
                    label: "Diễn biến",
                    content: (
                      <div className="space-y-6 leading-relaxed text-[color:var(--charcoal)]">
                        <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-6 rounded-lg border-l-4 border-[color:var(--gold)]">
                          <div className="space-y-6">
                            <div>
                              <h6 className="font-semibold text-[color:var(--brown)] mb-3 text-lg">
                                1. Tấn công các cứ điểm phía Đông (30/3 - 5/4/1954)
                              </h6>
                              <div className="space-y-3 text-sm leading-relaxed">
                                <p>
                                  Đúng 18 giờ ngày 30 tháng 3, quân ta bắt đầu tấn công đồng loạt vào các cứ điểm ở dãy đồi phía Đông như C1, D1, E, A1. Đây là những cứ điểm then chốt bảo vệ trung tâm Mường Thanh.
                                </p>
                                <div className="bg-white/50 p-3 rounded">
                                  <strong>Tại cứ điểm C1:</strong> Trận đánh diễn ra vô cùng ác liệt. Trung đoàn 98 (Đại đoàn 316) của ta đã chiếm được cứ điểm này sau một đêm chiến đấu. Tuy nhiên, địch phản công quyết liệt và giành giật lại một nửa cứ điểm. Trận chiến giằng co tại C1 kéo dài đến cuối chiến dịch.
                                </div>
                                <div className="bg-white/50 p-3 rounded">
                                  <strong>Tại cứ điểm D1:</strong> Trung đoàn 209 (Đại đoàn 312) đã tấn công và tiêu diệt cứ điểm này, mở rộng thế trận.
                                </div>
                                <div className="bg-white/50 p-3 rounded">
                                  <strong>Tại cứ điểm A1:</strong> Đây là cứ điểm kiên cố nhất, được địch phòng thủ rất mạnh. Trận đánh tại đây gặp nhiều khó khăn, quân ta phải rút kinh nghiệm và thay đổi chiến thuật.
                                </div>
                                <p>
                                  Sau những ngày đầu tấn công, quân ta đã tiêu diệt được một số cứ điểm quan trọng, nhưng cũng chịu nhiều tổn thất. Địch cũng bị thiệt hại nặng và buộc phải rút pháo khỏi một số vị trí.
                                </p>
                              </div>
                            </div>

                            <div>
                              <h6 className="font-semibold text-[color:var(--brown)] mb-3 text-lg">
                                2. Đào hầm, siết chặt vòng vây (Từ 5/4 đến 30/4/1954)
                              </h6>
                              <div className="space-y-3 text-sm leading-relaxed">
                                <p>
                                  Sau đợt tấn công đầu tiên, nhận thấy việc đánh nhanh, giải quyết nhanh gặp khó khăn, ta chuyển sang chiến thuật "đánh chắc, tiến chắc".
                                </p>
                                <div className="bg-white/50 p-3 rounded">
                                  <strong>Phát triển hệ thống giao thông hào:</strong> Bộ đội ta bắt đầu đào một mạng lưới giao thông hào chằng chịt, tiến sâu vào lòng chảo Điện Biên Phủ, siết chặt vòng vây quanh khu trung tâm của địch. Hệ thống hào này dài hàng trăm ki-lô-mét, cho phép quân ta tiếp cận và tấn công các cứ điểm địch một cách an toàn hơn.
                                </div>
                                <div className="bg-white/50 p-3 rounded">
                                  <strong>Chiến thuật vây lấn, triệt tiếp tế:</strong> Quân ta sử dụng các lực lượng nhỏ để tấn công quấy rối, kết hợp với pháo binh và cao xạ để khống chế sân bay Mường Thanh và Hồng Cúm, cắt đứt hoàn toàn đường tiếp viện bằng đường không của địch. Điều này khiến lính Pháp ở Điện Biên Phủ lâm vào tình trạng thiếu lương thực, đạn dược và quân y trầm trọng.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="text-center">
                          <Image
                            src="https://mediafile.qdnd.vn//images/2024/4/30/phaobinh.gif"
                            alt="Lực lượng pháo binh với sự có mặt của lựu pháo 105 mm bố trí xung quanh lòng chảo Điện Biên của ta đã tạo thành quả đấm thép chi viện hỏa lực kịp thời, chính xác, áp chế địch, tạo cơ hội để bộ binh ta đánh các trận then chốt, quyết định, bóc dần Tập đoàn cứ điểm Điện Biên Phủ. Ảnh tư liệu: TTXVN"
                            width={800}
                            height={600}
                            sizes="(max-width: 768px) 100vw, 600px"
                            className="w-full h-auto object-contain rounded-lg shadow-lg"
                          />
                        </div>
                      </div>
                    ),
                  },
                  {
                    key: "result",
                    label: "Kết quả",
                    content: (
                      <div className="space-y-6 leading-relaxed text-[color:var(--charcoal)]">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
                            <h6 className="font-semibold text-[color:var(--brown)] mb-4 text-lg">
                              Về phía ta:
                            </h6>
                            <div className="space-y-3 text-sm leading-relaxed">
                              <div className="bg-white/50 p-3 rounded">
                                <strong>Làm chủ các cứ điểm quan trọng:</strong> Quân đội Việt Nam đã tiêu diệt và làm chủ các cứ điểm then chốt ở phía Đông như E, D1, và một phần cứ điểm C1.
                              </div>
                              <div className="bg-white/50 p-3 rounded">
                                <strong>Siết chặt vòng vây:</strong> Hệ thống giao thông hào của ta đã được đào sâu, đan xen và bao vây chặt chẽ toàn bộ khu trung tâm của tập đoàn cứ điểm.
                              </div>
                              <div className="bg-white/50 p-3 rounded">
                                <strong>Tê liệt đường tiếp tế:</strong> Ta đã kiểm soát và vô hiệu hóa hoàn toàn sân bay Mường Thanh và Hồng Cúm, cắt đứt con đường tiếp viện duy nhất của quân Pháp.
                              </div>
                              <div className="bg-white/50 p-3 rounded">
                                <strong>Phá hủy nhiều máy bay địch:</strong> Ta bắn rơi và làm hư hại 62 máy bay của Pháp, khiến việc tiếp tế và chi viện của địch bằng đường không trở nên bất khả thi.
                              </div>
                            </div>
                          </div>

                          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                            <h6 className="font-semibold text-[color:var(--brown)] mb-4 text-lg">
                              Về phía địch:
                            </h6>
                            <div className="space-y-3 text-sm leading-relaxed">
                              <div className="bg-white/50 p-3 rounded">
                                <strong>Tổn thất nặng nề:</strong> Lực lượng địch bị tiêu hao đáng kể, tinh thần chiến đấu suy giảm nghiêm trọng.
                              </div>
                              <div className="bg-white/50 p-3 rounded">
                                <strong>Thiếu thốn trầm trọng:</strong> Do đường tiếp tế bị cắt, quân Pháp rơi vào tình trạng thiếu lương thực, thuốc men, đạn dược và quân y.
                              </div>
                              <div className="bg-white/50 p-3 rounded">
                                <strong>Bị cô lập và bế tắc:</strong> Toàn bộ tập đoàn cứ điểm bị bao vây chặt chẽ, không còn đường thoát và không thể nhận được viện binh.
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-6 rounded-lg border-l-4 border-[color:var(--gold)]">
                          <p className="text-center font-semibold text-[color:var(--brown)] leading-relaxed">
                            Kết quả của đợt 2 đã làm thay đổi hoàn toàn cục diện chiến trường, từ đó quân ta nắm quyền chủ động và tạo lợi thế tuyệt đối để chuẩn bị cho đợt tấn công thứ ba, kết thúc chiến dịch với chiến thắng vang dội vào ngày 7 tháng 5 năm 1954.
                          </p>
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(0, 0, 0, 0.8)",
              color: "#fff",
              boxShadow: "0 3px 0 #EAB308",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(0, 0, 0, 0.8)" }}
            date="30 – 31/3/1954"
            dateClassName="text-white font-bold text-lg -mt-2"
            iconStyle={{
              background: "#EAB308",
              color: "#fff",
              boxShadow: "0 0 0 2px #EAB308",
              width: "30px",
              height: "30px",
              marginLeft: "-15px",
            }}
          >
            <h1 className="text-lg sm:text-xl font-semibold text-white">
              Các trận đánh trên cao điểm
            </h1>

            <div className="mt-3 relative w-full">
              <Image
                src="https://en.nhandan.vn/megastory/2024/dbp/images/3003.jpg"
                alt="Dien Bien Phu Campaign"
                width={600}
                height={400}
                className="rounded-lg grayscale object-contain"
              />
            </div>

            {/* Xem chi tiết button */}
            <div className="mt-4 mr-70">
              <DiaglogContentTab
                title="Các trận đánh trên cao điểm (30 – 31/3/1954)"
                tabs={[
                  {
                    key: "progress",
                    label: "Diễn biến",
                    content: (
                      <div className="space-y-6 leading-relaxed text-[color:var(--charcoal)]">
                        <div className="space-y-4">
                          <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                            <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                              C1 (Eliane 1)
                            </h4>
                            <p>
                              Bộc lôi mở rào; sau 45 phút làm chủ trận địa. Toàn
                              bộ một đại đội Pháp bị diệt, ta hy sinh 10 người.
                            </p>
                          </div>
                          <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                            <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                              C2 (Eliane 4)
                            </h4>
                            <p>
                              Đêm 30/3 chiếm được nhiều lô cốt nhưng không giữ
                              được do hỏa lực địch mạnh.
                            </p>
                          </div>
                          <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                            <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                              D1 (Dominique 2)
                            </h4>
                            <p>
                              Trung đoàn 209 chiếm trong 2 giờ; chỉ huy Pháp
                              Garandeau tử trận. Ngày 31/3, địch phản kích thất
                              bại, rút bỏ cả D3.
                            </p>
                          </div>
                          <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                            <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                              E (Dominique 1)
                            </h4>
                            <p>
                              Địch thay quân đúng lúc bị pháo ta tập kích; Tiểu
                              đoàn 16 và 428 chiếm toàn bộ vào 19h45 ngày 30/3.
                            </p>
                          </div>
                          <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                            <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                              A1 (Eliane 2)
                            </h4>
                            <p>
                              Then chốt, công sự nhiều tầng, tiến công rất khó
                              khăn. Đêm 30 rạng 31/3 giằng co, mỗi bên giữ nửa
                              đồi. Cuối tháng 3, A1 là "thành lũy cuối cùng" của
                              địch ở trung tâm.
                            </p>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <Image
                            src="https://mediafile.qdnd.vn//images/2024/4/30/ldc1.gif"
                            alt="Minh họa các cao điểm"
                            width={800}
                            height={1200}
                            className="w-full h-auto object-contain rounded-lg shadow-md"
                          />
                          <p className="text-sm text-gray-600 text-center mt-2 italic">
                            Hình ảnh minh họa các trận đánh trên cao điểm
                          </p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                            Kết quả
                          </h4>
                          <p>
                            Ta làm chủ C1, D1, E; đánh thiệt hại nặng quân ứng
                            cứu, đẩy lùi phản kích. A1 tiếp tục giằng co, trở
                            thành điểm tựa cuối cùng của địch ở trung tâm đến
                            cuối tháng 3.
                          </p>
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(0, 0, 0, 0.8)",
              color: "#fff",
              boxShadow: "0 3px 0 #EAB308",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(0, 0, 0, 0.8)" }}
            date="từ đầu tháng 4/1954"
            dateClassName="text-white font-bold text-lg -mt-2"
            iconStyle={{
              background: "#EAB308",
              color: "#fff",
              boxShadow: "0 0 0 2px #EAB308",
              width: "30px",
              height: "30px",
              marginLeft: "-15px",
            }}
          >
            <h1 className="text-lg sm:text-xl font-semibold text-white">
              Chiến thuật "vây lấn" bằng đào hào
            </h1>

            <div className="mt-3 relative w-full">
              <Image
                src="https://en.nhandan.vn/megastory/2024/dbp/images/1603.jpg"
                alt="Dien Bien Phu Campaign"
                width={600}
                height={400}
                className="rounded-lg grayscale object-contain"
              />
            </div>

            {/* Xem chi tiết button */}
            <div className="mt-5 mr-70">
              <DiaglogContentTab
                title="Chiến thuật vây lấn bằng đào hào (từ đầu tháng 4/1954)"
                tabs={[
                  {
                    key: "progress",
                    label: "Diễn biến",
                    content: (
                      <div className="space-y-6 leading-relaxed text-[color:var(--charcoal)]">
                        <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                          <p>
                            Bộ đội ta đào hơn 100 km giao thông hào: hào trục để
                            cơ động pháo, vận chuyển; hào tiếp cận áp sát địch.
                            Ban đêm lăn "con cúi" che đạn để đào hào an toàn.
                            Vòng vây siết dần, sân bay bị cắt, binh lính địch
                            luôn bị bắn tỉa khi cơ động.
                          </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <Image
                            src="https://mediafile.qdnd.vn//images/2024/4/30/tuonggiap.jpg"
                            alt="Minh họa chiến thuật vây lấn"
                            width={800}
                            height={1200}
                            className="w-full h-auto object-contain rounded-lg shadow-md"
                          />
                          <p className="text-sm text-gray-600 text-center mt-2 italic">
                            Bộ Chỉ huy Chiến dịch dưới sự chỉ đạo trực tiếp của Đại tướng Võ Nguyên Giáp bàn kế hoạch tác chiến cho từng trận đánh. Với phương châm "Đánh chắc, tiến chắc", quân ta thực hiện "vây lấn" Tập đoàn cứ điểm từ ngoài vào trong, lần lượt tiêu diệt từng cụm cứ điểm, tiến tới tiêu diệt hoàn toàn quân địch. Ảnh tư liệu: TTXVN
                          </p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                            Kết quả
                          </h4>
                          <p>
                            Hệ thống hào vây lấn hoàn thiện giúp ta áp sát an
                            toàn, cô lập Mường Thanh và Hồng Cúm, làm địch suy
                            kiệt, mất khả năng cơ động và tiếp tế hiệu quả.
                          </p>
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(0, 0, 0, 0.8)",
              color: "#fff",
              boxShadow: "0 3px 0 #EAB308",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(0, 0, 0, 0.8)" }}
            date=""
            dateClassName="text-white font-bold text-lg -mt-2"
            iconStyle={{
              background: "#EAB308",
              color: "#fff",
              boxShadow: "0 0 0 2px #EAB308",
              width: "30px",
              height: "30px",
              marginLeft: "-15px",
            }}
          >
            <h1 className="text-lg sm:text-xl font-semibold text-white">
              Phong trào "săn Tây bắn tỉa"
            </h1>

            <div className="mt-3 relative w-full">
              <Image
                src="https://en.nhandan.vn/megastory/2024/dbp/images/1704.jpg"
                alt="Dien Bien Phu Campaign"
                width={600}
                height={400}
                className="rounded-lg grayscale object-contain"
              />
            </div>

            {/* Xem chi tiết button */}
            <div className="mt-4">
              <DiaglogContentTab
                title=" Phong trào săn Tây bắn tỉa"
                tabs={[
                  {
                    key: "overview",
                    label: "Tổng quan",
                    content: (
                      <div className="space-y-6 leading-relaxed text-[color:var(--charcoal)]">
                        <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-6 rounded-lg border-l-4 border-[color:var(--gold)]">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-3 text-lg">
                            Chiến thuật "săn Tây bắn tỉa" - Siết chặt vòng vây
                          </h4>
                          <p className="text-sm leading-relaxed">
                            Phong trào "săn Tây, bắn tỉa" là một chiến thuật tinh vi được quân đội Việt Nam áp dụng trong chiến dịch Điện Biên Phủ.
                            Đây là phương pháp sử dụng các tổ bắn tỉa cơ động để tiêu diệt từng tên địch một cách có chọn lọc,
                            gây tâm lý hoang mang và làm suy giảm sức chiến đấu của quân Pháp.
                          </p>
                        </div>
                      </div>
                    ),
                  },
                  {
                    key: "progress",
                    label: "Diễn biến",
                    content: (
                      <div className="space-y-6 leading-relaxed text-[color:var(--charcoal)]">
                        {/* Phase 1: Initial Setup */}
                        <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-3 text-lg flex items-center">
                            <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">1</span>
                            Thiết lập lưới lửa bắn tỉa
                          </h4>
                          <div className="space-y-3 text-sm leading-relaxed">
                            <div className="bg-white/50 p-3 rounded">
                              <strong>Thành lập tổ bắn tỉa:</strong> Các đơn vị thành lập những tổ bắn tỉa cơ động sử dụng các loại súng có trong biên chế để tiêu diệt địch.
                            </div>
                            <div className="bg-white/50 p-3 rounded">
                              <strong>Vị trí thuận lợi:</strong> Chiến hào chỉ cách địch vài chục mét, bộ đội ta lợi dụng những vị trí thuận lợi, bất ngờ tiêu diệt bất cứ tên địch nào ló đầu ra khỏi công sự.
                            </div>
                            <div className="bg-white/50 p-3 rounded">
                              <strong>Lưới lửa dày đặc:</strong> Xung quanh cứ điểm địch, các chiến sĩ súng trường, súng máy, pháo, cối của ta đã tạo thành một lưới lửa dày đặc sẵn sàng tiêu diệt bất kỳ tên địch nào ló đầu lên khỏi mặt đất.
                            </div>
                          </div>
                        </div>

                        {/* Phase 2: Psychological Warfare */}
                        <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-3 text-lg flex items-center">
                            <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">2</span>
                            Chiến tranh tâm lý và nhử địch
                          </h4>
                          <div className="space-y-3 text-sm leading-relaxed">
                            <div className="bg-white/50 p-3 rounded">
                              <strong>Biện pháp nhử địch:</strong> Để buộc địch nhô đầu ra khỏi công sự, quân ta thực hiện nhiều biện pháp nhử địch rất linh hoạt.
                            </div>
                            <div className="bg-white/50 p-3 rounded">
                              <strong>Mánh khóe mũ sắt:</strong> Các chiến sĩ lấy mũ sắt cắm lên đầu que đi lại dưới chiến hào làm cho địch tưởng quân ta đang vận động. Từ trong lô cốt địch nhô lên để bắn ra liền bị các tay súng bắn tỉa của ta tiêu diệt.
                            </div>
                            <div className="bg-white/50 p-3 rounded">
                              <strong>Chiến thuật cờ đỏ:</strong> Có đơn vị, ban đêm cho chiến sĩ bò vào trong hàng rào của địch cắm cờ đỏ sao vàng, sáng ra, chỉ huy địch tức tối thét lính ra nhổ cờ liền bị tiêu diệt.
                            </div>
                          </div>
                        </div>

                        {/* Phase 3: Enemy Desperation */}
                        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-3 text-lg flex items-center">
                            <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">3</span>
                            Sự tuyệt vọng của địch
                          </h4>
                          <div className="space-y-3 text-sm leading-relaxed">
                            <div className="bg-white/50 p-3 rounded">
                              <strong>Khó khăn lấy nước:</strong> Việc đi lấy nước của chúng ở sông Nậm Rốm vô cùng khó khăn. Có những tên địch ẩn nấp trong công sự bên bờ sông, quẳng những chiếc can xuống sông, rồi dùng dây kéo lên. Chiến sĩ bắn tỉa của ta bắn thủng can của chúng.
                            </div>
                            <div className="bg-white/50 p-3 rounded">
                              <strong>Liều chết lấy nước:</strong> Không chịu nổi cơn đói khát và sự thiếu thốn đến cùng cực, nhiều tên địch đã liều chết ra nhặt dù và đi lấy nước uống.
                            </div>
                            <div className="bg-white/50 p-3 rounded">
                              <strong>"Những con chuột Nậm Rốm":</strong> Có nhiều tên trốn khỏi công sự ra đào hầm riêng ở bờ sông Nậm Rốm để tiện lấy nước uống và đêm ra nhặt dù tìm đồ ăn để sống qua ngày chờ chiến dịch kết thúc. Bộ đội ta gọi chúng là "những con chuột Nậm Rốm".
                            </div>
                            <div className="bg-white/50 p-3 rounded">
                              <strong>Sống lẩn khuất:</strong> Khiến chúng sống lẩn khuất như chuột dưới hào.
                            </div>
                          </div>
                        </div>

                        {/* Phase 4: Results */}
                        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-3 text-lg flex items-center">
                            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">4</span>
                            Thành tích và kết quả
                          </h4>
                          <div className="space-y-3 text-sm leading-relaxed">
                            <div className="bg-white/50 p-3 rounded">
                              <strong>Thành tích Đại đoàn 312:</strong> Trong 10 ngày, Đại đoàn 312 loại khỏi vòng chiến đấu 110 lính Pháp bằng súng bắn tỉa.
                            </div>
                            <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                              <strong>Chiến sĩ xuất sắc:</strong>
                              <ul className="mt-2 space-y-1">
                                <li>• Đoàn Tương Líp: diệt 9 tên với 9 viên đạn</li>
                                <li>• Chiến sĩ Lục (Trung đoàn 165): có ngày diệt tới 30 địch</li>
                              </ul>
                            </div>
                            <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                              <strong>Tác động tâm lý:</strong> Địch căng thẳng, kiệt quệ tinh thần.
                            </div>
                          </div>
                        </div>

                        {/* Image Section */}
                        <div className="text-center">
                          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                            <Image
                              src="https://file3.qdnd.vn/data/images/0/2024/04/27/upload_2080/dien%20bien%20phu.jpg?dpi=150&quality=100&w=870"
                              alt="Hình ảnh minh họa phong trào săn Tây bắn tỉa trong chiến dịch Điện Biên Phủ"
                              width={800}
                              height={1200}
                              className="w-full h-auto object-contain rounded-lg shadow-md"
                            />
                            <p className="text-sm text-gray-600 mt-3 italic">
                              Hình ảnh minh họa phong trào "săn Tây bắn tỉa"
                            </p>
                          </div>
                        </div>
                      </div>
                    ),
                  },
                  {
                    key: "significance",
                    label: "Ý nghĩa",
                    content: (
                      <div className="space-y-6 leading-relaxed text-[color:var(--charcoal)]">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
                            <h4 className="font-semibold text-[color:var(--brown)] mb-4 text-lg">
                              Ý nghĩa quân sự
                            </h4>
                            <div className="space-y-3 text-sm leading-relaxed">
                              <div className="bg-white/50 p-3 rounded">
                                <strong>Tiêu hao sinh lực:</strong> Nhiều sinh lực địch bị loại khỏi vòng chiến đấu một cách có hiệu quả.
                              </div>
                              <div className="bg-white/50 p-3 rounded">
                                <strong>Vô hiệu hóa hỏa điểm:</strong> Các hỏa điểm tiền tiêu của địch bị vô hiệu hóa.
                              </div>
                              <div className="bg-white/50 p-3 rounded">
                                <strong>Bảo toàn lực lượng:</strong> Góp phần giữ vững thế áp đảo và bảo toàn lực lượng ta trước đợt tổng công kích.
                              </div>
                              <div className="bg-white/50 p-3 rounded">
                                <strong>Chiến thuật hiệu quả:</strong> Chứng minh hiệu quả của chiến thuật bắn tỉa trong điều kiện chiến trường.
                              </div>
                            </div>
                          </div>

                          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                            <h4 className="font-semibold text-[color:var(--brown)] mb-4 text-lg">
                              Ý nghĩa tâm lý
                            </h4>
                            <div className="space-y-3 text-sm leading-relaxed">
                              <div className="bg-white/50 p-3 rounded">
                                <strong>Suy sụp tinh thần:</strong> Tinh thần địch suy sụp nghiêm trọng, gây hoang mang trong hàng ngũ.
                              </div>
                              <div className="bg-white/50 p-3 rounded">
                                <strong>Chiến tranh tâm lý:</strong> Tạo áp lực tâm lý liên tục, khiến địch luôn trong trạng thái căng thẳng.
                              </div>
                              <div className="bg-white/50 p-3 rounded">
                                <strong>Kiệt quệ sức lực:</strong> Địch bị kiệt quệ cả về thể chất lẫn tinh thần.
                              </div>
                              <div className="bg-white/50 p-3 rounded">
                                <strong>Nâng cao tinh thần ta:</strong> Tăng cường niềm tin và quyết tâm cho bộ đội ta.
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-6 rounded-lg border-l-4 border-[color:var(--gold)]">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-3 text-lg">
                            Kết luận
                          </h4>
                          <p className="text-center font-semibold text-[color:var(--brown)] leading-relaxed">
                            Phong trào "săn Tây bắn tỉa" là một chiến thuật tinh vi và hiệu quả,
                            không chỉ tiêu hao sinh lực địch mà còn tạo ra áp lực tâm lý mạnh mẽ.
                            Chiến thuật này đã góp phần quan trọng vào việc siết chặt vòng vây và
                            chuẩn bị cho đợt tổng công kích cuối cùng của chiến dịch Điện Biên Phủ.
                          </p>
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(0, 0, 0, 0.39)",
              color: "#fff",
              boxShadow: "0 3px 0 #e7e2e2ff",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(0, 0, 0, 0.8)" }}
            date="1/5 – 7/5/1954"
            dateClassName="text-white font-bold text-lg"
            iconStyle={{
              background: "#ff0000ff",
              color: "#fff",
              boxShadow: "0 0 0 4px #ff0000ff",
            }}
          // icon={<WorkIcon />}
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Đợt 3 : Tổng công kích, tiêu diệt toàn bộ tập đoàn cứ điểm
            </h1>
            <div className="mt-3 w-ful">
              <Image
                src="https://en.nhandan.vn/megastory/2024/dbp/images/0105.jpg"
                alt="Dien Bien Phu Campaign"
                width={600}
                height={400}
                className="rounded-lg grayscale object-contain"
              />
              <div className="mt-4 mr-70">
                <DiaglogContentTab
                  title="Đợt 3 (1 – 7/5/1954) – Tổng công kích, tiêu diệt toàn bộ tập đoàn cứ điểm"
                  tabs={[
                    {
                      key: "preparation",
                      label: "Chuẩn bị",
                      content: (
                        <div className="space-y-6 leading-relaxed text-[color:var(--charcoal)]">
                          {/* Main content section */}
                          <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-6 rounded-xl border-l-4 border-[color:var(--gold)] shadow-sm">
                            <p className="text-justify leading-7">
                              Mục tiêu của đợt tấn công thứ ba đã được xác định rõ ràng, dựa trên những thành công của đợt 2:
                              <br />
                              Tiêu diệt hoàn toàn các cứ điểm phía Đông: Trọng tâm là đánh chiếm đồi A1, một cứ điểm then chốt và kiên cố nhất của địch, cùng với các cứ điểm còn lại như C1, E2.
                              <br />
                              Đánh chiếm các cứ điểm phía Tây: Mở rộng tấn công sang các cứ điểm ở phía Tây, tiêu diệt thêm sinh lực địch, siết chặt vòng vây hơn nữa.
                              <br />
                              Tổng công kích vào khu trung tâm: Tập trung toàn bộ hỏa lực pháo binh để bắn phá dữ dội khu trung tâm Mường Thanh, tạo điều kiện cho các mũi xung kích tổng tấn công vào sở chỉ huy địch.
                              <br />
                              Bắt sống bộ chỉ huy địch: Mục tiêu cuối cùng là bắt sống tướng De Castries và toàn bộ Bộ Tham mưu của Pháp tại Điện Biên Phủ, buộc địch phải đầu hàng, kết thúc chiến dịch.
                              <br />
                              Sự chuẩn bị kỹ lưỡng và mục tiêu rõ ràng đã giúp quân đội ta đạt được chiến thắng trọn vẹn, chấm dứt hoàn toàn sự tồn tại của Tập đoàn cứ điểm Điện Biên Phủ vào chiều ngày 7 tháng 5 năm 1954.
                            </p>
                          </div>

                          {/* Image section */}
                          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-sm border border-gray-200">
                            <Image
                              src="https://media.vietnamplus.vn/images/92ffd2b8d642377b307369f5e8102f61f0a9b91dbbbd28acdc33c8eb3206ac2a7b114f9bb34e41a31ec6c6c5fad3825969675154eac7c5524b200b1101632f29/3004dienbienphu1-2908.jpg"
                              alt="Minh họa đợt 3"
                              width={800}
                              height={1200}
                              className="w-full h-auto object-contain rounded-lg shadow-lg"
                            />
                            <p className="text-sm text-gray-600 text-center mt-3 italic font-medium">
                              Bộ đội ta tấn công các vị trí xung yếu của địch trên đồi A1. (Ảnh: Tư liệu TTXVN)
                            </p>
                          </div>

                          {/* Results section */}
                          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-blue-500 shadow-sm">
                            <h4 className="font-bold text-[color:var(--brown)] mb-3 text-lg">
                              Kết quả
                            </h4>
                            <p className="text-justify leading-7">
                              Hệ thống phòng ngự của địch bị phá vỡ từng mảng,
                              các mũi thọc sâu áp sát trung tâm, tạo thế cho các
                              trận quyết định đêm 6/5 và ngày 7/5.
                            </p>
                          </div>
                        </div>
                      ),
                    },
                    {
                      key: "development",
                      label: "Diễn biến",
                      content: (
                        <div className="space-y-6 leading-relaxed text-[color:var(--charcoal)]">
                          {/* Main content section */}
                          <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-6 rounded-xl border-l-4 border-[color:var(--gold)] shadow-sm">
                            <p className="text-justify leading-7">
                              Đợt 3 mở màn bằng các đòn tiến công tổng lực, đồng
                              loạt đánh vào các cứ điểm còn lại, đẩy nhanh sự
                              sụp đổ của tập đoàn cứ điểm.
                            </p>
                          </div>

                          {/* Image section */}
                          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-sm border border-gray-200">
                            <Image
                              src="https://media.vietnamplus.vn/images/92ffd2b8d642377b307369f5e8102f61f0a9b91dbbbd28acdc33c8eb3206ac2a7b114f9bb34e41a31ec6c6c5fad3825969675154eac7c5524b200b1101632f29/3004dienbienphu1-2908.jpg"
                              alt="Minh họa đợt 3"
                              width={800}
                              height={1200}
                              className="w-full h-auto object-contain rounded-lg shadow-lg"
                            />
                            <p className="text-sm text-gray-600 text-center mt-3 italic font-medium">
                              Bộ đội ta tấn công các vị trí xung yếu của địch trên đồi A1. (Ảnh: Tư liệu TTXVN)
                            </p>
                          </div>
                          
                        </div>
                      ),
                    },
                    {
                      key: "results",
                      label: "Kết quả",
                      content: (
                        <div className="space-y-6 leading-relaxed text-[color:var(--charcoal)]">
                          {/* Main content section */}
                          <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-6 rounded-xl border-l-4 border-[color:var(--gold)] shadow-sm">
                            <p className="text-justify leading-7">
                              Về phía ta: Đã làm chủ hoàn toàn chiến trường Điện Biên Phủ, tiêu diệt và bắt sống toàn bộ lực lượng địch.

                              Về phía địch: Toàn bộ Tập đoàn cứ điểm Điện Biên Phủ bị xóa sổ.

                              Tổn thất sinh lực: Ta đã tiêu diệt và bắt sống 16.200 quân địch.

                              Thiệt hại về quân sự: Bắn rơi và phá hủy 62 máy bay các loại, thu toàn bộ vũ khí, đạn dược và phương tiện chiến tranh của địch.
                            </p>
                          </div>
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(0, 0, 0, 0.8)",
              color: "#fff",
              boxShadow: "0 3px 0 #EAB308",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(0, 0, 0, 0.8)" }}
            date="Đêm 1/5/1954"
            dateClassName="text-white font-bold text-lg -mt-2"
            iconStyle={{
              background: "#EAB308",
              color: "#fff",
              boxShadow: "0 0 0 2px #EAB308",
              width: "30px",
              height: "30px",
              marginLeft: "-15px",
            }}
          >
            <h1 className="text-lg sm:text-xl font-semibold text-white">
              Ta nổ súng mở màn đợt 3, tấn công đồng loạt các cứ điểm.
            </h1>

            <div className="mt-3 relative w-full">
              <Image
                src="https://en.nhandan.vn/megastory/2024/dbp/images/0205a.jpg"
                alt="Dien Bien Phu Campaign"
                width={600}
                height={400}
                className="rounded-lg grayscale object-contain"
              />
            </div>

            {/* Xem chi tiết button */}
            <div className="mt-4 mr-70">
              <DiaglogContentTab
                title="Đêm 1/5"
                tabs={[
                  {
                    key: "progress",
                    label: "Diễn biến",
                    content: (
                      <div className="space-y-6 leading-relaxed text-[color:var(--charcoal)]">
                        <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                          <p>
                            Về phía địch: Ngày 1/5/1954, máy bay địch bắt đầu sử dụng một loại bom mới của Mỹ (Hail Leaflet) chứa hàng nghìn mũi tên rất nhỏ và sắc bén, nhằm gây sát thương đám đông. Loại bom này không gây nguy hiểm cho những người ở trong công sự hoặc dưới chiến hào và khó sử dụng trong những trận đánh khi quân ta và quân địch gần như trộn lẫn vào nhau. Langlais và Bigeard đã điều chỉnh, củng cố lại tổ chức phòng ngự ở khu trung tâm.

                            Những đơn vị khá nhất và những chỉ huy được tin cậy nhất còn lại của tập đoàn cứ điểm được tăng cường cho trung tâm đề kháng Elian. Tại đây, chúng bố trí Tiểu đoàn 2 thuộc Trung đoàn dù thuộc địa số 1, Tiểu đoàn dù xung kích 6, Tiểu đoàn dù ngụy số 5, Tiểu đoàn 1 Bán lữ đoàn lê dương 13 cùng với hai đại đội độc lập, đơn vị công binh và một số lính Algeria, lính Thái. Tuy nhiên, những đơn vị này đều bị tổn thất nhiều, đội hình chắp vá.

                            Về phía ta: 17 giờ ngày 1/5/1954, bất thần tất cả các cỡ pháo của ta nhả đạn vào nhiều khu vực của tập đoàn cứ điểm. Lần này cụm pháo địch ở Hồng Cúm bị kiềm chế, tê liệt. Một kho đạn với 3.000 viên đạn dự trữ của địch bị nổ tung. Kho lương thực, thực phẩm bốc cháy. Đợt pháo kích kéo dài gần một giờ. Dứt tiếng pháo, các đơn vị đồng loạt tiến đánh nhiều vị trí.

                            Tại phía Đông, Trung đoàn 98 tiến công cứ điểm C1 lần thứ hai. Địch vẫn đặt sở chỉ huy trên C2 và linh cảm trận đánh C1 sắp nổ ra. Ngày 1/5, địch quyết định đưa Đại đội 3 thuộc Tiểu đoàn dù tiêm kích số 2 lên thay thế cho Đại đội Clédic đã bị tiêu hao, đồng thời ra lệnh cho Đại đội 1 sẵn sàng tham gia phản kích.

                            Đại đội 811 của ta đã có 20 ngày đêm phòng ngự tại C1, được lệnh rời khỏi trận địa 200m cho hỏa pháo chuẩn bị. Đại đội trưởng Lê Văn Dỵ thấy công sự đã được củng cố vững chắc, đủ sức chịu đựng đạn pháo và tin vào sự chính xác của pháo binh ta nên quyết định chỉ cho bộ phận dự bị lui về phía sau, toàn đơn vị vẫn bám trận địa để không lỡ thời cơ xung phong.
                            Những cao điểm ta chiếm được ở khu Đông phát huy tác dụng. Sơn pháo đặt trên đồi D1 nhắm từng hỏa điểm trên C1 bắn rất chính xác. Những trận đánh giáp lá cà diễn ra. Quân địch ở C1 mất dần sức chiến đấu. Có tên phủ bạt lên người nằm giả chết, chờ tiếng súng yên sẽ đầu hàng. Nửa đêm, toàn bộ quân địch bị tiêu diệt. Dây thép gai và mìn lấy từ trận địa của địch lập tức được rải ra sườn đồi thành một bãi chướng ngại vật dày đặc, đề phòng quân địch phản kích.
                          </p>

                          <Image
                            src="https://bcp.cdnchinhphu.vn/thumb_w/777/334894974524682240/2024/5/2/47-luoc-do-cu-diem-c1-1714615182618470558387.jpg"
                            alt="Minh họa đêm 1/5"
                            width={800}
                            height={1200}
                            className="w-full h-auto object-contain rounded-lg shadow-md"
                          />
                          <p>
                            Sau hơn 30 ngày đêm liên tục chiến đấu, trận đánh tại C1 lúc này đã kết thúc. C2 nằm gọn dưới nòng pháo không giật của ta. Trời sáng, không thấy quân phản kích của địch. Chỉ có những khẩu trọng liên bốn nòng đặt tại Sở chỉ huy của De Castries lồng lộn tuôn đạn về phía trận địa ta trên đỉnh đồi như muốn ngăn chặn một đợt xung phong.

                            Ở phía Đông sông Nậm Rốm, Tiểu đoàn 166 và Tiểu đoàn 154 thuộc Trung đoàn 209 tiến công các cứ điểm 505 và 505A. Một đại đội của Tiểu đoàn lê dương dù 6 và những đơn vị lính Algeria, lính Thái tại đây, do viên Tiểu đoàn trưởng Chenel chỉ huy, chống cự khá quyết liệt. Ta và địch giành giật nhau từng ụ súng, từng chiến hào. 2 giờ ngày 2/5, Trung đoàn 209 tiêu diệt hoàn toàn hai cứ điểm này, chấm dứt sự tồn tại của trung tâm đề kháng Dominique.

                            Trên cánh đồng phía Tây, trận đánh tiêu diệt cứ điểm 811A của Trung đoàn 88 diễn ra rất nhanh chóng. Chiến thuật đánh lấn tiếp tục được phát huy. Với những đường hào đã đào xuyên qua hàng rào cứ điểm, bộ đội ta bất thần tổ chức xung phong. Toàn bộ Đại đội Âu Phi vừa tới thay quân để tăng cường phòng thủ cứ điểm này, bị diệt gọn trong vòng chưa đầy 80 phút.

                            Như vậy, ngay trong đêm đầu của đợt tiến công thứ 3, địch đã mất thêm 4 cứ điểm: C1, 505, 505A ở phía Đông và 311A ở phía Tây. Tại Hồng Cúm, trận vây ép đánh lấn khu C của Trung đoàn 57 đã tiêu hao nhiều binh lực địch, nên sáng 2/5, địch phải rút chạy khỏi đây.

                            Những đường hào thọc sâu của bộ đội ta trên cánh đồng phía Tây, đều nhắm thẳng về phía Sở chỉ huy De Castries. Tập đoàn cứ điểm đã bị dồn lại trong cái "ô vuông" cuối cùng.
                          </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                            Kết quả
                          </h4>
                          <p>
                            Đợt tổng công kích được khởi động thành công, ta
                            chiếm thêm các vị trí quan trọng, làm lung lay tuyến
                            phòng thủ còn lại của địch.
                          </p>
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(0, 0, 0, 0.8)",
              color: "#fff",
              boxShadow: "0 3px 0 #EAB308",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(0, 0, 0, 0.8)" }}
            date="Đêm 6/5 rạng 7/5/1954"
            dateClassName="text-white font-bold text-lg -mt-2"
            iconStyle={{
              background: "#EAB308",
              color: "#fff",
              boxShadow: "0 0 0 2px #EAB308",
              width: "30px",
              height: "30px",
              marginLeft: "-15px",
            }}
          >
            <h1 className="text-lg sm:text-xl font-semibold text-white">
              Quân ta đánh trận quyết định ở đồi A1
            </h1>

            <div className="mt-3 relative w-full">
              <Image
                src="https://en.nhandan.vn/megastory/2024/dbp/images/0605.jpg"
                alt="Dien Bien Phu Campaign"
                width={600}
                height={400}
                className="rounded-lg grayscale object-contain"
              />
            </div>

            {/* Xem chi tiết button */}
            <div className="mt-4 mr-70">
              <DiaglogContentTab
                title="Đêm 6/5 rạng 7/5"
                tabs={[
                  {
                    key: "progress",
                    label: "Diễn biến",
                    content: (
                      <div className="space-y-6 leading-relaxed text-[color:var(--charcoal)]">
                        <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                          <p>
                            Trong hoàn cảnh hiểm nguy, nổi bật lên nhiều tấm gương anh hùng. Đó là Trung đoàn trưởng Hùng Sinh gan dạ, bình tĩnh trực tiếp chiến đấu cùng với chiến sỹ đánh lui nhiều đợt phản kích của quân Pháp.

                            Đó là chiến sỹ điện thanh Chu Văn Mùi, lẻ loi một mình trên đỉnh đồi, không một hạt cơm vào bụng, vẫn tiếp tục cuộc chiến đấu kỳ lạ: vừa đánh địch, bảo vệ thương binh, vừa dùng máy điện thanh chỉ mục tiêu cho pháo ta diệt địch.

                            Đó là Đại đội trưởng Bảo Sằng (tức Quang Long), một thanh niên xứ Huế xuất thân hoàng tộc, đã chỉ huy đại đội chiến đấu đến người cuối cùng và anh dũng hy sinh.

                            Đêm ngày 6/5/1954, tại đồi A1 trận chiến đấu giữa ta và địch diễn ra quyết liệt, quân ta ào ạt xông lên tiêu diệt các lô cốt và dùng thuốc nổ phá các hầm ngầm kiên cố của địch. Tên quan Tư chỉ huy đồi A1 và khoảng 400 tên địch còn sống sót đã phải đầu hàng.
                          </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <Image
                            src="https://media.baobinhphuoc.com.vn/upload/news/5_2024/1_06054307052024.jpg"
                            alt="Minh họa đêm 6/5"
                            width={800}
                            height={1200}
                            className="w-full h-auto object-contain rounded-lg shadow-md"
                          />
                          <p className="text-sm text-gray-600 text-center mt-2 italic">
                            Đêm ngày 6-5, tại đồi A1 trận chiến đấu giữa ta và địch diễn ra quyết liệt, quân ta xông lên tiêu diệt từng lô cốt, nổ phá từng hầm ngầm. Trong ảnh: Đồi A1 bị ta tiêu diệt. Ảnh: Tư liệu TTXVN
                          </p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                            Kết quả
                          </h4>
                          <p>
                            Cứ điểm A1 thất thủ, hệ thống phòng ngự then chốt
                            của địch bị phá vỡ, tạo điều kiện trực tiếp cho ta
                            đánh thẳng vào sở chỉ huy Mường Thanh.
                          </p>
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(0, 0, 0, 0.8)",
              color: "#fff",
              boxShadow: "0 3px 0 #EAB308",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(0, 0, 0, 0.8)" }}
            date="7/5/1954"
            dateClassName="text-white font-bold text-lg -mt-2"
            iconStyle={{
              background: "#EAB308",
              color: "#fff",
              boxShadow: "0 0 0 2px #EAB308",
              width: "30px",
              height: "30px",
              marginLeft: "-15px",
            }}
          >
            <h1 className="text-lg sm:text-xl font-semibold text-white">
              Quân ta tiến công trên toàn mặt trận, bao vây và đánh thẳng vào sở
              chỉ huy Mường Thanh.
            </h1>

            <div className="mt-3 relative w-full">
              <Image
                src="https://en.nhandan.vn/megastory/2024/dbp/images/0705.jpg"
                alt="Dien Bien Phu Campaign"
                width={600}
                height={400}
                className="rounded-lg grayscale object-contain"
              />
            </div>

            {/* Xem chi tiết button */}
            <div className="mt-4 mr-70">
              <DiaglogContentTab
                title="Ngày 7/5:"
                tabs={[
                  {
                    key: "progress",
                    label: "Diễn biến",
                    content: (
                      <div className="space-y-6 leading-relaxed text-[color:var(--charcoal)]">
                        <div className="bg-gradient-to-r from-[color:var(--gold)]/20 to-transparent p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                          <p>
                            17 giờ 30 phút ngày 07/5/1954, ta chiếm sở chỉ huy của địch, tướng Đờ Cát cùng toàn bộ Bộ Tham mưu và binh lính tập đoàn cứ điểm Điện Biên Phủ phải ra hàng. Lá cờ "quyết chiến, quyết thắng" của quân đội ta tung bay trên nóc hầm chỉ huy của địch.

                            Ngay trong đêm đó quân ta tiếp tục tiến công phân khu Nam, đánh địch tháo chạy về Thượng Lào, đến 24 giờ toàn bộ quân địch đã bị bắt làm tù binh.

                          </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <Image
                            src="https://media.baobinhphuoc.com.vn/upload/news/5_2024/2_06062607052024.jpg"
                            alt="Minh họa ngày 7/5"
                            width={800}
                            height={1200}
                            className="w-full h-auto object-contain rounded-lg shadow-md"
                          />
                          <p className="text-sm text-gray-600 text-center mt-2 italic">
                            Chiều 7-5-1954, lá cờ "Quyết chiến - Quyết thắng" của Quân đội nhân dân Việt Nam tung bay trên nóc hầm tướng De Castries. Chiến dịch lịch sử Điện Biên Phủ đã toàn thắng. Ảnh: Tư liệu TTXVN
                          </p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">
                            Kết quả
                          </h4>
                          <p>
                            Sau 55 ngày đêm chiến đấu dũng cảm, mưu trí, sáng tạo, quân và dân ta đã đập tan toàn bộ Tập đoàn cứ điểm Điện Biên Phủ, tiêu diệt và bắt sống 16.200 tên, bắn rơi 62 máy bay, thu 64 ô tô và toàn bộ vũ khí, đạn dược, quân trang quân dụng của địch.
                          </p>
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default VerticalTimeline1;
