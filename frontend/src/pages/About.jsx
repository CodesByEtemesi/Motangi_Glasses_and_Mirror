import React from 'react'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'
import {assets} from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="About Us" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p className='text-lg'>Welcome to our online store! We are passionate about providing high-quality products and exceptional customer service. Our mission is to make your shopping experience enjoyable and convenient.</p>
          <p className='text-lg'>We carefully curate our selection to ensure that you have access to the latest trends and timeless classics. Whether you're looking for fashion, electronics, or home essentials, we have something for everyone.</p>
          <p className='text-lg'>Thank you for choosing us as your go-to destination for all your shopping needs. We look forward to serving you and exceeding your expectations!</p> 
          <b className='text-gray-800'>Our Mission</b>
          <p className='text-lg'>To provide our customers with a seamless online shopping experience, offering a wide range of high-quality products at competitive prices. We strive to exceed customer expectations through exceptional service and a commitment to excellence.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>We take pride in the quality of our products and the service we provide. Every item in our inventory is carefully selected to meet our high standards.</p>
        </div>
        <div className='border px-10 md:px16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Fast Shipping</b>
          <p className='text-gray-600'>We offer fast and reliable shipping options to get your products to you quickly and safely.</p>
        </div>
        <div className='border px-10 md:px16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Convenience</b>
          <p className='text-gray-600'>Shopping with us is easy and convenient. Our user-friendly website and efficient customer service make your shopping experience seamless.</p>
        </div>
        <div className='border px-10 md:px16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>We are committed to providing exceptional customer service. Our team is always ready to assist you with any questions or concerns you may have.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About