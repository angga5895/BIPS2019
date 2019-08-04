if(!_.pareto){_.pareto=1;(function($){var sR=function(a){$.vq.call(this,a);this.g=[];this.f=[];this.Hg=[];this.b=0},tR=function(a,b,c,d,e){$.Hz.call(this,a,b,c,d,e)},vR=function(a,b,c){if($.p(c)&&-1<c){var d=null;a=a.data();$.p(a)&&(a=a.ql(c),$.K(a,sR)||$.K(a,uR))&&(d={},d.cf=$.Kl(a.YB(c),2),d.rf=$.Kl(a.JF(c),2))}d&&(b.cf=d.cf,b.rf=d.rf)},uR=function(a){$.vq.call(this,a)},wR=function(){$.cA.call(this);this.Ia("pareto");this.U=$.Rr();this.U.kh(0).Ih(100);this.Zd="pareto"},xR=function(a){if($.p(a.g)){var b=a.g;$.pq(b);b=b.b;var c=a.Zh(0),
d;c?d=c.bb():d=a.bb();d.kh(0);b?d.Ih(b):d.Ih(1)}},nfa=function(a,b){return $.sn(a)?$.sn(b)?-1:1:$.sn(b)?-1:b-a},yR=function(a){var b=new wR;b.pa("defaultSeriesType","column");b.ug();b.pe();b.data(a);return b};$.H(sR,$.vq);$.g=sR.prototype;$.g.qa=1;$.g.Lj=function(a,b,c){a=sR.B.Lj.call(this,a,b,c);"value"==c&&(a=$.N(a),(0,window.isNaN)(a)||0>a)&&(a=0);return a};
$.g.AE=function(){this.g=[];this.f=[];this.Hg=[];this.b=0;this.I(1);for(var a=this.aa(),b;a.advance();)b=a.get("value"),this.Hg.push(b),this.b+=b;if(this.Hg.length)if(0==this.b)for(a=0;a<this.Hg.length;a++)this.g[a]=0,this.f[a]=0;else for(this.g[0]=this.f[0]=100*this.Hg[0]/this.b,a=1;a<this.Hg.length;a++)this.g[a]=100*this.Hg[a]/this.b,this.f[a]=this.f[a-1]+100*this.Hg[a]/this.b;return null};$.g.bH=function(a){this.Js=null;$.W(a,16)&&this.u(1,16)};$.g.YB=function(a){return this.f[a]};$.g.JF=function(a){return this.g[a]};
$.g.kk=function(a){return this.Hg[a]};$.H(tR,$.Hz);$.g=tR.prototype;$.g.ND={"%BubbleSize":"size","%RangeStart":"low","%RangeEnd":"high","%XValue":"x","%CF":"cf","%RF":"rf"};$.g.pm=function(a,b){var c=tR.B.pm.call(this,a,b),d=this.data(),e;$.p(d)&&$.p(c.index)&&-1<(e=Number(c.index.value))&&(d=d.ql(e),$.K(d,sR)||$.K(d,uR))&&(c.cf={value:$.Kl(d.YB(e),2),type:"number"},c.rf={value:$.Kl(d.JF(e),2),type:"number"});return c};$.g.me=function(a,b){var c=tR.B.me.call(this,a,b);vR(this,c,c.index);return c};
$.g.oi=function(a){a=tR.B.oi.call(this,a);vR(this,a,a.index);return a};$.g.Ad=function(a){var b=tR.B.Ad.call(this,a);vR(this,b,a);return b};$.H(uR,$.vq);uR.prototype.Lj=function(a,b,c){return"value"==c?this.Od.YB(b):uR.B.Lj.call(this,a,b,c)};uR.prototype.YB=function(a){return this.Od.YB(a)};uR.prototype.JF=function(a){return this.Od.JF(a)};$.H(wR,$.cA);
wR.prototype.data=function(a,b){if($.p(a)){if(a){var c=a.title||a.caption;c&&this.title(c);a.rows&&(a=a.rows)}if(this.jH!==a){this.jH=a;$.hd(this.Dl);$.K(a,$.oq)?this.Od=this.Dl=a.$i():$.K(a,$.yq)?this.Od=this.Dl=a.Yd():this.Od=(this.Dl=new $.yq($.B(a)||$.z(a)?a:null,b)).Yd();$.U(this);this.g&&$.Xp(this.g,this.xd,this);$.hd(this.g);this.g=new sR(this.Od.sort("value",nfa));$.L(this.g,this.xd,this);xR(this);c=this.Zh(0);var d=this.Zh(1);this.Ma&&$.hd(this.Ma);this.Ma=this.g.$i();c||(c=this.column());
c.data(this.Ma);this.eb&&$.hd(this.eb);this.eb=new uR(this.g);d||(d=this.line().clip(!1).Gb(!0).bb(this.U));d.data(this.eb);this.da(!0)}return this}return this.g};wR.prototype.xd=function(a){$.W(a,16)&&xR(this)};var zR={},AR=$.nE|7864320;zR.area={zb:1,Db:1,Ib:[$.LE,$.dF,$.ZE,$.TE,$.KE,$.eF,$.$E,$.SE,$.NE,$.fF,$.aF,$.gF],Hb:null,Bb:null,vb:AR,Cb:"value",wb:"zero"};zR.bar={zb:6,Db:2,Ib:[$.nF,$.NE,$.VE,$.gF,$.XE,$.aF,$.bF,$.fF],Hb:null,Bb:null,vb:AR,Cb:"value",wb:"zero"};
zR.box={zb:3,Db:2,Ib:[$.nF,$.NE,$.aM,$.bM,$.cM],Hb:null,Bb:null,vb:AR,Cb:"highest",wb:"lowest"};zR.bubble={zb:4,Db:2,Ib:[$.QE,$.RE,$.UE,$.WE],Hb:null,Bb:null,vb:AR,Cb:"value",wb:"value"};zR.candlestick={zb:5,Db:2,Ib:[$.XE,$.aF,$.bF,$.fF],Hb:null,Bb:null,vb:AR,Cb:"high",wb:"low"};zR.column={zb:6,Db:2,Ib:[$.nF,$.NE,$.VE,$.gF,$.XE,$.aF,$.bF,$.fF],Hb:null,Bb:null,vb:AR,Cb:"value",wb:"zero"};zR["jump-line"]={zb:19,Db:2,Ib:[$.LE,$.cF,$.YE,$.ME],Hb:null,Bb:null,vb:AR,Cb:"value",wb:"value"};
zR.stick={zb:20,Db:2,Ib:[$.LE,$.cF,$.YE,$.ME],Hb:null,Bb:null,vb:AR,Cb:"value",wb:"zero"};zR.line={zb:8,Db:1,Ib:[$.LE,$.dF,$.ZE,$.TE],Hb:null,Bb:null,vb:AR,Cb:"value",wb:"value"};zR.marker={zb:9,Db:2,Ib:[$.nF,$.NE,$.VE,$.gF,$.XE,$.aF,$.bF,$.fF],Hb:null,Bb:null,vb:$.nE|3670016,Cb:"value",wb:"value"};zR.ohlc={zb:10,Db:2,Ib:[$.YE,$.cF],Hb:null,Bb:null,vb:AR,Cb:"high",wb:"low"};zR["range-area"]={zb:11,Db:1,Ib:[$.KE,$.mF,$.iF,$.NE,$.hF,$.lF,$.PE,$.OE],Hb:null,Bb:null,vb:AR,Cb:"high",wb:"low"};
zR["range-bar"]={zb:12,Db:2,Ib:[$.nF,$.NE,$.jF,$.kF,$.PE,$.OE],Hb:null,Bb:null,vb:AR,Cb:"high",wb:"low"};zR["range-column"]={zb:12,Db:2,Ib:[$.nF,$.NE,$.jF,$.kF,$.PE,$.OE],Hb:null,Bb:null,vb:AR,Cb:"high",wb:"low"};zR["range-spline-area"]={zb:13,Db:1,Ib:[$.KE,$.iF,$.mF,$.NE,$.hF,$.lF,$.PE,$.OE],Hb:null,Bb:null,vb:AR,Cb:"high",wb:"low"};zR["range-step-area"]={zb:14,Db:1,Ib:[$.KE,$.NE,$.iF,$.mF],Hb:null,Bb:null,vb:AR,Cb:"high",wb:"low"};
zR.spline={zb:15,Db:1,Ib:[$.LE,$.dF,$.ZE,$.TE],Hb:null,Bb:null,vb:AR,Cb:"value",wb:"value"};zR["spline-area"]={zb:16,Db:1,Ib:[$.LE,$.dF,$.ZE,$.TE,$.KE,$.eF,$.$E,$.SE,$.NE,$.fF,$.aF,$.gF],Hb:null,Bb:null,vb:AR,Cb:"value",wb:"zero"};zR["step-area"]={zb:17,Db:1,Ib:[$.LE,$.dF,$.ZE,$.TE,$.KE,$.eF,$.$E,$.SE,$.NE,$.fF,$.aF,$.gF],Hb:null,Bb:null,vb:AR,Cb:"value",wb:"zero"};zR["step-line"]={zb:18,Db:1,Ib:[$.LE,$.dF,$.ZE,$.TE],Hb:null,Bb:null,vb:AR,Cb:"value",wb:"value"};wR.prototype.Bi=zR;$.ay(wR,wR.prototype.Bi);
$.g=wR.prototype;$.g.Os=function(a,b){return new tR(this,this,a,b,!0)};$.g.wz=function(){return $.Nr};$.g.eC=function(){return["Pareto chart xScale","ordinal"]};$.g.MF=function(){return 3};$.g.BK=function(){return["Pareto chart yScale","scatter","linear, log"]};$.g.et=function(){return[this]};$.g.xF=function(){return["value","CF","RF"]};$.g.J0=function(a,b,c){b=c.ka();c=this.g.ql(b);a[1]=c.kk(b);a[2]=c.YB(b);a[3]=c.JF(b)};$.g.mb=function(){this.J(131072)&&xR(this);wR.B.mb.call(this)};
$.g.Ji=function(a){this.J(131072)&&xR(this);return wR.B.Ji.call(this,a)};$.g.pZ=function(){return this.Wa()};$.g.R=function(){$.jd(this.g,this.Od,this.Dl,this.Ma,this.eb);this.eb=this.Ma=this.Dl=this.Od=this.g=null;$.hd(this.U);this.U=null;wR.B.R.call(this)};$.g.F=function(){var a=wR.B.F.call(this);$.p(this.data())&&(a.chart.data=this.data().F());return a};$.g.ug=function(a){wR.B.ug.call(this,a);this.fi(1).scale()||this.fi(1).scale(this.U)};
$.g.Y=function(a,b){wR.B.Y.call(this,a,b);b&&this.fi(1).scale(this.U);"data"in a&&this.data(a.data)};var BR=wR.prototype;BR.data=BR.data;BR.xScale=BR.Wa;BR.yScale=BR.bb;BR.crosshair=BR.Mg;BR.xGrid=BR.Im;BR.yGrid=BR.Jm;BR.xMinorGrid=BR.dr;BR.yMinorGrid=BR.gr;BR.xAxis=BR.ah;BR.getXAxesCount=BR.dC;BR.yAxis=BR.fi;BR.getYAxesCount=BR.fC;BR.getSeries=BR.Oe;BR.lineMarker=BR.um;BR.rangeMarker=BR.Cm;BR.textMarker=BR.Gm;BR.palette=BR.Yb;BR.markerPalette=BR.lf;BR.hatchFillPalette=BR.be;BR.getType=BR.Qa;
BR.addSeries=BR.Ak;BR.getSeriesAt=BR.Zh;BR.getSeriesCount=BR.jk;BR.removeSeries=BR.Vn;BR.removeSeriesAt=BR.nn;BR.removeAllSeries=BR.Ro;BR.getPlotBounds=BR.ag;BR.xZoom=BR.fq;BR.yZoom=BR.gq;BR.xScroller=BR.Zo;BR.yScroller=BR.ir;BR.getStat=BR.pg;BR.annotations=BR.bk;BR.getXScales=BR.lx;BR.getYScales=BR.nx;$.Fo.pareto=yR;$.F("anychart.pareto",yR);}).call(this,$)}
