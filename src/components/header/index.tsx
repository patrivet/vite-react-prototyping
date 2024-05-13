import type { FC } from 'react'

import { HeaderContainer, HeaderBar, HeaderContent } from './header.style'

const Header: FC = () => {
  return (
    <HeaderContainer>
      <HeaderBar>
        <div>
          <a href="#">Airport Extras</a>
          <a href="#">
            <span style={{ color: '#fddc06' }}>New</span> UK Short Breaks
          </a>
          <a href="#">Other Extras</a>
          <input type="text" placeholder="Search" />
        </div>
      </HeaderBar>
      <HeaderContent>
        <div>
          <img src="https://d17s4kc6349e5h.cloudfront.net/holidayextras/assets/images/logos/HolidayExtras-logo-horizontal-transparent.svg" />
          <p>Less hassle. More holiday.</p>
        </div>
        <div>
          
        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
