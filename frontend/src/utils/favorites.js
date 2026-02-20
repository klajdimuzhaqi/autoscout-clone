// src/utils/favorites.js

const STORAGE_KEY = "autoscout:favorites";

/**
 * @returns {Array<Object>} list of saved car objects
 */
export function getFavorites() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        const parsed = raw ? JSON.parse(raw) : [];
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

/**
 * @param {Array<Object>} favorites
 */
function setFavorites(favorites) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    // notify the app that favorites changed
    window.dispatchEvent(new Event("favoritesUpdated"));
}

/**
 * @param {number|string} carId
 */
export function isFavorite(carId) {
    const id = Number(carId);
    return getFavorites().some((c) => Number(c?.id) === id);
}

/**
 * Adds or removes a car from favorites.
 * @param {Object} car
 * @returns {Array<Object>} updated favorites
 */
export function toggleFavorite(car) {
    if (!car || car.id == null) return getFavorites();

    const id = Number(car.id);
    const current = getFavorites();
    const exists = current.some((c) => Number(c?.id) === id);

    const next = exists
        ? current.filter((c) => Number(c?.id) !== id)
        : [
            // keep the object stable but avoid weird undefined fields
            { ...car, id },
            ...current,
        ];

    setFavorites(next);
    return next;
}

/**
 * @param {number|string} carId
 */
export function removeFavorite(carId) {
    const id = Number(carId);
    const next = getFavorites().filter((c) => Number(c?.id) !== id);
    setFavorites(next);
    return next;
}

export function clearFavorites() {
    setFavorites([]);
    return [];
}
