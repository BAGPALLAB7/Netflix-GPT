export const checkValidateData = (email, password) => {
    const checkEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const checkPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/.test(password);

    if(!checkEmail){return "Email is not valid!"};
    if(!checkPassword){return "Password is not valid!"};

    return null;

}