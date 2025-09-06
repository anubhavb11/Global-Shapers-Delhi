"use client";
import type { Metadata } from "next";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects, getAllCategories } from "../../data/projects";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", ...getAllCategories()];
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0D5392] mb-4">Our Projects</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the impactful initiatives we're leading to create positive change in Delhi and beyond. 
            Each project addresses critical challenges and creates lasting impact in our communities.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-[#0D5392] text-white"
                  : "bg-white text-[#0D5392] border border-[#0D5392] hover:bg-[#0D5392] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-[#0D5392]/10 to-[#0D5392]/5 flex items-center justify-center relative">
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
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#0D5392]/10 text-[#0D5392] px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'active' 
                      ? 'bg-green-100 text-green-700' 
                      : project.status === 'completed'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="font-bold text-xl text-[#0D5392] mb-3">{project.title}</h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.shortDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{project.sdg}</span>
                  <Link 
                    href={`/projects/${project.id}`}
                    className="text-[#0D5392] font-semibold hover:underline flex items-center gap-1"
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
} 