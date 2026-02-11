
"use client";

import { useEffect, useState } from "react";
import { posts } from "@/app/Dados/postsData"; // Import type inference/mock
import { postsService } from "@/services/postsService";
import Swal from "sweetalert2";

export default function PostsPage() {
	const [blogPosts, setBlogPosts] = useState<typeof posts>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		loadPosts();
	}, []);

	const loadPosts = async () => {
		setLoading(true);
		try {
			const data = await postsService.getAll();
			setBlogPosts(data);
		} catch (error) {
			console.error("Error loading posts:", error);
			Swal.fire("Erro", "Erro ao carregar posts", "error");
		} finally {
			setLoading(false);
		}
	};

    const handleDelete = async (id: number) => {
        const result = await Swal.fire({
            title: "Tem certeza?",
            text: "Você não poderá reverter isso!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim, deletar!",
        });

        if (result.isConfirmed) {
            try {
                await postsService.delete(id);
                setBlogPosts(blogPosts.filter((p) => p.id !== id));
                Swal.fire("Deletado!", "O post foi deletado.", "success");
            } catch (error) {
                console.error("Error deleting post:", error);
                Swal.fire("Erro", "Erro ao deletar post", "error");
            }
        }
    };

	if (loading) {
		return <div className="p-6 text-gray-600 dark:text-gray-300">Carregando posts...</div>;
	}

	return (
		<div className="container mx-auto p-6">
			<div className="mb-6 flex items-center justify-between">
				<h1 className="text-2xl font-bold text-gray-800 dark:text-white">
					Gestão de Posts (Blog)
				</h1>
				<button
					className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
					onClick={() => Swal.fire("Info", "Funcionalidade de Criar em breve", "info")}
				>
					Novo Post
				</button>
			</div>

			<div className="overflow-x-auto rounded-lg bg-white shadow dark:bg-gray-800">
				<table className="min-w-full leading-normal">
					<thead>
						<tr>
							<th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300">
								Título
							</th>
							<th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300">
								Autor
							</th>
							<th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300">
								Data
							</th>
							<th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300">
								Categoria
							</th>
                            <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300">
								Ações
							</th>
						</tr>
					</thead>
					<tbody>
						{blogPosts.map((post) => (
							<tr key={post.id}>
								<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm dark:border-gray-700 dark:bg-gray-800">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 flex-shrink-0 mr-3">
                                            <img className="h-full w-full rounded-full object-cover" src={post.image} alt="" />
                                        </div>
                                        <p className="whitespace-no-wrap text-gray-900 dark:text-white">
                                            {post.title}
                                        </p>
                                    </div>
								</td>
								<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm dark:border-gray-700 dark:bg-gray-800">
									<p className="whitespace-no-wrap text-gray-900 dark:text-white">
										{post.author}
									</p>
								</td>
								<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm dark:border-gray-700 dark:bg-gray-800">
									<p className="whitespace-no-wrap text-gray-900 dark:text-white">
										{post.date}
									</p>
								</td>
								<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm dark:border-gray-700 dark:bg-gray-800">
									<span className="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight">
                                        <span aria-hidden className="absolute inset-0 bg-blue-200 opacity-50 rounded-full"></span>
                                        <span className="relative">{post.category}</span>
                                    </span>
								</td>
                                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm dark:border-gray-700 dark:bg-gray-800">
									<div className="flex gap-2">
										<button
                                            className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                                            onClick={() => Swal.fire("Info", `Editar ${post.title}`, "info")}
                                        >
											Editar
										</button>
										<button
											className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
											onClick={() => handleDelete(post.id)}
										>
											Deletar
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
