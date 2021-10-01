#!/bin/bash

./lib/hosts.js $@ >> /etc/hosts
./lib/parse_config.js $@
/cmd -c /tmp/config.yaml
