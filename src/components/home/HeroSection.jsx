import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { Button } from '@/components/ui/button';
import { Phone, CheckCircle, ArrowRight } from 'lucide-react';

// Drop the hero photo into public/images/ as hero.jpg (or update the path
// below). Until a real photo is in place, a soft placeholder is shown.
const HERO_IMAGE_SRC = '/images/hero.jpg';
const HERO_IMAGE_ALT = 'Reaching out to connect';
const HERO_IMAGE_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='500'%3E%3Crect fill='%23DDE8D8' width='100%25' height='500'/%3E%3Ctext x='50%25' y='50%25' font-size='20' text-anchor='middle' dy='.3em' fill='%23888' font-family='Georgia, serif'%3EReaching Out to Connect%3C/text%3E%3C/svg%3E";

export default function HeroSection() {
  const [heroImageSrc, setHeroImageSrc] = useState(HERO_IMAGE_SRC);
  return (
    <section className="relative overflow-hidden">
      {/* Section-specific decorative accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#DDE8D8]/30 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2D5F3F]/5 rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1B3A2F] leading-tight">
                39 Years Helping Couples Find
                <span className="block text-[#2D5F3F]">Peace, Harmony & Love</span>
              </h1>
            </div>

            {/* Credentials */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-stone-100 shadow-sm">
              <p className="font-semibold text-[#1B3A2F] mb-1">Reuben E. Gross, PhD, LMFT, ABP, ABPP, FAACP</p>
              <p className="text-stone-600 text-base">Dually Licensed Marriage Counselor and Clinical Psychologist</p>
              <p className="text-stone-500 text-base mt-1">Clinical Member, American Association for Marriage and Family Therapy</p>
            </div>

            {/* Main description */}
            <p className="text-xl text-stone-600 leading-relaxed">
              Warm, nonjudgmental, solution-oriented help with a compassionate 
              no-nonsense approach. Dr. Gross will help you address your problems 
              beginning with the first session with highly structured, solution-oriented 
              counseling techniques.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-base text-stone-600">
                <CheckCircle className="w-5 h-5 text-[#2D5F3F]" />
                In-Person & Online Sessions
              </div>
              <div className="flex items-center gap-2 text-base text-stone-600">
                <CheckCircle className="w-5 h-5 text-[#2D5F3F]" />
                PPO, POS, Medicare Insurance Accepted
              </div>
              <div className="flex items-center gap-2 text-base text-stone-600">
                <CheckCircle className="w-5 h-5 text-[#2D5F3F]" />
                Same-Day Crisis Appointments
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button 
                asChild
                variant="outline"
                className="border-[#2D5F3F] text-[#2D5F3F] hover:bg-[#2D5F3F] hover:text-white rounded-full px-6"
              >
                <Link to={createPageUrl('About')} className="flex items-center gap-2">
                  Learn More About Dr. Gross
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="ghost"
                className="text-[#1B3A2F] hover:bg-stone-100 rounded-full px-6"
              >
                <a href="tel:2018362737" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (201) 836-2737
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImageSrc}
                alt={HERO_IMAGE_ALT}
                className="w-full h-[500px] object-cover"
                onError={() => setHeroImageSrc(HERO_IMAGE_PLACEHOLDER)}
              />
            </div>

            {/* Caption below image */}
            <div className="mt-5 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 w-full max-w-lg md:max-w-xl border border-[#DDE8D8]/60 hover:shadow-xl transition-shadow duration-300">
              <p className="text-[#1B3A2F] font-serif text-lg md:text-xl italic leading-relaxed">
                "Reaching out to connect is the responsibility of both partners."
              </p>
              <p className="text-stone-500 text-base mt-3">
                Marriage & Couples Counseling in Bergen County, NJ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
