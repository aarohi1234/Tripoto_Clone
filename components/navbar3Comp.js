function navbar3(){
    return `
    <div id="common_Header">
    <nav id="common_nav">
      <div id="mainLogoHindi">
        <img src="https://cdn1.tripoto.com/assets/2.9/img/logo/tripoto.svg" />
      </div>
      <div id="Hindi_link">
        <span class="tooltip">
          <a href="#"><p>Inspiration <i class="fa-solid fa-caret-down"></i></p></a>
              <div class="tooltip-popup">
                <p>Visit Dubai</p>
                <p>Beaches</p>
                <p>Mountains</p>
                <p>Explore More</p>
              </div>
            </span>
        <a href="#">Forum &nbsp;&nbsp;</a>
        <a href="#">Holidays &nbsp;&nbsp;</a>
        <span class="tooltip">
          <p>Publish Trip <i class="fa-solid fa-caret-down"></i></p>
          <div class="tooltip-popup">
            <p>Create New</p>
          </div>
        </span>
        <a href="#">&nbsp;&nbsp;Sign in</a>
      </div>
    </nav>
  </div>

    `
}
export{navbar3}