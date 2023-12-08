/* eslint-disable react/prop-types */
import TitleShadow from './../../ui/TitleShadow';
import Subtitle from './../partners/Subtitle';

export default function AccountCol({ title, main }) {
  return (
    <div className="flex flex-col gap-4">
      <TitleShadow>
        <Subtitle text={title} />
      </TitleShadow>
      {main}
    </div>
  );
}
