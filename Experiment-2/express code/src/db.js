

const items = [
  {
    id: "seed-1",
    title: "demo 100",
    completed: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "seed-2",
    title: "Build CRUD",
    completed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

module.exports = { items };


// Error :- 
//    "Cannot read properties of undefined (reading 'push')"
//    Exported object shape changed or `module.exports = items` done by mistake.
//    Fixed by : Keep `module.exports = { items }` and import as `const db = require('../db')`.
 