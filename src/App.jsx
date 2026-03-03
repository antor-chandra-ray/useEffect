import Data from "./Components/Home/data";
import Home from "./Components/Home/Home";
import Api from "./Components/Api_box/Api";

function App() {
  const Details = [
    {
      name: "abul",
      district: "Kurigram",
      village: "kumarpara",
      mobile: 11550525,
    },
    {
      name: "somiron",
      district: "lalmoni",
      village: "daktarpara",
      mobile: 440525,
    },
    {
      name: "sujoy",
      district: "rangpur",
      village: "dindkfjf",
      mobile: 5588885,
    },
  ];
  //const arrys = ["Rahim", "karim", "jadu", "madu", "kodu"];
  // const foralert = () => {
  //   alert("Your alert is ok");
  // };

  /*
  
  
  const update = () => {
    const [values, data] = useState[0];
    const newValues = values + 1;
    data(newValues);
  };
  
  */
  return (
    <>
      {/* {Details.map((data) => (
        <Home details={data} newAlert={foralert} key={"ids"}></Home>
      ))}
      <h1>Hello My App</h1>*/}

      <Api></Api>
    </>
  );
}

export default App;
