// function fetchUser() {
//   showSpinner();
//   fetch('https://randomuser.me/api')
//     .then((res) => res.json())
//     .then((data) => {
//       hideSpinner();
//       displayUser(data.results[0]);
//     });
// }

// function displayUser(user) {
//   const userDisplay = document.querySelector('#user');

//   if (user.gender === 'female') {
//     document.body.style.backgroundColor = 'rebeccapurple';
//   } else {
//     document.body.style.backgroundColor = 'steelblue';
//   }

//   userDisplay.innerHTML = `
//   <div class="flex justify-between">
//   <div class="flex">
//     <img
//       class="w-48 h-48 rounded-full mr-8"
//       src="${user.picture.large}"
//     />
//     <div class="space-y-3">
//       <p class="text-xl">
//         <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
//       </p>
//       <p class="text-xl">
//         <span class="font-bold">Email: </span> ${user.email}
//       </p>
//       <p class="text-xl">
//         <span class="font-bold">Phone: </span> ${user.phone}
//       </p>
//       <p class="text-xl">
//         <span class="font-bold">Location: </span> ${user.location.city} ${user.location.country}
//       </p>
//       <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
//     </div>
//   </div>
// </div>
//   `;
// }

// function showSpinner() {
//   document.querySelector('.spinner').style.display = 'block';
// }

// function hideSpinner() {
//   document.querySelector('.spinner').style.display = 'none';
// }

// document.querySelector('#generate').addEventListener('click', fetchUser);

// fetchUser();




function fetchUser() {
  const xhr = new XMLHttpRequest()

  xhr.open('GET', 'https://randomuser.me/api/')

  xhr.onload = function() {

    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText)

      const name = "Name: " + response.results[0].name.first + ' ' + response.results[0].name.last
      document.querySelector('#name').textContent = name

      const gender = "Gender: " + response.results[0].gender
      document.querySelector('#gender').textContent = gender

      const phone = "Phone: " + response.results[0].phone
      document.querySelector('#phone').textContent = phone

      const email = "Email: " + response.results[0].email
      document.querySelector('#email').textContent = email

      const date = "Date: " + response.results[0].dob.date
      document.querySelector('#date').textContent = date

      const age = "Age: " + response.results[0].dob.age
      document.querySelector('#age').textContent = age

      const photo = response.results[0].picture.large
      const img = document.querySelector('#card-image')
      img.src = photo
      document.querySelector('#img-box').appendChild(img)

    } else {
      console.error('Error:', xhr.status)
    }
  }

  

  xhr.send()
}


setInterval(fetchUser, 3500)
