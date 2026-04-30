import React from 'react';
import Hero from "@/components/core/home/Hero";
import StickyNav from "@/components/common/Navbar/StickyNav";
import OurInitiatives from "@/components/core/sustainability/OurInitiatives";
import SustainabilityPartners from "@/components/core/sustainability/SustainabilityPartners";
import KeyDocuments from "@/components/core/sustainability/KeyDocuments";
import RelatedDocuments from "@/components/core/sustainability/RelatedDocuments";
import SustainabilityFaqs from "@/components/core/sustainability/SustainabilityFaqs";
import CtaSection from "@/components/common/CtaSection/CtaSection";
import MissionSection from '@/components/common/MissionSection/MissionSection';
import BeyondBusiness from '@/components/core/home/BeyondBusiness';
import FocusAreasSection from '@/components/common/FocusAreasSection/FocusAreasSection';
import AlternateCardSection from '@/components/common/AlternateSection/AlternateCardSection';

export default function page() {
  const navItems = [
    { id: 'initiatives', label: 'Our Journey' },
    { id: 'partnerships', label: 'Partnerships' },
    { id: 'documents', label: 'Documents' },
    { id: 'related-documents', label: 'Related Documents' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const initiativesCards = [
    {
      title: 'OUR CLIMATE JOURNEY',
      imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
      url: '#'
    },
    {
      title: 'SUSTAINABILITY REPORTING',
      imageUrl: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80',
      url: '#'
    }
  ];

  const focusAreas = [
    {
      id: 'energy-transition',
      tabLabel: 'Energy Transition',
      cardTitle: 'ENERGY TRANSITION',
      cardDescription: 'We are investing heavily in renewable energy to power our ports and terminals. By integrating solar panels and wind turbines into our infrastructure, we are significantly reducing our reliance on fossil fuels. This transition not only cuts our carbon footprint but also demonstrates our commitment to a sustainable energy future.',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80'
    },
    {
      id: 'sustainability-reporting',
      tabLabel: 'Sustainability Reporting',
      cardTitle: 'SUSTAINABILITY REPORTING',
      cardDescription: 'Transparency is key to our sustainability journey. We regularly publish comprehensive sustainability reports that detail our environmental impact, goals, and progress. These reports follow international standards and frameworks, ensuring accountability and continuous improvement.',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&q=80'
    },
    {
      id: 'development-impact',
      tabLabel: 'Development Impact',
      cardTitle: 'DEVELOPMENT IMPACT',
      cardDescription: 'Our operations extend beyond business to create a positive social impact. We invest in local communities, supporting education, healthcare, and infrastructure development. By empowering communities, we aim to foster long-term economic growth and resilience.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80'
    }
  ];

  const partners = [
    { name: 'Partner 1', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Partner 2', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
    { name: 'Partner 3', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
    { name: 'Partner 4', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  ];

  const keyDocuments = [
    {
      title: '2023 SUSTAINABILITY REPORT',
      type: 'KEY DOCUMENT',
      imageUrl: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?w=800&q=80',
      downloadUrl: '#'
    },
    {
      title: 'OUR CLIMATE JOURNEY',
      type: 'REPORT',
      imageUrl: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80',
      downloadUrl: '#'
    },
    {
      title: 'ENVIRONMENTAL POLICY',
      type: 'POLICY',
      imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80',
      downloadUrl: '#'
    },
    {
      title: 'SOCIAL IMPACT OVERVIEW',
      type: 'OVERVIEW',
      imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80',
      downloadUrl: '#'
    }
  ];

  const relatedDocuments = [
    { title: 'DP World Sustainability Strategy', url: '#' },
    { title: 'Net Zero by 2050 Commitment', url: '#' },
    { title: 'Community Investment Guidelines', url: '#' },
    { title: 'Supplier Code of Conduct', url: '#' },
  ];

  const faqs = [
    {
      question: 'How is DP World reaching net zero across all operations?',
      answer: <p>We have developed a comprehensive decarbonization roadmap that targets net zero emissions by 2050. This involves transitioning to renewable energy, electrifying our equipment, and improving operational efficiency across all our terminals.</p>
    },
    {
      question: 'What are DP World\'s shipping targets?',
      answer: <p>Our shipping targets include significantly reducing carbon intensity by optimizing vessel routes and adopting alternative fuels. We aim to support the global transition to sustainable maritime transport.</p>
    }
  ];

  const featureCards = [
    {
      title: 'DEVELOPMENT IMPACT',
      description: 'Our Development Impact Catalogue explores how DP World supports sustainable development through its global operations. By combining smart logistics with infrastructure investment, we create long-term value for communities, supporting jobs, growth, and access, and helping to build a more inclusive global economy.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
      link: '#'
    },
    {
      title: 'ENVIRONMENTAL STEWARDSHIP',
      description: 'Protecting the planet is at the heart of our mission. We implement rigorous environmental management systems to minimize our impact on biodiversity and ecosystems. From waste reduction to water conservation, we are committed to leaving a healthier planet for future generations.',
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80',
      link: '#'
    },
    {
      title: 'COMMUNITY EMPOWERMENT',
      description: 'We believe that our success is linked to the prosperity of the communities we serve. Our social investment programs focus on education, vocational training, and entrepreneurship, providing individuals with the tools they need to succeed and thrive in a rapidly changing world.',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80',
      link: '#'
    }
  ];

  return (
    <main>
      <Hero 
        title="SUSTAINABILITY" 
        description="" 
        paragraph="We are committed to sustainable development and environmental responsibility"
        videoUrl="https://cdn.pixabay.com/video/2020/07/10/44370-438662051_large.mp4" 
      />
      
      <StickyNav navItems={navItems} />

      <MissionSection label="Our Mission" title={<>LEADING TRADE<br/>TO NET ZERO</>}>
        <p>We are driving the logistics industry towards a more sustainable future through our global initiatives that deliver lasting benefits for communities today and for generations to come.</p>
      </MissionSection>

      <BeyondBusiness heading='OUR INITIATIVES'/>
      <FocusAreasSection 
        title="OUR JOURNEY" 
        description="We are committed to sustainable development and environmental responsibility through our core focus areas."
        areas={focusAreas}
      />

      {featureCards.map((card, index) => (
        <AlternateCardSection 
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
          link={card.link}
          isReversed={index % 2 !== 0}
        />
      ))}

      <SustainabilityPartners partners={partners} />

      <KeyDocuments documents={keyDocuments} />

      <RelatedDocuments documents={relatedDocuments} />

      <SustainabilityFaqs faqs={faqs} />

      <CtaSection
        title="SUSTAINABILITY AT DP WORLD"
        description="Making a positive impact on the world."
        buttonText="Read More"
        buttonLink="#"
        bgImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1800&q=80"
      />
    </main>
  );
}