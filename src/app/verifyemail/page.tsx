import Layout from "../layout/Layout";
import Button from "../components/button";

export default function EmailVerifaction() {
    return (
        <Layout>
            <main className="relative min-h-screen flex flex-col justify-center overflow-hidden">
                <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
                    <div className="flex justify-center">

                        <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
                            <header className="mb-8">
                                <h1 className="text-2xl font-bold mb-1">Verify your email</h1>
                                <p className="text-[15px] text-slate-500">Enter the 8-digit verification code that was sent to your email.</p>
                            </header>
                            <span className="flex my-2">Code</span>
                            <form id="otp-form">
                                <div className="flex items-center justify-center gap-3">
                                    <input
                                        type="text"
                                        className="w-10 h-10 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                        pattern="\d*" maxLength={1} />
                                    <input
                                        type="text"
                                        className="w-10 h-10 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                        maxLength={1} />
                                    <input
                                        type="text"
                                        className="w-10 h-10 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                        maxLength={1} />
                                    <input
                                        type="text"
                                        className="w-10 h-10 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                        maxLength={1} />
                                    <input
                                        type="text"
                                        className="w-10 h-10 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                        maxLength={1} />
                                    <input
                                        type="text"
                                        className="w-10 h-10 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                        maxLength={1} />
                                    <input
                                        type="text"
                                        className="w-10 h-10 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                        maxLength={1} />
                                    <input
                                        type="text"
                                        className="w-10 h-10 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                        maxLength={1} />
                                </div>
                                <div className="max-w-[260px] mx-auto mt-4">
                                   <Button name="VerifyAccount"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )

}