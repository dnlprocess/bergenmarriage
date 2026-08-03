import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Phone, Menu, X, Mail, MapPin, Clock, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { categories } from './components/articles/articleData';

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [articlesDropdownOpen, setArticlesDropdownOpen] = useState(false);
  const [mobileArticlesDropdownOpen, setMobileArticlesDropdownOpen] = useState(false);

  const navLinks = [
  { name: 'Home', page: 'Home' },
  { name: 'About & Credentials', page: 'About' },
  { name: 'Services', page: 'Services' },
  { name: 'Articles', page: 'Articles' },
  { name: 'Contact', page: 'Contact' }];


  return (
    <div className="min-h-screen bg-[#FAF6EF]">
      <style>{`
        :root {
          --color-sage: #2D5F3F;
          --color-sage-light: #DDE8D8;
          --color-navy: #1B3A2F;
          --color-navy-light: #2A4A3E;
          --color-warm-white: #FDFAF4;
          --color-charcoal: #3A332C;
          --color-cream: #FAF6EF;
        }
        
        .font-serif-display {
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        
        .text-sage { color: var(--color-sage); }
        .bg-sage { background-color: var(--color-sage); }
        .bg-sage-light { background-color: var(--color-sage-light); }
        .text-navy { color: var(--color-navy); }
        .bg-navy { background-color: var(--color-navy); }
        .text-charcoal { color: var(--color-charcoal); }
        .border-sage { border-color: var(--color-sage); }
        
        .prose-article h2 {
          font-family: 'Georgia', serif;
          color: var(--color-navy);
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        
        .prose-article p {
          margin-bottom: 1.25rem;
          line-height: 1.8;
        }
      `}</style>

      {/* Top Contact Bar */}
      <div className="bg-navy text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-base">
          <div className="flex items-center gap-6">
            <a href="tel:2018362737" className="flex items-center gap-2 hover:text-sage-light transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Office:</span> (201) 836-2737
            </a>
            <a href="tel:2012183112" className="flex items-center gap-2 hover:text-sage-light transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Cell:</span> (201) 218-3112
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4 text-stone-300">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Teaneck, NJ
            </span>
            <span>|</span>
            <span>In-Person & Online Sessions</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-[#FDFAF4] shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex flex-col">
              <span className="font-serif-display text-2xl md:text-3xl text-navy font-semibold tracking-tight">
                Bergen Marriage & Couple Counseling
              </span>
              <span className="text-lg text-stone-500">Reuben E. Gross, PhD, LMFT</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                // Special handling for Articles with dropdown
                if (link.page === 'Articles') {
                  return (
                    <div key={link.page} className="relative">
                      <button
                        onMouseEnter={() => setArticlesDropdownOpen(true)}
                        onMouseLeave={() => setArticlesDropdownOpen(false)}
                        className={`font-medium transition-colors hover:text-sage text-lg flex items-center gap-1 ${
                          currentPageName === link.page ? 'text-sage' : 'text-charcoal'
                        }`}
                      >
                        {link.name}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      {articlesDropdownOpen && (
                        <div
                          onMouseEnter={() => setArticlesDropdownOpen(true)}
                          onMouseLeave={() => setArticlesDropdownOpen(false)}
                          className="absolute top-full left-0 mt-0 bg-white rounded-lg shadow-lg py-2 min-w-[240px] z-50"
                        >
                          {categories.map((category) => (
                            <Link
                              key={category.id}
                              to={createPageUrl('Articles') + `?category=${category.id}`}
                              className="block px-4 py-2 text-charcoal hover:bg-sage-light hover:text-sage transition-colors text-base"
                              onClick={() => setArticlesDropdownOpen(false)}
                            >
                              {category.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    className={`font-medium transition-colors hover:text-sage text-lg ${
                      currentPageName === link.page ? 'text-sage' : 'text-charcoal'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Button
                asChild
                className="bg-sage hover:bg-sage/90 text-white rounded-full px-6">
                
                <a href="tel:2018362737">Free Consultation</a>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen &&
          <div className="lg:hidden pb-4 border-t">
              <nav className="flex flex-col gap-2 pt-4">
                {navLinks.map((link) => {
                  // Special handling for Articles with dropdown in mobile
                  if (link.page === 'Articles') {
                    return (
                      <div key={link.page}>
                        <button
                          onClick={() => setMobileArticlesDropdownOpen(!mobileArticlesDropdownOpen)}
                          className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center justify-between ${
                            currentPageName === link.page
                              ? 'bg-sage-light text-sage'
                              : 'text-charcoal hover:bg-stone-100'
                          }`}
                        >
                          {link.name}
                          <ChevronDown className={`w-4 h-4 transition-transform ${mobileArticlesDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {/* Mobile Dropdown */}
                        {mobileArticlesDropdownOpen && (
                          <div className="pl-4 mt-1 space-y-1">
                            {categories.map((category) => (
                              <Link
                                key={category.id}
                                to={createPageUrl('Articles') + `?category=${category.id}`}
                                className="block px-3 py-2 text-base text-charcoal hover:bg-sage-light/50 rounded transition-colors"
                                onClick={() => {
                                  setMobileArticlesDropdownOpen(false);
                                  setMobileMenuOpen(false);
                                }}
                              >
                                {category.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.page}
                      to={createPageUrl(link.page)}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-2 rounded-lg transition-colors text-lg ${
                        currentPageName === link.page
                          ? 'bg-sage-light text-sage'
                          : 'text-charcoal hover:bg-stone-100'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              )}
                <Button
                asChild
                className="bg-sage hover:bg-sage/90 text-white mt-2 mx-4">
                
                  <a href="tel:2018362737">Free 15-Minute Consultation</a>
                </Button>
              </nav>
            </div>
          }
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* About Column */}
            <div>
              <h3 className="font-serif-display text-xl mb-4">Bergen Marriage & Couple Counseling</h3>
              <p className="text-stone-300 text-sm leading-relaxed mb-4">
                39 years of experience helping couples live with each other in peace, harmony, trust, and mature love.
              </p>
              <p className="text-stone-400 text-sm">
                Dually Licensed Marriage Counselor and Clinical Psychologist
              </p>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="font-serif-display text-xl mb-4">Contact</h3>
              <div className="space-y-3 text-sm">
                <a href="tel:2018362737" className="flex items-center gap-3 text-stone-300 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-sage" />
                  Office: (201) 836-2737
                </a>
                <a href="tel:2012183112" className="flex items-center gap-3 text-stone-300 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-sage" />
                  Cell: (201) 218-3112
                </a>
                <a href="mailto:BergenMarriage1@gmail.com" className="flex items-center gap-3 text-stone-300 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-sage" />
                  BergenMarriage1@gmail.com
                </a>
                <div className="flex items-center gap-3 text-stone-300">
                  <MapPin className="w-4 h-4 text-sage" />
                  1299 Wellington Avenue, Teaneck, NJ 07666
                </div>
              </div>
            </div>

            {/* Hours Column */}
            <div>
              <h3 className="font-serif-display text-xl mb-4">Office Hours</h3>
              <div className="text-sm text-stone-300 space-y-2">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-sage" />
                  Daytime, Evening & Occasional Weekend Hours
                </div>
                <p className="mt-4">Prompt Return of Calls</p>
                <p>Emergency Appointments Upon Request</p>
                <p className="mt-4 text-sage font-medium">PPO Insurance Plans Accepted</p>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-700 mt-12 pt-8 text-center text-sm text-stone-400">
            <p>© {new Date().getFullYear()} Bergen Marriage & Couple Counseling. All rights reserved.</p>
            <p className="mt-2">NJ Licensed Marriage and Family Therapist #139 | NJ Licensed Psychologist #851</p>
          </div>
        </div>
      </footer>
    </div>);

}