import React, { useEffect, useState } from 'react'
import { fetchBio } from './api.js';

const Useeffect = () => {
  const [person, setPerson] = useState("bob")
  const [bio, setBio] = useState(null)

  useEffect(() => {
    let ignore = false;
    setBio(null)
    fetchbio(person).then((result) => {
      if (!ignore) {
        setBio(result)
      }
    })
    return () => {
      ignore = true
    }
  }, [person])


  return (
    <div>
      <h3>Hello world</h3>
      <select value={person} onChange={(e) => { setPerson(e.target.person) }}>
        <option value="bob">bob</option>
        <option value="mathew">mathew</option>
        <option value="alice">alice</option>
      </select>
      <hr />
      <p><i>{bio ?? 'Loading...'}</i></p>
    </div>
  )
}

export default Useeffect
