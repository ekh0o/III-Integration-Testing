const hexToRgb = require('../../src/utils/hexToRgb');

describe('hexToRgb()', () => {
    test('converts valid hex to rgb', () => {
        expect(hexToRgb('#FFFFFF')).toEqual({ r: 255, g: 255, b: 255 });
    });

    test('throws error on invalid hex', () => {
        expect(() => hexToRgb('GGGGGG')).toThrow('Invalid hex format');
    });
});
