let section = document.getElementById("flag")
let title1 = document.createElement("h1")
let titleTxt = document.createTextNode("Internal Company Directory")

title1.appendChild(titleTxt)
section.appendChild(title1)


 let section2 = document.querySelector("#ship")

let directoryListing = ""

for (var i = 0; i < customers.results.length; i++) {
let pagepix =  customers.results[i].picture.large
let title2 = customers.results[i].name.title
let firstName = customers.results[i].name.first
let lastName = customers.results[i].name.last
let emails = customers.results[i].email
let street = customers.results[i].location.street
let city = customers.results[i].location.city
let state = customers.results[i].location.state
let postcode = customers.results[i].location.postcode
let phoneNumber = customers.results[i].cell

post = `
<div>
<img src=${pagepix} alt="">
<div id = words>
<div id = names>${firstName}, ${lastName}</div>
<div id = emails>${emails}</div>
<div id = address>
<div>${street}</div>
<div>${city} ${state} ${postcode}</div>
<div>${phoneNumber}</div></div></div>
</div>
`

directoryListing += post


console.log(post);



}

ship.innerHTML = directoryListing
