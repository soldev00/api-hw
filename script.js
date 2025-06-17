function fetchUsers() {
  const details = document.querySelector(".details");
  details.style.display = "block";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      const myH1 = document.getElementById("myh1");
      myH1.innerHTML = data.map((user) => `<p>${user.username}</p>`).join("");
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

async function fetchTitles() {
  try {
    const details2 = document.querySelector(".details1");
    details2.style.display = "block";

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    const myP = document.getElementById("myP");
    myP.innerHTML = data.map((post) => `<p>${post.title}</p>`).join("");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
