import React from "react";
import Headers from "../components/Header";
import NavLink from "../components/NavLink";

function About() {
  return (
    <>
      <Headers title="About" />
      <nav className="page-navigation">
        <NavLink
          url="/book"
          className="page-navigation__navigation"
        >
          <span>Book</span>
        </NavLink>
        <NavLink
          url="/gallery"
          className="page-navigation__navigation"
        >
          <span>Catalog</span>
        </NavLink>
      </nav>
      <div className="page-container">
        <main className="main">
      
        <div id="statement">
        <p>The User Condition represents the entanglement between tangible and intangible reality. Our project takes physical objects, makes them digital, and reincorporates them into reality, mirroring how our own psyche converts and reconverts intangible content into the tangible world. Through a variety of physical to digital conversion tools, we blurred the lines between the tangible and intangible perceived reality.</p>
        <br></br>
        <p>To begin, we chose a variety of objects, people, and locations that interacted within space. Once selected, we used photogrammetric software to scan and render the physical objects into a three-dimensional digital render. It does this through the process of compiling a selection of photographic images into a texture map and a point cloud that shows the physical distance between several points in physical space. This results in an object which is digital but represents a corresponding physical object. After scanning various objects from various environments, we re-introduced the images into their original placements within the environment. In many cases, the process resulted in a variety of imperfect scans. In other words, the digital objects had minor inconsistencies from the original physical objects. One such object was a clothing hanger with four shirts, reflective metal poles, and hangers. The poles and the hangers were not properly recognized by software which resulted in an incomplete form. Using this form and a video projector, I reintroduced the clothing hanger overtop of the original, physical, hanger, but without the physical shirts. This created a false reality; the shirts appeared to be still hanging on the hanger but were not actually there. Additionally, it created double layers of shadows. One shadow that it created was the negative (impression) space from where the light hits the poles. The other shadow that was kept from the digital scan and showed the clothing hanger, the clothes, and the hangers. These shadows give the space the appearance of reality as, without shadow, the image would appear flat and two-dimensional. Once everything is aligned, we use a camera to capture the projection from a single point perspective. The result is an image that, even more convincingly than the original scan, blurs the line of tangible vs. intangible.</p>
        <br></br>
        <p>In order to connect the user to the condition that they are a part of we created a site that would host the images and scans that were taken in the past few months. The index page frames the images while having an additional frame being the webcam which introduces and extends the screen and image to the user viewing it. Having “you” as this physical and now live digital image on the screen continues the motif of physical-digital-interconnection. Being on display changes the way you view and perceive the website. It forces you to acknowledge that you are interacting with the digital scene and that the digital scene is affecting your reality in a very physical way.</p>
        </div>


        {/* <div id="statement">
        <p>Intangibility, This is our condition. We are tangible, but our digital selves are not. As we move further online we are losing the importance of tangibility. As I become my Tinder bio, my Zoom screen, and my Facebook comments I (or my body rather) begin to disappear. Simultaneously as my emotions become more dictated by the digital boxes within which I exist, there is a reverse effect; these intangible spaces are pulled into reality. The flattened world is sucked into three dimensions. Existing in a digital space is interactive intangibility. How do you explain the third dimension to a second-dimensional being? How can I show myself who exists in my phone what it’s like to eat an orange, touch a flower, stub my toe? </p>
        <br></br>
        <p>My project interrogates intangibility within the space between digital and physical. The User Condition blends physical and digital objects and environments to create an ambiguous space which leads us to become vessels in this contradictory liminal space. Transitioning from one to another we are able to recognize and dissociate ourselves from the perceived limitations of tangibility. Presented through a website this state is shown through a collection of images and scans with the addition of a webcam to acknowledge the users interaction with this state.  </p>
        </div> */}





        </main>
      </div>
    </>
  )
}

export default About
