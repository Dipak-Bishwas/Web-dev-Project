import React from 'react'
import { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';

const Freebook = () => {
  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async()=>{
      try {
        const res = await axios.get("http://localhost:8000/book")
        const data = res.data.filter((data)=>data.category === "Free")
        console.log(data);
        setBook(data)
      } catch (error) {
        console.log(error);
      }
    }
    getBook()
  },[])
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div>
        <h1 className='font-semibold text-xl pb-2'>Free Offered Course</h1>
        <p>
        Explore a world of knowledge with our free offered courses!<br />
        Enhance your skills and broaden your horizons with a variety of topics designed to fit your learning needs, all at no cost.
        </p>
      </div>
      <div>
      <Slider {...settings}>
        {
            book.map((item)=> (
                <Cards item={item} key={item.id}/>
            ))
        }
      </Slider>
      </div>
    </div>
  )
}

export default Freebook
