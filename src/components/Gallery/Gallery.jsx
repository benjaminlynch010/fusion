import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Mantine

import { Carousel } from '@mantine/carousel';
import { Image, Center } from '@mantine/core'



function Gallery() {

  const personas = useSelector((store) => store.personas);

  // gets updated list of all personas to render on page load
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'FETCH_PERSONAS' });
  }, [dispatch]);

  const personaSlide = personas.map((persona) => (
    <Carousel.Slide key={persona.id}>
      <Center>
        <Image
          src={persona.image}
          height={800}
          fit='contain'
        >
        </Image>
      </Center>
    </Carousel.Slide>
  ))

    return (
      <Carousel
      slideSize="100%"
      slideGap="md"
      loop
      align="start"
      >
        {personaSlide}
      </Carousel>
    );
}

export default Gallery