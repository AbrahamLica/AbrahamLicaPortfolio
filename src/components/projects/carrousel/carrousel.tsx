import { useState, useEffect, useRef } from 'react';
import * as C from './styles';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { MdClose } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface CarrouselProps {
  images: string[];
}

export const Carrousel = ({ images }: CarrouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const userInteractionRef = useRef(false);

  const handleNext = () => {
    userInteractionRef.current = true;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    userInteractionRef.current = true;
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const openModal = (index: number) => {
    if (!isSmallScreen) {
      setCurrentIndex(index);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const interval = setInterval(() => {
      if (!userInteractionRef.current) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      } else {
        userInteractionRef.current = false;
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1000);
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return (
    <>
      <C.MainContainer data-aos='fade-left'>
        <C.Carousel>
          <C.Slider style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((image, index) => (
              <C.Img key={index} src={image} alt={`Imagem ${index + 1}`} onClick={() => openModal(index)} isSmallScreen={isSmallScreen} />
            ))}
          </C.Slider>

          <C.ButtonPrev onClick={handlePrev}>
            <GoChevronLeft />
          </C.ButtonPrev>
          <C.ButtonNext onClick={handleNext}>
            <GoChevronRight />
          </C.ButtonNext>
        </C.Carousel>
        <C.Contador>
          {currentIndex + 1} / {images.length}
        </C.Contador>
      </C.MainContainer>

      {isModalOpen && (
        <C.Modal onClick={closeModal}>
          <C.ModalContent onClick={(e) => e.stopPropagation()}>
            <C.CloseButton onClick={closeModal}>
              <MdClose />
            </C.CloseButton>
            <C.ModalCarousel>
              <C.ModalImg src={images[currentIndex]} alt={`Imagem ${currentIndex + 1}`} />
              <C.ButtonPrev onClick={handlePrev}>
                <GoChevronLeft />
              </C.ButtonPrev>
              <C.ButtonNext onClick={handleNext}>
                <GoChevronRight />
              </C.ButtonNext>
            </C.ModalCarousel>
            <C.Contador>
              {currentIndex + 1} / {images.length}
            </C.Contador>
          </C.ModalContent>
        </C.Modal>
      )}
    </>
  );
};
