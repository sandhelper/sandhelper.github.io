/* eslint-disable quotes */
// import "./../lib/styles/style.css";
// import "./../lib/styles/styleFaq.css";

// import "../lib/scripts/googleAnalytics.js";
// import "../lib/scripts/fbpixelcode.js";
// import "../lib/scripts/headerStyling.js";
// import "../lib/scripts/footerStyling.js";

const q_and_A = [{
      question: `Where do I store the scooter during my multi-day rental period?`,
      answer: `In the lobby, right outside of the lobby, or somewhere in the parking lot.
        As long as it isn't blocking any kind of traffic.
        You will take the key inside with you for security when the chair is not in use.
        The batteries are also removable and can be charged inside of your room.`,
   },
   {
      question: `How long do the batteries last?`,
      answer: `Our beach wheelchair holds two batteries and runs off of one of them at a time.
        One acts as a spare. In total, on a single charge, the sand scooter will go
        approximately 8 miles. These batteries are removable and rechargable.
        Just carry them inside and plug into the wall overnight. Chargers are provided
        with the rental.
        `,
   },
   {
      question: `How do I charge the sand scooter?`,
      answer: `Our beach wheelchair has two 12 lb removable batteries (with key).
        At night, you can leave the wheelchair in a safe place downstairs and you or a friend
        can carry these batteries inside to charge overnight. We provide the chargers,
        which are just like a laptop charger, and they plug right into a 110V wall outlet.
        `,
   },
   {
      question: `How do I get into the beach wheelchair?`,
      answer: `Most people will load onto the machine by stepping onto the footplate
        in the front. Another common method is to fold an armrest up, sit on it from the side
        between the tires, and then bring your legs around to the forward facing position. If
        you are wondering about how to load using sliding boards or lift devices, this may or
        may not be possible depending on your specific equipment and the weight of the rider.
        Before committing to a rental, these dimensions may help you decide whether or not the
        Sand Helper is a good fit for you: seat height: 27"; tire height (diameter): 21";
        distance from side of seat to the outside of tires: 8".
        `,
   },
   {
      question: `How do I transport the wheelchair?`,
      answer: `All of our locations deliver the wheelchair directly to where you are
        staying. No need to move it yourself.
        `,
   },
   {
      question: `How long can I rent the electric beach wheelchair?`,
      answer: `Some locations have a 3 Day minimum, but there is no limit to how
        long you can rent our beach wheelchairs.
        `,
   },
   {
      question: `How fast does the sand scooter go?`,
      answer: `About 4mph, which is average walking pace.
        `,
   },
   {
      question: `What forms of payment do you accept?`,
      answer: `All of our locations accept credit cards. Some take payment through
        their website. And some may take cash. Please check with your preferred location
        for additional details or questions regarding payment options.
        `,
   },
   {
      question: `Can I drive it into my room?`,
      answer: `Because of the large sand tires, the wheelchair won't go through a
        standard door, but you will leave the wheelchair downstairs or outside, and take
        the key with you for security.
        `,
   },
   {
      question: `Can I purchase a wheelchair?`,
      answer: `Yes, contact us at
        <i><a class = "linkincontent" href="mailto:info@sandhelper.com">info@sandhelper.com</a></i>
        for more information.
        `,
   },
];


const ulQuestions = document.querySelector(
   "body > main > section:nth-of-type(1) > div > ul"
);

q_and_A.forEach(qa => {
   const listItemInnerAccordion = document.createElement("li");
   ulQuestions.appendChild(listItemInnerAccordion);
   const divInnerAccordion = document.createElement("div");
   divInnerAccordion.classList.add("inner-accordion");
   const divQuestionline = document.createElement("div");
   divQuestionline.classList.add("questionline");
   const plusMinusButton = document.createElement("button");
   const spanPlus = document.createElement("span");
   const spanMinus = document.createElement("span");
   plusMinusButton.appendChild(spanPlus);
   plusMinusButton.appendChild(spanMinus);
   plusMinusButton.className = "accordion-toggle-btn";
   spanPlus.classList.add("plus");
   spanMinus.classList.add("minus");
   const iFramePlus = document.createElement("i");
   const iFrameMinus = document.createElement("i");
   spanPlus.appendChild(iFramePlus);
   spanMinus.appendChild(iFrameMinus);
   iFramePlus.classList.add("fa", "fa-plus");
   iFrameMinus.classList.add("fa", "fa-minus");
   const divAccordionContainer = document.createElement("div");
   divAccordionContainer.classList.add("accordion-container");
   const anchorButton = document.createElement("a");
   anchorButton.style.role = "button";
   anchorButton.innerHTML = qa.question;
   const divAccordionContent = document.createElement("div");
   divAccordionContent.classList.add("accordion-content");
   divAccordionContent.style.opacity = 0;
   divAccordionContent.style.maxHeight = 0;
   listItemInnerAccordion.appendChild(divInnerAccordion);
   divInnerAccordion.appendChild(divQuestionline);
   divQuestionline.appendChild(plusMinusButton);
   divQuestionline.appendChild(divAccordionContainer);
   divAccordionContainer.appendChild(anchorButton);
   divAccordionContainer.appendChild(divAccordionContent);
   // Display answer below
   divAccordionContent.innerHTML = `${qa.answer}`;
});

const plusMinusButtons = document.querySelectorAll(
   "body > main > section:nth-of-type(1) > div > ul > li > div > div > button"
);
const plusMinusButtonsArray = Array.from(plusMinusButtons);
const questionLinks = document.querySelectorAll(
   "body > main > section:nth-of-type(1) > div > ul > li > div > div > div > a"
);
const questionLinksArray = Array.from(questionLinks);

/* plusMinus button hocus pocus */
function morphTheButton(e) {
   const theAnswer = this.parentElement.querySelector(
      ".accordion-container .accordion-content"
   ); // as seen from the plusMinus <button>
   if (theAnswer.style.opacity == 0) {
      theAnswer.style.maxHeight = "500px";
      theAnswer.style.opacity = 1;
      this.className = "accordion-toggle-btn active";
   } else {
      theAnswer.style.maxHeight = 0;
      theAnswer.style.opacity = 0;
      this.className = "accordion-toggle-btn";
   }
}

/* this function toggles the answer (accordian-content) to the FAQ question   */
/* the class name of the answer must be 'accordion-content'                   */
function toggleAccordionContent(e) {
   const theAnswer = this.parentElement.querySelector(".accordion-content"); // as seen from the question <a> tag
   const theButton = this.parentElement.parentElement.querySelector("button"); // as seen from the question <a> tag

   if (theAnswer.style.opacity == 0) {
      theAnswer.style.maxHeight = "500px";
      theAnswer.style.opacity = 1;
      theButton.className = "accordion-toggle-btn active";
   } else {
      theAnswer.style.maxHeight = 0;
      theAnswer.style.opacity = 0;
      theButton.className = "accordion-toggle-btn";
   }
}

questionLinksArray.forEach(x => {
   x.addEventListener("click", toggleAccordionContent);
});

plusMinusButtonsArray.forEach(x => {
   x.addEventListener("click", morphTheButton);
});
