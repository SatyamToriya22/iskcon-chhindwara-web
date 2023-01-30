// import {Carousel} from '3d-react-carousal';
// import ImageGallery from 'react-image-gallery';
import { Carousel } from 'react-carousel-minimal';

// const images = [
//   {
//     original: 'https://picsum.photos/id/1018/1000/600/',
//     // thumbnail: 'https://picsum.photos/id/1018/250/150/',
//     sizes:'100px'
//   },
//   {
//     original: 'https://picsum.photos/id/1015/1000/600/',
//     // thumbnail: 'https://picsum.photos/id/1015/250/150/',
//   },
//   {
//     original: 'https://picsum.photos/id/1019/1000/600/',
//     // thumbnail: 'https://picsum.photos/id/1019/250/150/',
//   },
// ];
const CustomCarousel = ({images}) => {
  return <>
    <Carousel
            data={images}
            time={4000}
            width="100vw"
            height="calc(100vh - 140px)"
            // captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            // slideNumberStyle={slideNumberStyle}
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            style={{
              textAlign: "center",
              // maxWidth: "850px",
              // maxHeight: "500px",
              // margin: "40px auto",
            }}
          />
  </>
}
export default CustomCarousel