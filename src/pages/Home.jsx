import React from 'react';
import HeroSection from '../components/home/HeroSection';
import CredentialsBar from '../components/home/CredentialsBar';
import ServicesOverview from '../components/home/ServicesOverview';
import AboutPreview from '../components/home/AboutPreview';
import OfficeGallery from '../components/home/OfficeGallery';
import FeaturedArticles from '../components/home/FeaturedArticles';
import CTASection from '../components/home/CTASection';
import GoalsSection from '../components/home/GoalsSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CredentialsBar />
      <ServicesOverview />
      <AboutPreview />
      <OfficeGallery />
      <FeaturedArticles />
      <CTASection />
      <GoalsSection />
    </div>
  );
}