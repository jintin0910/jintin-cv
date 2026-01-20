import { useState, useEffect } from 'react'
import './App.css'
import './Mobile.css'
import Navbar from './components/Navbar'
import AboutMe from './sections/AboutMe'
import Hobbies from './sections/Hobbies'
import Experience from './sections/Experience'
import Future from './sections/Future'
import Plans from './sections/Plans'
import WaveDivider from './components/WaveDivider'

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)

  // 載入效果
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 300)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'hobbies', 'experience', 'future', 'plans']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 滾動動畫偵測
  useEffect(() => {
    if (isLoading) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.1 }
    )

    const sections = document.querySelectorAll('.section')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [isLoading])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // 載入畫面
  if (isLoading) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, #FDE8E8 0%, #E8B4B8 50%, #D4B8E0 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999
      }}>
        <div style={{
          animation: 'flip 1.5s ease-in-out infinite',
          perspective: '1000px'
        }}>
          <img
            src="/icon.svg"
            alt="Loading"
            style={{
              width: '120px',
              height: '120px',
              filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 1)) drop-shadow(0 0 30px rgba(255, 240, 180, 0.9)) drop-shadow(0 0 50px rgba(255, 220, 120, 0.7)) drop-shadow(0 0 70px rgba(255, 180, 180, 0.5))',
              animation: 'glow 1.5s ease-in-out infinite alternate'
            }}
          />
        </div>
        <div style={{
          marginTop: '2rem',
          fontSize: '1.5rem',
          fontWeight: '600',
          color: '#5D3A1A'
        }}>
          {Math.min(Math.round(loadingProgress), 100)}%
        </div>
        <div style={{
          marginTop: '1rem',
          width: '200px',
          height: '4px',
          background: 'rgba(255,255,255,0.5)',
          borderRadius: '2px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${Math.min(loadingProgress, 100)}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #E8B4B8, rgb(207, 85, 64))',
            transition: 'width 0.15s ease-out',
            borderRadius: '2px'
          }}></div>
        </div>
        <style>{`
          @keyframes flip {
            0% { transform: rotateY(0deg); }
            50% { transform: rotateY(180deg); }
            100% { transform: rotateY(360deg); }
          }
          @keyframes glow {
            0% { filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 30px rgba(255, 240, 180, 0.6)) drop-shadow(0 0 50px rgba(255, 220, 120, 0.4)); }
            100% { filter: drop-shadow(0 0 25px rgba(255, 255, 255, 1)) drop-shadow(0 0 50px rgba(255, 240, 180, 1)) drop-shadow(0 0 80px rgba(255, 220, 120, 0.8)) drop-shadow(0 0 100px rgba(255, 180, 180, 0.6)); }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="app">
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} isScrolled={window.scrollY > 50} />

      <main className="main-content">
        <section id="about" className="section section--cream">
          <AboutMe />
          <WaveDivider color="#FDE8E8" />
        </section>

        <section id="hobbies" className="section section--pink">
          <Hobbies />
          <WaveDivider color="#B5D5D0" />
        </section>

        <section id="experience" className="section section--teal">
          <Experience />
          <WaveDivider color="#DEC6CB" />
        </section>

        <section id="future" className="section section--dark">
          <Future />
          <WaveDivider color="#FAF5F0" />
        </section>

        <section id="plans" className="section section--gradient">
          <Plans />
        </section>
      </main>
    </div>
  )
}

export default App
