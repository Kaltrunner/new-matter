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
    <img id="glass-img" src="Nickel0007.png" alt="" />
    <h4 className="col-sub-header-2" >Lear</h4>
    <p className="col-p-tag-2" >Enhanced nutrient absorption<br/>Re-generative properties<br/>Vanishes under extreme conditions</p>
    </div>
  </div>
  <div className="col" id="coll-3">
      <h2 className="col-p-tag-3" >"The absence of evidence is not the evidence of absence."</h2>
    </div>
  </div>
  
  <div className="container text-center" id="image-col-div" >
    <svg id="svg-img" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M128 248L128 8M231.923 68L24.0769 188M8 128L248 128M231.923 188L24.0769 68" stroke="white" strokeWidth="4"/>
</svg>
</div>
<p className="coordinates" >RA 5h 55m 10s | Dec +7° 24′ 26″</p>
        </>
    )
}

export default Body;