const CommentsForm = () => {
	return (
		<>
			<div className="comment-form">
				<div className="group-title">
					<h4>Deixe um comentario</h4>
				</div>

				{/* <!--Comment Form--> */}
				<form method="post" action="blog.html">
					<div className="row clearfix">
						<div className="col-lg-6 col-md-6 col-sm-12 form-group">
							<input
								type="text"
								name="username"
								placeholder="Seu nome*"
								required
							/>
						</div>

						<div className="col-lg-6 col-md-6 col-sm-12 form-group">
							<input
								type="email"
								name="email"
								placeholder="Seu email*"
								required
							/>
						</div>

						<div className="col-lg-12 col-md-12 col-sm-12 form-group">
							<textarea
								className=""
								name="message"
								placeholder="Escreva a Mensagem"
							></textarea>
						</div>

						<div className="col-lg-12 col-md-12 col-sm-12 form-group">
							<button className="theme-btn btn-style-two">
								<span className="txt">
									Comentar <i className="fa fa-angle-right"></i>
								</span>
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default CommentsForm;
