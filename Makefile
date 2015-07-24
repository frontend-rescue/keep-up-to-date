# Build
build:
	grunt build && \
	 grunt build --lang=de && \
	 grunt build --lang=du && \
	 grunt build --lang=es && \
	 grunt build --lang=fr && \
	 grunt build --lang=he && \
	 grunt build --lang=jp && \
	 grunt build --lang=pl && \
	 grunt build --lang=pt && \
	 grunt build --lang=zh

.PHONY: build