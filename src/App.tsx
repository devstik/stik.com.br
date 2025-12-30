import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import {AnimatedSection} from './components/animations/AnimatedSections';
import InfiniteCarouselWithForm from './components/InfiniteCarouselWithForm';
import ProductCategories from './components/ProductCategories';
import Diferentials from './components/Diferentials';
import { Routes, Route } from 'react-router-dom';
import CategoryPage from './components/CategoryPage';
import ScrollToTop from './components/animations/ScrollToTop';




const newReleases = [
  { id: 1, name: 'Conjunto Sutiã e Calcinha Renda Delicada', price: 89.90, originalPrice: 129.90, image: 'Produto', isNew: true, discount: 31 },
  { id: 2, name: 'Sutiã Com Bojo Microfibra Conforto', price: 54.90, originalPrice: 79.90, image: 'Produto', isNew: true, discount: 31 },
  { id: 3, name: 'Calcinha Fio Dental Renda Francesa', price: 29.90, image: 'Produto', isNew: true },
  { id: 4, name: 'Conjunto Top e Calcinha Cotton Soft', price: 69.90, originalPrice: 99.90, image: 'Produto', isNew: true, discount: 30 },
  { id: 5, name: 'Sutiã Amamentação Sem Costura', price: 79.90, image: 'Produto', isNew: true },
  { id: 6, name: 'Calcinha Caleçon Alta Modeladora', price: 39.90, image: 'Produto', isNew: true },
  { id: 7, name: 'Conjunto Strappy Sensual Renda', price: 119.90, originalPrice: 159.90, image: 'Produto', isNew: true, discount: 25 },
  { id: 8, name: 'Sutiã Plus Size Reforçado', price: 89.90, image: 'Produto', isNew: true },
];

const bestSellers = [
  { id: 9, name: 'Conjunto Sutiã e Calcinha Clássico', price: 79.90, originalPrice: 109.90, image: 'Produto', discount: 27 },
  { id: 10, name: 'Sutiã Push Up Efeito Natural', price: 64.90, image: 'Produto' },
  { id: 11, name: 'Calcinha Alta Cintura Modeladora', price: 44.90, originalPrice: 59.90, image: 'Produto', discount: 25 },
  { id: 12, name: 'Conjunto Renda Floral Romântico', price: 94.90, image: 'Produto' },
  { id: 13, name: 'Sutiã Bralette Sem Bojo Conforto', price: 49.90, image: 'Produto' },
  { id: 14, name: 'Calcinha Tanga Microfibra Lisa', price: 24.90, image: 'Produto' },
  { id: 15, name: 'Conjunto Luxo Renda Premium', price: 149.90, originalPrice: 199.90, image: 'Produto', discount: 25 },
  { id: 16, name: 'Sutiã Triângulo Ajustável', price: 59.90, image: 'Produto' },
];

function HomePage() {
  // Conteúdo da home
  return (
    <>
      <HeroBanner />
      <AnimatedSection>
        <ProductCategories />
      </AnimatedSection>
      <AnimatedSection>
        <ProductSection title="Lançamentos" products={newReleases} />
      </AnimatedSection>
      <AnimatedSection>
        <Diferentials />
      </AnimatedSection>
      <AnimatedSection>
        <ProductSection title="Mais Vendidos" products={bestSellers} />
      </AnimatedSection>
      <AnimatedSection>
        <InfiniteCarouselWithForm />
      </AnimatedSection>
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <ScrollToTop/>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categorias/:categoria" element={<CategoryPage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
export default App;
