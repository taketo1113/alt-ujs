// State store
// window.__ALT_UJS__: { loaded_confirm: true|falseloaded_method: true|false }
//
const setLoaded = function (module) {
  if (window.__ALT_UJS__ === undefined) {
    window.__ALT_UJS__ = {};
  }

  window.__ALT_UJS__[key(module)] = true;
};

const isLoaded = function (module) {
  if (window.__ALT_UJS__ === undefined) {
    return false;
  }

  if (window.__ALT_UJS__[key(module)] === true) {
    return true;
  }

  return false;
};

// Raise an error to prevent multiple event listeners from being registered when alt-ujs is executed more than once.
const checkLoaded = function (module) {
  checkLoadedRails();

  if (isLoaded(module)) {
    throw new Error(`alt-ujs: ${module} module has already been loaded.`);
  }

  return true;
};

const key = function (module) {
  if (!module) {
    return;
  }

  return "loaded_" + module;
};

// check to load rails-ujs
const checkLoadedRails = function () {
  if (window._rails_loaded) {
    // https://github.com/rails/rails/blob/7-1-stable/actionview/app/javascript/rails-ujs/index.js#L135
    throw new Error(
      `If you load both rails-ujs and alt-ujs, use alt-ujs only.`,
    );
  }

  return true;
};

export default { setLoaded, checkLoaded };
