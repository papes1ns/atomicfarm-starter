#!/bin/sh
set -e

inject_javascript=$(cat <<EOF
window.globals = { \
  VERSION: "$VERSION", \
  API_BASE_URL: "$API_BASE_URL", \
};
EOF
)

index_path="$(pwd)/html/index.html"

echo "injecting javascript into $index_path : $inject_javascript"

sed -i "s|window\.globals\;|$inject_javascript|g" $index_path

exec "$@"


