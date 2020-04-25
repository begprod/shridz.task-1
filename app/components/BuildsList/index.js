import React from 'react';
import BuildCard from "../BuildCard";
import './styles.css';
import axios from "axios";

export default class BuildList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			buildsList: {}
		}
	}

	componentWillMount() {
		this.getBuildLists();
	}

	getBuildLists() {
		axios.get( 'http://localhost:3000/api/builds')
			.then(response => {
				this.setState({
					buildsList: response.data.data
				})
			}).catch(error => {
				console.log(error);
			})
	}

	render() {
		return (
			<div className="builds-list">
				<div className="build-list__inner">
					{Object.keys(this.state.buildsList).map((key, index) => {
						// console.log(this.state.buildsList[key].id);
						return <a key={index} className="build-list__item">
								<BuildCard
									status={this.state.buildsList[key].status.toLowerCase()}
									commitMessage={this.state.buildsList[key].commitMessage}
									branchName={this.state.buildsList[key].branchName}
									commitHash={this.state.buildsList[key].commitHash.slice(0,6)}
									authorName={this.state.buildsList[key].authorName}
								/>
								</a>
					})}
				</div>
			</div>
		)
	}
}