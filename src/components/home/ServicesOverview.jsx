import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { Heart, Users, MessageCircle, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ServicesOverview() {
  const services = [
    {
      icon: Heart,
      title: "Marriage Counseling",
      description: "Helping couples restore harmony, peace, and love through solution-oriented counseling techniques that work from the very first session."
    },
    {
      icon: Users,
      title: "Premarital Counseling",
      description: "Prepare for a successful marriage by learning communication skills and addressing potential areas of conflict before they become problems."
    },
    {
      icon: MessageCircle,
      title: "Communication Training",
      description: "Learn to complain diplomatically, argue constructively without fighting, and achieve win-win solutions together."
    },
    {
      icon: Shield,
      title: "Infidelity & Trust Issues",
      description: "Expert guidance through the healing process after betrayal, with same-day crisis appointments available."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#2D5F3F] font-medium tracking-wide uppercase text-sm mb-3">
            How I Can Help
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1B3A2F] mb-4">
            Specialized Marriage & Relationship Counseling
          </h2>
          <p className="text-stone-600 leading-relaxed">
            Whether you're facing communication challenges, trust issues, or simply want to 
            strengthen your relationship, I provide warm, nonjudgmental guidance tailored 
            to your unique situation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-stone-50 hover:bg-[#DDE8D8] rounded-2xl p-8 transition-all duration-300"
            >
              <div className="p-3 bg-white rounded-xl w-fit mb-6 shadow-sm group-hover:shadow-md transition-shadow">
                <service.icon className="w-8 h-8 text-[#2D5F3F]" />
              </div>
              <h3 className="font-serif text-xl text-[#1B3A2F] mb-3">{service.title}</h3>
              <p className="text-stone-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-[#2D5F3F] text-[#2D5F3F] hover:bg-[#2D5F3F] hover:text-white"
          >
            <Link to={createPageUrl('Services')} className="flex items-center gap-2">
              Learn More About Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}