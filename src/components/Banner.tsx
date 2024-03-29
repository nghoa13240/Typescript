import React, { useState, useEffect } from 'react'

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = [
    'https://marketingtoancau.com/files/product/thiet-ke-banner-chuyen-nghiep-cho-cua-hang-dien-thoai-nhat-nam-mobile-dqovvmz5.jpg',
    'https://channel.mediacdn.vn/thumb_w/640/2019/1/17/photo-1-15477149575691110863026.jpg',
    'https://cdn.eva.vn/upload/4-2017/images/2017-11-27/iphone-x-gia-chi-4990000vnd-chi-co-tai-online-friday-2017-iphone-gia-re-chua-tung-co-1511750316-944-width660height347.jpg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className='banner-container'>
      <img src={images[currentImageIndex]} alt='Mobile Phone Banner' className='banner-image' />
    </div>
  )
}

export default Banner
