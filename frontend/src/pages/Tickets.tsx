import Table from "../components/ui/Table";
import Button from "../components/ui/Button";
import { ticketsData } from "../data/dummyData";

const Tickets = () => {
  const columns = ["Title", "Client", "Status", "Assigned To", "Actions"];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Support Tickets</h2>
        <Button>Add Ticket</Button>
      </div>

      {/* Tickets Table */}
      <div className="bg-white p-6 rounded shadow">
        <Table
          columns={columns}
          data={ticketsData.map((ticket) => ({
            ticket: ticket.title,
            client: ticket.client,
            status: ticket.status,
            assigned: ticket.assigned,
          }))}
        />
      </div>
    </div>
  );
};

export default Tickets;
