(function () {
    function seeCommits(owner, repo) {
    fetch(`  https://api.github.com/repos/${owner}/${repo}/commits`, {headers: {'Authorization': WES_GITHUB_KEY}})
        .then(e => e.json())
        .then(EON => console.log(EON[0].commit.author.date))
        .catch(e => console.log(e))
}
seeCommits("WesleyBernard", "codeup-web-exercises");
})();