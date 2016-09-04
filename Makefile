BIN=node_modules/.bin

serve:
	$(BIN)/concurrently --kill-others --timestamp-format "HH:mm:ss" --prefix "[{index}] {time}" "make start" "make watch"

start:
	node web.js

build:
	$(BIN)/handlebars src/views/ -f static/templates/views.js -e hbs -c handlebars
	$(BIN)/handlebars src/views/partials/ -f static/templates/partials.js -p -e hbs -c handlebars
	$(BIN)/spire-of-babel static/js/app.js --bundle --sourcemap --minify --output static/build.min.js
	$(BIN)/node-sass static/css/styles.scss static/css/styles.css

watch:
	make build
	$(BIN)/onchange 'src/views/**/*.hbs' 'static/css/**/*.scss' 'static/js/**/*.js' -- make build

test:
	make lint
	$(BIN)/mocha ./test/specs/**/*.js

lint:
	$(BIN)/eslint web.js
	$(BIN)/eslint static/**/*.js --ignore-pattern **/*.min.js
	$(BIN)/eslint src/**/*.js
	$(BIN)/eslint test/specs/**/*.js

coverage:
	$(BIN)/jscover src src-cov
	mv src src-old
	mv src-cov src
	$(BIN)/mocha ./test/specs/**/*.js -R html-cov > coverage.html || exit 0;
	$(BIN)/mocha ./test/specs/**/*.js -R mocha-reporter-cov-summary || exit 0;
	rm -rf src
	mv src-old src

.PHONY: test
