"use client";
import { useEffect, useState, useRef } from 'react';
import styles from './StickyNav.module.css';

export interface NavItem {
  id: string;
  label: string;
}

interface StickyNavProps {
  navItems?: NavItem[];
}

const defaultNavItems = [
  { id: 'home', label: 'Home' },
  { id: 'beyond-business', label: 'Beyond Business' },
  { id: 'hello', label: 'Hello' },
  { id: 'nice', label: 'Nice To Meet You' },
];

export default function StickyNav({ navItems = defaultNavItems }: StickyNavProps) {
  const [activeId, setActiveId] = useState(navItems.length > 0 ? navItems[0].id : '');
  const [stripStyle, setStripStyle] = useState({ left: 0, width: 0 });
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const updateStrip = () => {
    const activeIndex = navItems.findIndex((item) => item.id === activeId);
    if (activeIndex !== -1 && navRefs.current[activeIndex]) {
      const activeElement = navRefs.current[activeIndex];
      if (activeElement) {
        setStripStyle({
          left: activeElement.offsetLeft,
          width: activeElement.offsetWidth,
        });

        // Scroll container to center the active item on mobile screens
        if (containerRef.current) {
          const container = containerRef.current;
          const scrollTarget =
            activeElement.offsetLeft -
            container.offsetWidth / 2 +
            activeElement.offsetWidth / 2;
          container.scrollTo({
            left: scrollTarget,
            behavior: 'smooth',
          });
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = 'home';
      // Traverse from bottom-most section to top-most
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // If the top of the section is above or near the middle of the viewport
          if (rect.top <= window.innerHeight / 2.5) {
            current = item.id;
            break;
          }
        }
      }
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    updateStrip();
    window.addEventListener('resize', updateStrip);
    // Timeout to ensure layout has shifted if any fonts loaded
    const timeout = setTimeout(updateStrip, 300);
    return () => {
      window.removeEventListener('resize', updateStrip);
      clearTimeout(timeout);
    };
  }, [activeId]);

  return (
    <div className={styles.stickyWrapper}>
      <nav className={styles.stickyNav}>
        <div className={styles.navContainer} ref={containerRef}>
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              ref={(el) => {
                navRefs.current[index] = el;
              }}
              className={`${styles.navItem} ${
                activeId === item.id ? styles.active : ''
              }`}
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById(item.id);
                if (section) {
                  // Adjust for sticky nav height so it doesn't cover content
                  const navHeight =
                    document.querySelector(`.${styles.stickyNav}`)
                      ?.clientHeight || 70;
                  const elementPosition =
                    section.getBoundingClientRect().top + window.scrollY;
                  const offsetPosition = elementPosition - navHeight;

                  if (item.id === 'home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth',
                    });
                  }
                }
              }}
            >
              {item.label}
            </a>
          ))}
          <div
            className={styles.strip}
            style={{ left: stripStyle.left, width: stripStyle.width }}
          />
        </div>
      </nav>
    </div>
  );
}
