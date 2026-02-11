
"use client";

import { useEffect, useState } from "react";
import { Tour } from "@/app/Dados/tourData";
import { destinosService } from "@/services/destinosService";
import Swal from "sweetalert2";

export default function DestinosPage() {
    const [tours, setTours] = useState<Tour[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadTours();
    }, []);

    const loadTours = async () => {
        setLoading(true);
        try {
            const data = await destinosService.getAll();
            setTours(data);
        } catch (error) {
            console.error("Error loading tours:", error);
            Swal.fire("Erro", "Erro ao carregar destinos", "error");
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
                await destinosService.delete(id);
                // Optimistic update or reload
                setTours(tours.filter((t) => t.id !== id));
                Swal.fire("Deletado!", "O destino foi deletado.", "success");
            } catch (error) {
                console.error("Error deleting tour:", error);
                Swal.fire("Erro", "Erro ao deletar destino", "error");
            }
        }
    };

    if (loading) {
        return <div className="p-6 text-gray-600 dark:text-gray-300">Carregando destinos...</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Gestão de Destinos
                </h1>
                <button
                    className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                    onClick={() => Swal.fire("Info", "Funcionalidade de Criar em breve", "info")}
                >
                    Novo Destino
                </button>
            </div>

            <div className="overflow-x-auto rounded-lg bg-white shadow dark:bg-gray-800">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300">
                                Imagem
                            </th>
                            <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300">
                                Título
                            </th>
                            <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300">
                                Categoria
                            </th>
                            <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300">
                                Tours
                            </th>
                            <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300">
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tours.map((tour) => (
                            <tr key={tour.id}>
                                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm dark:border-gray-700 dark:bg-gray-800">
                                    <div className="h-10 w-10 flex-shrink-0">
                                        <img
                                            className="h-full w-full rounded-full object-cover"
                                            src={tour.image}
                                            alt={tour.title}
                                        />
                                    </div>
                                </td>
                                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm dark:border-gray-700 dark:bg-gray-800">
                                    <p className="whitespace-no-wrap text-gray-900 dark:text-white">
                                        {tour.title}
                                    </p>
                                </td>
                                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm dark:border-gray-700 dark:bg-gray-800">
                                    <p className="whitespace-no-wrap text-gray-900 dark:text-white">
                                        {tour.category.join(", ")}
                                    </p>
                                </td>
                                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm dark:border-gray-700 dark:bg-gray-800">
                                    <p className="whitespace-no-wrap text-gray-900 dark:text-white">
                                        {tour.tours}
                                    </p>
                                </td>
                                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm dark:border-gray-700 dark:bg-gray-800">
                                    <div className="flex gap-2">
                                        <button
                                            className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                                            onClick={() => Swal.fire("Info", `Editar ${tour.title} (Em breve)`, "info")}
                                        >
                                            Editar
                                        </button>
                                        <button
                                            className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                                            onClick={() => handleDelete(tour.id)}
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
