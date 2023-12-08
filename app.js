const apiUrl = 'https://demo.veep.ai/?rest_route=/veepdotai_rest/v1/contents/&JWT=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDIwMDM1MzQsImlzcyI6Imh0dHBzOlwvXC9kZW1vLnZlZXAuYWkiLCJleHAiOjE3MDI2MDgzMzQsImRhdGEiOnsidXNlciI6eyJlbWFpbCI6Im1hcndhZ3VlcmZlbDc2QGdtYWlsLmNvbSIsImlkIjoxMzYsInVzZXJuYW1lIjoibWFyd2FndWVyZmVsNzZAZ21haWwuY29tIiwicGljdHVyZSI6bnVsbH19fQ.nsom9YGapvS8Xjb_djIYme26dCVCA0VpVq3vHrYCb4I';

// Get the HTML element where you want to display the data
const apiDataElement = document.getElementById('apiData');

// Make a GET request to the API
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Assuming the data is an array
        if (Array.isArray(data)) {
            data.forEach(item => {
                // Create HTML elements for each item
                const titleElement = document.createElement('h2');
                titleElement.textContent = item.title;

                const contentElement = document.createElement('div');
                contentElement.innerHTML = item.content;

                // Append elements to the container
                apiDataElement.appendChild(titleElement);
                apiDataElement.appendChild(contentElement);
            });
        } else {
            console.log('Unexpected data format:', data);
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
