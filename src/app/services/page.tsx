import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button';
import { Card, CardHeader, CardBody } from '@/components/Card';

export default function ServicesPage() {

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-elizabeth-gradient-diagonal">
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            Our Services
          </h1>
          <p className="text-xl sm:text-2xl text-gray-800 mb-8 max-w-3xl mx-auto">
            Professional cleaning services tailored to meet your specific needs
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>
      </section>

      {/* Services Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Services Gallery
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              From residential to commercial spaces, we provide exceptional cleaning services
            </p>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Office',
                description: 'Keep your workplace spotless and organized',
                image: '/service/Oficina.jpeg',
                bg: 'var(--elizabeth-gradient-diagonal)'
              },
              {
                title: 'House Cleaning',
                description: 'Professional house cleaning service',
                image: '/service/habitacon3.jpeg',
                bg: 'var(--elizabeth-gradient-diagonal)'
              },
              {
                title: 'Bathroom',
                description: 'Professional bathroom cleaning service',
                image: '/service/bano_4.jpeg',
                bg: 'var(--elizabeth-gradient-diagonal)'
              }
            ].map((service, index) => (
              <Card key={index} className="h-full text-center">
                <CardHeader>
                  <div className="w-full h-48 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden border-2 border-red-600/20" style={{ backgroundColor: service.bg }}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover rounded-lg"
                      unoptimized
                    />
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-red-600/20 rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-black/10 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-black">
                    {service.title}
                  </h3>
                </CardHeader>
                <CardBody>
                  <p className="text-gray-700">
                    {service.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>

          {/* Additional Services */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-black text-center mb-4">
              Additional Specialized Services
            </h3>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Warehouse & Offices',
                  description: 'Keep your workplace spotless and organized',
                  image: '/service/almacen.jpeg',
                  bg: 'var(--elizabeth-gradient-diagonal)'
                },
                {
                  title: 'Windows',
                  description: 'Professional window cleaning',
                  image: '/service/deep.jpeg',
                  bg: 'var(--elizabeth-gradient-diagonal)'
                },
                {
                  title: 'Vacuuming',
                  description: 'Deep vacuum service',
                  image: '/service/aspirar.jpeg',
                  bg: 'var(--elizabeth-gradient-diagonal)'
                }
              ].map((service, index) => (
                <Card key={index} className="h-full text-center">
                  <CardHeader>
                    <div className="w-full h-48 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden border-2 border-red-600/20" style={{ backgroundColor: service.bg }}>
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover rounded-lg"
                        unoptimized
                      />
                      {/* Decorative elements */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-red-600/20 rounded-full"></div>
                      <div className="absolute bottom-4 left-4 w-6 h-6 bg-black/10 rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-semibold text-black">
                      {service.title}
                    </h3>
                  </CardHeader>
                  <CardBody>
                    <p className="text-gray-700">
                      {service.description}
                    </p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-elizabeth-gradient-diagonal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Join our satisfied clients and discover why Elizabeth&apos;s Cleaning Service
            is the trusted choice for exceptional cleaning services.
          </p>
          <div className="flex justify-center">
            <Link href="/contact">
              <Button variant="outline" size="lg" className="bg-black text-white border-black hover:bg-gray-800">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}