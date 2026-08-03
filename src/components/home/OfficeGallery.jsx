import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

const officeImages = [
  {
    src: '/images/office/DSC_3503.jpg',
    alt: 'Dr. Gross’s warm, wood-paneled counseling room in Teaneck, NJ',
  },
  {
    src: '/images/office/DSC_3510.jpg',
    alt: 'Comfortable seating area in the counseling room',
  },
  {
    src: '/images/office/DSC_3511.jpg',
    alt: 'Private counseling room where sessions take place',
  },
];

function placeholderSrc(label) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='100%25' height='500'><rect fill='%23DDE8D8' width='100%25' height='500'/><text x='50%25' y='50%25' font-size='20' text-anchor='middle' dy='.3em' fill='%23888' font-family='Georgia, serif'>${label}</text></svg>`;
  return `data:image/svg+xml,${svg}`;
}

function OfficeImage({ image }) {
  const [src, setSrc] = useState(image.src);

  return (
    <img
      src={src}
      alt={image.alt}
      className="w-full h-[400px] md:h-[500px] object-cover"
      loading="lazy"
      onError={() => setSrc(placeholderSrc(image.alt))}
    />
  );
}

export default function OfficeGallery() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on('select', () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section className="py-20 bg-[#FAF6EF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#2D5F3F] font-medium tracking-wide uppercase text-sm mb-3">
            Our Office
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1B3A2F]">
            A Warm, Welcoming Space
          </h2>
        </div>

        <Carousel setApi={setApi} className="relative">
          <CarouselContent>
            {officeImages.map((image, index) => (
              <CarouselItem key={index}>
                <button
                  type="button"
                  onClick={() => api?.scrollNext()}
                  className="block w-full rounded-2xl overflow-hidden shadow-xl border border-stone-200 cursor-pointer"
                  aria-label={`${image.alt} — click to see next photo`}
                >
                  <OfficeImage image={image} />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>

        {/* Dot indicators — click to jump to a specific photo */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {officeImages.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => api?.scrollTo(index)}
              className={`h-2.5 rounded-full transition-all ${
                current === index ? 'w-6 bg-[#2D5F3F]' : 'w-2.5 bg-[#2D5F3F]/30'
              }`}
              aria-label={`Go to photo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
