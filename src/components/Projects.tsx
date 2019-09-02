import * as React from 'react';

const distPath = 'public/dist/';
const iosAppStore = distPath + require('../img/iosAppStore.png');
const droidAppStore = distPath + require('../img/androidAppStore.png');
const cbrLogo = distPath + require('../img/cbr_long_logo.png');
const cbrScreens = distPath + require('../img/cbr_screens.png');
const hackGroup = distPath + require('../img/hackGroup.jpg');
const neighborhoodAlexa = distPath + require('../img/neighborhood_alexa.png');
const mixologist = distPath + require('../img/mixologist.jpg');

export function ProjectsView() {
  return (
    <div className='projects-container'>
      <div id='projects' className='anchor'></div>
      <p className='section-title'>Projects</p>

      <br />
      <HackMidwestView />
      <br />
      <MixologistView />
      <br />
      <CBRView />
      <br />
      <br />
    </div>
  );
}


function HackMidwestView() {
  return (
    <section className='split-columns back-drop'>
      <div className='hack-container'>
        <div className='row m0 split-column wow fadeIn'>
          <div className='col-sm-6 image text-right'>
            <img src={hackGroup} alt='' />
          </div>
          <div className='col-sm-6 texts'>
            <div className='texts-inner row m0'>
              <p className='title'>2018 HackMidwest Winner!</p>
              <p></p>
            </div>
          </div>
        </div>
        <div className='row m0 split-column wow fadeIn'>
          <div className='col-sm-6 col-sm-pull-6 texts'>
            <div className='texts-inner row m0'>
              <p>Welcome to the Neighborhood. A hyper-local, real-time, real-life network and exchange made up of your actual neighbors that rewards "neighborly" acts of kindness and brings us all closer together.</p>
              <p><a className='clean-link' target='_blank' href='https://www.intouchsol.com/blog/intouch-team-wins-big-hack-midwest-competition/' title='Hack Midwest Article'>Article</a></p>
            </div>
          </div>
          <div className='col-sm-6 col-sm-push-6 image'>
            <img src={neighborhoodAlexa} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
}

function MixologistView() {
  return (
    <section className='row team'>
      <div className='container mix-container'>
        <div className='row section-header wow fadeInUp'>
          <h2 className='title'>Mixologist the Robotic Bartender</h2>
        </div>
        <div className='row wow fadeInUp'>
          <ul className='mix-list'>
            <li><a className='clean-link' target='_blank' href='https://www.dimin.com/blog/creative-tech-kc-the-future-will-have-robot-bartenders/' title='Blog Article'>Article</a></li>
            <li><a className='clean-link' target='_blank' href='https://github.com/mstark5652/mocktailsmixer' title='Github Repo'>Github Repo</a></li>
            <li><a className='clean-link' target='_blank' href='https://www.mixologist.ai/' title='Product Website'>Website</a></li>
          </ul>
        </div>

        <div className='row team_members'>

          <div className='col-md-3 col-sm-6 member wow fadeInUp'>
            <div className='row m0 inner'>
              <div className='row m0 image'>
                <img className='mix-image' src={mixologist} alt='' />
              </div>
              <div className='texts row m0'>
              </div>
            </div>
          </div>

          <div className='col-md-3 col-sm-6 member wow fadeInUp'>
            <div className='row m0 inner'>
              <div className='row m0 image'>
              </div>
              <div className='texts row m0'>
              </div>
            </div>
          </div>

          <div className='col-md-3 col-sm-6 member wow fadeInUp' data-wow-delay='0.3s'>
            <div className='row m0 inner'>
              <div className='row m0 image'>
                <iframe className='mix-video' src='https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fjacobshepherd%2Fvideos%2F10160063700095370%2F&show_text=0&width=300' width='300' height='300' scrolling='no' frameBorder='0' allowFullScreen></iframe>
              </div>
              <div className='texts row m0'>
              </div>
            </div>
          </div>

          <div className='col-md-3 col-sm-6 member wow fadeInUp' data-wow-delay='0.3s'>
            <div className='row m0 inner'>
              <div className='row m0 image'>
              </div>
              <div className='texts row m0'>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function CBRView() {
  return (
    <section className='row back-drop'>
      <div className='cbr-container'>

        <div className='container'>
          <div className='row'>
            <div className='col-sm-6 col-sm-pull-6 wow fadeInUp'>
              <img src={cbrScreens} alt='' className='mobile-img' />
            </div>
            <div className='col-sm-6 col-sm-push-6 wow fadeIn'>
              <a href='https://comicbookrealm.com' target='_blank' title='Comic Book Realm Site'>
                <img className='cbr-logo' src={cbrLogo} alt='Comic Book Realm' />
              </a>
              <h2 className='title'>Comic Book Realm Mobile Apps</h2>
              <p>Price guide and tracking for all your comic books.</p>
              <div className='row m0 downloads-btns'>
                <a href='https://itunes.apple.com/us/app/comicbookrealm/id1348310066' target='_blank' className='dload-link'><img src={iosAppStore} alt='CBR App on iOS' title='CBR App on iOS' /></a>
                <a href='https://play.google.com/store/apps/details?id=com.comicbookrealmgp.cbr' target='_blank' className='dload-link'><img src={droidAppStore} alt='CBR App on Android' title='CBR App on Android' /></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
