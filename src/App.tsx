import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import DocsSection from "./components/DocsSection";
import Demo from "./components/Demo";
import Footer from "./components/Footer";

const App = () => (
  <>
    <main style={{ fontFamily: "Cabin, sans-serif" }}>
      <Header />
      <div className="flex flex-col min-h-[100dvh]">
        <main className="flex-1">
          <Hero />
          <Features />
          <DocsSection />
          <Demo />
        </main>
      </div>
    </main>
    <Footer />
  </>
);

export default App;
