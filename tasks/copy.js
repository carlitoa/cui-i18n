module.exports = function(grunt, config) {
    return {
        index: {
            src: 'index.html',
            dest: 'build/index.html'
        },
        index2: {
            src: 'index2.html',
            dest: 'build/index2.html'
        },
        countries: {
            expand: true,
            cwd: 'assets/countries/',
            src: '*.json',
            dest: 'dist/' + config.version + '/cui-i18n/angular-translate/countries/'
        },
        localeFiles: {
            src: 'bower_components/angular-i18n/*.js',
            dest: 'build/'
        },
        dist: {
            src : 'dist/**/*.json',
            dest: 'build/'
        }
    }
}
