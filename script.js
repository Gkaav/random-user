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

fetchUser()

setInterval(fetchUser, 3500)
