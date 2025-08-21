'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

type TabItem = {
  key: string
  label: string
  content: ReactNode
}

export default function DiaglogContentTab({
  title = 'Chi tiết',
  tabs,
  triggerText = 'Xem chi tiết',
}: {
  title?: string
  tabs?: TabItem[]
  triggerText?: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeKey, setActiveKey] = useState('prepare')
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const overlayRef = useRef<HTMLDivElement | null>(null)

  const defaultTabs: TabItem[] = [
    {
      key: 'prepare',
      label: 'Chuẩn bị',
      content: (
        <div className="space-y-3 leading-relaxed text-[color:var(--charcoal)]">
          <p>
            18 giờ ngày 30/3/1954, đợt tiến công thứ hai vào Tập đoàn cứ điểm Điện Biên Phủ bắt đầu. Pháo binh chiến dịch dồn dập bắn vào Sở chỉ huy của Đờ Cát-xtơ-ri và các điểm cao C1, D1, E1, các trận địa pháo, khu vực cơ động của địch ở Mường Thanh, Hồng Cúm.
          </p>
        </div>
      ),
    },
    {
      key: 'progress',
      label: 'Diễn biến',
      content: (
        <div className="space-y-3 leading-relaxed text-[color:var(--charcoal)]">
          <p>
            Tại cứ điểm C1, Trung đoàn 98 do Trung đoàn trưởng Vũ Lăng chỉ huy tiến công nhanh. Sau 15 phút, ta dọn xong cửa mở qua 7 lớp rào thép gai và bằng một đợt xung phong đã chiếm được lô cốt cao nhất.
          </p>
          <p>
            Địch bị dồn về phía tây, gọi pháo binh bắn chặn. Ta dùng lưỡi lê, lựu đạn đánh giáp lá cà, đập tan 3 đợt phản kích.
          </p>
          <p>
            Tại đồi A1, Trung đoàn 174 (Đại đoàn 316) mất liên lạc từ đầu, mở cửa muộn và gặp hỏa lực địch dày đặc tại cửa mở. Trận chiến giằng co suốt đêm, địch dựa vào công sự và hầm ngầm chống cự quyết liệt.
          </p>
        </div>
      ),
    },
    {
      key: 'result',
      label: 'Kết quả',
      content: (
        <div className="space-y-3 leading-relaxed text-[color:var(--charcoal)]">
          <p>
            C1: Trong 45 phút, ta diệt và bắt toàn bộ một đại đội (140 tên) thuộc tiểu đoàn 1, trung đoàn 4 Ma-rốc; ta thương vong 10 người.
          </p>
          <p>
            A1: Trận đánh tiếp tục giằng co tới sáng 31/3/1954. Bộ Chỉ huy chiến dịch đồng thời triển khai 3 mũi thọc sâu tiêu diệt trận địa pháo 210 và quấy rối vòng trong địch.
          </p>
        </div>
      ),
    },
  ]

  const tabsToRender = (tabs && tabs.length > 0 ? tabs : defaultTabs)
  const activeTab = tabsToRender.find(t => t.key === activeKey) || tabsToRender[0]
  const activeTabIndex = Math.max(0, tabsToRender.findIndex(t => t.key === activeKey))

  // Handle ESC to close and focus management
  useEffect(() => {
    if (!isOpen) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKey)
    // Focus close on open
    closeButtonRef.current?.focus()
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen])

  const handleBackdropMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) {
      setIsOpen(false)
    }
  }

  const handleTabsKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!tabsToRender.length) return
    const lastIndex = tabsToRender.length - 1
    let nextIndex = activeTabIndex
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      nextIndex = activeTabIndex === lastIndex ? 0 : activeTabIndex + 1
      setActiveKey(tabsToRender[nextIndex].key)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      nextIndex = activeTabIndex === 0 ? lastIndex : activeTabIndex - 1
      setActiveKey(tabsToRender[nextIndex].key)
    } else if (e.key === 'Home') {
      e.preventDefault()
      setActiveKey(tabsToRender[0].key)
    } else if (e.key === 'End') {
      e.preventDefault()
      setActiveKey(tabsToRender[lastIndex].key)
    }
  }

  return (
    <div className="w-full flex flex-col items-center">
      <button
        className="bg-[color:var(--gold)] text-[color:var(--charcoal)] font-bold px-6 py-3 rounded-full shadow-lg text-lg hover:bg-yellow-400 transition"
        onClick={() => setIsOpen(true)}
      >
        {triggerText}
      </button>

      {isOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onMouseDown={handleBackdropMouseDown}
        >
          <div
            className="relative w-full max-w-4xl md:max-w-5xl h-[90vh] md:h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-content-tab-title"
          >
            {/* Sticky Header + Tabs */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b">
              <div className="flex items-center justify-between px-6 py-4">
                <h3 id="dialog-content-tab-title" className="text-xl font-bold text-[color:var(--brown)]">{title}</h3>
                <button
                  ref={closeButtonRef}
                  aria-label="Đóng"
                  className="bg-[color:var(--brown)] text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-[color:var(--charcoal)] focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]"
                  onClick={() => setIsOpen(false)}
                >
                  ✕
                </button>
              </div>

              {/* Tabs */}
              <div className="px-6 pb-3">
                <div
                  className="flex gap-2 overflow-x-auto no-scrollbar"
                  role="tablist"
                  aria-label="Tabs"
                  onKeyDown={handleTabsKeyDown}
                >
                  {tabsToRender.map((tab, index) => {
                    const isActive = activeTab.key === tab.key
                    return (
                      <button
                        key={tab.key}
                        id={`dialogtab-${tab.key}`}
                        role="tab"
                        aria-selected={isActive}
                        aria-controls={`dialogtab-panel-${tab.key}`}
                        tabIndex={isActive ? 0 : -1}
                        onClick={() => setActiveKey(tab.key)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition border whitespace-nowrap ${
                          isActive
                            ? 'bg-[color:var(--gold)] text-[color:var(--charcoal)] border-[color:var(--gold)]'
                            : 'bg-white text-[color:var(--brown)] border-[color:var(--gold)] hover:bg-yellow-50'
                        }`}
                      >
                        {tab.label}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Scrollable Content */}
            <div
              id={`dialogtab-panel-${activeTab.key}`}
              role="tabpanel"
              aria-labelledby={`dialogtab-${activeTab.key}`}
              className="flex-1 px-6 py-4 overflow-y-auto dialog-content"
            >
              {activeTab.content}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


