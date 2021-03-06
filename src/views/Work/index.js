import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Card from 'components/Card'
import Nav from 'components/Nav'

import { projects } from 'projects'

import styles from './Work.module.css'

const Work = (props) => {
  const { location: { pathname } } = props
  return (
    <div className={styles.wrapper}>
      <h1>Work.</h1>
      <Nav active={pathname} />
      <div className={styles.grid}>
        { projects.map(project => (
          <Link to={`/work/${project.slug}`} key={project.slug}>
            <Card {...project} />
          </Link>
        )) }
      </div>
    </div>
  )
}

Work.propTypes = {
  location: propTypes.shape({
    pathname: propTypes.string.isRequired
  }).isRequired
}

export default Work
