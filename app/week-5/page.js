import NewItem from "./new-item.js";

export default function Page() {
  return (
      <div className="p-6 mt-6 bg-gray-200 rounded-2xl shadow-xl w-96 h-190 flex flex-col justify-center items-center">
        <NewItem />
      </div>
  );
}
