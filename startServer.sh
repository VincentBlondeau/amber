#!/bin/bash
cd `dirname $0`
node amber/cli/js/amber-cli.js serve $@
