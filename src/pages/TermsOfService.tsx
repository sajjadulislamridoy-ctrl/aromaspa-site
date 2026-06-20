import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        <p className="text-gray-600 mb-4">Last Updated: June 21, 2026</p>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Acceptance of Terms</h2>
          <p className="text-gray-700">By accessing and using our services, you agree to be bound by these Terms of Service.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Bookings and Cancellations</h2>
          <p className="text-gray-700">Cancellations made 24 hours before the appointment are free. Cancellations within 24 hours may incur a small fee.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Professional Conduct</h2>
          <p className="text-gray-700">We maintain a professional environment. Any inappropriate behavior will result in immediate termination of service without refund.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Limitation of Liability</h2>
          <p className="text-gray-700">Aroma Spa Uttara is not liable for any indirect or consequential damages arising out of your use of our services.</p>
        </section>

        <div className="mt-8">
          <Link to="/">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
