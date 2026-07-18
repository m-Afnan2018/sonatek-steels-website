import HeroSection from "@/components/common/HeroSection/HeroSection";
import ContactForm from "./ContactForm";
import LocationSection from "./LocationSection";

export default function ContactUs() {
  return (
    <main>
      <HeroSection
        title="Let&apos;s Talk"
        description="Our team of experts is always ready to assist you with your needs."
        bgImage="https://images.unsplash.com/photo-1613993995046-07bce4b0bfed?q=80&w=1170&auto=format"
        breadcrumb={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Contact Us",
            href: "/contact-us",
          },
        ]}
      />
      <ContactForm />
      <LocationSection />
    </main>
  );
}
