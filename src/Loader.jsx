const Loader = () => {
  return (
    <div>
      <div className="w-full bg=red flex mt-52 justify-center items-center">
        {/* animation for loader is in the app.css file */}
        <div className="loader">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
