// You can access plugins via the 'services' global variable
/*global services, plugin*/
require(["plugins/c9.ide.ace.keymaps/vim/keymap"], function(vim) {
    vim.map("jj", "<Esc>", "insert");
    vim.map("<C-k>", "10k", "normal");
    vim.map("<C-k>", "<Up>", "insert");
    vim.map("<C-j>", "10j", "normal");
    vim.map("<C-j>", "<Down>", "insert");
    vim.map("<C-h>", "<Left>", "normal");
    vim.map("<C-h>", "<Left>", "insert");
    vim.map("<C-l>", "<Right>", "normal");
    vim.map("<C-l>", "<Right>", "insert");
    
    // Insert new line by Enter before/after
    vim.map("<S-Enter>", "O<Esc>", "normal"); // It doesn't work
    vim.map("<S-CR>", "O<Esc>", "normal"); // It doesn't work
    vim.map("<C-o>", "O<Esc>", "normal");
    vim.map("<CR>", "o<Esc>", "normal");
});
