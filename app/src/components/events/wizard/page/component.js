import './component.css'

import React, { useState } from 'react'
import { Wizard } from '@patternfly/react-core'

import { readImageURL, uploadAndGetImageUrl } from '../../../../shared/utils/images'
import EventForm from '../event-form'

export default ({
  modalheader,
  setWizardVisible,
  setInProgress,
  isAddEventVisible,
  setAddEventToggle,
  getOrganizations,
  onAddEvent
}) => {
  const [event, setEvent] = useState({
    name: '',
    avatar: '',
    description: '',
    eventDate: '',
    addedDate: new Date().toDateString(),
    organisationId: ''
  })

 
  const uploadAvatar = (
    <label  className="wrap button">
        <input id='mail-upload' className="wrap button" type="file"  onChange={ file => {
            readImageURL(file.target, event, setEvent)
          }}
        />
        <img alt='event-avatar' src={event.avatar.length > 0 ? event.avatar : 'http://www.pngall.com/wp-content/uploads/2/Upload-PNG-Image-File.png'} className="wrap button" />
    </label>
)

const steps = [
  { name: 'Upload avatar', component:  uploadAvatar },
  {
      name: 'Event form',
      component: 
      <EventForm
        event={event}
        setEvent={setEvent}
        getOrganizations={getOrganizations}
      />,
      nextButtonText: 'Finish'
    }
  ];

  return (
    <React.Fragment>
      <Wizard
        isOpen={isAddEventVisible}
        onClose={() => setAddEventToggle(false)}
        title="Add Event"
        description="Please fill in event details in each step."
        steps={steps}
        onSave={() => {
          if(event.name.length > 0 
              && event.organisationId.length > 0 
              && event.eventDate.length > 0 
              && event.description.length > 0
              && event.avatar.length > 0)
              {
              uploadAndGetImageUrl(event, onAddEvent, setInProgress);
              setAddEventToggle(false)
            }
          }
        }
      />
    </React.Fragment>
  );
}