import React from 'react';
import { CheckCircle, Award, Users, Zap, Target, TrendingUp } from 'lucide-react';

const ValueProposition = () => {
  const values = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "BIM Expertise",
      description: "15+ years of experience delivering successful BIM projects across construction, infrastructure, and facility management."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Construction-Focused",
      description: "We understand construction challenges and deliver BIM solutions tailored to your specific project requirements and workflows."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Our streamlined BIM processes ensure faster project delivery while maintaining the highest quality and accuracy standards."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results-Driven",
      description: "We focus on measurable outcomes that reduce costs, improve efficiency, and enhance project delivery success."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalable Solutions",
      description: "Future-proof BIM solutions that scale with your projects and adapt to evolving construction technologies."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "End-to-End Support",
      description: "From initial modeling to facility management, we provide comprehensive BIM support throughout the project lifecycle."
    }
  ];

  const stats = [
    { number: "500+", label: "BIM Projects", description: "Delivered across construction sectors" },
    { number: "98%", label: "Client Satisfaction", description: "Based on post-project surveys" },
    { number: "$50M+", label: "Cost Savings", description: "Through efficient BIM implementation" },
    { number: "24/7", label: "Support Available", description: "Dedicated support team" }
  ];

  return (
    <section id="why-feeldx" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Why Choose FeelDX?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're not just another BIM service provider. We're your strategic partner in construction technology, 
            committed to delivering exceptional BIM solutions that drive real project value.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-dark mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Value Propositions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Methodology Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-dark mb-6">
                Our BIM Methodology
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">Project Analysis</h4>
                    <p className="text-gray-600 text-sm">We analyze your project requirements and identify optimal BIM implementation strategies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">BIM Strategy & Planning</h4>
                    <p className="text-gray-600 text-sm">We develop a comprehensive BIM execution plan tailored to your project goals and timeline.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">Model Development</h4>
                    <p className="text-gray-600 text-sm">We create detailed BIM models with precision, ensuring seamless integration with your project workflow.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">Delivery & Support</h4>
                    <p className="text-gray-600 text-sm">We deliver comprehensive BIM models and provide ongoing support throughout the project lifecycle.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-dark">BIM Excellence</h4>
                  <p className="text-gray-600">
                    Our BIM methodology has been refined through hundreds of successful construction projects, 
                    ensuring predictable outcomes and exceptional quality.
                  </p>
                  <div className="pt-4">
                    <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors">
                      Learn More About Our BIM Process
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;