import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      name: "Michael Rodriguez",
      title: "Project Director",
      company: "Turner Construction",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "FeelDX's BIM solutions transformed our construction process. Their 3D 4D 5D implementation resulted in 95% clash reduction and $3.2M in cost savings. The team's construction expertise and attention to detail exceeded all our expectations.",
      project: "High-Rise Commercial BIM"
    },
    {
      name: "Sarah Chen",
      title: "Chief Engineer",
      company: "AECOM Infrastructure",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Working with FeelDX was a game-changer for our infrastructure projects. They didn't just deliver BIM models; they became true partners in our construction journey. Their multimedia visualization helped us secure project approval 40% faster.",
      project: "Bridge Infrastructure BIM"
    },
    {
      name: "Dr. James Wilson",
      title: "Facilities Director",
      company: "Healthcare Facilities Group",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The 7D BIM solution FeelDX built for us revolutionized how we manage our healthcare facilities. We've seen a 60% improvement in maintenance efficiency and 25% reduction in operational costs. Their understanding of facility management is exceptional.",
      project: "Hospital Facility Management BIM"
    },
    {
      name: "David Thompson",
      title: "Construction Manager",
      company: "Skanska Construction",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "FeelDX helped us modernize our entire construction workflow. The BIM coordination platform they developed seamlessly integrated our design and construction phases, resulting in unprecedented project efficiency and quality.",
      project: "Integrated Construction BIM"
    },
    {
      name: "Lisa Wang",
      title: "BIM Manager",
      company: "Bechtel Corporation",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The BIM consulting and implementation services from FeelDX were exactly what we needed. They guided us through every step of our BIM transformation, and the results speak for themselves - 40% faster project delivery.",
      project: "Enterprise BIM Implementation"
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextTestimonial();
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToTestimonial = (index: number) => {
    if (isAnimating || index === currentTestimonial) return;
    setIsAnimating(true);
    setCurrentTestimonial(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const currentTest = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the leaders who have experienced 
            the transformative power of our solutions firsthand.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden transition-colors duration-300">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-primary" />
            </div>

            <div className={`grid md:grid-cols-3 gap-8 items-center transition-all duration-500 ease-in-out ${
              isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
            }`}>
              {/* Client Photo */}
              <div className="text-center">
                <img 
                  src={currentTest.image}
                  alt={currentTest.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                />
                <div className="flex justify-center mb-3">
                  {[...Array(currentTest.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-dark dark:text-white">{currentTest.name}</h3>
                <p className="text-primary font-medium">{currentTest.title}</p>
                <p className="text-gray-600 dark:text-gray-300">{currentTest.company}</p>
                <div className="mt-3 px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary text-sm rounded-full inline-block">
                  {currentTest.project}
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="md:col-span-2">
                <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed italic mb-6">
                  "{currentTest.text}"
                </blockquote>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button 
                onClick={prevTestimonial}
                disabled={isAnimating}
                className="w-12 h-12 bg-primary/10 dark:bg-primary/20 hover:bg-primary hover:text-white text-primary rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    disabled={isAnimating}
                    className={`w-3 h-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                      index === currentTestimonial ? 'bg-primary w-8' : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={nextTestimonial}
                disabled={isAnimating}
                className="w-12 h-12 bg-primary/10 dark:bg-primary/20 hover:bg-primary hover:text-white text-primary rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 transition-transform duration-300 hover:scale-110"
                />
                <div>
                  <h4 className="font-semibold text-dark dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                "{testimonial.text.substring(0, 120)}..."
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                <span className="text-xs text-primary font-medium bg-primary/10 dark:bg-primary/20 px-2 py-1 rounded">
                  {testimonial.project}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary animate-pulse">98%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary animate-pulse">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">BIM Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary animate-pulse">15+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary animate-pulse">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;