/**
 * 置顶元素
 * @param {HTMLElement} ele 需要置顶的元素
 * @param { { onStickyChange: (data: { sticky: boolean, top: number }) => void }} opts 置顶状态发生变化时的回调函数
 */
function stickyElement(ele, opts) {
  const observer = new IntersectionObserver(
    ([e]) => {
      if (!ele.offsetParent) {
        console.warn(`Can't find offsetParent by `, ele);
        return;
      }
      const topDistance = ele.offsetParent.offsetTop;
      const selfTop = ele.getBoundingClientRect().top;
      const isTop = selfTop <= topDistance;
      const stickied = isTop && e.intersectionRatio < 1;

      const data = {
        sticky: stickied,
        top: topDistance,
        element: ele,
      };
      e.target.dispatchEvent(new CustomEvent("sticky-change", {
        detail: data
      }));
      if (opts && opts.onStickyChange) {
        opts.onStickyChange(data);
      }
    },
    { threshold: 1 }
  );

  observer.observe(ele);
  ele.style.position = "sticky";
  ele.style.top = "-2px";

  return () => {
    observer.unobserve(ele);
  }
}

/**
 * 二次封装的置顶函数
 * @param {{ stickyElement: HTMLElement, fixedElement: HTMLElement }} opts 
 */
function stickyThenFixed(opts) {
  stickyElement(opts.stickyElement, {
    onStickyChange: data => {
      const { sticky, top } = data;
      if (sticky) {
        opts.fixedElement.classList.add("fixed");
        opts.fixedElement.style.top = top + "px";
      } else {
        opts.fixedElement.classList.remove("fixed");
        opts.fixedElement.style.top = "0px";
      }
    }
  });
}