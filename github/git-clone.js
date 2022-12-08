// The moment application statrts, i want to load all the data from the API
// Reach to an API --> JS --> Class -> XMLHttpRequest
const xhr = new XMLHttpRequest()
const url = `https://api.github.com/users`
// readystate 0 i.e, UNSET
// Step 1 - Open the portal of communication b/w the client and the server
console.log(`1st redaystate value is ${xhr.readyState}`);
xhr.open("GET",url)
console.log(`2nd redaystate value is ${xhr.readyState}`);

// readystate 1 i.e, open()
// Step2 - Perform actions on ready state change
// xhr.onreadystatechange = () => {
// console.log(`3rd redaystate value is ${xhr.readyState}`);
//     if(xhr.readyState === 4 && xhr.status === 200){
//         console.log(xhr.responseText);
//     }
// }
// xhr.onreadystatechange = () => {
//     console.log(`3rd readyState value ${xhr.readyState}`)
//     if(xhr.readyState === 4 && xhr.status === 200) {
//         console.log(xhr.responseText)
//     }
// }
xhr.onreadystatechange = () => {
    console.log(`3rd readyState value ${xhr.readyState}`)
    if(xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText)
        let output = ''
        response.forEach( res => {
            output += `<img style="margin: 10px;" src="${res.avatar_url}" />`
        })
        document.querySelector('#main-content').innerHTML = output
    }
}
