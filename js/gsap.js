gsap.fromTo("#wizard", { x: 50, opacity: "0" }, { duration: 5, opacity: "1", ease: "inOut" });

gsap.fromTo("#wiz-bubble", { y: -150, opacity: "0" }, { duration: 3, x: 10, y: -150, opacity: "1" });
gsap.fromTo("#wiz-bubble", { opacity: "1" }, { duration: 7, opacity: "0" });
gsap.fromTo("#g-bubble", { y: -200, opacity: "0" }, { duration: 10, x: -70, y: -240, scale: "2.5", opacity: "1" });
gsap.fromTo("#freds", { backgroundColor: "transparent" }, { y: -400 })
gsap.to("body", { scale: "1" });

gsap.fromTo(".title", { x: 100, y: 200 }, { duration: 3, x: 100, y: 200, backgroundColor: "skyblue", width: "300", padding: "10", borderRadius: "15", fontFamily: "fantasy", fontSize: "25", opacity: ".5" });