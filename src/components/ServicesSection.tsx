
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Monitor, Layout, Zap, Users } from 'lucide-react';

const services = [
  {
    icon: <Code className="h-10 w-10 text-blue-500" />,
    title: "Web Development",
    description: "We build responsive, fast-loading websites optimized for search engines and user experience."
  },
  {
    icon: <Smartphone className="h-10 w-10 text-blue-500" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android with seamless performance."
  },
  {
    icon: <Monitor className="h-10 w-10 text-blue-500" />,
    title: "UI/UX Design",
    description: "User-centered design approach focusing on creating intuitive and engaging digital experiences."
  },
  {
    icon: <Layout className="h-10 w-10 text-blue-500" />,
    title: "Custom CMS Solutions",
    description: "Tailored content management systems that make updating your digital content simple."
  },
  {
    icon: <Zap className="h-10 w-10 text-blue-500" />,
    title: "Performance Optimization",
    description: "Speed up your existing applications with our performance tuning and optimization expertise."
  },
  {
    icon: <Users className="h-10 w-10 text-blue-500" />,
    title: "Consultation & Strategy",
    description: "Expert advice on digital strategy, technology selection, and implementation roadmaps."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            We specialize in creating cutting-edge digital solutions that help businesses thrive in the digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 bg-blue-500 h-full transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
              <CardHeader className="pb-4">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl group-hover:text-blue-500 transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
