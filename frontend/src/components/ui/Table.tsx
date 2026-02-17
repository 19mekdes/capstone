interface TableProps {
  columns: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
}

const Table = ({ columns, data }: TableProps) => {
  return (
    <table className="min-w-full border border-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {columns.map((col) => (
            <th
              key={col}
              className="text-left px-4 py-2 border-b border-gray-200"
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} className="hover:bg-gray-50">
            <td className="px-4 py-2">{row.ticket}</td>
            <td className="px-4 py-2">{row.client}</td>
            <td className="px-4 py-2">{row.status}</td>
            <td className="px-4 py-2">{row.assigned}</td>
            <td className="px-4 py-2 space-x-2">
              <button className="bg-blue-500 text-white px-2 py-1 rounded">
                Edit
              </button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
