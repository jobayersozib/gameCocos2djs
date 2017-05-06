
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
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
        this.bg_sprite.setAnchorPoint(cc.p(0.5,0.5));
        this.bg_sprite.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(this.bg_sprite,0);
        var track=0;
        var arr=[];
        var s=0;
       

       


        this.seed=10;
       

        return true;
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


var baby_shark_arr=[];
var baby_shark_count=0;



/* Multi touch event start */


    var listener = cc.EventListener.create({
       event: cc.EventListener.TOUCH_ALL_AT_ONCE,
       swallowTouch: true,
       onTouchBegan: function(touch, event) {
            
            // var target=event.getCurrentTarget();
            //     var locationinNode=target.convertToNodeSpace(touch.getLocation());
            //     var s=target.getContentSize();
            //     var rect=cc.rect(0,0,s.width,s.height);

            //     if(cc.rectContainsPoint(rect,locationinNode)){
                    
            //         this.onTouchMoved(touch,this.event,target);
                    
            //         return true;

            //     }
            //     console.log("Outside sprite......");

            //     return false;

                
                   

           
           },
       onTouchesMoved: function(touches, event) {

             var target=event.getCurrentTarget();
                var locationinNode=target.convertToNodeSpace(touches[0].getLocation());
                var s=target.getContentSize();
                var rect=cc.rect(0,0,s.width,s.height);

                if(cc.rectContainsPoint(rect,locationinNode)){
                   
                        target.setPosition(cc.p(touches[0].getLocation().x,touches[0].getLocation().y));
                         //console.log("Started.....");
                        for(var i=0;i<baby_shark_arr.length;i++){

                            if(baby_shark_arr.length>1){
                                if((baby_shark_arr[i].getPosition().x === target.getPosition().x) && ( baby_shark_arr[i].getTag() !== target.getTag())){
                                    if(baby_shark_arr[i].getPosition().y === target.getPosition().y){
                                        layer.removeChild(baby_shark_arr[i]);
                                        layer.removeChild(target);
                                        console.log("Collided............");
                                    }
                                    

                                }

                            }
                                
                        }
                         //console.log("Ended.....");
                        //console.log(target.getPosition());
                        return true;
                       
                    }
                    
                   


                    
                    

                
                //console.log("Outside sprite......");

                return false;



                //console.log(touches[0].getLocation());
               
                
           },
       onTouchEnded: function(touch, event) {


            //console.log(touch[0].getLocationX());

      } 
});

    



/* Multi touch event end */







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

                        layer.removeChild(target);
                        //max_box--;
                    }
                    //
                    if(target.getTag()==="baby shark"){
                        //alert("A baby shark.....");
                    }else{
                        console.log("Number of baby shark on canvas: "+(baby_shark_count+1));
                        var baby_shark=new cc.Sprite.create(res.shark);
                        baby_shark.setPosition(cc.p(touch.getLocation().x,touch.getLocation().y));
                        //cc.eventManager.addListener(single_touch_listener.clone(),baby_shark);
                        baby_shark.setTag(baby_shark_count);
                        cc.eventManager.addListener(listener.clone(),baby_shark);
                        baby_shark_arr[baby_shark_count]=baby_shark;
                        for(var i=0;i<=baby_shark_count;i++){
                            //console.log("Total coin produces :"+ baby_shark_count);
                        }
                        baby_shark_count++;
                        layer.addChild(baby_shark,2);

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





        layer.scheduleUpdate();
       
        this.addChild(layer);
    },

    
});

