/* eslint-disable react/prop-types */

export default function Subtitle({ text, topText, tText }) {
  if (topText)
    return (
      <div className='text-left '>
        <p className='ml-3'>{tText}</p>
        <h2 className="ml-3  text-left text-xl font-semibold uppercase sm:text-3xl md:text-4xl">
          {text}
        </h2>
      </div>
    );
  return (
    <h2 className="ml-3  text-left text-xl font-semibold uppercase sm:text-3xl md:text-4xl">
      {text}
    </h2>
  );
}
