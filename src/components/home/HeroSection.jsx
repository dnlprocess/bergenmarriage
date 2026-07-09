import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { Button } from '@/components/ui/button';
import { Phone, CheckCircle, Award, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#FAF6EF] via-[#FDFAF4] to-[#F5EFE6] overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#DDE8D8]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2D5F3F]/5 rounded-full -translate-x-1/2 translate-y-1/2" />
      
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
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-stone-100">
              <p className="font-semibold text-[#1B3A2F] mb-1">Reuben E. Gross, PhD, LMFT, ABP, ABPP, FAACP</p>
              <p className="text-stone-600 text-sm">Dually Licensed Marriage Counselor and Clinical Psychologist</p>
              <p className="text-stone-500 text-sm mt-1">Clinical Member, American Association for Marriage and Family Therapy</p>
            </div>

            {/* Main description */}
            <p className="text-lg text-stone-600 leading-relaxed">
              Warm, nonjudgmental, solution-oriented help with a compassionate 
              no-nonsense approach. Dr. Gross will help you address your problems 
              beginning with the first session with highly structured, solution-oriented 
              counseling techniques.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-stone-600">
                <CheckCircle className="w-5 h-5 text-[#2D5F3F]" />
                In-Person & Online Sessions
              </div>
              <div className="flex items-center gap-2 text-sm text-stone-600">
                <CheckCircle className="w-5 h-5 text-[#2D5F3F]" />
                PPO, POS, Medicare Insurance Accepted
              </div>
              <div className="flex items-center gap-2 text-sm text-stone-600">
                <CheckCircle className="w-5 h-5 text-[#2D5F3F]" />
                Same-Day Crisis Appointments
              </div>
            </div>

            {/* CTAs - less prominent */}
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
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69922b92e9e00c7fd3626ada/dd6432f91_Gemini_Generated_Image_dvg9fpdvg9fpdvg9.jpg"
                alt="Reaching out to connect"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 max-w-[280px]">
              <p className="text-[#1B3A2F] font-serif text-lg italic leading-relaxed">
                "Reaching Out to Connect..."
              </p>
              <p className="text-stone-500 text-sm mt-2">
                Marriage & Couples Counseling in Bergen County, NJ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}