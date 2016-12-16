BIN=node_modules/.bin

start:
	$(BIN)/concurrently --kill-others --timestamp-format "HH:mm:ss" --prefix "[{index}] {time}" "make serve" "make watch"

serve:
	$(BIN)/nodemon web.js --ignore static/ --ignore test/

build:
	mkdir -p static/js/templates
	$(BIN)/handlebars src/views/ -f static/js/templates/views.min.js -e hbs -c handlebars
	$(BIN)/handlebars src/views/partials/ -f static/js/templates/partials.min.js -p -e hbs -c handlebars
	$(BIN)/spire-of-babel static/js/app.js --bundle --sourcemap --minify --output static/build.min.js
	$(BIN)/node-sass static/css/styles.scss static/css/styles.css

watch:
	make build
	$(BIN)/onchange 'src/views/**/*.hbs' 'static/css/**/*.scss' 'static/js/**/*.js' -e 'static/**/*.min.*' -- make build

test:
	make lint
	$(BIN)/mocha test/specs/

lint:
	$(BIN)/eslint web.js
	$(BIN)/eslint static/js/
	$(BIN)/eslint src/
	$(BIN)/eslint test/specs/

coverage:
	$(BIN)/istanbul cover $(BIN)/_mocha test/specs/

.PHONY: test coverage
