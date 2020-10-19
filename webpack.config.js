const path = request('path');

module.exports = {
    entry: './src/pages/color-and-type/color-and-type.pug',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'color-and-type.html'
    }

};