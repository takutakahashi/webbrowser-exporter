#!/bin/bash -e

./lib/parse_config.js $@
/cmd -c /tmp/config.yaml
