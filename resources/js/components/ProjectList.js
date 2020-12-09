import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ProjectList extends Component{
	constructor(){
		super()
		this.state= {
				projects: []
		}
	}
	
	componentDidMount(){
		axios.get('/projects').then(response => {
			console.log(response);
			this.setState({
				projects: response.data
			})
		})
	}
	
	render(){
		const { projects } = this.state
		console.log(projects);
		return (
			<div className= 'container'>
				<div className= 'row'>
					<div className= 'col-8'>
						<div className= 'card'>
							<div className= 'card-header'>
								All Projects
							</div>
							<div className='card-body'>
								<Link className='btn btn-primary' to='/projects/create'>Add Project</Link>
								<ul className='list-group'>
									
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

}
export default ProjectList

