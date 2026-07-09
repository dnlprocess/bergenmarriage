import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowLeft, Phone, ChevronRight, BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReactMarkdown from 'react-markdown';
import { articlesContent, articlesList, categories } from '../components/articles/articleData';

export default function ArticleDetail() {
  const [articleId, setArticleId] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    setArticleId(id);
    // Scroll to top when article changes
    window.scrollTo(0, 0);
  }, []);

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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm flex-wrap">
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
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <h1 className="font-serif text-3xl md:text-4xl text-[#1B3A2F] mb-4 leading-tight">
              {article.title}
            </h1>
            <p className="text-stone-500">
              By Reuben E. Gross, PhD, ABP, ABPP, LMFT
            </p>
          </header>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 lg:p-12 mb-8">
            <div className="prose prose-lg prose-stone max-w-none 
              prose-headings:font-serif prose-headings:text-[#1B3A2F] 
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:first:mt-0
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:leading-relaxed prose-p:text-stone-600 prose-p:mb-5
              prose-strong:text-[#1B3A2F] prose-strong:font-semibold
              prose-em:text-stone-500
              prose-blockquote:border-l-4 prose-blockquote:border-[#2D5F3F] prose-blockquote:bg-[#FAF6EF] prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-stone-600
              prose-ul:my-4 prose-ul:pl-6
              prose-ol:my-4 prose-ol:pl-6
              prose-li:my-1 prose-li:text-stone-600
            ">
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>
          </div>

          {/* Article Navigation */}
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {prevArticle ? (
              <Link
                to={createPageUrl('ArticleDetail') + `?id=${prevArticle.id}`}
                className="bg-white rounded-xl p-5 hover:shadow-md transition-all group flex items-start gap-3"
              >
                <ArrowLeft className="w-5 h-5 text-stone-400 mt-1 group-hover:text-[#2D5F3F] transition-colors" />
                <div>
                  <p className="text-sm text-stone-400 mb-1">Previous Article</p>
                  <p className="font-medium text-[#1B3A2F] group-hover:text-[#2D5F3F] transition-colors line-clamp-2">
                    {prevArticle.title}
                  </p>
                </div>
              </Link>
            ) : <div />}
            
            {nextArticle && (
              <Link
                to={createPageUrl('ArticleDetail') + `?id=${nextArticle.id}`}
                className="bg-white rounded-xl p-5 hover:shadow-md transition-all group flex items-start gap-3 text-right md:justify-end"
              >
                <div>
                  <p className="text-sm text-stone-400 mb-1">Next Article</p>
                  <p className="font-medium text-[#1B3A2F] group-hover:text-[#2D5F3F] transition-colors line-clamp-2">
                    {nextArticle.title}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-stone-400 mt-1 group-hover:text-[#2D5F3F] transition-colors" />
              </Link>
            )}
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mb-12">
              <h3 className="font-serif text-xl text-[#1B3A2F] mb-6">
                More from {article.categoryName}
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {relatedArticles.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    to={createPageUrl('ArticleDetail') + `?id=${relatedArticle.id}`}
                    className="bg-white rounded-xl p-6 hover:shadow-md transition-all group"
                  >
                    <h4 className="font-medium text-[#1B3A2F] group-hover:text-[#2D5F3F] transition-colors line-clamp-2">
                      {relatedArticle.title}
                    </h4>
                    <span className="inline-flex items-center gap-1 text-sm text-[#2D5F3F] mt-3">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="bg-[#1B3A2F] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-serif text-2xl text-white mb-4">
              Questions About This Article?
            </h2>
            <p className="text-stone-300 mb-8 max-w-xl mx-auto">
              Dr. Gross is readily available by phone or email to answer your questions 
              and discuss how these insights apply to your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1B3A2F] rounded-full px-8"
              >
                <Link to={createPageUrl('Articles')}>
                  Browse All Articles
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}