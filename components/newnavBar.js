function navbar2(){
    return `
    <div id="common_Header">
    <nav id="common_nav">
      <div id="mainLogoHindi">
      <a href="./index.html">
      <img
          id="headingimg"
          src="https://cdn1.tripoto.com/assets/2.9/img/logo/tripoto.svg"
        /></a>
        
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
      <span class="tooltip">
      <a href="#"><p>Inspiration <i class="fa-solid fa-caret-down"></i></p></a>
          <div class="tooltip-popup">
          <a href="./visit_dubai.html"><p>Visit Dubai</p></a>
          <a href="./Beaches/beaches.html"> <p>Beaches</p></a>
          <a href="./packages.html"> <p>Packages</p></a>
          <a href="./MindfulRetreats.html"><p>Mindful Rest</p></a>
          <a href="./tripotoFamily.html"><p>Family</p></a>
          <a href="./explore.html"><p>Explore More</p></a>
          </div>
        </span>
        <a href="#">Forum &nbsp;&nbsp;</a>
        <a href="#"><p>Holidays &nbsp;&nbsp;</p></a>
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

export {navbar2}