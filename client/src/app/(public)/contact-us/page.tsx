import HeroSection from "@/components/common/HeroSection/HeroSection";
import ContactForm from "./ContactForm";

export default function ContactUs() {
  return (
    <main>
      <HeroSection
        title="Let&apos;s Talk"
        description="Our team of experts is always ready to assist you with your needs."
        bgImage="https://images.unsplash.com/photo-1740560051533-3acef26ace95?q=80&w=1170&auto=format&fit=crop"
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
    </main>
  );
}
