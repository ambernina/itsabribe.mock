import React from "react";

const Contact = () => {
	return (
		<div className="container">
			<form id="contact-form" method="post" action="contact.php">
				<div className="messages"></div>
				<div className="controls">
					<div className="row" style={{paddingBottom: "15px"}}>
						<div className="col-md-6">
							<div className="form-group">
								<label htmlFor="form_name">Firstname *</label>
								<input
									id="form_name"
									type="text"
									name="name"
									className="form-control"
									placeholder="Please enter your firstname *"
									required="required"
									data-error="Firstname is required."
								/>
								<div className="help-block with-errors"></div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label htmlFor="form_lastname">Lastname *</label>
								<input
									id="form_lastname"
									type="text"
									name="surname"
									className="form-control"
									placeholder="Please enter your lastname *"
									required="required"
									data-error="Lastname is required."
								/>
								<div className="help-block with-errors"></div>
							</div>
						</div>
					</div>
					<div className="row" style={{paddingBottom: "15px"}}>
						<div className="col-md-6">
							<div className="form-group">
								<label htmlFor="form_email">Email *</label>
								<input
									id="form_email"
									type="email"
									name="email"
									className="form-control"
									placeholder="Please enter your email *"
									required="required"
									data-error="Valid email is required."
								/>
								<div className="help-block with-errors"></div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label htmlFor="form_need">Please specify your need *</label>
								<select
									id="form_need"
									name="need"
									className="form-control"
									required="required"
									data-error="Please specify your need."
								>
									<option value=""></option>
									<option value="Request quotation">Request quotation</option>
									<option value="Request order status">
										Request order status
									</option>
									<option value="Request copy of an invoice">
										Request copy of an invoice
									</option>
									<option value="Other">Other</option>
								</select>
								<div className="help-block with-errors"></div>
							</div>
						</div>
					</div>
					<div className="row" style={{paddingBottom: "15px"}}>
						<div className="col-md-12">
							<div className="form-group">
								<label htmlFor="form_message">Message *</label>
								<textarea
									id="form_message"
									name="message"
									className="form-control"
									placeholder="Message for me *"
									rows="4"
									required="required"
									data-error="Please, leave us a message."
								></textarea>
								<div className="help-block with-errors"></div>
							</div>
						</div>
						<div className="col-md-12">
							<input
								type="submit"
								className="btn btn-success btn-send"
                value="Send message"
                style={{marginTop: "15px"}}
							/>
						</div>
					</div>
					<div className="row" style={{paddingBottom: "15px"}}>
						<div className="col-md-12">
							<p className="text-muted">
								<strong>*</strong> These fields are required. Contact form
								template by
								<a
									href="https://bootstrapious.com/p/how-to-build-a-working-bootstrap-contact-form"
									target="_blank"
									rel="noopener noreferrer"
								>
									Bootstrapious
								</a>
								.
							</p>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Contact;
