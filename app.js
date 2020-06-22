let add = () => {
  let name = document.querySelector(".container #name");
  let comment = document.querySelector(".container #comment");

  if (name.value != "" && comment.value != "") {
    let list = document.querySelector(".list");
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let now = h + ":" + m + ":" + s;
    let list_item = document.createElement("li");
    list_item.innerHTML = name.value + " " + now + "<br>" + comment.value;
    list.append(list_item);
    name.value = comment.value = "";
  }
};
