gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDGreen_9595Grass_95959PatchObjects1= [];
gdjs.Untitled_32sceneCode.GDGreen_9595Grass_95959PatchObjects2= [];
gdjs.Untitled_32sceneCode.GDMr_9595_9595ManObjects1= [];
gdjs.Untitled_32sceneCode.GDMr_9595_9595ManObjects2= [];
gdjs.Untitled_32sceneCode.GDParachuteObjects1= [];
gdjs.Untitled_32sceneCode.GDParachuteObjects2= [];
gdjs.Untitled_32sceneCode.GDIron_9595Knife_959530Objects1= [];
gdjs.Untitled_32sceneCode.GDIron_9595Knife_959530Objects2= [];
gdjs.Untitled_32sceneCode.GDHouseObjects1= [];
gdjs.Untitled_32sceneCode.GDHouseObjects2= [];
gdjs.Untitled_32sceneCode.GDLineDarkJoystickObjects1= [];
gdjs.Untitled_32sceneCode.GDLineDarkJoystickObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDNewButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDNewButtonObjects2= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("up-press").getAsString());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mr__Man"), gdjs.Untitled_32sceneCode.GDMr_9595_9595ManObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMr_9595_9595ManObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMr_9595_9595ManObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("left-press").getAsString());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mr__Man"), gdjs.Untitled_32sceneCode.GDMr_9595_9595ManObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMr_9595_9595ManObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMr_9595_9595ManObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMr_9595_9595ManObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMr_9595_9595ManObjects1[i].getBehavior("Animation").setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMr_9595_9595ManObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMr_9595_9595ManObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("right-press").getAsString());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mr__Man"), gdjs.Untitled_32sceneCode.GDMr_9595_9595ManObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMr_9595_9595ManObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMr_9595_9595ManObjects1[i].getBehavior("TopDownMovement").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMr_9595_9595ManObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMr_9595_9595ManObjects1[i].getBehavior("Animation").setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMr_9595_9595ManObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMr_9595_9595ManObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("bottun-press").getAsString());
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyReleased(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mr__Man"), gdjs.Untitled_32sceneCode.GDMr_9595_9595ManObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMr_9595_9595ManObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMr_9595_9595ManObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1[k] = gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mr__Man"), gdjs.Untitled_32sceneCode.GDMr_9595_9595ManObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMr_9595_9595ManObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMr_9595_9595ManObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDGreen_9595Grass_95959PatchObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGreen_9595Grass_95959PatchObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMr_9595_9595ManObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMr_9595_9595ManObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDParachuteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDParachuteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDIron_9595Knife_959530Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDIron_9595Knife_959530Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDHouseObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHouseObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDLineDarkJoystickObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLineDarkJoystickObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewButtonObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
gdjs.Untitled_32sceneCode.GDGreen_9595Grass_95959PatchObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGreen_9595Grass_95959PatchObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMr_9595_9595ManObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMr_9595_9595ManObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDParachuteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDParachuteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDIron_9595Knife_959530Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDIron_9595Knife_959530Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDHouseObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHouseObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDLineDarkJoystickObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLineDarkJoystickObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewButtonObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
