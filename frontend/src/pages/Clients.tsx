import Table from "../components/ui/Table";
import Button from "../components/ui/Button";
import { clientsData } from "../data/dummyData";

const Clients = () => {
  const columns = ["Name", "Company", "Email", "Phone", "Actions"];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Clients</h2>
        <Button>Add Client</Button>
      </div>

      {/* Clients Table */}
      <div className="bg-white p-6 rounded shadow">
        <Table
          columns={columns}
          data={clientsData.map((client) => ({
            name: client.name,
            company: client.company,
            email: client.email,
            phone: client.phone,
          }))}
        />
      </div>
    </div>
  );
};

export default Clients;
