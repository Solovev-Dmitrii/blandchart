document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    const formData = new FormData();
    let nameField = document.querySelector('.form__name');
    let phoneField = document.queryrSelector('.form__phone');
    formData.append('name', nameField.value);
    formData.append('phone', phoneField.value);
    let response = await fetch('mail.php', {
      method: 'POST',
      body: formData
    })
    if (response.ok) {
      let result = await response.json();
      alert(result.message);
      form.reset();
    } else {
      alert("Ошибка");
    }
  }
})
