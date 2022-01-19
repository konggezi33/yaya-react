
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import routes from './routes'
 
function routerCreate(route) {
  if(route.children) {
    return (
        <Route key={route.path} path={route.path} element={<route.component/>}>
          {
            route.children.map(ele => {
              return (
                routerCreate(ele)
              )
            })
          }
        </Route>
      )
  } else {
    return (
      <Route key={route.path} path={route.path} element={<route.component/>} />
    )
  }
}

export default function CreateRoute () {
  const mapRoute = routes.map(item => {
    return routerCreate(item)
  })
  return (
    <Routes>
      { mapRoute }
    </Routes>
  )
}

