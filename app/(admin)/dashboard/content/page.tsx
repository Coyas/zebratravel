"use client";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getAllContent, updateAllContent } from "@/app/actions/content";

export default function ContentEditorPage() {
    const [content, setContent] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadContent();
    }, []);

    const loadContent = async () => {
        setLoading(true);
        const data = await getAllContent();
        setContent(data);
        setLoading(false);
    };

    const handleChange = (section: string, subSection: string, field: string, value: string) => {
        setContent((prev: any) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [subSection]: {
                    ...prev[section][subSection],
                    [field]: value
                }
            }
        }));
    };

    const handleAboutItemChange = (index: number, value: string) => {
        setContent((prev: any) => {
            const newItems = [...prev.home.about.items];
            newItems[index] = value;
            return {
                ...prev,
                home: {
                    ...prev.home,
                    about: {
                        ...prev.home.about,
                        items: newItems
                    }
                }
            };
        });
    };

    const handleSave = async () => {
        try {
            const result = await updateAllContent(content);
            if (result.success) {
                Swal.fire("Sucesso", "Conteúdo atualizado com sucesso!", "success");
            } else {
                Swal.fire("Erro", "Falha ao atualizar conteúdo", "error");
            }
        } catch (error) {
            console.error("Error saving content:", error);
            Swal.fire("Erro", "Ocorreu um erro inesperado", "error");
        }
    };

    if (loading) {
        return <div className="p-6">Carregando conteúdo...</div>;
    }

    if (!content) {
        return <div className="p-6">Nenhum conteúdo encontrado.</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <header className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Editor de Conteúdo Estático</h1>
                    <p className="text-gray-500 dark:text-gray-400">Edite os textos fixos de todo o site aqui.</p>
                </div>
                <button
                    onClick={handleSave}
                    className="rounded-lg bg-blue-600 px-6 py-2.5 font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                    Salvar Alterações
                </button>
            </header>

            <div className="grid gap-8">
                {/* Home Page - Banner Section */}
                <section className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <h2 className="mb-4 flex items-center text-xl font-bold text-gray-800 dark:text-white">
                        <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">1</span>
                        Home Page - Banner
                    </h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Subtítulo (Destaque)</label>
                            <input
                                type="text"
                                value={content.home.banner.subtitle}
                                onChange={(e) => handleChange('home', 'banner', 'subtitle', e.target.value)}
                                className="w-full rounded-lg border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            />
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Título Principal</label>
                            <input
                                type="text"
                                value={content.home.banner.title}
                                onChange={(e) => handleChange('home', 'banner', 'title', e.target.value)}
                                className="w-full rounded-lg border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Texto Descritivo</label>
                            <textarea
                                value={content.home.banner.text}
                                onChange={(e) => handleChange('home', 'banner', 'text', e.target.value)}
                                rows={3}
                                className="w-full rounded-lg border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            />
                        </div>
                    </div>
                </section>

                {/* Home Page - About Section */}
                <section className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <h2 className="mb-4 flex items-center text-xl font-bold text-gray-800 dark:text-white">
                        <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300">2</span>
                        Home Page - Sobre Nós
                    </h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Subtítulo</label>
                            <input
                                type="text"
                                value={content.home.about.subtitle}
                                onChange={(e) => handleChange('home', 'about', 'subtitle', e.target.value)}
                                className="w-full rounded-lg border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            />
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Título</label>
                            <input
                                type="text"
                                value={content.home.about.title}
                                onChange={(e) => handleChange('home', 'about', 'title', e.target.value)}
                                className="w-full rounded-lg border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Texto Principal</label>
                            <textarea
                                value={content.home.about.text}
                                onChange={(e) => handleChange('home', 'about', 'text', e.target.value)}
                                rows={4}
                                className="w-full rounded-lg border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Lista de Diferenciais</label>
                            <div className="grid gap-2">
                                {content.home.about.items.map((item: string, idx: number) => (
                                    <input
                                        key={idx}
                                        type="text"
                                        value={item}
                                        onChange={(e) => handleAboutItemChange(idx, e.target.value)}
                                        className="w-full rounded-lg border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer Section */}
                <section className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <h2 className="mb-4 flex items-center text-xl font-bold text-gray-800 dark:text-white">
                        <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300">3</span>
                        Rodapé (Footer)
                    </h2>
                    <div className="grid gap-4">
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Texto Sobre a Empresa</label>
                            <textarea
                                value={content.footer.companyInfo.text}
                                onChange={(e) => {
                                    setContent((prev: any) => ({
                                        ...prev,
                                        footer: {
                                            ...prev.footer,
                                            companyInfo: { ...prev.footer.companyInfo, text: e.target.value }
                                        }
                                    }));
                                }}
                                rows={3}
                                className="w-full rounded-lg border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            />
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Copyright</label>
                            <input
                                type="text"
                                value={content.footer.copyright}
                                onChange={(e) => {
                                    setContent((prev: any) => ({
                                        ...prev,
                                        footer: {
                                            ...prev.footer,
                                            copyright: e.target.value
                                        }
                                    }));
                                }}
                                className="w-full rounded-lg border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            />
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="flex items-center text-xl font-bold text-gray-800 dark:text-white">
                            <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300">4</span>
                            FAQs
                        </h2>
                    </div>
                    {content.faq.map((tab: any, tabIdx: number) => (
                        <div key={tabIdx} className="mb-6 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                            <h3 className="mb-3 font-semibold text-gray-700 dark:text-gray-300">Categoria: {tab.label}</h3>
                            <div className="grid gap-4">
                                {tab.faqs.map((f: any, faqIdx: number) => (
                                    <div key={faqIdx} className="grid gap-2 border-b border-gray-50 pb-4 last:border-0 dark:border-gray-700">
                                        <input
                                            type="text"
                                            placeholder="Pergunta"
                                            value={f.question}
                                            onChange={(e) => {
                                                const newFaq = [...content.faq];
                                                newFaq[tabIdx].faqs[faqIdx].question = e.target.value;
                                                setContent({ ...content, faq: newFaq });
                                            }}
                                            className="w-full rounded-lg border-gray-300 bg-gray-50 p-2 text-sm font-medium dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                        />
                                        <textarea
                                            placeholder="Resposta"
                                            value={f.answer}
                                            onChange={(e) => {
                                                const newFaq = [...content.faq];
                                                newFaq[tabIdx].faqs[faqIdx].answer = e.target.value;
                                                setContent({ ...content, faq: newFaq });
                                            }}
                                            className="w-full rounded-lg border-gray-300 bg-gray-50 p-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>

                {/* Terms Section */}
                <section className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <h2 className="mb-4 flex items-center text-xl font-bold text-gray-800 dark:text-white">
                        <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300">5</span>
                        Termos e Condições
                    </h2>
                    <div className="grid gap-6">
                        {content.terms.map((term: any, idx: number) => (
                            <div key={idx} className="grid gap-2 border-b border-gray-100 pb-4 last:border-0 dark:border-gray-700">
                                <input
                                    type="text"
                                    value={term.title}
                                    onChange={(e) => {
                                        const newTerms = [...content.terms];
                                        newTerms[idx].title = e.target.value;
                                        setContent({ ...content, terms: newTerms });
                                    }}
                                    className="w-full rounded-lg border-gray-300 bg-gray-50 p-2.5 font-bold dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                />
                                <textarea
                                    value={term.text}
                                    onChange={(e) => {
                                        const newTerms = [...content.terms];
                                        newTerms[idx].text = e.target.value;
                                        setContent({ ...content, terms: newTerms });
                                    }}
                                    rows={4}
                                    className="w-full rounded-lg border-gray-300 bg-gray-50 p-2.5 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
