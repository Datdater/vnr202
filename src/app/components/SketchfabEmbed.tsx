import React, { useState } from "react";
import { Maximize2, Minimize2, RotateCcw, Info, Eye } from "lucide-react";

const SketchfabEmbed: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showInfo, setShowInfo] = useState(false);

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div
      className="w-full max-w mx-auto p-4 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(https://dienbienphu-image.nhandan.vn/t1200/Uploaded/uncqrwpjw/chienthangdienbienphuttxvn.jpg)`,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Header */}
      <div className="mb-6 text-center">
        <h1
          className="text-3xl font-bold text-gray-800 mb-2"
          style={{
            fontFamily: "var(--font-family-brand)",
            color: "var(--gray-white, #fff)",
            textShadow: "5px 5px 0 rgba(0,0,0,.15)",
            fontSize: "40px",
            fontWeight: 900,
            lineHeight: "130%",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Cụm tượng chiến thắng Điện Biên Phủ
        </h1>
        <p className="text-white text-lg">
          Khám phá mô hình 3D tương tác của di tích lịch sử Việt Nam
        </p>
      </div>

      {/* Main Viewer Container */}
      <div
        className={`
          max-w-6xl
          mx-auto 
          relative bg-gradient-to-br from-gray-50 to-gray-100 
          rounded-2xl shadow-2xl overflow-hidden border border-gray-200
          transition-all duration-300 ease-in-out
          ${isFullscreen ? "fixed inset-0 z-50 rounded-none" : ""}
        `}
      >
        {/* Control Bar */}
        <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-r from-black/70 to-black/50 backdrop-blur-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowInfo(!showInfo)}
                className="p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-all duration-200"
                title="Thông tin"
              >
                <Info size={18} />
              </button>
              <button
                onClick={handleFullscreen}
                className="p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-all duration-200"
                title={isFullscreen ? "Thu nhỏ" : "Toàn màn hình"}
              >
                {isFullscreen ? (
                  <Minimize2 size={18} />
                ) : (
                  <Maximize2 size={18} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 z-20 bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
              <p className="text-gray-600 font-medium">
                Đang tải mô hình 3D...
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Vui lòng chờ trong giây lát
              </p>
            </div>
          </div>
        )}

        {/* Info Panel */}
        {showInfo && (
          <div className="absolute top-16 right-4 z-30 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-gray-200 max-w-sm">
            <h3 className="font-semibold text-gray-800 mb-2">
              Hướng dẫn sử dụng
            </h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Kéo chuột để xoay mô hình</li>
              <li>• Cuộn chuột để phong to/thu nhỏ</li>
              <li>• Nhấn giữ và kéo để di chuyển</li>
              <li>• Nhấp đúp để đặt lại góc nhìn</li>
            </ul>
          </div>
        )}

        {/* Main iframe */}
        <iframe
          title="Cụm tượng chiến thắng Điện Biên Phủ"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src="https://sketchfab.com/models/050b006020fa4b9985b6cc352f49e1dc/embed?autostart=1&ui_theme=dark&ui_controls=1&ui_infos=1&ui_inspector=1&ui_stop=1&ui_watermark=1&ui_watermark_link=1"
          className={`
    w-full transition-all duration-300 ease-in-out
    ${isFullscreen ? "h-screen" : "h-[70vh] md:h-[80vh]"}
  `}
          onLoad={handleIframeLoad}
        />

        {/* Bottom gradient overlay for better visual */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      </div>
      {/* 
      

      {/* Footer */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>Mô hình được tạo bởi Sketchfab • Powered by WebGL</p>
      </div>
    </div>
  );
};

export default SketchfabEmbed;
