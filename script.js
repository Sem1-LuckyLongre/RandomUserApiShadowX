const URL = "https://randomuser.me/api/";
const Body = document.querySelector("body");
const loader = document.querySelector(".dotted-loader");

(async () => {
    let response = await fetch(URL);
    console.log("Getting...");
    let data = await response.json();
    loader.style.display = "none";

    data.results.map(function(n) {
        const DataCard = `
            <div class="card">
                <div class="profile-image">
                    <img src="${n.picture.large}" alt="Profile Image">
                </div>
                <div class="card-content">
                    <h2 id="fullName">
                        ${n.name.title} ${n.name.first} ${n.name.last}
                    </h2>
                    <h4>Email: 
                        <p>${n.email}</p>
                    </h4>
                    <h4>Username:
                        <p>${n.login.username}</p>
                    </h4>
                    <h4>Phone:
                        <p>${n.phone}</p>
                    </h4>
                    <h4>Address:
                        <p>${n.location.street.number} ${n.location.street.name}, ${n.location.city}, ${n.location.state}, ${n.location.country} ${n.location.passcode}</p>
                    </h4>
                </div>
            </div>
        `;
        Body.innerHTML += DataCard;
    });
})();
