# rebuild

    saku backdate lbuild

# serve

    saku lbuild dev

# update

    saku lbuild upload

# backdate

	sed -i "s/2021/2020/" ${HOME}/i/11-digital-garden/.meta/last-mod-go

# lbuild
> Local build

	/home/richie/.local/bin/iroh parse ${HOME}/i/11-digital-garden/.meta/nilavara.yml
	cd ${HOME}/Public/11-digital-garden
	cp index/index.html . 
	fastmod --accept-all '<li><a href="index">index</a></li>' ""  **/*.html
	fastmod --accept-all "<title>Index\s*</title>" "<title>Nilavara</title>" index.html 

# dev

    rm -rf /tmp/nilavara
    cp -r ${HOME}/Public/11-digital-garden /tmp/nilavara
    fastmod --accept-all 'https://nilavara.surge.sh' 'http://127.0.0.1:9000' /tmp/nilavara/
    python3 -m http.server --directory /tmp/nilavara 9000

# upload

  git add .
	git commit -m "Update"
	git push
	surge --domain nilavara.surge.sh --project ./