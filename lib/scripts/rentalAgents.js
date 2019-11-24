/* eslint-disable quotes */
// rentalAgents array maps rental agents to beaches (locations)
// gets you to think about all the beaches an agent services

const theBeaches = {
   ocmd: {
      beach: "Ocean City, MD",
      location: { lat: 38.3365, lng: -75.0849 },
      state: "Maryland",
   },
   fenwick: {
      beach: "Fenwick",
      location: { lat: 38.4623, lng: -75.0513 },
      state: "Delaware",
   },
   bethany: {
      beach: "Bethany",
      location: { lat: 38.5395, lng: -75.0552 },
      state: "Delaware",
   },
   assateague: {
      beach: "Assateague",
      location: { lat: 38.0917, lng: -75.2038 },
      state: "Maryland",
   },
   rehoboth: {
      beach: "Rehoboth",
      location: { lat: 38.7168, lng: -75.076 },
      state: "Delaware",
   },
   lewes: {
      beach: "Lewes",
      location: { lat: 38.7745, lng: -75.1393 },
      state: "Delaware",
   },
   dewey: {
      beach: "Dewey",
      location: { lat: 38.6929, lng: -75.0746 },
      state: "Delaware",
   },
   stoneHarbor: {
      beach: "Stone Harbor",
      location: { lat: 39.0509, lng: -74.7579 },
      state: "New Jersey",
   },
   capeMay: {
      beach: "Cape May",
      location: { lat: 38.9593, lng: -74.9274 },
      state: "New Jersey",
   },
   avalon: {
      beach: "Avalon",
      location: { lat: 39.0918, lng: -74.7365 },
      state: "New Jersey",
   },
   seaIsleCity: {
      beach: "Sea Isle City",
      location: { lat: 39.1526, lng: -74.6974 },
      state: "New Jersey",
   },
   wildwood: {
      beach: "Wildwood",
      location: { lat: 38.989, lng: -74.8199 },
      state: "New Jersey",
   },
   ocnj: {
      beach: "Ocean City, NJ",
      location: { lat: 39.2776, lng: -74.5746 },
      state: "New Jersey",
   },
   lbi: {
      beach: "Long Beach Island",
      location: { lat: 39.6598, lng: -74.1708 },
      state: "New Jersey",
   },
   acnj: {
      beach: "Atlantic City",
      location: { lat: 39.3784, lng: -74.4233 },
      state: "New Jersey",
   },
   seasideHeights: {
      beach: "Seaside Heights",
      location: { lat: 39.9443, lng: -74.0729 },
      state: "New Jersey",
   },
   vaBeach: {
      beach: "Virginia Beach",
      location: { lat: 36.8529, lng: -75.97798 },
      state: "Virginia",
   },
   obx: {
      beach: "OBX (Corolla to Nags Head)",
      location: { lat: 36.1696, lng: -75.7552 },
      state: "North Carolina",
   },
   sunsetBeach: {
      beach: "Sunset Beach",
      location: { lat: 33.883, lng: -78.5122 },
      state: "North Carolina",
   },
   oib: {
      beach: "Ocean Isle Beach",
      location: { lat: 33.9, lng: -78.4267 },
      state: "North Carolina",
   },
   holdenBeach: {
      beach: "Holden Beach",
      location: { lat: 33.91416, lng: -78.30696 },
      state: "North Carolina",
   },
   northMyrtle: {
      beach: "North Myrtle Beach",
      location: { lat: 33.825, lng: -78.67997 },
      state: "South Carolina",
   },
   wilmington: {
      beach: "Wilmington",
      location: { lat: 34.2085, lng: -77.79637 },
      state: "North Carolina",
   },
   southport: {
      beach: "Southport",
      location: { lat: 33.92156, lng: -78.02027 },
      state: "North Carolina",
   },
   myrtle: {
      beach: "Myrtle Beach",
      location: { lat: 33.6897, lng: -78.8867 },
      state: "South Carolina",
   },
   /* Florida Locations */
   westPalmBeach: {
      beach: "West Palm Beach",
      location: { lat: 26.7153, lng: -80.0534 },
      state: "Florida",
   },
   boyntonBeach: {
      beach: "Boynton Beach",
      location: { lat: 26.5318, lng: -80.0905 },
      state: "Florida",
   },
   delrayBeach: {
      beach: "Delray Beach",
      location: { lat: 26.4615, lng: -80.0728 },
      state: "Florida",
   },
   highlandBeach: {
      beach: "Highland Beach",
      location: { lat: 26.3995, lng: -80.0656 },
      state: "Florida",
   },
   bocaRaton: {
      beach: "Boca Raton",
      location: { lat: 26.3683, lng: -80.1289 },
      state: "Florida",
   },
   deerfieldBeach: {
      beach: "Deerfield Beach",
      location: { lat: 26.3184, lng: -80.0998 },
      state: "Florida",
   },
   pompanoBeach: {
      beach: "Pompano Beach",
      location: { lat: 26.2379, lng: -80.1248 },
      state: "Florida",
   },
   ftLauderdale: {
      beach: "Ft Lauderdale",
      location: { lat: 26.1224, lng: -80.1373 },
      state: "Florida",
   },
   hollywoodBeach: {
      beach: "Hollywood Beach",
      location: { lat: 26.0087, lng: -80.1170 },
      state: "Florida",
   },
   goldenBeach: {
      beach: "Golden Beach",
      location: { lat: 25.9651, lng: -80.1223 },
      state: "Florida",
   },
   sunnyIsle: {
      beach: "Sunny Isle",
      location: { lat: 25.9429, lng: -80.1234 },
      state: "Florida",
   },
   miamiBeach: {
      beach: "Miami Beach",
      location: { lat: 25.7907, lng: -80.1300 },
      state: "Florida",
   },
};
// console.log(`theBeaches.ocmd: ${JSON.stringify(theBeaches["ocmd"])}`);
const rentalAgents = [
   {
      agent: "Sand Helper",
      phone: "855-743-5737",
      email: "rent@sandhelper.com",
      url: "./locations/ocean-city-md.html",
      notes: "Now offering hourly rentals through Dandy Don's!",
      locations: [
         theBeaches["ocmd"],
      ],
   },

   {
      agent: "Sand Helper",
      phone: "855-743-5737",
      email: "rent@sandhelper.com",
      url: "./locations/ocean-city-md.html",
      notes: "",
      locations: [
         theBeaches["fenwick"],
         theBeaches["bethany"],
         theBeaches["assateague"],
      ],
   },

   {
      agent: "Grand Rental Station",
      phone: "302-227-7368",
      email: "info@227rent.com",
      url:
         "https://www.227rent.com/shop/vacation-items/beach-wheelchair-770.html",
      notes: "",
      locations: [
         theBeaches["rehoboth"],
         theBeaches["lewes"],
         theBeaches["dewey"],
      ],
   },

   {
      agent: "Stone Harbor Crib & Beach Rental",
      phone: "609-368-7271",
      notes: "",
      email: "info@stoneharborcribrental.com",
      url: "http://www.stoneharborcribrental.com/Beach-Equipment/",
      locations: [
         theBeaches["stoneHarbor"],
         theBeaches["capeMay"],
         theBeaches["avalon"],
         theBeaches["seaIsleCity"],
         theBeaches["wildwood"],
         theBeaches["ocnj"],
      ],
   },

   {
      agent: "Beach Easy Rentals",
      phone: "609-234-4698 ",
      notes: "",
      email: "kim@beacheasynj.com",
      url: "https://beacheasynj.com/",
      locations: [
         theBeaches["lbi"],
         theBeaches["acnj"],
         theBeaches["seasideHeights"],
         theBeaches["ocnj"],
      ],
   },

   {
      agent: "Beach Power Mobility",
      phone: "757-481-1590",
      notes: "",
      email: "info@aeromedic.com",
      url: "https://beachpowermobility.rezdy.com/catalog/282257/sandhelper",
      locations: [theBeaches["vaBeach"]],
   },

   {
      agent: "Just for Beach Rentals",
      phone: "866-629-7368",
      notes: "",
      email: "rentals@justforthebeach.com",
      url: "https://justforthebeach.com/product/electric-beach-wheel-chair/",
      locations: [theBeaches["obx"]],
   },

   {
      agent: "Julie's Rentals",
      phone: "910-579-1211",
      email: "customerservice@juliesrentals.com",
      url:
         "https://juliesrentals.com/beach-gear-rentals-umbrella-rentals-beach-wagon/",
      notes: "",
      locations: [
         theBeaches["sunsetBeach"],
         theBeaches["oib"],
         theBeaches["holdenBeach"],
         theBeaches["northMyrtle"],
      ],
   },

   {
      agent: "Coastal Golf Cart Rentals",
      phone: "910-477-0716",
      notes: "",
      email: "missy@coastalgolfcartrentals.com",
      url:
         "https://www.coastalgolfcartrentals.com/Power-Beach-Wheelchair-Rentals",
      locations: [
         theBeaches["oib"],
         theBeaches["wilmington"],
         theBeaches["southport"],
         theBeaches["holdenBeach"],
         theBeaches["sunsetBeach"],
      ],
   },

   {
      agent: "Mobility Center of the Grand Strand",
      phone: "843-692-8001",
      notes: "",
      email: "info@mobility-center.com",
      url: "http://mobility-center.com/equipment-rentals/",
      locations: [theBeaches["myrtle"]],
   },

   {
      agent: "Sand Helper (Palm Beach Hub)",
      phone: "561-404-2182",
      notes: "",
      email: "centralflorida@sandhelper.com",
      url: "./locations/delray-fl.html",
      locations: [
         theBeaches["westPalmBeach"],
         theBeaches["boyntonBeach"],
         theBeaches["delrayBeach"],
         theBeaches["highlandBeach"],
         theBeaches["bocaRaton"],
         theBeaches["deerfieldBeach"],
         theBeaches["pompanoBeach"],
      ],
   },

   {
      agent: "Sand Helper (Miami Hub)",
      phone: "305-521-0962",
      notes: "",
      email: "southeastflorida@sandhelper.com",
      url: "./locations/miami-fl.html",
      locations: [
         theBeaches["ftLauderdale"],
         theBeaches["hollywoodBeach"],
         theBeaches["goldenBeach"],
         theBeaches["sunnyIsle"],
         theBeaches["miamiBeach"],
      ],
   },
];

// "swap" the beach and rental agents to set up for next step
// gets you to think of all agents that service a beach
const tempLocationRentals = [];
rentalAgents.forEach(agent =>
   agent.locations.forEach(loc => {
      const locRentalObject = {};
      locRentalObject.beach = loc.beach;
      locRentalObject.rentalAgent = agent.agent;
      locRentalObject.phone = agent.phone;
      locRentalObject.notes = agent.notes;
      locRentalObject.email = agent.email;
      locRentalObject.url = agent.url;
      tempLocationRentals.push(locRentalObject);
   })
);

//  now, this step makes the beach a key (therefore unique) and has each rental agent object as the value
const rentalAgentsKeyedByBeach = {};
tempLocationRentals.map(locR => {
   if (rentalAgentsKeyedByBeach.hasOwnProperty(locR.beach)) {
      // this magical step checks to see if I've already seen this beach (think: counting word frequency problem)
      const skinnyLocR = {};
      Object.assign(skinnyLocR, locR), // Object.assign(dest, src),
         delete skinnyLocR.beach; // don't need the name of the beach since it's the key of this array
      rentalAgentsKeyedByBeach[locR.beach].push(skinnyLocR);
   } else {
      const skinnyLocR = {};
      Object.assign(skinnyLocR, locR);
      delete skinnyLocR.beach; // don't need the name of the beach since it's the key of this array
      rentalAgentsKeyedByBeach[locR.beach] = [skinnyLocR]; // note: this is an array of 1 object, not just an object
   }
});
/*
console.log(`rentalAgentsKeyedByBeach: ${JSON.stringify(rentalAgentsKeyedByBeach["Ocean City, MD"])}`);
console.log(`==================`);
rentalAgentsKeyedByBeach["Ocean City, MD"].forEach( ra => {
        console.log(`    ${JSON.stringify(ra)}`);
});
*/

/* create the html div element (infoWindow) that will be displayed by google maps when a SH icon is clicked */
const theBeaches1 = Object.keys(rentalAgentsKeyedByBeach); // gets all the beaches so I can troll through them below

const theIWArray = [];
theBeaches1.forEach(b => {
   const theIWDiv = document.createElement("div");
   theIWDiv.classList.add("IWdiv");
   theIWDiv.style.visibility = "visible"; // this property allows me to toggle the infoWindow on the Google map
   const theBeachName = document.createElement("p");
   theBeachName.classList.add("IWp");
   theBeachName.innerHTML = b;
   theIWDiv.appendChild(theBeachName);
   theIWDiv.style.fontFamily = "Josefin Sans, monotype";
   const theRentalAgentsList = document.createElement("ul"); // the rental agents will be stored in an unordered list and displayed below the beach name
   theRentalAgentsList.classList.add("IWul");
   theIWDiv.appendChild(theRentalAgentsList);
   rentalAgentsKeyedByBeach[b].forEach(ra => {
      const theRentalAgentsListItemName = document.createElement("li"); // each rental agent will be an item on the unordered list
      theRentalAgentsListItemName.classList.add("IWliName");
      theRentalAgentsListItemName.style.fontFamily = "Josefin Sans, monotype";
      theRentalAgentsListItemName.innerHTML = ra.rentalAgent;
      theRentalAgentsList.appendChild(theRentalAgentsListItemName);

      const theRentalAgentsListItemPhone = document.createElement("li"); // get the phone #
      const thePhoneLink = document.createElement("a");
      thePhoneLink.classList.add("hover-underline");
      thePhoneLink.setAttribute("href", "tel:" + ra.phone);
      thePhoneLink.innerHTML = ra.phone;
      theRentalAgentsListItemPhone.appendChild(thePhoneLink);
      theRentalAgentsListItemPhone.classList.add("IWliPhone");
      theRentalAgentsListItemPhone.style.fontFamily = "Josefin Sans, monotype";
      theRentalAgentsList.appendChild(theRentalAgentsListItemPhone);

      // Desktop map popup email address with hyperlink
      const theRentalAgentsListItemEmail_desktop = document.createElement("li"); // get the email address
      const theEmailLink_desktop = document.createElement("a");
      theEmailLink_desktop.classList.add("hover-underline");
      theEmailLink_desktop.setAttribute("href", "mailto:" + ra.email);
      theEmailLink_desktop.innerHTML = ra.email;
      theRentalAgentsListItemEmail_desktop.appendChild(theEmailLink_desktop);
      theRentalAgentsListItemEmail_desktop.classList.add("IWliEmail");
      theRentalAgentsListItemEmail_desktop.classList.add("desktop");
      theRentalAgentsListItemEmail_desktop.style.fontFamily = "Josefin Sans, monotype";
      theRentalAgentsList.appendChild(theRentalAgentsListItemEmail_desktop);

      // Mobile map popup "Email" text with hyperlink
      const theRentalAgentsListItemEmail_mobile = document.createElement("li"); // get the email address
      const theEmailLink_mobile = document.createElement("a");
      theEmailLink_mobile.classList.add("hover-underline");
      theEmailLink_mobile.setAttribute("href", "mailto:" + ra.email);
      theEmailLink_mobile.innerHTML = "Email";
      theRentalAgentsListItemEmail_mobile.appendChild(theEmailLink_mobile);
      theRentalAgentsListItemEmail_mobile.classList.add("IWliEmail");
      theRentalAgentsListItemEmail_mobile.classList.add("mobile");
      theRentalAgentsListItemEmail_mobile.style.fontFamily = "Josefin Sans, monotype";
      theRentalAgentsList.appendChild(theRentalAgentsListItemEmail_mobile);

      const theRentalAgentsListItemURL = document.createElement("li"); // get the URL (make it a link that opens in a new tab)
      const theWebsiteLink = document.createElement("a");
      theWebsiteLink.classList.add("hover-underline");
      theWebsiteLink.setAttribute("href", ra.url);
      theWebsiteLink.setAttribute("target", "_blank");
      theWebsiteLink.innerHTML = "Info, Pricing and Reservations";

      theRentalAgentsListItemURL.appendChild(theWebsiteLink);
      theRentalAgentsListItemURL.classList.add("IWliURL");
      theRentalAgentsListItemURL.style.fontFamily = "Josefin Sans, monotype";
      theRentalAgentsList.appendChild(theRentalAgentsListItemURL);

      const theRentalAgentsListItemNotes = document.createElement("li"); // grab the notes
      theRentalAgentsListItemNotes.classList.add("IWliNotes");
      theRentalAgentsListItemNotes.style.fontFamily = "Josefin Sans, monotype";
      theRentalAgentsListItemNotes.innerHTML = ra.notes;
      theRentalAgentsList.appendChild(theRentalAgentsListItemNotes);
   });
   theIWArray[b] = theIWDiv;
   // console.log(`${theIWArray[b]}`);
});

// Set up the array for the next Array.map() to create an object of beaches keyed by state
const theBeachesInArrayForm = Object.keys(theBeaches).map(key => {
   return theBeaches[key];
});
//  now, this step makes the state a key (therefore unique) and has each beach name as the value
const theBeachesKeyedByState = {};
theBeachesInArrayForm.map(w => {
   if (theBeachesKeyedByState.hasOwnProperty(w.state)) {
      // this magical step checks to see if I've already seen this beach (think: counting word frequency problem)
      const skinnyBeach = {};
      Object.assign(skinnyBeach, w); // Object.assign(dest, src);
      delete skinnyBeach.location; // don't need the location coordinates
      delete skinnyBeach.state; // don't need the name of the state since it's the key of this array
      theBeachesKeyedByState[w.state].push(skinnyBeach);
   } else {
      const skinnyBeach = {};
      Object.assign(skinnyBeach, w);
      delete skinnyBeach.location; // don't need the location coordinates
      delete skinnyBeach.state; // don't need the name of the state since it's the key of this array
      theBeachesKeyedByState[w.state] = [skinnyBeach]; // note: this is an array of 1 object, not just an object
   }
});
