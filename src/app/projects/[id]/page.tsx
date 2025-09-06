"use client";
import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProjectById, Project } from "../../../data/projects";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProject = async () => {
      const { id } = await params;
      const projectData = getProjectById(id);
      setProject(projectData || null);
      setLoading(false);
    };
    loadProject();
  }, [params]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        <Link 
          href="/projects"
          className="inline-flex items-center gap-2 text-[#0D5392] hover:underline mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Project Header */}
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
                  parent.innerHTML = '<div class="text-[#0D5392] text-2xl font-semibold">Project Image</div>';
                }
              }}
            />
          </div>

          <div className="p-8">
            {/* Project Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-[#0D5392]/10 text-[#0D5392] px-4 py-2 rounded-full text-sm font-medium">
                {project.category}
              </span>
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                project.status === 'active' 
                  ? 'bg-green-100 text-green-700' 
                  : project.status === 'completed'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-yellow-100 text-yellow-700'
              }`}>
                {project.status}
              </span>
              <span className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium">
                {project.sdg}
              </span>
            </div>

            {/* Project Title */}
            <h1 className="text-4xl font-bold text-[#0D5392] mb-6">{project.title}</h1>

            {/* Project Description */}
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {project.longDescription}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* The Problem */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-[#0D5392] mb-4">The Problem We Saw</h2>
              <p className="text-gray-600 leading-relaxed">{project.problem}</p>
            </div>

            {/* Our Journey */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-[#0D5392] mb-4">Our Journey</h2>
              <p className="text-gray-600 leading-relaxed">{project.journey}</p>
            </div>

            {/* What We're Doing Now */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-[#0D5392] mb-4">What We&apos;re Doing Now</h2>
              <p className="text-gray-600 leading-relaxed">{project.currentWork}</p>
            </div>

            {/* The Impact */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-[#0D5392] mb-4">The Impact</h2>
              <p className="text-gray-600 leading-relaxed">{project.impact}</p>
            </div>

            {/* How You Can Support Us */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-[#0D5392] mb-4">How You Can Support Us</h2>
              <p className="text-gray-600 leading-relaxed">{project.support}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Metrics */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#0D5392] mb-4">Project Metrics</h3>
              <div className="space-y-4">
                {project.metrics.map((metric, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-600">{metric.label}</span>
                    <span className="font-semibold text-[#0D5392]">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Partners */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#0D5392] mb-4">Partners</h3>
              <div className="space-y-2">
                {project.partners.map((partner, index) => (
                  <div key={index} className="text-gray-600">• {partner}</div>
                ))}
              </div>
            </div>

            {/* Project Timeline */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#0D5392] mb-4">Timeline</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Started</span>
                  <span className="font-semibold">{new Date(project.startDate).toLocaleDateString()}</span>
                </div>
                {project.endDate && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Completed</span>
                    <span className="font-semibold">{new Date(project.endDate).toLocaleDateString()}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Team */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#0D5392] mb-4">Team</h3>
              <div className="space-y-2">
                {project.team.map((member, index) => (
                  <div key={index} className="text-gray-600">• {member}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#0D5392] mb-6 text-center">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <div key={index} className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <Image 
                    src={image} 
                    alt={`${project.title} - Image ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-400">Image not available</div>';
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
