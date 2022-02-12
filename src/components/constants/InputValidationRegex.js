export const INPUT_REGEX =
    {
        EMAIL_REGEX:
            {
                regex: /\S+@\S+\.\S+/,
                regexString: "[^@\s]+@[^@\s]+\.[^@\s]+"
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
    }