import "./styles.css";

export default function App() {
  const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  console.log(data);
  return (
    <div className="App">
      <div className="con" >
        {data.map((item, index) => (
          <div className="incon" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
