import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-4">Last Updated: June 21, 2026</p>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Information We Collect</h2>
          <p className="text-gray-700">We collect information you provide directly to us when you book an appointment, such as your name, phone number, and email address.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">2. How We Use Your Information</h2>
          <p className="text-gray-700">We use your information to manage your bookings, communicate with you about your appointments, and provide you with the best possible service.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Data Security</h2>
          <p className="text-gray-700">We take reasonable measures to protect your personal information from unauthorized access or disclosure.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Contact Us</h2>
          <p className="text-gray-700">If you have any questions about this Privacy Policy, please contact us at uttaraspa1230@gmail.com.</p>
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
