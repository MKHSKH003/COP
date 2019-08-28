import React from 'react';
import { toast } from 'react-toastify';

import useApi from '../../../shared/components/react-use-api'; 

import { loginApi } from '../../../api';
import { loginBaseUrl } from '../../../shared/constants/api-selectors'

import SignIn from './component';

export default () => {
    const postOrganization = useApi({
        action: organization => organizationApi.postOrganization(loginBaseUrl, organization),
        initialValue: [],
        defer: true,
        onSuccess: user => {
             
        },
        onError: () => toast.error("Incorrect login details")
    }, []);
    

    return ( 
        <SignIn  
            onAddOrganization={postOrganization} 
        />
    );
};
