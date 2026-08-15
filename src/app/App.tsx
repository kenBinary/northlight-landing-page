import { PricingSection } from "../features/billing/PricingSection";
import { FeaturesSection } from "../features/features-grid/FeaturesSection";
import { Header } from "../features/header/Header";
import { HeroSection } from "../features/hero/HeroSection";
import { HowItWorksSection } from "../features/steps/HowItWorksSection";
import { TestimonialSection } from "../features/testimonial/TestimonialSection";
import { TrustSection } from "../features/trust/TrustSection";
import { FaqSection } from "../features/faq/FaqSection";
import { CtaSection } from "../features/cta/CtaSection";
import { FooterSection } from "../features/footer/FooterSection";

export function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        <HeroSection />

        <TrustSection />

        <FeaturesSection />

        <HowItWorksSection />

        <PricingSection />

        <TestimonialSection />

        <FaqSection />

        <CtaSection />

        <FooterSection />
      </main>
    </>
  );
}

export default App;
