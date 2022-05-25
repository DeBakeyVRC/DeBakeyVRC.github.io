container.onmouseover = container.onmouseout = handler;

function handler(event) {

  function str(el) {
    if (!el) return "null"
    return el.className || el.tagName;
  }
  if (el == "hl"){
    if (event.type == 'mouseover') {
      event.target.style.background = 'purple'
    }
    if (event.type == 'mouseout') {
      event.target.style.background = ''
    }
  }
}
