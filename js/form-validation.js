$(document).ready(function() {
    $('#reg-form').on('submit', function(event) {
        const fields = [
            { element: $('input[name=name]'), errorMessage: "Це поле має бути заповненим" },
            { element: $('input[name=surname]'), errorMessage: "Це поле має бути заповненим" },
            { element: $('input[name=qa]'), errorMessage: "Це поле має бути заповненим" },
            { element: $('input[name=phone]'), errorMessage: "Це поле має бути заповненим", pattern: /^\+?3?8?(0\d{9})$/, invalidMessage: "Номер телефону введений не правильно" },
            { element: $('input[name=email]'), errorMessage: "Це поле має бути заповненим", pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, invalidMessage: "Адреса електронної пошти введена не правильно" }
        ];

        let isValid = true;

        fields.forEach(field => {
            const value = field.element.val().trim();
            if (value === '') {
                field.element.addClass('error').attr('placeholder', field.errorMessage);
                isValid = false;
                event.preventDefault();
            } else if (field.pattern && !field.pattern.test(value)) {
                field.element.addClass('error').attr('placeholder', field.invalidMessage).val('');
                isValid = false;
                event.preventDefault();
            } else {
                field.element.removeClass('error');
            }
        });

        const agreeCheckbox = $('input[name=agree]');
        if (!agreeCheckbox.is(':checked')) {
            agreeCheckbox.addClass('error');
            isValid = false;
            event.preventDefault();
        } else {
            agreeCheckbox.removeClass('error');
        }

        if (isValid) {
            alert("Запит на реєстрацію відправлено");
        }
    });
});
