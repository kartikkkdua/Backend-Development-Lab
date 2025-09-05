// test.js
const axios = require("axios");

const BASE_URL = "http://localhost:3000/api/items";

(async () => {
  try {
    console.log("✅ Testing Items API...");

    // 1) Health
    const health = await axios.get("http://localhost:3000/");
    console.log("\n--- Health Check ---");
    console.log(health.data);

    // 2) Create
    const createRes = await axios.post(BASE_URL, {
      title: "Learn Express",
      completed: false,
    });
    console.log("\n--- Create Item ---");
    console.log(createRes.data);
    const id = createRes.data._id;

    // 3) List
    const listRes = await axios.get(BASE_URL);
    console.log("\n--- List Items ---");
    console.log(listRes.data);

    // 4) Get by ID
    const getRes = await axios.get(`${BASE_URL}/${id}`);
    console.log("\n--- Get Item by ID ---");
    console.log(getRes.data);

    // 5) Update
    const updateRes = await axios.put(`${BASE_URL}/${id}`, {
      completed: true,
    });
    console.log("\n--- Update Item ---");
    console.log(updateRes.data);

    // 6) Delete
    const deleteRes = await axios.delete(`${BASE_URL}/${id}`);
    console.log("\n--- Delete Item ---");
    console.log(deleteRes.data);

    // 7) Final list
    const finalRes = await axios.get(BASE_URL);
    console.log("\n--- Final List ---");
    console.log(finalRes.data);

    console.log("\n Test complete!");
  } catch (err) {
    console.error("Test failed:", err.response?.data || err.message);
  }
})();
