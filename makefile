.PHONY: install clean
pwd=$(shell pwd)
upgrade:
	$(foreach N, $(shell ls -d packages/*/), cd $(pwd)/$(N);npm-upgrade;)
	yarn install;
