document.addEventListener("DOMContentLoaded", function () {
  var selector = document.querySelector("input[type='tel']");

  var im = new Inputmask("+7 (999) 999 99 99");
  im.mask(selector);

  new JustValidate('.form', {
    colorWrong: '#D11616',
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30,

      },
      tel: {
        required: true,
        minLength: 10,
        maxLenght: 10,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      }
    },
    messages: {
      name: {
        required: 'Как вас зовут?',
        minLength: 'Слишком мало символов',
        strength: 'Недопустимый формат'
      },
      tel: {
        required: 'Укажите ваш телефон',
        minLength: 'Слишком короткий номер',
        function: 'Слишком короткий номер'
      }
    },

    submitHandler: function (form, values, ajax) {
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
    }

  })
})
