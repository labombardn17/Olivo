#!/bin/bash
# Rebuilds and restarts the local production server on port 3100.
cd "$(dirname "$0")/.."
pkill next-server 2>/dev/null; sleep 1
npx next build 2>&1 | grep -E "error|Error|Failed|✓ Compiled" | head -5
nohup npx next start -p 3100 > /tmp/next-start.log 2>&1 &
for i in $(seq 1 30); do sleep 1; curl -s -o /dev/null http://127.0.0.1:3100/ && break; done
echo "root $(curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1:3100/) atelier $(curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1:3100/atelier)"
