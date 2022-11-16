import { useState } from "react";
import Banner from "./components/Banner"
import Positions from "./components/Positions";
import FormContainer from "./components/Form/FormContainer"
import Footer from "./components/Footer";

function App() {

  const roles = [
    {
      name: "Top",
      primaryColor: "#57c278",
      secundaryColor: "#d9f7e9"
    }, {
      name: "Jungle",
      primaryColor: "#82cffa",
      secundaryColor: "#e8f8ff"
    }, {
      name: "Mid",
      primaryColor: "#a6d157",
      secundaryColor: "#f0f8e2"
    }, {
      name: "Bot",
      primaryColor: "#e06b69",
      secundaryColor: "#fde7e8"
    }, {
      name: "Suporte",
      primaryColor: "#db6ebf",
      secundaryColor: "#fae9f5"
    }
  ]

  const [champions, setChampions] = useState([])

  const onNewComp = (champion) => {
    setChampions([...champions, champion])
  }

  return (
    <div className="App">
      <Banner />
      <FormContainer
        roleOption={roles.map(role => role.name)}
        onSaveComp={champion => onNewComp(champion)} />
      {
        roles.map(
          role => <Positions
            key={role.name}
            name={role.name}
            primaryColor={role.primaryColor}
            secundaryColor={role.secundaryColor}
            champions={champions.filter(champion => champion.position === role.name)}
          />
        )
      }
      <Footer />
    </div>
  );
}

export default App