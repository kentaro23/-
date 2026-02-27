#!/usr/bin/env bash
set -euo pipefail

BASE_REF="${1:-HEAD}"
TARGETS=(app components lib)

echo "Comparing Japanese text changes against ${BASE_REF}..."
if git diff -- "$BASE_REF" -- "${TARGETS[@]}" | rg "^[+-].*[ぁ-んァ-ン一-龥]" -n; then
  echo ""
  echo "Detected possible content text changes in added/removed lines."
  exit 1
else
  echo "No Japanese content-text delta detected in diff lines."
fi
