import Slider from 'react-slick';
import styled from 'styled-components';
import { ScoopWebtoonCard } from './ScoopWebtoonCard';

var small_settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
};

const StyledSlider = styled(Slider)`
    .slick-slide div{
      outline: none; 
      border-radius:2px
      padding:3px;
      text-align:center;
      margin-right:4px;
      margin-left:4px;
    }
`;
interface WebtoonCardCarouselProps {
  webtoon: any[];
}

export const ScoopWebtoonCarousel: React.FC<WebtoonCardCarouselProps> = ({webtoon}) => {
  return (
    
    <StyledSlider {...small_settings}>
      {webtoon?.map((w: any,i: number ) => {
        return <div key={w.id}>
          {/* <ScoopWebtoonCarousel webtoon={webtoon} /> */}
        </div>
      })}
    </StyledSlider>
  )
}