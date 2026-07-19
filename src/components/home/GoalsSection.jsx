import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';

// Drop the photo into public/images/ as smiling-couple.jpg (or update the
// path below). Until a real photo is in place, a soft placeholder is shown.
const GOALS_IMAGE_SRC = '/images/smiling-couple.jpg';
const GOALS_IMAGE_ALT = 'Smiling couple enjoying their relationship';
const GOALS_IMAGE_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='500'%3E%3Crect fill='%23DDE8D8' width='100%25' height='500'/%3E%3Ctext x='50%25' y='50%25' font-size='20' text-anchor='middle' dy='.3em' fill='%23888' font-family='Georgia, serif'%3ESmiling Couple%3C/text%3E%3C/svg%3E";

export default function GoalsSection() {
  const [imageSrc, setImageSrc] = useState(GOALS_IMAGE_SRC);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-2xl overflow-hidden shadow-lg mb-10">
          <img
            src={imageSrc}
            alt={GOALS_IMAGE_ALT}
            className="w-full h-[400px] md:h-[500px] object-cover"
            loading="lazy"
            onError={() => setImageSrc(GOALS_IMAGE_PLACEHOLDER)}
          />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-[#1B3A2F] leading-tight mb-8">
          Reducing Conflict of Couples is Half of the Goal
          <span className="block text-[#2D5F3F]">Increasing Harmony and Joy is the Other Half</span>
        </h2>

        <div className="text-left space-y-6 text-xl leading-relaxed text-stone-600">
          <p>
            In addition to helping you reduce the frequency and intensity of your negative
            interactions, Dr. Gross will help you revive your love relationship with exercises
            that stimulate expressions of praise and appreciation to each other on a regular
            basis during your relationship therapy season. He works with you on exercises that
            help you reveal to your partner your emotional needs. He will encourage a commitment
            from each of you to attend to and fulfill those stated needs as much as possible and
            engage in enjoyable activities which will enhance your relationship and serve to
            blend you as a couple.
          </p>

          <p>
            <Link
              to={createPageUrl('ArticleDetail') + '?id=hidden-agenda-in-relationships'}
              className="text-[#2D5F3F] hover:text-[#1B3A2F] font-medium underline hover:no-underline transition-colors"
            >
              Click here
            </Link>{' '}
            for &ldquo;The Hidden Agenda in Marriage.&rdquo;
          </p>

          <p>
            People marry to increase their happiness, not their misery. Nor do they marry to
            feel alone in the relationship or to spend the rest of their life in frustration,
            strife, and pain. They want to enjoy life, have fun, and share their thoughts,
            feelings, and experiences with their spouse in all the complexities of the
            relationship (partner, companion, friend, playmate…etc.). Spouses want to grow
            together as they age, not apart. Dr. Gross&rsquo; goal is to help you recapture the
            love, romance, mutual goodwill, togetherness, kindness, and teamwork that
            characterized their relationship at its height. This will come about with a greater
            understanding of —and sensitivity to— each other&rsquo;s needs and increased
            knowledge of what marriage is all about. When you express your new commitment and
            attitudes to your partner by putting into practice various caring behaviors and
            pleasurable joint activities, you will come closer to your aspired goals with each
            other and significantly increase your chances of rekindling some of the magic that
            characterized the beginning of your relationship.
          </p>
        </div>
      </div>
    </section>
  );
}
