var afp_cfg={"ngs.ru":{ymid:1337757},"76.ru":{ymid:12725875},"e1.ru":{ymid:6874273},"161.ru":{ymid:12725824,preload:[{ownerId:320882,containerId:"adfox_15687838864664616",params:{p1:"cgtls",p2:"gncv"}},{ownerId:320882,containerId:"adfox_156878415021499013",params:{p1:"cgtlt",p2:"gnev"},afp_size:[240,400]}]},"29.ru":{ymid:12725860},"45.ru":{ymid:49999966,preload:[{ownerId:320882,containerId:"adfox_156992684144466561",params:{p1:"cguuq",p2:"gncv"}},{ownerId:320882,containerId:"adfox_157010163090543115",params:{p1:"cguur",p2:"gnev"},afp_size:[240,400]}]},"ngs55.ru":{ymid:1337747,preload:[{ownerId:320882,containerId:"adfox_156888604708682498",params:{p1:"cgtdy",p2:"gncv"}},{ownerId:320882,containerId:"adfox_156888651436544316",params:{p1:"cgtdz",p2:"gnev"},afp_size:[240,400]}]},"59.ru":{ymid:6775807,preload:[{ownerId:320882,containerId:"adfox_156878605455119618",params:{p1:"cgtks",p2:"gncv"}},{ownerId:320882,containerId:"adfox_156878987821958546",params:{p1:"cgtkt",p2:"gnev"},afp_size:[240,400]}]},"63.ru":{ymid:12725662},"72.ru":{ymid:12725777},"74.ru":{ymid:6596923},"ufa1.ru":{ymid:12725830}};Ya&&Ya.adfoxCode&&function(d){var create,places={},logdata={},domain=location.hostname.match(/\b\w+\.ru\b/)[0],t0=+new Date,methods=["destroy","initialize","reload","hide","show"],events=["onLoad","onRender","onStub","onError","onDestroy"];(afp_cfg=afp_cfg[domain])&&(Ya.adfoxCode.create=(create=Ya.adfoxCode.create.bind(Ya.adfoxCode),function(cfg,preload){var place=places[cfg.containerId];if(place&&place.pre){if(cfg.p1===place.cfg.p1&&cfg.p2===place.cfg.p2&&cfg.containerId===place.cfg.origContainerId){var div=place.pre;return place.pre=!1,place.cfg.afp_size&&(div.style.position="",div.style.transform=""),d.getElementById(place.cfg.origContainerId).appendChild(div),place.log("c2"),place.afpo.destroy=function(destroy,div){return function(){destroy(),div.parentNode.removeChild(div)}}(place.afpo.destroy,div),place.afpo}place.afpo.destroy(),place.pre.parentNode.removeChild(place.pre)}preload&&((div=d.createElement("div")).id="afp_"+cfg.containerId,cfg.origContainerId=cfg.containerId,cfg.containerId=div.id,cfg.afp_size&&(div.style.position="absolute",div.style.width=cfg.afp_size[0]+"px",div.style.height=cfg.afp_size[1]+"px",div.style.transform="scale(1e-4)"),d.body.insertBefore(div,d.body.childNodes[0])),events.forEach(function(event){var handler=cfg[event];cfg[event]=function(){return place.log(event),handler&&handler()}});var destroy,afo=create(cfg);return(place={id:cfg.origContainerId||cfg.containerId,log:function(iden){logdata[place.id]=logdata[place.id]||{ev:{}};var m=iden.toLowerCase().match(/^(on)?(..)/),to=m[1]?logdata[place.id].ev:logdata[place.id];to[m[2]]=to[m[2]]||+new Date,flushLogs()},cfg:cfg,afo:afo,afpo:{},pre:preload&&div}).log("create"),places[place.id]=place,methods.reduce(function(afpo,method){return afpo[method]=function(){return place.log(method),place.afo[method]()},afpo},place.afpo),place.afpo.destroy=(destroy=place.afpo.destroy,function(){flushLogs(!0),destroy()}),place.afpo}),methods.forEach(function(method){Ya.adfoxCode[method]=function(id){return places[id]&&places[id].afpo[method]()}}),"/"===location.pathname&&900<window.innerWidth&&afp_cfg.preload&&afp_cfg.preload.forEach(function(cfg){Ya.adfoxCode.create(cfg,"preload")}));function flushLogs(okdoit){if(okdoit){var timings={},t1=flushLogs.t1||0;for(containerId in flushLogs.t1=+new Date,logdata){var cmsId;for(cmsId=d.getElementById(containerId);cmsId&&!cmsId.dataset.placeId;cmsId=cmsId.parentNode);cmsId=(cmsId=cmsId&&cmsId.dataset.placeId)?"cms-"+cmsId:containerId;var log=logdata[containerId];timings[cmsId]=timings[cmsId]||{},log.cr&&log.cr>t1&&(timings[cmsId]["start..create"]=log.cr-t0),log.c2&&log.c2>t1&&(timings[cmsId]["start..create2"]=log.c2-t0),log.ev.lo&&log.ev.lo>t1&&log.cr&&(timings[cmsId]["create..load"]=log.ev.lo-log.cr),log.ev.er&&log.ev.er>t1&&log.cr&&(timings[cmsId]["create..error"]=log.ev.er-log.cr),log.ev.st&&log.ev.st>t1&&log.cr&&(timings[cmsId]["create..stub"]=log.ev.st-log.cr),log.ev.re&&log.ev.re>t1&&log.ev.lo&&(timings[cmsId]["load..render"]=log.ev.re-log.ev.lo,timings[cmsId]["start..render"]=log.ev.re-t0)}for(var p in timings)for(var pp in timings[p])return afp_cfg.ymid&&ym(afp_cfg.ymid,"params",{"Тайминги adfox":timings}),void(flushLogs=function(){})}else clearTimeout(flushLogs.timer),flushLogs.timer=setTimeout(flushLogs.bind(this,!0),2300)}}(document);