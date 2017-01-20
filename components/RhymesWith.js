import React, { Component } from 'react'


class RhymesWith extends Component {

  render() {
    const rhyme = () => {
      const rhymes = ['Tra moglie e marito non mettere il batch', 'Tra moglie e marito non mettere il hatch', 'Tra moglie e marito non mettere il latch']
      const min = 1, max = rhymes.length
      const index = Math.floor(Math.random() * (max - min + 1)) + min;
      return rhymes[index - 1]
    }

    return (
      <p className="fs-5 italic">
        Rhymes with {rhyme() || 'Tra moglie e marito non mettere il dito'}.
      </p>
    )
  }
}

export default RhymesWith
