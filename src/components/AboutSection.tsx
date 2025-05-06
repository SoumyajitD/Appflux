
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">About AppFlux</h2>
            <div className="w-20 h-1 bg-blue-500 mb-6"></div>
            <p className="text-gray-600 text-lg mb-6">
              AppFlux is a forward-thinking technology company founded in 2024. We specialize in creating exceptional digital experiences through innovative web and mobile applications.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              Our team of experienced developers, designers, and strategists work collaboratively to transform your ideas into reality. We combine technical expertise with creative thinking to deliver solutions that drive business growth.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-blue-500">10+</div>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-500">30+</div>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-500">5+</div>
                <p className="text-gray-600">Team Members</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-500">5+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
            <Button variant="default" className="mt-2">
              Meet Our Team <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
              <div className="aspect-w-16 aspect-h-9 bg-blue-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&h=500&q=80"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
