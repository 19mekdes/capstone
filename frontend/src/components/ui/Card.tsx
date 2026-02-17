interface CardProps {
  title: string;
  value: number;
  color: string;
}

const Card = ({ title, value, color }: CardProps) => {
  return (
    <div className={`p-6 rounded shadow text-white ${color}`}>
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
};

export default Card;
