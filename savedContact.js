const contacts = [
    {name: 'ellie', num: '1234'},
    {name: 'ehsan', num: '9821'},
    {name: 'morty', num: '8374'},
    {name: 'mehdi', num: '8123'},
    {name: 'fati', num: '9238'},
    {name: 'leila', num: '7272'},
]

function savedContact(num) {
    let results = [];

    for(let contact of contacts) {
        if(contact.num.includes(num)) {
            results.push(contact);
        } 
    }
    return results;
}

console.log(savedContact(92))