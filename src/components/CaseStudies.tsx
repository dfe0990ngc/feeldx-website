import React from 'react';
import { ArrowRight, Building, Clock, DollarSign } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "High-Rise Commercial Complex",
      client: "Major Construction Firm",
      industry: "Commercial Construction",
      challenge: "Complex MEP coordination and clash detection for 50-story building",
      solution: "Comprehensive 3D 4D 5D BIM implementation with real-time collaboration platform",
      results: [
        { metric: "95%", description: "Clash reduction achieved" },
        { metric: "$3.2M", description: "Cost savings from early detection" },
        { metric: "40%", description: "Faster project delivery" }
      ],
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["3D BIM", "4D Scheduling", "5D Cost Management"]
    },
    {
      title: "Infrastructure Bridge Project",
      client: "Government Infrastructure Agency",
      industry: "Infrastructure",
      challenge: "Complex bridge design requiring precise structural coordination and visualization",
      solution: "Advanced 3D modeling with multimedia visualization and 4D construction sequencing",
      results: [
        { metric: "100%", description: "Design accuracy achieved" },
        { metric: "30%", description: "Reduced construction time" },
        { metric: "$1.5M", description: "Budget optimization" }
      ],
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Infrastructure BIM", "3D Modeling", "Visualization"]
    },
    {
      title: "Hospital Facility Management",
      client: "Healthcare Facility Group",
      industry: "Healthcare Construction",
      challenge: "Complex MEP systems requiring long-term facility management integration",
      solution: "7D BIM implementation with comprehensive facility management database",
      results: [
        { metric: "60%", description: "Maintenance efficiency improvement" },
        { metric: "25%", description: "Operational cost reduction" },
        { metric: "90%", description: "Asset tracking accuracy" }
      ],
      image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["7D BIM", "Facility Management", "Healthcare"]
    }
  ];

  const clientLogos = [
    { name: "Skanska", logo: "SK" },
    { name: "Turner Construction", logo: "TC" },
    { name: "Bechtel", logo: "BE" },
    { name: "AECOM", logo: "AE" },
    { name: "Fluor Corporation", logo: "FL" },
    { name: "Jacobs Engineering", logo: "JE" }
  ];

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            BIM Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how we've helped construction companies and infrastructure projects achieve their BIM goals 
            and drive measurable project success through our innovative solutions.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16 mb-20">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {study.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-dark">
                    {study.title}
                  </h3>
                  <p className="text-primary font-medium">
                    {study.client} • {study.industry}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Challenge</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Solution</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 p-6 bg-gray-50 rounded-xl">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">
                        {result.metric}
                      </div>
                      <div className="text-sm text-gray-600">
                        {result.description}
                      </div>
                    </div>
                  ))}
                </div>

                <button className="group flex items-center space-x-2 text-primary font-medium hover:text-secondary transition-colors">
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl transform rotate-3"></div>
                  <img 
                    src={study.image}
                    alt={study.title}
                    className="relative rounded-2xl shadow-xl w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="border-t border-gray-200 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-xl font-semibold text-dark mb-4">
              Trusted by Construction Industry Leaders
            </h3>
            <p className="text-gray-600">
              We're proud to partner with leading construction companies, engineering firms, and infrastructure developers worldwide
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">{client.logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Construction Projects?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Join the ranks of successful construction companies that have revolutionized their projects with FeelDX BIM solutions. 
              Let's discuss how we can help you achieve similar results.
            </p>
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Your BIM Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;