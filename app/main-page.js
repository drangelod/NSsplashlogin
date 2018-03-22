var currentPage;

function setEditable() {
  var un = currentPage.getViewById("fieldEmail");
  var p = currentPage.getViewById("fieldPassword");
  un.editable = true;
  p.editable = true;
}
exports.setEditable = setEditable;

exports.onLoaded = function(args) {
    currentPage = args.object;
}
