import React from 'react';
import { Shield, Award, BookOpen, Users } from 'lucide-react';

export default function CredentialsBar() {
  const credentials = [
    {
      icon: Shield,
      title: "Dual Licensure",
      desc: "NJ Licensed Psychologist & Marriage Family Therapist"
    },
    {
      icon: Award,
      title: "Board Certified",
      desc: "Diplomate, American Board of Professional Psychology"
    },
    {
      icon: BookOpen,
      title: "39 Years Experience",
      desc: "Thousands of couples helped"
    },
    {
      icon: Users,
      title: "AAMFT Member",
      desc: "Clinical Member, American Association for Marriage & Family Therapy"
    }
  ];

  return (
    <section className="bg-[#1B3A2F] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {credentials.map((cred, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="p-2 bg-[#2D5F3F]/20 rounded-lg flex-shrink-0">
                <cred.icon className="w-6 h-6 text-[#2D5F3F]" />
              </div>
              <div>
                <h3 className="text-white font-medium text-base">{cred.title}</h3>
                <p className="text-stone-400 text-sm mt-0.5">{cred.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}