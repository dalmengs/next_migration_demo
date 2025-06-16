#!/bin/bash

# Project Path
LEGACY_DIR="./legacy_react_app"
NEXT_DIR="./next_migration_app"

# src → src/legacy
echo "📁 Copy: src → src/legacy"
mkdir -p "$NEXT_DIR/src/legacy"
cp -R "$LEGACY_DIR/src/"* "$NEXT_DIR/src/legacy/"

# public/static → public/static
echo "🖼️ Copy: public/static → public/static"
mkdir -p "$NEXT_DIR/public/static"
cp -R "$LEGACY_DIR/public/static/"* "$NEXT_DIR/public/static/"

echo "✅ Done: Legacy files copied to next app"
