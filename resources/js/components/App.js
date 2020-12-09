import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import ProjectList from './ProjectList'
import ProjectCreate from './ProjectCreate'


class App extends Component{
	render(){
		return (
				<BrowserRouter>
				<div>
					<Header />
					<Switch>
						<Route exact path= '/projects' component={ProjectList} />
						<Route path='/projects/create' component={ProjectCreate} />
					</Switch>
				</div>
				</BrowserRouter>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));