import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
// Импортируем компоненты Swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// Импортируем стили Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Импортируем модули Swiper
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Импортируем ваши реальные изображения
import blogImage1 from '../images/const1.jpg';
import blogImage2 from '../images/const2.jpg';
import blogImage3 from '../images/Const3.jpeg';

const BlogContainer = styled.section`
  padding: 4rem 2rem;
  background: #0A1E40;
  color: white;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    font-family: 'Bebas Neue', sans-serif;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;
  }

  .blog-slider-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .swiper {
    height: 400px;
    padding: 2rem 0;
  }

  .swiper-slide {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 5px 20px rgba(10, 30, 64, 0.3);
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.02);
      box-shadow: 0 8px 25px rgba(10, 30, 64, 0.5);
    }
  }

  .blog-card-image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    z-index: -1;
  }

  .blog-card-content {
    position: relative;
    z-index: 1;
    padding: 2rem;
    background: linear-gradient(to top, rgba(10, 30, 64, 0.9), rgba(10, 30, 64, 0.7));
    width: 100%;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .blog-card-title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #D4AF37;
    font-weight: 600;
  }

  .blog-card-text {
    font-size: 1rem;
    line-height: 1.6;
    opacity: 0.8;
    margin: 0; /* Убран margin */
    text-decoration: none; /* Убран text-decoration */
  }

  .blog-slider-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #D4AF37;
    background: rgba(255,255,255,0.3);
    border: none;
    font-size: 2rem;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;

    &:hover {
      background: rgba(212, 175, 55, 0.5);
      color: white;
    }
  }

  .swiper-button-next {
    right: 20px;
  }

  .swiper-button-prev {
    left: 20px;
  }

  .swiper-pagination {
    bottom: 20px;
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: rgba(212, 175, 55, 0.3);
    opacity: 1;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background: #D4AF37;
    transform: scale(1.3);
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
    .swiper {
      height: 300px;
    }
    .swiper-button-next,
    .swiper-button-prev {
      width: 30px;
      height: 30px;
      font-size: 1.5rem;
    }
  }
`;

function BlogSection() {
  const blogRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (blogRef.current) {
      const elements = blogRef.current.querySelectorAll('.blog-card');
      elements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const posts = [
    { 
      title: "Эволюция современной архитектуры", 
      image: blogImage1,
      text: "Современная архитектура стремительно развивается, интегрируя в свои проекты новые технологии и экологичные материалы."
    },
    { 
      title: "Тренды в строительстве 2025", 
      image: blogImage2,
      text: "Читайте наши последние статьи о лучших практиках и новинках в строительстве."
    },
    { 
      title: "Экономия без потерь качества", 
      image: blogImage3,
      text: "Как сэкономить на строительстве, не жертвуя качеством и надежностью."
    },
  ];

  return (
    <BlogContainer id="blog" ref={blogRef}>
      <h2>Блог экспертов в области строительства</h2>
      <div className="blog-slider-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {posts.map((post, index) => (
            <SwiperSlide key={index}>
              <div className="blog-card">
                <div className="blog-card-image" style={{ backgroundImage: `url(${post.image})` }}></div>
                <div className="blog-card-content">
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-text">{post.text}</p>
                  <div className="blog-slider-footer">
                    <a href="#" style={{ color: '#D4AF37', textDecoration: 'none' }}>Читать далее</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </BlogContainer>
  );
}

export default BlogSection;