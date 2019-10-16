import { FilterPipe } from './filter.pipe';

const courses = [
    {
        id: 1,
        name: 'Vue',
        complex: 'easy'
    },
    {
        id: 2,
        name: 'React',
        complex: 'middle'
    },
    {
        id: 3,
        name: 'Angular',
        complex: 'hard'
    }
];
describe('FilterPipe', () => {
    it('create an instance', () => {
        const pipe = new FilterPipe();
        expect(pipe).toBeTruthy();
    });

    it('should filter data with one parameter correctly', () => {
        const targetVue = {
            name: 'Vue'
        };
        const pipe = new FilterPipe();

        expect(pipe.transform(courses, targetVue).length).toBe(1);
    });

    it('should filter data with multi parameters correctly', () => {
        const targetVue = {
            name: 'Vue',
            id: 1
        };
        const targetReact = {
            name: 'React',
            id: 1
        };
        const targetAngular = [
            {
                name: 'Angular',
                id: 2,
                complex: 'hard'
            }
        ];
        const pipe = new FilterPipe();

        expect(pipe.transform(courses, targetVue).length).toBe(1);
        expect(pipe.transform(courses, targetReact).length).toBe(0);
        expect(pipe.transform(courses, [targetAngular]).length).toBe(0);
    });
});
