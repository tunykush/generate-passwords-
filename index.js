/**
 * The function generates a random password of length 16 using a set of characters and the
 * window.crypto.getRandomValues() method.
 * @returns a randomly generated password as a string.
 */
function generatePassword() {
        let password = "";
        let length =16;

        const chars = '01234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+~`|}{[]\:;?><,./-=';

        const arr = new Uint32Array(length);

        window.crypto.getRandomValues(arr);

        for (let i = 0; i < length; i++) {
            password += chars[arr[i] % chars.length];
        }

        return password;
}