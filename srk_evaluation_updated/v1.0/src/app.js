

/*
    Extending  Sprite class start
*/




function totalCoin(layer,total_coin){
    
           
    

}

var count=0;


cc.Sprite.prototype.setType=function(type){
    this.type_obj.type_name=type;
}

cc.Sprite.prototype.getType=function(){
    return this.type_obj.type_name;
}

cc.Sprite.prototype.type_obj={
    type_name:""
}


/*
    Extending Sprite class end
*/
var coin=[];


var shark_created_layer=cc.Layer.extend({
    sprite:null,
    ctor:function(){
        this._super();
        var size = cc.winSize;
        console.log("layer 2");
        
              
        return true;
    }
    

});
/*Global variable*/

var pattern_baby_shark= new RegExp("baby_shark");
var pattern_giant_shark= new RegExp("giant_shark");
var pattern_monster_shark= new RegExp("monster_shark");
var giant_listener;
var coin_count=0;
var layBackground;
var total_coin;
 var moveto= new cc.MoveTo.create(100,-100,.100);
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    count:0,
    loadingBar:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();


        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;
        
        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        
        this.bg_sprite= new cc.Sprite(res.bg);
        //this.bg_sprite.welcomeMsg();
        this.bg_sprite.setAnchorPoint(cc.p(0.5,0.5));
        this.bg_sprite.setPosition(cc.p(size.width/2,size.height/2));
        this.bg_sprite.setType("Background type");
        this.bg_sprite.setTag("bg");
        this.addChild(this.bg_sprite,-1);
        var track=0;
        var arr=[];
        var s=0;
            layBackground = cc.LayerColor.create(cc.color(144, 192, 248));
            layBackground.setContentSize(500,300);
            layBackground.setPosition(cc.p(size.width/4,150));
            layBackground.setVisible(false);
            this.addChild(layBackground, 10);
            this.schedule(this.update,2);


        var shark_discover= new cc.LabelTTF("New shark discover ","Arial",35);
                //coin.color="white";
               shark_discover.setPosition(cc.p(200,200));
               shark_discover.setTag("total_coin");
               layBackground.addChild(shark_discover,5);  

        var new_shark_sprite= new cc.Sprite.create(res.monster);
            new_shark_sprite.setPosition(400,200);
            layBackground.addChild(new_shark_sprite,5);


         var ok_button= new ccui.Button();
                ok_button.loadTextures(res.ok,res.ok);
                ok_button.setPosition(cc.p(50,100));
                ok_button.addTouchEventListener(this.touchEvent,this);
                layBackground.addChild(ok_button,5);        



         var c_button= new ccui.CheckBox();
                c_button.loadTextures(res.ok,res.ok);
               c_button.setPosition(cc.p(50,100));
               //c_button.addTouchEventListener(this.touchEvent,this);
               c_button.setVisible(false);
                this.addChild(c_button,5);                
      
       this.schedule(this.update1,.500);
       this.schedule(this.update2,1);
      
       console.log(this.bg_sprite.getType());


        this.seed=0;



        this.loadingBar=new ccui.LoadingBar();
        this.loadingBar.setName("loadingBar");
        this.loadingBar.loadTexture(res.loading);
        this.loadingBar.setPosition(cc.p(350,600));
        this.loadingBar.setPercent(0);
        this.addChild(this.loadingBar,7);

       
       

        return true;
    },
    update2:function(dt){
        this.count++;
        if(this.count>100){
            this.count=0

            cc.director.runScene(new sceneTwo(coin_count));
        }

        this.loadingBar.setPercent(this.count);
    },

    touchEvent:function(sender,type){

        switch(type){

            case ccui.Widget.TOUCH_BEGAN:

                layBackground.setVisible(false);
                break;

            case ccui.Widget.TOUCH_MOVED:

                //cc.log("Touch began....");
                break;
            case ccui.Widget.TOUCH_ENDED:

                //cc.log("Touch began....");
                break;
            case ccui.Widget.TOUCH_CANCELLED:

                //cc.log("Touch began....");
                break;

        }

    },

    update:function(dt){
        var child=this.children;
        
       
       
        for(var i=0;i<child.length;i++){
            if(pattern_baby_shark.test(child[i].getTag())){
                
                coin= new cc.LabelTTF("+10","Arial",20);
                coin.color="red";
                coin.setPosition(cc.p(child[i].getPosition().x,child[i].getPosition().y-37));
                coin.setTag("coin");
                //coin.runAction(new cc.FadeOut.create(.700));
                this.addChild(coin,5);
                
                coin_count+=10;
                total_coin.string="Total coin count: "+coin_count;

                
            }

            if(pattern_giant_shark.test(child[i].getTag())){
                
                coin= new cc.LabelTTF("+20","Arial",25);
                coin.color="red";
                coin.setPosition(cc.p(child[i].getPosition().x,child[i].getPosition().y-50));
                coin.setTag("coin");
                //coin.runAction(new cc.FadeOut.create(.700));
                this.addChild(coin,5);
               coin_count+=20;
               total_coin.string="Total coin count: "+coin_count;
                
            }


            if(pattern_monster_shark.test(child[i].getTag())){
                
                coin= new cc.LabelTTF("+30","Arial",30);
                coin.color="red";
                coin.setPosition(cc.p(child[i].getPosition().x,child[i].getPosition().y-55));
                coin.setTag("coin");
                //coin.runAction(new cc.FadeOut.create(.700));
                this.addChild(coin,5);
                coin_count+=30;
                 total_coin.string="Total coin count: "+coin_count;
                
            }
           

       }
    },
    update1:function(){
        
        var coin=this.children;
        for(var i=0;i<coin.length;i++){
            if(coin[i].getOpacity()===0){
                this.removeChild(coin[i],true);

            }else{
                if(coin[i].getTag()==="coin"){
                 coin[i].runAction(new cc.FadeOut.create(1));

                }
            }
            
           
        }
        console.log("Total coin count: "+coin_count);


        // for(var i=0;i<coin.length;i++){

        //     if(pattern_baby_shark.test(coin[i].getTag())){

        //         coin[i].setPosition(cc.p(coin[i].getPosition().x+1,coin[i].getPosition().y+1));

        //     }
        //     if(pattern_giant_shark.test(coin[i].getTag())){

        //         coin[i].setPosition(cc.p(coin[i].getPosition().x+1,coin[i].getPosition().y+1));

        //     }
        //     if(pattern_monster_shark.test(coin[i].getTag())){

        //         coin[i].setPosition(cc.p(coin[i].getPosition().x+1,coin[i].getPosition().y+1));

        //     }

        // }
        

    },
    

    BoxInterval:function(){
        return setInterval(function(){
            console.log("Calling..........");
        },1000)
    }
    
    
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();


        
        var layer = new HelloWorldLayer();
        var size=cc.winSize;
        var x_axis=65;

        var max_box=0
        var track=0;
        var remove_box=0;
        var s=0;
        var arr=[];
        var sequence;
        var delay = new cc.DelayTime.create(.02);
        var rotate_action=new cc.RotateBy.create(1,45);
        var action_repeat=new cc.RepeatForever.create(rotate_action);

        total_coin= new cc.LabelTTF("Total coin count: "+coin_count,"Arial",35);
                //coin.color="white";
                total_coin.setPosition(cc.p(200,100));
                total_coin.setTag("total_coin");
                layer.addChild(total_coin,5);
       

        

        var check=true;
        
        setInterval(function(){
            
            if(max_box>=0){
                
                    
                    //arr[s].runAction(new cc.Sequence.create( new cc.MoveTo.create(1.5,100+x_axis,size.height/2),delay,new cc.MoveTo.create(1.2,100+x_axis,size.height/2+150)));
                    //console.log(arr[s].getPosition());

                    arr[max_box]=new cc.Sprite.create(res.shark_box);
                     arr[max_box].setAnchorPoint(cc.p(0.5,0.5));
                     arr[max_box].setPosition(cc.p(size.width/2,1000));
                     arr[max_box].setTag("shark_box");
                     if(max_box===0){
                         cc.eventManager.addListener(single_touch_listener,arr[max_box]);
                     }else{
                         cc.eventManager.addListener(single_touch_listener.clone(),arr[max_box]);
                     }
                    
                     layer.addChild(arr[max_box],1);


                    arr[max_box].runAction( new cc.MoveTo.create(1.5,Math.random() * (600- 150) + 150,Math.random() * (750 - 150) + 150));
                    //s++;
                    x_axis+=65;
                    max_box++;

                }
               else{
                    
                    
                       
                }
            
            
            
        },3000);


layer.baby_shark_arr=[];
layer.giant_shark_arr=[];
layer.baby_shark_count=0;
layer.giant_shark_count=0;



/*Touch for giant shark start */
      giant_listener=cc.EventListener.create({

     	event:cc.EventListener.TOUCH_ONE_BY_ONE,
     	swallowTouch:true,
     	onTouchBegan:function(touch,event){
            var target=event.getCurrentTarget();
                var locationinNode=target.convertToNodeSpace(touches[0].getLocation());
                var s=target.getContentSize();
                var rect=cc.rect(0,0,s.width,s.height);
                //console.log(target.getPosition().x);
                 if(cc.rectContainsPoint(rect,locationinNode)){
                    console.log("Touched.........");
                    
                }
     	},
     	onTouchesMoved:function(touches,event){
     		 

     	}
     });

/*Touch for giant shark end */



/* Multi touch event start */


    var listener = cc.EventListener.create({
       event: cc.EventListener.TOUCH_ONE_BY_ONE,
       swallowTouch:true,
       onTouchBegan: function (touch, event) {    
            // event.getCurrentTarget() returns the *listener's* sceneGraphPriority node.   
            var target = event.getCurrentTarget();  

            //Get the position of the current point relative to the button
            var locationInNode = target.convertToNodeSpace(touch.getLocation());    
            var s = target.getContentSize();
            var rect = cc.rect(0, 0, s.width, s.height);

            //Check the click area
            if (cc.rectContainsPoint(rect, locationInNode)) {       
                cc.log("sprite began... x = " + locationInNode.x + ", y = " + locationInNode.y);
                //target.opacity = 180;
                return true;
            }
            return false;
        },
       onTouchMoved: function (touch, event) { 
                 var target = event.getCurrentTarget(); 
                  target.setPosition(touch.getLocationX(),touch.getLocationY());
                
            
        },
       onTouchEnded: function (touch, event) {          
            var target = event.getCurrentTarget();
            var layer_child= layer.children;

            var pattern_baby_shark= new RegExp("baby_shark");
            var pattern_giant_shark= new RegExp("giant_shark");
             var rect1= target.getBoundingBox();
             var rect2;
             // var delta = touch.getDelta();
             //            target.x += delta.x;
             //            target.y += delta.y;
            for(var i=0;i<layer_child.length;i++){
                
                rect2 = layer_child[i].getBoundingBox();
                
                    if(cc.rectIntersectsRect(rect1,rect2) && target.getTag() !== layer_child[i].getTag() && pattern_baby_shark.test(target.getTag()) && pattern_baby_shark.test(layer_child[i].getTag())){


                        var giant_shark=new cc.Sprite.create(res.giant_shark);
                            giant_shark.setPosition(cc.p(target.getPosition().x,target.getPosition().y));
                            giant_shark.setAnchorPoint(cc.p(0.5,0.5));
                            giant_shark.setTag("giant_shark"+layer.giant_shark_count);
                            layer.addChild(giant_shark,2); 
                            layer.giant_shark_count++;
                            cc.eventManager.addListener(listener.clone(),giant_shark);
                            layer.removeChild(layer_child[i],true);
                            layer.removeChild(target,true);

                        

                    }
                    if(cc.rectIntersectsRect(rect1,rect2) && target.getTag() !== layer_child[i].getTag() && pattern_giant_shark.test(target.getTag()) && pattern_giant_shark.test(layer_child[i].getTag())){
                         var monster_shark=new cc.Sprite.create(res.monster);
                            monster_shark.setPosition(cc.p(target.getPosition().x,target.getPosition().y));
                            monster_shark.setAnchorPoint(cc.p(0.5,0.5));
                            monster_shark.setTag("monster_shark"+layer.giant_shark_count);
                            layer.addChild(monster_shark,1); 
                            layer.giant_shark_count++;
                            layBackground.setVisible(true);

                            cc.eventManager.addListener(listener.clone(),monster_shark);
                            layer.removeChild(layer_child[i],true);
                            layer.removeChild(target,true);
                    }

                    //console.log(layer_child[i].getTag());
                    // if(layer_child[i].getType()===target.getType()){
                    //     console.log("collide....");
                    // }else{
                    //      console.log("collide but different type");
                    // }
                    
                    

                


            }
            
        }
});

    



/* Multi touch event end */

layer.shark_tag_count=0;





         /*Touch event create start*/

    var single_touch_listener=cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true, 


            onTouchBegan: function(touch, event) { 
                var target=event.getCurrentTarget();
                var locationinNode=target.convertToNodeSpace(touch.getLocation());
                var s=target.getContentSize();
                var rect=cc.rect(0,0,s.width,s.height);

                if(cc.rectContainsPoint(rect,locationinNode)){
                    
                    if(target.getTag()==="shark_box"){

                        layer.removeChild(target,true);
                        var baby_shark_arr= new cc.Sprite.create(res.shark);
                    		baby_shark_arr.setPosition(cc.p(target.getPosition().x,target.getPosition().y));
                    		baby_shark_arr.setAnchorPoint(cc.p(0.5,0.5));
                    		baby_shark_arr.setTag("baby_shark"+layer.shark_tag_count);
                    		baby_shark_arr.setType("baby_shark");
                    		cc.eventManager.addListener(listener.clone(),baby_shark_arr);
                            layer.addChild(baby_shark_arr,3);
                    		layer.shark_tag_count++;
                            layer.baby_shark_count++;

                    		
                        //max_box--;
                    }
                    else{

                    }

                    
                   return true;

                }
                //console.log("Outside sprite......");

                return false;

                

           }    

        });

        

        /*Touch event create end*/



        for(var i=0;i<10;i++){

             // arr[i]=new cc.Sprite.create(res.shark_box);
             // arr[i].setAnchorPoint(cc.p(0.5,0.5));
             // arr[i].setPosition(cc.p(size.width/2,1000));
             // arr[i].setTag("shark_box");
             // if(i===0){
             //     cc.eventManager.addListener(single_touch_listener,arr[i]);
             // }else{
             //     cc.eventManager.addListener(single_touch_listener.clone(),arr[i]);
             // }
            
             // layer.addChild(arr[i],i);
        }


        //var i=0;
        var l=(arr.length-1);
            if(cc.sys.capabilities.hasOwnProperty("mouse")){
            cc.eventManager.addListener({
                event:cc.EventListener.MOUSE,
                onMouseDown:function(event){
                    if(i<arr.length){
                        //console.log(arr[i].getTag());
                        i++;
                    }else{
                        i=0;
                    }
                    
                }
            },layer);
        }

 


        //totalCoin(layer,coin_count);

        
       
        this.addChild(layer,1);
    },

    
});

