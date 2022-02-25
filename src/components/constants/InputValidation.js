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
        }
};