
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500&q=80",
    description: "A full-featured online store with payment integration and inventory management."
  },
  {
    id: 2,
    title: "Fitness Tracker App",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=500&q=80",
    description: "Mobile application tracking workouts, nutrition, and providing personalized plans."
  },
  {
    id: 3,
    title: "Real Estate Portal",
    category: "web",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=500&q=80",
    description: "Property listing website with advanced search and virtual tours."
  },
  {
    id: 4,
    title: "Food Delivery Service",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&h=500&q=80",
    description: "On-demand food ordering app with real-time delivery tracking."
  },
  {
    id: 5,
    title: "Healthcare Dashboard",
    category: "web",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500&q=80",
    description: "Analytics platform for healthcare providers to monitor patient data."
  },
  {
    id: 6,
    title: "Smart Home Controller",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=500&q=80",
    description: "IoT application for controlling home devices and automation systems."
  }
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Explore our portfolio of successful projects delivered for clients across various industries.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 text-sm font-medium transition-all rounded-l-lg ${filter === "all" ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter("web")}
              className={`px-6 py-2 text-sm font-medium transition-all ${filter === "web" ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}
            >
              Web Development
            </button>
            <button
              onClick={() => setFilter("mobile")}
              className={`px-6 py-2 text-sm font-medium transition-all rounded-r-lg ${filter === "mobile" ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}
            >
              Mobile Apps
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group">
              <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                  <div className="mt-4">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded ${project.category === "web" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"}`}>
                      {project.category === "web" ? "Web Development" : "Mobile App"}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
