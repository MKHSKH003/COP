
import './component.css'

import React, { useState } from 'react';
import {
  PageHeader, Page, Dropdown, DropdownToggle, DropdownItem, DropdownPosition,
  Nav, NavItem, NavList, NavVariants,
} from '@patternfly/react-core';
import { UserIcon, PrivateIcon, OrdersIcon, PlusCircleIcon } from '@patternfly/react-icons'

import brandImg from '../../../utils/logo/full.png';
import logo from '../../../utils/logo/logo-only.svg';
import Events from '../../../../components/events/page/component';
import Organizations from "../../../../components/organization/page/container";
import Login from "../../../../components/login/page/container";

export default ({
  user,
  children,
  isUserLoggedIn
}) => {
  const [isNavOpen, onNavToggle] = useState(false);
  const [isDropdownOpen, onDropdownToggle] = useState(false);
  const [isAddOrganizationVisible, setAddOrgarnizationToggle] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState({ events: true })
  const logoProps = (
    <a className="navbar-brand" href="/">
      <img src={brandImg} alt="COP Enterprise Application" />
    </a>
  );

  const dropDown = (
    <Dropdown
      position={DropdownPosition.right}
      toggle={<DropdownToggle onToggle={() => onDropdownToggle(!isDropdownOpen)}>Organizations</DropdownToggle>}
      isOpen={isDropdownOpen}
      isPlain
      dropdownItems={[
        <DropdownItem key='add' isDisabled={!isUserLoggedIn} onClick={() => setAddOrgarnizationToggle(true)}>
          <PlusCircleIcon /> organization 
        </DropdownItem>,
      ]}
    />)

  const nav = (
    <Nav >
      <NavList className='pull-right' variant={NavVariants.horizontal}>
        <NavItem
          onClick={() => setActiveNavItem({ events: true })}
          isActive={activeNavItem.events && true}
        > Events <OrdersIcon />
        </NavItem>

        <NavItem 
            onClick={() => setActiveNavItem({ organizations: true })}
            isActive={activeNavItem.organizations && true}
        > {dropDown}
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
            <Events isUserLoggedIn />
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