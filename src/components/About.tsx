'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* 3D Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-10 right-10 w-32 h-32 border border-slate-300/40 rotate-12 animate-float-slow"></div>
        <div className="absolute bottom-20 left-10 w-20 h-20 bg-gradient-to-br from-gray-200/50 to-slate-300/50 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 right-5 w-16 h-16 border-2 border-gray-400/30 rotate-45 animate-float-reverse"></div>
        <div className="absolute bottom-10 right-1/3 w-12 h-12 bg-slate-200/40 rotate-12 animate-float-fast"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-slate-600 to-gray-700 rounded-full mx-auto mb-8 md:mb-0 flex items-center justify-center relative overflow-hidden shadow-2xl">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-500/20 via-gray-600/20 to-slate-700/20 animate-pulse"></div>

                {/* Avatar content */}
                <div className="relative z-10 w-full h-full">
                  <Image
                    src="/images/profile.png"
                    alt="Gershon Agbashie - Graphic Designer"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover rounded-full"
                    onLoad={() => console.log('Profile image loaded successfully')}
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      console.log('Profile image failed to load, showing initials fallback')
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.nextElementSibling?.classList.remove('hidden')
                    }}
                  />
                  <div className="hidden w-full h-full flex items-center justify-center">
                    <div className="text-6xl font-bold text-white">
                      GA
                    </div>
                  </div>
                </div>

                {/* Orbiting elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-slate-300 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-gray-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-1/2 right-4 w-2 h-2 bg-slate-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I&apos;m a passionate graphic designer with over 5 years of experience
                creating visual identities that tell compelling stories. I specialize in
                transforming ideas into memorable designs that connect with audiences.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                When I&apos;m not designing, you&apos;ll find me exploring art galleries,
                experimenting with new creative techniques, or collaborating with
                brands to bring their vision to life through thoughtful design.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6 mb-8">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-slate-700">100+</div>
                  <div className="text-gray-600">Designs Created</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-700">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>

              {/* CV Download Card */}
              <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Professional Resume</h3>
                    <p className="text-sm text-gray-600">Download my complete CV with detailed experience and skills</p>
                  </div>
                  <a
                    href="/cv/saas app.pdf"
                    download="Gershon_Agbashie_CV.pdf"
                    className="bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors duration-200 font-medium flex items-center gap-2 group"
                  >
                    <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}