import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@mantine/core'
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Mantine UI</h2>
      </Link>
      <div>
        <Image 
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dd58e350-6762-44ba-a196-57d616d1e436/d6iksry-9bc7d0b6-578c-4235-b8e1-042176c5a88f.png/v1/fit/w_506,h_350/shiny_mantine_dream_world_art_by_trainerparshen_d6iksry-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzUwIiwicGF0aCI6IlwvZlwvZGQ1OGUzNTAtNjc2Mi00NGJhLWExOTYtNTdkNjE2ZDFlNDM2XC9kNmlrc3J5LTliYzdkMGI2LTU3OGMtNDIzNS1iOGUxLTA0MjE3NmM1YTg4Zi5wbmciLCJ3aWR0aCI6Ijw9NTA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.FPzrUVGd2AKTexQ8Gqu5BVHjqMKrI6iUxDPj-NM8o7g"
          width="100"
          padding="lg"
          alt="Mantine">
        </Image>
      </div>
    </div>
  );
}

export default Nav;
