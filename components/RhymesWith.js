import React, { Component } from 'react'


class RhymesWith extends Component {

  render() {
    const rhyme = () => {
      const rhymes = ['La psicologia in rete e sul territorio', 'La psicologia in rete e sul territorio']
      const min = 1, max = rhymes.length
      const index = Math.floor(Math.random() * (max - min + 1)) + min;
      return rhymes[index - 1]
    }

    return (
      <p className="fs-5 italic">
         {rhyme() || 'La psicologia in rete e sul territorio'}.
      </p>
    )
  }
}

export default RhymesWith
