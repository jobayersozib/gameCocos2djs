
var x=1;
var y=2;
var z=0;
var track_interval;
var track=false;
var time_left=10;
var track_amount=0;
var amount=0;
var addedAmount=0;
var show_total_balance=0;
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
        console.log(size.width);
        console.log(size.height);
        var helloLabel = new cc.LabelTTF("Total balance:", "Arial",20);
        // position the label on the center of the screen
        helloLabel.x =90;
        helloLabel.y =size.height-40;
        helloLabel.color="black";
        
        this.addChild(helloLabel,1);
        // add the label as a child to this layer
        
        var listView=new ccui.ListView();
        //listView.setDirection(ccui.ScrollView.DIR_VERTICAL);
        //listView.setTouchEnabled(true);
        //listView.setBounceEnabled(true);
        //listView.setBackGroundImage(res.list_jpg);
        listView.setContentSize(cc.size(50,200));
        listView.setAnchorPoint(cc.p(0.5,0.5));
        listView.setPosition(size.width-100,400);
        listView.setItemsMargin(15);
        this.addChild(listView,1);

        // // setInterval(function(){
        // //     if(x!=200){
        // //         helloLabel.string="total worth is:  "+x;
        // //         x++;
        // //     }else{
        // //         x=0;
        // //         helloLabel.string="total worth is:  "+x;
        // //     }
            
           
            

        // },1);
            if(listView){
                console.log("Found listView......");

            }
            var suitcase= new ccui.Button();
            suitcase.setName("suitcase");
            suitcase.setAnchorPoint(cc.p(0.5,0.5));
            suitcase.setPosition(10,10);
            suitcase.loadTextures(res.suitCase);
            listView.pushBackCustomItem(suitcase);

            var powerUp= new ccui.Button();
            powerUp.setName("Power");
            powerUp.setAnchorPoint(cc.p(0.5,0.5));
            powerUp.setPosition(10,10);
            powerUp.loadTextures(res.powerImg);
            listView.pushBackCustomItem(powerUp);


            var light= new ccui.Button();
            light.setName("Light");
            light.setAnchorPoint(cc.p(0.5,0.5));
            light.setPosition(10,10);
            light.loadTextures(res.lightImg);
            listView.pushBackCustomItem(light);

            
            
            console.log(g_resources);
            var nameLabel=new cc.LabelTTF("Name","Arial",20);
            nameLabel.x=size.width-70;
            nameLabel.y=size.height-40;
            nameLabel.color="black";
            this.addChild(nameLabel,1);

        
               
                this.sprite = new cc.Sprite(res.bg_jpg);
                this.sprite.setTag(1);
                this.sprite.setAnchorPoint(cc.p(0.5,0.5));
                this.sprite.setPosition(cc.p(size.width/2,size.height/2));
                this.addChild(this.sprite, 0);
               
        
        /*
        Adding plus imageSprite start

        */



        var moveBy_action= new cc.MoveBy.create(1,5,5);

        var repeat_action=  new cc.Repeat.create(moveBy_action,5);

        var addBusinessLabel=new cc.LabelTTF("Add your Bisiness","Arial",20);
            addBusinessLabel.setPosition(cc.p(500,390));
            addBusinessLabel.color="black";
            this.addChild(addBusinessLabel,1);

        var plusSprite= new cc.Sprite(res.plusImg);
        plusSprite.setTag(2);
        plusSprite.setAnchorPoint(cc.p(0.5,0.5));
        plusSprite.setPosition(cc.p(500,350));
        //plusSprite.runAction(repeat_action);
        this.addChild(plusSprite,1);

       
        var large_scale= new cc.ScaleTo.create(.2,1,1);
        var small_scale= new cc.ScaleTo.create(.2,.5,.5);
       
        setInterval(function(){
            
               if(!track){
                 plusSprite.runAction(large_scale);
                 track=true;
               }else{
                    plusSprite.runAction(small_scale);
                    track=false;
               }
               
               
            
            
        },300);
       
        
           
        

        //console.log(plusSprite.getPosition());
       


        /*
            Test code start

        */

        var collectMoneyAmount=new cc.LabelTTF(amount+"","Arial",20);
            collectMoneyAmount.setPosition(cc.p(290,100));
            collectMoneyAmount.color="black";
            collectMoneyAmount.setVisible(false);
            this.addChild(collectMoneyAmount,1);



         var total_balance = new cc.LabelTTF(show_total_balance+"", "Arial",20);
        // position the label on the center of the screen
            total_balance.x =185;
            total_balance.y =size.height-40;
            total_balance.color="black";
            
            this.addChild(total_balance,1);


        var rotate_action=new cc.RotateBy.create(0,90);


        var testSprite=new cc.Sprite(res.dollar);
        testSprite.setAnchorPoint(cc.p(.5,.5));
        testSprite.setPosition(size.width-200,size.height-150);
        testSprite.setVisible(false);
        this.addChild(testSprite,1);
         
        var testSprite1=new cc.Sprite(res.dollar);
        testSprite1.setAnchorPoint(cc.p(.5,.5));
        testSprite1.setPosition(size.width/2-150,size.height/2-150);
        //this.addChild(testSprite1,1);

        var testSprite2=new cc.Sprite(res.dollar);
        testSprite2.setAnchorPoint(cc.p(.5,.5));
        testSprite2.setPosition(size.width/2-200,size.height/2-150);
        //this.addChild(testSprite2,1);

        var collectMoneySprite=new cc.Sprite(res.testimg);
        collectMoneySprite.setAnchorPoint(cc.p(.5,.5));
        collectMoneySprite.setPosition(350,100);
        collectMoneySprite.setVisible(false);
        this.addChild(collectMoneySprite,1);
         


        var collectMoneyLabel=new cc.LabelTTF("Collect Money :","Arial",20);
            collectMoneyLabel.setPosition(cc.p(200,100));
            collectMoneyLabel.color="black";
            collectMoneyLabel.setVisible(false);
            this.addChild(collectMoneyLabel,1);


        

        var track_x=testSprite.getPosition().y;
        console.log(track_x);
        var track_y=testSprite.getPosition().y;
        var action_moveby = new cc.MoveBy.create(0,0,-5);
        

        
        

        /*Building sprite*/

        var building= new cc.Sprite(res.building_business);
        building.setAnchorPoint(cc.p(.5,.5));
        building.setPosition(size.width/2*(-1),size.height/2-50);
        //building.setVisible(true);
        this.addChild(building,1);

        var cart_sprite= new cc.Sprite(res.food_cart);
        cart_sprite.setAnchorPoint(cc.p(0.5,0.5));
       // cart_sprite.setVisible(false);
        cart_sprite.setPosition(size.width/2*(-1),size.height/2-50);
        this.addChild(cart_sprite,1);
       
        
        var moveTo_action=new cc.MoveTo.create(.2,size.width/2,350);
        var moveTo_action2=new cc.MoveTo.create(.2,500,500);

        /*
            Mouse event integration start

        */


        /* 
            aded code start

        */
                 setInterval(function(){
            //console.log("Now track_x is :"+track_x);
            //console.log("Now track_y is :"+track_y);
           
           // track_y+=3;
                    amount++;

                    if(track_x<=100)
                        {
                            //console.log("Now track_x is :"+track_x);
                            testSprite.setPosition(size.width-200,size.height-150);
                           
                            track_x=490;
                    //action_moveby=new new cc.MoveBy.create(0,30,0);
                         }
                    //testSprite.runAction(rotate_action);
                    testSprite.runAction(action_moveby);
                    //testSprite1.runAction(action_moveby1);
                    //testSprite2.runAction(action_moveby2);
                    //testSprite3.runAction(action_moveby3);
                    if(track_amount===50){
                        collectMoneyAmount.string=++addedAmount+"";
                        track_amount=0;
                    }
                    
                    track_x-=5;
                    track_amount++;
                    //console.log("afer condition track_x is :"+track_x);
                    
            
           
           
                    
           
          //console.log(track_x);

        },10);

        /*
            Added code end
        */



        /*
            Sprite moving code start
            
        */
            
            var sprite1=new cc.Sprite(res.sprite1);
                sprite1.setAnchorPoint(0.5,0.5);
                sprite1.setPosition(size.width/2,size.height/2);
                this.addChild(sprite1,1);
            var sprite2= new cc.Sprite(res.sprite2);
                sprite2.setAnchorPoint(0.5,0.5);
                sprite2.setPosition(size.width/2-50,size.height/2);
                this.addChild(sprite2,1);

            var i=0;    
            var arr1=[sprite1,sprite2];
            //arr1[i].runAction(moveTo_test);
            //arr[1].runAction(moveTo_test);
           var arrow_left_sprite=new cc.Sprite(res.leftArrow);
           arrow_left_sprite.setAnchorPoint(0.5,0.5);
           arrow_left_sprite.setPosition(cc.p(352,size.height/2-5));
           arrow_left_sprite.setVisible(false);
           this.addChild(arrow_left_sprite,1);
           var arrow_right_sprite=new cc.Sprite(res.rightArrow);
               arrow_right_sprite.setAnchorPoint(0.5,0.5);
               arrow_right_sprite.setVisible(false);
               arrow_right_sprite.setPosition(cc.p(600,size.height/2));
               this.addChild(arrow_right_sprite,1);
           var x_axis=size.width/2;
           var y_axis=size.height/2;
          
            setInterval(function(){
                if(i>1){
                   
                    x_axis+=1;
                    i=0;
                    arr1[i].runAction(new cc.MoveTo.create(1,(arr1[i].getPosition().x+x_axis),y_axis));
                }else{
                    
                    y_axis+=1;
                    arr1[i].runAction(new cc.MoveTo.create(1,(arr1[i].getPosition().x+x_axis),y_axis));
                    i++;
                }
                
            },50);

        /*
            Sprite moving code end

        */








            if(cc.sys.capabilities.hasOwnProperty('mouse')){

                cc.eventManager.addListener(
                {
                    event:cc.EventListener.MOUSE,
                    onMouseDown:function(event){
                        if(event.getButton()==cc.EventMouse.BUTTON_LEFT){
                            //console.log(event.getCurrentTarget());
                           if(event.getLocationInView().x>=480 && event.getLocationInView().x<=510){
                                if(event.getLocationInView().y>=270 && event.getLocationInView().y<=305){
                                    //console.log(event.getLocationInView());
                                    //plusSprite.runAction(moveTo_action);
                                    
                                        //console.log("Destroying......");

                                        building.setVisible(true);
                                        addBusinessLabel.runAction(moveTo_action2);
                                        building.runAction(moveTo_action);
                                        plusSprite.setVisible(false);
                                        track_interval=setInterval(function(){
                                        //console.log("Timer started...........");
                                        addBusinessLabel.string="time left: "+time_left+" sec";
                                        --time_left;
                                        if(time_left===0){
                                            clearInterval(track_interval);
                                            building.setVisible(false);
                                            testSprite.setVisible(true);
                                            collectMoneyAmount.setVisible(true);
                                            collectMoneySprite.setVisible(true);
                                            collectMoneyLabel.setVisible(true);
                                            cart_sprite.runAction(moveTo_action);
                                            arrow_left_sprite.setVisible(true);
                                            arrow_right_sprite.setVisible(true);
                                            addBusinessLabel.setVisible(false);




                                            /*
                                            Money collection code here start
                                            
                                            */

                                            setInterval(function(){
                                                if(amount===30){
                                                    track_amount++;
                                                    amount=0;
                                                }
                                                collectMoneyAmount.string=track_amount+"";
                                                amount++;
                                            },1);



                                            /*
                                                Money collection code here end
                                            
                                            */



                                        }
                                      },500);
                                    
                                        
                                        //clearInterval(track_interval);
                                            //building.setVisible(false);
                                            //testSprite.setVisible(true);
                                       // }
                                       // console.log("Not set yet......");
                                        //track_interval=setInterval(function(){
                                        //console.log("Timer started...........");
                                        //addBusinessLabel.string="Building......"+time_left;
                                       // time_left--;
                                      //},1000);
                                   // }
                                      
                                      
                                     // building.setVisible(true);
                                     // addBusinessLabel.runAction(moveTo_action2);
                                      //building.runAction(moveTo_action);
                                }
                                    
                                
                                     
                                     
                                       
                             
                           }
                           if(event.getLocationInView().x>=315  && event.getLocationInView().x<=370){
                                show_total_balance+=track_amount;
                                total_balance.string=show_total_balance+"";
                                track_amount=0;
                           }
                           else{


                                console.log(event.getLocationInView());
                             }
                           //}
                        }
                    }
                }

                ,this);
            }

           


        /*
            Mouse event integration start
        */

        /*
            Test code end

        */
       
       this.scheduleUpdate(plusSprite);
        return true;
    }
    
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

