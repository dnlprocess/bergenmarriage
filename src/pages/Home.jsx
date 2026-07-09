import React from 'react';
import HeroSection from '../components/home/HeroSection';
import CredentialsBar from '../components/home/CredentialsBar';
import ServicesOverview from '../components/home/ServicesOverview';
import AboutPreview from '../components/home/AboutPreview';
import FeaturedArticles from '../components/home/FeaturedArticles';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CredentialsBar />
      <ServicesOverview />
      <AboutPreview />
      <FeaturedArticles />
      <CTASection />
    </div>
  );
}