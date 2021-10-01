#!/bin/bash -e

./lib/hosts.js $@ |sort |uniq >> /etc/hosts
./lib/parse_config.js $@
/cmd -c /tmp/config.yaml
