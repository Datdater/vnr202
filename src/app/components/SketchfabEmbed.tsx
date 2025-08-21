import React from "react";

const SketchfabEmbed: React.FC = () => {
  return (
    <div className="w-full relative">
      <iframe
        title="Cụm tượng chiến thắng Điện Biên Phủ"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/050b006020fa4b9985b6cc352f49e1dc/embed"
        className="w-full h-[80vh]" // full width, tall enough for visibility
      ></iframe>
    </div>
  );
};

export default SketchfabEmbed;
