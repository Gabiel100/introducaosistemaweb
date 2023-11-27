async function getRepositories() {
    var username = document.getElementById('username').value;

    if (!username) {
        alert("Please enter a GitHub username.");
        return;
    }

    try {
        // Fetch data from GitHub API
        var response = await fetch(`https://api.github.com/users/${username}/repos`);
        var data = await response.json();

        // Display repositories
        displayRepositories(data);
    } catch (error) {
        console.error("Error fetching data from GitHub API:", error);
        alert("Error fetching data from GitHub API. Please check the username and try again.");
    }
}

function displayRepositories(repositories) {
    var repoListElement = document.getElementById('repoList');
    var repoCountElement = document.getElementById('repoCount');

    // Clear previous results
    repoListElement.innerHTML = "";
    repoCountElement.innerHTML = "";

    // Display each repository in the list
    repositories.forEach(repo => {
        var listItem = document.createElement('li');
        listItem.textContent = repo.name;
        repoListElement.appendChild(listItem);
    });

    // Display total repository count
    repoCountElement.textContent = `Total Repositories: ${repositories.length}`;
}
