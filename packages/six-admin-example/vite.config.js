import reactRefresh from '@vitejs/plugin-react-refresh';

module.exports = {
    base: '',
    jsx: 'react',
    plugins: [reactRefresh()],
    resolve: {
        alias: {
            'six-admin-core': 'six-admin-core/src/index.js'
        }
    }
}
