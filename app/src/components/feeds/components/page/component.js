import './component.css';

import React, { useState, useEffect } from 'react';
import {
  Page, PageHeader, PageSidebar, PageSection, PageSectionVariants,
  Nav,
  NavItem,
  NavList,
  NavVariants
} from '@patternfly/react-core';
import { UserIcon } from '@patternfly/react-icons'

import brandImg from '../../../../shared/utils/logo/full.png';

const Feeds = ({
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
      <NavList variant={NavVariants.horizontal}>
        <NavItem key={1} itemId={1} isActive={0 === 1}>
          Horizontal nav item {1}
        </NavItem>
        <NavItem key={2} itemId={2} isActive={2 === 1}>
          Horizontal nav item {2}
        </NavItem>
      </NavList>
    </Nav>
  );

  const toolbar = (
    <span>
      {userName}
      <UserIcon /> |
      </span>
  )
  const Header = (
    <PageHeader
      logo={logoProps}
      toolbar={toolbar}
      avatar={<a href={'/login'} >Logout</a>}
      topNav={''}
      showNavToggle
      isNavOpen={isNavOpen}
      onNavToggle={() => { isNavOpen ? onNavToggle(false) : onNavToggle(true) }}
    />
  );

  const Sidebar = <PageSidebar nav="Navigation" isNavOpen={isNavOpen} />;

  return (
    <Page header={Header} sidebar={Sidebar}>
      <PageSection variant={PageSectionVariants.light}>Section with darker background</PageSection>
      <PageSection variant={PageSectionVariants.light}>Section with dark background</PageSection>
      <PageSection variant={PageSectionVariants.light}>Section with light background</PageSection>
    </Page>
  );
}

export default Feeds;