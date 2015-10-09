test:
	./node_modules/.bin/mocha ./test/specs/**/*.js

requirejs:
	rm static/js/build.min.js || exit 0;
	./node_modules/.bin/r.js -o static/build.config.js
	mv static/js-build/config.js static/js/build.min.js
	rm -rf static/js-build/

coverage:
	./node_modules/.bin/jscover src src-cov
	mv src src-old
	mv src-cov src
	./node_modules/.bin/mocha ./test/specs/**/*.js -R html-cov > coverage.html || exit 0;
	./node_modules/.bin/mocha ./test/specs/**/*.js -R mocha-reporter-cov-summary || exit 0;
	rm -rf src
	mv src-old src

.PHONY: test
