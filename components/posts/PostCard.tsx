type PostCardProps = {
	title: string;
	author: string;
	date: string;
	image: string;
	category: string;
	description: string;
	slug: string;
};

const PostCard = ({
	title,
	author,
	date,
	image,
	category,
	description,
	slug,
}: PostCardProps) => {
	return (
		<div className="news-block-one col-xl-6 col-lg-12 col-md-6 col-sm-12">
			<div className="inner-box">
				<div className="image-box">
					<div className="image">
						<a href={`/posts/${slug}`}>
							<img src={image} alt={title} />
						</a>
					</div>
					<div className="cat">
						<span>{category}</span>
					</div>
				</div>
				<div className="lower-content">
					<div className="info">
						<span className="i-block">Por: {author}</span> &ensp; | &ensp;
						<span className="i-block">{date}</span>
					</div>
					<h4>
						<a href={`/posts/${slug}`}>{title}</a>
					</h4>
					<div className="text">{description}</div>
				</div>
			</div>
		</div>
	);
};

export default PostCard;
