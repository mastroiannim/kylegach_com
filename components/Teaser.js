import { prefixLink } from 'gatsby-helpers'
import React, { Component, PropTypes } from 'react'
import access from 'safe-access'
import { Link } from 'react-router'
import { prune } from 'underscore.string'

import Byline from 'components/Byline'


class Teaser extends Component {

  render() {
    const { page, row } = this.props

    const title = access(page, 'data.title') || page.path
    const date = access(page, 'data.date')
    const byline = (date) ? (<Byline date={date} />) : ''
    // Create pruned version of the body.
    const html = page.data.body
    const intro = access(page, 'data.intro')
    const imageSrc = access(page, 'data.image') || "avatar.jpg"
    const pathBits = page.path.split('/')
    const id = pathBits[pathBits.length - 2]
    const blurb = access(page, 'data.blurb') || prune(html.replace(/<[^>]*>/g, ''), 210)
    let img = null
    if(!row) img = <img src={imageSrc} className="w-100@sm" alt=""></img>

    return (
      // TODO: Replace the flexItem-50 class with something more dynamic (quantity queries?)
   
      <article className={row ? 'flexItem-50 mb-1 mb-0@sm pr-3@sm' : 'mb-1'} role="article">
        <div className="left@sm mb-1">
            <h3 id={id} className="h4 mb-1"><Link to={prefixLink(page.path)} className="camoLink">{title}</Link></h3>
            {byline}
            <div className="flexItem-50 mb-0@sm pr-3@sm px-2@sm">
                <Link className="left@sm px-2@sm" to={prefixLink(page.path)} >{img} </Link>
                <div className="fs-4 mt-1">{blurb}</div>
                <div className="fs-5 mt-1 w-100@sm">{intro}</div>
            </div>
            
        </div>
      </article>
    )
  }
}

Teaser.propTypes = {
  page: PropTypes.object.isRequired,
  row: PropTypes.bool
}

export default Teaser
