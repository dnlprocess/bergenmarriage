import React from 'react';
import { useSEO } from '../hooks/use-seo';
import HeroSection from '../components/home/HeroSection';
import CredentialsBar from '../components/home/CredentialsBar';
import ServicesOverview from '../components/home/ServicesOverview';
import AboutPreview from '../components/home/AboutPreview';
import OfficeGallery from '../components/home/OfficeGallery';
import FeaturedArticles from '../components/home/FeaturedArticles';
import CTASection from '../components/home/CTASection';
import GoalsSection from '../components/home/GoalsSection';

export default function Home() {
  useSEO({
    title: 'Reuben E. Gross, PhD, LMFT | Teaneck, NJ',
    description: 'Marriage, couples, and premarital counseling in Bergen County, NJ with Reuben E. Gross, PhD, LMFT — 39 years of experience, dually licensed marriage counselor and psychologist. Free 15-minute phone consultation.',
    path: '/',
  });

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