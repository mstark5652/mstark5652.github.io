import React from "react"

import ArrowLink from "../components/ArrowLink"
import strings from "../common/strings"
import { projects, subprojects } from "../common/projects"

const Work = () => (
  <section className="section container" id="work" aria-labelledby="work-title">
    <div className="section__header" data-reveal>
      <h2 className="section__title" id="work-title">
        {strings.work.title}
      </h2>
      <p className="section__intro">{strings.work.intro}</p>
    </div>

    <ul className="work">
      {projects.map((project) => (
        <li className="project" key={project.title} data-reveal>
          <div className="project__frame">
            <img src={project.img.src} alt={project.img.title} loading="lazy" />
          </div>
          <ul className="project__tags" aria-label="Tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <h3 className="project__title">{project.title}</h3>
          <p className="project__desc">{project.description}</p>
          <ArrowLink href={project.link.to}>{project.link.text}</ArrowLink>
        </li>
      ))}
    </ul>

    <details className="more" data-reveal>
      <summary className="button button--ghost more__toggle">
        <span className="more__show">Show</span>
        <span className="more__hide">Hide</span> {subprojects.length} {strings.more.toggle}
      </summary>
      <ul className="more__list">
        {subprojects.map((entry) => (
          <li className="more__item" key={entry.title}>
            <h3 className="more__title">{entry.title}</h3>
            <p className="more__desc">{entry.description}</p>
            {entry.link && <ArrowLink href={entry.link.to}>{entry.link.text}</ArrowLink>}
          </li>
        ))}
      </ul>
    </details>
  </section>
)

export default Work
