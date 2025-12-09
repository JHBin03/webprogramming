/* ================================
   1) Smooth Scroll (부드러운 스크롤)
================================ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (!target) return;
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});


/* ================================
   2) Fade-in Animation on Scroll
   스크롤 시 섹션/요소 부드럽게 등장
================================ */
const fadeElements = document.querySelectorAll(
    ".section, .card, .skill-card, .interest-card, .contact-card"
);

const fadeObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.18 }
);

fadeElements.forEach(el => fadeObserver.observe(el));


/* ================================
   3) Header Scroll Effect
   스크롤 내리면 헤더 배경/그림자 강화
================================ */
const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


/* ================================
   4) Active Navigation (현재 섹션 자동 하이라이트)
================================ */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".main-nav a");

const navObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove("active"));
                const activeLink = document.querySelector(
                    `.main-nav a[href="#${entry.target.id}"]`
                );
                if (activeLink) activeLink.classList.add("active");
            }
        });
    },
    { threshold: 0.5 }
);

sections.forEach(sec => navObserver.observe(sec));


/* ================================
   5) Button / Link Click Event (기본 구조)
   → 나중에 기능 추가할 수 있는 틀
================================ */
document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-btn]");
    if (!btn) return;

    const action = btn.dataset.btn;

    switch (action) {
        case "contact":
            document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
            break;

        case "top":
            window.scrollTo({ top: 0, behavior: "smooth" });
            break;

        default:
            console.log("Button clicked:", action);
            break;
    }
});
