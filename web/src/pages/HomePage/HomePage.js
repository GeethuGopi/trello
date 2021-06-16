import { Link, routes } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout/MainLayout'

const HomePage = () => {
  return (
    <>
    <MainLayout>
    <Link to={routes.about()}>About</Link>`
      <h1>Home Page</h1>
      <p>Trello</p></MainLayout>


    </>
  )
}

export default HomePage
