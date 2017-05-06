
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    freez:false,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        this.size = cc.winSize;

         this.bg_sprite=new cc.Sprite.create(res.bg);
         
         this.bg_sprite.setPosition(cc.p(this.size.width+335,this.size.height/2));
         this.addChild(this.bg_sprite,1);

         this.i=2;
         this.level=0;
         this.heroAltos= new cc.Sprite.create(g_resources[i]);
         this.heroAltos.setPosition(cc.p(65,115));
         this.addChild(this.heroAltos,2);

         this.scheduleUpdate();
         this.schedule(this.animatehero,.001);

        

        return true;
    },
    update:function(dt){
        if(this.bg_sprite.getPosition().x<(-300)){
            
            this.bg_sprite.setPosition(cc.p(this.size.width+335,this.size.height/2));


        }
         if(this.i>24){
            this.i=2;

        }
        
        this.heroAltos.setTexture(g_resources[this.i]);
        this.i++;
        
       this.bg_sprite.setPosition(cc.p(this.bg_sprite.getPosition().x-4,this.bg_sprite.getPosition().y));
       
       //console.log("XCordinate: "+this.bg_sprite.getPosition().x);
       //console.log("YCordinate: "+this.bg_sprite.getPosition().y);

        

    },
    animatehero:function(dt){
        if(this.heroAltos.getPosition().y>115){

           this.heroAltos.setPosition(cc.p(this.heroAltos.getPosition().x,this.heroAltos.getPosition().y-10));

        }
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
         cc.eventManager.addListener({
            event:cc.EventListener.KEYBOARD,
            onKeyPressed:function(key,event){
                layer.heroAltos.setPosition(cc.p(layer.heroAltos.getPosition().x+5,layer.heroAltos.getPosition().y+150));
            }
         },layer);
        this.addChild(layer);
    }
});

