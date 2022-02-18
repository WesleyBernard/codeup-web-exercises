(function () {
    function seeCommits(owner, repo) {
    fetch(`  https://api.github.com/repos/${owner}/${repo}/commits`, {headers: {'Authorization': WES_GITHUB_KEY}})
        .then(e => e.json())
        .then(EON => console.log(new Date(EON[0].commit.author.date).toLocaleString()))
        .catch(e => console.log(e))
}
seeCommits("WesleyBernard", "codeup-web-exercises");

     function wait(MS) {
         return new Promise((resolve, reject) => {
             setTimeout(() => {
                 resolve("UwU")
                 reject("OwO")
             }, MS)
         })
     }

     wait(1000).then(() => console.log('You\'ll see this after 1 second'));
     wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
})();