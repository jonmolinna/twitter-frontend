export function Capitalize(words) {
    return words.toLowerCase()
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.substr(1))
        .join(' ');
};