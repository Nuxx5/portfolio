console.log('Starting up');

$(document).ready(init);
$('.btn-send').click(contactMe);


function init() {
    renderProj();
}

function openProj(url){
    window.open(url);
}

function contactMe(ev) {
    ev.preventDefault()
    var email = $('#email').val();
    var subject = $('#subject').val();
    var msg = $('#msg').val();
    var url = `https://mail.google.com/mail/?view=cm&fs=1&to=ranporath@gmail.com&su=${subject}&body=${msg}`;
    window.open(url);
    openCanvas();
    $('#email').val('');
    $('#subject').val('');
    $('#msg').val('');
}

function renderProj() {
    var projs = getProjs();
    var strHTML = projs.map(function (proj) {
        return `
        <div onclick="renderModal('${proj.id}')" class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="${proj.imgURL}" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-muted">${proj.title}</p>
          </div>
        </div>`
    }).join('');
    $('.proj-container').html(strHTML);
}

function renderModal(projID) {
    var proj = getProjById(projID);
    var date = new Date(proj.publishedAt);
    console.log(date);
    var strHTML = `<h2>${proj.name}</h2>
    <p class="item-intro text-muted">${proj.title}.</p>
    <img class="img-fluid d-block mx-auto" src="${proj.imgURL}" alt="">
    <p>${proj.desc}</p>
      <ul class="list-inline">
        <li>Date: ${convert(proj.publishedAt)}</li>
      <li>Client: Atari</li>
      <li>Category: Game Development</li>
    </ul>
    <button onClick="openProj('${proj.url}')" class="btn btn-primary" data-dismiss="modal" type="button">
      <i class="fa fa-times"></i>
      Try my game :)</button>
    <button class="btn btn-primary" data-dismiss="modal" type="button">
      <i class="fa fa-times"></i>
      Close Project</button>`;
    $('.proj-modal').html(strHTML);
}