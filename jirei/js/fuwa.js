const items = document.querySelectorAll(".item");

const itemObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const visibleItems = Array.from(items);

      visibleItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("is-show");
        }, index * 250);
      });

      itemObserver.disconnect();
    }
  });
}, {
  threshold: 0.2
});

items.forEach((item) => {
  itemObserver.observe(item);
});