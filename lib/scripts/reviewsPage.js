const FULL_REVIEWS = [
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
        "content": "This summer, with a recently broken pelvis, I didn't think that I would be able to join my family at Ocean City, MD for our annual vacation. I looked online and found Sand Helper😃 Nick was wonderful! He made all the arrangements for me to rent a motorized wheelchair for the week. When we arrived at our condominium, I found my wheelchair waiting there for me with a fully-charged battery and a spare one.\nIt was so easy to use and it made it possible for me to spend hours of fun with my family on the beach.\nI highly recommend Nick and 'Sand Helper' for wonderful customer service and an excellent ride!\nSincerely, Barbara McCarthy"
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
    },
    {
        "name": "J. Michael Pollock",
        "date": "Jul 31, 2019",
        "profile_picture": "J Michael Pollock.png",
        "social_media_site": "Google",
        "link": "https://goo.gl/maps/29CKiWpZxoPDUo8f6",
        "stars": 5,
        "content": "Thank you so much Sand Helper. Without your motorized wheel chair our 90 year old mother/mother-in-law would not have been able to join us on the beach in Ocean City today. We spent a wonderful relaxing day as a family. Your vehicle and customer service was outstanding."
    },
    {
        "name": "Julian Gerstin",
        "date": "Jul 28, 2019",
        "profile_picture": "Julian Gerstin.png",
        "social_media_site": "Google",
        "link": "https://goo.gl/maps/VtjhS3yzy5zAGNZ3A",
        "stars": 5,
        "content": "Easy to do -- just call them and they deliver to you, and pick up at the end of your visit. The chairs aren't fast, moving at a slow walking pace, but they get there in the end. Recommended if you want to get your loved one to the beach to enjoy grandkids, games, good times."
    },
    {
        "name": "Kelly Morse",
        "date": "Jul 26, 2019",
        "profile_picture": "Kelly Morse.jpg",
        "social_media_site": "Facebook",
        "link": "https://www.facebook.com/kelly.morse.779/posts/10159178495069896",
        "content": "As a full time wheelchair user, the beach can sometimes be difficult. I've used other beach wheelchairs, but didn't like that I had to have someone else push me in the sand. The Sand Helper allowed me the independence I desired during my last vacation. I had so may people stop me and inquire about the beach chair, excited to rent it in the future for a friend or family member with limited mobility.\n\nI also really appreciated Nick 's quick response to any questions I had. He had the chair at my rental house when I arrived and even made a separate trip back to bring me a fully charged battery, since I didn't have time to charge it.At the end of the week, I left the chair where I had found it and the key in the lock box.It was extremely convenient."
    },
    {
        "name": "sandra eodice",
        "date": "Jul 26, 2019",
        "profile_picture": "sandra eodice.png",
        "social_media_site": "Google",
        "link": "https://goo.gl/maps/qNUEQhpYxUvzLHsj6",
        "stars": 5,
        "content": "The sand helper was awesome for my husband who has mobility issues. Having this for him made his desire for the beach a reality. The process from renting to operating it was easy. I would definitely recommend it to everyone and will be using it again in the future!"
    },
    {
        "name": "Jennifer Shockey",
        "date": "Jul 26, 2019",
        "profile_picture": "Jennifer Shockey.png",
        "social_media_site": "Google",
        "link": "https://goo.gl/maps/TbSXDdgL1bfr9JYEA",
        "stars": 5,
        "content": "Thank you Sand Helper for making our vacation a success! We came to town for the week over the 4th of July. You allowed us to enjoy time together as a family and to relax at the same time. Your attentiveness and great customer service will get you far! The Sand Helper was the talk of the town when we got out on the beach and we passed out your information everyday! Thank you again."
    },
    {
        "name": "marybeth mathews",
        "date": "Jul 23, 2019",
        "profile_picture": "marybeth mathews.png",
        "social_media_site": "Google",
        "link": "https://goo.gl/maps/YEshARhZJcBHiUr6A",
        "stars": 5,
        "content": "This was so easy, everything done prior to my arrival in O.C.(reservation, payment, instructions, etc.) The chair was delivered the night before, ready and waiting for my mother in the morning. It was easy for my mother to operate. We will definitely use Sand Helper again!"
    },
    {
        "name": "Stephanie Hartlaub",
        "date": "Jul 22, 2019",
        "profile_picture": "Stephanie Hartlaub.jpg",
        "social_media_site": "Facebook",
        "link": "https://www.facebook.com/StephanieHartlaub.iiwii/posts/10219218759677787",
        "content": "My husband scheduled knee replacement surgery for two and a half weeks before our annual beach trip. I was thrilled to find a motorized sand chair to help him get down and back to the beach every day through Sand Helper! It truly helped him to still be able to enjoy his week. The process was super simple online, followed with it being delivered directly to our building and picked up at the end of the week. I highly recommend Sand Helper services!"
    },
    {
        "name": "Stephanie Hartlaub",
        "date": "Jul 22, 2019",
        "profile_picture": "Stephanie Hartlaub.png",
        "social_media_site": "Google",
        "link": "https://goo.gl/maps/FYHMVbKkWsU4ZEXh8",
        "stars": 5,
        "content": "My husband scheduled knee replacement surgery for two and a half weeks before our annual beach trip. I was thrilled to find a motorized sand chair to help him get down and back to the beach every day through Sand Helper! It truly helped him to still be able to enjoy his week. The process was super simple online, followed with it being delivered directly to our building and picked up at the end of the week. I highly recommend Sand Helper services!"
    },
    {
        "name": "Mariann Matranga Umstead",
        "date": "Jul 20, 2019",
        "profile_picture": "Mariann Matranga Umstead.jpg",
        "social_media_site": "Facebook",
        "link": "https://www.facebook.com/mariann.umstead/posts/2926950513988426",
        "content": "Rented a motorized sand chair to get my 85 year old mother to the beach. It was important to us that she be able to see her great grandchildren on the beach. Nick was great and super customer focused. I would definitely recommend Sand Helper OC and will not hesitate to rent again if needed"
    },
    {
        "name": "Nick Golden",
        "date": "Jul 17, 2019",
        "profile_picture": "Nick Golden.png",
        "social_media_site": "Google",
        "link": "https://goo.gl/maps/iz5rtPZLS7VXDCm67",
        "stars": 5,
        "content": "God bless the owner Nick he has provided my mom with the ability to go in the beach with MS she cant walk or remember things and the owner Nick has been very polite professional and let's us keep it at our hotel and changes the battery as needed I highly recommend the sandhelper motorized wheelchair for disabled people it is worth every penny and will use them again when we come next year we visit yearly thanks so much Nick"
    },
];

const generateReviewsList = () => {
    const reviewsContainer = document.getElementById("reviews-list");
    
    for (const review of FULL_REVIEWS) {
        reviewsContainer.appendChild(generateReviewsPageReviewRow(review));
    }
}

const generateReviewsPageReviewRow = (review) => {
    const hostName = window.location.host ? `https://${window.location.host}` : "https://sandhelper.com";
    const romwDiv = document.createElement("div");
    romwDiv.className = "romw";

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
    romwDiv.appendChild(romwSourceLogoEl);

    // Reviewer photo
    const reviewerPhotoEl = document.createElement("p");
    reviewerPhotoEl.className = "romw-author-photo";
    const reviewerPhotoImgEl = document.createElement("img");
    reviewerPhotoImgEl.src = `${hostName}/lib/images/reviews/${review.profile_picture}`;
    reviewerPhotoEl.appendChild(reviewerPhotoImgEl);
    romwDiv.appendChild(reviewerPhotoEl);

    // Reviewer Name and Stars (optional)
    const reviewerNameEl = document.createElement("p");
    reviewerNameEl.className = "romw-author-stars";
    const reviewerNameSpanEl = document.createElement("span");
    reviewerNameSpanEl.innerText = review.name;
    reviewerNameEl.appendChild(reviewerNameSpanEl);
    romwDiv.appendChild(reviewerNameEl);

    // Review Date
    const reviewDateEl = document.createElement("p");
    reviewDateEl.innerText = review.date;
    romwDiv.appendChild(reviewDateEl);

    // Review Content
    const reviewContentEl = document.createElement("p");
    reviewContentEl.className = "romw-text";
    reviewContentEl.innerText = review.content;
    romwDiv.appendChild(reviewContentEl);

    return romwDiv;
}

// Initialize reviews page
generateReviewsList();