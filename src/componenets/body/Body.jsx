import "./body.css";

function Body() {
    return (
        <>
        <div className="container text-center">
  <div className="row" id="row-div" >
    <div className="col" id="coll-1" >
      <img id="glass-img" src="Glass_Prism0071.png" alt="" />
      <h4 className="col-sub-header-1" >Oberon</h4>
      <p className="col-p-tag-1" >Adaptive moisture control<br/>Resilient to disturbances<br/>Emits nanoparticle vapor</p>
    </div>
    <div className="col" id="coll-2">
    <img id="glass-img-2" src="Nickel0007.png" alt="" />
    <h4 className="col-sub-header-2" >Lear</h4>
    <p className="col-p-tag-2" >Enhanced nutrient absorption<br/>Re-generative properties<br/>Vanishes under extreme conditions</p>
    </div>
  </div>
  <div className="col" id="coll-3">
      {/* <h2 className="col-p-tag-3" >"The absence of evidence is not the evidence of absence."</h2> */}
    </div>

    <div id="parallax-world-of-ugg">
<section>
    <div className="parallax-one">
      <h2>"The absence of evidence is not the evidence of absence."</h2>
    </div>
</section>

<section>
  <div className="block">
    <p><span className="first-character sc">I</span>n 1978, Brian Smith landed in Southern California with a bag of sheepskin boots and hope. He fell in love with the sheepskin experience and was convinced the world would one day share this love. The beaches of Southern California had long been an epicenter of a relaxed, casual lifestyle, a lifestyle that Brian felt was a perfect fit for his brand. So he founded the UGG brand, began selling his sheepskin boots and they were an immediate sensation. By the mid 1980's, the UGG brand became a symbol of relaxed southern California culture, gaining momentum through surf shops and other shops up and down the coast of California, from San Diego to Santa Cruz. UGG boots reached beyond the beach, popping up in big cities and small towns all over, and in every level of society. Girls wore their surfer boyfriend's pair of UGG boots like a letterman jacket. When winter came along, UGG boots were in ski shops and were seen in lodges from Mammoth to Aspen.</p>
    <p className="line-break margin-top-10"></p>
  </div>
</section>

</div>
  </div>
  
  <div className="container text-center"  >
    {/* <svg id="svg-img" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M128 248L128 8M231.923 68L24.0769 188M8 128L248 128M231.923 188L24.0769 68" stroke="white" strokeWidth="4"/>
</svg> */}


<div id="parallax-world-of-ugg-2">
<section>
    <div className="parallax-one">
    <svg id="svg-img" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M128 248L128 8M231.923 68L24.0769 188M8 128L248 128M231.923 188L24.0769 68" stroke="white" strokeWidth="4"/>
</svg>
    </div>
</section>

</div>
</div>

<p className="coordinates" >RA 5h 55m 10s | Dec +7° 24′ 26″</p>



        </>
    )
}

export default Body;