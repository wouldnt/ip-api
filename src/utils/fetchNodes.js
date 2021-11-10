import fetch from "node-fetch";

async function fetchNodes() {
  return fetch("https://check.torproject.org/exit-addresses")
    .then((response) => response.text())
    .then((text) => text.split("\n").filter(Boolean))
    .then((lines) => lines.map((line) => line.split(" ")[0]))
    .catch((error) => {
      console.log(error);
      return [];
    });
}

module.exports = fetchNodes;
