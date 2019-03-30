import React from 'react'
import { Dashboard, HomePage, Login, Register } from './Components'
import { DASHBOARD, HOMEPAGE, LOGIN, REGISTER } from './Constants/routes'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { BrowserRouter as Switch, Route } from 'react-router-dom'
import { Router } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
})

export default function App() {
  const history = createHistory({
    basename: process.env.PUBLIC_URL
  })

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={history}>
        <Switch>
          <Route exact path={HOMEPAGE} component={HomePage} />
          <Route exact path={LOGIN} component={Login} />
          <Route exact path={REGISTER} component={Register} />
          <Route exact path={DASHBOARD} component={Dashboard} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  )
}
