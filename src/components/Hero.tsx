'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Portfolio images - using Unsplash for reliable access
  const portfolioImages = [
    {
      url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&crop=center",
      title: "Brand Identity Design",
      category: "Branding"
    },
    {
      url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center",
      title: "Mobile App UI",
      category: "UI/UX"
    },
    {
      url: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop&crop=center",
      title: "Print Design",
      category: "Print"
    },
    {
      url: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop&crop=center",
      title: "Logo Collection",
      category: "Logo Design"
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % portfolioImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, portfolioImages.length])

  const nextImage = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentImageIndex((prev) => (prev + 1) % portfolioImages.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAnimating(false), 800)
  }

  const prevImage = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentImageIndex((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAnimating(false), 800)
  }

  const goToImage = (index: number) => {
    if (isAnimating || index === currentImageIndex) return
    setIsAnimating(true)
    setCurrentImageIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAnimating(false), 800)
  }

  // Touch/Mouse drag handlers
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true)
    setIsAutoPlaying(false)
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    setDragOffset(clientX)
  }

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const diff = clientX - dragOffset
    // Limit drag distance for smoother interaction
    const maxDrag = 80
    const limitedDiff = Math.max(-maxDrag, Math.min(maxDrag, diff))
    setDragOffset(limitedDiff)
  }

  const handleDragEnd = () => {
    if (!isDragging) return
    setIsDragging(false)

    const threshold = 40
    if (dragOffset > threshold) {
      prevImage()
    } else if (dragOffset < -threshold) {
      nextImage()
    }

    setDragOffset(0)
  }
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100 pt-20 relative overflow-hidden">
      {/* Floating 3D geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-slate-400/30 rotate-45 animate-float shadow-lg"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-gray-500/30 rounded-full animate-float-delayed shadow-lg"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-slate-500/20 to-gray-600/20 rotate-12 animate-float-slow shadow-lg"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-slate-600/30 rotate-45 animate-float-reverse shadow-lg"></div>
        <div className="absolute top-1/2 left-5 w-8 h-8 bg-slate-400/20 rounded-full animate-float-fast shadow-md"></div>
        <div className="absolute top-1/3 right-5 w-14 h-14 border border-gray-400/40 rotate-12 animate-float shadow-md"></div>

        {/* Additional 3D elements */}
        <div className="absolute top-60 left-1/4 w-6 h-6 bg-gradient-to-br from-slate-300/30 to-gray-400/30 transform rotate-45 animate-pulse"></div>
        <div className="absolute bottom-60 right-1/4 w-10 h-10 border border-slate-500/25 rounded-full animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Hi, I&apos;m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-gray-800">
                Gershon Agbashie
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Creative Graphic Designer specializing in brand identity,
              visual storytelling, and bringing ideas to life through design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <a
                href="#projects"
                className="bg-slate-700 text-white px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors duration-200 font-medium"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border-2 border-slate-700 text-slate-700 px-8 py-3 rounded-lg hover:bg-slate-700 hover:text-white transition-colors duration-200 font-medium"
              >
                Let&apos;s Collaborate
              </a>
            </div>

            {/* CV Download Button */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="/cv/saas app.pdf"
                download="Gershon_Agbashie_CV.pdf"
                className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors duration-200 group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="font-medium">Download CV</span>
              </a>
            </div>
          </div>

          {/* Right side - Swipeable Card Stack */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-96 perspective-1000">
              {/* Card Stack Container */}
              <div
                className="relative w-full h-full cursor-grab active:cursor-grabbing"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => {
                  setIsAutoPlaying(true)
                  handleDragEnd()
                }}
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
              >
                {/* Render multiple cards for stack effect */}
                {portfolioImages.map((image, index) => {
                  const isActive = index === currentImageIndex
                  const isPrev = index === (currentImageIndex - 1 + portfolioImages.length) % portfolioImages.length
                  const isNext = index === (currentImageIndex + 1) % portfolioImages.length

                  let cardStyle = {}
                  let zIndex = 0
                  let opacity = 0

                  if (isActive) {
                    zIndex = 30
                    opacity = 1
                    cardStyle = {
                      transform: `translateX(${dragOffset}px) rotateZ(${dragOffset * 0.05}deg) scale(${isDragging ? 0.98 : 1})`,
                      transition: isDragging ? 'none' : 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }
                  } else if (isPrev) {
                    zIndex = 20
                    opacity = 0.8
                    cardStyle = {
                      transform: 'translateX(-15px) rotateZ(-2deg) scale(0.97)',
                      transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }
                  } else if (isNext) {
                    zIndex = 20
                    opacity = 0.8
                    cardStyle = {
                      transform: 'translateX(15px) rotateZ(2deg) scale(0.97)',
                      transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }
                  } else {
                    zIndex = 10
                    opacity = 0.5
                    cardStyle = {
                      transform: `translateX(${Math.random() * 20 - 10}px) rotateZ(${Math.random() * 4 - 2}deg) scale(0.94)`,
                      transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }
                  }

                  return (
                    <div
                      key={index}
                      className="absolute inset-0 bg-white rounded-2xl shadow-2xl overflow-hidden"
                      style={{
                        ...cardStyle,
                        zIndex,
                        opacity,
                        pointerEvents: isActive ? 'auto' : 'none'
                      }}
                    >
                      <div className="relative w-full h-full">
                        <div className="w-full h-3/4 bg-gray-100 flex items-center justify-center overflow-hidden relative">
                          <Image
                            src={image.url}
                            alt={image.title}
                            width={400}
                            height={300}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none'
                              e.currentTarget.nextElementSibling?.classList.remove('hidden')
                            }}
                          />
                          <div className="hidden absolute inset-0 bg-gradient-to-br from-slate-600 to-gray-700 flex items-center justify-center">
                            <div className="text-white text-lg font-medium">
                              {image.title}
                            </div>
                          </div>
                        </div>

                        {/* Card Info */}
                        <div className="p-4 h-1/4 flex flex-col justify-center">
                          <h3 className="font-semibold text-gray-900 text-sm mb-1">
                            {image.title}
                          </h3>
                          <p className="text-gray-600 text-xs">
                            {image.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-105 transition-all duration-300 ease-out z-40"
                  disabled={isAnimating}
                >
                  <span className="text-slate-700 text-lg">‹</span>
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-105 transition-all duration-300 ease-out z-40"
                  disabled={isAnimating}
                >
                  <span className="text-slate-700 text-lg">›</span>
                </button>

                {/* Dots Indicator */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-40">
                  {portfolioImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-500 ease-out hover:scale-110 ${index === currentImageIndex
                        ? 'bg-slate-700 scale-105'
                        : 'bg-slate-400 hover:bg-slate-600'
                        }`}
                      disabled={isAnimating}
                    />
                  ))}
                </div>

                {/* Swipe Hint */}
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-xs text-gray-500 text-center">
                  Swipe or drag to navigate
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-[-200] left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}