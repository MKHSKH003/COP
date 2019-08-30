import React from 'react';
import { toast } from 'react-toastify';

import useApi from '../../../shared/components/react-use-api'; 

import { organizationApi } from '../../../api';
import { organizationBaseUrl } from '../../../shared/constants/api-selectors'

import Organization from './component';

export default () => {
    const postOrganization = useApi({
        action: organization => organizationApi.postOrganization(organizationBaseUrl, organization),
        initialValue: [],
        defer: true,
        onSuccess: organization => {
             
        },
        onError: () => toast.error("Something went wrong!")
    }, []);
    

    return ( 
        <Organization  
            onAddOrganization={postOrganization} 
            userNames={'userName'}
        />
    );
};
