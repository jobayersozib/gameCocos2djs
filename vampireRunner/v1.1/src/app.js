
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
         this.zombie_sprite=26;
         this.level=0;
         this.heroAltos= new cc.Sprite.create(g_resources[i]);
         this.heroAltos.setPosition(cc.p(65,115));
         this.addChild(this.heroAltos,1);

         this.zombie= new cc.Sprite.create(g_resources[this.zombie_sprite]);
         this.zombie.setScale(.35);
         this.zombie.setPosition(cc.p(this.size.width-100,110));
         this.addChild(this.zombie,1);

         


         this.scheduleUpdate();
         this.schedule(this.animatehero,.02);
         this.schedule(this.animateZombie,.300);
         this.schedule(this.createFire,1.5);
         this.schedule(this.fireVelocity,.01);
         

        return true;
    },
    update:function(dt){
        if(this.bg_sprite.getPosition().x<(-300)){
            
            this.bg_sprite.setPosition(cc.p(this.size.width+335,this.size.height/2));


        }
         if(this.i>25){
            this.i=2;

        }
        
        
        this.heroAltos.setTexture(g_resources[this.i]);
        this.i++;
        
       this.bg_sprite.setPosition(cc.p(this.bg_sprite.getPosition().x-2,this.bg_sprite.getPosition().y));
       
       //console.log("XCordinate: "+this.bg_sprite.getPosition().x);
       //console.log("YCordinate: "+this.bg_sprite.getPosition().y);

        

    },
    animatehero:function(dt){
        if(this.heroAltos.getPosition().y>115){

           this.heroAltos.setPosition(cc.p(this.heroAltos.getPosition().x+5,this.heroAltos.getPosition().y-10));

        }
        var BoxZ=this.zombie.getBoundingBox();
         var BoxH=this.heroAltos.getBoundingBox();
        if(cc.rectIntersectsRect(BoxZ,BoxH)){
            console.log("collide....");
        }
    },
    animateZombie:function(dt){
        if(this.zombie_sprite>31){
            this.zombie_sprite=26;

        }
        if(this.zombie.getPosition().x<-50){

             this.zombie.setPosition(cc.p(this.size.width+5,110));

        }
        
        this.zombie.setTexture(g_resources[this.zombie_sprite]);
        this.zombie.setPosition(cc.p(this.zombie.getPosition().x-10,this.zombie.getPosition().y));
        this.zombie_sprite++;
        
    },
    fireVelocity:function(dt){
        
        var fireballs=this.children;
        for(var i=0;i<fireballs.length;i++){

            if(fireballs[i].getPosition().x<-50 && fireballs[i].getTag()==="fire"){

                console.log("Total number of balls to remove : "+fireballs.length);
                this.removeChild(fireballs[i],true);


            }

        }
        fireballs=this.children;
        for(var i=0;i<fireballs.length;i++){

            if(fireballs[i].getTag()==="fire"){
                 fireballs[i].setPosition(cc.p(fireballs[i].getPosition().x-7,fireballs[i].getPosition().y));  
            }

           

        }
    },
    createFire:function(dt){

        var fireball= new cc.Sprite.create(res.fire);
            fireball.setPosition(cc.p(this.zombie.getPosition().x-10,this.zombie.getPosition().y+10));
            fireball.setTag("fire");
            this.addChild(fireball,1);

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

