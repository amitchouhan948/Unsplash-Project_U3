  function nav(){
    return `<div id="logo">
    <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEX///8AAACQkJCjo6OKioqYmJiUlJS9vb15eXm6urr8/Py4uLhzc3OAgIB2dnahoaHY2Nje3t5gYGDDw8PbBLhQAAABkUlEQVR4nO3d226CQBRAUQpex7v+/79WeWtI6pFOYYC14ouG4Gw1UZhRq2oEaYw7BQAAAAAAAAAAgJlLKbxCL75lUcKFaaqF87c97k7n3Xvn0+64HXuwvVy+4i5jD7aX5oPCZuzB9qJQ4f/J9d5UbmEuChWWT6HC8ilUWD6FCsunUGH5FCosn0KF5VOosHzzL5z/7Nptv43aX8cebC/x+Y+pzuKn4AqEVE228ZUY2eyTdSksltcIAAATFF6hHv28G9/hMJ+gn/dzPezfOtxih4ftAeItssPBTnU8H8hV5OxSHT1oeW5VR3Z4qqKP2d+FBrQOvvpew15Hdrga7DgvRQvjooWDUaiwQ6HC7BQq7FCoMDuFCjsUKsxOocIOhQqzU6iwQ6HC7BQupjA43ZfiMzOD8Ry27k3cfZKF2SlUqFChQoUKFSpUqFChQoUKFSpUqFChQoUKFSpUOMXC0PcPJ134qDebTd1eWvWPa50bfrsW33j1GLAQAAAAGIOfmAUAAAAAAAAAlmJh6yTaXP9Rndc334wsaS1BomwAAAAASUVORK5CYII="
    />
  </div>
  <div id="names">
    <div class="sel"><a href="./blog.html"><h3>Home</h3></a></div>
    <div class="sel"><a href="./annou.html"><h3>Announcements</h3></a></div>
    <div class="sel"><a href="./product.html"><h3>Product</h3></a></div>
    <div class="sel"><a href="./brands.html"><h3>Brands</h3></a></div>
    <div class="sel"><a href="./part.html"><h3>Partnerships</h3></a></div>
    <div class="sel"><a href="./community.html"><h3>Community</h3></a></div>
  </div>
  <a href="./index.html"
    ><div id="link">
      <h3>unslash.com </h3>
    </div></a
  >`;
  }

function fooot(){
  return `
  
   <div id="foot">
        
  <div id="logo">
    <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEX///8AAACQkJCjo6OKioqYmJiUlJS9vb15eXm6urr8/Py4uLhzc3OAgIB2dnahoaHY2Nje3t5gYGDDw8PbBLhQAAABkUlEQVR4nO3d226CQBRAUQpex7v+/79WeWtI6pFOYYC14ouG4Gw1UZhRq2oEaYw7BQAAAAAAAAAAgJlLKbxCL75lUcKFaaqF87c97k7n3Xvn0+64HXuwvVy+4i5jD7aX5oPCZuzB9qJQ4f/J9d5UbmEuChWWT6HC8ilUWD6FCsunUGH5FCosn0KF5VOosHzzL5z/7Nptv43aX8cebC/x+Y+pzuKn4AqEVE228ZUY2eyTdSksltcIAAATFF6hHv28G9/hMJ+gn/dzPezfOtxih4ftAeItssPBTnU8H8hV5OxSHT1oeW5VR3Z4qqKP2d+FBrQOvvpew15Hdrga7DgvRQvjooWDUaiwQ6HC7BQq7FCoMDuFCjsUKsxOocIOhQqzU6iwQ6HC7BQupjA43ZfiMzOD8Ry27k3cfZKF2SlUqFChQoUKFSpUqFChQoUKFSpUqFChQoUKFSpUOMXC0PcPJ134qDebTd1eWvWPa50bfrsW33j1GLAQAAAAGIOfmAUAAAAAAAAAlmJh6yTaXP9Rndc334wsaS1BomwAAAAASUVORK5CYII="
      alt="logo"
    />
    <div id="foti">
    <h3>Make something awesome</h3>
    </div>
  </div>
  <div id="option">
       <div class="nam"><h3>About</h3>
       </div>
       <div class="nam"><h3>Press</h3></div>
       <div class="nam"><h3>Join the team</h3></div>
      
  </div>
</div>`;
}

function logo(){
  return `<div>
  <a href="#" id="facebook" class="fa fa-facebook"></a>
  <a href="#" id="twitter" class="fa fa-twitter"></a>
  <a href="#" id="google" class="fa fa-google"></a>
  <a href="#" id="linkedin" class="fa fa-linkedin"></a>
</div>`;
}

  export {nav,fooot,logo};