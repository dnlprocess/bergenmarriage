import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './index';

export function getHeadingText(children) {
  if (typeof children === 'string') return children;
  if (typeof children === 'number') return String(children);
  if (Array.isArray(children)) return children.map(getHeadingText).join('');
  if (children?.props?.children) return getHeadingText(children.props.children);
  return '';
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[''']/g, '')
    .replace(/[^\w\s-]/g, ' ')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

const SAFE_PROTOCOLS = ['http', 'https', 'mailto', 'tel'];

// react-markdown's default urlTransform strips unrecognized protocols (e.g. our
// custom "article:" and "category:" internal link scheme), reducing them to "".
// Allow those through explicitly while still sanitizing everything else.
export function markdownUrlTransform(url) {
  if (url.startsWith('article:') || url.startsWith('category:') || url.startsWith('#')) {
    return url;
  }
  const colonIndex = url.indexOf(':');
  if (colonIndex < 0) return url;
  const protocol = url.slice(0, colonIndex).toLowerCase();
  return SAFE_PROTOCOLS.includes(protocol) ? url : '';
}

export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.pushState(null, '', `#${id}`);
  }
}

export function createMarkdownComponents() {
  const headingBase = 'font-serif font-bold scroll-mt-28';

  return {
    h1: ({ node, children, ...props }) => {
      const id = slugify(getHeadingText(children));
      return (
        <h1
          id={id}
          className={`${headingBase} text-2xl md:text-3xl text-[#2D5F3F] mt-10 mb-5`}
          {...props}
        >
          {children}
        </h1>
      );
    },
    h2: ({ node, children, ...props }) => {
      const id = slugify(getHeadingText(children));
      return (
        <h2
          id={id}
          className={`${headingBase} text-3xl md:text-4xl text-[#1B3A2F] mt-14 mb-6 pt-8 border-t-2 border-[#DDE8D8]`}
          {...props}
        >
          {children}
        </h2>
      );
    },
    h3: ({ node, children, ...props }) => {
      const id = slugify(getHeadingText(children));
      return (
        <h3
          id={id}
          className={`${headingBase} text-xl md:text-2xl text-[#3D6B4F] mt-8 mb-4`}
          {...props}
        >
          {children}
        </h3>
      );
    },
    h4: ({ node, children, ...props }) => {
      const id = slugify(getHeadingText(children));
      return (
        <h4
          id={id}
          className={`${headingBase} text-lg md:text-xl text-[#6B5B4E] mt-6 mb-3`}
          {...props}
        >
          {children}
        </h4>
      );
    },
    p: ({ node, ...props }) => (
      <p className="text-stone-600 text-xl leading-relaxed mb-6" {...props} />
    ),
    ul: ({ node, ...props }) => (
      <ul className="list-disc list-inside space-y-2 mb-6 text-xl text-stone-600 ml-4" {...props} />
    ),
    ol: ({ node, ...props }) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 text-xl text-stone-600 ml-4" {...props} />
    ),
    li: ({ node, ...props }) => (
      <li className="text-stone-600" {...props} />
    ),
    img: ({ node, src, alt, title, ...props }) => {
      // Special title "float-left" floats a smaller image beside the text
      // that follows it, instead of the standard centered block image.
      if (title === 'float-left') {
        return (
          <img
            src={src}
            alt={alt || ''}
            className="float-left w-40 sm:w-48 h-auto mr-6 mb-2 rounded-xl shadow-lg border border-stone-200"
            {...props}
          />
        );
      }
      return (
        <figure className="my-10 max-w-md mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-stone-200">
            <img src={src} alt={alt || ''} className="w-full h-auto" {...props} />
          </div>
          {title && (
            <figcaption className="text-center text-base text-stone-500 mt-3 italic">
              {title}
            </figcaption>
          )}
        </figure>
      );
    },
    blockquote: ({ node, ...props }) => (
      <blockquote className="border-l-4 border-[#2D5F3F] bg-[#FAF6EF] py-4 px-6 rounded-r-lg my-6 italic text-stone-600 text-xl" {...props} />
    ),
    table: ({ node, ...props }) => (
      <div className="my-8 overflow-x-auto rounded-xl border border-stone-200 shadow-sm">
        <table className="w-full border-collapse text-lg text-left" {...props} />
      </div>
    ),
    thead: ({ node, ...props }) => (
      <thead className="bg-[#DDE8D8]" {...props} />
    ),
    tbody: ({ node, ...props }) => (
      <tbody className="divide-y divide-stone-200 bg-white" {...props} />
    ),
    tr: ({ node, ...props }) => (
      <tr {...props} />
    ),
    th: ({ node, ...props }) => (
      <th className="px-5 py-3 font-serif font-bold text-[#1B3A2F]" {...props} />
    ),
    td: ({ node, ...props }) => (
      <td className="px-5 py-3 text-stone-600 align-top" {...props} />
    ),
    a: ({ node, href, children, ...props }) => {
      if (href && href.startsWith('#')) {
        const sectionId = href.slice(1);
        return (
          <a
            href={href}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(sectionId);
            }}
            className="text-[#2D5F3F] hover:text-[#1B3A2F] font-medium underline hover:no-underline transition-colors"
            {...props}
          >
            {children}
          </a>
        );
      }

      if (href && href.startsWith('article:')) {
        const articleId = href.replace('article:', '');
        return (
          <Link
            to={createPageUrl('ArticleDetail') + `?id=${articleId}`}
            className="text-[#2D5F3F] hover:text-[#1B3A2F] font-medium underline hover:no-underline transition-colors"
            {...props}
          >
            {children}
          </Link>
        );
      }

      if (href && href.startsWith('category:')) {
        const categoryId = href.replace('category:', '');
        return (
          <Link
            to={createPageUrl('Articles') + `?category=${categoryId}`}
            className="text-[#2D5F3F] hover:text-[#1B3A2F] font-medium underline hover:no-underline transition-colors"
            {...props}
          >
            {children}
          </Link>
        );
      }

      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2D5F3F] hover:text-[#1B3A2F] font-medium underline hover:no-underline transition-colors"
          {...props}
        >
          {children}
        </a>
      );
    },
    strong: ({ node, ...props }) => (
      <strong className="font-bold text-[#1B3A2F]" {...props} />
    ),
    em: ({ node, ...props }) => (
      <em className="italic text-stone-500" {...props} />
    ),
  };
}
