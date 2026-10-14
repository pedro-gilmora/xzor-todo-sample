#!/usr/bin/env bash
# Runs once when the container is created.
set -euo pipefail

if ! command -v unzip > /dev/null; then
  sudo apt-get update -qq && sudo apt-get install -y -qq unzip
fi
if ! command -v bun > /dev/null && [ ! -x "$HOME/.bun/bin/bun" ]; then
  curl -fsSL https://bun.sh/install | bash -s "bun-v1.4.0"
fi
export PATH="$HOME/.bun/bin:$PATH"

bun install
bun run build
