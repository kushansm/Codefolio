function Card({ title, iconName }) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4 rounded-lg shadow-md bg-white text-black hover:bg-slate-300 h-[200px] space-y-4 transition duration-300 animate-slide-in">
      <span className="text-5xl">{iconName}</span>
      <h4 className="text-2xl font-bold">{title}</h4>
    </div>
  );
}

export default Card;
