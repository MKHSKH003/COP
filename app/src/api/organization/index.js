export const getOrganizations = (baseUrl) =>
    fetch(baseUrl).then(response => response.json());

export const postOrganization = async (baseUrl, organization) =>   
    fetch(baseUrl+'add-organisation',
    {
        method: 'POST',
        body: JSON.stringify(organization),
        headers: {
            'Content-Type': 'application/json'
    }
    }).then((response) => response.json())

export const postSubscription = async (baseUrl, subscription) =>   
    fetch(baseUrl+'add-subscription',
    {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
            'Content-Type': 'application/json'
    }
    }).then((response) => response.json())