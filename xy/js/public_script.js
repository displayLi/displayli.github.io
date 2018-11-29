//scroll 兼容处理
function scroll() {
  if (window.pageYOffset != null) {
    return {
      top: window.pageYOffset,
      left: window.pageXOffset
    };
  } else if (docuemnt.CompatMode == "CSS1Compat") {
    return {
      top: document.docuemntElement.scrollTop,
      left: document.docuemntElement.scrollLeft
    };
  } else {
    return {
      top: document.body.scrollTop,
      left: document.body.scrollLeft
    };
  }
}