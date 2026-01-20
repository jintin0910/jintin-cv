import React from 'react'

function Hobbies() {
    const hobbies = [

        { bg: '/music.jpg', title: '音樂', desc: '享受音樂帶來的愉悅，在演唱會中感受到熱情與力量' },
        { bg: '/Exhibition.jpg', title: '展覽', desc: '在藝術中得到靈感與平靜，感受不同文化風格' },
        { bg: '/Traveling.jpg', title: '旅行', desc: '體驗各種風景，探索不同的冒險' }
    ]

    const featureItemStyle = (bgImage) => ({
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        borderRadius: '16px',
        padding: '2rem',
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden'
    })

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)',
        borderRadius: '16px'
    }

    const contentStyle = {
        position: 'relative',
        zIndex: 1
    }

    const titleStyle = {
        color: '#FFFFFF',
        fontSize: '1.3rem',
        fontWeight: '600',
        marginBottom: '0.5rem',
        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
    }

    const textStyle = {
        color: '#FFFFFF',
        fontSize: '0.95rem',
        opacity: 0.9,
        textShadow: '0 1px 3px rgba(0,0,0,0.3)'
    }

    return (
        <div className="section-content">
            <h2 className="section-title">生活是興趣與信念並存</h2>
            <div className="feature-grid" style={{ marginBottom: '2rem' }}>
                {hobbies.map((hobby, index) => (
                    <div style={featureItemStyle(hobby.bg)} key={index}>
                        <div style={overlayStyle}></div>
                        <div style={contentStyle}>
                            <h3 style={titleStyle}>{hobby.title}</h3>
                            <p style={textStyle}>{hobby.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <h3 className="section-title"> 而信念是一種魔法</h3>

            <p className="section-text">
                「聰明是一種天賦，善良是一種選擇。」   - Jeff Bezos<br />
                設計，正是一種對世界溫柔的選擇，我們運用所學的知識，創造友善的環境、解決問題，並讓生活變得更美好。<br />
                「壞事終止不了追求幸福的勇敢，當我們選擇勇敢就會發光。」  -IU<br />
                無論遇到什麼挑戰，我都會勇敢地追求目標，相信宇宙會有無形的力量支持著團隊，幫助大家發光發熱。
            </p>


        </div >
    )
}

export default Hobbies
