
import Link from "next/link";

export const metadata = {
    title: "404 - Página Não Encontrada",
};

export default function NotFound() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
            <h1 className="text-9xl font-extrabold tracking-widest text-gray-900 dark:text-white">
                404
            </h1>
            <div className="absolute rotate-12 rounded bg-[#FF6A3D] px-2 text-sm text-white shadow-lg">
                Página Não Encontrada
            </div>
            <div className="mt-5 text-center">
                <h3 className="text-2xl font-semibold md:text-3xl">
                    Desculpe, não conseguimos encontrar esta página.
                </h3>
                <p className="mt-4 mb-8 text-gray-500 dark:text-gray-400">
                    Mas não se preocupe, você pode encontrar muitas outras coisas em
                    nossa página inicial.
                </p>
                <Link
                    href="/"
                    className="group relative inline-block text-sm font-medium text-[#FF6A3D] focus:outline-none focus:ring active:text-orange-500"
                >
                    <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

                    <span className="relative block border border-current bg-[#1A2238] px-8 py-3 text-white">
                        Voltar para o Início
                    </span>
                </Link>
            </div>
        </div>
    );
}
