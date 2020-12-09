import axios from 'axios'
import React, { Component} from 'react'

class ProjectCreate extends Component{
	constructor (props){
		super (props)
		this.state= {
			name: '',
			errors: []
		}
		
		this.createProject = this.createProject.bind(this)
		this.handleFieldChange = this.handleFieldChange.bind(this)
			
	}
	
	handleFieldChange (e){
		this.setState({
			[e.target.name]: e.target.value
			})
	}
	
	createProject(e){
		e.preventDefault()
		
		const proj= {
				name: this.state.name
		}
		
		axios.post('/projects/create', proj)
		.then(response => {
			this.props.history.push('/projects')
		})
		.catch(error => {
			this.setState({
				errors: error.response.data.errors
			})
		})
	}
	
	
	
	render(){
		return (
				<div className='container'>
					<div className='row'>
						<div className='col-md-6'>
							<div className='card'>
								<div className='card-header'>Add new project</div>
								<div className='card-body'>
			                    	<form onSubmit={this.createProject}>
			                    		<div className='form-group'>
			                    			<label htmlFor='name'>Name</label>
			                    			<input id='name' type='text' 
			                    			name='name' value={this.state.name} onChange={this.handleFieldChange} />
			                    		</div>
			                    		
			                    		<button className='btn btn-primary'>Create</button>
			                    	</form>
			                    </div>
							</div>
						</div>
					</div>
				</div>
			)
		}
	}
	


export default ProjectCreate