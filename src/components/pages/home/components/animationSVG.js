import REACTeact from "react"




    const Rainbow = () => (
        <svg id="rainbow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 180">
          <path id="red" d="M270,170a100,100,0,0,0-200,0" fill="none" stroke="#FF9E80" strokeLinecap="round" strokeWidth="20px" />
          <path id="yellow" d="M290,170a120,120,0,0,0-240,0" fill="none" stroke="#FFE57F" strokeLinecap="round" strokeWidth="20px" />
          <path id="blue" d="M310,170a140,140,0,0,0-280,0" fill="none" stroke="#80D8FF" strokeLinecap="round" strokeWidth="20px" />
          <path id="purple" d="M330,170a160,160,0,0,0-320,0" fill="none" stroke="#BF9AFF" strokeLinecap="round" strokeWidth="20px" />
        </svg>
      );
      
      const Face = () => (
        <svg id="face" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 136 136">
          <path d="M68,134A66,66,0,1,0,2,68,66,66,0,0,0,68,134Z" fill="#fbfcfd" stroke="#A1ACBA" strokeWidth="4px" />
          <path d="M109.4,19.2A64.7,64.7,0,0,1,132,68.5,63.8,63.8,0,0,1,68.5,132a64.7,64.7,0,0,1-49.3-22.6A64.8,64.8,0,0,0,61.5,125,63.8,63.8,0,0,0,125,61.5,64.8,64.8,0,0,0,109.4,19.2Z" fill="#ECF1FF" isolation="isolate" />
          <path d="M49.1,62.1a10,10,0,0,0-14.1,0" fill="none" stroke="#A1ACBA" strokeLinecap="round" strokeWidth="5px" />
          <path d="M101.1,62.1a10,10,0,0,0-14.1,0" fill="none" stroke="#A1ACBA" strokeLinecap="round" strokeWidth="5px" />
          <path d="M42,88a36.8,36.8,0,0,0,52,0" fill="none" stroke="#A1ACBA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5px" />
        </svg>
      );

      const Stars = () => (
        <svg id="stars" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 205 77">
          <defs>
            <style>{`.a, .a1{fill:#fff;}`}</style>
          </defs>
          <title>stars</title>
          <path className="a1" d="M71.2,22.9A22.3,22.3,0,0,1,57.1,8.8a1.2,1.2,0,0,0-2.3,0A22.3,22.3,0,0,1,40.8,22.9a1.2,1.2,0,0,0,0,2.3A22.3,22.3,0,0,1,54.9,39.2a1.2,1.2,0,0,0,2.3,0A22.3,22.3,0,0,1,71.2,25.1a1.2,1.2,0,0,0,0-2.3" transform="translate(0 0)" />
          <path className="a1" d="M204.2,50.9a22.3,22.3,0,0,1-14.1-14.1,1.2,1.2,0,0,0-2.3,0,22.3,22.3,0,0,1-14.1,14.1,1.2,1.2,0,0,0,0,2.3,22.3,22.3,0,0,1,14.1,14.1,1.2,1.2,0,0,0,2.3,0,22.3,22.3,0,0,1,14.1-14.1,1.2,1.2,0,0,0,0-2.3" transform="translate(0 0)" />
          <path className="a" d="M155.4,11.1A16.7,16.7,0,0,1,144.9.6a0.9,0.9,0,0,0-1.7,0,16.7,16.7,0,0,1-10.5,10.5,0.9,0.9,0,0,0,0,1.7,16.7,16.7,0,0,1,10.5,10.5,0.9,0.9,0,0,0,1.7,0,16.7,16.7,0,0,1,10.5-10.5,0.9,0.9,0,0,0,0-1.7" transform="translate(0 0)" />
          <path className="a" d="M15.6,68.4a11.2,11.2,0,0,1-7-7,0.6,0.6,0,0,0-1.1,0,11.2,11.2,0,0,1-7,7,0.6,0.6,0,0,0,0,1.1,11.2,11.2,0,0,1,7,7,0.6,0.6,0,0,0,1.1,0,11.2,11.2,0,0,1,7-7,0.6,0.6,0,0,0,0-1.1" transform="translate(0 0)" />
        </svg>
      );

      const Room = () => (
        <svg id="room" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 391 230">
          <defs>
            <radialGradient id="radial-gradient" cx="-109.23" cy="481.9" r="0.48" gradientTransform="matrix(391, 0, 0, -230, 42900, 111068)" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#d8dadf" />
              <stop offset="1" stopColor="#edeff4" stopOpacity="0" />
            </radialGradient>
          </defs>
          <title>Rectangle 73</title>
          <rect id="Rectangle-73" width="391" height="230" fill="url(#radial-gradient)" />
        </svg>
      );
      
      const ThumbUp = () => (
        <svg id="thumbup" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 54">
          <title>thumbup</title>
          <path d="M10,52a8.1,8.1,0,0,1-7.9-7.3,8.3,8.3,0,0,1,2-6.7A8.7,8.7,0,0,1,2,32a8.5,8.5,0,0,1,2.1-6A9.7,9.7,0,0,1,2,19.5c0-4.2,4.1-7.3,7.9-7.5H22.4a1.1,1.1,0,0,0,.3-0.9V10.9a8.4,8.4,0,0,1,2.1-6.4A7.1,7.1,0,0,1,30.1,2a8,8,0,0,1,8,8V38A13.9,13.9,0,0,1,24.3,52H10Z" transform="translate(-0.02)" style={{ fill: "#fbfbfc" }} />
          <path d="M23,11c0-.2.4-4.9,1.8-6.5A7.1,7.1,0,0,1,30.1,2a8,8,0,0,1,8,8V38c0,7.9-7.2,14-15.1,14V11Z" transform="translate(-0.02)" style={{ fill: "#ECF1FF", isolation: "isolate" }} />
          <path d="M30.1,0a9.1,9.1,0,0,0-6.7,3.2A10.4,10.4,0,0,0,20.7,10H9.8a11.2,11.2,0,0,0-6.2,2.5,9,9,0,0,0-3.5,7A12.5,12.5,0,0,0,1.7,26,11.1,11.1,0,0,0,.1,32a11.4,11.4,0,0,0,1.6,6A10.5,10.5,0,0,0,.1,45,10.1,10.1,0,0,0,10,54H24.1a15.8,15.8,0,0,0,16-15.6q0-.2,0-0.4V10a10,10,0,0,0-10-10m0,4a6,6,0,0,1,6,6V38A11.8,11.8,0,0,1,24.5,50H10a6.1,6.1,0,0,1-5.9-5.5c-0.4-3.2,1.5-6.3,4.7-6.7H8.3c-2.7,0-4.2-2.6-4.2-5.8s1.6-5.8,4.4-5.8H8.8c-3.3-.2-4.7-3.3-4.7-6.7s3.4-5.4,6-5.5H22.4c1.5,0,2.3-1.4,2.3-2.9V10.8C24.3,7.3,27.1,4,30.1,4" transform="translate(-0.02)" style={{ fill: "#A1ACBA" }} />
        </svg>
      );
      
      const Shadow = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 12" id="shadow">
          <title>shadow</title>
          <ellipse cx="50" cy="6" rx="50" ry="6" fill="#e1e4ec" />
        </svg>
      );
      
      const AnimationSVG = () => (
        <div id="done-animation" className="  pt-5 max-xl:pt-5 " >
          <Rainbow />
          <Face />
          <Stars />
          {/* <Room /> */}
          <ThumbUp />
          <Shadow />
        </div>
      );


  

    


export default AnimationSVG