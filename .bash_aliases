#---------------------------
# Common
#---------------------------

alias ls='ls --color=auto -F'
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'
alias less="less -R "
alias ..="cd .."
alias reload='source ~/.bashrc'

#---------------------------
# Grep
#---------------------------

alias grep='grep --color=auto'
alias fgrep='fgrep --color=auto'
alias egrep='egrep --color=auto'

#---------------------------
# Git
#---------------------------

alias g='git'
alias gs='git status'
alias gd='git diff HEAD --color'
alias gd1='git diff HEAD~1 --color'
alias gd2='git diff HEAD~2 --color'
alias gl="git log --graph --pretty=format:'%Cred%h%Creset %C(yellow)%d%Creset %s - %C(bold blue)%an%Creset, %Cgreen%cr' --abbrev-commit"
alias gp='git push'
alias gb="git checkout -b"
alias gch="git checkout"
alias gaa='git add -A'
alias ga="git add"
alias gc="git commit -m"
alias gm='git mergetool'
alias master='git checkout master && gu'
alias develop='git checkout develop && gu'
