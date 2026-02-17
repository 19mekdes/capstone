// Import types correctly
import type { Client } from "../types/client";
import type { Ticket } from "../types/ticket";
import type { Technician } from "../types/technician";

// Clients
export const clientsData: Client[] = [
  { id: 1, name: "John Doe", company: "ABC Corp", email: "john@abc.com", phone: "+251 911 123456" },
  { id: 2, name: "Sarah Lee", company: "XYZ Ltd", email: "sarah@xyz.com", phone: "+251 922 234567" },
  { id: 3, name: "Mike Johnson", company: "Global Tech", email: "mike@global.com", phone: "+251 933 345678" },
  { id: 4, name: "Alice Smith", company: "Tech Solutions", email: "alice@tech.com", phone: "+251 944 456789" },
  { id: 5, name: "David Brown", company: "Metro Enterprises", email: "david@metro.com", phone: "+251 955 567890" },
];

// Tickets
export const ticketsData: Ticket[] = [
  { id: 1, title: "Network Issue", client: "ABC Corp", status: "Open", assigned: "John Doe" },
  { id: 2, title: "Server Setup", client: "XYZ Ltd", status: "In Progress", assigned: "Sarah Lee" },
  { id: 3, title: "VPN Configuration", client: "Global Tech", status: "Closed", assigned: "Mike Johnson" },
  { id: 4, title: "Router Replacement", client: "Tech Solutions", status: "Open", assigned: "Alice Smith" },
  { id: 5, title: "Firewall Issue", client: "Metro Enterprises", status: "In Progress", assigned: "David Brown" },
];

// Technicians
export const techniciansData: Technician[] = [
  { id: 1, name: "John Doe", specialization: "Network", availability: "Available" },
  { id: 2, name: "Sarah Lee", specialization: "Server", availability: "Busy" },
  { id: 3, name: "Mike Johnson", specialization: "Security", availability: "Offline" },
  { id: 4, name: "Alice Smith", specialization: "Cloud", availability: "Available" },
  { id: 5, name: "David Brown", specialization: "Networking", availability: "Busy" },
];
