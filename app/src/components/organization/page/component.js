import './component.css'

import React, { useState } from 'react';
import {
  Page, PageSection, PageSectionVariants,
  Card, CardBody
} from '@patternfly/react-core';

import CardHeader from '../../../shared/components/card-header'
import Spinner from '../../../shared/components/spinner/component'
import Wizard from '../wizard/page/component'
import OrganizationCard from '../organization-card/page/component'

export default ({
  isUserLoggedIn,
  user,
  isAddOrganizationVisible,
  setAddOrgarnizationToggle,
  getOrganizations,
  onAddOrganization,
  addSubscription
}) => {
  const [inProgress, setInProgress] = useState(false);

  return (
    <Spinner
      isLoading={getOrganizations.inProgress || inProgress || onAddOrganization.inProgress}
      text='Loading organizations...'
    >
      <PageSection variant={PageSectionVariants.light}>
        <Card className='mx-auto' >
          <CardBody >
            {getOrganizations.data.map((organization, key) =>
              <OrganizationCard key={key}
                isUserLoggedIn={isUserLoggedIn}
                user={user}
                organization={organization}
                addSubscription={addSubscription}
              />
            )}
            <Wizard
              modalheader={'Add Organization'}
              isAddOrganizationVisible={isAddOrganizationVisible}
              setAddOrgarnizationToggle={setAddOrgarnizationToggle}
              setInProgress={setInProgress}
              onAddOrganization={onAddOrganization}
            />
          </CardBody>
        </Card>
      </PageSection>
    </Spinner>
  );
}