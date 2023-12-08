import FormTitle from "./FormTitle";
import FormMain from "./FormMain";

export default function Form() {
  return (
    <form
      action=""
      className="flex w-full flex-col items-center justify-center gap-6 bg-gray-1100 p-16"
    >
      <FormTitle />

      <FormMain/>
    </form>
  );
}
