const REVIEWS = [
    {
        "name": "Chris Gigon",
        "date": "Oct 22, 2019",
        "profile_picture": "Chris Gigon.jpg",
        "social_media_site": "Facebook",
        "link": "https://www.facebook.com/permalink.php?story_fbid=971397069887209&id=100010507755124",
        "content": "Delivered chair to requested location. Instructed us how to use it. Great for those unsteady walking on sand. Picked up locked chair when we requested and texted me when they did. Highly recommend using this for a very enjoyable day at the beach. Well worth it!"
    },
    {
        "name": "Stacey Drechsler",
        "date": "Sep 27, 2019",
        "profile_picture": "Stacey Drechsler.jpg",
        "social_media_site": "Facebook",
        "link": "https://www.facebook.com/broucke/posts/10156941817623547",
        "content": "This sand wheel chair was a game changer. My dad, who is a Vet, would struggle to get to the ocean. He easily got to the water with the use of the sand wheel chair. This company was wonderful to work with. They dropped it off and picked it up. The batteries were dependable. Highly recommend."
    },
    {
        "name": "Normale Faith Crouse Doyle",
        "date": "Sep 19, 2019",
        "profile_picture": "Normale Faith Crouse Doyle.jpg",
        "social_media_site": "Facebook",
        "link": "https://www.facebook.com/normaled/posts/10157710954908522",
        "content": "Just back from a fantastic week at Ocean City. I was able to \"walk\" on the beach for the 1st time in many years thanks to Nick and Sandhelper. Nick took care of delivering the scooter right to the hotel so it was there when i arrived. Highly recommend this service."
    },
    {
        "name": "Elva Gilbert",
        "date": "Sep 9, 2019",
        "profile_picture": "Elva Gilbert.jpg",
        "social_media_site": "Facebook",
        "link": "https://www.facebook.com/elva.gilbert.7/posts/2987370207946716",
        "content": "My sister and I took our handicapped sister and elderly mother to OC last week. Renting a scooter for mom was such a great help. Sand Helper had it delivered before we arrived. The scooter was clean , well maintained, and fully charged. The customer service was EXCELLENT. Will definitely be using them next time we visit OC."
    },
    {
        "name": "Kriste Summers",
        "date": "Sep 5, 2019",
        "profile_picture": "Kriste Summers.jpg",
        "social_media_site": "Facebook",
        "link": "https://www.facebook.com/KristeSummers/posts/10156932334238509",
        "content": "We recently used the SandHelper in Ocean City MD for my mother who has Cancer and can not get around very well but really wanted a beach trip with her kids and grandchildren. I can not stress enough how amazing this motorized wheelchair is. This was a game changer for us and completely made our trip. The customer service was amazing, they responded within minutes and were so helpful. we stored the SandHelper in the lobby of our hotel with no problem, it came with 2 batteries and a charger and each battery has an average range of 4 miles. We were at a hotel on the beach, so we didn't even finish the first battery. Seriously, I can not stress enough how amazing this was and will recommend this to literally anyone who asks. It also helps that it was super entertaining for the kids :)"
    },
    {
        "name": "Gary Newton",
        "date": "Sep 5, 2019",
        "profile_picture": "Gary Newton.jpg",
        "social_media_site": "Facebook",
        "link": "https://www.facebook.com/gary.newton.796/posts/10215387597627583",
        "content": "The customer service was outstanding. Rented a beach buggy wheel chair for mom shi that she could get to the beach while she was here in OC. prices was simple. Did what they said they would do. We even lost the key and they bought us another one no questions asked and didn't even charge us for it. Highly recommend overall awesome exsperience ."
    },
    {
        "name": "Karen Miller",
        "date": "Sep 2, 2019",
        "profile_picture": "Karen Miller.jpg",
        "social_media_site": "Facebook",
        "link": "https://www.facebook.com/karen.miller.5264/posts/2801289059898898",
        "content": "I have issues with mobility and when I saw an advertisement for Sand Helper I knew that would definitely help. I rented it for a day to go back and forth to the beach from our rental property. It allowed me to be able to spend more time with my grandchildren. It was so much fun. I will definitely rent next time I come to the beach. It was also great how they bring it right to you and pick it up."
    },
    {
        "name": "Vivian Lieb",
        "date": "Aug 27, 2019",
        "profile_picture": "Vivian Lieb.jpg",
        "social_media_site": "Facebook",
        "link": "https://www.facebook.com/vivian.lieb/posts/2642515652427368",
        "content": "We rented a sand helper so that my husband could go on the beach sand where our family was sitting. He rode the sandhelper and was able to spend 3 days enjoying our children, grandchildren, and cousins. He would have been unable to leave the bench on the boardwalk Without the sandhelper. Nick, the designer, owner and renter was exceptionally responsive. He called us back immediately, gave us instructions and answered all our questions. The video, accompanying the site on line gave very cleat instructions. Nick had the sand helper waiting for us on our arrival at our hotel, and he picked it up from our hotel after we left. The sandhelper was also able to be used for walks on the boardwalk. We definitely would recommend renting the sandhelper!"
    },
    {
        "name": "Barbara Mccarthy",
        "date": "Aug 22, 2019",
        "profile_picture": "Barbara Mccarthy.jpg",
        "social_media_site": "Facebook",
        "link": "https://www.facebook.com/barbara.mccarthy.336/posts/10220724385485903",
        "content": "This summer, with a recently broken pelvis, I didn't think that I would be able to join my family at Ocean City, MD for our annual vacation. I looked online and found Sand Helper😃 Nick was wonderful! He made all the arrangements for me to rent a motorized wheelchair for the week. When we arrived at our condominium, I found my wheelchair waiting there for me with a fully-charged battery and a spare one.\nIt was so easy to use and it made it possible for me to spend hours of fun with my family on the beach.\nI highly recommend Nick and ‘Sand Helper' for wonderful customer service and an excellent ride!\nSincerely, Barbara McCarthy"
    },
    {
        "name": "Michelle Pate",
        "date": "Aug 20, 2019",
        "profile_picture": "Michelle Pate.png",
        "social_media_site": "Google",
        "link": "https://goo.gl/maps/BdLinBRRKbgVGLfV6",
        "stars": 5,
        "content": "Nick of Sand Helper really saved my bacon on vacation! I needed a key for the electric scooter that I had brought with us, but neglected to remember the key! He was there to save the day within 1 hour of calling him, and our vacation was back on! He came right to our hotel. I cannot recommend this young man and his service highly enough! Why can't they have 6 Stars? Anyone who has mobility issues, or a family member with mobility issues, Sand Helper makes sure that they get to participate in the fun as well! Thank you again, Nick!"
    },
    {
        "name": "otto bar",
        "date": "Aug 5, 2019",
        "profile_picture": "Otto Bar.png",
        "social_media_site": "Google",
        "link": "https://goo.gl/maps/g6VHwN8JEeh4t5PX9",
        "stars": 5,
        "content": "5 stars! Renting from Sand Helper was so easy! Nick was awesome to work with! Very communicative! Fast response and service. I needed a scooter to get around OC after I had surgery to repair a dislocated and broken ankle. It was perfect and it was easy getting around town via the sidewalk or bus. At one point, we lost the key to the scooter...we thought we'd be stranded at the beach for a while but Nick got us a new key in less than 15 minutes...at no extra charge! Hopefully I'll never be injured again but if I am, I'll def be renting from Sand Helper. We wouldn't have been able to have a great trip without renting a scooter from Sand Helper. Worth the money!"
    },
    {
        "name": "Cindy Ryan Eller",
        "date": "Aug 3, 2019",
        "profile_picture": "Cindy Ryan Eller.jpg",
        "social_media_site": "Facebook",
        "link": "https://www.facebook.com/cindy.eller.16/posts/10219922885722463",
        "content": "We rented a Sand Helper in OC MD and were so happy to get my husband to the beach. It was a gift! Your customer service was outstanding and I really appreciate Nick answering all my questions. We will be in Corolla soon and are hopeful to be able to rent a Sand Helper there so my husband will be on the beach with his children and grandchildren. Thank you."
    },
    {
        "name": "Madonna Rabatin",
        "date": "Aug 1, 2019",
        "profile_picture": "Madonna Rabatin.jpg",
        "social_media_site": "Facebook",
        "link": "https://www.facebook.com/madonna.rabatin/posts/2376466532676802:0",
        "content": "I can't say enough about how great Nick was in providing us with a Sand Helper. He took care of our needs with location and relocating the sand helper. He was quick to resolve issue that I actually caused and didn't make an issue to disrupt our vacation. What customer service!!! I only wish people would be as kind and thought full in the service they provide as Nick was to us. Because of Nick our vacation was much more enjoyable and relaxing. Nick, Thank you and keep up the awesome service."
    },
    {
        "name": "Madonna Rabatin",
        "date": "Aug 1, 2019",
        "profile_picture": "Madonna Rabatin - Google.png",
        "social_media_site": "Google",
        "link": "https://goo.gl/maps/XPQkRroc7ANmUxQ19",
        "stars": 5,
        "content": "Sand Helper is a great product and was so helpful to us so that my sister could enjoy the beach with us. But more importantly was the service that Nick provided. He was such a joy to work with and he helped us through out our stay. He problem solved for us when we need the sand helper moved and he was most accommodating in resolving issues that I created by parking the sand helper in the wrong place. Nick took care of it and was no issue. Because of the Sand Helper and Nick our vacation was more enjoyable and stress free. Thanks Nick for the awesome service."
    }
];

const blockBodyScrolls = () => {
    document.body.classList.add('modalOpen');
}
const unblockBodyScrolls = () => {
    document.body.classList.remove('modalOpen');
}

const generateAndOpenReviewsModal = () => {
    const reviewsContainer = document.getElementById("reviews-container");
    
    // Only generate reviews if they haven't been generated yet
    if (reviewsContainer.children.length === 0) {
        for (const review of REVIEWS) {
            reviewsContainer.appendChild(generateReviewRow(review));
        }
    }
}

const generateReviewRow = (review) => {
    const hostName = window.location.host ? `https://${window.location.host}` : "https://sandhelper.com";
    const romwDiv = document.createElement("div");
    romwDiv.className = "romw";

    const romwContainerDiv = document.createElement("div");
    romwContainerDiv.className = "romw-container";
    romwDiv.appendChild(romwContainerDiv);

    // Social Media Site Logo
    const romwSourceLogoEl = document.createElement("p");
    romwSourceLogoEl.className = "romw-source-logo";
    const logoImgLinkEl = document.createElement("a");
    logoImgLinkEl.href = review.link;
    logoImgLinkEl.target = "#";
    const logoImgEl = document.createElement("img");
    logoImgEl.src = `${hostName}/lib/images/reviews/${review.social_media_site}.png`;
    logoImgLinkEl.appendChild(logoImgEl);
    romwSourceLogoEl.appendChild(logoImgLinkEl);
    romwContainerDiv.appendChild(romwSourceLogoEl);

    // Reviewer photo
    const reviewerPhotoEl = document.createElement("p");
    reviewerPhotoEl.className = "romw-author-photo";
    const reviewerPhotoImgEl = document.createElement("img");
    reviewerPhotoImgEl.src = `${hostName}/lib/images/reviews/${review.profile_picture}`;
    reviewerPhotoEl.appendChild(reviewerPhotoImgEl);
    romwContainerDiv.appendChild(reviewerPhotoEl);

    // Reviewer Name and Stars (optional)
    const reviewerNameEl = document.createElement("p");
    reviewerNameEl.className = "romw-author-stars";
    const reviewerNameSpanEl = document.createElement("span");
    reviewerNameSpanEl.innerText = review.name;
    reviewerNameEl.appendChild(reviewerNameSpanEl);
    romwContainerDiv.appendChild(reviewerNameEl);

    // Review Date
    const reviewDateEl = document.createElement("p");
    reviewDateEl.innerText = review.date;
    romwContainerDiv.appendChild(reviewDateEl);

    // Review Content
    const reviewContentEl = document.createElement("p");
    reviewContentEl.innerText = review.content;
    romwContainerDiv.appendChild(reviewContentEl);

    return romwDiv;
}

document.getElementById("custom-reviews-modal-btn").addEventListener("click", () => {
    blockBodyScrolls();
    generateAndOpenReviewsModal();
});

document.getElementById("modal-close-btn").addEventListener("click", () => {
    unblockBodyScrolls();
});

if (window.location.hash === "#reviews-modal") {
    blockBodyScrolls();
    generateAndOpenReviewsModal();
}
