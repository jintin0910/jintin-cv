import React from 'react'

function AboutMe() {
    const features = [
        { icon: '/icon-target.png', title: '專注目標', text: '設定明確目標，堅持不懈地追求' },
        { icon: '/icon-lightbulb.png', title: '創意思維', text: '跳脫框架，用創新方式解決問題' },
        { icon: '/icon-curious.png', title: '好奇心強', text: '對於任何事物都保持新鮮感' }
    ]

    // 圍繞照片的位置 - 不重疊且不傾斜
    const positions = [
        { top: '-100px', left: '-240px', rotate: '0deg' },    // 左上角
        { top: '-80px', right: '-200px', rotate: '0deg' },   // 右上角
        { bottom: '-50px', right: '-180px', rotate: '0deg' }  // 右下角
    ]

    return (
        <div className="section-content">
            <h2 className="section-title">Hi, I'm Jintin</h2>

            <p className="section-text" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                是一個看起來睏袂飽ㄟTaiwanㄌㄤˊ<br />
                想成為有魔法ㄉ設計師，希望每天都把生活變得好玩又有趣<br />
                願意歷經未知來勇敢擴大舒適圈
            </p>

            {/* 照片與特色區 */}
            <div style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '4rem',
                paddingTop: '2rem'
            }}>
                {/* 手繪風格裝飾線 */}
                <svg style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    pointerEvents: 'none',
                    zIndex: 1
                }}>
                    {/* 左側裝飾線 */}
                    <path
                        d="M 200 80 Q 250 120 280 180"
                        stroke="#E8B4B8"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="8 4"
                        style={{ opacity: 0.7 }}
                    />
                    {/* 右側裝飾線 */}
                    <path
                        d="M 580 80 Q 530 120 500 180"
                        stroke="#D4B8E0"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="8 4"
                        style={{ opacity: 0.7 }}
                    />
                    {/* 底部裝飾線 - 連接到右下角feature */}
                    <path
                        d="M 540 300 Q 600 340 660 370 Q 720 400 770 420"
                        stroke="rgb(207, 85, 64)"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="8 4"
                        style={{ opacity: 0.6 }}
                    />
                    {/* 愛心裝飾 */}
                    <text x="360" y="50" fontSize="20" fill="#E8B4B8">♡</text>
                    <text x="420" y="60" fontSize="16" fill="#D4B8E0">♡</text>
                    <text x="320" y="400" fontSize="18" fill="rgb(207, 85, 64)">✦</text>
                    <text x="460" y="390" fontSize="14" fill="#E8B4B8">✦</text>
                </svg>

                {/* 中央照片容器 */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                    {/* 照片 */}
                    <div className="avatar-container avatar-hover-effect">
                        <img
                            className="avatar avatar-large"
                            src="/IMG_2734.JPG"
                            alt="個人照片"
                        />
                        <div className="avatar-icon-overlay">
                            <img src="/icon.svg" alt="icon" className="avatar-icon" />
                        </div>
                    </div>

                    {/* 圍繞的特色標籤 */}
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            style={{
                                position: 'absolute',
                                ...positions[index],
                                background: 'transparent',
                                padding: '0.8rem 1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                transform: `rotate(${positions[index].rotate})`,
                                zIndex: 10,
                                textAlign: 'center',
                                flexDirection: 'column'
                            }}
                        >
                            <img
                                src={feature.icon}
                                alt={feature.title}
                                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                            />
                            <div>
                                <div style={{ fontWeight: '700', color: '#5D3A1A', fontSize: '0.9rem' }}>
                                    {feature.title}
                                </div>
                                <div style={{ fontSize: '0.75rem', color: '#7A6A6A' }}>
                                    {feature.text}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 下方自我介紹 */}
            <div style={{
                background: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(10px)',
                padding: '2rem',
                borderRadius: '20px',
                border: '2px dashed #E8B4B8',
                maxWidth: '700px',
                margin: '0 auto',
                textAlign: 'left'
            }}>
                <h3 style={{
                    color: 'rgb(207, 85, 64)',
                    marginBottom: '1rem',
                    fontSize: '1.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    ✎ 關於我的經歷
                </h3>
                <p className="section-text" style={{ margin: 0, lineHeight: '2' }}>
                    8年以上工作經驗，資管系畢業，自網頁前端開發發根，後於台灣金研院擔任網頁設計。
                    目前任職中華郵政，意外成為行銷PM，後因專案回歸國內外網頁設計開發，再因疫情翻轉工作崗位，管理國際快遞物流專案系統串接專案。現為跳脫舒適圈，轉任數位轉型推動部門做UX體驗專案管理，期以AI輔助服務與體驗設計，為公家機關的數位轉型推動與策略管理帶來助力。
                </p>
            </div>
        </div>
    )
}

export default AboutMe
