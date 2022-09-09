#!/bin/bash -e

if [[ "$HOSTS_FILE_PATH" != "" ]]; then
  cat $HOSTS_FILE_PATH >> /etc/hosts
fi
su pptruser
./lib/parse_config.js $@
/cmd -c /tmp/config.yaml
