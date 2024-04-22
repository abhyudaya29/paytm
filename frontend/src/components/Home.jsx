import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Button from './Button'

const Home = () => {
  const navigate=useNavigate()
  return (
    <>
    <div>
      <h2>Welcome To Patm app</h2>
      <Link to={'/signup'}>
      <Button label={"Click for signup"}>

      </Button>
      </Link>
    </div>
    </>
  )
}

export default Home