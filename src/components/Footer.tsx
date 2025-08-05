export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'Behance', url: 'https://behance.net', icon: '🎨' },
    { name: 'Dribbble', url: 'https://dribbble.com', icon: '🏀' },
    { name: 'Instagram', url: 'https://instagram.com', icon: '📸' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
    { name: 'Email', url: 'mailto:gersh.gbesh@gmail.com', icon: '📧' },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* 3D Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-8 left-16 w-24 h-24 border border-slate-400/30 rotate-45 animate-float-slow"></div>
        <div className="absolute top-4 right-20 w-18 h-18 bg-gradient-to-br from-gray-600/20 to-slate-500/20 rounded-full animate-float"></div>
        <div className="absolute bottom-8 left-8 w-20 h-20 border-2 border-gray-500/20 rotate-12 animate-float-delayed"></div>
        <div className="absolute bottom-4 right-12 w-16 h-16 bg-slate-600/20 rotate-45 animate-float-reverse"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Gershon Agbas</h3>
            <p className="text-gray-400 mb-6">
              Creative Graphic Designer passionate about bringing ideas to life through visual storytelling
            </p>

            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-slate-700 hover:transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                  title={link.name}
                >
                  <span className="text-xl">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © {currentYear} Gershon Agbashie. All rights reserved. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}