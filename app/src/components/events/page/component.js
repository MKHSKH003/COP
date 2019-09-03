import './component.css';

import React, { useState} from 'react';
import {
  Page, PageSection, PageSectionVariants,
  Card, CardBody,
} from '@patternfly/react-core';

import Spinner from '../../../shared/components/spinner/component'
import Wizard from '../wizard/page/component'
import EventCard from '../event-card/page/component'

const Feeds = ({
  isUserLoggedIn,
  user,
  isAddEventVisible,
  setAddEventToggle,
  getOrganizations,
  getEvents,
  onAddEvent
}) => {
  const [inProgress, setInProgress] = useState(false);

  return (
    <Spinner
      isLoading={getEvents.inProgress || inProgress || getOrganizations.inProgress || onAddEvent.inProgress}
      text='Loading events...'
    >
      <PageSection variant={PageSectionVariants.light}>
        <Card className='mx-auto' >
          <CardBody >
          {getEvents.data.map((event, key) =>
              <EventCard 
                key={key}
                isUserLoggedIn={isUserLoggedIn}
                user={user}
                event={event}
              />
            )}
          <Wizard
              modalheader={'Add Event'}
              isAddEventVisible={isAddEventVisible}
              setInProgress={setInProgress}
              setAddEventToggle={setAddEventToggle}
              getOrganizations={getOrganizations}
              onAddEvent={onAddEvent}
            />
          </CardBody>
        </Card>
        </PageSection>
    </Spinner>
  );
}

export default Feeds;