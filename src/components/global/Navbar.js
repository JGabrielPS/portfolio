import React from "react"
import styled from "styled-components"

import PageLinks from "../constants/links"

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 200;
  background: #042a2b;
`

const Navcenter = styled.div`
  width: 95vw;
  /* max-width: 1170px; */
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
`

const Navheader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

// const ToggleBtn = styled.button``

const NavLinks = styled.ul`
  display: flex;
  justify-content: flex-end;
`

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-affiliate"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#ef7b45"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      marginBottom="0.375rem"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275" />
      <path d="M11.683 12.317l5.759 -5.759" />
      <circle cx="5.5" cy="5.5" r="1.5" />
      <circle cx="18.5" cy="5.5" r="1.5" />
      <circle cx="18.5" cy="18.5" r="1.5" />
      <circle cx="8.5" cy="15.5" r="4.5" />
    </svg>
  )
}

export default function Navbar() {
  return (
    <Nav>
      <Navcenter>
        <Navheader>
          <Icon />
        </Navheader>
        <NavLinks>
          <PageLinks />
        </NavLinks>
      </Navcenter>
    </Nav>
  )
}
