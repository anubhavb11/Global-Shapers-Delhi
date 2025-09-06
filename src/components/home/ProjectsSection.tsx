"use client";
import Link from "next/link";
import Image from "next/image";
import { getFeaturedProjects } from "../../data/projects";

export default function ProjectsSection() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 bg-white flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0D5392] mb-4 text-center">Our Projects</h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Discover the impactful initiatives we&apos;re leading to create positive change in Delhi and beyond.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {featuredProjects.map((project) => (
            <div key={project.id} className="flex flex-col bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full aspect-video bg-gradient-to-br from-[#0D5392]/10 to-[#0D5392]/5 flex items-center justify-center relative">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="text-[#0D5392] text-lg font-semibold">Project Image</div>';
                    }
                  }}
                />
              </div>
              
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[#0D5392]/10 text-[#0D5392] px-2 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'active' 
                      ? 'bg-green-100 text-green-700' 
                      : project.status === 'completed'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="font-semibold text-lg text-[#0D5392] mb-3">{project.title}</h3>
                
                <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-grow">
                  {project.shortDescription}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  href={`/projects/${project.id}`}
                  className="bg-[#0D5392] text-white px-4 py-2 rounded font-semibold text-sm hover:bg-[#08305c] transition text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 bg-white border-2 border-[#0D5392] text-[#0D5392] px-6 py-3 rounded-lg font-semibold hover:bg-[#0D5392] hover:text-white transition-colors"
          >
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 