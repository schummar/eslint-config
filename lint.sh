#!/bin/sh

eslint \
    --cache \
    --cache-location node_modules/.cache/eslint/.eslintcache \
    --cache-strategy content \
    --max-warnings 0 \
    --no-error-on-unmatched-pattern \
    ${@:-.}