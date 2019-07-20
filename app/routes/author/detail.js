import Route from '@ember/routing/route';

export default Route.extend({
    model({ id }) {
        return {
            first:  'j.k',
            last: 'Rowling',
            id: `authors-${id}`
        }
    }
});
