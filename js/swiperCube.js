var swiper5 = new Swiper(".mySwiper5", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: ["-125%", 0, -800],
            rotate: [0, 0, -90],
        },
        next: {
            shadow: true,
            translate: ["125%", 0, -800],
            rotate: [0, 0, 90],
        },
    },
});