'use client';

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import OnboardingForm from '../components/OnboardingForm';
import AboutUs from '../components/AboutUs';

export default function Main() {
  const [activeTab, setActiveTab] = useState('onboarding');

  const renderContent = () => {
    switch (activeTab) {
      case 'onboarding':
        return <OnboardingForm />;
      case 'aboutUs':
        return <AboutUs />;
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-10 overflow-auto">
        <h1 className="text-3xl font-bold mb-6">One-Click-CICD Onboarding</h1>
        {renderContent()}
      </main>
    </div>
  );
}
