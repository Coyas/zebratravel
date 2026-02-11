
"use client";

import { useEffect, useState } from "react";
import { User, usersService } from "@/services/usersService";
import Swal from "sweetalert2";

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        setLoading(true);
        try {
            const data = await usersService.getAll();
            setUsers(data);
        } catch (error) {
            console.error("Error loading users:", error);
            Swal.fire("Erro", "Erro ao carregar usuários", "error");
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
                await usersService.delete(id);
                setUsers(users.filter((u) => u.id !== id));
                Swal.fire("Deletado!", "O usuário foi deletado.", "success");
            } catch (error) {
                console.error("Error deleting user:", error);
                Swal.fire("Erro", "Erro ao deletar usuário", "error");
            }
        }
    };

    if (loading) {
        return <div className="p-6 text-gray-600 dark:text-gray-300">Carregando usuários...</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Gestão de Usuários
                </h1>
                <button
                    className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                    onClick={() => Swal.fire("Info", "Funcionalidade de Criar em breve", "info")}
                >
                    Novo Usuário
                </button>
            </div>

            <div className="overflow-x-auto rounded-lg bg-white shadow dark:bg-gray-800">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300">
                                Nome
                            </th>
                            <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300">
                                Email
                            </th>
                            <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300">
                                Role
                            </th>
                            <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300">
                                Status
                            </th>
                            <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300">
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm dark:border-gray-700 dark:bg-gray-800">
                                    <p className="whitespace-no-wrap font-medium text-gray-900 dark:text-white">
                                        {user.name}
                                    </p>
                                </td>
                                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm dark:border-gray-700 dark:bg-gray-800">
                                    <p className="whitespace-no-wrap text-gray-900 dark:text-white">
                                        {user.email}
                                    </p>
                                </td>
                                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm dark:border-gray-700 dark:bg-gray-800">
                                    <p className="whitespace-no-wrap text-gray-900 dark:text-white">
                                        {user.role}
                                    </p>
                                </td>
                                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm dark:border-gray-700 dark:bg-gray-800">
                                    <span className={`relative inline-block px-3 py-1 font-semibold leading-tight ${user.status === 'Active' ? 'text-green-900' : 'text-red-900'}`}>
                                        <span aria-hidden className={`absolute inset-0 opacity-50 rounded-full ${user.status === 'Active' ? 'bg-green-200' : 'bg-red-200'}`}></span>
                                        <span className="relative">{user.status}</span>
                                    </span>
                                </td>
                                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm dark:border-gray-700 dark:bg-gray-800">
                                    <div className="flex gap-2">
                                        <button
                                            className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                                            onClick={() => Swal.fire("Info", `Editar ${user.name}`, "info")}
                                        >
                                            Editar
                                        </button>
                                        <button
                                            className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                                            onClick={() => handleDelete(user.id)}
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
