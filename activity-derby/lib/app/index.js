var derby = require('derby')
  , app = derby.createApp(module)
  , get = app.get
  , view = app.view
  , ready = app.ready
  , start = +new Date()

derby.use(require('../../ui'))



process.nextTick(function () {
    console.log('nextTick callback');
});

// Derby routes can be rendered on the client and the server
get('/rooms/:roomName?', function(page, model, params) {
  var roomName = params.roomName || 'home'

  // Subscribes the model to any updates on this room's object. Calls back
  // with a scoped model equivalent to:
  //   room = model.at('rooms.' + roomName)

  model.subscribe('rooms.' + roomName, function(err, room) {
    model.ref('_room', room)

    // setNull will set a value if the object is currently null or undefined
    room.setNull('welcome', 'Welcome to ' + roomName + '!')

    room.incr('visits')

    // This value is set for when the page initially renders
    model.set('_timer', '0.0')
    // Reset the counter when visiting a new route client-side
    start = +new Date()

    // Render will use the model data as well as an optional context object
    page.render({
      roomName: roomName
    , randomUrl: parseInt(Math.random() * 1e9).toString(36)
    })
  })
})

get('/activities', function(page, model, params) {
    // var roomName = params.roomName || 'home'

    /*
     {'content': "test1", "comments": [{content:'test1',author:"Samer"},{content:'test3',author:'David'}] },
     {'content': "test1", "comments": [{content:'test1',author:"Samer"},{content:'test3',author:'David'}] },
     {'content': "test1", "comments": [{content:'test1',author:"Samer"},{content:'test3',author:'David'}] },
     {'content': "test1", "comments": [{content:'test1',author:"Samer"},{content:'test3',author:'David'}] }
     */

    /*
    var myDummy = new Array();
    for(i=0; i<6; i++){
        personObj=new Object();
        personObj.content=Math.random();
        myDummy.push(personObj);
    };
    */

    // @todo: https://github.com/molnarg/js-schema/blob/master/README.md
    // @todo: http://stackoverflow.com/questions/5311334/what-is-the-purpose-of-nodejs-module-exports-and-how-do-you-use-it
    // @todo: http://visionmedia.github.com/masteringnode/book.html
    // @todo: http://stackoverflow.com/questions/5722638/node-js-rss-module
    // @todo: http://howtonode.org/understanding-process-next-tick

    // ROUTES //
    var test = ([
        {'content': "test1", "comments": [{content:'test1',author:"Samer"},{content:'test3',author:'David'}] },
        {'content': "test5", "comments": [{content:'test1',author:"Samer"},{content:'test3',author:'David'}] }
    ]);

    model.set("_newActivity","HERE");

    model.setNull('activities.list',test);

    model.subscribe('activities', function(err, model) {
        console.log('app.get.subscribe');
        page.render();
    });

})

// CONTROLLER FUNCTIONS //

ready(function(model) {

    model.on('push','activities.list',function(model){
        console.log('ready.model.on.push');
    });

    app.postActivity = function (){
        comment = model.get("_newActivity");
        if(comment){
            model.push("activities.list",
                {'content': comment, "comments": [{content:'MyComment',author:"I'm His User"},{content:'Cool',author:'David'}]}
            );
        }

        mode.set("_newActivity");
    }
})