# Directi Intern Task

Worked on Sample 2 provided in mail.

```bash
git clone https://github.com/solodynamo/sass-gulp-website.git
cd sass-gulp-website
npm install -g ionic@1.4.0
npm install -g gulp
[sudo] ionic serve(By default starts scss compilation and live reloading)
```

Features | Tools Used
------ | -----
**CSS** | [Sass](http://sass-lang.com/)
**JavaScript** | [Angular](https://angularjs.org/)
**Images** | Compression with [imagemin](https://www.npmjs.com/package/gulp-imagemin)
**Javascript Minify and Obfuscation** | [uglify](https://www.npmjs.com/package/gulp-uglify),[Obfuscate](https://www.npmjs.com/package/gulp-js-obfuscator)
**Icons** | [Font Awesome](http://fontawesome.io/)
**Fonts** | Roboto mixed with bootstrap default fonts.
**Live Updating** | [IonicLiveReload](http://blog.ionic.io/live-reload-all-things-ionic-cli/)
## Structure
> Main Files

    .
    ├── gulpfile.js             # File through which all command runs.
    ├── ionic.project/ionic.config.json       # Default file in ionic to specify watch patterns for Live Reloading.
    ├── images                  # Optimized images
    ├── scss                    # Scss file for the project.
    ├── www
       ├── css          # Compiled css in one file(ionic.app.css)
       ├── index.html         # Main markup
       └── minjs              # Minified and Obfuscated Js files     
       └── app.js             # Main Angular File


#### Gulp Commands
```bash
gulp imqz (optimizes and minify images and stores it in www/images)
gulp total (upglifies and obfuscates the js file into www/minjs)
```