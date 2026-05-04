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
      title: 'HEALTH & SAFETY FIRST',
      imageUrl: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&q=80',
      url: '#'
    },
    {
      title: 'SUSTAINABLE SOURCING',
      imageUrl: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80',
      url: '#'
    }
  ];

  const focusAreas = [
    {
      id: 'health-safety',
      tabLabel: 'Health & Safety',
      cardTitle: 'HEALTH & SAFETY',
      cardDescription: 'Safety is the utmost priority at Sonatek Steels. Everyone adheres to the policies and guidelines to ensure their well-being and the welfare of other people, property and environment. We maintain Occupation Health Centers (OHC) and strictly comply with applicable legislation, protocols and regulations.',
      image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1200&q=80'
    },
    {
      id: 'sustainable-sourcing',
      tabLabel: 'Sustainable Sourcing',
      cardTitle: 'SUSTAINABLE SOURCING',
      cardDescription: 'As a leading MOU dealer of SAIL, we prioritize sourcing steel from producers who follow eco-friendly manufacturing processes. Our supply chain is optimized for minimal environmental impact, ensuring that quality steel is delivered with responsibility and local technical assistance.',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&q=80'
    },
    {
      id: 'technical-excellence',
      tabLabel: 'Technical Excellence',
      cardTitle: 'TECHNICAL EXCELLENCE',
      cardDescription: 'Our mission is to maintain customer satisfaction through constant improvement and modernization of our products. Through our team of experienced and qualified professionals, we aim to engineer excellence in everything we do, ensuring high-performance solutions for all industrial segments.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80'
    }
  ];

  const partners = [
    { name: 'Partner 2', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
    { name: 'Partner 3', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
    { name: 'Partner 4', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Partner 5', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Partner 6', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
    { name: 'Partner 7', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
    { name: 'Partner 8', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  ];

  const keyDocuments = [
    {
      title: 'SAFETY PROTOCOL 2024',
      type: 'KEY DOCUMENT',
      imageUrl: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?w=800&q=80',
      downloadUrl: '#'
    },
    {
      title: 'HEALTH & SAFETY POLICY',
      type: 'POLICY',
      imageUrl: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80',
      downloadUrl: '#'
    },
    {
      title: 'ENVIRONMENTAL STEWARDSHIP',
      type: 'REPORT',
      imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80',
      downloadUrl: '#'
    },
    {
      title: 'SUPPLIER CODE OF CONDUCT',
      type: 'CONDUCT',
      imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80',
      downloadUrl: '#'
    }
  ];

  const relatedDocuments = [
    { title: 'Sonatek Steels Sustainability Strategy', url: '#' },
    { title: 'Net Zero by 2050 Commitment', url: '#' },
    { title: 'Community Investment Guidelines', url: '#' },
    { title: 'Supplier Code of Conduct', url: '#' },
  ];

  const faqs = [
    {
      question: 'What are the safety standards at Sonatek Steels?',
      answer: <p>Safety is our utmost priority. We strictly comply with applicable legislation, protocols, and regulations. We maintain fire protection systems, Occupational Health Centers (OHC), and conduct regular checks of international safety standards and procedures.</p>
    },
    {
      question: 'How does Sonatek Steels ensure sustainable sourcing?',
      answer: <p>As an MOU dealer of SAIL, we ensure that our products come from producers committed to sustainable manufacturing. We also optimize our logistics in Northern India to minimize environmental impact during distribution.</p>
    }
  ];

  const featureCards = [
    {
      title: 'DEVELOPMENT IMPACT',
      description: 'Our Development Impact Catalogue explores how Sonatek Steels supports sustainable development through its global operations. By combining smart logistics with infrastructure investment, we create long-term value for communities, supporting jobs, growth, and access, and helping to build a more inclusive global economy.',
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

      <MissionSection label="Our Mission" title={<>ENGINEERING<br/>EXCELLENCE IN STEEL</>}>
        <p>Our mission is to maintain customer satisfaction through constant improvement and modernization of our products. Through our team of experienced and qualified professionals, we aim to engineer excellence in everything we do.</p>
      </MissionSection>

      <BeyondBusiness heading='OUR INITIATIVES'/>
      <FocusAreasSection 
        title="OUR JOURNEY" 
        description="We are committed to sustainable development and environmental responsibility through our core focus areas."
        areas={focusAreas}
        id="initiatives"
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

      <SustainabilityPartners id="partnerships" partners={partners} />

      <KeyDocuments id="documents" documents={keyDocuments} />

      <RelatedDocuments id="related-documents" documents={relatedDocuments} />

      <SustainabilityFaqs id="faqs" faqs={faqs} />

      <CtaSection
        title="SUSTAINABILITY AT SONATEK STEELS"
        description="Making a positive impact on the world."
        buttonText="Read More"
        buttonLink="#"
        bgImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1800&q=80"
      />
    </main>
  );
}