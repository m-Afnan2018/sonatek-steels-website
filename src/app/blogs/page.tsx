import React from 'react';
import styles from './page.module.css';
import NewsCard from '@/components/core/blogs/NewsCard/NewsCard';
import FeaturedNewsCard from '@/components/core/blogs/FeaturedNewsCard/FeaturedNewsCard';
import FloatingTags from '@/components/core/blogs/FloatingTags/FloatingTags';

export default function NewsPage() {
  const featuredArticle1 = {
    date: '10 May 2025',
    title: 'BASICALLY STEEL',
    excerpt: 'Steel is an alloy primarily composed of iron and a small percentage of carbon, which enhances its strength and fracture resistance.',
    imageUrl: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&q=80',
    link: '/blogs/basic'
  };

  const gridArticles1 = [
    {
      date: '08 May 2025',
      title: 'TEMPERATURE',
      excerpt: 'Hot rolling primarily involves deforming the slab/bloom at high temperature & roll pressure.',
      imageUrl: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80',
      link: '/blogs/tech'
    },
    {
      date: '05 May 2025',
      title: 'SMOOTH SURFACE',
      excerpt: 'Cold rolling in performed to produce sheets & strips with smooth surfaces, having a better surface finish with accurate dimensions.',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      link: '/blogs/smooth'
    }
  ];

  const featuredArticle2 = {
    date: '01 May 2025',
    title: 'SONATEK STEELS MARKS NEW MILESTONE',
    excerpt: 'Pioneering infrastructure development in Northern India transforms local and global steel trade capacities.',
    imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80',
    link: '#'
  };

  const gridArticles2 = [
    {
      date: '28 Apr 2025',
      title: 'WE PROVIDE COMPREHENSIVE RANGE OF STEEL',
      excerpt: 'We supply the complete product range of SAIL, including Cold Rolled (CR) Coils/Sheets, Hot Rolled (HR) Coils & Sheet.',
      imageUrl: 'https://images.unsplash.com/photo-1487875961445-47a00398c267?q=80&w=1170&auto=format&fit=crop',
      link: '#'
    }
  ];

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        
        {/* Header Section */}
        <section className={styles.header}>
          <div className={styles.breadcrumb}>
            <a href="/">Home</a> <span>›</span> Blogs
          </div>
          <h1 className={styles.title}>INSIGHTS & BLOGS</h1>
          <p className={styles.description}>
            Stay informed with our latest articles, industry insights, and 
            expert perspectives on the steel industry and supply chain excellence. 
            For inquiries please contact: <a href="mailto:info@sonateksteels.com" className={styles.contactLink}>info@sonateksteels.com</a>
          </p>
        </section>

        <div className={styles.contentLayout}>
          <div className={styles.newsColumn}>
            {/* First Featured Article */}
            <FeaturedNewsCard 
              date={featuredArticle1.date}
              title={featuredArticle1.title}
              excerpt={featuredArticle1.excerpt}
              imageUrl={featuredArticle1.imageUrl}
              link={featuredArticle1.link}
            />

            {/* First Grid */}
            <section className={styles.newsGrid}>
              {gridArticles1.map((article, index) => (
                <NewsCard 
                  key={`grid1-${index}`}
                  date={article.date}
                  title={article.title}
                  excerpt={article.excerpt}
                  imageUrl={article.imageUrl}
                  link={article.link}
                />
              ))}
            </section>

            {/* Second Featured Article (Reversed) */}
            <FeaturedNewsCard 
              date={featuredArticle2.date}
              title={featuredArticle2.title}
              excerpt={featuredArticle2.excerpt}
              imageUrl={featuredArticle2.imageUrl}
              link={featuredArticle2.link}
              isReversed={true}
            />

            {/* Second Grid */}
            <section className={styles.newsGrid}>
              {gridArticles2.map((article, index) => (
                <NewsCard 
                  key={`grid2-${index}`}
                  date={article.date}
                  title={article.title}
                  excerpt={article.excerpt}
                  imageUrl={article.imageUrl}
                  link={article.link}
                />
              ))}
            </section>
          </div>

          <aside className={styles.sidebar}>
            <FloatingTags />
          </aside>
        </div>

      </div>
    </main>
  );
}
