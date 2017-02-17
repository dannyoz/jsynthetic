<template>
	<div class="contact-form">
		<div class="container">
			<h3>Get in touch</h3>
			<form v-if="!sending && !sent" @submit="sendMessage">
				<div class="text">
					<input @keyup="validate('name')" type="text" name="name" placeholder="Name" v-model="name">
					<p class="error" v-if="!validName && showErrors">{{nameMessage}}</p>
				</div>
				<div class="text">
					<input @keyup="validate('email')" type="text" name="email" placeholder="Email" v-model="email">
					<p class="error" v-if="!validEmail && showErrors">Please enter a valid email address</p>
				</div>
				<div class="textarea">
					<textarea @keyup="validate('message')" name="message" placeholder="Message" v-model="message"></textarea>
					<p class="error" v-if="!validMessage && showErrors">{{messageMessage}}</p>
				</div>
				<div class="btn-wrapper">
					<button type="submit" :class="{'disabled': !validName && !validEmail && !validMessage}">Submit</button>
				</div>
			</form>
			<div v-if="sending">
				<p>Loading</p>
			</div>
			<div v-if="sent">
				<p>{{status}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import apiService from '../../shared/api-service.js';
	const regex = {
		'EMAIL_PATTERN': /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?)*$/,
		'HTML_TAG_PATTERN': /(<([^>]+)>)/ig
	};
	var Api = new apiService();
	var acceptedLength = 3;

	export default {
		data () {
		    return {
			    name: '',
			    email: '',
			    message: '',
			    sending: false,
			    sent: false,
			    status: "",
			    validName: false,
			    validEmail: false,
			    validMessage: false,
			    showErrors: false,
			    nameMessage: "Please enter your name",
			    messageMessage: "Your message is too short"
		    }
		},
	 	methods: {
		  	validate(input) {
		  		if (input === 'name' && this.name.length > acceptedLength && !regex.HTML_TAG_PATTERN.test(this.name)) {
		  			this.validName = true;
		  			this.nameMessage = "Please enter your name";
		  		};
		  		if (input === 'name' && this.name.length > acceptedLength && regex.HTML_TAG_PATTERN.test(this.name)) {
		  			this.validName = false;
		  			this.nameMessage = "HTML tags are not allowed";
		  		};
		  		if (input === 'email' && regex.EMAIL_PATTERN.test(this.email)) {
		  			this.validEmail = true;
		  		};
		  		if (input === 'message' && this.message.length > acceptedLength && !regex.HTML_TAG_PATTERN.test(this.message)) {
		  			this.validMessage = true;
		  			this.messageMessage = "Your message is too short";
		  		};
		  		if (input === 'message' && this.message.length > acceptedLength && regex.HTML_TAG_PATTERN.test(this.message)) {
		  			this.validMessage = false;
		  			this.messageMessage = "HTML tags are not allowed";
		  		};
		  	},
		  	sendMessage(e) {
		  		e.preventDefault();

		  		if(this.validName && this.validEmail && this.validMessage) {

			  		var self = this;
			  		this.sending = true;

			  		var data = {
						"name": this.name,
						"email": this.email,
						"message": this.message
					};

			  		Api.post('/sendmessage',data).end(function(err,data){
			  			if(err){
			  				self.status = "Sorry, there was an error. Please try again later";
			  			} else {
			  				self.sending = false;
			  				self.sent = true;
			  				self.status = "Thanks for your message";
			  			}
			  		});
			  	} else {
			  		this.showErrors = true;
			  	}
		  	},
	  	}
	};
</script>
