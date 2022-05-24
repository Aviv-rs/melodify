// import { HashRouter as Router, Route, Switch } from 'react-router-dom'
// import { AppHeader } from './cmps/app-header.jsx'
// import { UserMsg } from './cmps/user-msg.jsx'
// import routes from './routes.js'
import { Loader } from "./cmps/loader"

export function App() {
  return (
    <div className="app">
      <svg width="290" height="70.00425939635925" viewBox="0 0 290 70.00425939635925" className="css-1j8o68f"><defs id="SvgjsDefs1866"></defs><g id="SvgjsG1867" featurekey="symbolFeature-0" transform="matrix(0.8961277682169527,0,0,0.8961277682169527,-9.803141732121961,-9.840725948230899)" fill="#f6f6f6"><g xmlns="http://www.w3.org/2000/svg"><path d="M44.8,88.7c1.8,0.2,3.5,0.4,5.3,0.4c8.5,0,16.7-2.8,23.6-8c8.3-6.3,13.6-15.5,15-25.8S87.3,34.6,81,26.3   c-6.3-8.3-15.5-13.6-25.8-15C44.8,10,34.6,12.7,26.3,19c-8.3,6.3-13.6,15.5-15,25.8s1.3,20.6,7.7,28.8C25.3,82,34.5,87.3,44.8,88.7   z M13.3,45.1c1.3-9.8,6.4-18.5,14.2-24.5c6.5-5,14.3-7.6,22.4-7.6c1.7,0,3.3,0.1,5,0.3c9.8,1.3,18.5,6.4,24.5,14.2   c6,7.9,8.6,17.6,7.3,27.4c-1.3,9.8-6.4,18.5-14.2,24.5c-7.9,6-17.6,8.6-27.4,7.3c-9.8-1.3-18.5-6.4-24.5-14.2   C14.6,64.6,12,54.9,13.3,45.1z"></path><path d="M41.3,56.7c1.8,2.3,4.4,3.8,7.3,4.2C49,61,49.5,61,50,61c2.4,0,4.7-0.8,6.7-2.3c4.8-3.7,5.7-10.6,2.1-15.4   c-1.8-2.3-4.4-3.8-7.3-4.2c-2.9-0.4-5.8,0.4-8.1,2.2C38.5,44.9,37.6,51.9,41.3,56.7z M44.5,42.8C46.1,41.6,48,41,50,41   c0.4,0,0.8,0,1.2,0.1c2.4,0.3,4.5,1.5,6,3.5c1.5,1.9,2.1,4.3,1.8,6.7c-0.3,2.4-1.5,4.5-3.5,6c-1.9,1.5-4.3,2.1-6.7,1.8   c-2.4-0.3-4.5-1.5-6-3.5c-1.5-1.9-2.1-4.3-1.8-6.7C41.4,46.4,42.6,44.3,44.5,42.8z"></path><path d="M31.2,25.4c2.9-2.2,6.1-3.9,9.6-5l-0.6-1.9c-3.7,1.1-7.1,2.9-10.2,5.3c-5.8,4.4-9.8,10.4-11.8,17.4l1.9,0.5   C21.9,35.2,25.8,29.5,31.2,25.4z"></path><path d="M68.8,74.6c-3.1,2.4-6.6,4.1-10.3,5.2l0.5,1.9c4-1.1,7.7-3,11-5.5c6-4.6,10.3-11.2,12.1-18.6l-1.9-0.5   C78.5,64.1,74.5,70.3,68.8,74.6z"></path><path d="M64.6,69.1c-2.4,1.8-5,3.1-7.9,4l0.6,1.9c3.1-0.9,6-2.3,8.5-4.3c4.8-3.6,8.2-8.9,9.5-14.7l-1.9-0.5   C72.1,60.9,69,65.7,64.6,69.1z"></path><path d="M54.9,66.3l0.6,1.9c2.2-0.7,4.3-1.7,6.1-3.1c3.5-2.7,6-6.5,7-10.8l-1.9-0.4c-0.9,3.9-3.1,7.3-6.2,9.7   C58.7,64.7,56.9,65.7,54.9,66.3z"></path><path d="M31.8,44.5l1.9,0.6c1-3.4,3.1-6.4,5.9-8.6c1.6-1.2,3.4-2.2,5.4-2.8l-0.6-1.9c-2.2,0.7-4.3,1.7-6.1,3.1   C35.3,37.3,33,40.6,31.8,44.5z"></path><path d="M25,42.9l1.9,0.5c1.4-5,4.4-9.3,8.5-12.5c2.3-1.7,4.8-3,7.5-3.9l-0.6-1.9c-2.9,0.9-5.7,2.3-8.1,4.2   C29.7,32.8,26.5,37.4,25,42.9z"></path></g></g><g id="SvgjsG1868" featurekey="nameFeature-0" transform="matrix(1.2198097732567652,0,0,1.2198097732567652,86.68211941761975,-0.808246261010181)" fill="#f6f6f6"><path d="M33.92 40 l-6.8 0 l0.56 -22.72 l-6.28 22.72 l-6.12 0 l-6.24 -22.72 l0.56 22.72 l-6.88 0 l0 -28.24 l10.32 0 l5.32 19.76 l5.24 -19.76 l10.32 0 l0 28.24 z M59.16 30.84 l-14.92 0 c0 0.2 -0.04 0.68 0.08 1.24 c0.48 2.44 2.2 3.96 4.68 3.96 c0.36 0 1.16 -0.04 2 -0.36 c2.08 -0.72 3 -2.84 3.28 -3.36 l4.64 2.4 c-0.84 1.24 -1.28 1.8 -1.76 2.36 c-3.08 3.4 -7.08 3.68 -8.64 3.68 c-0.64 0 -2.12 -0.04 -3.76 -0.56 c-4.64 -1.44 -6.8 -5.52 -6.8 -10.24 c0 -1.28 0.08 -5.16 2.68 -8.16 c1.28 -1.44 3.48 -3.32 8.04 -3.32 c1.4 0 5.56 0.16 8.16 3.8 c2.36 3.24 2.28 7.56 2.32 8.56 z M52.8 27 c-0.08 -0.68 -0.2 -2.8 -2.28 -3.72 c-0.84 -0.4 -1.52 -0.4 -1.88 -0.4 c-2.44 0 -3.56 1.8 -3.88 2.52 c-0.16 0.36 -0.32 0.8 -0.48 1.6 l8.52 0 z M68.88 40 l-6.12 0 l0 -28.24 l6.12 0 l0 28.24 z M95.4 29.560000000000002 c0 4.72 -2.24 7.44 -3.68 8.64 c-1.2 1 -3.64 2.44 -7.56 2.44 c-1.08 0 -5.32 -0.2 -8.2 -3 c-1.24 -1.2 -3 -3.76 -3 -8.12 c0 -1.2 0.08 -4.6 2.44 -7.44 c1.44 -1.72 4.32 -3.88 9.6 -3.56 c2.44 0.12 4.6 0.68 6.56 2.24 c2.6 2.12 3.84 5.44 3.84 8.8 z M89.16000000000001 29.759999999999998 c0 -3.16 -1 -4.76 -2.2 -5.6 c-0.56 -0.4 -1.4 -0.8 -3.04 -0.8 c-0.28 0 -1.44 0.08 -2.32 0.6 c-1.12 0.64 -2.44 2.44 -2.44 5.52 c0 2.04 0.68 3.56 1.08 4.2 c0.48 0.72 1.68 2.04 4 2.04 c3.4 0 4.92 -2.84 4.92 -5.96 z M118.12 40 l-5.6 0 l-0.04 -1.96 c-0.4 0.4 -0.72 0.72 -1.2 1.08 c-1.8 1.32 -3.6 1.44 -4.44 1.44 c-1.4 -0.04 -4.68 -0.44 -6.96 -3.68 c-1 -1.44 -1.96 -3.44 -1.96 -7.2 c0 -1.2 0 -6.64 3.96 -9.56 c0.72 -0.56 2.32 -1.56 4.76 -1.56 c2.92 0 4.68 1.48 5.48 2.12 l0 -8.92 l6 0 l0 28.24 z M112.28 29.560000000000002 c0 -0.52 0.12 -3.04 -1.04 -4.8 c-0.36 -0.56 -1.4 -1.8 -3.28 -1.56 c-1.16 0.16 -2.08 0.8 -2.72 1.76 c-0.84 1.24 -1.08 3.12 -1.08 4.6 c0 0.4 -0.04 3.16 1.16 4.92 c0.92 1.36 2.16 1.52 2.8 1.52 c0.72 0 1.56 -0.28 2.16 -0.76 c2.12 -1.68 2 -5.16 2 -5.68 z M129.72 16.52 l-6.12 0 l0 -4.76 l6.12 0 l0 4.76 z M129.72 40 l-6.12 0 l0 -20.88 l6.12 0 l0 20.88 z M146.4 23.36 l-4.08 0 l0 16.64 l-6.12 0 l0 -16.64 l-3.28 0 l0 -3.76 l3.28 0 l0 -2.6 c0 -0.32 0 -1.88 0.68 -3.12 c1.04 -1.96 3.64 -2.56 5.6 -2.56 c1.44 0 3.44 0.32 3.68 0.36 l0 4.64 c-1.36 0 -2.52 -0.04 -3 0.16 c-0.52 0.2 -0.72 0.68 -0.76 0.88 c-0.16 0.48 -0.12 1.72 -0.12 2.24 l4.12 0 l0 3.76 z M166.68 19.12 l-7.36 22.56 c-0.48 1.48 -0.96 2.76 -2.04 3.92 c-1.32 1.36 -2.52 1.6 -4.36 1.6 l-4.44 0 l0 -4.92 l2.8 0 c1.44 0 1.92 -0.8 1.92 -1.52 c0 -0.56 -0.12 -1 -0.44 -2 c-0.2 -0.64 -0.4 -1.28 -0.6 -1.96 l-5.48 -17.68 l6.56 0 l3.44 14.96 l3.44 -14.96 l6.56 0 z"></path></g></svg>
      {/* <Loader/> */}
      {/* <Router>
        <AppHeader />
        <Switch>
          {routes.map(route => (
            <Route
              key={route.path}
              exact
              component={route.component}
              path={route.path}
            />
          ))}
        </Switch>
      </Router>
      <UserMsg /> */}
    </div>
  )
}
