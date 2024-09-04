'use client';

import { useState } from 'react';
import MainLayout from '../components/MainLayout';

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
      <div className="flex flex-col min-h-screen">
        <div className="flex border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 ${
                activeTab === tab.id ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex-1 p-4">
          {renderContent()}
        </div>
      </div>
    </MainLayout>
  );
}

function OnboardingForm() {
  // Implement your onboarding form here
  return <div>Onboarding Form</div>;
}

function AboutUs() {
  // Implement your About Us content here
  return <div>About Us</div>;
}
