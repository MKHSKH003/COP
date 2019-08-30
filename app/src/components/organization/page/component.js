
import React, { useState } from 'react';
import {
  Page, PageSection, PageSectionVariants,
  Card, CardBody,
} from '@patternfly/react-core';

import CardHeader from '../../../shared/components/card-header'
import NavBar from '../../../shared/components/navbar/page/component'
import Modal from '../wizard/page/component'

export default ({
  userName,
  onAddOrganization
}) => {
 
  console.log('userName, onAddOrganization', userName, onAddOrganization);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
  <Page  header={<NavBar userName={userName} />} sidebar={''}>
      <PageSection  variant={PageSectionVariants.light}>
        <Card className='mx-auto' >
          <CardHeader title={'Organizations'} addTitle={'New Organization'} setIsModalVisible={setIsModalVisible} />
          <CardBody >
            <Modal 
              modalheader={'Add Organization'}
              isModalVisible={isModalVisible}
              setIsModalVisible={setIsModalVisible}
              onAddOrganization={onAddOrganization}
            /> 
          </CardBody>
        </Card>
      </PageSection>
      <PageSection variant={PageSectionVariants.light}>Section with dark background</PageSection>
      <PageSection variant={PageSectionVariants.light}>Section with light background</PageSection>
    </Page>
  );
}