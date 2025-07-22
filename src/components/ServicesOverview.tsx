import React from 'react';
import { Building, Layers, Eye, Calendar, DollarSign, Shield } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "3D BIM Modeling",
      description: "Comprehensive 3D Building Information Modeling services that create detailed digital representations of your construction projects.",
      features: ["Architectural Modeling", "MEP Coordination", "Structural Design"]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "4D Project Scheduling",
      description: "Time-based BIM solutions that integrate project schedules with 3D models for enhanced project planning and visualization.",
      features: ["Timeline Integration", "Progress Tracking", "Schedule Optimization"]
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "5D Cost Management",
      description: "Advanced cost estimation and budget control through integrated BIM models with real-time cost analysis.",
      features: ["Cost Estimation", "Budget Tracking", "Value Engineering"]
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "7D Facility Management",
      description: "Lifecycle BIM solutions that support facility management and maintenance throughout the building's operational phase.",
      features: ["Asset Management", "Maintenance Planning", "Lifecycle Analysis"]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Multimedia Visualization",
      description: "High-quality 3D renderings, animations, and virtual reality experiences that bring your projects to life.",
      features: ["3D Rendering", "VR Walkthroughs", "Animation Services"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Project Control Solutions",
      description: "Advanced project management and control systems that ensure projects stay on time, within budget, and meet quality standards.",
      features: ["Quality Control", "Risk Management", "Progress Monitoring"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Our BIM Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive BIM services and smart solutions for the construction industry, 
            including multimedia visualization and project management solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl p-8 border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-dark group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="pt-4">
                  <button className="text-primary font-medium text-sm hover:text-secondary transition-colors group-hover:underline">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">
              Ready to Revolutionize Your Construction Projects?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our BIM services and construction technology solutions can help you 
              deliver projects more efficiently and cost-effectively.
            </p>
            <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get BIM Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;