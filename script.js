data = {
  "Introduction": {
    "active": "",
    "locked": "none",
    "premium": "none",
    "content": {

    }
  },
  "Learn Python Interactively": {
        "active": "",
    "locked": "none",
    "premium": "none",
    "content": {

    }
  },
  "Python Introduction": {
        "active": "",
    "locked": "none",
    "premium": "none",
    "content": {

    }
  },
  "Python Flow Control": {
        "active": "",
    "locked": "none",
    "premium": "none",
    "content": {

    }
  },
  "Python Functions": {
        "active": "",
    "locked": "none",
    "premium": "block",
    "content": {
      "Python Numbers": {
        "checked": "block",
        "content_type": {
          "video": "block",
          "text": "block",
          "image": "none",
          "quiz": "block"
        }
      },
      "Python List": {
        "checked": "none",
        "content_type": {
          "video": "none",
          "text": "block",
          "image": "block",
          "quiz": "block"
        }
      },
      "Python Tuple": {
        "checked": "none",
        "content_type": {
          "video": "block",
          "text": "block",
          "image": "none",
          "quiz": "block"
        }
      },
      "Python String": {
        "checked": "none",
        "content_type": {
          "video": "none",
          "text": "block",
          "image": "block",
          "quiz": "block"
        }
      }
    }
  },
  "Python Datatypes": {
        "active": "",
    "locked": "block",
    "premium": "block",
    "content": {
      
    }
  },
  "Python Files": {
        "active": "",
    "locked": "block",
    "premium": "none",
    "content": {

    }
  },
  "Python Conclusion": {
        "active": "",
    "locked": "block",
    "premium": "none",
    "content": {
    }
  }
}
let div = document.getElementsByClassName('workshop_components')[0];
console.log(div);
let html = "";
for (let i in data) {
  if (i.localeCompare("Python Functions") == 0) {
    active = "active";
  }
  else {
    active = ""
  }

  html += `
      <a class="collapsible ${active}" onclick="toggleContent(this)" >
      <p>${i}</p>
      <span class="material-symbols-outlined"style="display:${data[i]["premium"]}">workspace_premium</span>
      <span class="material-symbols-outlined" style="display:${data[i]["locked"]}">lock</span>
      <span class="material-symbols-outlined">navigate_next</span>
      </a>
      <div class="content">`;
  for (let j in data[i]["content"]) {
    if (j === "Python Numbers") {
      active = "checked";
    }
    else {
      active = ""
    }
    html += `<div style="display: flex;flex-direction: row;" class="sousT ${j}">
          <span class="material-symbols-outlined ${active} " >check_circle</span>
          <p class="${active}">${j}</p>
          <span class="material-symbols-outlined"style="display: ${data[i]["content"][j]["content_type"]["video"]};">play_circle</span>
          <span class="material-symbols-outlined"style="display: ${data[i]["content"][j]["content_type"]["image"]};">image</span>
          <span class="material-symbols-outlined"style="display: ${data[i]["content"][j]["content_type"]["text"]};">article</span>
          <span class="material-symbols-outlined"style="display: ${data[i]["content"][j]["content_type"]["quiz"]};">contact_support</span>
        </div>`;

  }

  html += "</div>";
}
div.innerHTML = html;


function toggleContent(button) {
  var content = button.nextElementSibling;

  if (button.classList.contains("active")) {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
  button.classList.toggle("active");

}