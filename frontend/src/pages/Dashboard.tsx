import Card from "../components/ui/Card";
 import Table from "../components/ui/Table";

const Dashboard = () => {
  const stats = [
    { title: "Total Clients", value: 320, color: "bg-blue-400" },
    { title: "Active Projects", value: 28, color: "bg-green-400" },
    { title: "Open Tickets", value: 15, color: "bg-orange-400" },
    { title: "Monthly Tickets", value: 120, color: "bg-purple-400" },
  ];

  const ticketsData = [
    {
      ticket: "Network Issue",
      client: "ABC Corp",
      status: "Open",
      assigned: "John Doe",
    },
    {
      ticket: "Server Setup",
      client: "XYZ Ltd",
      status: "In Progress",
      assigned: "Sarah Lee",
    },
    {
      ticket: "VPN Configuration",
      client: "Global Tech",
      status: "Closed",
      assigned: "Mike Johnson",
    },
  ];

  const columns = ["Ticket", "Client", "Status", "Assigned To", "Actions"];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <Card key={s.title} title={s.title} value={s.value} color={s.color} />
        ))}
      </div>

      {/* Tickets Table */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Recent Support Tickets</h2>
        <Table columns={columns} data={ticketsData} />
      </div>
    </div>
  );
};

export default Dashboard;
