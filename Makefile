# Build
build:
	node_modules/.bin/grunt build && \
	node_modules/.bin/grunt build --lang=de && \
	node_modules/.bin/grunt build --lang=nl && \
	node_modules/.bin/grunt build --lang=es && \
	node_modules/.bin/grunt build --lang=fr && \
	node_modules/.bin/grunt build --lang=he && \
	node_modules/.bin/grunt build --lang=jp && \
	node_modules/.bin/grunt build --lang=pl && \
	node_modules/.bin/grunt build --lang=pt && \
	node_modules/.bin/grunt build --lang=zh

.PHONY: build
