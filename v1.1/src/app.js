
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
var track_business=0;
var check=true;
var my_business_arr=[];
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function (name) {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        console.log(name);
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
        
       /* var listView=new ccui.ListView();
            //listView.setDirection(ccui.ScrollView.DIR_VERTICAL);
            //listView.setTouchEnabled(true);
            //listView.setBounceEnabled(true);
            //listView.setBackGroundImage(res.list_jpg);
            listView.setContentSize(cc.size(50,200));
            listView.setAnchorPoint(cc.p(0.5,0.5));
            listView.setPosition(size.width-100,400);
            listView.setItemsMargin(15);
            this.addChild(listView,1);
        */

        // // setInterval(function(){
        // //     if(x!=200){
        // //         helloLabel.string="total worth is:  "+x;
        // //         x++;
        // //     }else{
        // //         x=0;
        // //         helloLabel.string="total worth is:  "+x;
        // //     }
            
           
            

        // },1);
            //if(listView){
                //console.log("Found listView......");

            //}

           /* var suitcase= new ccui.Button();
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

            */
            
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
            addBusinessLabel.setPosition(cc.p(500,150));
            addBusinessLabel.color="black";
            this.addChild(addBusinessLabel,1);

        var plusSprite= new cc.Sprite(res.plusImg);
        plusSprite.setTag(2);
        plusSprite.setAnchorPoint(cc.p(0.5,0.5));
        plusSprite.setPosition(cc.p(500,200));
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
       
        

        /*

            My business sprite code start

        */

            var s_1= new cc.Sprite(res.b_1);
                s_1.setAnchorPoint(cc.p(0.5,0.5));
                s_1.setPosition(cc.p(size.width/2*(-1),size.height/2-50));
                this.addChild(s_1,1);
            var s_2= new cc.Sprite(res.b_2);
                s_2.setAnchorPoint(cc.p(0.5,0.5));
                s_2.setPosition(cc.p(size.width/2*(-1),size.height/2-50));
                this.addChild(s_2,1);
            var s_3= new cc.Sprite(res.b_3);
                s_3.setPosition(size.width/2*(-1),size.height/2-50);
                s_3.setAnchorPoint(cc.p(0.5,0.5));
                this.addChild(s_3,1);

                my_business_arr=[s_1,s_2,s_3];


        /*
            My business sprite code end
        */



           
        

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
        var moveToright_action=new cc.MoveTo.create(.1,size.width+250,350);

        var moveToleftAction= new cc.MoveTo.create(.2,size.width/2,350);
        var moveToOrigin= new cc.MoveTo.create(.2,size.width/2*(-1),350);
        /*
            Mouse event integration start

        */


        /* 
            aded code start

        */
        var money_calculate_interval=setInterval(function(){
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
                        //track_amount=0;
                    }
                    
                    track_x-=5;
                    track_amount++;
                    //console.log("afer condition track_x is :"+track_x);
                    
            
           
           
                    
           
          //console.log(track_x);

            },10);
        //}

        /*
            Added code end
        */

        /* Dollar bundle sprite */

                var dollar_sprite= new cc.Sprite(res.dollar_bundle);
                dollar_sprite.setPosition(cc.p(size.width-200,size.height/3));
                dollar_sprite.setVisible(false);
                this.addChild(dollar_sprite,1);
                
                var jumpToAction=new cc.JumpTo.create(.1,cc.p(185,size.height-50),50,5);
                var moveTo=new cc.MoveTo.create(0,cc.p(size.width-200,size.height/3));
                var fadeout=new cc.FadeOut.create(0);
                var fadein=new cc.FadeIn.create(0);
               
               
                var sec= new cc.Sequence.create(jumpToAction,fadeout,moveTo,fadein);
        /*Dollar bundle sprite end*/

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
               arrow_right_sprite.setPosition(cc.p(600,size.height/2));
               arrow_right_sprite.setVisible(false);
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


        /*
        Menu setup code here 

        */

        var active_sprite=0;
            head_sprite=0;
        


        var mentitem1= new cc.MenuItemImage(res.play_btn,res.play_btn,play);
        var mentitem2= new cc.MenuItemImage(res.highscore_btn,res.highscore_btn,Highscore);
        var mentitem3= new cc.MenuItemImage(res.settings_btn,res.settings_btn,Settings);


        mentitem1.setPosition(cc.p(size.width/2,size.height/4));
        mentitem2.setPosition(cc.p(size.width/2,size.height/4-55));
        mentitem3.setPosition(cc.p(size.width/2,size.height/4-110));

        var main_menu=new cc.Menu(mentitem1,mentitem2,mentitem3);
        //main_menu.color="black";
        main_menu.setPosition(cc.p(cc.p(size.width/2-100,size.height/2)));
        this.addChild(main_menu,1);



            if(cc.sys.capabilities.hasOwnProperty('mouse')){

                cc.eventManager.addListener(
                {
                    event:cc.EventListener.MOUSE,
                    onMouseDown:function(event){
                        if(event.getButton()==cc.EventMouse.BUTTON_LEFT){
                            //console.log(event.getCurrentTarget());
                           if(event.getLocationInView().x>=485 && event.getLocationInView().x<=513){
                                if(event.getLocationInView().y>=426 && event.getLocationInView().y<=450){
                                    //console.log(event.getLocationInView());
                                    //plusSprite.runAction(moveTo_action);
                                    
                                        //console.log("Destroying......");
                                        
                                        arrow_left_sprite.setVisible(false);
                                        arrow_right_sprite.setVisible(false);
                                        collectMoneyLabel.setVisible(false);
                                        collectMoneyAmount.setVisible(false);
                                        collectMoneySprite.setVisible(false);


                                        for(var i=0;i<my_business_arr.length;i++){
                                            my_business_arr[i].setPosition(cc.p(size.width/2*(-2),size.height/2-50));
                                        }
                                        building.setVisible(true);
                                        addBusinessLabel.runAction(moveTo_action2);
                                        building.runAction(moveTo_action);
                                        plusSprite.setVisible(false);
                                        money_calculate_interval;
                                        track_interval=setInterval(function(){
                                        //console.log("Timer started...........");
                                        addBusinessLabel.string="time left: "+time_left+" sec";
                                        --time_left;
                                        if(time_left===0){
                                            clearInterval(track_interval);
                                            collectMoneyLabel.setVisible(true);
                                            collectMoneyAmount.setVisible(true);
                                            collectMoneySprite.setVisible(true);
                                            track_business=0;
                                            dollar_sprite.setVisible(true);
                                            track_amount=0;
                                            amount=0;
                                            //clearInterval(money_calculate_interval);
                                            money_calculate_interval;
                                            //money_calculate_interval;
                                            building.setVisible(false);
                                            testSprite.setVisible(true);
                                            
                                            setInterval(function(){
                                                            if(amount===30){
                                                                track_amount++;
                                                                amount=0;
                                                            }
                                                collectMoneyAmount.string=track_amount+"";
                                                amount++;
                                            },10);
                                            collectMoneyAmount.setVisible(true);
                                            collectMoneySprite.setVisible(true);
                                            collectMoneyLabel.setVisible(true);
                                            cart_sprite.runAction(moveTo_action);
                                            cart_sprite.setVisible(true);
                                            arrow_left_sprite.setVisible(false);
                                            arrow_right_sprite.setVisible(true);
                                           
                                            addBusinessLabel.setVisible(false);




                                            /*
                                            Money collection code here start
                                            
                                            */

                                            



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
                                    
                                
                                
                                       
                             
                           }if(event.getLocationInView().x>=583 && event.getLocationInView().x<=617){
                                if((event.getLocationInView().y>=301 && event.getLocationInView().y<=335) && arrow_right_sprite.isVisible()){
                                    //alert("right button pressed.....");
                                    
                                    if(track_business===my_business_arr.length){
                                        //arr_for_left[head_pointer]=my_business_arr[track_business-1];
                                        //head_pointer++;
                                        my_business_arr[track_business-1].runAction(moveToright_action);
                                        
                                        testSprite.setVisible(false);
                                        arrow_left_sprite.setVisible(true);
                                        building.setPosition(size.width/2*(-1),size.height/2-50);
                                        collectMoneyAmount.setVisible(false);
                                        collectMoneySprite.setVisible(false);
                                        collectMoneyLabel.setVisible(false);
                                        addBusinessLabel.setPosition(cc.p(500,150));
                                        addBusinessLabel.string="Add your Business";
                                        clearInterval(track_interval);
                                        time_left=10;
                                        plusSprite.setVisible(true);
                                        addBusinessLabel.setVisible(true);
                                        track_business--;
                                        cart_sprite.setPosition(size.width/2*(-1),size.height/2-50);
                                        arrow_right_sprite.setVisible(false);
                                        //arrow_left_sprite.setVisible(false);


                                    }else{
                                        if(track_business!=0){
                                            //arr_for_left[head_pointer]=my_business_arr[track_business-1];
                                            //head_pointer++;
                                            my_business_arr[track_business-1].runAction(moveToright_action);
                                            

                                           
                                        }
                                        

                                        cart_sprite.setVisible(false);
                                        //arr_for_left[head_pointer]=my_business_arr[track_business];
                                        //head_pointer++;
                                        my_business_arr[track_business].runAction(moveTo_action);
                                        active_sprite++;
                                        head_sprite++;
                                        track_business++;
                                       
                                    }
                                    
                                }

                           }
                           if(event.getLocationInView().x>=315  && event.getLocationInView().x<=370){
                            if (event.getLocationInView().y>=519 && event.getLocationInView().y<=557) {
                                //console.log(event.getLocationInView());
                                
                               // dollar_sprite.setVisible(true);
                                //dollar_sprite.stopAction(sec);
                               
                                dollar_sprite.runAction(sec);
                                
                                show_total_balance+=track_amount;
                                total_balance.string=show_total_balance+"";
                                track_amount=0;
                               
                                //dollar_sprite.setPosition(cc.p(size.width-200,size.height/3));
                                //dollar_sprite.setVisible(false);
                            }
                                
                           }

                           if(event.getLocationInView().x>=332 && event.getLocationInView().x<=370){
                                if((event.getLocationInView().y>=307 && event.getLocationInView().y<=340)&& arrow_left_sprite.isVisible()){
                                    

                                    plusSprite.setVisible(false);
                                    addBusinessLabel.setVisible(false);
                                    collectMoneyAmount.setVisible(true);
                                    collectMoneySprite.setVisible(true);
                                    collectMoneyLabel.setVisible(true);
                                        
                                        
                                    if(track_business>0 && track_business!=2){
                                        console.log(track_business);

                                            my_business_arr[track_business+1].runAction(moveToOrigin);
                                            my_business_arr[track_business].runAction(moveToleftAction);
                                            // track_business--;
                                       
                                        
                                    }
                                    
                                    if(track_business===2){
                                        //console.log("Finished task..........");
                                        my_business_arr[track_business].runAction(moveToleftAction);
                                        // track_business--;
                                       
                                    }
                                    
                                   if(track_business===0){
                                       my_business_arr[track_business+1].runAction(moveToOrigin);
                                       my_business_arr[track_business].runAction(moveToleftAction);
                                       //track_business--;
                                    }
                                    if(track_business<0){
                                        my_business_arr[track_business+1].runAction(moveToOrigin);
                                        plusSprite.setVisible(true);
                                        addBusinessLabel.setVisible(true);
                                        arrow_right_sprite.setVisible(true);
                                        arrow_left_sprite.setVisible(false);
                                        collectMoneyLabel.setVisible(false);
                                        collectMoneyAmount.setVisible(false);
                                        collectMoneySprite.setVisible(false);
                                        track_business=0;
                                        return;

                                    }
                                    track_business--;
                                   
                                    
                                }

                               

                          }
                           
                           else{
                                    //console.log(event.getLocationInView());
                             }
                            //}
                        }
                    }
                }

                ,this);
            }

           


        /*
            touch event integration start
        */




        /*
            touch event integration end
        */
        if(cc.sys.capabilities.hasOwnProperty("touches")){

            cc.eventManager.addListener({
                event:cc.EventListener.TOUCH_ONE_BY_ONE,
                onTouchBegan:function(touch,event){
                    console.log(touch.getLocationInView());

                }
            },this);

        }

        /*
            Test code end

        */
       
       
        return true;
    }
    
});

var play=function(){

    
  
}


var Highscore=function(){
    console.log("Highscore");
}


var Settings=function(){
    console.log("Settings");
}

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var name="jobayer";
        var layer = new HelloWorldLayer(name);
        this.addChild(layer);
    }
});

