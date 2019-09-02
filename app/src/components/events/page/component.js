import './component.css';

import React from 'react';
import {
  Page, PageSection, PageSectionVariants,
  Card, CardBody,
} from '@patternfly/react-core';

import PageWrapper from '../../../shared/components/page-wrapper/page/component'
import PageHeaderSection from '../../../shared/components/card-header'

const Feeds = ({
  isAdmin
}) => {
  return (
    <>
      <PageSection variant={PageSectionVariants.light}>
        <Card className='mx-auto' >
          <PageHeaderSection title={'Events'} addTitle={'New Event'} isAdmin={isAdmin}/>
          <CardBody ></CardBody>
        </Card>
      </PageSection>
      <PageSection variant={PageSectionVariants.light}>Section with dark background</PageSection>
      <PageSection variant={PageSectionVariants.light}>Section with light background</PageSection>
    </>
  );
}

export default Feeds;