import React from 'react'

function Future() {
    const expectations = [
        {
            icon: '/icon-star.png',
            title: '持續成長',
            desc: '不斷學習新知識和技能，保持對世界的好奇心'
        },
        {
            icon: '/icon-rocket.png',
            title: '突破自我',
            desc: '挑戰舒適圈，勇於嘗試新事物，發掘更多可能'
        },
        {
            icon: '/icon-globe.png',
            title: '拓展視野',
            desc: '接觸不同領域，認識來自各地的朋友，開闊眼界'
        },
        {
            icon: '/icon-strength.png',
            title: '實現目標',
            desc: '腳踏實地，一步一步實現自己設定的目標'
        }
    ]

    return (
        <div className="section-content">
            <h2 className="section-title">未來期待</h2>

            <p className="section-text" style={{ color: '#FAF5F0' }}>
                對未來充滿期待與憧憬，我相信每一天都是新的開始。
                帶著熱情與決心，迎接即將到來的挑戰與機遇。
            </p>

            <div className="future-grid" style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap'
            }}>
                {expectations.map((item, index) => (
                    <div className="card" key={index} style={{ flex: '1', minWidth: '0', textAlign: 'center', background: 'transparent', boxShadow: 'none' }}>
                        <img src={item.icon} alt={item.title} style={{ width: '200px', height: '200px', objectFit: 'contain', marginBottom: '1rem' }} />
                        <h3 className="card-title">{item.title}</h3>
                        <p className="card-text">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Future
