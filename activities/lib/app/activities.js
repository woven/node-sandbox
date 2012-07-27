var derby = require('derby')
  , app = derby.createApp(module)
  , get = app.get
  , view = app.view
  , ready = app.ready
  , start = +new Date()

derby.use(require('../../ui'))

get('/activities', function(page, model, params) {
    // var roomName = params.roomName || 'home'

    model.subscribe('activities', function(err, model) {

        // setNull will set a value if the object is currently null or undefined

        var myDummy = new Array();
        for(i=0; i<6; i++){
            myDummy.push(Math.random());
        };

        model.set("activities",myDummy);

        // Render will use the model data as well as an optional context object
        page.render({
            roomName: "Activities Page"
        })
    })
})


// CONTROLLER FUNCTIONS //

ready(function(model) {

})
