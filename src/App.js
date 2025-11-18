import React from 'react';
import './styles/global.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StepsSection from './components/StepsSection';
import ServicesSection from './components/ServiceSection';
import BlogSection from './components/BlogSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <StepsSection />
        <ServicesSection />
        <BlogSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;