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