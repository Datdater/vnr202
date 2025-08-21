import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
function PreprationPhase() {
  return (
    <>
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="text-center mb-6">
          <h2
            className="text-xl sm:text-2xl font-bold text-white"
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
            Công tác chuẩn bị
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Vietnamese Army */}
          <div className="rounded-2xl shadow-xl overflow-hidden flex flex-col">
            <div className="bg-red-700 text-white flex items-center justify-between h-16 px-4 text-center font-bold text-2xl">
              <span className="flex-1 text-center">
                Lực lượng Quân đội Nhân dân Việt Nam
              </span>
              <img
                src="/vietnam.png"
                alt="Vietnam Flag"
                className="w-10 h-10 object-cover ml-2"
              />
            </div>
            <div
              className="bg-red-100 bg-cover  text-gray-900 p-6 space-y-3 flex-1 flex flex-col"
              style={{
                backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Vietnam_map.png/408px-Vietnam_map.png)`,
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                backgroundBlendMode: "overlay",
              }}
            >
              <ul className="space-y-3 flex-1">
                <li className="bg-red-200 p-2 rounded shadow flex items-center gap-2">
                  <img src="/infantry.png" alt="icon" className="w-15 h-15" />3
                  Đại đoàn bộ binh (308, 312, 316)
                </li>
                <li className="bg-red-200 p-2 rounded shadow flex items-center gap-2">
                  <img
                    src="/soldier_10020958.png"
                    alt="icon"
                    className="w-15 h-15"
                  />
                  Trung đoàn bộ binh 57 và Trung đoàn 9 (Đại đoàn 304)
                </li>
                <li className="bg-red-200 p-2 rounded shadow flex items-center gap-2">
                  <img
                    src="/artillery_12594647.png"
                    alt="icon"
                    className="w-15 h-15"
                  />
                  Đại đoàn Công - Pháo 351
                </li>
                <li className="bg-red-200 p-2 rounded shadow flex items-center gap-2">
                  <img src="/cannon.png" alt="icon" className="w-15 h-15" />
                  Trung đoàn lựu pháo 45
                </li>
                <li className="bg-red-200 p-2 rounded shadow flex items-center gap-2">
                  <img src="/artillery2.png" alt="icon" className="w-15 h-15" />
                  Trung đoàn Sơn pháo 675
                </li>
                <li className="bg-red-200 p-2 rounded shadow flex items-center gap-2">
                  <img src="/artillery3.png" alt="icon" className="w-15 h-15" />
                  Trung đoàn Pháo cao xạ 367
                </li>
              </ul>

              <div className="mt-6">
                <p className="text-center font-semibold bg-red-300 p-3 rounded shadow">
                  Trong Chiến dịch này, chúng ta đã huy động 55.000 cán bộ,
                  chiến sĩ của các đại đoàn chủ lực
                </p>
              </div>
            </div>
          </div>

          {/* French Army */}
          <div className="rounded-2xl shadow-xl overflow-hidden flex flex-col">
            <div className="bg-blue-800 text-white flex items-center justify-between h-16 px-4 text-center font-bold text-2xl">
              <img
                src="/france.png"
                alt="France Flag"
                className="w-10 h-10 object-cover mr-2"
              />
              <span className="flex-1 text-center">Lực lượng Quân Pháp</span>
            </div>
<div
              className="bg-red-100 bg-cover  text-gray-900 p-6 space-y-3 flex-1 flex flex-col"
              style={{
                backgroundImage: `url(https://freepngimg.com/thumb/map/173746-map-region-picture-france-png-file-hd.png)`,
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                backgroundBlendMode: "overlay",
              }}
            >              <ul className="space-y-3 flex-1">
                <li className="bg-blue-200 p-2 rounded shadow flex items-center gap-2">
                  <img src="/infantry.png" alt="icon" className="w-15 h-15" />
                  12 Tiểu đoàn
                </li>
                <li className="bg-blue-200 p-2 rounded shadow flex items-center gap-2">
                  <img
                    src="/soldier_10020958.png"
                    alt="icon"
                    className="w-15 h-15"
                  />
                  7 Đại đội bộ binh
                </li>
                <li className="bg-blue-200 p-2 rounded shadow flex items-center gap-2">
                  <img src="/cannon.png" alt="icon" className="w-15 h-15" />2
                  Tiểu đoàn lựu pháo 105mm (24 khẩu)
                </li>
                <li className="bg-blue-200 p-2 rounded shado flex items-center gap-2">
                  <img
                    src="/mortar-weapon-military-line-icon-vector-46917160 (1)-fotor-bg-remover-20250821171920.png"
                    alt="icon"
                    className="w-15 h-15"
                  />
                  2 Tiểu đoàn súng cối 120mm (20 khẩu)
                </li>
                <li className="bg-blue-200 p-2 rounded shadow flex items-center gap-2">
                  <img src="/artillery2.png" alt="icon" className="w-15 h-15" />
                  1 Đại đội trọng pháo 155mm (4 khẩu)
                </li>
                <li className="bg-blue-200 p-2 rounded shadow flex items-center gap-2">
                  <img
                    src="/engineer_7091422.png"
                    alt="icon"
                    className="w-15 h-15"
                  />
                  1 Tiểu đoàn công binh
                </li>
                <li className="bg-blue-200 p-2 rounded shadow flex items-center gap-2">
                  <img
                    src="/tank_4611076.png"
                    alt="icon"
                    className="w-15 h-15"
                  />
                  1 Đại đội xe tăng (10 chiếc)
                </li>
                <li className="bg-blue-200 p-2 rounded shadow flex items-center gap-2">
                  1 Đại đội xe vận tải (~200 xe)
                </li>
                <li className="bg-blue-200 p-2 rounded shadow flex items-center gap-2">
                  <img
                    src="/aeroplane_2070271.png"
                    alt="icon"
                    className="w-15 h-15"
                  />
                  1 Phi đội máy bay thường trực (14 chiếc)
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-center font-semibold bg-blue-300 p-3 rounded shadow">
                  Tổng số quân lúc đầu khoảng 11.800 quân
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 py-16 px-4">
        <div className="flex-1 min-w-[250px]">
          <div className="bg-black/60 rounded-xl p-6">
            <ul className="list-disc pl-5 space-y-2 text-lg text-white">
              <li>
                <b>Khó khăn ban đầu:</b>
                <ul className="list-[circle] pl-6 mt-1 text-base">
                  <li>
                    Địa hình hiểm trở, núi non trùng điệp, đường sá nhỏ hẹp, lầy
                    lội, nhiều đoạn chỉ có lối mòn.
                  </li>
                  <li>
                    Phương tiện vận tải cơ giới rất thiếu, hầu hết phải dùng sức
                    người, ngựa thồ, xe đạp thồ.
                  </li>
                  <li>
                    Khoảng cách vận chuyển từ hậu phương (Việt Bắc, Liên khu 3,
                    Liên khu 4) đến mặt trận kéo dài hàng trăm km.
                  </li>
                </ul>
              </li>

              <li>
                <b>Ý nghĩa:</b>
                <ul className="list-[circle] pl-6 mt-1 text-base">
                  <li>
                    Hậu cần đã bảo đảm cho bộ đội ta có đủ súng đạn, lương thực
                    để đánh dài ngày.
                  </li>
                  <li>
                    Thể hiện sức mạnh của hậu phương kháng chiến, tinh thần đoàn
                    kết quân – dân.
                  </li>
                  <li>
                    Trở thành một “trận đánh hậu cần vĩ đại”, góp phần quyết
                    định vào thắng lợi của Chiến dịch Điện Biên Phủ.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 min-w-[250px] flex flex-col items-center">
          <Image
            src="https://baotangchungtichchientranh.vn/resource/images/2024/07/nlarge.c72176eaf9ebdeb4346ca997365ed30a.jpg"
            alt="Sức lao động icon"
            width={500}
            height={350}
            className="rounded-full bg-[color:var(--gold)]/20 p-3 shadow-lg"
          />
          <p className="italic text-sm text-center mt-2 text-white bg-black/60 px-3 py-2 rounded-md">
            Hình ảnh sự sáng tạo nổi bật sử dụng xe đạp thồ được gia cố bằng nan
            tre, gỗ, dây mây… biến thành “con ngựa sắt”, chở nặng gấp nhiều lần
            bình thường.
          </p>
        </div>
      </div>
    </>
  );
}

export default PreprationPhase;
