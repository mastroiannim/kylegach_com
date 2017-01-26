import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'
import sortBy from 'lodash/sortBy'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import access from 'safe-access'
import { include as includes } from 'underscore.string'
import {Gmaps, Marker} from 'react-gmaps';


class Contatti extends Component {
  render () {
    const {pages, lat, lng, key, info, telefono, indirizzo} = this.props
    const coords = {
      lat: lat,
      lng: lng
    };
    return (
      <div className='flex@sm mr-n3@sm'>
        
        <Gmaps className='flexItem-50 w-100 mb-2'
            height={'180px'}
            lat={coords.lat}
            lng={coords.lng}
            zoom={18}
            params={{v: '3.exp', key: {key}}}
            onMapCreated={this.onMapCreated}>
            <Marker
              lat={coords.lat}
              lng={coords.lng}
              draggable={false} />
        </Gmaps>
        <div className='flexItem-50 w-100 ml-1 mb-4 mb-1 pr-3@sm pl-2@sm '>
          <div className='mt-0'>
              <div className='mt-0 h5'>{info}</div>
              <div className='mt-1@sm'>
                <img className='left mr-1 mt-1' src="indirizzo.png"/>
                <div className='ml-1@sm mt-0 pl-2@sm'>{indirizzo}</div>
              </div>
              <div className='mt-1@sm'>
                <img className='left mr-1 mt-1' src="telefono.png"/>
                <div className='ml-1@sm mt-0 '>{telefono}</div>
              </div>
              <div className='mt-1@sm'>
                <img className='left mr-1 mt-1' src="mail.png"/>
                <div className='ml-1@sm mt-0 '><a href={'mailto:' + config.email}>{config.email}</a></div>
              </div>
          </div>
      </div>
      </div>
    )
  }
}

Contatti.propTypes = {
  pages: PropTypes.array.isRequired,
  folder: PropTypes.string
}

export default Contatti
