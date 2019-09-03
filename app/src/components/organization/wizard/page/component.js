import './component.css'

import React, { useState } from 'react'
import { Wizard } from '@patternfly/react-core'

import { readImageURL, uploadAndGetImageUrl } from '../../../../shared/utils/images'
import OrganizationForm from '../organization-form'
import Map from '../google-maps/map'

export default ({
    modalheader,
    setWizardVisible,
    setInProgress,
    isAddOrganizationVisible,
    setAddOrgarnizationToggle,
    onAddOrganization
}) => {
    const [ organization, setOrganization ] = useState({
      avatar:'',
      name:'',
      email:'',
      socialIssue:'',
      description:'',
      location:''
    })
    const uploadAvatar = (
        <label  className="wrap button">
            <input id='mail-upload' className="wrap button" type="file"  onChange={ file => {
                readImageURL(file.target, organization, setOrganization)
              }}
            />
            <img alt='organization-avatar' src={organization.avatar.length > 0 ? organization.avatar : 'http://www.pngall.com/wp-content/uploads/2/Upload-PNG-Image-File.png'} className="wrap button" />
        </label>
    )

    const steps = [
      { name: 'Upload avatar', component:  uploadAvatar },
      { 
        name: 'Organization form',
        component: <OrganizationForm organization={organization} setOrganization={setOrganization} />
      },
      { name: `Location: ${organization.location}`, component: <Map organization={organization} setOrganization={setOrganization} /> , nextButtonText: 'Finish' }
    ];


    return (
      <React.Fragment>
        <Wizard
          isOpen={isAddOrganizationVisible}
          onClose={() => setAddOrgarnizationToggle(false)}
          title="Add Organization"
          description="Please fill in organization details in each step."
          steps={steps}
          onSave={() => {
             if(   organization.avatar.length > 0
                && organization.description.length > 0
                && organization.email.length > 0
                && organization.socialIssue.length > 0
                && organization.name.length > 0
                && organization.location.length > 0)
              {
                uploadAndGetImageUrl(organization, onAddOrganization, setInProgress);
                setAddOrgarnizationToggle(false)
             }
            }
          }
        />
      </React.Fragment>
    );
}