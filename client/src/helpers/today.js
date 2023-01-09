/**
 * 
 * @returns la fecha del dia de hoy para poder manejarrel input date
 */

export const today = () => {
    const today = new Date(Date.now());
    let date = today.toISOString().substring(0, 10);
    return date
}