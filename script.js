
// // дз 2
// // На странице у вас будет инпут и кнопка "получить".
//  При  клике по кнопке вам нужно получать данные по следующему адресу:
//   https://jsonplaceholder.typicode.com/users/{id}. Где значение {id} берется из инпута.
//    На инпут пользователи должны вводить только числа от 1 до 10.
//     Далее полученные данные обработать так: вытащить значение ключа name, username, phone на HTML. 
//     Верстку сделайте на свое усмотрение


function userInformation() {

    const infinput = document.getElementById("inputInf")

    const val = infinput.value

   if(val >= 1 && val <= 10){
    fetch(`https://jsonplaceholder.typicode.com/users/${val}`)
    .then(response  => response.json())
    .then((data) => {
      const div = document.getElementById("userinfa")
      div.innerHTML = `
      <p>Name: ${data.name}</p>
      <p>Username: ${data.username}</p>
      <p>Phone: ${data.phone}</p>
      `
    })
    .catch(error => console.error('Error:', error));

   }else{
    alert("1-10 ")
   }
 
}


