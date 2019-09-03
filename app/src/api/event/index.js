export const getEvents = (baseUrl) =>
    fetch(baseUrl).then(response => response.json());

export const postEvent = async (baseUrl, event) =>   
    fetch(baseUrl+'add-event',
    {
        method: 'POST',
        body: JSON.stringify(event),
        headers: {
            'Content-Type': 'application/json'
    }
    }).then((response) => response.json())