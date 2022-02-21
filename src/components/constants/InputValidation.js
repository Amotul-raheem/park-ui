export const INPUT_REGEX =
    {
        EMAIL_REGEX:
            {
                regex: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                regexString: "[a-z0-9]+@[a-z]+\\.[a-z]{2,3}"
            },
        PASSWORD_REGEX:
            {
                regex: /.{6,}/,
                regexString: ".{6,}"
            },
        USERNAME_REGEX: {
            regex: /.{3,}/,
            regexString: ".{3,}"
        },
        FIRSTNAME_REGEX: {
            regex: /.{3,}/,
            regexString: ".{3,}"
        },
        LASTNAME_REGEX: {
            regex: /.{3,}/,
            regexString: ".{3,}"
        },
        GENDER_REGEX: {
            regex: /"([M|m]ale|[F|f]emale)$"/
        },
        DATE_OF_BIRTH_REGEX: {
            regex: / ([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}/
        }

    };

export const INPUTS = {
    USERNAME:
        {
            id: 1,
            name: "username",
            type: "text",
            label: "username",
            errorMessage: "Username should be at least 3 characters long",
            required: true,
            pattern: INPUT_REGEX.USERNAME_REGEX.regexString

        },
    EMAIL:
        {
            id: 2,
            name: "email",
            type: "email",
            label: "email",
            errorMessage: "Invalid email address",
            required: true,
            pattern: INPUT_REGEX.EMAIL_REGEX.regexString

        },
    PASSWORD:
        {
            id: 3,
            name: "password",
            type: "password",
            label: "password",
            errorMessage: "Password should be minimum six characters",
            required: true,
            pattern: INPUT_REGEX.PASSWORD_REGEX.regexString
        },
    CONFIRM_PASSWORD:
        {
            id: 4,
            name: "confirmPassword",
            type: "password",
            label: "confirm password",
            errorMessage: "Passwords don't match!",
            required: true
        },
    FIRSTNAME:
        {
            id: 5,
            name: "firstname",
            type: "text",
            label: "firstname",
            errorMessage: "Username should be at least 3 characters long",
            required: true
        },
    LASTNAME:
        {
            id: 6,
            name: "lastname",
            type: "text",
            label: "lastname",
            errorMessage: "Lastname should be at least 3 characters long",
            required: true
        },
    GENDER:
        {
            id: 7,
            name: "gender",
            type: "text",
            label: "gender",
            errorMessage: "You have to select either male or female",
            required: true
        },
    DATE_OF_BIRTH:
        {
            id: 8,
            name: "dateOfBirth",
            type: "date",
            label: "date of birth",
            errorMessage: "You have to select a date",
            required: true
        }

};