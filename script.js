document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // ENTER MUSEUM
    // =========================

    const enterButton = document.querySelector(".hero button");
    const hero = document.querySelector(".hero");
    const museum = document.getElementById("museum");
    const music = document.getElementById("bgMusic");

    if (enterButton) {

        enterButton.addEventListener("click", function () {

            if (hero) {
                hero.style.display = "none";
            }

            if (museum) {
                museum.style.display = "block";
            }

            if (music) {
                music.play().catch(function () {
                    console.log("Music requires user interaction.");
                });
            }

            window.scrollTo(0, 0);
        });
    }


    // =========================
    // OPEN LETTER
    // =========================

    const letterButton = document.querySelector(".final-room button");
    const letter = document.getElementById("letter");

    if (letterButton && letter) {

        letterButton.addEventListener("click", function () {

            if (letter.style.display === "block") {

                letter.style.display = "none";

            } else {

                letter.style.display = "block";

                letter.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }
        });
    }


    // =========================
    // MEMORY GALLERY
    // =========================

    const memoryButtons =
        document.querySelectorAll(".memory-button");

    const galleryPopup =
        document.getElementById("galleryPopup");

    const galleryTitle =
        document.getElementById("galleryTitle");

    const galleryContent =
        document.getElementById("galleryContent");

    const closeGalleryButton =
        document.getElementById("closeGalleryButton");


    memoryButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const type =
                button.getAttribute("data-gallery");

            openGallery(type);
        });

    });


    // =========================
    // CLOSE GALLERY
    // =========================

    if (closeGalleryButton) {

        closeGalleryButton.addEventListener("click", function () {

            closeGallery();

        });
    }


    // Close when tapping outside the gallery

    if (galleryPopup) {

        galleryPopup.addEventListener("click", function (event) {

            if (event.target === galleryPopup) {

                closeGallery();

            }

        });
    }


    // =========================
    // GALLERY FUNCTION
    // =========================

    function openGallery(type) {

        if (!galleryPopup || !galleryTitle || !galleryContent) {
            return;
        }

        galleryContent.innerHTML = "";


        // PHOTOS

        if (type === "photos") {

            galleryTitle.textContent =
                "Our Photos ❤️";

            const photos = [
                "photo1.jpg",
                "photo2.jpg",
                "photo3.jpg",
                "photo4.jpg",
                "photo5.jpg"
            ];

            photos.forEach(function (photo) {

                const image =
                    document.createElement("img");

                image.src = "photos/" + photo;

                image.alt = "Our memory";

                galleryContent.appendChild(image);

            });
        }


        // VIDEOS

        if (type === "videos") {

            galleryTitle.textContent =
                "Our Videos 🎥";

            const videos = [
                "video1.mp4",
                "video2.mp4"
            ];

            videos.forEach(function (video) {

                const videoElement =
                    document.createElement("video");

                videoElement.src =
                    "videos/" + video;

                videoElement.controls = true;

                galleryContent.appendChild(videoElement);

            });
        }


        // CHATS

        if (type === "chats") {

            galleryTitle.textContent =
                "Our Conversations 💬";

            const chats = [
                "chat1.jpg",
                "chat2.jpg",
                "chat3.jpg"
            ];

            chats.forEach(function (chat) {

                const image =
                    document.createElement("img");

                image.src =
                    "photos/" + chat;

                image.alt =
                    "Our conversation";

                galleryContent.appendChild(image);

            });
        }


        // FAVORITES

        if (type === "favorites") {

            galleryTitle.textContent =
                "Our Favorite Moments ❤️";

            const favorites = [
                "photo1.jpg",
                "photo3.jpg",
                "photo5.jpg"
            ];

            favorites.forEach(function (photo) {

                const image =
                    document.createElement("img");

                image.src =
                    "photos/" + photo;

                image.alt =
                    "Favorite memory";

                galleryContent.appendChild(image);

            });
        }


        galleryPopup.style.display = "flex";
    }


    // =========================
    // CLOSE FUNCTION
    // =========================

    function closeGallery() {

        if (galleryPopup) {

            galleryPopup.style.display = "none";
        }

        if (galleryContent) {

            galleryContent.innerHTML = "";
        }
    }

});