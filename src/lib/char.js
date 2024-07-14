let characterDataPromise = null;
let characterData = {};

async function fetchCharacterData() {
  try {
    console.log("fetching character data");
    characterData.isFetching = true;

    const response = await fetch('http://localhost:8080/api/char');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    characterData = await response.json();

    console.log("character data fetched", characterData);

    return characterData;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;  // Re-throw to allow error handling where getCharacter is called
  }
}

export async function getCharacter() {
  if (!characterData.name) {
    characterData = await fetchCharacterData();
  }

  return characterData;
}

export function fetchCharacter() {
  if (!characterDataPromise) {
    characterDataPromise = fetchCharacterData();
    characterDataPromise.then(() => {
      characterDataPromise = null; // Reset the promise after the data is fetched
      
      characterData.isFetching = false;

      console.log("not fetching anymore");
    });
  }

  return characterDataPromise;
}

export function fetchCharacterMock() {
  console.log("fetching character data mock");
  return {
    name: "Mocked character",
    level: 99,
    class: "Mocked class",
  };
}
