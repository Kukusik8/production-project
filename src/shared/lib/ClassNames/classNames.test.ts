import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        const expected = 'someClass class1 class2';
        // eslint-disable-next-line max-len
        expect(classNames('someClass', {}, ['class1', 'class2']).trim()).toBe(expected);
    });
    test('with mods', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        ).trim()).toBe(expected);
    });
    test('with mods false', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['class1', 'class2'],
        ).trim()).toBe(expected);
    });
    test('with mods false', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: undefined },
            ['class1', 'class2'],
        ).trim()).toBe(expected);
    });
});
