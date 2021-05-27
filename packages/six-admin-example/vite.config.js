import reactRefresh from '@vitejs/plugin-react-refresh';

module.exports = {
    jsx: 'react',
    plugins: [reactRefresh()],
    resolve: {
        alias: {
            'six-admin-core': 'six-admin-core/src/index.js'
        }
    }
}
