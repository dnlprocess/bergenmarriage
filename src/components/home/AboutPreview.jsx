import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AboutPreview() {
  return (
    <section className="py-20 bg-[#DDE8D8]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-[#2D5F3F] font-medium tracking-wide uppercase text-sm mb-3">
              About Dr. Gross
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1B3A2F] mb-6">
              Warm, Active, Nonjudgmental & Solution-Oriented
            </h2>
            
            <div className="prose prose-stone max-w-none space-y-4 text-stone-600 leading-relaxed">
              <p>
                Reuben E. Gross, Ph.D., LMFT (Licensed Marriage Counselor NJ & Family Therapist) 
                offers warm, active, nonjudgmental, empathic, solution-oriented couples and 
                marriage counseling in Bergen County, NJ. He is a highly trained, credentialed, 
                experienced, and caring Marriage Counselor and Psychologist, Licensed In the 
                State of New York as a Psychologist, and in NJ by the New Jersey State Board 
                of Marriage Counselors and the New Jersey State Board of Psychologists.
              </p>
              <p>
                Dr. Gross has been in private practice as a marriage counselor and couples 
                therapist for close to four decades in Teaneck, Bergen County, NJ with a 
                concurrent practice in New York City while teaching and supervising marriage 
                counselors and psychotherapists, and serving as a professor of a clinical 
                supervisor at universities and psychological clinics.
              </p>
            </div>

            <div className="mt-8">
              <Button 
                asChild
                className="bg-[#2D5F3F] hover:bg-[#234A30] text-white rounded-full px-6"
              >
                <Link to={createPageUrl('About')} className="flex items-center gap-2">
                  Read Full Bio & Credentials
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Quote Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-10 relative z-10">
              <Quote className="w-12 h-12 text-[#2D5F3F]/30 mb-6" />
              <blockquote className="font-serif text-2xl text-[#1B3A2F] leading-relaxed mb-6">
                "Dr. Gross is a very down-to-earth person who offers a practical approach to 
                marriage and premarital counseling. He will help you address your problems 
                beginning with the first session with highly structured, solution-oriented 
                counseling techniques."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#DDE8D8] rounded-full flex items-center justify-center">
                  <span className="text-[#2D5F3F] font-semibold">RG</span>
                </div>
                <div>
                  <p className="font-medium text-[#1B3A2F]">Professional Approach</p>
                  <p className="text-sm text-stone-500">Evidence-Based, Results-Oriented</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#2D5F3F]/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}