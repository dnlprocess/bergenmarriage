const PAGE_PATHS: Record<string, string> = {
    Home: '/',
    About: '/about',
    Services: '/services',
    Articles: '/articles',
    Contact: '/contact',
};

export function createPageUrl(pageName: string) {
    return PAGE_PATHS[pageName] ?? '/' + pageName.replace(/ /g, '-').toLowerCase();
}

export function articleUrl(id: string) {
    return `/articles/${id}`;
}

export function categoryUrl(categoryId: string) {
    return `/articles?category=${categoryId}`;
}
