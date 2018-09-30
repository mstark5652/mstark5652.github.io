import * as React from "react"

const distPath = "public/dist/"
const iosAppStore = distPath + require("../img/iosAppStore.png")
const droidAppStore = distPath + require("../img/androidAppStore.png")
const cbrLogo = distPath + require("../img/cbr_long_logo.png")
const cbrSearch = distPath + require("../img/cbrSearch.png")
const cbrMenu = distPath + require("../img/cbrMenu.jpg")
const hackGroup = distPath + require("../img/hackGroup.jpg")

export class ProjectsView extends React.Component {
  render() {
    return (
      <div className="projects-container">
        <div id="projects" className="anchor"></div>
        <p className="section-title">Projects</p>

        <br />
        <HackMidwestView />
        <br />
        <MixologistView />
        <br />
        <CBRView />
        <br />
        <br />
      </div>
    )
  }
}


class HackMidwestView extends React.Component {
  render() {
    return (
      <div className="back-drop">
        <div className="hack-container">
          <p className="title float-right">2018 HackMidwest Winner!</p>
          <br />
          <div className="row">
            <div className="column">
              <video playsInline loop controls autoPlay src="https://s3.us-east-2.amazonaws.com/neighborhood-static/media/intro.mp4" typeof="video/mp4"></video>
            </div>
            <div className="column double">
              <img src={hackGroup} title="Hack Midwest Group" />
              <a className="clean-link float-right" target="_blank" href="https://www.intouchsol.com/blog/intouch-team-wins-big-hack-midwest-competition/" title="Hack Midwest Article">Article</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class MixologistView extends React.Component {
  render() {
    return (
      <div className="mix-container">
        <p className="title float-right">Mixologist the Robotic Bartender</p>
        <br/>
        <div className="row">
          <div className="column">
            <br/>
          </div>
          <div className="column">
            <iframe className="mix-video" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fjacobshepherd%2Fvideos%2F10160063700095370%2F&show_text=0&width=240" width="240" height="240" scrolling="no" frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="column">
            <p className="empty-block"></p>
            <a className="clean-link float-right" target="_blank" href="https://www.dimin.com/blog/creative-tech-kc-the-future-will-have-robot-bartenders/" title="Blog Article">Article</a>
            <br />
            <a className="clean-link float-right" target="_blank" href="https://github.com/mstark5652/mocktailsmixer" title="Github Repo">Github Repo</a>
          </div>
        </div>
      </div>
    )
  }
}

class CBRView extends React.Component {
  render() {
    return (
      <div className="back-drop">
        <div className="cbr-container">
          <a href="https://comicbookrealm.com" target="_blank">
            <img className="cbr-logo" src={cbrLogo} alt="Comic Book Realm" />
          </a>
          <br />
          <div className="row">
            <div className="column">
              <p className="title">Comic Book Realm Mobile Apps</p>
            </div>
            <div className="column platform-container">
              <div className="app-badge">
                <a href="https://play.google.com/store/apps/details?id=com.comicbookrealmgp.cbr" target="_blank">
                  <img src={droidAppStore} alt="CBR App on Android" title="CBR App on Android" />
                </a>
              </div>
              <div className="app-badge">
                <a href="https://itunes.apple.com/us/app/comicbookrealm/id1348310066" target="_blank">
                  <img src={iosAppStore} alt="CBR App on iOS" title="CBR App on iOS" />
                </a>
              </div>
            </div>
            <div className="column cbr-screenshots">
              <img src={cbrSearch} className="float-left" alt="CBR Search Feature Screenshot" />
              <img src={cbrMenu} className="float-left" alt="CBR Search Feature Screenshot" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}