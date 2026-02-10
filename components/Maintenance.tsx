import React from "react";

const Maintenance = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-4">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
                <div className="mb-6">
                    <svg
                        className="w-20 h-20 mx-auto text-yellow-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                    </svg>
                </div>
                <h1 className="text-3xl font-bold mb-4 text-gray-900">
                    Em Manutenção
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    Estamos realizando algumas melhorias. Voltaremos em breve!
                </p>
                <div className="border-t border-gray-200 pt-6">
                    <p className="text-sm text-gray-500">
                        Agradecemos a sua paciência.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Maintenance;
