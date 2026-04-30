import React from 'react';
import styles from './page.module.css';
import NewsCard from '@/components/core/news/NewsCard/NewsCard';
import FeaturedNewsCard from '@/components/core/news/FeaturedNewsCard/FeaturedNewsCard';
import FloatingTags from '@/components/core/news/FloatingTags/FloatingTags';

export default function NewsPage() {
  const featuredArticle1 = {
    date: '18 Apr 2024',
    title: 'DP WORLD NAMED OFFICIAL LOGISTICS...',
    excerpt: 'DP World to become an Official Logistics Partner covering select races for the global all-electric championship as part of a multi-year deal.',
    imageUrl: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80',
    link: '#'
  };

  const gridArticles1 = [
    {
      date: '22 Apr 2024',
      title: 'DP WORLD JOINS CLEAN SEAS INITIATIVE TO CUT...',
      excerpt: 'DP World outlines action plan to reduce marine plastic pollution aligned with UN efforts for environmental conservation.',
      imageUrl: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80',
      link: '#'
    },
    {
      date: '21 Apr 2024',
      title: 'DP WORLD ANNOUNCES US$ 500,000...',
      excerpt: 'ABU DHABI, UAE – 21 April 2024: DP World today announced an investment to support humanitarian operations and disaster relief efforts.',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      link: '#'
    },
    {
      date: '20 Apr 2024',
      title: 'DP WORLD LAUNCHES FIRST PORT-BASED...',
      excerpt: 'New solutions will help streamline logistics operations and cut carbon emissions globally through digital port tracking.',
      imageUrl: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&q=80',
      link: '#'
    },
    {
      date: '19 Apr 2024',
      title: 'MULTIMODAL CORRIDORS GAIN GROUND AS SUPPL...',
      excerpt: 'Innovations in supply chain management drive a shift towards integrated networks combining rail, sea and road logistics.',
      imageUrl: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80',
      link: '#'
    },
    {
      date: '16 Apr 2024',
      title: 'UK \'VINYL REVIVAL\' CONTINUES AS DP WORLD GEARS UP...',
      excerpt: 'UK Record Store Day has seen a massive surge in sales with logistics support from DP World to deliver records nationwide.',
      imageUrl: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&q=80',
      link: '#'
    },
    {
      date: '15 Apr 2024',
      title: 'THE DP WORLD EFFECT IN THE PHILIPPINES:...',
      excerpt: 'New partnerships in the Philippines are driving local economic growth and trade efficiency across major regional ports.',
      imageUrl: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80',
      link: '#'
    }
  ];

  const featuredArticle2 = {
    date: '10 Apr 2024',
    title: 'DP WORLD MARKS NEW MILESTONE IN...',
    excerpt: 'Pioneering infrastructure development in the city transforms local and global trade capacities by opening advanced terminals.',
    imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80',
    link: '#'
  };

  const gridArticles2 = [
    {
      date: '8 Apr 2024',
      title: 'DP WORLD AND ICHIJO KOMUTEN STRENGTHEN...',
      excerpt: 'Partnership ensures stable housing material supply chain using advanced logistics between international distribution hubs.',
      imageUrl: 'https://images.unsplash.com/photo-1487875961445-47a00398c267?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '#'
    },
    {
      date: '28 Mar 2024',
      title: 'DP WORLD RENEWS DELHI CAPITALS PARTNERSHIP...',
      excerpt: 'Logistics giant extends its support for the IPL team for the upcoming T20 season reflecting strong community ties.',
      imageUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80',
      link: '#'
    },
    {
      date: '26 Mar 2024',
      title: 'HOW SEAWEED FARMING CAN HELP INDIA\'S FISHING...',
      excerpt: 'Women-led seaweed farming initiatives provide sustainable alternative livelihoods and promote coastal biodiversity.',
      imageUrl: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80',
      link: '#'
    },
    {
      date: '24 Mar 2024',
      title: 'DP WORLD HANDLES 10 MILLIONTH CONTAINER IN...',
      excerpt: 'A major milestone achieved as DP World continues to expand its terminal operations handling record breaking volumes.',
      imageUrl: 'https://images.unsplash.com/photo-1491677533189-49af044391ed?q=80&w=1173',
      link: '#'
    },
    {
      date: '23 Mar 2024',
      title: 'DP WORLD ADDS THREE QUAY CRANES AT JEDDA...',
      excerpt: 'Terminal enhancement will boost capacity and operational efficiency at the Islamic Port, supporting global trade demands.',
      imageUrl: 'https://images.unsplash.com/photo-1452179535021-368bb0edc3a8?q=80&w=1171',
      link: '#'
    },
    {
      date: '21 Mar 2024',
      title: 'DP WORLD PLANTING UNDERWATER...',
      excerpt: 'Conservation efforts include planting underwater kelp forests to restore marine habitats and promote sustainable ocean health.',
      imageUrl: 'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?q=80&w=1170',
      link: '#'
    }
  ];

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        
        {/* Header Section */}
        <section className={styles.header}>
          <div className={styles.breadcrumb}>
            <a href="/">Home</a> <span>›</span> News
          </div>
          <h1 className={styles.title}>NEWSROOM</h1>
          <p className={styles.description}>
            Keep up with our latest company news, announcements and 
            events from across our global operations. For media 
            enquiries please contact: <a href="mailto:mediarelations@dpworld.com" className={styles.contactLink}>mediarelations@dpworld.com</a>
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
