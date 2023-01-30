import styled from "styled-components";
import CustomCarousel from "../../Common Components/Carousel";
import {
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  mainServiceImage1,
  mainServiceImage2,
  mainServiceImage3,
  mainServiceImage4,
} from "../../../common/constants/imagePaths";
import { SampleVideo } from "../../../common/constants/videoPaths";
import {
  welcomeTitle,
  mainServicesTitle,
  goshala,
  prasadam,
  deityDepartment,
  ekadashiKirtan,
  founderAcharya,
} from "../../../common/constants/constant";
import "./dashboard.scss";
const images = [
  {
    image: slide1,
  },
  {
    image: slide2,
  },
  {
    image: slide3,
  },
  {
    image: slide4,
  },
  {
    image: slide5,
  },
];
const Dashboard = () => {
  const { dashboard } = require("../../../data.json");
  return (
    <>
      <CustomCarousel images={images} />
      <Section>
        <Title>{welcomeTitle}</Title>
        <Text>{dashboard.welcomeText}</Text>
      </Section>
      <Section>
        <Title>{mainServicesTitle}</Title>
        <Text>{dashboard.mainServicesText}</Text>
        <ServicesTypes>
          <TypeContainer>
            <Wrap>
              <ServiceImage src={mainServiceImage1} />
            </Wrap>
            <SubHeading>{goshala}</SubHeading>
          </TypeContainer>
          <TypeContainer>
            <Wrap>
              <ServiceImage src={mainServiceImage2} />
            </Wrap>
            <SubHeading>{prasadam}</SubHeading>
          </TypeContainer>
          <TypeContainer>
            <Wrap>
              <ServiceImage src={mainServiceImage3} />
            </Wrap>
            <SubHeading>{deityDepartment}</SubHeading>
          </TypeContainer>
          <TypeContainer>
            <Wrap>
              <ServiceImage src={mainServiceImage4} />
            </Wrap>
            <SubHeading>{ekadashiKirtan}</SubHeading>
          </TypeContainer>
        </ServicesTypes>
      </Section>
      <OurAcharya>
        <Title>{founderAcharya}</Title>
        <div className="" >
          
        </div>

        {/* <VideoText id="video-text">wfwfwffwf</VideoText> */}
        {/* <BackgroundVideo autoPlay loop muted>
          <source src={BgVideo} type="video/mp4" />
        </BackgroundVideo> */}
        
      </OurAcharya>
    </>
  );
};

export default Dashboard;

const Section = styled.div`
  margin: 50px 100px;
  align-items: center;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 2.5rem;
  color: #484338;
  text-align: center;
`;
const Text = styled.p`
  font-size: 19px;
  letter-spacing: 0.5px;
  word-spacing: 2px;
  line-height: 1.8;
  margin-bottom: 20px;
  cursor: pointer;
`;
const SubHeading = styled.h4`
  font-size: 20px;
  color: #484338;
`;
const ServicesTypes = styled.div`
  margin-top: 40px;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const TypeContainer = styled.div`
  z-index: 1;
`;
const Wrap = styled.div`
  cursor: pointer;
  border-radius: 20px;
  border: 3px solid #484338;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  overflow: hidden;
  transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgba(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.1);
    // border-color:rgba(249 , 249 , 249,0.8)
  }
`;
const ServiceImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

const OurAcharya = styled.div`
  position: relative;
  margin-left: 20px;
  margin-right: 20px;
`;
const BackgroundVideo = styled.video`
  width: 100%;
  border-radius: 30px;
`;

const VideoText = styled.div`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;
