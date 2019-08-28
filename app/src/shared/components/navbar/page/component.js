
import React, { useState } from 'react';
import {
  PageHeader,
  Nav, NavItem, NavList, NavVariants,
} from '@patternfly/react-core';
import { UserIcon, OffIcon, OrdersIcon } from '@patternfly/react-icons'
import { Redirect } from "react-router-dom";

import brandImg from '../../../utils/logo/full.png';
import logo from '../../../utils/logo/logo-only.svg';

export default ({
  userName
}) => {
  const [isNavOpen, onNavToggle] = useState(false);

  const logoProps = (
    <a className="navbar-brand" href="/feeds">
      <img src={brandImg} alt="COP Enterprise Application" />
    </a>
  );

  const nav = (
    <Nav onSelect={(value) => console.log(value)}>
      <NavList className='pull-right' variant={NavVariants.horizontal}>
        <NavItem key={4} itemId={4} to='/events' >
          Events <OrdersIcon />
        </NavItem>
        <NavItem key={3} itemId={3} to='/organizations' >
          Organizations <img src={logo} style={{height: '20px','margin-bottom': '3px'}}/>
        </NavItem>
        <NavItem key={1} itemId={1} >
          {userName} <UserIcon />
        </NavItem>
        <NavItem key={2} itemId={2}>
          Logout <OffIcon />
        </NavItem>
      </NavList>
    </Nav>
  );

  return (
    <PageHeader
      logo={logoProps}
      topNav={nav}
      showNavToggle
      isNavOpen={isNavOpen}
      onNavToggle={() => isNavOpen ? onNavToggle(false) : onNavToggle(true) }
    />
  );
}