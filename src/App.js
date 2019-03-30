import React from 'react'
import { Dashboard, HomePage, Login, Register } from './Components'
import { DASHBOARD, HOMEPAGE, LOGIN, REGISTER } from './Constants/routes'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
})

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
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
