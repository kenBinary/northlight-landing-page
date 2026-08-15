import { PricingSection } from "../features/billing/PricingSection";
import { FeaturesSection } from "../features/features-grid/FeaturesSection";
import { Header } from "../features/header/Header";
import { HeroSection } from "../features/hero/HeroSection";
import { HowItWorksSection } from "../features/steps/HowItWorksSection";
import { TestimonialSection } from "../features/testimonial/TestimonialSection";
import { TrustSection } from "../features/trust/TrustSection";
import { FaqSection } from "../features/faq/FaqSection";
import { CtaSection } from "../features/cta/CtaSection";

export function App() {
  return (
    <>
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
      </main>
    </>
  );
}

export default App;
