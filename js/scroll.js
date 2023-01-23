// Makes the content appear on scroll, slowly fading images into view

const callback = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fade");
    } else {
      entry.target.classList.remove("animate-fade");
    }
  });
};

const observer = new IntersectionObserver(callback);
const targets = document.querySelectorAll(".show-on-scroll");

targets.forEach(function (target) {
  target.classList.add("opacity-0");
  observer.observe(target);
});