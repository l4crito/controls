port=4200
m=default message
deploy:
	ng build --prod --base-href  https://l4crito.github.io/controls/
	rm -rf docs/*
	cp -r dist/css/* docs/
	git add .
	git commit -m "$(m)"
	git push