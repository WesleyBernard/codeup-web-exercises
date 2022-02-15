const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
let theFiltered = users.filter(u => u.languages.length >= 3)
console.log(theFiltered)
let emails = users.map(u => u.email)
console.log(emails)
let yearsOfExperience = users.reduce((accumilation, user) => {
    return accumilation + user.yearsOfExperience
}, 0);
console.log(yearsOfExperience)
let averageExperience = yearsOfExperience/5
console.log(averageExperience)
let longestEmail = emails.reduce((prev, current ) => prev.length > current.length ? prev : current)

console.log(longestEmail)

let userNames =  users.reduce((string, user) => string += `${user.name}, ` , "Your instructors are: ")
console.log(userNames)

let uniqueLanguages = users.reduce((language, user) => {
         return language += `${user.languages}, `
}, "")
console.log(uniqueLanguages)
