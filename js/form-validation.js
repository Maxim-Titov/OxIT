$(document).ready(function() {
    $('#reg-form').on('submit', function(event) {
        let name_field = $('input[name=name]');
        let surname_field = $('input[name=surname]');
        let qa_field = $('input[name=qa]');
        let phone_field = $('input[name=phone]');
        let email_field = $('input[name=email]');
        let agree_checkbox = $('input[name=agree]');

        let phonePattern = /^\+?3?8?(0\d{9})$/;
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if ($(name_field).val() === '') {
            event.preventDefault();

            $(name_field).addClass('error');
            $(name_field).attr('placeholder', "Це поле має бути заповненим");
        } else {
            $(name_field).removeClass('error');
        }

        if ($(surname_field).val() === '') {
            event.preventDefault();

            $(surname_field).addClass('error');
            $(surname_field).attr('placeholder', "Це поле має бути заповненим");
        } else {
            $(surname_field).removeClass('error');
        }

        if ($(qa_field).val() === '') {
            event.preventDefault();

            $(qa_field).addClass('error');
            $(qa_field).attr('placeholder', "Це поле має бути заповненим");
        } else {
            $(qa_field).removeClass('error');
        }

        if ($(phone_field).val() === '') {
            event.preventDefault();

            $(phone_field).addClass('error');
            $(phone_field).attr('placeholder', "Це поле має бути заповненим");
        } else {
            if (!phonePattern.test(phone_field.val())) {
                event.preventDefault();

                $(phone_field).addClass('error');
                $(phone_field).attr('placeholder', "Номер телефону введений не правильно");
                $(phone_field).val('');
            } else {
                $(phone_field).removeClass('error');
            }
        }

        if ($(email_field).val() === '') {
            event.preventDefault();

            $(email_field).addClass('error');
            $(email_field).attr('placeholder', "Це поле має бути заповненим");
        } else {
            if (!emailPattern.test(email_field.val())) {
                event.preventDefault();

                $(email_field).addClass('error');
                $(email_field).attr('placeholder', "Адреса електронної пошти введена не правильно");
                $(email_field).val('');
            } else {
                $(email_field).removeClass('error');
            }
        }

        if (!$(agree_checkbox).is(':checked')) {
            event.preventDefault();

            $(agree_checkbox).addClass('error');
        } else {
            $(agree_checkbox).removeClass('error');
        }

        if ($(name_field).is(':valid') && $(surname_field).is(':valid') && $(qa_field).is(':valid') && $(phone_field).is(':valid') && $(email_field).is(':valid') && $(agree_checkbox).is(':checked')) {
            alert("Запит на реєстрацію відправлено");
        }
    })
})