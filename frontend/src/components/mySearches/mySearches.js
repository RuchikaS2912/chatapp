import React, {Component} from "react";
import "./mySearches.css";

class MySearches extends Component{
	constructor(props){
		super(props);
		this.state = {
			name: "",
			shortlisted: false,
			contacted: false,
			scheduled: false,
			visited: false,
			error: ""
		}

		this.handleProfile = this.handleProfile.bind(this);
		this.handlePayment = this.handlePayment.bind(this);
		this.handleIssues = this.handleIssues.bind(this);
		this.handleMySearches = this.handleMySearches.bind(this);
		this.handleShortlisted = this.handleShortlisted.bind(this);
		this.handleContacted = this.handleContacted.bind(this);
		this.handleScheduled = this.handleScheduled.bind(this);
		this.handleVisited = this.handleVisited.bind(this);
	}

	handleShortlisted(){
		this.setState({
			shortlisted: !this.state.shortlisted
		});
	}

	handleContacted(){
		this.setState({
			contacted: !this.state.contacted
		});
	}

	handleScheduled(){
		this.setState({
			scheduled: !this.state.scheduled
		});
	}

	handleVisited(){
		this.setState({
			visited: !this.state.visited
		});
	}

	handleProfile(){
		window.location.replace("http://localhost:3000/profile");
	}

	handleIssues(){
		window.location.replace("http://localhost:3000/issues");
	}

	handlePayment(){
		window.location.replace("http://localhost:3000/payment");
	}

	handleMySearches(){
		window.location.replace("http://localhost:3000/mySearches");
	}

	render() {
		return (
			<div>
				<div className="leftSideBarParent">
					<div>
						<div className="border_profile" onClick = {this.handleProfile}>
							<h4>{this.state.name}</h4> 
						</div>
						<div className="border_payment" onClick={this.handlePayment}>
							<div className="display">
								<div className="adjustment">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M22 11v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9h20zm0-4H2V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3z"/>
									</svg>
								</div>
								<h3>Payment</h3>
							</div> 
						</div>
						<div className="border_issues" onClick={this.handleIssues}>
							<div className="display">
								<div className="adjustment">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 16v6H3V3h9.382a1 1 0 0 1 .894.553L14 5h6a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-6.382a1 1 0 0 1-.894-.553L12 16H5zM5 5v9h8.236l1 2H19V7h-6.236l-1-2H5z"/>
									</svg>
								</div>
								<h4>Issues</h4>
							</div> 
						</div>
						<div className="border_mySearches">
							<div className="display">
								<div className="display" onClick={this.handleMySearches}>
									<div className="adjustment">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"/>
										</svg>
									</div>
									<h4>My Searches</h4>
								</div>
								<div className="margin_icons">
									<div className="display">
										<div className="border_icons" onClick={this.handleShortlisted}>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22l-9.192-9.192c-2.18-2.568-2.066-6.42.353-8.84A6.5 6.5 0 0 1 12 3.64a6.5 6.5 0 0 1 9.179 9.154L12 22zm7.662-10.509a4.5 4.5 0 0 0-6.355-6.337L12 6.282l-1.307-1.128a4.5 4.5 0 0 0-6.355 6.337l.114.132L12 19.172l7.548-7.549.114-.132z"/>
											</svg>
										</div>
										<div className="border_icons" onClick={this.handleContacted}>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 2h16.005C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H3V2zm4 2H5v16h2V4zm2 16h10V4H9v16zm2-4a3 3 0 0 1 6 0h-6zm3-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8-6h2v4h-2V6zm0 6h2v4h-2v-4z"/>
											</svg>
										</div>
									</div>
									<div className="display">
										<div className="border_icons" onClick={this.handleScheduled}>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zM4 9v10h16V9H4zm2 2h2v2H6v-2zm0 4h2v2H6v-2zm4-4h8v2h-8v-2zm0 4h5v2h-5v-2z"/>
											</svg>
										</div>
										<div className="border_icons" onClick={this.handleVisited}>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.5-11.5l-2 5-5 2 2-5 5-2z"/>
											</svg>
										</div>
									</div>
								</div>
							</div> 
						</div>
						<div className="border_contact">
							<h4>Contact us</h4>
							<h6>help@grabhouse.com</h6>
						</div>
						<div className="border_privacy">
							<h6>Privacy policy t&c apply</h6>
						</div>
					</div>
				</div>
				<div>
					<div className="display">
						<div>
							<div>
								{
									this.state.shortlisted &&
									<div className="special_bordering display" onClick={this.handleShortlisted}>
										<h3>Shortlisted</h3>
										<div className="margin_close_icons">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/>
											</svg>
										</div>
									</div>
								}
							</div>
							<div>
								{
									!this.state.shortlisted &&
									<div className="normal_bordering" onClick={this.handleShortlisted}>
										<h3>Shortlisted</h3>
									</div>
								}
							</div>
						</div>
						<div>
							<div>
								{
									this.state.contacted &&
									<div className="special_bordering display" onClick={this.handleContacted}>
										<h3>Contacted</h3>
										<div className="margin_close_icons">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/>
											</svg>
										</div>
									</div>
								}
							</div>
							<div>
								{
									!this.state.contacted &&
									<div className="normal_bordering" onClick={this.handleContacted}>
										<h3>Contacted</h3>
									</div>
								}
							</div>
						</div>
						<div>
							<div>
								{
									this.state.scheduled &&
									<div className="special_bordering display" onClick={this.handleScheduled}>
										<h3>Scheduled</h3>
										<div className="margin_close_icons">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/>
											</svg>
										</div>
									</div>
								}
							</div>
							<div>
								{
									!this.state.scheduled &&
									<div className="normal_bordering" onClick={this.handleScheduled}>
										<h3>Scheduled</h3>
									</div>
								}
							</div>
						</div>
						<div>
							<div>
								{
									this.state.visited &&
									<div className="display special_bordering" onClick={this.handleVisited}>
										<h3>Visited</h3>
										<div className="margin_close_icons">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/>
											</svg>
										</div>
									</div>
								}
							</div>
							<div>
								{
									!this.state.visited &&
									<div className="normal_bordering" onClick={this.handleVisited}>
										<h3>Visited</h3>
									</div>
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MySearches;