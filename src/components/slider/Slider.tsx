import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from '../../assets/Imgs//js/js2.jpg'
import img2 from '../../assets/Imgs/jira/jira2.jpg'
import img3 from '../../assets/Imgs/uiux/ui2.png'
import img4 from '../../assets/Imgs/ai/ai2.jpg'
import img5 from '../../assets/Imgs/ml/ml2.jpeg'
import img6 from '../../assets/Imgs/react/rct2.png'
import './slider.css'

const MySlider1 = () => {
    const settings = {
        dots: true, // Show navigation dots
        infinite: true, // Allow infinite scrolling
        speed: 400, // Transition speed in milliseconds
        slidesToShow: 1, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll per interaction
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Autoplay speed in milliseconds
    };

    return (
        <div className='slider-cont'>
            <Slider {...settings}>
                {[
                    img1,
                    img2,
                    img3,
                    img4,
                    img5,
                    img6
                ].map((image) => (
                    <div className='img1' key={image}>
                        <img src={image} alt="" />
                    </div >
                ))}

            </Slider>
        </div>
    );
};


export default MySlider1;