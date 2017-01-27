import { config } from 'config'
import React, { Component, PropTypes } from 'react'

import HeaderBlock from 'components/HeaderBlock'
import Pages from 'components/Pages'
import Contatti from 'components/Contatti'
import SectionBlock from 'components/SectionBlock'


class Home extends Component {
  render () {
    const { route } = this.props

    return (
      <div className="pt-2 pt-3@sm">

        <HeaderBlock title={config.siteTitle}>
          <div dangerouslySetInnerHTML={{ __html: config.header.text }} />
        </HeaderBlock>
        <main role="main">
        
          <SectionBlock
            title={config.mission.title}
            blurb={config.mission.blurb}
          >
            <Pages pages={route.pages} folder={config.mission.dir} limit={5} home="mission"/>
          </SectionBlock>
        
          <SectionBlock
            title={config.work.title}
            blurb={config.work.blurb}
            link = {'/' + config.work.dir + '/'}
            linkText="vedi tutto"
          >
            <Pages pages={route.pages} folder={config.work.dir} limit={2} />
          </SectionBlock>

          <SectionBlock
            title = {config.writing.title}
            blurb = {config.writing.blurb}
            link = {'/' + config.writing.dir + '/'}
            linkText="archivio articoli"
          >
            <Pages pages={route.pages} folder={config.writing.dir} limit={2} row />
          </SectionBlock>

          <SectionBlock title={config.about.title}>
            <div className="cf" dangerouslySetInnerHTML={{ __html: config.about.text }} />
          </SectionBlock>
        
          <SectionBlock 
            title = {config.contatti.title}
            blurb = {config.contatti.blurb}
          >
            <Contatti 
                pages={route.pages} 
                telefono={config.contatti.telefono}
                indirizzo={config.contatti.indirizzo}
                info={config.contatti.info}
                lat={config.contatti.key}
                lat={config.contatti.lat}
                lng={config.contatti.lng}        
            />
          </SectionBlock>

        </main>
      </div>
    )
  }
}

Home.propTypes = {
  route: PropTypes.object
}

export default Home
