import "./style.css";

const Index = ({ surface }) => {

    console.log(surface);
  
    return (
      <div className="surface__card">
          <h2>{surface.typevoie} {surface.nomvoie}</h2>
      </div>
    );
  }

  export default Index;