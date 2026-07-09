import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="py-20 bg-[#1B3A2F] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2D5F3F]/10 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2D5F3F]/10 rounded-full -translate-x-1/2 translate-y-1/2" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Ready to Take the First Step?
            </h2>
            <p className="text-stone-300 text-lg leading-relaxed mb-8">
              Since I am not part of a hospital or psychological clinic, when you call 
              my office, you speak directly to me. I'll be happy to spend time with you, 
              at no charge, sympathetically exploring your reasons for inquiring about 
              marriage, pre-marital or individual counseling.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-[#2D5F3F]/20 rounded-lg">
                  <Clock className="w-5 h-5 text-[#2D5F3F]" />
                </div>
                <span className="text-stone-300">Same-day appointments for crisis situations</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-[#2D5F3F]/20 rounded-lg">
                  <MapPin className="w-5 h-5 text-[#2D5F3F]" />
                </div>
                <span className="text-stone-300">In-person sessions in Teaneck, NJ or online</span>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="font-serif text-2xl text-[#1B3A2F] mb-6">
              Free 15-Minute Consultation
            </h3>
            
            <div className="space-y-4">
              <a 
                href="tel:2018362737"
                className="flex items-center justify-between p-4 bg-stone-50 rounded-xl hover:bg-[#DDE8D8] transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#2D5F3F] rounded-lg">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500">Office</p>
                    <p className="text-lg font-semibold text-[#1B3A2F]">(201) 836-2737</p>
                  </div>
                </div>
                <span className="text-[#2D5F3F] opacity-0 group-hover:opacity-100 transition-opacity">
                  Call Now →
                </span>
              </a>
              
              <a 
                href="tel:2012183112"
                className="flex items-center justify-between p-4 bg-stone-50 rounded-xl hover:bg-[#DDE8D8] transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#2D5F3F] rounded-lg">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500">Cell Phone</p>
                    <p className="text-lg font-semibold text-[#1B3A2F]">(201) 218-3112</p>
                  </div>
                </div>
                <span className="text-[#2D5F3F] opacity-0 group-hover:opacity-100 transition-opacity">
                  Call Now →
                </span>
              </a>
              
              <a 
                href="mailto:BergenMarriage1@gmail.com"
                className="flex items-center justify-between p-4 bg-stone-50 rounded-xl hover:bg-[#DDE8D8] transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#1B3A2F] rounded-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500">Email</p>
                    <p className="text-[#1B3A2F] font-medium">BergenMarriage1@gmail.com</p>
                  </div>
                </div>
              </a>
            </div>

            <p className="text-sm text-stone-500 mt-6 text-center">
              Inquiries welcome. Prompt return of calls.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}