
import Link from "next/link";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex h-screen bg-gray-100 dark:bg-gray-900">
			{/* Sidebar */}
			<aside className="w-64 bg-white shadow-md dark:bg-gray-800 hidden md:block">
				<div className="p-6">
					<h1 className="text-2xl font-bold text-gray-800 dark:text-white">
						ZebraTravel
					</h1>
					<p className="text-sm text-gray-500 dark:text-gray-400">Dashboard</p>
				</div>
				<nav className="mt-6">
					<Link
						href="/dashboard"
						className="block px-6 py-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
					>
						Visão Geral
					</Link>
					<Link
						href="/dashboard/destinos"
						className="block px-6 py-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
					>
						Destinos
					</Link>
					<Link
						href="/dashboard/excursoes"
						className="block px-6 py-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
					>
						Excursões
					</Link>
					<Link
						href="/dashboard/posts"
						className="block px-6 py-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
					>
						Blog (Posts)
					</Link>
					<Link
						href="/dashboard/loja"
						className="block px-6 py-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
					>
						Loja
					</Link>
					<div className="my-4 border-t border-gray-200 dark:border-gray-700"></div>
					<Link
						href="/dashboard/bookings"
						className="block px-6 py-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
					>
						Reservas
					</Link>
					<Link
						href="/dashboard/users"
						className="block px-6 py-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
					>
						Usuários
					</Link>
					<Link
						href="/dashboard/settings"
						className="block px-6 py-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
					>
						Configurações
					</Link>
					<Link
						href="/dashboard/content"
						className="block px-6 py-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
					>
						Editor de Conteúdo
					</Link>
				</nav>
			</aside>

			{/* Main Content */}
			<div className="flex flex-1 flex-col overflow-hidden">
				{/* Topbar */}
				<header className="flex items-center justify-between bg-white px-6 py-4 shadow dark:bg-gray-800">
					<button className="text-gray-500 focus:outline-none md:hidden">
						{/* Mobile Menu Button Icon */}
						<svg
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
					<div className="flex items-center">
						<span className="text-gray-700 dark:text-gray-200">Admin</span>
						{/* User Avatar could go here */}
					</div>
				</header>

				{/* Page Content */}
				<main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6 dark:bg-gray-900">
					{children}
				</main>
			</div>
		</div>
	);
}
