import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { ArrowRight, FileText, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FeaturedArticles() {
  const articleCategories = [
    {
      title: "The Marriage Counseling Process",
      description: "Five articles explaining how marriage and couples counseling works, from your first call through achieving your goals.",
      articles: [
        "Brief Overview of the Marriage Counseling Process",
        "Goals and Procedures in Counseling",
        "Why Isn't Love Enough?",
        "Hope for Troubled Marriages",
        "Assessing Happiness in Marriage"
      ],
      link: "marriage-counseling-process"
    },
    {
      title: "Effective Communication",
      description: "Six articles on developing communication skills that create lasting harmony in your relationship.",
      articles: [
        "The Difference Between Talking and Communicating",
        "The A-B-C's of Good Communication",
        "Six Important Benefits of Good Communication",
        "Thirteen Reasons Why Spouses Fail to Communicate",
        "How to Complain Diplomatically Without Fighting"
      ],
      link: "effective-communication"
    },
    {
      title: "Infidelity & Trust Issues",
      description: "Guidance through the healing process with expert, compassionate support for one of life's most difficult challenges.",
      articles: [
        "The Hurt & Pain of Infidelity",
        "An Infidelity to a Marriage is Like an Earthquake to a House",
        "In Today's High Tech Era: Secret Relationships"
      ],
      link: "infidelity-trust"
    },
    {
      title: "Growing a Couple's Loving Relationship",
      description: "Understanding the hidden agendas, unexpressed expectations, and reciprocal obligations that shape your marriage.",
      articles: [
        "The Hidden Agenda in Relationships",
        "Language Deficit Reflects Conceptual Deficit"
      ],
      link: "growing-loving-relationship"
    },
    {
      title: "Spouse Resists Counseling",
      description: "What to do when only one person is motivated, and helpful answers to common objections about seeking help.",
      articles: [
        "Different Levels of Motivation to Maintain the Relationship",
        "What If Only One Person Is Motivated?",
        "Fourteen Helpful Answers When Your Spouse Resists Marriage Counseling"
      ],
      link: "spouse-resists-counseling"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#2D5F3F] font-medium tracking-wide uppercase text-sm mb-3">
            Educational Resources
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1B3A2F] mb-4">
            Articles & Insights
          </h2>
          <p className="text-stone-600 leading-relaxed">
            Drawing from nearly four decades of experience, these articles address the 
            most common challenges couples face. Many readers say, "We felt like you 
            were talking about us."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articleCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-stone-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="p-3 bg-[#DDE8D8] rounded-xl w-fit mb-6">
                <BookOpen className="w-6 h-6 text-[#2D5F3F]" />
              </div>
              <h3 className="font-serif text-xl text-[#1B3A2F] mb-3">{category.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                {category.description}
              </p>
              <ul className="space-y-2 mb-6">
                {category.articles.slice(0, 3).map((article, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-stone-600">
                    <FileText className="w-4 h-4 text-[#2D5F3F] flex-shrink-0 mt-0.5" />
                    {article}
                  </li>
                ))}
                {category.articles.length > 3 && (
                  <li className="text-sm text-[#2D5F3F] pl-6">
                    +{category.articles.length - 3} more articles
                  </li>
                )}
              </ul>
              <Link 
                to={createPageUrl('Articles') + `?category=${category.link}`}
                className="inline-flex items-center gap-2 text-[#2D5F3F] font-medium text-sm hover:gap-3 transition-all"
              >
                Read Articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild
            size="lg"
            className="bg-[#1B3A2F] hover:bg-[#2A4A3E] text-white rounded-full px-8"
          >
            <Link to={createPageUrl('Articles')} className="flex items-center gap-2">
              Browse All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}