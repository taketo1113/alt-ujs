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

```js
import AltUjs from "alt-ujs"
AltUjs.start()
```

## Development

(TBD)

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/taketo1113/alt-ujs.

## License

This npm package is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
