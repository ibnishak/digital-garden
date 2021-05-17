let pages=[window.location.pathname],switchDirectionWindowWidth=900,animationLength=200;function stackNote(e,t){t=Number(t)||pages.length,e=URI(e),uri=URI(window.location),pages.push(e.path()),uri.setQuery("stackedNotes",pages.slice(1,pages.length)),old_pages=pages.slice(0,t-1),state={pages:old_pages,level:t},window.history.pushState(state,"",uri.href())}function unstackNotes(e){let t=document.querySelector(".grid"),n=Array.prototype.slice.call(t.children);for(let i=e;i<n.length;i++)t.removeChild(n[i]);pages=pages.slice(0,e)}function updateLinkStatuses(){links=Array.prototype.slice.call(document.querySelectorAll("a")),links.forEach(function(e){pages.indexOf(e.getAttribute("href"))>-1?e.classList.add("active"):e.classList.remove("active")})}function fetchNote(e,t){if(pages.indexOf(e)>-1)return;t=Number(t)||pages.length;const n=new Request(e);fetch(n).then(e=>e.text()).then(n=>{unstackNotes(t);let i=document.querySelector(".grid"),a=document.createElement("template");a.innerHTML=n;let o=a.content.querySelector(".page");i.appendChild(o),stackNote(e,t),setTimeout(function(e,t){e.dataset.level=t+1,initializePage(e,t+1),e.scrollIntoView(),window.MathJax&&window.MathJax.typeset()}.bind(null,o,t),10)})}function initializePage(e,t){t=t||pages.length,links=Array.prototype.slice.call(e.querySelectorAll("a")),links.forEach(async function(e){var n=e.getAttribute("href");if(e.dataset.level=t,n&&0!==n.indexOf("http://")&&0!==n.indexOf("https://")&&0!==n.indexOf("#")&&!n.includes(".pdf")&&!n.includes(".svg")){var i=e.href;return async function(){let t=await fetch(i);document.createElement("template").innerHTML=await t.text(),(await t.headers.get("content-type")).includes("text/html")&&e.addEventListener("click",function(t){t.ctrlKey||t.metaKey||(t.preventDefault(),fetchNote(e.getAttribute("href"),this.dataset.level))}),updateLinkStatuses()}()}})}window.addEventListener("popstate",function(e){window.location=window.location}),window.onload=function(){initializePage(document.querySelector(".page"));let e=[];if(uri=URI(window.location),uri.hasQuery("stackedNotes")){e=uri.query(!0).stackedNotes,Array.isArray(e)||(e=[e]);for(let t=0;t<e.length;t++)fetchNote(e[t],t+1)}};