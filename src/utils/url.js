import URI from "urijs";

const isCrossOrigin = function (href) {
  const uriHref = URI(href);
  const uriLocation = URI(window.location.href);

  if (uriHref.origin() === "") {
    // href is relative path
    return false;
  }

  return uriLocation.origin() !== uriHref.origin();
};

export default { isCrossOrigin };
