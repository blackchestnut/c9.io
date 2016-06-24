// You can access plugins via the 'services' global variable
/*global services, plugin*/
require(["plugins/c9.ide.ace.keymaps/vim/keymap"], function(vim) {
    vim.map("jj", "<Esc>", "insert")
});
