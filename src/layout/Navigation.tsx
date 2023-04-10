import Button from '@components/atoms/Button'
import styled from '@emotion/styled'
import { ReactComponent as BurgerIcon } from '@icons/burger_icon.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <section css={{ position: 'relative' }}>
      <Navbar>
        <NavButton className='web-nav' href="/events">Events</NavButton>
        <NavButton className='web-nav' href="/telegram">Telegram</NavButton>
        <NavButton className='web-nav' href="/team">Core Team</NavButton>
        <Button className='mobile-nav' variant='primary' onClick={() => setIsMenuOpen(!isMenuOpen)} children={<BurgerIcon />} />
      </Navbar>
      {isMenuOpen && (
        <MobileNavMenu>
          <NavButton href="/events">Events</NavButton>
          <NavButton href="/telegram">Telegram</NavButton>
          <NavButton href="/team">Core Team</NavButton>
        </MobileNavMenu>
      )}
    </section>

  )
}

// navbar and navbuttons but the navbar items are all aligned to the right except for the first one

const Navbar = styled.div`
  box-sizing: border-box;
  position: sticky;
  display: flex;
  flex-direction: row;
  gap: 5rem;
  padding: 1.25rem 1rem;
  justify-content: flex-end;

  .web-nav {
    display: none;
  }

  mobile-nav {
  }
  
  @media (min-width: 768px) {
    justify-content: flex-start;  
    padding: 1.25rem 0rem;

    .web-nav {
      display: inline;
    }

    .mobile-nav {
      display: none;
    }
  }
`

const NavButton = styled.a`
  display: inline;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  border: 1px solid transparent;
  transition: .15s;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.text.white};
  }

  @media (min-width: 768px) {
    margin-top: 0.5rem;
  }
`

const MobileNavMenu = styled.section`
  width: 100%;
  z-index: 51; // Menu is on top of everything else
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: absolute;
  background-color: ${({ theme }) => theme.background};
  padding-bottom: 2rem;

  // Drop shadow at the bottom
  // box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.25);

  animation: slideIn 0.1s ease-in-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 768px) {
    display: none;
  }

`

export default Navigation