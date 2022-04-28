 const INPUTS = {
    FIRSTNAME: {
        id: 1,
        name: "firstName",
        type: "text",
        label: "First Name",
        placeholder: "First Name"
    },
    LASTNAME: {
        id: 2,
        name: "lastName",
        type: "text",
        label: "Last Name",
        placeholder: "Last Name"
    },
    USERNAME: {
        id: 3,
        name: "username",
        type: "text",
        label:"Username",
        required: true,
        placeholder: "Username",
        errorMessage: "Username field can not be empty."
    },
    DATEOFBIRTH: {
        id: 4,
        name: "dateOfBirth",
        type: "date",
        label:"Date Of Birth",
    }
}
 export default INPUTS