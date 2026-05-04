import React, { useState } from 'react'

function Plans() {
    const [activeIndex, setActiveIndex] = useState(0)

    const indicators = [
        {
            label: '任務指標',
            icon: '/icon-target.png',
            items: [
                '透過用戶訪談與服務旅程分析，建立 AI 導入需求清單與痛點結構',
                '評估公司內部服務場域與顧客旅程地圖執行方向，並探索 AI 互動情境介入點，以創造AI服務工作流',
            ]
        },
        {
            label: '策略指標',
            icon: '/icon-chart.png',
            items: [
                '公司策略目標：數位轉型與服務創新',
                '建立用戶洞察能力作為 AI 服務創新策略支撐',
                '定義 AI 導入服務場景並對齊顧客旅程策略',
                '支援企業數位轉型之顧客數據整合與服務觸點優化',
            ]
        },
        {
            label: '個人發展計畫 (IDP)',
            icon: '/icon-rocket.png',
            items: [
                '發展 AI 互動設計能力',
                '強化顧客旅程與 AI 觸點整合能力',
                '學習AI推理機制與建立prompt策略，並將之注入工作流程，支援 AI 服務落地',
                '參與 AI POC 導入，建立服務實戰經驗',
            ]
        },
        {
            label: '想了解更多',
            icon: '/icon-globe.png',
            items: [
                '📧 Email: m11410910@gapps.ntust.edu.tw',
                '如果對於我的發展計劃有興趣，歡迎來信交流，期待與您的對話！',
            ]
        }
    ]

    // 主容器 - 檔案夾風格
    const folderContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '900px',
        margin: '0 auto',
        position: 'relative'
    }

    // 上方頁籤區
    const tabsContainerStyle = {
        display: 'flex',
        gap: '0',
        zIndex: 10,
        marginLeft: '20px'
    }

    // 單個頁籤
    const getTabStyle = (index) => {
        const isActive = activeIndex === index
        const colors = [
            { bg: '#E8B4B8', border: '#D9A5A9' },  // 粉紅
            { bg: 'rgb(207, 85, 64)', border: '#C04A30' },  // 珊瑚橘
            { bg: '#D4B8E0', border: '#C5A9D1' },  // 淡紫
            { bg: '#8FBCB5', border: '#7AADA6' }   // 青綠 (聯絡)
        ]

        return {
            background: isActive ? colors[index].bg : `${colors[index].bg}CC`,
            color: '#FFFFFF',
            padding: '1rem 1.5rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontWeight: '600',
            fontSize: '0.95rem',
            border: 'none',
            borderRadius: '12px 12px 0 0',
            marginBottom: isActive ? '-3px' : '0',
            transform: isActive ? 'translateY(-5px)' : 'translateY(0)',
            boxShadow: isActive
                ? `0 -4px 20px ${colors[index].bg}40`
                : '0 -2px 8px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            position: 'relative',
            zIndex: isActive ? 20 : 10 - index
        }
    }

    // 下方內容區 - 玻璃效果
    const contentContainerStyle = {
        background: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '10px 10px 0 0',
        padding: '2rem',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        minHeight: '480px',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        perspective: '1000px',
        overflow: 'hidden'
    }

    // 內容包裝 - 用於動畫
    const contentWrapperStyle = {
        animation: 'flipIn 0.5s ease-out'
    }

    // 內容標題
    const contentTitleStyle = {
        fontSize: '1.5rem',
        fontWeight: '700',
        marginBottom: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        color: ['#E8B4B8', 'rgb(207, 85, 64)', '#D4B8E0', '#8FBCB5'][activeIndex]
    }

    // 項目列表
    const getItemStyle = (itemIndex) => ({
        background: 'rgba(78, 205, 196, 0.08)',
        padding: '1rem 1.5rem',
        borderRadius: '10px',
        marginBottom: '0.75rem',
        fontSize: '0.95rem',
        lineHeight: '1.6',
        color: '#2D3748',
        borderLeft: '4px solid',
        borderLeftColor: ['#E8B4B8', 'rgb(207, 85, 64)', '#D4B8E0', '#8FBCB5'][activeIndex],
        animation: `slideInRight 0.4s ease-out ${itemIndex * 0.1}s both`
    })

    // 頁籤圖示
    const tabIconStyle = {
        width: '45px',
        height: '45px',
        objectFit: 'contain'
    }

    // 內容圖示
    const contentIconStyle = {
        width: '50px',
        height: '50px',
        objectFit: 'contain'
    }

    return (
        <div className="section-content">
            <h2 className="section-title">個人任務和里程碑</h2>

            <p className="section-text">
                成為輔助公司數位轉型策略的AI服務體驗設計師
            </p>

            <div style={folderContainerStyle}>
                {/* 上方頁籤 */}
                <div className="plans-tabs-scroll" style={tabsContainerStyle}>
                    {indicators.map((indicator, index) => (
                        <div
                            key={index}
                            style={getTabStyle(index)}
                            onClick={() => setActiveIndex(index)}
                        >
                            <span>{indicator.label}</span>
                        </div>
                    ))}
                </div>

                {/* 內容區 */}
                <div style={contentContainerStyle}>
                    {/* 背景圖示 */}
                    <img
                        src={indicators[activeIndex].icon}
                        alt=""
                        className="plans-content-bg-icon"
                        style={{
                            position: 'absolute',
                            bottom: '20px',
                            right: '20px',
                            width: '250px',
                            height: '250px',
                            objectFit: 'contain',
                            opacity: 0.6,
                            zIndex: 0
                        }}
                    />
                    <div key={activeIndex} style={{ ...contentWrapperStyle, position: 'relative', zIndex: 1 }}>
                        <h3 style={contentTitleStyle}>
                            {indicators[activeIndex].label}
                        </h3>

                        <div>
                            {indicators[activeIndex].items.map((item, i) => (
                                <div key={i} style={getItemStyle(i)}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes flipIn {
                    0% {
                        opacity: 0;
                        transform: rotateY(-90deg);
                    }
                    100% {
                        opacity: 1;
                        transform: rotateY(0deg);
                    }
                }
                @keyframes slideInRight {
                    0% {
                        opacity: 0;
                        transform: translateX(30px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </div>
    )
}

export default Plans
