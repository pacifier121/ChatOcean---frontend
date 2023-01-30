export const validateRegisterForm = (email, username, password, confirmPassword) => {
    if (!email.includes('@')) return { err: 'Invalid email address'};
    if (username.length < 6) return { err: 'Username must be at least 6 digits long'};
    if (password.length < 6) return { err: 'Password must be at least 6 digits long'};
    if (password !== confirmPassword) return { err: "Both passwords don't match!"}
    return { err: null, user: { email, password, username } };
}