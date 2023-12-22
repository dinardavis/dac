import * as React from "react";

export default function FirstCallVideos() {

  const [videoState, setVideoState] = React.useState({
    englishZ: 1,
    spanishZ: 0,
    vietZ: 0,
  })

  const englishVid = {
    zIndex: videoState.englishZ,
  }

  const spanishVid = {
    zIndex: videoState.spanishZ,
  }

  const vietnameseVid = {
    zIndex: videoState.vietZ,
  }

  return (
    <div className='first-call-videos-content'>
      <div className="first-call-video video-1" style={englishVid}>
        <div className="tab tab-1 active">English</div>
        <p>English</p>
      </div>
      <div className="first-call-video video-2" style={spanishVid}>
        <div className="tab tab-2">Spanish</div>
        <p>Spanish</p>
      </div>
      <div className="first-call-video video-3" style={vietnameseVid}>
        <div className="tab tab-3">Vietnamese</div>
        <p>Vietnamese</p>
      </div>
    </div>
  )
}