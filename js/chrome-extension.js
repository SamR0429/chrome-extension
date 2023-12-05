let myLeads = [];

const inputEl = document.querySelector(".input-el");
const inputBtn = document.querySelector(".input-btn");
const ulEl = document.querySelector(".ul-el");

inputBtn.addEventListener("click", function () {

    myLeads.push(inputEl.value);
    inputEl.value = '';
    renderLeads();
});

function renderLeads() {

    let listItems = '';

    for (let i = 0; i < myLeads.length; i++) {

        //this is the original version and we refactored to make code work faster ?? and to clean up the code. this is done to wait until the for loop is done iterating to then render so to not mess with the dom every iteration
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }

    ulEl.innerHTML = listItems;
}
