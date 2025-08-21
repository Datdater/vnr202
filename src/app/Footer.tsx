import React from "react";

const Footer: React.FC = () => {
  const videos = [
    {
      id: "zRa9rAOWrKg",
      title: "Tài liệu: Chiến thắng Điện Biên Phủ",
    },
    {
      id: "Dykwdja71IU",
      title: "Lịch sử 56 ngày đêm",
    },
    {
      id: "kILCkBij2b8",
      title: "Chiến thuật quân sự Điện Biên Phủ",
    },
  ];

  return (
    <footer className="relative font-sans">
      <div
        className="min-h-[300px] bg-cover bg-center"
        style={{
          backgroundImage: `url(https://dienbienphu-static.nhandan.vn/assets/web/styles/img/dbp/footer-bg.jpg)`,
        }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-12">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                style={{
                  fontFamily: "var(--font-family-brand)",
                  color: "var(--gray-white, #ff0000ff)",
                  textShadow: "5px 5px 0 rgba(0,0,0,.15)",
                  fontSize: "50px",
                  fontWeight: 900,
                  lineHeight: "130%",
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
              >
                Video Tài Liệu Liên Quan
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Khám phá những video tài liệu quý giá về chiến thắng lịch sử Điện
                Biên Phủ
              </p>
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-red-500/20"
                >
                  {/* Video Container */}
                  <div className="relative aspect-video bg-black">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                 
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;