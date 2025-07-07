import Navbar from "./components/navbar";
import LandingSection from "./components/landing-section";
import ExportSection from "./components/export-section";
import ProductsSection from "./components/products-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <LandingSection />
      <ExportSection />
      <ProductsSection />
      
    </div>
  );
}
