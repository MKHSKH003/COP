import './component.css';

import React from 'react';
import {
  Page, PageSection, PageSectionVariants,
  Card, CardBody,
} from '@patternfly/react-core';

import PageHeaderSection from '../../../shared/components/card-header'
import NavBar from '../../../shared/components/navbar/page/component'

const Feeds = ({
  userName
}) => {
  return (
    <Page  header={<NavBar userName={userName} />} sidebar={''}>
      <PageSection  variant={PageSectionVariants.light}>
        <Card className='mx-auto' >
          <PageHeaderSection title={'Organization Events'} addTitle={'New Event'} />
          <CardBody ></CardBody>
        </Card>
      </PageSection>
      <PageSection variant={PageSectionVariants.light}>Section with dark background</PageSection>
      <PageSection variant={PageSectionVariants.light}>Section with light background</PageSection>
    </Page>
  );
}

export default Feeds;