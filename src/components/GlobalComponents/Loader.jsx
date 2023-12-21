import "../../css/loader.css";

function Loader() {
  return (
    <div className="loaderContainer d-flex align-center justify-center">
      <div className="loader">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default Loader;
