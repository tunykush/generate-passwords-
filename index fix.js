function generatePassword(length = 16) {
    // Define the characters that will be used in the password
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
    
    // Create an array of random numbers using the browser's crypto API
    const randomValues = new Uint32Array(length);
    window.crypto.getRandomValues(randomValues);

    // Use the random numbers to select characters from the chars string
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = randomValues[i] % chars.length;
        password += chars[randomIndex];
    }
    
    return password;
}
