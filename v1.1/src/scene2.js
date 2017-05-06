var scene2Layer=cc.Layer.extend({

	sprite:null,
	ctor:function(){
		this._super();

		var size=cc.winSize;
		var sprite=new cc.Sprite(res.scene2_bg);
			sprite.setAnchorPoint(cc.p(0.5,0.5));
			sprite.setPosition(cc.p(size.width/2,size.height/2));
			this.addChild(sprite,0);


		var close_sprite= new cc.Sprite(res.exit_btn);
			close_sprite.setAnchorPoint(cc.p(0.5,0.5));
			close_sprite.setPosition(cc.p(size.width/2,size.height/2));
			this.addChild(close_sprite,2);	


		if(cc.sys.capabilities.hasOwnProperty('mouse')){
			cc.eventManager.addListener({
				event:cc.EventListener.MOUSE,
				onMouseDown:function(event){
					if(event.getButton()==cc.EventMouse.BUTTON_LEFT){
						 cc.director.runScene(new HelloWorldScene());
					}
				}
			},this);
		}
		

		return true;
	}




});


var scene2=cc.Scene.extend({
	onEnter:function(){
		this._super();
		var sceneLayer=new scene2Layer();
		this.addChild(sceneLayer);
	}


});