import { useEffect, useState } from "react"
import styled from "styled-components"

const CarouselWrapper = styled.div`
    width: min(100%, 500px);
    overflow-x: hidden;
`

const CarouselMovingContainer = styled.div`
    display: flex;
    width: min(100%, 500px);
    background-size: cover;
    transform: translate(max(${(props) => props.$index * -100}vw, ${(props) => props.$index * -500}px));
    transition-duration: 1s;
`
const CarouselItemImage = styled.img`
    width: min(100vw, 500px);
`

const Carousel = (props) => {
    const [CarouselIndex, setCarouselIndex] = useState(0);
    const moveCarousel = () => {
        if(CarouselIndex >= props.items.length-1)
            setCarouselIndex(0);
        else
            setCarouselIndex(CarouselIndex + 1);
    }

    useEffect(() => {
        const timer = setInterval(() => {
            moveCarousel();
        }, 10000);
        return () => clearInterval(timer);
    }, [CarouselIndex]);

    return (
        <CarouselWrapper>
            <CarouselMovingContainer $index={CarouselIndex}>
                {props.items.map((item, index) => <CarouselItem key={index} item={item}/>)}
            </CarouselMovingContainer>
        </CarouselWrapper>
    )
} 


const CarouselItem = (props) => {
    return (
        <CarouselItemImage src={props.item.src} />
    )
}

export default Carousel;