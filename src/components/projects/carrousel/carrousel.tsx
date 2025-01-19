import { useState, useEffect } from "react";
import * as C from "./styles";
import * as G from "../../../GlobalStyles";
import teste from "../../../assets/imgs/projetos/book-finder/1.png";

interface CarrouselProps {
  images: string[];
}

export const Carrousel = ({ images }: CarrouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex: any) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex: any) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <G.Container width="50%" padding="30px" borderRadius="15px">
      <C.Carousel>
        <C.Slider style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <C.Img src={image} alt={`Imagem ${index + 1}`} />
          ))}
        </C.Slider>
        <C.ButtonPrev onClick={handlePrev}>{"<"}</C.ButtonPrev>
        <C.ButtonNext onClick={handleNext}>{">"}</C.ButtonNext>
      </C.Carousel>
    </G.Container>
  );
};

export default Carrousel;
