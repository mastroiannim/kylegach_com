import { config } from 'config'
import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import toTitleCase from 'to-title-case'

import Pages from 'components/Pages'


class BlogIndex extends Component {
  render () {
    const { route } = this.props

    return (
      <main className="maxW-3 mx-auto" role="main">
        <Helmet title={toTitleCase(config.writing.title)} />
        <h1 className="h1 mb-2">{toTitleCase(config.writing.title)}</h1>
        <h2 className="fs-3 mb-4" dangerouslySetInnerHTML={{ __html: config.writing.blurb }} ></h2>
        <Pages pages={route.pages} folder={route.page.file.dirname} />
      </main>
    )
  }
}

export default BlogIndex

BlogIndex.propTypes = {
  route: PropTypes.object
}
