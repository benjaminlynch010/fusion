import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Mantine

import { Carousel } from '@mantine/carousel';
import { Box, Image, Center } from '@mantine/core'



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
        >
        </Image>
      </Center>
    </Carousel.Slide>
  ))

    return (
      <Box>

      <Carousel
      height="100%"
      slideGap="md"
      loop
      align="start"
      sx={{ flex: 1 }}
      >
        {personaSlide}
      </Carousel>
        </Box>
    );
}

export default Gallery