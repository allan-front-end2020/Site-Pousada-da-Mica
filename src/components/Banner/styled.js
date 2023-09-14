import styled from 'styled-components';

export const DivContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  background-color: transparent;

  .image-main {
    user-select: none;
    cursor: pointer;
    opacity: 0.4;

    &:hover {
      opacity: 0.7;
    }
  }
 
  .responsive-block {
    height: 69px;
  }

  .slider {
    position: relative;
  }
  .slider::before {
    content: '';
    position: absolute;
    top: 0;
    left: 100%;
    width: 10000%;
    height: 100%;
  }
`;
export const Carousel = styled.div`
   height: 100%;
   left:0;
   height: 80vh;
   object-fit:cover;

    video{
    width: 100%;
    height: 83vh;
    }
   source {

    right: 0;
    left: 0;
   }
`;