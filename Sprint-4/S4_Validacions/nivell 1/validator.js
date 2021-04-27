/* Formulari de cerca */
$('search-form').bootstrapValidator({
    message: 'this value is not valid',
    feedbackIcons: {

        valid: 'glyphicon glyphicon-ok',

        invalid: 'glyphicon glyphicon-remove',

        validating: 'glyphicon glyphicon-refresh'

    },
    fields: {

        search: {

            validators: {

                notEmpty: {

                    message: 'Es necessita una paraula per realitzar la cerca'

                },
                stringLength: {

                    min: 3,

                    message: 'La paraula ha de tenir com a mínim 3 caracters'

                }


            }

        }
    }
});