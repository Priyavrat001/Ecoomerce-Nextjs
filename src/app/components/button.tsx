
type Props = {
    name:string
}

export default function Button({name}:Props){
    return(
        <button type="submit"
        className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-black px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 my-5">
        {name}</button>
    )
}