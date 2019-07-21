import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        const author = this.modelFor('author.detail');
        // eslint-disable-next-line no-debugger
        return {
            author,
            book: {
                title: '',
                isbn: '',
                publishDate: '',
                author
            }
        }
    }
});
