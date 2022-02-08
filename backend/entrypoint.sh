#!/bin/sh
set -e

echo "RAILS_ENV == $RAILS_ENV"

if [ -f tmp/pids/server.pid ]; then
  rm tmp/pids/server.pid
fi

exec "$@"