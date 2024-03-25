// ------------------------- GET

// async function fetchData() {
//   const response = await fetch("http://localhost:3000/people?name=temo");
//   const data = await response.json();
//   console.log(data);
// }

// fetchData();

// ------------------------- POST

// async function postPerson(person) {
//   const response = await fetch("http://localhost:3000/people", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(person),
//   });
//   console.log(response);
// }

// postPerson({ name: "lasha", age: "20" });
// postPerson({ name: "beqa", age: "20" });
// postPerson({ name: "tedo", age: "25" });

// ----------------------- PUT

async function putPerson(id, newPerson) {
  try {
    const response = await fetch(`http://localhost:3000/people/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: newPerson,
    });
    if (response.status >= 300 && response.status <= 399) {
      throw new Error("status code 300");
    } else if (response.status >= 400 && response.status <= 499) {
      throw new Error("status code 400");
    }
    // if (!response.ok) {
    //   throw new Error("Failed to update person");
    // }
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
}

putPerson(4, {
  name: "temo",
  age: 19,
  hobby: "swimming",
  state: "sleepy",
});

setTimeout(() => {
  console.log("hello");
}, 1000);

// ----------------------- PATCH

// async function putPerson(id, newPerson) {
//   const response = await fetch(`http://localhost:3000/people/${id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newPerson),
//   });
//   console.log(response);
// }

// putPerson(1, {
//   height: "191cm",
// });

// ----------------------- DELETE

// async function deletePerson() {
//   const response = await fetch("http://localhost:3000/people/2", {
//     method: "DELETE",
//   });
// }

// deletePerson();
