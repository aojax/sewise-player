(function(win){
	/**
	 * Constructor.
	 * @name ILivePlayer : html5直播主播器接口对象.
	 * 
	 */
	var ILivePlayer = win.SewisePlayer.ILivePlayer = win.SewisePlayer.ILivePlayer ||
	{
		live: function(){},
		play: function(){},
		pause: function(){},
		stop: function(){},
		seek: function(shiftTime){},
		changeClarity: function(level){},
		setVolume: function(volume){},
		toPlay: function(streamUrl, title, shiftTime, autostart){},
		duration: function(){},
		liveTime: function(){},
		playTime: function(){},
		type: function(){},
		showTextTip: function(){},
		hideTextTip: function(){},

		muted: function(){}
		
	};
	
})(window)