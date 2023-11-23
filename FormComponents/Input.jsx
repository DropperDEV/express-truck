/* eslint-disable react/prop-types */

export default function Input({ inputType }) {
    if (inputType === 'big') return (<textarea
        className="resize-none bg-gray-1000"
        cols="25"
        rows="5"
    ></textarea>)
    return (
        <input type="text" className="w-fit bg-gray-1000 px-8 py-3" />
    )
}