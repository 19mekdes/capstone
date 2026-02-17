import Table from "../components/ui/Table";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import { techniciansData } from "../data/dummyData";

const Technicians = () => {
  const columns = ["Name", "Specialization", "Availability", "Actions"];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Technicians</h2>
        <Button>Add Technician</Button>
      </div>

      {/* Technicians Table */}
      <div className="bg-white p-6 rounded shadow">
        <Table
          columns={columns}
          data={techniciansData.map((tech) => ({
            name: tech.name,
            specialization: tech.specialization,
            availability: <Badge status={tech.availability} />,
          }))}
        />
      </div>
    </div>
  );
};

export default Technicians;
