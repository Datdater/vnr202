import React, { useState } from "react";

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const handleToggle = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Tự động cập nhật trạng thái khi nhạc kết thúc hoặc pause
  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const handleEnded = () => setIsPlaying(false);
    const handlePause = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("pause", handlePause);
    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  return (
    <div className="flex flex-col items-center my-6">
      <audio ref={audioRef} src="/Victory at Dien Bien Phu.mp3" preload="auto" />
      <button
        onClick={handleToggle}
        className={`px-6 py-2 rounded-full font-bold shadow transition
          ${isPlaying
            ? "bg-red-600 text-white hover:bg-red-700"
            : "bg-yellow-400 text-[color:var(--brown)] hover:bg-yellow-500"}
        `}
      >
        {isPlaying ? "Tắt nhạc" : "Bật nhạc nền"}
      </button>
    </div>
  );
};

export default MusicPlayer;