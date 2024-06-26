document.getElementById('generateButton').addEventListener('click', generateTags);

function generateTags() {
    const title = document.getElementById('titleInput').value;
    const tagsContainer = document.getElementById('tagsContainer');
    tagsContainer.innerHTML = '';

    fetchTagsFromAPI(title).then(tags => {
        tags.slice(0, 50).forEach(tag => {
            const tagElement = document.createElement('div');
            tagElement.className = 'tag';
            tagElement.innerText = tag;
            tagsContainer.appendChild(tagElement);
        });
    });
}

async function fetchTagsFromAPI(title) {
    const apiKey = ''; // Replace with your RapidAPI key
    const apiUrl = `https://keywordtoolapi.p.rapidapi.com/v2/search/keyword?keyword=${encodeURIComponent(title)}&language=en&country=us&category=youtube`;

    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'keywordtoolapi.p.rapidapi.com',
            'x-rapidapi-key': apiKey
        }
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.results.map(result => result.keyword);
}
