console.log("checking");
let file = [
  {
    previewImage:
      "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "cat.jpeg",
  },
  {
    previewImage:
      "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title:
      "a man and a woman trying to cook a meal together in a modern kitchen.jpg",
  },
  {
    previewImage:
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "bali-kelingking-beach-plastic-removal-drive.key",
  },
  {
    previewImage:
      "https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "NextByk Investor Pitch 2022.ppt",
  },
  {
    previewImage:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    title: "interns-performance-report-may-2022.key",
  },
];

// loading the list menu on left

let list = document.querySelector("#list");
for (elem in file) {
  list.innerHTML += `
  <li class="logo" id=${elem}>
  <img
    src="${file[elem].previewImage}" id=${"image" + elem}
  />
  <p id=id=${"title" + elem}>${file[elem].title}</p>
</li>`;
}

//console.log(list.children);

// selecting the image and title to be displayed
let displayImage = document.getElementById("displayImage");
let displayTitle = document.getElementById("displayTitle");

// function which displays image on clicking
for (let index = 0; index < list.children.length; index++) {
  //console.log(list.children[index]);
  let elem = document.getElementById(JSON.stringify(index));
  //console.log(elem);

  elem.addEventListener("click", function () {
    displayImage.src = elem.children[0].src;
    displayTitle.innerHTML = elem.children[1].innerText;
    displayTitle.title = index;
  });
}

displayTitle.addEventListener("click", function () {
  let str = displayTitle.innerText;
  displayTitle.innerHTML = `<textarea type="input" id="textbox" rows="3" placeholder="ss">${str}</textarea>`;

  let textbox = document.getElementById("textbox");
  textbox.nodeValue = "fghf";
  textbox.addEventListener("blur", function () {
    displayTitle.innerHTML = textbox.nodeValue;
    let elem = document.getElementById(JSON.stringify(displayTitle.title));
    console.log(elem);
    elem.children[1].innerText = textbox.nodeValue;
  });
});
