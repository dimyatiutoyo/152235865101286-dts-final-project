// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';

import './RecentRecipes.css';
import { Typography } from '@mui/material';
import apiClient from '../config/apiClient';
import RecentRecipesItem from './RecentRecipesItem';
import useSWR from 'swr';

export default function RecentRecipes() {
  const limit = 5;

  const { data, error } = useSWR(`/api/recipes-length?limit=${limit}`, async (url) => {
    let response = await apiClient.get(url);
    return response.data.results;
  })

  if (!data) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div style={{ marginBottom: '40px' }}>
      <Swiper

        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={true}
        allowTouchMove
        spaceBetween={20}
        loop
        centeredSlides
        slidesPerView={2}
        onSlideChange={() => { }}
        onSwiper={(swiper) => { }}
        navigation
        pagination={{ clickable: true }}
        style={{
          borderRadius: 10
        }}
        breakpoints={
          {
            320: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }
        }
      >
        {
          data.map((recipe) => {
            return (
              <SwiperSlide key={recipe.key}>
                <RecentRecipesItem height='350px' data={recipe} />
              </SwiperSlide>
            );
          })
        }
      </Swiper>

    </div>
  );
};