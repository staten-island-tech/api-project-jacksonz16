const url = "https://rickandmortyapi.com/api/character";
async function getData(url) {
  try {
    const response = await fetch(url);
    const Data = await response.json();
    console.log(Data);
    return Data;
  } catch (error) {
    console.log(error);
  }
}
const Data = getData(url);
export { Data };
//themoviedb can go fuck itself for banning my smurf account//
