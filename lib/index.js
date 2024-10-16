import axios from "axios";

//Separation of concerns; storing all of the CRUDE functions and exporting them

//GET watchlist items
export const getAllWatchlistItems = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/api/watchlist`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//GET all of the animals from the database
export const getAllAnimals = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/api/specimens`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//GET single animal from database
export const getAnimal = async (id) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/api/specimens/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//PUT request --> edit an animal/plant
export const editAnimal = async (id, requestBody) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_SERVER_URL}/api/specimens/${id}`,
      requestBody
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// DELETE an animal/plant
export const deleteAnimal = async (id) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_SERVER_URL}/api/specimens/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//PUT request --> edit user
export const editUser = async (id, requestBody) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_SERVER_URL}/api/users/${id}`,
      requestBody
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//Get animals with sightings
export const getAnimalsWithSightings = async (specimenId) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/specimens/${specimenId}/sightings`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Add an animal sighting
export const addAnimalSighting = async (sighting) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/sightings`,
      {
        animalId: Number(sighting.animalId),
        typeId: Number(sighting.typeId),
        location: sighting.location,
        date: sighting.date,
        description: sighting.description,
        image: sighting.image,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/*  export const getTypes = async (id) => {
  try {
    const response = await axios.get(`${DATABASE_URL}/types`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};  */
