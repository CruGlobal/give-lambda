#!/usr/bin/env bash

# Set PROJECT_NAME and ENVIRONMENT for testing/demo
export PROJECT_NAME=give-lambda
if [[ -z "${ENVIRONMENT}" ]]; then
  export ENVIRONMENT=staging
fi

# Export environment variables for use with serverless
source $ECS_CONFIG/bin/load_environment.sh
load_environment

set -x && npx serverless --stage $ENVIRONMENT $@
