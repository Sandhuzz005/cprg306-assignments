import NewItem from "./new-item.js";

export default function Page() {
  return (
      <div className="p-6 bg-gray-600 rounded-2xl shadow-xl w-96 h-72 flex flex-col justify-center items-center">
        <NewItem />
      </div>
  );
}
