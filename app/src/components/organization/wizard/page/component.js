import './component.css'

import React, { useState } from 'react'
import { Modal, Button, Wizard } from '@patternfly/react-core'

import { readImageURL } from '../../../../shared/utils/images'
import OrganizationForm from '../organization-form'
import Map from '../google-maps/map'

export default ({
    modalheader,
    isModalVisible,
    setIsModalVisible,
    onAddOrganization
}) => {

    
    const [ organization, setOrganization ] = useState({
      avatar:'http://www.pngall.com/wp-content/uploads/2/Upload-PNG-Image-File.png',
      name:'',
      email:'',
      socialIssue:'',
      description:'',
      location:''
    })
    const uploadAvatar = (
        <label  className="wrap button">
            <input id='mail-upload' className="wrap button" type="file"  onChange={ file => readImageURL(file.target, organization, setOrganization)} />
            <img src={organization.avatar} className="wrap button" />
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
          isOpen={isModalVisible}
          onClose={ () => isModalVisible ? setIsModalVisible(false) : setIsModalVisible(false)}
          title="Add Organization"
          description="Please fill in organization details in each step."
          steps={steps}
          onSave={() => {
              onAddOrganization.execute(organization);
              setIsModalVisible(false)
            }
          }
        />
      </React.Fragment>
    );
}