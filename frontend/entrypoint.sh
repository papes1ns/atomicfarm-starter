#!/bin/sh
set -e

inject_javascript=$(cat <<EOF
window.globals = { \
  VERSION: "$VERSION", \
};
EOF
)

echo "Injecting javascript into index.html"
echo $inject_javascript

sed -i "s|window\.globals\;|$inject_javascript|g" html/index.html

exec "$@"


