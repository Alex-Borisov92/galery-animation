// Анимация при скролле с помощью GSAP и ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".gallery-item").forEach((item) => {
  gsap.fromTo(item, 
    { opacity: 0, scale: 0.8 }, 
    { 
      opacity: 1, 
      scale: 1, 
      scrollTrigger: {
        trigger: item,
        start: "top 75%", // Когда элемент достигает 75% высоты экрана
        end: "bottom 25%", // Когда элемент уходит за 25% экрана
        scrub: true, // Анимация будет реагировать на прокрутку
        markers: false, // Маркеры можно включить для отладки
      }
    }
  );
});
