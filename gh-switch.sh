#!/bin/bash

# GitHub Account Switcher Script
# Usage: ./gh-switch.sh personal|work

set -e

ACCOUNT_TYPE=$1

if [ -z "$ACCOUNT_TYPE" ]; then
    echo "Usage: $0 [personal|work]"
    echo ""
    echo "Current status:"
    gh auth status 2>/dev/null || echo "Not logged in to GitHub CLI"
    exit 1
fi

case $ACCOUNT_TYPE in
    "personal")
        echo "🔄 Switching to personal GitHub account..."
        
        # Logout from current account
        echo "Logging out from current account..."
        gh auth logout --hostname github.com 2>/dev/null || true
        
        # Remove work SSH redirect
        git config --global --unset url."git@github.com-work:".insteadOf 2>/dev/null || true
        
        # Set personal SSH redirect
        git config --global url."git@github.com-personal:".insteadOf "git@github.com:"
        
        # Login to personal account
        echo "Please authenticate with your PERSONAL GitHub account..."
        gh auth login --hostname github.com --scopes "repo,workflow"
        
        # Set git protocol to SSH
        gh config set git_protocol ssh
        
        echo "✅ Switched to personal account"
        echo "Testing SSH connection..."
        ssh -T git@github.com-personal
        ;;
        
    "work")
        echo "🔄 Switching to work GitHub account..."
        
        # Logout from current account
        echo "Logging out from current account..."
        gh auth logout --hostname github.com 2>/dev/null || true
        
        # Remove personal SSH redirect
        git config --global --unset url."git@github.com-personal:".insteadOf 2>/dev/null || true
        
        # Set work SSH redirect
        git config --global url."git@github.com-work:".insteadOf "git@github.com:"
        
        # Login to work account
        echo "Please authenticate with your WORK GitHub account (bhatkedar17)..."
        gh auth login --hostname github.com --scopes "repo,workflow"
        
        # Set git protocol to SSH
        gh config set git_protocol ssh
        
        echo "✅ Switched to work account"
        echo "Testing SSH connection..."
        ssh -T git@github.com-work
        ;;
        
    *)
        echo "❌ Invalid option. Use 'personal' or 'work'"
        exit 1
        ;;
esac

echo ""
echo "Current GitHub CLI status:"
gh auth status