import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Star } from 'lucide-react';
import 'swiper/css';

const testimonials = [
  {
    name: "John Doe",
    role: "Regular Traveler",
    comment: "Best bus service I've ever experienced. The staff is very professional and helpful.",
    rating: 5
  },
  {
    name: "Jane Smith",
    role: "Business Traveler",
    comment: "Comfortable seats and punctual service. Highly recommended for business trips.",
    rating: 5
  },
  {
    name: "Mike Johnson",
    role: "Tourist",
    comment: "Great tour packages and excellent customer support. Will definitely use again!",
    rating: 4
  },
  {
    name: "Sarah Williams",
    role: "Family Traveler",
    comment: "Safe and reliable service. Perfect for family trips with children.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="min-h-screen bg-blue-50 flex flex-col justify-center py-20 px-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials Slider */}
        <Swiper
          spaceBetween={24}
          slidesPerView={3}
          autoplay={{
            delay: 1000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          modules={[Autoplay]}
          className="w-full"
          breakpoints={{
            // Mobile - 1 slide
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // Tablet - 2 slides
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            // Desktop - 3 slides
            1024: {
              slidesPerView: 3,
              spaceBetween: 24
            }
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-lg p-6 h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-current text-yellow-400"
                    />
                  ))}
                </div>

                {/* Comment */}
                <blockquote className="text-gray-700 mb-6 text-lg">
                  "{testimonial.comment}"
                </blockquote>

                {/* Author Info */}
                <div className="mt-auto">
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-blue-600 text-sm mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;