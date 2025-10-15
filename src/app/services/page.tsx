import Link from 'next/link';
import Button from '@/components/Button';
import { Card, CardHeader, CardBody } from '@/components/Card';
import siteConfig from '../../../site.config.json';

export default function ServicesPage() {
  const serviceDetails = [
    {
      title: 'Apartment Cleaning',
      description: 'Complete cleaning services for apartments of all sizes, ensuring a spotless and comfortable living space.',
      features: ['Deep cleaning', 'Kitchen sanitization', 'Bathroom cleaning', 'Floor care']
    },
    {
      title: 'House Cleaning',
      description: 'Comprehensive house cleaning services tailored to your home\'s specific needs and layout.',
      features: ['All rooms cleaning', 'Interior windows', 'Carpet care', 'Appliance cleaning']
    },
    {
      title: 'Maid Service',
      description: 'Regular maid services to keep your home consistently clean and organized.',
      features: ['Weekly/monthly service', 'Custom schedules', 'Quality guarantee', 'Flexible pricing']
    },
    {
      title: 'Specialty Cleaning',
      description: 'Expert cleaning for specific areas and challenging cleaning tasks.',
      features: ['Move-in/move-out', 'Post-construction', 'Deep sanitization', 'Upholstery cleaning']
    },
    {
      title: 'Move In/Out Cleaning',
      description: 'Thorough cleaning services for transitions, ensuring your new space is move-in ready.',
      features: ['Complete deep clean', 'Appliance cleaning', 'Window cleaning', 'Floor restoration']
    },
    {
      title: 'Holiday Cleaning',
      description: 'Specialized cleaning services for holiday preparations and post-holiday cleanup.',
      features: ['Pre-holiday deep clean', 'Post-holiday cleanup', 'Decorative cleaning', 'Carpet refresh']
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-brand-500/20 to-accent-200/20">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-500/10 to-accent-200/10"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl sm:text-2xl text-muted-200 mb-8 max-w-3xl mx-auto">
            Professional cleaning services tailored to meet your specific needs
          </p>
        </div>
      </section>

      {/* Services Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-4">
              Services Gallery
            </h2>
            <p className="text-xl text-muted-200">
              From residential to commercial spaces, we provide exceptional cleaning services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceDetails.slice(0, 4).map((service, index) => {
              const serviceIcons = ['🏢', '👔', '🏠', '🚿'];
              const serviceImages = [
                { title: 'Office', icon: '🏢', bg: 'from-blue-500/20 to-blue-300/20' },
                { title: 'Laundry', icon: '👔', bg: 'from-green-500/20 to-green-300/20' },
                { title: 'House Cleaning', icon: '🏠', bg: 'from-purple-500/20 to-purple-300/20' },
                { title: 'Bathroom', icon: '🚿', bg: 'from-orange-500/20 to-orange-300/20' }
              ];
              
              const currentService = serviceImages[index] || serviceImages[0];
              
              return (
                <Card key={index} className="h-full text-center">
                  <CardHeader>
                    <div className={`w-full h-48 bg-gradient-to-br ${currentService.bg} rounded-lg mb-4 flex items-center justify-center relative overflow-hidden`}>
                      <span className="text-6xl z-10">{currentService.icon}</span>
                      {/* Decorative elements */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                      <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-semibold text-ink-900">
                      {currentService.title}
                    </h3>
                  </CardHeader>
                  <CardBody>
                    <p className="text-muted-200">
                      {currentService.title === 'Office' ? 'Keep your workplace spotless and organized' :
                       currentService.title === 'Laundry' ? 'Professional laundry cleaning and folding service' :
                       currentService.title === 'House Cleaning' ? 'Professional house cleaning service' :
                       'Professional bathroom cleaning service'}
                    </p>
                  </CardBody>
                </Card>
              );
            })}
          </div>

          {/* Additional Services */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-ink-900 text-center mb-8">
              Additional Specialized Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {siteConfig.additionalServices.map((service, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-full h-32 bg-gradient-to-br from-brand-500/20 to-accent-200/20 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-3xl">🏢</span>
                    </div>
                    <h4 className="text-lg font-semibold text-ink-900">
                      {service.title}
                    </h4>
                  </CardHeader>
                  <CardBody>
                    <p className="text-muted-200">{service.subtitle}</p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-ink-900 mb-4">
              Ready to Experience Exceptional Cleaning?
            </h3>
            <p className="text-muted-200 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your cleaning needs and receive a customized quote
              for our professional services.
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <Button size="lg">Get a Quote</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}