import React from 'react';
import { toast } from 'react-toastify';

import useApi from '../../../shared/components/react-use-api'; 

import { eventApi, organizationApi } from '../../../api';
import { eventBaseUrl, organizationBaseUrl } from '../../../shared/constants/api-selectors'

import Event from './component';

export default ({
    isUserLoggedIn,
    isAddEventVisible,
    setAddEventToggle,
    user
}) => {
    const getEvents = useApi({
        action: () => eventApi.getEvents(eventBaseUrl),
        initialValue: [],
        onError: (e) => toast.error(e.message)
    }, []);

    const getOrganizations = useApi({
        action: () => organizationApi.getOrganizations(organizationBaseUrl),
        initialValue: [],
        onError: (e) => toast.error(e.message)
    }, []);

    const postEvent = useApi({
        action: event => eventApi.postEvent(eventBaseUrl, event),
        initialValue: [],
        defer: true,
        onSuccess: event => {
             getEvents.setData(([event]).concat(getEvents.data));
             toast.success('Event '+ event.Name+' was successfully added');
        },
        onError: (e) => toast.error(e.message)
    }, []);
    
    return ( 
        <Event  
            isUserLoggedIn={isUserLoggedIn}
            user={user}
            isAddEventVisible={isAddEventVisible}
            setAddEventToggle={setAddEventToggle}
            getEvents={getEvents}
            getOrganizations={getOrganizations}
            onAddEvent={postEvent}
        />
    );
};
