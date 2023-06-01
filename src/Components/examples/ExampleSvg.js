import MoleculeStructure from "../components/MoleculeStructure/MoleculeStructure";

function ExampleSVG() {
  const caffeine = "CN1C=NC2=C1C(=O)N(C(=O)N2C)";
  const aspirin = "CC(=O)Oc1ccccc1C(=O)O";

  return (
    <div id="component-example-svg" className="container">
      <section className="hero">
        <div className="hero-body">
          <p className="title">SVG Rendering</p>
          <p className="subtitle">You can render molecules using svg.</p>
        </div>
      </section>
      <div className="columns is-desktop">
        <div className="column">
          <MoleculeStructure
            id="structure-example-svg-caffeine"
            structure={caffeine}
            width={350}
            height={300}
            svgMode
          />
        </div>
        <div className="column">
          <MoleculeStructure
            id="structure-example-svg-aspirin"
            structure={aspirin}
            width={350}
            height={300}
            svgMode
          />
        </div>
      </div>
    </div>
  );
}

export default ExampleSVG;