import { testimonialsData } from '@/src/utils/data'
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'

const SlickSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        touchMove: true,
        useCSS: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }
  return (
    <div>
        <Slider {...settings}>
            {
                testimonialsData.map((comment, i)=> (
                    <div key={i} className='comment'>
                        {/* upper side */}
                        <div className="c-content">
                            <Image
                            src={"/apos.svg"} 
                            className='apos-slider' 
                            alt='apos'
                            width={40}
                            height={30}
                            />
                            <span>{comment.comment}</span>
                        </div>

                        {/* lower side */}
                        <div className="c-info">
                            <div className="c-avatar">
                                {comment.name[0]}
                            </div>
                            <div className="c-person">
                                <span>{comment.name}</span>
                                <span>{comment.profession}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </Slider>
    </div>
  )
}

export default SlickSlider