

let navbar = () => {

  return `<nav class="navbar">
    <div class="left ">
        <div class="logo">
            <a href="index.html"><img src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_4f2153ce7e0ebcddea8a5d6dc9787757/unsplash.png" alt=""></a>
        </div>
    </div>

    <div class="nav-search-form ">
            <!-- <button id="srch_btn"><img src="img/seacrh - Copy.png" alt="search" onclick="find()"></button> -->
            <input type="text" placeholder="Search free high-resolution photos" id="search" onchange="searchPage()">     
          <div id="aftersearch">
            <p>Trending Searches</p>
            <ul id="srch" class="nav">
              <li><button class="btn">Yellow-Petals</button></li>
              <li><button class="btn">Car</button></li>
              <li><button class="btn">Books</button></li>
              <li><button class="btn">Photos</button></li>
              <li><button class="btn">Night Sky</button></li>
          </ul>

          <p>Trending Topics</p>
          <ul id="srch" class="nav">
            <li><button class="btn">Fashion</button></li>
            <li><button class="btn">People</button></li>
            <li><button class="btn">Film</button></li>
            <li><button class="btn">Nature</button></li>
            <li><button class="btn">Animals</button></li>
        </ul>

        <p>Trending Collections</p>
        <ul id="srch" class="nav">
          <li><button class="btn">Church</button></li>
          <li><button class="btn">Frames&nbspin&nbspinterior</button></li>
          <li><button class="btn">Mockups</button></li>
          <li><button class="btn">Mute&nbsp&&nbsppastel</button></li>
          <li><button class="btn">Light&nbspTones</button></li><br/>
      </ul>
        
      </div>
    </div>
<div class="a">
    <ul class="nav">
        
        <li><a href="">Advertise</a></li>
        <li><a href="project upslash/blog.html">Blog</a></li>
        <li><a href="./Submit-Photo/photosubmit.html"><button id="btn">Submit a photo</button></a></li>
        <li><img src="https://cdn.pixabay.com/photo/2021/07/19/12/28/bell-6478083__340.png" alt="" id="alert"></li>
        <li><a href="divyanka/profile.html"><img src="https://tse4.explicit.bing.net/th?id=OIP.fVzdKE2EPZzB5PiI1pvaFQHaHa&pid=Api&P=0&w=169&h=169" alt="" id="user"></a></li>
        <li><img src="img/menu.png" alt="" id="menu_icon" onclick="toggle()"></li>
    </ul>

<div id="menu_click" >
            <img src="img/company.png" alt="" class="log">
            <ul id="afterclick">
              <h3>Company</h3>
              <li><a href="#">About</a></li>
              <li><a href="#">History</a></li>
              <li><a href="#">Join Team</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Contact Us</a></li>
          </ul>

          <img src="img/product.png" alt="" class="log">
          <ul id="afterclick">
            <h3>Product</h3>
            <li><a href="#">Developers/API</a></li>
            <li><a href="#">Unsplash Dataset</a></li>
            <li><a href="#">Unsplash for iOS</a></li>
            <li><a href="#">Apps & Plugins</a></li>
          
        </ul>

        <img src="img/community.png" alt="" class="log">
        <ul id="afterclick">
          <h3>Community</h3>
          <li><a href="#">Be a Contributor</a></li>
          <li><a href="#">Topics</a></li>
          <li><a href="#">Collections</a></li>
          <li><a href="#">Trends</a></li>
          <li><a href="#">Unsplash Awards</a></li>
          
      </ul>
        </div>
</div>
</nav>


<div class="category-nav">

    <div id="top_edit">
    <div class="category" onclick="underline()">
      <a href="index.html">Editorial</a>
    </div>
    <div class="category">
      <a href="#">Following</a>
    </div>
    <div class="category">
        <div class="vertical-line"></div>
      </div>

    </div>

    <div id="side">
    <div class="category">
      <h4 onclick="doit(this)" id="do"><a href="./photo.html">RecentlyUploads</a></h4>

    </div>
    <div class="category">
    <h4  onclick="doit(this)" id="do"><a>Current&nbspEvents</a></h4>
    
    </div>
  <div class="category">
    <h4  onclick="doit(this)" id="do"><a>Wallpaper</a></h4>
  </div>
  <div class="category">
    <h4  onclick="doit(this)" id="do"><a>3D&nbspRenders</a></h4>
  </div>
  <div class="category">
    <h4  onclick="doit(this)" id="do"><a>Texture&nbsp&&nbspPatterns</a></h4>
    
  </div>
  <div class="category">
    <h4  onclick="doit(this)" id="do"><a>Nature</a></h4>
  </div>
  <div class="category">
    <h4  onclick="doit(this)" id="do"><a>Architecture</a></h4>
  </div>
  <div class="category">
    <h4  onclick="doit(this)" id="do"><a>Business&nbsp&&nbspWork</a></h4>
  </div>
  <div class="category">
    <h4  onclick="doit(this)" id="do"><a>Experimental</a></h4>
  </div>
  <div class="category">
    <h4  onclick="doit(this)" id="do"><a>Film</a></h4>
  </div>
  <div class="category">
    <h4  onclick="doit(this)" id="do"><a>Animals</a></h4>
  </div>
  <div class="category">
    <h4  onclick="doit(this)" id="do"><a>Travel</a></h4>
  </div>
  <div class="category">
    <h4  onclick="doit(this)" id="do"><a>Fashion</a></h4>
  </div>
  <div class="category">
    <h4  onclick="doit(this)" id="do"><a>Foods&nbsp&&nbspDrinks</a></h4>
  </div>
  <div class="category">
    <h4  onclick="doit(this)" id="do"><a>Health&nbsp&&nbspWellness</a></h4>
  </div>
  <div class="category">
    <h4  onclick="doit(this)" id="do"><a>People</a></h4>
  </div>
  <div class="category">
    <h4  onclick="doit(this)" id="do"><a>Interiors</a></h4>
  </div>
  <div class="category">
    <h4  onclick="doit(this)" id="do"><a>Street&nbspPhotography</a></h4>
  </div>
  <div class="category">
    <h4  onclick="doit(this)" id="do"><a>History</a></h4>
  </div>
  <div class="category">
    <h4  onclick="doit(this)" id="do"><a>Atheletics</a></h4>
  </div>
  <div class="category">
    <h4  onclick="doit(this)" id="do"><a>Spirituality</a></h4>
  </div>
   

</div>
  </div>`;
}

export { navbar }