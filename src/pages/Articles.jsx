import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Search, Filter, BookOpen, ArrowRight, FileText, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { articlesList, categories } from '../components/articles/articleData';

export default function Articles() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Read category from URL on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, []);

  const articles = articlesList;

  const filteredArticles = articles
    .filter(article => {
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => a.order - b.order);

  const groupedArticles = filteredArticles.reduce((acc, article) => {
    if (!acc[article.category]) {
      acc[article.category] = [];
    }
    acc[article.category].push(article);
    return acc;
  }, {});

  const getCategoryName = (categoryId) => {
    const cat = categories.find(c => c.id === categoryId);
    return cat ? cat.name : categoryId;
  };

  return (
    <div className="bg-[#FAF6EF] min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#DDE8D8] to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#2D5F3F] font-medium tracking-wide uppercase text-sm mb-3">
            Educational Resources
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#1B3A2F] mb-6">
            Articles & Insights
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Drawing from nearly four decades of experience, these articles address the 
            most common challenges couples face.
          </p>
          <p className="text-stone-500 italic mt-4 max-w-xl mx-auto">
            "Many readers say, 'We read some of your articles, and we felt that you were 
            talking about us.'"
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b bg-[#FDFAF4] sticky top-[73px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-full border-stone-200"
              />
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Filter className="w-5 h-5 text-stone-400" />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-64 rounded-full">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedCategory === 'all' ? (
            // Grouped view
            Object.entries(groupedArticles).map(([category, categoryArticles]) => (
              <div key={category} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[#DDE8D8] rounded-lg">
                    <BookOpen className="w-5 h-5 text-[#2D5F3F]" />
                  </div>
                  <h2 className="font-serif text-2xl text-[#1B3A2F]">
                    {getCategoryName(category)}
                  </h2>
                </div>
                <div className="space-y-4">
                  {categoryArticles.map((article, index) => (
                    <Link
                      key={article.id}
                      to={createPageUrl('ArticleDetail') + `?id=${article.id}`}
                      className="block bg-white rounded-xl p-6 hover:shadow-md transition-all group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-[#2D5F3F] text-sm font-medium">
                              Article {index + 1}
                            </span>
                          </div>
                          <h3 className="font-serif text-lg text-[#1B3A2F] group-hover:text-[#2D5F3F] transition-colors mb-2">
                            {article.title}
                          </h3>
                          <p className="text-stone-500 text-sm">{article.excerpt}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-stone-300 group-hover:text-[#2D5F3F] group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))
          ) : (
            // Single category view
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#DDE8D8] rounded-lg">
                  <BookOpen className="w-5 h-5 text-[#2D5F3F]" />
                </div>
                <h2 className="font-serif text-2xl text-[#1B3A2F]">
                  {getCategoryName(selectedCategory)}
                </h2>
              </div>
              <div className="space-y-4">
                {filteredArticles.map((article, index) => (
                  <Link
                    key={article.id}
                    to={createPageUrl('ArticleDetail') + `?id=${article.id}`}
                    className="block bg-white rounded-xl p-6 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[#2D5F3F] text-sm font-medium">
                            Article {index + 1}
                          </span>
                        </div>
                        <h3 className="font-serif text-lg text-[#1B3A2F] group-hover:text-[#2D5F3F] transition-colors mb-2">
                          {article.title}
                        </h3>
                        <p className="text-stone-500 text-sm">{article.excerpt}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-stone-300 group-hover:text-[#2D5F3F] group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-12 h-12 text-stone-300 mx-auto mb-4" />
              <p className="text-stone-500">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1B3A2F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
            Questions About These Topics?
          </h2>
          <p className="text-stone-300 mb-8 max-w-xl mx-auto">
            Dr. Gross is readily available by phone or email to answer your questions 
            and discuss how these insights apply to your situation.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-[#2D5F3F] hover:bg-[#234A30] text-white rounded-full px-8"
          >
            <a href="tel:2018362737" className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Free 15-Minute Consultation
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}