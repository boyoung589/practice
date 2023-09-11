function Map() {
    const tempStyle = {
        width: "500px",
        height: "400px",
    }
    return (
      <div className="App">
        <button>버튼</button>
        <div id="map" style={tempStyle}></div>
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=593e3519994549bc86edf8c79b3fbd0e"></script>
      </div>
    );
  }
  
  export default Map;