import React from 'react';
import { toast } from 'react-toastify';

import useApi from '../../../shared/components/react-use-api'; 

import { organizationApi } from '../../../api';
import { organizationBaseUrl } from '../../../shared/constants/api-selectors'

import Organization from './component';

export default ({
    isUserLoggedIn,
    isAddOrganizationVisible,
    setAddOrgarnizationToggle,
    user
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
             getOrganizations.setData(([organization]).concat(getOrganizations.data));
             toast.success('Organization '+organization.Name+' was successfully added');
        },
        onError: (e) => toast.error(e.message)
    }, []);
    
    const addSubscription = useApi({
        action: subscription => organizationApi.postSubscription(organizationBaseUrl, subscription),
        initialValue: [],
        defer: true,
        onSuccess: subscription => {
            getOrganizations.setData(getOrganizations.data.map(o => (
                o.Id == subscription.OrganisationId ? {
                    ...o,
                    Subscriptions: o.Subscriptions.concat(subscription)
                } : o
            )));
            toast.success('Subscribed successfully.');
        },
        onError: (e) => toast.error(e.message)
    }, []);

    return ( 
        <Organization  
            isUserLoggedIn={isUserLoggedIn}
            user={user}
            isAddOrganizationVisible={isAddOrganizationVisible}
            setAddOrgarnizationToggle={setAddOrgarnizationToggle}
            getOrganizations={getOrganizations}
            onAddOrganization={postOrganization}
            addSubscription={addSubscription} 
        />
    );
};
