BIN=node_modules/.bin

test:
	make lint
	$(BIN)/mocha ./test/specs/**/*.js

lint:
	$(BIN)/eslint web.js
	$(BIN)/eslint src/**/*.js
	$(BIN)/eslint test/specs/**/*.js

requirejs:
	rm static/js/build.min.js || exit 0;
	$(BIN)/r.js -o static/build.config.js
	mv static/js-build/config.js static/js/build.min.js
	rm -rf static/js-build/

coverage:
	$(BIN)/jscover src src-cov
	mv src src-old
	mv src-cov src
	$(BIN)/mocha ./test/specs/**/*.js -R html-cov > coverage.html || exit 0;
	$(BIN)/mocha ./test/specs/**/*.js -R mocha-reporter-cov-summary || exit 0;
	rm -rf src
	mv src-old src

setup:
	mkdir config || exit 0;
	rm -rf config/eslint-coding-standards || exit 0;
	(cd config && curl -L https://github.com/neogeek/eslint-coding-standards/archive/master.tar.gz | tar -xz && mv eslint-coding-standards-master eslint-coding-standards)

.PHONY: test
