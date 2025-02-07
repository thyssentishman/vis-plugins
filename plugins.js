const plugins = [
	{
		"name": "vis-backspace",
		"url": "https://github.com/milhnl/vis-backspace",
		"desc": "remove backspaces with alignment to tabwidth, like vim's softtabstop"
	},
	{
		"name": "vis-backup",
		"url": "https://github.com/hucal/vis-backup",
		"file": "backup",
		"desc": "make backups of current files before saving"
	},
	{
		"name": "vis-bundle",
		"url": "https://repo.or.cz/vis-bundle.git",
		"desc": "install (and periodically update) vis plugins from Git repos"
	},
	{
		"name": "vis-commentary",
		"url": "https://github.com/lutobler/vis-commentary",
		"desc": "automatic block comments for most languages"
	},
	{
		"name": "vis-complete-line",
		"url": "https://repo.or.cz/vis-complete-line.git",
		"desc": "`<C-e>`, `<C-y>`, and `<C-x><C-l>`, like in vim"
	},
	{
		"name": "vis-cscope",
		"url": "https://git.sr.ht/~emg/vis-cscope",
		"desc": "cscope support similar to vim's"
	},
	{
		"name": "vis-ctags",
		"url": "https://github.com/kupospelov/vis-ctags",
		"desc": "add basic ctags support"
	},
	{
		"name": "vis-cursors",
		"url": "https://github.com/erf/vis-cursors",
		"desc": "remember last cursor position per file"
	},
	{
		"name": "vis-editorconfig",
		"url": "https://github.com/vktec/vis-editorconfig",
		"desc": "automatically parse and apply `.editorconfig` files"
	},
	{
		"name": "vis-exchange",
		"url": "https://repo.or.cz/vis-exchange.git",
		"desc": "operator for swapping a pair of ranges"
	},
	{
		"name": "vis-fenced-insert",
		"url": "https://repo.or.cz/vis-fenced-insert.git",
		"desc": "insert mode as that of traditional vi"
	},
	{
		"name": "vis-filetype-settings",
		"url": "https://github.com/jocap/vis-filetype-settings",
		"file": "vis-filetype-settings",
		"desc": "set options automatically depending on filetype"
	},
	{
		"name": "vis-fzf-mru",
		"url": "https://github.com/peaceant/vis-fzf-mru",
		"file": "fzf-mru",
		"desc": "open recently used files with fzf"
	},
	{
		"name": "vis-fzf-open",
		"url": "https://git.sr.ht/~mcepl/vis-fzf-open",
		"desc": "open files with fzf"
	},
	{
		"name": "vis-go",
		"url": "https://gitlab.com/timoha/vis-go",
		"file": "vis-go",
		"desc": "[Go](https://golang.org) development plugin"
	},
	{
		"name": "vis-goto-file",
		"url": "https://repo.or.cz/vis-goto-file.git",
		"desc": "`gf` and `<C-w>f`, similar to vim's"
	},
	{
		"name": "vis-ins-completion",
		"url": "https://github.com/jpaulogg/vis-ins-completion",
		"desc": "basic vim-like insert mode completion."
	},
	{
		"name": "vis-highlight",
		"url": "https://github.com/erf/vis-highlight",
		"desc": "highlight multiple Lua patterns with optional style"
	},
	{
		"name": "vis-jump",
		"url": "https://gitlab.com/mcepl/vis-jump",
		"desc": "`gx` jump to the external link (with custom processor, if required), like in the vim’s netrw."
	},
	{
		"name": "vis-modelines",
		"url": "https://github.com/lutobler/vis-modelines",
		"desc": "basic support for Vim modelines"
	},
	{
		"name": "vis-motsel",
		"url": "https://repo.or.cz/vis-motsel.git",
		"desc": "create selections from motions"
	},
	{
		"name": "vis-open_rej",
		"url": "https://gitlab.com/mcepl/vis-open_rej",
		"desc": "open the .rej file if present for the currently opened file."
	},
	{
		"name": "vis-options-backport",
		"url": "https://github.com/milhnl/vis-options-backport",
		"desc": "make vis options available in lua for vis <=0.8"
	},
	{
		"name": "vis-outdated",
		"url": "https://github.com/erf/vis-outdated",
		"desc": "keep up-to-date with a list of git repos"
	},
	{
		"name": "vis-pairs",
		"url": "https://repo.or.cz/vis-pairs.git",
		"desc": "textobjects and motions for delimited blocks"
	},
	{
		"name": "vis-parkour",
		"url": "https://repo.or.cz/vis-parkour.git",
		"desc": "structured editing for Lisps"
	},
	{
		"name": "vis-plug",
		"url": "https://github.com/erf/vis-plug",
		"desc": "a minimal plugin (and theme) manager for vis"
	},
	{
		"name": "vis-quickfix",
		"url": "https://repo.or.cz/vis-quickfix.git",
		"desc": "most of vim's QuickFix commands"
	},
	{
		"name": "vis-shebang",
		"url": "https://github.com/e-zk/vis-shebang",
		"desc": "set syntax based on file [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix))"
	},
	{
		"name": "vis-smart-backspace",
		"url": "https://github.com/ingolemo/vis-smart-backspace",
		"desc": "delete spaces at start of lines, like vim's softtabstop"
	},
	{
		"name": "vis-sneak",
		"url": "https://github.com/erf/vis-sneak",
		"desc": "jump to a location specified by two characters "
	},
	{
		"name": "vis-spellcheck",
		"url": "https://gitlab.com/muhq/vis-spellcheck",
		"desc": "syntax aware spellchecking"
	},
	{
		"name": "vis-super-shellout",
		"url": "https://github.com/seifferth/vis-super-shellout",
		"file": "super-shellout",
		"desc": "an alternative way to insert output from arbitrary shell commands"
	},
	{
		"name": "vis-surround",
		"url": "https://repo.or.cz/vis-surround.git",
		"desc": "operators for adding/changing/deleting block delimiters"
	},
	{
		"name": "vis-tables",
		"url": "ssh://anon@thyssentishman.com/vis-tables",
		"homepage": "https://www.thyssentishman.com/git/vis-tables/log.html",
		"desc": "write tables"
	},
	{
		"name": "vis-title",
		"url": "https://github.com/erf/vis-title",
		"desc": "set terminal title to current file"
	},
	{
		"name": "vis-tmux-repl",
		"url": "https://github.com/maciejjan/vis-tmux-repl",
		"file": "tmux-repl",
		"desc": "send text from vis to another tmux pane (e.g. a read-eval-print loop)"
	},
	{
		"name": "vis-toggler",
		"url": "https://repo.or.cz/vis-toggler.git",
		"desc": "improved `<C-a>`/`<C-x>`, `~`, `g~`, `gu`, and `gU`"
	},
	{
		"name": "vis-ultisnips",
		"url": "https://github.com/machinedgod/vis-ultisnips",
		"desc": "snippet plugin. Supports both SnipMate and UltiSnips, however has limited support for latter."
	},
	{
		"name": "vis-tasks",
		"url": "https://github.com/mpolitzer/vis-tasks",
		"desc": "a simple todo list manager"
	}
]
