function Square({ value }) {
  return (
    <button className="bg-white border border-gray-800 h-14 w-14 m-1 leading-9 font-bold text-lg">
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div>
        <Square value="1" />
        <Square value="1" />
        <Square value="1" />
      </div>

      <div>
        <Square value="1" />
        <Square value="1" />
        <Square value="1" />
      </div>

      <div>
        <Square value="1" />
        <Square value="1" />
        <Square value="1" />
      </div>
    </>
  );
}
