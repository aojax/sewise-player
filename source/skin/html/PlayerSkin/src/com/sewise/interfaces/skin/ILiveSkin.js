(function(win){
	/**
	 * Constructor.
	 * @name ILiveSkin : html5直播皮肤接口对象.
	 * 
	 */
	var ILiveSkin = win.SewisePlayerSkin.ILiveSkin = win.SewisePlayerSkin.ILiveSkin || 
	{
		player: function(){},
		started: function(){},
		paused: function(){},
		stopped: function(){},
		seeking: function(b){},
		buffering: function(b){},
		bufferProgress: function(p){},
		loadedProgress: function(p){},
		programTitle: function(title){},
		duration: function(time){},
		playTime: function(time){},
		startTime: function(time){},
		loadSpeed: function(time){},
		initialClarity: function(levels){},
		
		lang: function(lang){},
		logo: function(url){},
		clarityButton: function(state){},
		timeDisplay: function(state){},
		controlBarDisplay: function(state){},
		topBarDisplay: function(state){},
		
		timeUpdate:function(){}
		
	};
	
})(window)