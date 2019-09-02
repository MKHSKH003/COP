import React from 'react';
import { toast } from 'react-toastify';

import useApi from '../../../shared/components/react-use-api'; 

import { organizationApi } from '../../../api';
import { organizationBaseUrl } from '../../../shared/constants/api-selectors'

import Organization from './component';

export default ({
    isAdmin,
    isAddOrganizationVisible,
    setAddOrgarnizationToggle
}) => {
    const getOrganizations = useApi({
        action: () => organizationApi.getOrganizations(organizationBaseUrl),
        initialValue: [],
        onError: (e) => toast.error(e.message)
    }, []);

    const postOrganization = useApi({
        action: organization => organizationApi.postOrganization(organizationBaseUrl, organization),
        initialValue: [],
        defer: true,
        onSuccess: organization => {
             getOrganizations.setData(getOrganizations.data.concat(organization));
             toast.success('Organization '+organization.Name+' was successfully added');
        },
        onError: (e) => toast.error(e.message)
    }, []);
    
    return ( 
        <Organization  
            isAdmin
            isAddOrganizationVisible={isAddOrganizationVisible}
            setAddOrgarnizationToggle={setAddOrgarnizationToggle}
            getOrganizations={getOrganizations}
            onAddOrganization={postOrganization} 
        />
    );
};
