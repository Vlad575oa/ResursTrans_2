/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://resurslogistics.ru',
  generateRobotsTxt: true,
  exclude: [
    '/admin/*',
    '/admin/login',
    '/api/*',
    '/_next/*',
    '/*404',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
  },
  // Generate alternate language sitemaps
  alternateRefs: [
    {
      href: 'https://resurslogistics.ru',
      hreflang: 'ru',
    },
    {
      href: 'https://resurslogistics.ru/en',
      hreflang: 'en',
    },
    {
      href: 'https://resurslogistics.ru/hi',
      hreflang: 'hi',
    },
  ],
  // Additional transformations
  transform: async (config, path) => {
    // Skip admin pages
    if (path.startsWith('/admin') || path.startsWith('/api')) {
      return null;
    }
    
    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : 'weekly',
      priority: path === '/' ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
    };
  },
};
