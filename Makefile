test:
	./node_modules/.bin/mocha ./test/specs/**/*.js

requirejs:
	grunt
	rm static/js/build.min.js || exit 0;
	./node_modules/.bin/r.js -o static/build.config.js
	mv static/js-build/config.js static/js/build.min.js
	rm -rf static/js-build/

.PHONY: test
