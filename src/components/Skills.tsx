export default function Skills() {
  const skillCategories = [
    {
      title: "Design Software",
      skills: [
        { name: "Adobe Photoshop", level: 95 },
        { name: "Adobe Illustrator", level: 90 },
        { name: "Adobe InDesign", level: 85 },
        { name: "Figma", level: 88 },
        { name: "Sketch", level: 80 },
      ]
    },
    {
      title: "Design Specialties",
      skills: [
        { name: "Brand Identity", level: 92 },
        { name: "Logo Design", level: 90 },
        { name: "Print Design", level: 85 },
        { name: "Web Design", level: 80 },
        { name: "Packaging Design", level: 75 },
      ]
    },
    {
      title: "Creative Skills",
      skills: [
        { name: "Typography", level: 90 },
        { name: "Color Theory", level: 88 },
        { name: "Layout Design", level: 85 },
        { name: "Illustration", level: 78 },
        { name: "Photography", level: 70 },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* 3D Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-20 w-24 h-24 border border-slate-400/40 rotate-45 animate-float"></div>
        <div className="absolute top-40 right-10 w-18 h-18 bg-gradient-to-br from-gray-300/30 to-slate-400/30 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-30 left-10 w-14 h-14 border-2 border-gray-500/30 rotate-12 animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-slate-300/30 rotate-45 animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 w-10 h-10 border border-slate-300/40 rounded-full animate-spin-slow"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                {/* Card 3D effect */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-slate-100/50 to-gray-200/50 rounded-full -translate-y-10 translate-x-10 opacity-30"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-slate-600 to-gray-700 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}