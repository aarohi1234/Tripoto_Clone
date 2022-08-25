function navbar2(){
    return `
    <div id="common_Header">
    <nav id="common_nav">
      <div id="mainLogoHindi">
        <img src="https://cdn1.tripoto.com/assets/2.9/img/logo/tripoto.svg" />
      </div>
      <div id="Common_navsearch">
        <input
          id="hindiInputCont"
          type="text"
          value=""
          placeholder="Search for itineraries, destinations, hotels or activities"
          value="hii"
        />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div id="Hindi_link">
        <a href="#">Inspirations ▼ &nbsp;&nbsp;</a>
        <a href="#">Forum &nbsp;&nbsp;</a>
        <a href="#">Holidays &nbsp;&nbsp;</a>
        <a href="#">Publish Trip ▼&nbsp;&nbsp;</a>
        <a href="#">&nbsp;&nbsp;Sign in</a>
      </div>
    </nav>
  </div>
    `
}

export {navbar2}