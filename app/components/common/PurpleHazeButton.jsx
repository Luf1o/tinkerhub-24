export function PurpleButton({link,buttonText}) {
    return (
        <button className="hover:bg-red-200 hover:text-black ease-in-out duration-500 bg-purple-500 text-md lg:text-3xl my-7 rounded-md px-3 py-2 lg:rounded-lg">
            <a href={link} target="_blank"> {buttonText}</a>
        </button>
    )
}