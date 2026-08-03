import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Drop the hero photo into public/images/ as hero.jpg (or update the path
// below). Until a real photo is in place, a soft placeholder is shown.
const HERO_IMAGE_SRC = '/images/hero.jpg';
const HERO_IMAGE_ALT = 'Two hands reaching out to connect';
const HERO_IMAGE_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='500'%3E%3Crect fill='%23DDE8D8' width='100%25' height='500'/%3E%3Ctext x='50%25' y='50%25' font-size='20' text-anchor='middle' dy='.3em' fill='%23888' font-family='Georgia, serif'%3EReaching Out to Connect%3C/text%3E%3C/svg%3E";

// Vector illustration (public/images/arms.png) split into two transparent
// halves along the gap between the fingertips, so each half can slide in
// from its own edge and land exactly where it sits in the source artwork.
const ARMS_LEFT_SRC = '/images/arms-left.png';
const ARMS_RIGHT_SRC = '/images/arms-right.png';

export default function HeroHandsReveal() {
  const [heroImageSrc, setHeroImageSrc] = useState(HERO_IMAGE_SRC);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.4', 'start 0.05'],
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, 1], { clamp: true });
  const leftX = useTransform(progress, [0, 0.6], ['-38%', '0%']);
  const rightX = useTransform(progress, [0, 0.6], ['38%', '0%']);
  const illustrationOpacity = useTransform(progress, [0.65, 1], [1, 0]);
  const photoOpacity = useTransform(progress, [0.65, 1], [0, 1]);

  // Safari clips (overflow-hidden + rounded-2xl) a parent whose children
  // animate opacity/transform on scroll, and without an explicit compositing
  // layer on both the clipper and the animated layers it sometimes renders
  // a solid black frame instead of blending them. Forcing each of these
  // onto its own layer (translateZ(0) + backface-visibility) keeps Safari's
  // compositor from taking that broken shortcut; harmless elsewhere.
  const compositingLayerStyle = {
    transform: 'translateZ(0)',
    WebkitTransform: 'translateZ(0)',
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
  };

  return (
    <div
      ref={containerRef}
      style={compositingLayerStyle}
      className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] bg-gradient-to-b from-[#9EC9E3] to-[#E8F5FB]"
    >
      <motion.div
        style={{ ...compositingLayerStyle, opacity: illustrationOpacity }}
        className="absolute inset-0"
      >
        <motion.img
          src={ARMS_LEFT_SRC}
          alt="Left hand reaching"
          style={{ ...compositingLayerStyle, x: leftX }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <motion.img
          src={ARMS_RIGHT_SRC}
          alt="Right hand reaching"
          style={{ ...compositingLayerStyle, x: rightX }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>

      <motion.img
        src={heroImageSrc}
        alt={HERO_IMAGE_ALT}
        style={{ ...compositingLayerStyle, opacity: photoOpacity }}
        className="absolute inset-0 w-full h-full object-cover"
        onError={() => setHeroImageSrc(HERO_IMAGE_PLACEHOLDER)}
      />
    </div>
  );
}
