.PHONY: install clean
pwd=$(shell pwd)
upgrade:
	$(foreach N, $(shell ls -d packages/*/), cd $(pwd)/$(N);npm-upgrade;)
	yarn install;
lint:
	cd packages/basic; npx tsc --noEmit; npx tslint -p .;
	cd packages/redux-hooks; npx tsc --noEmit; npx tslint -p .;

