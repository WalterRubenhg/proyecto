import React from 'react'

export const Carrusel = () => {
  return (
    <div>
        <div id="carouselExampleCaptions" class="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div className="carousel-item active">
      <img src="./img2.jpg" class="d-block w-100" alt="..." height="500px"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>YA VERAS QUE TE ENCANTARA</h5>
        <p>ANIMATE</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./img3.jpg" class="d-block w-100" alt="..." height="500px"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>APRENDERAS Y PODRAS VISITARNOS</h5>
        <p>SE QUE PUEDES</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./img4.jpg" class="d-block w-100" height="500px"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>DISFRUTA DE NUESTRAS CLASES</h5>
        <p>UN FUTURO PROMETEDOR</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
