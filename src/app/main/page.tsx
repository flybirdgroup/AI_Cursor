'use client';

import { useState } from 'react';
import MainLayout from '../components/MainLayout';
import AboutUs from '../components/AboutUs';
import OnboardingForm from '../components/OnboardingForm';

const tabs = [
  { id: 'onboarding', label: 'Onboarding to One-click-CICD' },
  { id: 'aboutUs', label: 'About Us' },
];

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
    <MainLayout>
      <div className="flex min-h-screen">
        <div className="w-64 bg-gray-100 p-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`block w-full text-left px-4 py-2 mb-2 ${
                activeTab === tab.id ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-6">One-Click-CICD Onboarding</h1>
          {renderContent()}
        </div>
      </div>
    </MainLayout>
  );
}
