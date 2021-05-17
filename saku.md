# rebuild
    saku backdate lbuild

# backdate
	sed -i "s/2021/2020/" ${HOME}/i/11-digital-garden/.meta/last-mod-go

# lbuild
> Local build
	/home/richie/.local/bin/iroh parse ${HOME}/i/11-digital-garden/.meta/nilavara.yml
	cd ${HOME}/Public/11-digital-garden
	cp index/index.html . 
	fastmod --accept-all '<li><a href="index">index</a></li>' ""  **/*.html
	fastmod --accept-all "<title>Index</title>" "<title>Nilavara</title>" index.html 

# test
    fastmod --accept-all 'https://nilavara.surge.sh' 'http://127.0.0.1:8000' **/*.html