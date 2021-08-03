// index.js
function init() {
  const elDiv = document.querySelector(".product");
  let xhr,
    res,
    tagList = "";

  xhr = new XMLHttpRequest();
  xhr.open("get", "data_best.json");
  xhr.send(null);
  xhr.onload = function () {
    res = JSON.parse(xhr.responseText);

    res.work.forEach(function (v) {
      tagList += `<figure>
                            <a href="#">
                                <figcaption>${v.detail}</figcaption>
                                    <img src="${v.photo}">
                            </a>
                        </figure>`;
    });
    elDiv.innerHTML = tagList;
  };
}

$(".main-benner_nails li").each(function () {
  var $this = $(this);
  var idx = 0;

  $this.click(function (e) {
    e.preventDefault();
    idx = $this.index();
    $(".main-benner_nails li a").css("color", "#555");
    $this.find("a").css("color", "#87490cff");

    $(".slick-track .slick-slide").each(function (i) {
      $(this).css({ opacity: 1 });
      if (idx != i) {
        $(this).css({ opacity: 0 });
      }
    });
  });
});
