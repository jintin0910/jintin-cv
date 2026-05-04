import React, { useState, useEffect } from 'react'

const navItems = [
    { id: 'about', label: '個人自我介紹' },
    { id: 'hobbies', label: '興趣愛好' },
    { id: 'experience', label: '過去經歷' },
    { id: 'future', label: '未來期待' },
    { id: 'plans', label: '半年內的發展計劃' }
]

function Navbar({ activeSection, onNavigate }) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // 選單開啟時鎖定 body 捲動
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isMenuOpen])

    const handleNavigate = (id) => {
        onNavigate(id)
        setIsMenuOpen(false)
    }

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
                <div className="navbar-container">
                    {/* 桌機版按鈕 */}
                    <div className="navbar-desktop">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
                                onClick={() => handleNavigate(item.id)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* 手機版：Logo + 漢堡 */}
                    <div className="navbar-mobile">
                        <span className="navbar-logo">Jintin</span>
                        <button
                            className="hamburger-btn"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="開啟選單"
                        >
                            {isMenuOpen ? '✕' : '☰'}
                        </button>
                    </div>
                </div>
            </nav>

            {/* 手機版展開選單 */}
            {isMenuOpen && (
                <div className="mobile-menu">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            className={`mobile-menu-item ${activeSection === item.id ? 'active' : ''}`}
                            onClick={() => handleNavigate(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </>
    )
}

export default Navbar
