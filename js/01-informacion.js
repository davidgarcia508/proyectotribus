const URL_API ="data/settings.json";

function loadData(){
    fetch(URL_API)
        .then((Response)=>{
            return Response.json();
        })
        .then((data)=>{
            viewHTML(data);
        })
}
function viewHTML(myData){
    const navContainer = document.querySelector('#navContainer');
    const {id,nombreTribu,puntos} = myData;
    navContainer.innerHTML =/* HTML */`
    <div class="navContainer">
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <img src="img/Screenshot from 2023-04-27 12-56-52.png" class="rounded-circle" alt="..." width="80px">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">id</a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">nombre de la tribu</a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">puntos</a>
              </li>
              
            </ul>
           
          </div>
        </div>
      </nav>
  </div>
      <div class="tarjetas ">
        <div class="card" style="width: 18rem;">
            <img src="img/Screenshot from 2023-04-27 12-56-52.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

          <div class="card" style="width: 18rem;">
            <img src="img/Screenshot from 2023-04-27 12-56-52.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

          <div class="card" style="width: 18rem;">
            <img src="img/Screenshot from 2023-04-27 12-56-52.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
      </div>
    `
}
customElements.innerHTML('nav-container',navContainer)