export interface Ticket {
  id: number;
  title: string;
  client: string;
  status: "Open" | "In Progress" | "Closed";
  assigned: string;
}