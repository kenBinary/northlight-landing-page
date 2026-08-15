import { Header } from "../features/header/Header";
import { HeroSection } from "../features/hero/HeroSection";

export function App() {
  return (
    <>
      <Header />

      <main id="main-content">
        <HeroSection />
      </main>
    </>
  );
}

export default App;
