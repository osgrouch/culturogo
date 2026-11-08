import Homepage from "./homepage/Homepage";

function App() {
  return (
    <main>
      <h1>CulturoGO!</h1>
      <Homepage highlight={fakeData.highlight} />
    </main>
  );
}

// temp fake data of a highlight to display
const fakeData = {
  highlight: {
    title: "Thanksgiving",
    culture: "American",
  },
};

export default App;
