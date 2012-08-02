var derby = require('derby')
  , app = derby.createApp(module)
  , get = app.get
  , view = app.view
  , ready = app.ready
  , start = +new Date()


/*
process.nextTick(function () {
    console.log('nextTick callback');
});
*/


get('/', function(page, model, params) {

    // @todo: https://github.com/molnarg/js-schema/blob/master/README.md
    // @todo: http://stackoverflow.com/questions/5311334/what-is-the-purpose-of-nodejs-module-exports-and-how-do-you-use-it
    // @todo: http://visionmedia.github.com/masteringnode/book.html
    // @todo: http://stackoverflow.com/questions/5722638/node-js-rss-module
    // @todo: http://howtonode.org/understanding-process-next-tick

   //set private variable to empty
    model.set("_newActivity","");

    var myDummy = new Array();
    var time = new Date().getTime();

    for(i=0; i<4; i++){
        act=new Object();
        act.content = "CONTENT IS " + i;
        act.created = time - i;
        act.author = 'Woven';
        myDummy.push(act);
    };

    //model.setNull('activities.list',new Array());


    model.subscribe('activities', function(err, activity) {
        //list.sort("created","desc");
        //console.log(list.get());


        var list = model.at('activities').query('activities').getDesc();
        //console.log(posts);
        //model.ref('_list',posts);


        //var posts = model.filter('activities').sort("created","desc");
        //console.log(posts.get());

        //list = model.query('activities').sort("created","desc");
        //model.ref('_list',list);

        //console.log(list);

        //console.log(activity.sort(['created','desc']).get());

        page.render();
    });

})

// CONTROLLER FUNCTIONS //

ready(function(model) {

    model.on('push','activities',function(model){
        //console.log('ready.model.on.push');
    });

    app.postActivity = function (){
        comment = model.get("_newActivity");
        author = model.get("_author");

        if(comment){
            time = new Date().getTime();

            model.add("activities",{content: comment, created: time, author: 'Woven'});
        }else{
            alert('Please enter an activity message');
        }

        model.set("_newActivity","");
    }
})

function test(){
    var myDummy = new Array();
    var time = new Date().getTime();

    for(i=0; i<4; i++){
        act=new Object();
        act.content = "CONTENT IS " + i;
        act.created = time - i;
        act.author = 'Woven';
        myDummy.push(act);
    };
}