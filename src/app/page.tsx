import Hero from "@/components/core/home/Hero";
import Impact from "@/components/core/home/Impact";
import SinglePlatform from "@/components/core/home/SinglePlatform";
import GlobalNetwork from "@/components/core/home/GlobalNetwork";
import BeyondBusiness from "@/components/core/home/BeyondBusiness";
import LatestNews from "@/components/core/home/LatestNews";
import CTABanner from "@/components/core/home/CTABanner";
import Testimonials from "@/components/core/home/Testimonials";
import Services from "@/components/core/home/Services";
import WhyDPWorld from "@/components/core/home/WhyDPWorld";

export default function Home() {
    return (
        <main>
            <Hero />
            <WhyDPWorld />
            <Impact />
            <SinglePlatform />
            <Services />
            <GlobalNetwork />
            <BeyondBusiness />
            <LatestNews />
            <Testimonials />
            <CTABanner />
        </main>
    );
}
