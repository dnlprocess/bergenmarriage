import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Phone, Heart, Users, MessageCircle, Shield, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Services() {
  return (
    <div className="bg-[#FAF6EF]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#DDE8D8] to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#2D5F3F] font-medium tracking-wide uppercase text-sm mb-3">
            Services
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#1B3A2F] mb-6 max-w-3xl mx-auto">
            Relationship Counseling for Both Married and Unmarried Couples
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Warm, nonjudgmental, solution-oriented help with a compassionate 
            no-nonsense approach
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Marriage Counseling */}
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#DDE8D8] rounded-xl">
                <Heart className="w-8 h-8 text-[#2D5F3F]" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-[#1B3A2F]">
                Marriage Counseling & Couples Therapy
              </h2>
            </div>
            
            <div className="text-stone-600 leading-relaxed space-y-6">
              <p>
                Marriage counseling and premarital couples counseling (aka relationship counseling, couples therapy) is an educational experience that emphasizes self-exploration, self-revelation, and the acquisition of interactive skills, which promote mutual understanding, recognition, respect, appreciation of your partner, and the ability to fulfill your own as well as your partner's expectations in marriage. Other goals of relationship help include learning, developing, and practicing in session with Dr. Gross, and at home, via homework assignments, techniques for constructive communication, and conflict-resolution for long-term marital harmony. This approach in relationship psychology equips you and your partner with lifetime tools that will enable you to honestly and effectively confront and resolve whatever problems may arise in the future in addition to enhancing your relationship and creating a lifelong harmonious setting with each other.
              </p>
              <p>
                In marriage, or couples therapy, for married and unmarried couples, Dr. Gross has a highly developed training program to help couples improve their communication on an emotional level as well as on an intellectual level, and grow in their ability to listen and understand their spouse's point of view, and his/her reasons for taking that position. This program is particularly helpful with couples who argue futilely, escalate into fights, or, to protect themselves, withdraw during arguments/fights without resolving their differences, or have become so discouraged that they have virtually stopped communicating altogether about personal relationship issues or any other sensitive matter and live a roommate type of existence.
              </p>
              <p>
                As an experienced and licensed marriage and couples therapist who is an expert in communication, Dr. Gross will teach you constructive communication skills, which will enable you and your partner to explore problems as a team and come up with solutions that meet both of your needs during your marriage counseling session.
              </p>
            </div>

            <div className="mt-8 p-6 bg-stone-50 rounded-xl">
              <p className="font-medium text-[#1B3A2F] mb-3">Related Articles:</p>
              <Link 
                to={createPageUrl('Articles') + '?category=marriage-counseling-process'}
                className="inline-flex items-center gap-2 text-[#2D5F3F] font-medium hover:gap-3 transition-all"
              >
                How Does Marriage and Couples Counseling Work? <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Communication Training */}
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#DDE8D8] rounded-xl">
                <MessageCircle className="w-8 h-8 text-[#2D5F3F]" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-[#1B3A2F]">
                Training in Effective Communication
              </h2>
            </div>
            
            <div className="text-stone-600 leading-relaxed space-y-6">
              <p>
                Dr. Gross will help you with a wide variety of other problems and the resulting negative emotions that come to the fore. Couples often report frustration, disappointment, hurt, anger, loneliness, pain, and depression due to lack of understanding, diminished affection, loss of friendship, infrequent sex, emotional separation, and a general lack of togetherness during their relationship therapy season. Additional areas of concern may involve a lack of respect for the partner's opinions or feelings, insensitivity to each other's emotional needs, and disproportionate outbursts of anger.
              </p>
              <p>
                With Dr. Gross's understanding of relationship psychology, he will help you explore, evaluate, and agree upon your respective roles and responsibilities to each other, to children (if any, from this or a previous relationship), the day-to-day tasks of living and loving, and making plans for the present and future with each other.
              </p>
            </div>

            <div className="mt-8 p-6 bg-stone-50 rounded-xl">
              <p className="font-medium text-[#1B3A2F] mb-3">Related Articles:</p>
              <Link 
                to={createPageUrl('Articles') + '?category=effective-communication'}
                className="inline-flex items-center gap-2 text-[#2D5F3F] font-medium hover:gap-3 transition-all"
              >
                The A-B-C's of Communication & How to Complain Diplomatically <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Infidelity & Trust */}
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#DDE8D8] rounded-xl">
                <Shield className="w-8 h-8 text-[#2D5F3F]" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-[#1B3A2F]">
                Infidelity & Trust Issues
              </h2>
            </div>
            
            <div className="text-stone-600 leading-relaxed space-y-6">
              <p>
                Other problems that bring couples to marriage counseling may center around money, interference from in-laws, anger management, activities of a partner outside of the home, "friend" relationships with ex-lovers or ex-spouses. Dr. Gross is very skilled when working with problems of infidelity.
              </p>
              <p>
                One of his specialties is his work with crisis situations such as the discovery of online, or in-person, emotional attachments with a member of the opposite sex, as well as lying and suspected —or admitted— physical intimacy, and the consequent emergence of feelings of shock, betrayal, depression, anxiety, anger, lack of trust and numerous other emotions which shake the equilibrium of the hurt party and sometimes threaten the future of the marriage.
              </p>
            </div>

            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-amber-800">Same-Day Appointments for Crisis Situations</p>
                <p className="text-sm text-amber-700 mt-1">
                  Emergency appointments available upon request for infidelity discovery and other crisis situations.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-stone-50 rounded-xl">
              <p className="font-medium text-[#1B3A2F] mb-3">Related Articles:</p>
              <Link 
                to={createPageUrl('Articles') + '?category=infidelity-trust'}
                className="inline-flex items-center gap-2 text-[#2D5F3F] font-medium hover:gap-3 transition-all"
              >
                Can There Be a Silver Lining Around the Cloud of Infidelity? <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Increasing Harmony */}
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#DDE8D8] rounded-xl">
                <Users className="w-8 h-8 text-[#2D5F3F]" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-[#1B3A2F]">
                Reducing Conflict & Increasing Harmony
              </h2>
            </div>
            
            <div className="text-stone-600 leading-relaxed space-y-6">
              <p>
                In addition to helping you reduce the frequency and intensity of your negative interactions, Dr. Gross will help you revive your love relationship with exercises that stimulate expressions of praise and appreciation to each other on a regular basis during your relationship therapy season.
              </p>
              <p className="text-[#1B3A2F] font-medium italic">
                "Reducing conflict of couples is half of the goal. Increasing harmony and joy is the other half."
              </p>
            </div>
          </div>

          {/* What if Spouse Resists */}
          <div className="bg-[#DDE8D8]/50 rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="font-serif text-2xl md:text-3xl text-[#1B3A2F] mb-6">
              What if Only One Person is Motivated?
            </h2>
            
            <div className="text-stone-600 leading-relaxed space-y-6">
              <p>
                If your spouse resists marriage counseling, it may be even more important for you to come and start the process. When we meet, Dr. Gross will help you explore new approaches to alleviate the situation; hopefully encouraging your spouse to join you in the process of fighting for the success of your relationship and help you explore options that you may not have considered.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#1B3A2F] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
              Free 15-Minute Consultation
            </h2>
            <p className="text-stone-300 mb-8 max-w-xl mx-auto">
              When you call, you speak directly to Dr. Gross. He'll spend time with you, 
              at no charge, sympathetically exploring your reasons for inquiring about counseling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-[#2D5F3F] hover:bg-[#234A30] text-white rounded-full px-8"
              >
                <a href="tel:2018362737" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Office: (201) 836-2737
                </a>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1B3A2F] rounded-full px-8"
              >
                <a href="tel:2012183112" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Cell: (201) 218-3112
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}