'use client'

import { useEffect, useState, ReactNode } from 'react'
import HTMLFlipBook from 'react-pageflip'

export default function DiaglogBook({ pages }: { pages?: ReactNode[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const [showRays, setShowRays] = useState(false)
  const [pageWidth, setPageWidth] = useState(500)
  const [pageHeight, setPageHeight] = useState(750)

  const handleButtonClick = () => {
    setShowRays(true)
    setTimeout(() => {
      setShowRays(false)
      setIsOpen(true)
    }, 1500) // Show rays for 1.5 seconds
  }

  // Compute responsive page size to avoid scroll
  useEffect(() => {
    const computeSize = () => {
      const horizontalPadding = 32 // dialog p-2 -> 8px each side + some safe space
      const verticalPadding = 100 // space for close button and margins
      const availableWidth = Math.max(320, window.innerWidth - horizontalPadding)
      const availableHeight = Math.max(280, window.innerHeight - verticalPadding)

      // Maintain page aspect ratio 2:3 (width:height). Double-page width = 2 * pageWidth
      // Constrain height by both availableHeight and width limit (double width <= availableWidth)
      const heightByWidth = Math.floor((3 / 4) * availableWidth) // from (4/3)*height <= availableWidth
      const finalHeight = Math.max(300, Math.min(availableHeight, heightByWidth))
      const finalPageWidth = Math.floor((2 / 3) * finalHeight)

      setPageHeight(finalHeight)
      setPageWidth(finalPageWidth)
    }

    computeSize()
    window.addEventListener('resize', computeSize)
    return () => window.removeEventListener('resize', computeSize)
  }, [])

  return (
    <div className="w-full flex flex-col items-center">
      <button
        className="bg-[color:var(--gold)] text-[color:var(--charcoal)] font-bold px-6 py-3 rounded-full shadow-lg text-lg hover:bg-yellow-400 transition"
        onClick={handleButtonClick}
      >
        Mở sách
      </button>

      {/* Rotating Rays Effect */}
      {showRays && (
        <div className="fixed inset-0 z-[99] bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="relative">
            {/* Rotating rays */}
            <div className="animate-spin" style={{ animationDuration: '2s' }}>
              <div className="w-32 h-32 relative">
                {/* Ray 1 */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-[color:var(--gold)] to-transparent"></div>
                {/* Ray 2 */}
                <div className="absolute top-1/2 right-0 transform translate-y-1/2 w-16 h-1 bg-gradient-to-l from-[color:var(--gold)] to-transparent"></div>
                {/* Ray 3 */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-t from-[color:var(--gold)] to-transparent"></div>
                {/* Ray 4 */}
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-[color:var(--gold)] to-transparent"></div>
                
                {/* Diagonal rays */}
                <div className="absolute top-0 left-0 w-1 h-20 bg-gradient-to-br from-[color:var(--gold)] to-transparent transform rotate-45 origin-bottom-left"></div>
                <div className="absolute top-0 right-0 w-1 h-20 bg-gradient-to-bl from-[color:var(--gold)] to-transparent transform -rotate-45 origin-bottom-right"></div>
                <div className="absolute bottom-0 left-0 w-1 h-20 bg-gradient-to-tr from-[color:var(--gold)] to-transparent transform -rotate-45 origin-top-left"></div>
                <div className="absolute bottom-0 right-0 w-1 h-20 bg-gradient-to-tl from-[color:var(--gold)] to-transparent transform rotate-45 origin-top-right"></div>
              </div>
            </div>
            
            {/* Center circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[color:var(--gold)] rounded-full animate-pulse"></div>
            
            {/* Loading text */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-8 text-white text-lg font-bold animate-pulse">
              Đang mở sách...
            </div>
          </div>
        </div>
      )}

                   {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-2">
          <div className="relative w-full h-full max-h-[98vh] overflow-hidden flex items-center justify-center">
            <button
              aria-label="Đóng"
              className="absolute top-4 right-4 bg-[color:var(--brown)] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[color:var(--charcoal)] z-10 shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            <div className="flex justify-center">
              <HTMLFlipBook
                showPageCorners={true}
                disableFlipByClick={false}
                width={pageWidth}
                height={pageHeight}
                size="fixed"
                minWidth={280}
                maxWidth={900}
                minHeight={300}
                maxHeight={1000}
                maxShadowOpacity={0.3}
                showCover={false}
                mobileScrollSupport={true}
                className="my-flipbook"
                startPage={0}
                drawShadow={true}
                flippingTime={800}
                usePortrait={false}
                startZIndex={0}
                autoSize={true}
                clickEventForward={true}
                useMouseEvents={true}
                swipeDistance={30}
                style={{ margin: '0 auto' }}
              >
                {pages && pages.length > 0 ? (
                  pages
                ) : (
                  <>
                    {/* Default minimal two pages - no cover */}
                    <div className="page bg-white">
                      <div className="p-6 h-full flex items-center justify-center">
                        <div className="text-center text-[color:var(--charcoal)]">
                          <div className="text-xl font-semibold mb-2">Page 1</div>
                          <div className="text-sm text-[color:var(--grey)]">Pass pages via prop to replace defaults</div>
                        </div>
                      </div>
                    </div>
                    <div className="page bg-white">
                      <div className="p-6 h-full flex items-center justify-center">
                        <div className="text-center text-[color:var(--charcoal)]">
                          <div className="text-xl font-semibold mb-2">Page 2</div>
                          <div className="text-sm text-[color:var(--grey)]">{`<DiaglogBook pages={[<div className='page'>...</div>, ...]} />`}</div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </HTMLFlipBook>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


