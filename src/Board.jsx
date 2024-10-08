function Square() {
  return (
    <button className="bg-white border border-gray-800 h-12 w-12 m-1 leading-9 text-lg">
      X
    </button>
  );
}
export default function Board() {
  return (
    <div className="grid grid-cols-3 h-44 w-44">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
}
