/*  Oscar Chiqui | 2560-60 Web Client | Arrays and objects Practice |   */

console.log('Lab 4. Please write the code requested at the //TODO markers.')

console.log('Lab 4. Please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
    "timestamp": 1515784140,
    "iss_position":
        {
            "latitude": "49.2167",
            "longitude": "100.5363"
        },
    "message": "success"
};

// the latitude value, and log it to the console.
// the longitude value, and log it to the console.

    console.log('LATITUDE: '+ iss_location.iss_position.latitude)
    console.log('LONGITUDE: ' + iss_location.iss_position.longitude)


/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */
let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
};
// A new property for Swiss Francs. Symbol is CHF, value is 1.1787.
rates.CHF = 1.1787
console.log(rates)
// The exchange rate from the object, then calculate
// the equivalent value in Australian Dollars (AUD)
let euros = 100
value = euros * rates.AUD
console.log('$'+ value.toFixed(2))

// the currency symbol that has the highest exchange rate compared to Euros.
// the answer is BRL (Brazilian Real) at 3.8959 BRL to 1 Euro.
//loops through object to get each rate for the calc
for (let r in rates) {
    //calcs exchange rate for euros
    let value = euros * rates[r] /100
    console.log(value)
}


/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */
let cats_and_owners = [
    { name: "Bill Clinton", cat: "Socks" },
    { name: "Gary Oldman", cat: "Soymilk" },
    { name: "Katy Perry", cat: "Kitty Purry" },
    { name: "Snoop Dogg", cat: "Miles Davis" }
]
// Gary Oldman's cat's name
cats_and_owners.forEach(function (owner) {
    if(owner.name == 'Gary Oldman'){
        console.log(owner.cat)
    }
})
// Taylor Swift's cat is called 'Meredith'.
cats_and_owners.push({'name': "Taylor Swift",'cat': 'Meredith'})

// A loop to print each cat owner, and their cat's name, one per line. Use the forEach style.
cats_and_owners.forEach(function (owner_and_cat){
    console.log(owner_and_cat.name + "  " +owner_and_cat.cat)
})


/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */
let nobel_prize_winners_2017 = {
    "prizes":[
        {
            "year":"2017",
            "category":"physics",
            "laureates":[
                {
                    "id":"941",
                    "firstname":"Rainer",
                    "surname":"Weiss",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"2"
                },
                {
                    "id":"942",
                    "firstname":"Barry C.",
                    "surname":"Barish",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                },
                {
                    "id":"943",
                    "firstname":"Kip S.",
                    "surname":"Thorne",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                }
            ]
        },
        {
            "year":"2017",
            "category":"chemistry",
            "laureates":[
                {
                    "id":"944",
                    "firstname":"Jacques",
                    "surname":"Dubochet",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"945",
                    "firstname":"Joachim",
                    "surname":"Frank",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"946",
                    "firstname":"Richard",
                    "surname":"Henderson",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"medicine",
            "laureates":[
                {
                    "id":"938",
                    "firstname":"Jeffrey C.",
                    "surname":"Hall",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"939",
                    "firstname":"Michael",
                    "surname":"Rosbash",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"940",
                    "firstname":"Michael W.",
                    "surname":"Young",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"literature",
            "laureates":[
                {
                    "id":"947",
                    "firstname":"Kazuo",
                    "surname":"Ishiguro",
                    "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
                    "share":"1"
                }
            ]
        },
        {
            "year":"2017",
            "category":"peace",
            "laureates":[
                {
                    "id":"948",
                    "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
                    "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
                    "share":"1",
                    "surname":""
                }
            ]
        },
        {
            "year":"2017",
            "category":"economics",
            "laureates":[
                {
                    "id":"949",
                    "firstname":"Richard H.",
                    "surname":"Thaler",
                    "motivation":"\"for his contributions to behavioural economics\"",
                    "share":"1"
                }
            ]
        }
    ]
};
// The full name of the Literature Nobel laureate.
nobel_prize_winners_2017.prizes.forEach(function (w){
    if(w.category == 'literature'){
        w.laureates.forEach(function (l){
            console.log(l.firstname + ", " + l.surname)
        })
    }
})

// The ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.
nobel_prize_winners_2017.prizes.forEach(function (w){
    w.laureates.forEach(function (l){
        console.log(l.id)
    })
})

// The output would start physics, chemistry, medicine... ).
nobel_prize_winners_2017.prizes.forEach(function (p){
    console.log(p.category)
})
// The total number of prize categories
let numOfCat = 0
nobel_prize_winners_2017.prizes.forEach(function (p){
    numOfCat++
})
console.log(numOfCat)
// Count the total number of laureates from 2017.
let numOfLau = 0;
nobel_prize_winners_2017.prizes.forEach(function (p){
    if (p.year == 2017){
        p.laureates.forEach(function (l){
            numOfLau++
        })
    }
})
console.log(numOfLau)
