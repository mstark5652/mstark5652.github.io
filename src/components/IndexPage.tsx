import * as React from 'react';
import { AboutView } from './About';
import { ProjectsView } from './Projects';

export default function IndexPage () {
  return (
    <div className='app-container'>
      <br />
      <AboutView />
      <ProjectsView />
    </div>
  );
}
