export interface Technician {
  id: number;
  name: string;
  specialization: string;
  availability: "Available" | "Busy" | "Offline";
}