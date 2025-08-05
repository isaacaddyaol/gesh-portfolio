export default function Projects() {
  const projects = [
    {
      title: "Bloom Coffee Brand Identity",
      description: "Complete brand identity design for a premium coffee roastery, including logo, packaging, and marketing materials with a focus on sustainability.",
      image: "/api/placeholder/400/250",
      technologies: ["Brand Identity", "Logo Design", "Packaging", "Print Design"],
      liveUrl: "#",
      behanceUrl: "#",
      featured: true
    },
    {
      title: "TechStart Mobile App UI",
      description: "Modern mobile app interface design for a fintech startup, featuring clean layouts, intuitive navigation, and engaging user experience.",
      image: "/api/placeholder/400/250",
      technologies: ["UI Design", "Mobile Design", "Figma", "Prototyping"],
      liveUrl: "#",
      behanceUrl: "#",
      featured: true
    },
    {
      title: "Artisan Magazine Layout",
      description: "Editorial design for a quarterly arts and culture magazine, showcasing creative typography and dynamic layouts that enhance storytelling.",
      image: "/api/placeholder/400/250",
      technologies: ["Editorial Design", "Typography", "InDesign", "Print"],
      liveUrl: "#",
      behanceUrl: "#",
      featured: false
    },
    {
      title: "Eco-Friendly Product Packaging",
      description: "Sustainable packaging design series for organic skincare products, emphasizing natural materials and minimalist aesthetic.",
      image: "/api/placeholder/400/250",
      technologies: ["Packaging Design", "Sustainability", "Illustration"],
      liveUrl: "#",
      behanceUrl: "#",
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      {/* 3D Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-25">
        <div className="absolute top-32 left-16 w-28 h-28 border-2 border-slate-300/40 rotate-12 animate-float-slow"></div>
        <div className="absolute top-20 right-20 w-22 h-22 bg-gradient-to-br from-gray-200/40 to-slate-300/40 rounded-full animate-float"></div>
        <div className="absolute bottom-40 left-8 w-16 h-16 border border-gray-400/30 rotate-45 animate-float-delayed"></div>
        <div className="absolute bottom-20 right-12 w-24 h-24 bg-slate-200/30 rotate-12 animate-float-reverse"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 border-2 border-slate-400/30 rounded-full animate-spin-slow"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 relative">
                {/* 3D card effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-400/50 to-gray-500/50"></div>
                <div className="h-48 bg-gradient-to-br from-slate-600 to-gray-700 flex items-center justify-center">
                  <div className="text-white text-lg font-medium">Project Image</div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="bg-slate-100 text-slate-800 text-xs px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex-1 bg-slate-700 text-white text-center py-2 px-4 rounded-lg hover:bg-slate-800 transition-colors duration-200"
                    >
                      View Project
                    </a>
                    <a
                      href={project.behanceUrl}
                      className="flex-1 border-2 border-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg hover:border-gray-400 transition-colors duration-200"
                    >
                      Behance
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-block bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium"
            >
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}