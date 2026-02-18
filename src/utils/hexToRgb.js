function hexToRgb(hex) {
    const cleaned = hex.replace('#', '');

    if (!/^[0-9A-Fa-f]{6}$/.test(cleaned)) {
        throw new Error('Invalid hex format');
    }

    const r = parseInt(cleaned.substring(0, 2), 16);
    const g = parseInt(cleaned.substring(2, 4), 16);
    const b = parseInt(cleaned.substring(4, 6), 16);

    return { r, g, b };
}

module.exports = hexToRgb;
