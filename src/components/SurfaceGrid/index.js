import SurfaceGrid from "../SurfaceGrid";
import "./style.css";

const Index = ({surfaces}) => {
  return (
    <div className="surfaces__grid">
      {
        surfaces.results.map(
          (surface) => (
            <SurfaceGrid surface={surface} />
          )
        )
      }
    </div>
  );
}

export default Index;
