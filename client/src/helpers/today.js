export const today = () => {
    const today = new Date(Date.now());
    let date = today.toISOString().substring(0, 10);
    return date
}