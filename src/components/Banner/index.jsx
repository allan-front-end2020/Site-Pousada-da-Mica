import Video1 from '../../assets/images/video1.mp4';


import {DivContainer, Carousel } from "./styled"



export default function Banner() {

  return (
    <DivContainer>
     
      <Carousel>
        <video autoPlay  loop>
          <source src={Video1} className='image-main' />
        </video>

      </Carousel>
    </DivContainer>
  );
}