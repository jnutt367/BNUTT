gsap.fromTo("#wizard", { x: 50, opacity: "0" }, { duration: 5, opacity: "1", ease: "inOut" });

gsap.fromTo("#wiz-bubble", { y: -150, opacity: "0" }, { duration: 3, x: 10, y: -150, opacity: "1" });
gsap.fromTo("#wiz-bubble", { opacity: "1" }, { duration: 7, opacity: "0" });
gsap.fromTo("#g-bubble", { y: -200, opacity: "0" }, { duration: 10, x: -70, y: -240, scale: "2.5", opacity: "1" });

gsap.to("body", { duration: 1, scale: "1.2" })