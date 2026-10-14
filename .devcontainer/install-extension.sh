#!/usr/bin/env bash
# Installs (or updates) the xzor VS Code extension from the latest release; it is not on the Marketplace yet.
set -uo pipefail

repo="pedro-gilmora/source-crafter-xzor"
code_cli=$(command -v code || ls -t "$HOME"/.vscode-remote/bin/*/bin/remote-cli/code 2> /dev/null | head -n 1 || true)
if [ -z "$code_cli" ]; then
  echo "xzor: VS Code CLI not found; install the extension from https://github.com/$repo/releases"
  exit 0
fi

url=$(curl -fsSL "https://api.github.com/repos/$repo/releases/latest" | grep -o 'https://[^"]*\.vsix' | head -n 1)
tmp=$(mktemp -d)
curl -fsSL -o "$tmp/xzor.vsix" "$url"
"$code_cli" --install-extension "$tmp/xzor.vsix" --force
rm -rf "$tmp"
