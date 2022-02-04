// Variabel

// const myName = 'Muhamad Sodikul Padli';
// const myAge = 24;

// console.log(`Hallo Nama Saya ${myName} Sekarang Umur saya ${myAge}`);

// function
// function showData() {
//   let myName = 'Sodikul';
//   alert(`Hallo Nama Saya ${myName}`);
//   console.log(`Hallo Nama Saya ${myName}`);
// }

//  DOM

function showData() {
  // mengambil data

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let subject = document.getElementById('subject').value;
  let message = document.getElementById('message').value;
  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(subject);
  console.log(message);

  //   validasi data
  if (name == '') {
    alert('name is not empaty');
  }
  if (email == '') {
    alert('email is not empaty');
  }
  if (phone == '') {
    alert('phone is not empaty');
  }
  if (subject == '') {
    alert('subject is not empaty');
  }
  if (message == '') {
    alert('message is not empaty');
  }

  //    dom create element
  let emailReceiver = 'muhamadsodikulpadli2022@outlook.com';
  let a = document.createElement('a');
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello My Name Is ${name},${subject},${message} This is My Phone number ${phone}`;
  a.click();

  // object
  // let dataObject = {
  //   dataName: name,
  //   email,
  //   phone,
  //   subject,
  //   message,
  // };
  // console.table(dataObject);
  // console.log(dataObject.phone);
}
