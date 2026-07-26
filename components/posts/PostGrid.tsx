"use client";

import { useMemo, useState } from "react";
import PostCard from "@/components/posts/PostCard";

interface Post {
	id: number;
	title: string;
	author: string;
	date: string;
	image: string;
	content: string;
	category: string;
	description: string;
	slug: string;
}

const PAGE_SIZE = 6;

const PostGrid = ({ posts }: { posts: Post[] }) => {
	const [page, setPage] = useState(1);

	const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
	const currentPage = Math.min(page, totalPages);
	const visiblePosts = useMemo(
		() => posts.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE),
		[posts, currentPage]
	);

	if (posts.length === 0) {
		return <p>Ainda não há novidades publicadas.</p>;
	}

	return (
		<div className="blog-grid">
			<div className="row clearfix">
				{visiblePosts.map((post) => (
					<PostCard key={post.id} {...post} />
				))}
			</div>

			{totalPages > 1 && (
				<ul className="styled-pagination">
					<li className="prev">
						<a
							href="#"
							onClick={(e) => {
								e.preventDefault();
								setPage((p) => Math.max(1, p - 1));
							}}
						>
							Prev
						</a>
					</li>
					{Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
						<li key={p}>
							<a
								href="#"
								className={p === currentPage ? "active" : ""}
								onClick={(e) => {
									e.preventDefault();
									setPage(p);
								}}
							>
								{String(p).padStart(2, "0")}
							</a>
						</li>
					))}
					<li className="next">
						<a
							href="#"
							onClick={(e) => {
								e.preventDefault();
								setPage((p) => Math.min(totalPages, p + 1));
							}}
						>
							Next
						</a>
					</li>
				</ul>
			)}
		</div>
	);
};

export default PostGrid;
