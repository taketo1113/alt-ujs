# alt-ujs

**alt-ujs** is an alternative to *rails-ujs*.

## rails-ujs

*rails-ujs* has been deprecated since Rails 7.0 and was no longer released starting from Rails 7.2.

*rails-ujs* is the unobtrusive scripting adapter for Ruby on Rails.
> This unobtrusive scripting support file is developed for the Ruby on Rails framework, but is not strictly tied to any specific backend.

https://github.com/rails/rails/tree/7-1-stable/actionview/app/javascript

## Features

**alt-ujs** provides the following features compatible with *rails-ujs*:

- force confirmation dialogs for various actions;
- make non-GET requests from hyperlinks;
- ~~make forms or hyperlinks submit data asynchronously with Ajax;~~
  - Not Supported
- ~~have submit buttons become automatically disabled on form submit to prevent double-clicking.~~
  - Not Supported yet

## Installation

```sh
npm install alt-ujs
```

## Usage

alt-ujs works by adding data attributes to your HTML.
The available data attributes are:

- `data-confirm` : Displays confirmation dialogs for links and forms.
- `data-method` : Enables links to perform POST, PUT, or DELETE requests.

Next, add the following code to your app.
This code activates the functionality of elements with the specified data attributes.

```js
// your-app.js
import AltUjs from "alt-ujs";
AltUjs.start();
```

### `data-confirm`

The `data-confirm` attribute displays confirmation dialogs for links and forms.

```html
<a href="/path" data-confirm="message">Link</a>

<button type="button" data-confirm="message">Button</button>
<input type="submit" value="Submit" data-confirm="message">
```

The text specified in the `data-confirm` attribute is shown in a JavaScript `confirm()` dialog.
If "Cancel" is selected, no further actions will be performed.

### `data-method`

The `data-method` attribute allows you to execute a request with a specified HTTP method instead of the default GET method when clicking a link.

```html
<a href="/path" data-method="post">Link</a>
```

When a link with the `data-method` attribute is clicked, a form is dynamically created based on the link's attributes.

- The `action` attribute of the form is set to the `href` value of the link.
- The `method` attribute of the form is set to `post` (a fixed value).

Additionally, the HTTP method specified in the `data-method` attribute is included in a hidden input field with the name `_method`.
This follows Ruby on Rails' convention, where all HTTP methods other than GET and POST are sent via POST, with the actual method specified using the `_method` parameter.

The generated HTML form looks like this:

```html
<!-- <a href="/path" data-method="post">Link</a> -->

<form action="/path" method="post" style="display: none;">
  <input name="_method" value="post" type="hidden">
  <input type="submit">
</form>
```

### Disable Form

To prevent double submission after submitting the form, the submit button will be disabled.

- When the form is submitted, the `disabled` attribute is added to the submit button.
- When navigating back in the browser, the `disabled` attribute is removed from the submit button that had been disabled.


## Development

After checking out the repo, run `npm install` to install dependencies. Then, run `npm test` to run the tests.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/taketo1113/alt-ujs.

## License

This npm package is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
