import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowLeft, Phone, ChevronRight, BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { articlesContent, articlesList, categories } from '../components/articles/articleData';
import { createMarkdownComponents, scrollToSection } from '../utils/markdown';

const markdownComponents = createMarkdownComponents();

export default function ArticleDetail() {
  const [searchParams] = useSearchParams();
  const [articleId, setArticleId] = useState(null);

  useEffect(() => {
    const id = searchParams.get('id');
    setArticleId(id);

    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => scrollToSection(hash.slice(1)), 150);
    } else {
      window.scrollTo(0, 0);
    }
  }, [searchParams]);

  const article = articleId ? articlesContent[articleId] : null;

  // Get related articles from same category
  const relatedArticles = article ? articlesList
    .filter(a => a.category === article.category && a.id !== articleId)
    .slice(0, 3) : [];

  // Get prev/next articles in same category
  const categoryArticles = article ? articlesList
    .filter(a => a.category === article.category)
    .sort((a, b) => a.order - b.order) : [];
  
  const currentIndex = categoryArticles.findIndex(a => a.id === articleId);
  const prevArticle = currentIndex > 0 ? categoryArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < categoryArticles.length - 1 ? categoryArticles[currentIndex + 1] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-[#FAF6EF] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <BookOpen className="w-16 h-16 text-stone-300 mx-auto mb-4" />
          <h1 className="font-serif text-2xl text-[#1B3A2F] mb-4">Article Not Found</h1>
          <p className="text-stone-500 mb-8">The article you're looking for is not available yet.</p>
          <Button asChild className="bg-[#2D5F3F] hover:bg-[#234A30] rounded-full">
            <Link to={createPageUrl('Articles')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Articles
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF6EF]">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-base flex-wrap">
            <Link to={createPageUrl('Articles')} className="text-stone-500 hover:text-[#2D5F3F]">
              Articles
            </Link>
            <ChevronRight className="w-4 h-4 text-stone-300" />
            <Link 
              to={createPageUrl('Articles') + `?category=${article.category}`}
              className="text-stone-500 hover:text-[#2D5F3F]"
            >
              {article.categoryName}
            </Link>
            <ChevronRight className="w-4 h-4 text-stone-300" />
            <span className="text-[#1B3A2F] truncate">{article.title}</span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-[#DDE8D8] text-[#2D5F3F] text-sm font-medium rounded-full">
                {article.categoryName}
              </span>
              {article.articleNumber && (
                <span className="text-stone-400 text-sm">
                  Article {article.articleNumber}
                </span>
              )}
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-[#1B3A2F] mb-4 leading-tight">
              {article.title}
            </h1>
            <p className="text-stone-600 text-lg">
              By Reuben E. Gross, PhD, ABP, ABPP, LMFT
            </p>
          </header>

          {/* Featured Image */}
          {article.imageUrl && (
            <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={article.imageUrl} 
                alt={article.title}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Content - Styled like a proper article/webpage */}
          <div className="max-w-4xl">
            <div className="text-xl leading-relaxed text-stone-700">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                {article.content}
              </ReactMarkdown>
            </div>
          </div>

          {/* Spacing */}
          <div className="my-16" />

          {/* Article Navigation */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {prevArticle ? (
              <Link
                to={createPageUrl('ArticleDetail') + `?id=${prevArticle.id}`}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all group flex items-start gap-4 border border-stone-200"
              >
                <ArrowLeft className="w-6 h-6 text-[#2D5F3F] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-stone-500 mb-2">Previous Article</p>
                  <p className="font-semibold text-[#1B3A2F] group-hover:text-[#2D5F3F] transition-colors">
                    {prevArticle.title}
                  </p>
                </div>
              </Link>
            ) : <div />}
            
            {nextArticle && (
              <Link
                to={createPageUrl('ArticleDetail') + `?id=${nextArticle.id}`}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all group flex items-start gap-4 border border-stone-200 md:justify-end"
              >
                <div className="md:text-right">
                  <p className="text-sm text-stone-500 mb-2">Next Article</p>
                  <p className="font-semibold text-[#1B3A2F] group-hover:text-[#2D5F3F] transition-colors">
                    {nextArticle.title}
                  </p>
                </div>
                <ArrowRight className="w-6 h-6 text-[#2D5F3F] mt-1 flex-shrink-0" />
              </Link>
            )}
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="bg-white rounded-2xl p-10 border border-stone-200">
              <h2 className="font-serif text-2xl text-[#1B3A2F] mb-8">
                More from {article.categoryName}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    to={createPageUrl('ArticleDetail') + `?id=${relatedArticle.id}`}
                    className="group"
                  >
                    <div className="bg-[#FAF6EF] rounded-xl p-6 hover:shadow-md transition-all h-full">
                      <h3 className="font-semibold text-[#1B3A2F] group-hover:text-[#2D5F3F] transition-colors mb-4">
                        {relatedArticle.title}
                      </h3>
                      <span className="inline-flex items-center gap-2 text-sm text-[#2D5F3F] font-medium">
                        Read Article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-br from-[#1B3A2F] to-[#234A30] rounded-2xl p-12 text-center">
            <h2 className="font-serif text-3xl text-white mb-4">
              Have Questions About This Article?
            </h2>
            <p className="text-stone-200 text-lg mb-8 max-w-2xl mx-auto">
              Dr. Gross welcomes the opportunity to discuss these concepts with you and answer any questions about how they apply to your unique situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-[#2D5F3F] hover:bg-[#1B3A2F] text-white rounded-full px-8"
              >
                <a href="tel:2018362737" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call (201) 836-2737
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white/10 rounded-full px-8"
              >
                <a href="mailto:BergenMarriage1@gmail.com">
                  Email Your Questions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
