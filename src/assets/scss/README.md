# Frontend SCSS Flow

### Layout of SCSS

**app.scss**
  + _abstract.scss
    * variable.scss
  + _base.scss
    * color.scss
    * extends.scss
    * helper.scss
    * mixins.scss
    * stylesheet.scss
    * typography.scss
  + _component.scss
    * buttons.scss
    * forms.scss
    * slider
  + _layout.scss
    * general.scss
    * _partial.scss
      * header.scss
      * footer.scss
    * _style.scss
      * pages CSS
___
### For theming in vuetify
* Go to src/plugins/vuetify.js
* Add this after `icons` config
```
  theme: {
    themes: {
      light: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      }
    }
  }
```
* Refer to this Link: https://vuetifyjs.com/en/features/theme/#customizing