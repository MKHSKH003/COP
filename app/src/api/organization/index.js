export const postOrganization = (baseUrl, organization) => {
    console.log('baseUrl, organization', baseUrl, organization);
    return fetch(baseUrl,
        {
            method: 'POST',
            body: JSON.stringify(organization),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())
}