/**
 * 
 * @param {HTMLElement} adElement 
 */
function startCalc(adElement) {
  const adPos = calculateArea(adElement);
  const adParents = getParents(adElement);

  (function recursive(element) {
    for (let child of element.children) {
      if (child.nodeType !== 1) {
        // console.log("is not element")
        continue;
      }
      const tagName = child.tagName.toLowerCase();
      if (["script", "style", "svg", "canvas", "video", "videos"].includes(tagName)) {
        // console.log("ignore element: ", tagName)
        continue;
      }
      if (child === adElement) {
        console.log("match myself");
        continue;
      }

      if (child.getBoundingClientRect) {
        const childPos = calculateArea(child);
        const area = elementInterectArea(adPos, childPos);
        if (area) {
          if (adParents.includes(child)) {
            console.log("is parent element: ", child);
          } else {
            try {
              child.parentElement.removeChild(child);
            } catch (ex) { }
            // child.style.opacity = 0;
          }
        }

      }

      if (!child.children) {
        continue;
      }
      recursive(child);
    }
  })(document.body);

}

/**
 * 
 * @param {HTMLElement} ele 
 */
function getParents(ele) {
  const parents = [];
  (function r(item) {
    if (item.parentElement) {
      parents.push(item.parentElement);
      r(item.parentElement);
    }
  })(ele);
  return parents;
}

/**
 * 
 * @param {{left: number, right: number, top: number, bottom: number}} pos1 
 * @param {{left: number, right: number, top: number, bottom: number}} pos2 
 */
function elementInterectArea(pos1, pos2) {
  const pos1Width = pos1.right - pos1.left;
  const pos1Height = pos1.bottom - pos1.top;
  const pos2Width = pos2.right - pos2.left;
  const pos2Height = pos2.bottom - pos2.top;

  const axisOverlap = pos1Width + pos2Width - (Math.max(pos1.right, pos2.right) - Math.min(pos1.left, pos2.left));
  const crossOverlap = pos1Height + pos2Height - (Math.max(pos1.bottom, pos2.bottom) - Math.min(pos1.top, pos2.top));
  if (axisOverlap <= 0 || crossOverlap <= 0) {
    return 0;
  }
  return axisOverlap * crossOverlap;
}

/**
 * 
 * @param {HTMLElement} ele 
 */
function calculateArea(ele) {
  const { height, width, x, y, left, right, top, bottom } = ele.getBoundingClientRect();
  if (height === 0 || width === 0) {
    return { left: undefined, right: undefined, top: undefined, bottom: undefined };
  }
  return { left, top, bottom, right };
}