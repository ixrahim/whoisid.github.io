function expand(evt, url) {
  let el, target;
  el = document.querySelector("#expanded-img");
  target = document.querySelector(".expanded-overlay");
  target.classList.add("expand");
  el.src = url;
}
function closeExpanded() {
  let el, target;
  el = document.querySelector("#close");
  target = document.querySelector(".expanded-overlay");
  target.classList.remove("expand");
}

function showmore(evt) {
  let el, btn;
  el = document.querySelector(".footer-content");
  btn = document.querySelector(".footer-btn");

  if (el.classList.contains("show")) {
    btn.innerHTML = "View more report details";
    el.classList.remove("show");
  } else {
    btn.innerHTML = "View less report details";
    el.classList.add("show");
  }
}
