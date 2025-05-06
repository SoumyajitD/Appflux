
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Smartphone, Monitor } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 min-h-screen flex items-center bg-hero-pattern">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="lg:w-1/2 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Building <span className="text-blue-500">exceptional</span> digital experiences
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              AppFlux is your partner for creating stunning applications and websites with a focus on user experience and modern technologies.
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <Button size="lg" className="text-base px-8">
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8">
                Our Services
              </Button>
            </div>
            
            <div className="mt-12 flex items-center space-x-4">
              <span className="text-gray-500">Trusted by leading companies</span>
              <div className="flex space-x-6">
                <div className="h-8 w-16 bg-gray-200 rounded opacity-50"></div>
                <div className="h-8 w-16 bg-gray-200 rounded opacity-50"></div>
                <div className="h-8 w-16 bg-gray-200 rounded opacity-50"></div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end animate-fade-in animation-delay-200">
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-200"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-400"></div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-6 backdrop-blur-sm bg-opacity-80 border border-gray-100 animate-float">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-500">app_development.js</div>
                  </div>
                  <div className="space-y-2">
                    <div className="rounded bg-gray-100 p-2">
                      <code className="text-xs text-blue-600">import {"{"} AppFlux {"}"} from 'appflux';</code>
                    </div>
                    <div className="rounded bg-gray-100 p-2">
                      <code className="text-xs text-purple-600">const app = new AppFlux();</code>
                    </div>
                    <div className="rounded bg-gray-100 p-2">
                      <code className="text-xs text-green-600">
                        app.createProject({"{"}
                        <br />
                        {"  "}name: 'Amazing App',
                        <br />
                        {"  "}client: 'Your Business'
                        <br />
                        {"}"});
                      </code>
                    </div>
                    <div className="rounded bg-gray-100 p-2">
                      <code className="text-xs text-orange-600">app.launch();</code>
                    </div>
                    <div className="flex justify-end">
                      <div className="px-3 py-1 text-xs bg-blue-500 text-white rounded-full">Running...</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-wave-pattern bg-bottom bg-repeat-x"></div>
    </section>
  );
};

export default HeroSection;
