

var hellowWorldLayer=cc.Layer.extend({
	sprite:null,
	totalEarn:0,
	ctor:function(totalEarn){
		this._super();
		var size=cc.winSize;
		this.totalEarn=totalEarn;
		var level= new cc.LabelTTF("Level 2","Arial",35);
            level.setPosition(cc.p(size.width/2,size.height/2));
            this.addChild(level,1);

          var levelEarn= new cc.LabelTTF("You earned in level 1 : "+this.totalEarn,"Arial",35);
            levelEarn.setPosition(cc.p(size.width/2,size.height/2+100));
            this.addChild(levelEarn,1); 
            console.log(this.totalEarn); 

		return true;
	}

});

var sceneTwo= cc.Scene.extend({

 ctor:function (data) 
    	{
    		this._super();
    		this.init(data);
    	},

    	init:function (data) 
    	{
                 var sceneLayer = new hellowWorldLayer(data);
                 this.addChild(sceneLayer,1);
    	}

});