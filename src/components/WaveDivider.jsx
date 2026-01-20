import React from 'react'

function WaveDivider({ color = '#FFFFFF', flip = false }) {
    return (
        <div className={`wave-divider ${flip ? 'wave-divider--top' : ''}`}>
            <svg
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Cloud shape layer 1 */}
                <path
                    d="M0,120 C50,100 100,80 150,90 C200,100 250,60 300,70 C350,80 400,50 450,60 C500,70 550,40 600,50 C650,60 700,30 750,40 C800,50 850,20 900,30 C950,40 1000,10 1050,20 C1100,30 1150,0 1200,10 L1200,120 L0,120 Z"
                    fill={color}
                    opacity=".25"
                />
                {/* Cloud shape layer 2 */}
                <path
                    d="M0,120 C80,90 120,70 180,85 C240,100 280,55 340,65 C400,75 440,45 500,55 C560,65 600,35 660,45 C720,55 760,25 820,35 C880,45 920,15 980,25 C1040,35 1080,5 1140,15 C1200,25 1200,120 1200,120 L0,120 Z"
                    fill={color}
                    opacity=".5"
                />
                {/* Cloud shape layer 3 - main */}
                <path
                    d="M0,120 C60,95 100,75 160,88 C220,101 260,60 320,72 C380,84 420,48 480,58 C540,68 580,38 640,48 C700,58 740,28 800,38 C860,48 900,18 960,28 C1020,38 1060,8 1120,18 C1180,28 1200,120 1200,120 L0,120 Z"
                    fill={color}
                />
            </svg>
        </div>
    )
}

export default WaveDivider
