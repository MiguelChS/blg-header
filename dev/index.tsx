import * as React from 'react';
import { render } from 'react-dom';
import { Header } from '../src';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


export interface IPageTest {
  match?: {
    params: any
  }
}

const pageTest: React.SFC<IPageTest> = ({ match }) => {
  if (!match) return <p>No hay Parametro</p>
  return (
    <p> parametros ---{match.params.category}</p>
  )
}

render(
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path='/:category?' component={pageTest} />
      </Switch>
    </div>
  </BrowserRouter>, document.getElementById('app'));