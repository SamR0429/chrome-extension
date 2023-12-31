let myLinks = [];

const inputEl = document.querySelector(".input-el");
const inputBtn = document.querySelector(".input-btn");
const ulEl = document.querySelector(".ul-el");
const tabBtn = document.querySelector(".tab-btn");
const deleteBtn = document.querySelector(".delete-btn");
const linksFromLocalStorage = JSON.parse(localStorage.getItem("myLinks"));

console.log(linksFromLocalStorage);
// localStorage.setItem("myLeads", "www.samanthalramos.com");
// let link = localStorage.getItem("myLeads");
// console.log(link);
// localStorage.clear();

// myLeads = JSON.parse(myLeads);
// myLeads.push("www.nike.com");
// myLeads = JSON.stringify(myLeads);
// console.log(typeof myLeads);

if (linksFromLocalStorage) {
    myLinks = linksFromLocalStorage;
    renderLinks(myLinks);
}

function renderLinks(links) {

    let listItems = '';

    for (let i = 0; i < links.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${links[i]}'>
                    ${links[i]}
                </a>
            </li>
        `
    }

    ulEl.innerHTML = listItems;
}

tabBtn.addEventListener("click", function () {

    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {

        myLinks.push(tabs[0].url);
        localStorage.setItem("myLinks", JSON.stringify(myLinks));

        renderLinks(myLinks);
    })

});

deleteBtn.addEventListener("dblclick", function () {

    localStorage.clear();
    myLinks = [];
    renderLinks(myLinks);

});

inputBtn.addEventListener("click", function () {

    myLinks.push(inputEl.value);
    inputEl.value = '';

    localStorage.setItem("myLinks", JSON.stringify(myLinks));

    renderLinks(myLinks);
    console.log(localStorage.getItem("myLinks"));
});
