import React from "react";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
              background: "rgba(0, 0, 0, 0.8)",
              color: "#fff",
              boxShadow: "0 3px 0 #EAB308",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(0, 0, 0, 0.8)" }}
            date="13/3 - 17/3/1954"
            dateClassName="text-white font-bold text-lg"
            iconStyle={{
              background: "#EAB308",
              color: "#fff",
              boxShadow: "0 0 0 4px #EAB308",
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
            <div className="mt-4 flex justify-end">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg shadow">
                Xem chi tiết
              </button>
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
            <div className="mt-4 flex justify-end">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg shadow">
                Xem chi tiết
              </button>
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
            <div className="mt-4 flex justify-end">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg shadow">
                Xem chi tiết
              </button>
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
            date="30/3 – 30/4/1954"
            dateClassName="text-white font-bold text-lg"
            iconStyle={{
              background: "#EAB308",
              color: "#fff",
              boxShadow: "0 0 0 4px #EAB308",
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
            <div className="mt-4 flex justify-end">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg shadow">
                Xem chi tiết
              </button>
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
            <div className="mt-4 flex justify-end">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg shadow">
                Xem chi tiết
              </button>
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
            date="1/5 – 7/5/1954"
            dateClassName="text-white font-bold text-lg"
            iconStyle={{
              background: "#EAB308",
              color: "#fff",
              boxShadow: "0 0 0 4px #EAB308",
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
            <div className="mt-4 flex justify-end">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg shadow">
                Xem chi tiết
              </button>
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
              Quân ta đánh trận quyết định ở đồi A1:
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
            <div className="mt-4 flex justify-end">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg shadow">
                Xem chi tiết
              </button>
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
            <div className="mt-4 flex justify-end">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg shadow">
                Xem chi tiết
              </button>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default VerticalTimeline1;
