const username = 'google';
const apiUrl = `https://api.github.com/users/${username}/repos?sort=stars&per_page=10`;

async function fetchGitHubRepos() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Error al obtener repositorios: ${response.statusText}`);
        }

        const popularRepos = await response.json();
        console.log(`Los 10 repositorios más populares de ${username} en GitHub son:`);

        popularRepos.forEach(repo => {
            console.log(`${repo.name}: ${repo.html_url}`);
        });
    } catch (error) {
        console.error(`Error al obtener repositorios: ${error.message}`);
    }
}

fetchGitHubRepos();
