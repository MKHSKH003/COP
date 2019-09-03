
import './component.css'

import React, { useState } from 'react';
import {
  PageHeader, Page, Dropdown, DropdownToggle, DropdownItem, DropdownPosition,
  Nav, NavItem, NavList, NavVariants,
} from '@patternfly/react-core';
import { UserIcon, PrivateIcon, PlusCircleIcon } from '@patternfly/react-icons'

import brandImg from '../../../utils/logo/full.png';
import Events from '../../../../components/events/page/container';
import Organizations from "../../../../components/organization/page/container";
import Login from "../../../../components/login/page/container";

export default ({
  user,
  isUserLoggedIn
}) => {
  const [isNavOpen, onNavToggle] = useState(false);
  const [isOrganizationalDropdownOpen, onOrganizationalDropdownToggle] = useState(false);
  const [isEventDropdownOpen, onEventDropdownToggle] = useState(false);
  const [isAddEventVisible, setAddEventToggle] = useState(false);
  const [isAddOrganizationVisible, setAddOrgarnizationToggle] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState({ events: true })

  const logoProps = (
    <a className="navbar-brand" href="/">
      <img src={brandImg} alt="COP Enterprise Application" />
    </a>
  );

  const organizationsDropDown = (
    <Dropdown
      position={DropdownPosition.right}
      toggle={<DropdownToggle onToggle={() => onOrganizationalDropdownToggle(!isOrganizationalDropdownOpen)}>Organizations</DropdownToggle>}
      isOpen={isOrganizationalDropdownOpen}
      isPlain
      dropdownItems={[
        <DropdownItem key='add' isDisabled={!isUserLoggedIn} onClick={() => setAddOrgarnizationToggle(true)}>
          <PlusCircleIcon /> organization
        </DropdownItem>,
      ]}
    />)

  const eventsDropDown = (
    <Dropdown
      position={DropdownPosition.right}
      toggle={<DropdownToggle onToggle={() => onEventDropdownToggle(!isEventDropdownOpen)}>Events</DropdownToggle>}
      isOpen={isEventDropdownOpen}
      isPlain
      dropdownItems={[
        <DropdownItem key='add' isDisabled={!isUserLoggedIn} onClick={() => setAddEventToggle(true)}>
          <PlusCircleIcon /> event
        </DropdownItem>,
      ]}
    />)

  const nav = (
    <Nav >
      <NavList className='pull-right' variant={NavVariants.horizontal}>
        <NavItem
          onClick={() => setActiveNavItem({ events: true })}
          isActive={activeNavItem.events && true}
        >{eventsDropDown}
        </NavItem>

        <NavItem
          onClick={() => setActiveNavItem({ organizations: true })}
          isActive={activeNavItem.organizations && true}
        > {organizationsDropDown}
        </NavItem>

        {isUserLoggedIn &&
          <NavItem >
            {user.Name} <UserIcon />
          </NavItem>
        }
        <NavItem onClick={() => setActiveNavItem({ login: true })}
        > Login <PrivateIcon />
        </NavItem>
      </NavList>
    </Nav>
  );

  const pageHeader = (
    <PageHeader
      logo={logoProps}
      topNav={nav}
      showNavToggle
      isNavOpen={isNavOpen}
      onNavToggle={() => onNavToggle(!isNavOpen)}
    />
  )

  return (
    activeNavItem.login
      ? <Login />
      : <Page header={pageHeader} >
        {activeNavItem.events &&
          <Events 
            isAddEventVisible={isAddEventVisible}
            setAddEventToggle={setAddEventToggle}
            isUserLoggedIn={isUserLoggedIn}
            user={user}
          />
        }
        {activeNavItem.organizations &&
          <Organizations
            isAddOrganizationVisible={isAddOrganizationVisible}
            setAddOrgarnizationToggle={setAddOrgarnizationToggle}
            isUserLoggedIn={isUserLoggedIn}
            user={user}
          />
        }
      </Page>
  );
}