import React, { useEffect, useState } from 'react'
import rightChevron from "../../assets/right-arrow.svg"
import leftChevron from "../../assets/left-arrow.svg"
import "./Slider.css" ;
import sliderData from '../../data/sliderData';

export default function Slider() {
  const [sliderIndex, setSliderIndex] = useState(1);

    function toggleImage(indexPayload) {
        // let newState;
        // if(sliderIndex + indexPayload > sliderData.length) {
        //     newState = 1;
        // } else if(sliderIndex + indexPayload < 1) {
        //     newState = sliderData.length;
        // } else {
        //     newState = sliderIndex + indexPayload;
        // }
        // setSliderIndex(newState);
        setSliderIndex(state =>{
            if(state + indexPayload > sliderData.length) {
                return 1;
            } else if(state + indexPayload < 1) {
                return sliderData.length;
            } else {
                return state + indexPayload;
            }
        })
    }
    useEffect(() => {
        const intervalID = setInterval(() => {
            toggleImage(1);
        }, 2000);

        return () => clearInterval(intervalID);
    }, []);

    return (
    <>
        <p className="index-info">{sliderIndex} / {sliderData.length}</p>
        <div className="slider">
            <p className="image-info">{sliderData.find(obj => obj.id === sliderIndex).description}</p>
            <img src={`/images/img-${sliderIndex}.jpg`} alt="estate's room" className="slider-img" />

            <button
            onClick={() => toggleImage(-1)}
            className="navigation-button prev-button">
                <img src={leftChevron} alt="previous image" />
            </button>
            <button
            onClick={() => toggleImage(1)}
            className="navigation-button next-button">
                <img src={rightChevron} alt="next image" />
            </button>
        </div>
    </>
  )
}
