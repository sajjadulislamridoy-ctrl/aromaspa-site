'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Phone, MessageCircle, Mail, MapPin, Facebook, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

// Service data organized by categories with AI-generated images
const serviceCategories = {
  massage: {
    name: 'Massage Services',
    services: [
      {
        id: 1,
        name: 'Thai Massage',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663774431221/LT5ZWTzwr2FoeyCjZuGkmK/thai-massage-service-bi2CHZKp5FN5wMBofKKJwu.webp',
        pricing: [
          { duration: '60 Minutes', price: '৳ ২৫০০' },
          { duration: '90 Minutes', price: '৳ ৩৫০০' },
          { duration: '120 Minutes', price: '৳ ৪৫০০' }
        ]
      },
      {
        id: 2,
        name: 'Body Massage',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663774431221/LT5ZWTzwr2FoeyCjZuGkmK/body-massage-service-EocuoMpMg2sGnpyJDaqVzb.webp',
        pricing: [
          { duration: '60 Minutes', price: '৳ ২২০০' },
          { duration: '90 Minutes', price: '৳ ৩২০০' },
          { duration: '120 Minutes', price: '৳ ৪২০০' }
        ]
      },
      {
        id: 3,
        name: 'Hot Stone Massage',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663774431221/LT5ZWTzwr2FoeyCjZuGkmK/hot-stone-massage-service-YAfHrUBEQQoN2rVzMbq3wy.webp',
        pricing: [
          { duration: '60 Minutes', price: '৳ ২৭০০' },
          { duration: '90 Minutes', price: '৳ ৩৭০০' },
          { duration: '120 Minutes', price: '৳ ৪৭০০' }
        ]
      },
      {
        id: 4,
        name: 'Deep Tissue Massage',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663774431221/LT5ZWTzwr2FoeyCjZuGkmK/deep-tissue-massage-service-FBd5h8gtU2vcMjmDzJQAuf.webp',
        pricing: [
          { duration: '60 Minutes', price: '৳ ২৫০০' },
          { duration: '90 Minutes', price: '৳ ৩৫০০' },
          { duration: '120 Minutes', price: '৳ ৪৫০০' }
        ]
      },
      {
        id: 5,
        name: 'Dry Massage',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663774431221/LT5ZWTzwr2FoeyCjZuGkmK/dry-massage-service-EgkyEF8vE6txFVzFCYfRPX.webp',
        pricing: [
          { duration: '60 Minutes', price: '৳ ১৮০০' },
          { duration: '90 Minutes', price: '৳ ২৫০০' },
          { duration: '120 Minutes', price: '৳ ৩২০০' }
        ]
      },
      {
        id: 6,
        name: 'Back & Shoulder Massage',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663774431221/LT5ZWTzwr2FoeyCjZuGkmK/back-shoulder-massage-service-ANada9EiAwKnBUFnC3LNJ5.webp',
        pricing: [
          { duration: '60 Minutes', price: '৳ ২২০০' },
          { duration: '90 Minutes', price: '৳ ৩২০০' },
          { duration: '120 Minutes', price: '৳ ৪২০০' }
        ]
      },
      {
        id: 7,
        name: 'Oil Massage',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663774431221/LT5ZWTzwr2FoeyCjZuGkmK/oil-massage-service-Qu3okjJuJLTcxeZc6K3GvA.webp',
        pricing: [
          { duration: '60 Minutes', price: '৳ ২২০০' },
          { duration: '90 Minutes', price: '৳ ৩২০০' },
          { duration: '120 Minutes', price: '৳ ৪২০০' }
        ]
      },
      {
        id: 8,
        name: 'Four Hand Massage',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663774431221/LT5ZWTzwr2FoeyCjZuGkmK/four-hand-massage-service-9PUMeiNKSoRfX2KvorxNex.webp',
        pricing: [
          { duration: '60 Minutes', price: '৳ ৪০০০' },
          { duration: '90 Minutes', price: '৳ ৫৫০০' },
          { duration: '120 Minutes', price: '৳ ৭০০০' }
        ]
      },
      {
        id: 9,
        name: 'Aroma Oil Massage',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663774431221/LT5ZWTzwr2FoeyCjZuGkmK/aroma-oil-massage-service-RuA9V8ipmgxm6NHRKsQfuh.webp',
        pricing: [
          { duration: '60 Minutes', price: '৳ ২৭০০' },
          { duration: '90 Minutes', price: '৳ ৩৭০০' },
          { duration: '120 Minutes', price: '৳ ৪৭০০' }
        ]
      }
    ]
  },
  wellness: {
    name: 'Wellness & Therapy',
    services: [
      {
        id: 10,
        name: 'Aroma Therapy',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663774431221/LT5ZWTzwr2FoeyCjZuGkmK/aroma-therapy-service-HD7vEsc2gsaqoq5pJ7dDdU.webp',
        pricing: [
          { duration: '60 Minutes', price: '৳ ২০০০' },
          { duration: '90 Minutes', price: '৳ ৩০০০' },
          { duration: '120 Minutes', price: '৳ ৪০০০' }
        ]
      },
      {
        id: 11,
        name: 'Foot Reflexology',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663774431221/LT5ZWTzwr2FoeyCjZuGkmK/foot-reflexology-service-43Hy7a7JMEpG6LmW6Dob7q.webp',
        pricing: [
          { duration: '60 Minutes', price: '৳ ২০০০' },
          { duration: '90 Minutes', price: '৳ ৩০০০' },
          { duration: '120 Minutes', price: '৳ ৪০০০' }
        ]
      },
      {
        id: 12,
        name: 'Facial Treatment',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663774431221/LT5ZWTzwr2FoeyCjZuGkmK/facial-treatment-service-aK8yqpEBbdKs9DVoh9Z4MY.webp',
        pricing: [
          { duration: '60 Minutes', price: '৳ ২৫০০' },
          { duration: '90 Minutes', price: '৳ ৩৫০০' },
          { duration: '120 Minutes', price: '৳ ৪৫০০' }
        ]
      },
      {
        id: 13,
        name: 'Elegant Special Massage',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663774431221/LT5ZWTzwr2FoeyCjZuGkmK/elegant-special-massage-service-hTJ4ntL5RjPN8zYTdxWLWT.webp',
        pricing: [
          { duration: '60 Minutes', price: '৳ ৩২০০' },
          { duration: '90 Minutes', price: '৳ ৪৫০০' },
          { duration: '120 Minutes', price: '৳ ৫৮০০' }
        ]
      },
      {
        id: 14,
        name: 'Thai Traditional Massage',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663774431221/LT5ZWTzwr2FoeyCjZuGkmK/thai-traditional-massage-service-Z7hfv6M7Zgjh4KAQRhgabt.webp',
        pricing: [
          { duration: '60 Minutes', price: '৳ ২৫০০' },
          { duration: '90 Minutes', price: '৳ ৩৫০০' },
          { duration: '120 Minutes', price: '৳ ৪৫০০' }
        ]
      }
    ]
  }
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('massage');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const handleBooking = (serviceName: string) => {
    const message = `Hi, I'm interested in booking ${serviceName} at Aroma Spa Uttara. Please let me know available times.`;
    const whatsappUrl = `https://wa.me/8801780821112?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleQuickBooking = () => {
    const message = 'Hi, I would like to book an appointment at Aroma Spa Uttara. Please let me know available times.';
    const whatsappUrl = `https://wa.me/8801780821112?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const faqItems = [
    {
      id: 1,
      question: 'What are your operating hours?',
      answer: 'We are open from 10:00 AM to 10:00 PM, 7 days a week. You can book appointments anytime during these hours.'
    },
    {
      id: 2,
      question: 'Do I need to book in advance?',
      answer: 'While walk-ins are welcome, we recommend booking in advance to ensure your preferred time slot is available.'
    },
    {
      id: 3,
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, bKash, Nagad, Rocket, and card payments for your convenience.'
    },
    {
      id: 4,
      question: 'Are your therapists certified?',
      answer: 'Yes, all our therapists are professionally trained and certified in their respective massage and wellness techniques.'
    },
    {
      id: 5,
      question: 'Is there a cancellation policy?',
      answer: 'Cancellations made 24 hours before the appointment are free. Cancellations within 24 hours may incur a small fee.'
    }
  ];

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    "name": "Aroma Spa Uttara",
    "image": "https://aromaspauttara.com/logo.png",
    "url": "https://aromaspauttara.com",
    "telephone": "+8801780821112",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "House 29, Road 3/B, Sector 09",
      "addressLocality": "Uttara",
      "addressRegion": "Dhaka",
      "postalCode": "1230",
      "addressCountry": "BD"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.8759,
      "longitude": 90.3926
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "10:00",
      "closes": "22:00"
    }
  };

  return (
    <div className="w-full bg-white">
      <script type="application/ld+json">
        {JSON.stringify(localSchema)}
      </script>
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663774431221/LT5ZWTzwr2FoeyCjZuGkmK/hero-banner-5pmpKe6W4qykgycDebMVoH.webp" 
              alt="Aroma Spa Logo" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Aroma Spa Uttara</h1>
              <p className="text-xs text-gray-600">The Ultimate Massage & Wellness</p>
            </div>
          </div>
          <Button 
            onClick={handleQuickBooking}
            className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-6"
          >
            Book Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663774431221/LT5ZWTzwr2FoeyCjZuGkmK/hero-banner-5pmpKe6W4qykgycDebMVoH.webp)',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-4">Welcome to Aroma Spa Uttara</h2>
          <p className="text-xl mb-8">The Ultimate Massage and Wellness Experience</p>
          <Button 
            onClick={handleQuickBooking}
            className="bg-amber-500 hover:bg-amber-600 text-white text-lg px-8 py-6 rounded-full"
          >
            Book Your Appointment
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">About Aroma Spa Uttara</h2>
          <p className="text-lg text-gray-700 text-center leading-relaxed">
            At Aroma Spa Uttara, we believe that wellness is not a luxury but a necessity. Our mission is to provide professional, high-quality spa and massage services that are accessible to everyone. Located in the heart of Uttara, we create a serene sanctuary where you can escape the stress of daily life and rejuvenate your mind, body, and soul. Our team of certified therapists is dedicated to delivering exceptional service with personalized attention to every guest.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Services</h2>
          
          {/* Category Filter */}
          <div className="flex justify-center gap-4 mb-12">
            {Object.entries(serviceCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === key
                    ? 'bg-amber-500 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-200 to-transparent"></div>

            {serviceCategories[selectedCategory as keyof typeof serviceCategories].services.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
                  <div className="mb-6 bg-gray-50 rounded-lg p-4">
                    <table className="w-full text-sm">
                      <tbody>
                        {service.pricing.map((price, idx) => (
                          <tr key={idx} className={idx !== service.pricing.length - 1 ? 'border-b border-gray-200' : ''}>
                            <td className="py-2 text-gray-700">{price.duration}</td>
                            <td className="py-2 text-right font-semibold text-amber-600">{price.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <Button 
                    onClick={() => handleBooking(service.name)}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-lg"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === item.id ? null : item.id)}
                  className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{item.question}</span>
                  <ChevronDown className={`w-5 h-5 text-amber-500 transition-transform ${expandedFAQ === item.id ? 'rotate-180' : ''}`} />
                </button>
                {expandedFAQ === item.id && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-amber-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <a href="tel:+8801780821112" className="text-amber-600">+880 1780-821112</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MessageCircle className="w-6 h-6 text-amber-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                  <a href="https://wa.me/8801780821112" target="_blank" className="text-amber-600">Chat with us</a>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <MapPin className="w-6 h-6 text-amber-500 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Our Location</h3>
                <p className="text-gray-700">House 29, Road 3/B, Sector 09, Uttara, Dhaka 1230, Bangladesh</p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg h-64 border-4 border-white">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!4v1718991234567!6m8!1m7!1s3fsbetTn3MxV9x_DaAqVGg!2m2!1d23.8776263!2d90.399245!3f278.91!4f0!5f0.7820865974627469" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-6">&copy; 2024 Aroma Spa Uttara. All rights reserved.</p>
          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
