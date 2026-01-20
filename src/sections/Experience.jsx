import React from 'react'

function Experience() {
    const education = [
        {
            date: '2025-至今',
            title: '國立臺灣科技大學',
            desc: '設計研究所碩士在職專班'
        },
        {
            date: '2012-2016',
            title: '國立臺北商業大學',
            desc: '資訊管理系'
        }
    ]

    const workExperience = [
        {
            date: '2025-至今',
            title: '中華郵政 數位發展室',
            desc: 'UX體驗與創新服務專案PM'
        },
        {
            date: '2021-2025',
            title: '中華郵政 郵務處',
            desc: '國際快遞PM'
        },
        {
            date: '2020-2021',
            title: '中華郵政 電子商務室',
            desc: '行銷PM'
        },
        {
            date: '2018-2020',
            title: '中華郵政 電子商務室',
            desc: '行銷PM'
        },
        {
            date: '2016-2018',
            title: '台灣金融研訓院',
            desc: '網頁設計助理'
        },
        {
            date: '2016',
            title: 'MakerPro',
            desc: '採訪編輯實習生'
        }
    ]

    // 兩欄容器
    const containerStyle = {
        display: 'flex',
        gap: '4rem',
        justifyContent: 'center',
        flexWrap: 'wrap'
    }

    // 單欄區塊
    const columnStyle = {
        flex: '1',
        minWidth: '280px',
        maxWidth: '400px'
    }

    // 標題樣式 (草書風格)
    const sectionTitleStyle = {
        fontFamily: "'Noto Serif TC', serif",
        fontSize: '2rem',
        fontWeight: '700',
        color: 'rgb(207, 85, 64)',
        marginBottom: '2rem',
        fontStyle: 'italic',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
    }

    // 時間軸容器
    const timelineStyle = {
        position: 'relative',
        paddingLeft: '20px'
    }

    // 時間軸左側線條
    const timelineLineStyle = {
        position: 'absolute',
        left: '6px',
        top: '8px',
        bottom: '0',
        width: '2px',
        background: 'linear-gradient(to bottom, #4ECDC4, #E8885C)'
    }

    // 時間軸項目
    const timelineItemStyle = {
        position: 'relative',
        marginBottom: '1.5rem'
    }

    // 時間軸圓點
    const dotStyle = {
        position: 'absolute',
        left: '-17px',
        top: '6px',
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        background: '#E8885C',
        border: '2px solid #4ECDC4'
    }

    // 日期樣式
    const dateStyle = {
        color: '#E8885C',
        fontSize: '0.95rem',
        fontWeight: '700',
        marginBottom: '0.3rem'
    }

    // 標題樣式
    const titleStyle = {
        color: '#1A3A3C',
        fontSize: '1.1rem',
        fontWeight: '700',
        marginBottom: '0.2rem'
    }

    // 描述樣式
    const descStyle = {
        color: '#3D6A6C',
        fontSize: '0.9rem',
        fontWeight: '400'
    }

    return (
        <div className="section-content">
            <h2 className="section-title" style={{ color: '#FAF5F0' }}>學歷與工作經驗</h2>

            <p className="section-text" style={{ color: '#c6877d' }}>
                每一段經歷都是成長的養分，每一個故事都值得被記錄，回顧過去，我感謝每一次挑戰與機會。
            </p>

            <div style={containerStyle}>
                {/* 學歷欄 */}
                <div style={columnStyle}>
                    <h3 style={sectionTitleStyle}>
                        <img src="/icon-graduate.png" alt="" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                        Education
                    </h3>
                    <div style={timelineStyle}>
                        <div style={timelineLineStyle}></div>
                        {education.map((edu, index) => (
                            <div
                                className="timeline-item"
                                style={{
                                    ...timelineItemStyle,
                                    animation: `slideInAndFloat 2s ease forwards`,
                                    animationDelay: `${index * 0.3}s`
                                }}
                                key={index}
                            >
                                <div style={dotStyle}></div>
                                <div style={dateStyle}>{edu.date}</div>
                                <div style={titleStyle}>{edu.title}</div>
                                <div style={descStyle}>{edu.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 工作經驗欄 */}
                <div style={columnStyle}>
                    <h3 style={sectionTitleStyle}>
                        <img src="/icon-briefcase.png" alt="" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                        Experience
                    </h3>
                    <div style={timelineStyle}>
                        <div style={timelineLineStyle}></div>
                        {workExperience.map((work, index) => (
                            <div
                                className="timeline-item"
                                style={{
                                    ...timelineItemStyle,
                                    animation: `slideInAndFloat 2s ease forwards`,
                                    animationDelay: `${index * 0.2}s`
                                }}
                                key={index}
                            >
                                <div style={dotStyle}></div>
                                <div style={dateStyle}>{work.date}</div>
                                <div style={titleStyle}>{work.title}</div>
                                <div style={descStyle}>{work.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
