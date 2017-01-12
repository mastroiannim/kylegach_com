import { config } from 'config'
import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import toTitleCase from 'to-title-case'

import Pages from 'components/Pages'


class FamigliaIndex extends Component {
  render () {
    const { route } = this.props

    return (
      <main className="maxW-3 mx-auto" role="main">
        <Helmet title={toTitleCase(route.page.file.dirname)} />
        <h1 className="h1 mb-2">{toTitleCase(route.page.file.dirname)}</h1>
        <p className="fs-3 mb-4" dangerouslySetInnerHTML={{ __html: config.famiglia.blurb }} />
        <Pages pages={route.pages} folder={route.page.file.dirname} />
      </main>
    )
  }
}

export default FamigliaIndex

FamigliaIndex.propTypes = {
  route: PropTypes.object
}
