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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // 初始檢查

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
                        onClick={() => onNavigate(item.id)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </nav>
    )
}

export default Navbar
