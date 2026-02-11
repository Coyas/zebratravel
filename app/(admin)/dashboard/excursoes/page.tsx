
"use client";

import { useEffect, useState } from "react";
import { Excursao } from "@/app/Dados/excurcoesData";
import { excursoesService } from "@/services/excursoesService";
import Swal from "sweetalert2";

export default function ExcursoesPage() {
	const [excursoes, setExcursoes] = useState<Excursao[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		loadExcursoes();
	}, []);

	const loadExcursoes = async () => {
		setLoading(true);
		try {
			const data = await excursoesService.getAll();
			setExcursoes(data);
		} catch (error) {
			console.error("Error loading excursions:", error);
			Swal.fire("Erro", "Erro ao carregar excursões", "error");
		} finally {
			setLoading(false);
		}
	};

    const handleDelete = async (slug: string) => {
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
				await excursoesService.delete(slug);
				setExcursoes(excursoes.filter((e) => e.slug !== slug));
				Swal.fire("Deletado!", "A excursão foi deletada.", "success");
			} catch (error) {
				console.error("Error deleting excursion:", error);
				Swal.fire("Erro", "Erro ao deletar excursão", "error");
			}
		}
	};

	if (loading) {
		return <div className="p-6 text-gray-600 dark:text-gray-300">Carregando excursões...</div>;
	}

	return (
		<div className="container mx-auto p-6">
			<div className="mb-6 flex items-center justify-between">
				<h1 className="text-2xl font-bold text-gray-800 dark:text-white">
					Gestão de Excursões
				</h1>
				<button
					className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
					onClick={() => Swal.fire("Info", "Funcionalidade de Criar em breve", "info")}
				>
					Nova Excursão
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
								Preço
							</th>
							<th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300">
								Duração
							</th>
							<th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300">
								Avaliação
							</th>
                            <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300">
								Ações
							</th>
						</tr>
					</thead>
					<tbody>
						{excursoes.map((excursao) => (
							<tr key={excursao.slug + excursao.title}>
								<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm dark:border-gray-700 dark:bg-gray-800">
									<div className="flex items-center">
                                        <div className="h-10 w-10 flex-shrink-0 mr-3">
                                            <img className="h-full w-full rounded-full object-cover" src={excursao.image} alt="" />
                                        </div>
										<p className="whitespace-no-wrap text-gray-900 dark:text-white">
											{excursao.title}
										</p>
									</div>
								</td>
								<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm dark:border-gray-700 dark:bg-gray-800">
									<p className="whitespace-no-wrap text-gray-900 dark:text-white">
										${excursao.price}
									</p>
								</td>
								<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm dark:border-gray-700 dark:bg-gray-800">
									<p className="whitespace-no-wrap text-gray-900 dark:text-white">
										{excursao.duration}
									</p>
								</td>
								<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm dark:border-gray-700 dark:bg-gray-800">
									<span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                        <span className="relative">{excursao.rating} ★</span>
                                    </span>
								</td>
                                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm dark:border-gray-700 dark:bg-gray-800">
									<div className="flex gap-2">
										<button
                                            className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                                            onClick={() => Swal.fire("Info", `Editar ${excursao.title}`, "info")}
                                        >
											Editar
										</button>
										<button
											className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
											onClick={() => handleDelete(excursao.slug)}
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
